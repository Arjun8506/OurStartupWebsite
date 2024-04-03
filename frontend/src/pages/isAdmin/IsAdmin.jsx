import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IsAdmin = () => {
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    getAllMessages();
  }, []);

  const getAllMessages = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/allmessages");
      const data = await res.json();
      setmessages(data.messages);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full min-h-fit py-8 mt-20 sm:mt-24 md:mt-28">
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-center mb-5 uppercase">
        All Request Messages Here
      </h1>
      <div className="overflow-x-auto px-10">
        <table className="table-auto w-full border-collapse border text-xs">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email ID</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {message.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {message.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 whitespace-wrap sm:whitespace-normal flex flex-wrap overflow-hidden text-wrap">
                    {message.message}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center" colSpan="4">
                  No messages available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IsAdmin;
