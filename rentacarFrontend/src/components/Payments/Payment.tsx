import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./PaymentPage.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51OYB1oKUaOhnJmtjiHtF7tZHgl1BZTS4eXhXVLQQHdSjvHkJ2LwNshUFQS1fOS6YKwL2FZSvqwafRTeFIbhGvdA800LqEIfP0r"
);

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = () => {
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8080/public/stripe/card/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jsonwebtoken"),
      },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe" as const,
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="h-screen flex justify-center bg-black items-center">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
