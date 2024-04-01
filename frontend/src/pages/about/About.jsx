import React from "react";
import arjun from "../../assets/my.jpeg"

const About = () => {
  return (
    <div className="w-full min-h-screen py-8">
      <h1 className="text-2xl mb-4 uppercase font-bold text-center">About Our <br />StartUp</h1>
      <p className="text-center text-sm px-4">
        Hyperfy, a company founded by us, is
        dedicated to providing top-notch services in website development, SEO,
        and UI/UX design. With a shared vision of delivering innovative
        solutions tailored to meet the unique needs of clients, Hyperfy is
        committed to excellence and client satisfaction. Our team brings
        together a wealth of experience and expertise, ensuring that every
        project is executed with precision and creativity. At Hyperfy, we strive
        to stay ahead of industry trends and technological advancements,
        enabling us to deliver cutting-edge solutions that drive results for our
        clients. Whether it's crafting engaging websites, optimizing search
        engine rankings, or designing intuitive user experiences, Hyperfy is
        your trusted partner for digital success.
      </p>

        <div className="w-full h  flex flex-col items-center gap-4 px-4 my-5">
            <h1 className="text-2xl font-bold">About Us</h1>
            <div className="w-full h-64  border-2 border-black p-2 rounded-lg hover:shadow-2xl shadow-purple-700">
                <img src={arjun} alt="" className="w-full h-[80%] aspect-square object-cover rounded-lg" />
            <h1 className="text-center uppercase font-bold mt-2 text-xl">Arjun Nagar</h1>
            </div>
            <div className="w-full h-64  border-2 border-black p-2 rounded-lg hover:shadow-2xl shadow-purple-700">
                <img src={arjun} alt="" className="w-full h-[80%] aspect-square object-cover rounded-lg" />
            <h1 className="text-center uppercase font-bold mt-2 text-xl">Arjun Nagar</h1>
            </div>
            <div className="w-full h-64  border-2 border-black p-2 rounded-lg hover:shadow-2xl shadow-purple-700">
                <img src={arjun} alt="" className="w-full h-[80%] aspect-square object-cover rounded-lg" />
            <h1 className="text-center uppercase font-bold mt-2 text-xl">Arjun Nagar</h1>
            </div>
        </div>

    </div>
  );
};

export default About;
