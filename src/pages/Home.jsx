import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="w-full min-h-[85vh] md:min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-center items-center py-16 md:py-24 px-4 sm:px-6 lg:px-8" data-component-name="HERO 4" data-sidebar-id="Hero-3" style={{ position: 'relative', zIndex: '10' }} data-layer-id="layer-0-0" data-aos="zoom-in-down">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center" >
    {/*  Content Section  */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left" >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"  data-aos="fade-up-right">
        Unlock Your Potential with <span className="text-indigo-600 dark:text-indigo-400" >Innovative Solutions</span>
      </h1>
      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg"  data-aos="fade-down-left">Empower your business with cutting-edge technology and seamless experiences, designed for growth and efficiency.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-950 transition ease-in-out duration-300" >Get Started</a>
        <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-red-300 dark:border-slate-700 font-medium rounded-md shadow-sm bg-red-600 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-950 transition ease-in-out duration-300 text-[#cbd5e1] dark:text-[#10b981] relative overflow-hidden" style={{ '--dark-color': '#10b981', position: 'relative', overflow: 'hidden' }}><div className="builder-media-overlay absolute inset-0 pointer-events-none z-[1]" data-overlay="dark" data-overlay-opacity="75" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}></div><video src="/videos/tech-matrix.mp4" muted="" loop="" playsinline="" webkit-playsinline="" autoplay="" className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover pointer-events-none z-0" style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', minWidth: '100%', minHeight: '100%', objectFit: 'cover', objectPosition: 'center', pointerEvents: 'none', zIndex: '0' }}></video>Learn More</a>
      </div>
    </div>

    {/*  Image Section  */}
    <div className="flex justify-center md:justify-end" >
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" alt="Modern workspace with laptop and creative tools" className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-indigo-900/20"  data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-once="false" data-aos-delay="400" data-aos-duration="1450" />
    </div>
  </div>
</section><section className="relative bg-white dark:bg-gray-900 overflow-hidden" data-component-name="HERO 3" data-sidebar-id="Hero-2" style={{ position: 'relative', zIndex: '10' }} data-layer-id="layer-1-1">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="relative z-10 md:grid md:grid-cols-2 md:gap-8 lg:gap-16 items-center">
      {/*  Content Area  */}
      <div className="text-center md:text-left mb-10 md:mb-0" >
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block xl:inline" >Your Digital Presence,</span>
          <span className="block text-indigo-600 dark:text-indigo-500 xl:inline" >Perfected.</span>
        </h1>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:mx-0" >
          We help businesses craft stunning, responsive, and high-performing websites that captivate audiences and drive growth.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
          <a href="#" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out" >
            Get Started
          </a>
          <a href="#" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out">
            Learn More
          </a>
        </div>
      </div>

      {/*  Image Area  */}
      <div className="relative w-full h-80 sm:h-96 md:h-full md:mt-0 lg:ml-auto">
        <img className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg dark:shadow-xl" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Modern web development illustration"  />
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default Home;