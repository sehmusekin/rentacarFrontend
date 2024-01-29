import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../images/contact.jpg";
function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46ikwls",
        "template_yri41sa",
        form.current!,
        "eH_Rf6GYH5NogdNfx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-900 container mx-auto rounded-3xl my-10">
      <div className="basis-2/3 py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <label className="block  font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="user_name"
            className="shadow-sm border  text-sm rounded-lg  block w-full p-2.5"
          />
          <label className="block font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="user_email"
            className="shadow-sm border  text-sm rounded-lg  block w-full p-2.5"
          />
          <label className="block  font-medium text-gray-300">Message</label>
          <textarea
            name="message"
            className="shadow-sm border  text-sm rounded-lg  block w-full p-2.5"
          />
          <input
            type="submit"
            value="Send"
            className="shadow-sm border cursor-pointer  text-sm rounded-lg  block  px-5 py-2 text-white font-bold"
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
