import React from 'react';
import { motion } from 'framer-motion';

export default function Main() {
    return (
        <>
            <section className='bg-Bege py-40 overflow-x-hidden relative'>
                <img className='hidden absolute bottom-0 left-[-60px] lg:block' src="/h6.png" alt="" />
                <img className='hidden absolute bottom-0 right-[-60px] lg:block' src="/h6.png" alt="" />


                <div className='maxW flex flex-col gap-6 gap-y-10 h-full w-full items-center 2xl:flex-row'>
                    <article className='lg:w-1/2'>
                        <div className='relative'>
                            <img className='z-10 relative w-[80%] mx-auto lg:w-full' src="refri-1.png" alt="" />
                            {/* IMGS COMPONENTS */}
                            <div className='z-[-1]'>
                                <motion.img className='absolute w-[60px] bottom-[15%] lg:top-[20%] lg:left-[-15%] lg:w-auto' src="main1.png" alt="" animate={{ x: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                                <motion.img className='absolute w-[30px] top-[-15%] right-0 lg:top-[-8%] lg:left-[80%] lg:w-auto' src="main2.png" alt="" animate={{ rotate: [0, 360] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
                                <motion.img className='absolute w-[30px] top-[-20%] right-[10%] lg:top-[-15%] lg:left-[85%] lg:w-auto' src="main2.png" alt="" animate={{ rotate: [0, 360] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} />
                                <motion.img className='absolute w-[80px] bottom-[40%]  lg:bottom-[15%] lg:left-[-15%] lg:w-auto' src="main3.png" alt="" animate={{ x: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                                <motion.img className='absolute w-[40px] top-[10%] right-0 lg:top-[10%] lg:right-[-10%] lg:w-auto' src="main4.png" alt="" animate={{ rotate: [0, 180, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
                                <motion.img className='absolute w-[60px] top-[-30%] left-[30%] lg:top-[-18%] lg:left-[32%] lg:w-auto' src="main5.png" alt="" animate={{ y: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                                <motion.img className='absolute w-[80px] right-[5%] bottom-0 lg:bottom-[2%] lg:right-[-12%] lg:w-auto' src="main6.png" alt="" animate={{ x: [0, 20, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                            </div>
                        </div>
                    </article>
                    <article className='lg:w-1/2 flex flex-col justify-center items-center'>
                        <div className='flex items-center gap-4'>
                            <div className='border-2 border-b-BegeD w-[50px]' />
                            <h2 className='font-CrimsonPro text-BegeD italic uppercase text-xl text-center'>Guarany</h2>
                            <div className='border-2 border-b-BegeD w-[50px]' />
                        </div>
                        <h1 className='font-Catamaran text-GrayP uppercase font-semibold text-4xl mt-4 text-center'>Refrescando gerações com sabor e qualidade.</h1>
                        <p className='font-Montserrat text-GrayP mt-4 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi facere beatae, animi maiores praesentium veritatis nostrum nam voluptatum deleniti quisquam commodi aliquam aliquid dicta quo veniam odio numquam laborum quos, delectus assumenda esse tempore incidunt temporibus sequi! Nesciunt, aut voluptates!</p>
                        <div className='flex mt-6'>
                            <a className='text-GrayP outline outline-BegeL px-8 py-4 hover:bg-BegeL hover:text-white uppercase font-Catamaran font-semibold' href="">Entre em contato</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
