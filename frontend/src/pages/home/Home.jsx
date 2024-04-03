import React, { useEffect, useState } from "react";
import blog from "../../assets/vectorBlogImage.svg";
import chat from "../../assets/chat app.svg";
import echo from "../../assets/echowave.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Hero from "../../components/Hero";

const Home = () => {

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
    <div>
      <Hero />
      <div className="w-full py-6 px-4 sm:px-6">
        <h1 className="text-2xl text-center mb-4 font-extrabold lg:text-start lg:text-4xl lg:my-6">
          Let's Build Your Dream Website, Together
        </h1>
        <p className="text-center font-semibold lg:text-start lg:text-xl">
          Welcome to our collaborative website-building journey! Here, we
          believe in the power of teamwork and creativity. Together, we'll craft
          your dream website, tailored to your vision and goals. Whether you're
          envisioning a sleek portfolio, an engaging e-commerce platform, or an
          interactive blog, we're here to bring your ideas to life. With our
          combined expertise and your unique perspective, we'll design a digital
          space that not only reflects your brand but also resonates with your
          audience. Let's embark on this exciting adventure together and create
          something truly exceptional!
        </p>
      </div>

      <div className="w-full min-h-fit bg-[rgb(9,88,124)] text-white  clip-polygon-2 mb-3 px-4 py-4 sm:px-6">
        <div className="w-full min-h-screen px-2 py-6">
          <h1 className="text-xl sm:text-2xl text-center mb-4 font-bold lg:text-start lg:text-4xl lg:mb-10">
            Some of our creations
          </h1>
          <div className="flex flex-nowrap min-w-full flex-col gap-5 sm:gap-6 ">
            <Swiper
              spaceBetween={50}
              slidesPerView={windowWidth > 768 ? 2 : 1}
              className="w-full"
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 2000, disableOnInteraction: true }}
            >
              <SwiperSlide>
                <div className="w-full min-h-[70vh] border-2 border-white rounded-md overflow-hidden px-4 sm:px-3 py-4 flex flex-col items-center ">
                  <img src={blog} alt="blog" className="rounded-md" />
                  <h1 className="my-2 font-bold uppercase text-xl">
                    BlogWebsite
                  </h1>
                  {/* <Link to={"/"} > */}
                  <button
                    type="button"
                    className="text-center  rounded-lg  py-2 w-full bg-[rgb(0,31,84)] hover:opacity-80 font-semibold mb-2"
                  >
                    Know More
                  </button>
                  {/* </Link> */}
                  <p className="text-xs sm:text-base   text-center">
                    Introducing the latest marvel from Hyperfy: our MERN-based
                    blogsite! Crafted with meticulous attention to detail, this
                    platform boasts full responsiveness across all devices.
                    Seamlessly blending cutting-edge technology with
                    user-centric design, our blogsite is poised to revolutionize
                    your online presence. Experience innovation like never
                    before with Hyperfy.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-[70vh] border-2 border-white rounded-md overflow-hidden px-4 sm:px-3  py-4 flex flex-col items-center ">
                  <img src={chat} alt="blog" className="rounded-md" />
                  <h1 className="my-2 font-bold uppercase text-xl">Chat app</h1>
                  {/* <Link to={"/"} > */}
                  <button
                    type="button"
                    className="text-center  rounded-lg  py-2 w-full bg-[rgb(0,31,84)] hover:opacity-80 font-semibold mb-2"
                  >
                    Know More
                  </button>
                  {/* </Link> */}
                  <p className="text-xs sm:text-base   text-center">
                    Discover the ultimate chat experience with our MERN-based
                    app developed by Hyperfy. Seamlessly crafted with full
                    responsiveness in mind, our platform revolutionizes
                    communication. Engage effortlessly across devices, from
                    desktops to smartphones, ensuring connectivity wherever you
                    go. Join the conversation today and elevate your chatting
                    experience with Hyperfy.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full min-h-[70vh] border-2 border-white rounded-md overflow-hidden px-4 sm:px-3 py-4 flex flex-col items-center ">
                  <img src={echo} alt="blog" className="rounded-md" />
                  <h1 className="my-2 font-bold uppercase text-center  text-xl">
                    EchoWave SocialMedia App
                  </h1>
                  {/* <Link to={"/"} > */}
                  <button
                    type="button"
                    className="text-center  rounded-lg  py-2 w-full bg-[rgb(0,31,84)] hover:opacity-80 font-semibold mb-2"
                  >
                    Know More
                  </button>
                  {/* </Link> */}
                  <p className="text-xs sm:text-base  text-center">
                    Introducing EchoWave, the latest social media sensation
                    crafted by Hyperfy. Built with the cutting-edge MERN stack,
                    EchoWave offers unparalleled responsiveness across all
                    devices. Experience seamless connectivity, innovative
                    features, and a vibrant community.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
