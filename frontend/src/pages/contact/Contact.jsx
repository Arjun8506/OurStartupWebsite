import React, { useState } from "react";
import conatctImage from "../../assets/Contactus.jpg";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setformData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full min-h-screen py-4 px-4">
      <h1 className="text-2xl text-center font-extrabold uppercase mb-4">Contact Us</h1>
      <div className="w-full">
        <img src={conatctImage} alt="" className="w-full rounded-lg" />
      </div>
      <h1 className="text-2xl mt-4">Contact Form</h1>
      <form
        className="px-4 py-4 mt-4 border-[1px] border-black rounded-lg flex flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          id="name"
          className="py-1 px-2 w-full bg-[rgb(0,31,84)]/20 rounded-lg "
          value={formData.name}
          onChange={(e) => setformData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          id="email"
          className="py-1 px-2 w-full bg-[rgb(0,31,84)]/20 rounded-lg "
          value={formData.email}
          onChange={(e) => setformData({ ...formData, email: e.target.value })}
        />
        <textarea
          id="message"
          placeholder="Message"
          className="py-1 px-2 w-full bg-purple-800/20 rounded-lg "
          value={formData.message}
          onChange={(e) =>
            setformData({ ...formData, message: e.target.value })
          }
        />
        <input
          type="submit"
          value="Send Message"
          className="bg-[rgb(0,31,84)] text-white w-full py-2 mt-2 rounded-lg hover:opacity-90"
        />
      </form>
    </div>
  );
};

export default Contact;
