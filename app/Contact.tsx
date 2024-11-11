"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h4 className="text-4xl md:text-6xl text-transparent mb-4 bg-custom-gradient bg-clip-text mt-16">
        Contact
      </h4>
      <p className="max-w-md w-full p-6 font-bold text-justify">
        Have a question or want to work together? Leave your details and
        I&apos;ll get back to you as soon as possible
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="mb-4">
          <label className="text-transparent bg-custom-gradient bg-clip-text font-bold text-xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded border-none bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="text-transparent bg-custom-gradient bg-clip-text font-bold text-xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-1 rounded border-none bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="text-transparent bg-custom-gradient bg-clip-text font-bold text-xl">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-48 p-2 mt-1 rounded border-none bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-custom-gradient text-white py-2 rounded font-bold text-xl"
        >
          Submit
        </button>
        <p className="max-w-md w-full p-6 font-bold text-justify">{status}</p>
      </form>
    </div>
  );
};

export default Contact;
