import React from 'react'
import Hero from '../../components/Hero'
import blog from "../../assets/blogsite.png"

const Home = () => {
  return (
    <div>
        <div className='w-full py-6 px-4 '>
          <h1 className='text-2xl text-center mb-4 font-extrabold'>Let's Build Your Dream
Website, Together</h1>
          <p className='text-center font-semibold'>Welcome to our collaborative website-building journey! Here, we believe in the power of teamwork and creativity. Together, we'll craft your dream website, tailored to your vision and goals. Whether you're envisioning a sleek portfolio, an engaging e-commerce platform, or an interactive blog, we're here to bring your ideas to life. With our combined expertise and your unique perspective, we'll design a digital space that not only reflects your brand but also resonates with your audience. Let's embark on this exciting adventure together and create something truly exceptional!</p>
        </div>

        <div className='w-full min-h-screen bg-black text-white  clip-polygon-2 mb-3'>
          <div className='w-full min-h-screen px-4 py-8'>
            <h1 className='text-2xl text-center '>Some of our creations</h1>
            <div>
                <div className='w-full h-[70vh] border-2 border-white rounded-md overflow-hidden px-2 py-4'>
                  <img src={blog} alt="blog" className='rounded-md'/>
                  <h1>BlogWebsite</h1>
                  <p></p>
                </div>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Home