"use client";
import { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Content_Type: "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="">
        <label htmlFor="username" className="">
          Enter your name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className="border-2 border-black ml-2"
            value={user.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="">
        <label htmlFor="email" className="">
          Email
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border-2 border-black ml-2"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <div className="">
        <label htmlFor="phone" className="">
          Phone Number
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            className="border-2 border-black ml-2"
            value={user.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </label>
      </div>

      <label htmlFor="message" className="">
        Message
      </label>
      <div className="">
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="Enter your Message"
          className="border-2 border-black ml-2"
          value={user.message}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>

      <div>
        {status === "success" && (
          <p className="">Thank you for your message!</p>
        )}
        {status === "error" && (
          <p className="">
            There was an error submitting your message. Please try again.
          </p>
        )}

        <button type="submit" className="border-2 border-black p-1 text-sm">

          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
