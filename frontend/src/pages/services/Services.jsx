import React from 'react'
import website from "../../assets/website.jpg"
import seo from "../../assets/seo.jpg"
import uiux from "../../assets/uius.jpg"

const Services = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full min-h-screen py-8 px-4'>
        <h1 className='text-2xl text-center uppercase font-extrabold'>Our Services</h1>
        <div className='flex flex-col gap-5 border-2 rounded-lg border-purple-700 mt-6'>
            <div className='w-full min-h-[65vh] px-3 py-2 rounded-lg overflow-hidden flex flex-col gap-4 items-center'>
              <img src={website} alt="" className='rounded-lg'/>
              <div>
              <h1 className='text-center text-xl font-bold mb-4'>Website Development</h1>
              <p className='text-center text-sm'>Our company specializes in website development services, crafting dynamic and responsive websites tailored to your needs. From sleek designs to seamless functionality, we ensure your online presence stands out. Let us bring your vision to life and create a digital platform that captivates your audience.</p>
              </div>
            </div>
        </div>
        <div className='flex flex-col gap-5 border-2 rounded-lg border-purple-700 mt-6'>
            <div className='w-full min-h-[65vh] px-3 py-2 rounded-lg overflow-hidden flex flex-col gap-4 items-center'>
              <img src={seo} alt="" className='rounded-lg'/>
              <div>
              <h1 className='text-center text-xl font-bold mb-4'>Search Engine Optimization</h1>
              <p className='text-center text-sm'>We provide expert SEO services to boost your online visibility and drive organic traffic to your website. With strategic keyword optimization, content enhancements, and technical SEO expertise, we optimize your site for search engines. Trust us to elevate your digital presence and increase your website's ranking.</p>
              </div>
            </div>
        </div>
        <div className='flex flex-col gap-5 border-2 rounded-lg border-purple-700 mt-6'>
            <div className='w-full min-h-[65vh] px-3 py-2 rounded-lg overflow-hidden flex flex-col gap-4 items-center'>
              <img src={uiux} alt="" className='rounded-lg'/>
              <div>
              <h1 className='text-center text-xl font-bold mb-4'>UI/UX Design</h1>
              <p className='text-center text-sm'>Our UI/UX design services are geared towards creating visually stunning and user-friendly digital experiences. From intuitive interfaces to captivating user journeys, we craft designs that engage and delight. Let us transform your ideas into seamless and aesthetically pleasing designs that elevate your brand's online presence.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services