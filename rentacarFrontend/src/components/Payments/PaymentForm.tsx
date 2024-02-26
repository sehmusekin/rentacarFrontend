// PaymentForm.tsx
import React, { useState } from "react";
import axios from "axios";

interface PaymentInfo {
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  username: string;
 
}

const PaymentForm: React.FC = () => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    username: "",

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/public/stripe/card/token",
        paymentInfo
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cardNumber"
        value={paymentInfo.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
      />
      <input
        type="text"
        name="expMonth"
        value={paymentInfo.expMonth}
        onChange={handleChange}
        placeholder="Expiration Month"
      />
      <input
        type="text"
        name="expYear"
        value={paymentInfo.expYear}
        onChange={handleChange}
        placeholder="Expiration Year"
      />
      <input
        type="text"
        name="cvc"
        value={paymentInfo.cvc}
        onChange={handleChange}
        placeholder="CVC"
      />
      <input
        type="text"
        name="username"
        value={paymentInfo.username}
        onChange={handleChange}
        placeholder="Username"
      />
  
      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
