import React from "react";
import website from "../../assets/website.jpg";
import seo from "../../assets/seo.jpg";
import uiux from "../../assets/uius.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Services = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full min-h-screen py-4  mt-32 sm:mt-24 md:mt-28 lg:mt-32">
        <h1 className="text-2xl sm:text-3xl text-center uppercase font-extrabold px-4 lg:text-start lg:px-10 lg:text-4xl">
          Our Services
        </h1>

        <div className="text-sm sm:text-base font-semibold mt-5 px-4 sm:px-6 ">
          <p className="text-center lg:text-start lg:px-8 lg:text-xl">
            Discover the plethora of services offered by our company, featuring
            irresistible key benefits:
          </p>
          <ul className="list-none mt-2 sm:my-4 sm:text-lg font-bold">
            <li>✔️ Complimentary website development.</li>
            <li>✔️ Enjoy one month of free maintenance.</li>
            <li>✔️ Receive one year of complimentary domain and hosting.</li>
          </ul>
        </div>

        <div className="clip-polygon-2 w-full min-h-fit bg-[rgb(18,130,162)] py-4 px-4 text-white sm:px-8 sm:py-8 lg:px-16">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="w-full"
            modules={[Autoplay]}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: true }}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-5 border-2 rounded-lg border-purple-300 mt-6">
                <div className="w-full min-h-[65vh] px-3 py-2 rounded-lg overflow-hidden flex flex-col gap-4 items-center sm:px-5 sm:py-4 lg:flex-row">
                  <img src={website} alt="" className="rounded-lg lg:w-[50%]" />
                  <div className="">
                    <h1 className="text-center text-xl sm:text-2xl  font-bold mb-4 lg:text-start">
                      Website Development
                    </h1>
                    <p className="text-center text-sm sm:text-base lg:text-start">
                      Our company specializes in website development services,
                      crafting dynamic and responsive websites tailored to your
                      needs. From sleek designs to seamless functionality, we
                      ensure your online presence stands out. Let us bring your
                      vision to life and create a digital platform that
                      captivates your audience.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-5 border-2 rounded-lg border-purple-300 mt-6">
                <div className="w-full min-h-[65vh] px-3 py-2 rounded-lg overflow-hidden flex flex-col gap-4 items-center sm:px-5 sm:py-4 lg:flex-row">
                  <img src={seo} alt="" className="rounded-lg lg:w-[50%]" />
                  <div>
                    <h1 className="text-center text-xl sm:text-2xl font-bold mb-4 lg:text-start">
                      Search Engine Optimization
                    </h1>
                    <p className="text-center text-sm sm:text-base lg:text-start" >
                      We provide expert SEO services to boost your online
                      visibility and drive organic traffic to your website. With
                      strategic keyword optimization, content enhancements, and
                      technical SEO expertise, we optimize your site for search
                      engines. Trust us to elevate your digital presence and
                      increase your website's ranking.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-5 border-2 rounded-lg border-purple-300 mt-6">
                <div className="w-full min-h-[65vh] px-3 py-2 rounded-lg overflow-hidden flex flex-col gap-4 items-center sm:px-5 sm:py-4 lg:flex-row">
                  <img src={uiux} alt="" className="rounded-lg lg:w-[50%]" />
                  <div>
                    <h1 className="text-center text-xl sm:text-2xl font-bold mb-4 lg:text-start">
                      UI/UX Design
                    </h1>
                    <p className="text-center text-sm sm:text-base lg:text-start">
                      Our UI/UX design services are geared towards creating
                      visually stunning and user-friendly digital experiences.
                      From intuitive interfaces to captivating user journeys, we
                      craft designs that engage and delight. Let us transform
                      your ideas into seamless and aesthetically pleasing
                      designs that elevate your brand's online presence.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Services;
