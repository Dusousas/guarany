import React from 'react';

export default function About() {
    return (
        <>
            <section id='about' className='py-20 bg-white outline outline-BegeD m-4'>
                <div className='maxW flex flex-col items-center lg:flex-row'>


                    <article className='flex flex-col items-center mx-auto'>
                        <img src="/h1-about.jpg" alt="" />
                    </article>

                    <article className='flex flex-col items-center mx-auto'>
                        <div className='flex items-center gap-4'>
                            <div className='border-2 border-b-BegeD w-[50px]' />
                            <h2 className='font-CrimsonPro text-BegeD italic uppercase text-xl text-center'>Sobre nós</h2>
                            <div className='border-2 border-b-BegeD w-[50px]' />
                        </div>
                        <h1 className='font-Catamaran text-GrayP uppercase font-semibold text-2xl mt-4 text-center'>Refrescando gerações com sabor e qualidade.</h1>
                        <p className='font-Montserrat text-GrayP mx-auto text-center mt-4 lg:w-[70%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae consequatur quis ex hic excepturi ad dolorem sequi nihil suscipit! Omnis!</p>
                        <p className='font-Montserrat text-GrayP mx-auto text-center mt-6 lg:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt, alias aliquid asperiores eligendi esse dolores qui vel perferendis, animi inventore doloremque dignissimos quasi ratione consectetur, harum enim nobis dolor sapiente deserunt dolore aut aperiam dolorum voluptatum? Necessitatibus, harum ea.</p>
                        <p className='font-Montserrat text-GrayP mx-auto text-center mt-2 lg:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt, alias aliquid asperiores eligendi esse dolores qui vel perferendis, animi inventore doloremque dignissimos quasi ratione consectetur, harum enim nobis dolor sapiente deserunt dolore aut aperiam dolorum voluptatum? Necessitatibus, harum ea.</p>
                    </article>

                    <article className='flex flex-col items-center mx-auto'>
                        <img src="/h1-about.jpg" alt="" />
                    </article>



                </div>
            </section>
        </>
    );
}
