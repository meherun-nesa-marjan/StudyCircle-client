import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import * as motion from "motion/react-client"

const Bannar = () => {
    return (
        <div className='py-5'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="bg-bannar3 bg-cover bg-no-repeat bg-center h-48 py-56">
                    <div className="absolute inset-0 bg-slate-900 opacity-25"></div>
                        <div className="mx-auto relative z-10 ">
                            <motion.h1
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }} className='font-bold text-3xl text-white'>"Stay on Top of Your Assignments"</motion.h1>
                            <p className='font-bold text-xl text-white'>"Never miss a deadline! Track, submit, and review all your assignments in one place."</p>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar1 bg-cover bg-center bg-no-repeat h-48 py-56">
                    <div className="absolute inset-0 bg-slate-900 opacity-25"></div>
                        <div className="w-full mx-auto relative z-10 ">
                            <motion.h1
                             whileHover={{ scale: 1.2 }}
                             whileTap={{ scale: 0.8 }} className='font-bold text-3xl text-white'>Empower Your Learning Journey</motion.h1>
                            <p className='font-bold text-xl text-white'>"Unlock a world of knowledge with StudyCircle. Organize, learn, and succeed like never before."</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-bannar2 bg-cover bg-center bg-no-repeat h-48 py-56">
                    <div className="absolute inset-0 bg-slate-900 opacity-25"></div>
                        <div className= "w-full mx-auto relative z-10">
                            <motion.h1
                             whileHover={{ scale: 1.2 }}
                             whileTap={{ scale: 0.8 }} className='font-bold text-3xl text-white'>Collaborate, Create, Conquer</motion.h1>
                            <p className='font-bold text-xl text-white'>"Join a community of learners and achievers. Share your goals, work together, and grow."</p>
                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Bannar;