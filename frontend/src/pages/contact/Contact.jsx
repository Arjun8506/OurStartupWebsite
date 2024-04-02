import React, { useState } from "react";
import conatctImage from "../../assets/Contactus.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return toast.error("All fields Are Mandatery!");
    }
    try {
      setloading(true);
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setloading(false);
        toast.error(data.message);
        return;
      }
      setloading(false);
      toast.success(data.message)
      navigate("/")
    } catch (error) {
      setloading(false)
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen py-4 mt-24 sm:mt-28">
      <h1 className="text-2xl text-center font-extrabold uppercase mb-4 px-4 sm:text-3xl">
        Contact Us
      </h1>
      <div className="w-full px-4 sm:px-8">
        <img src={conatctImage} alt="" className="w-full rounded-lg" />
      </div>
      <h1 className="text-2xl mt-4 font-extrabold px-4 sm:px-8 sm:text-3xl">Let's Talk</h1>
      <div className="w-full min-h-fit bg-[rgb(18,130,162)] clip-polygon-2 py-4 px-4 sm:px-8 sm:py-6">
        <form
          className=" px-4  py-4 mt-4 border-[2px] text-white  border-white rounded-lg flex flex-col items-center gap-3 sm:gap-5 sm:py-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="py-1 px-2 w-full bg-[rgb(0,31,84)] rounded-lg focus:outline-none"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address"
            id="email"
            className="py-1 px-2 w-full bg-[rgb(0,31,84)] rounded-lg focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            id="message"
            placeholder="Message"
            className="py-1 px-2 w-full bg-[rgb(0,31,84)] rounded-lg focus:outline-none"
            value={formData.message}
            onChange={(e) =>
              setformData({ ...formData, message: e.target.value })
            }
          />
          <input
            type="submit"
            value={loading ? "Sending Message..." : "Send Message"}
            className="bg-[rgb(0,31,84)] text-white w-full py-2 mt-2 rounded-lg hover:opacity-90 disabled:opacity-50"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
