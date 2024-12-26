import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


const Bannar = () => {
    return (
        <div className='lg:m-10 m-0'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="bg-bannar3 bg-cover bg-no-repeat bg-center lg:h-full py-40 lg:py-64">
                        <div className="lg:w-5/12 w-full mx-auto   rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-white'>"Stay on Top of Your Assignments"</h1>
                            <p className='font-bold text-xl text-[#754738]'>"Never miss a deadline! Track, submit, and review all your assignments in one place."</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar1 bg-cover bg-center bg-no-repeat lg:h-full py-40 lg:py-64">
                        <div className="lg:w-5/12 w-full mx-auto   rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-white'>Empower Your Learning Journey</h1>
                            <p className='font-bold text-xl text-[#715d57]'>"Unlock a world of knowledge with StudyCircle. Organize, learn, and succeed like never before."</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar2 bg-cover bg-center bg-no-repeat lg:h-full py-40 lg:py-64">
                        <div className="lg:w-5/12 w-full mx-auto  rounded-2xl py-16">
                            <h1 className='font-bold text-3xl text-white'>Collaborate, Create, Conquer</h1>
                            <p className='font-bold text-xl text-[#754738]'>"Join a community of learners and achievers. Share your goals, work together, and grow."</p>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Bannar;