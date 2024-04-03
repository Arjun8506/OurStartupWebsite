import React, { useEffect, useState } from "react";
import arjun from "../../assets/my.jpeg";
import prakash from "../../assets/prakash.jpg";
import himanshu from "../../assets/himanshu.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const About = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full min-h-screen py-8 mt-20 sm:mt-24 md:mt-28">
      <h1 className="text-2xl mb-4 uppercase font-bold text-center  lg:text-start lg:px-10 lg:text-4xl">
        About Our
        StartUp
      </h1>
      <p className="text-center text-xs px-4 sm:text-sm lg:text-start lg:text-base">
        Hyperfy, a company founded by us, is dedicated to providing top-notch
        services in website development, SEO, and UI/UX design. With a shared
        vision of delivering innovative solutions tailored to meet the unique
        needs of clients, Hyperfy is committed to excellence and client
        satisfaction. Our team brings together a wealth of experience and
        expertise, ensuring that every project is executed with precision and
        creativity. At Hyperfy, we strive to stay ahead of industry trends and
        technological advancements, enabling us to deliver cutting-edge
        solutions that drive results for our clients. Whether it's crafting
        engaging websites, optimizing search engine rankings, or designing
        intuitive user experiences, Hyperfy is your trusted partner for digital
        success.
      </p>

      <div className="w-full h  flex flex-col items-center text-white  gap-4 px-4 my-5 py-8 bg-[rgb(14,84,124)] clip-polygon-2">
        <h1 className="text-start text-2xl sm:text-4xl font-bold ">About us</h1>

        <Swiper
          spaceBetween={50}
          slidesPerView={windowWidth > 768 ? 2 : 1}
          className="w-full"
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: true }}
        >
          <SwiperSlide>
            <div className="w-full h-64 sm:h-96  border-2 border-white p-2 rounded-lg hover:shadow-2xl shadow-purple-700">
              <img
                src={arjun}
                alt=""
                className="w-full h-[80%] aspect-square object-cover sm:object-center md:object-contain rounded-lg"
              />
              <h1 className="text-center uppercase font-bold mt-2 text-xl sm:text-2xl sm:mt-5">
                Arjun Nagar
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-64 sm:h-96 border-2 border-white p-2 rounded-lg hover:shadow-2xl shadow-purple-700">
              <img
                src={prakash}
                alt=""
                className="w-full h-[80%] aspect-square object-cover sm:object-center md:object-contain rounded-lg"
              />
              <h1 className="text-center uppercase font-bold mt-2 text-xl sm:text-2xl sm:mt-5">
                Prakash
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-64 sm:h-96 border-2 border-white  p-2 rounded-lg hover:shadow-2xl shadow-purple-700">
              <img
                src={himanshu}
                alt=""
                className="w-full h-[80%] aspect-square object-cover sm:object-center md:object-contain rounded-lg"
              />
              <h1 className="text-center uppercase font-bold mt-2 text-xl sm:text-2xl sm:mt-5">
                Himanshu Singh
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
