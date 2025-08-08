'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { products } from '../data/produtos';

// Imports do CSS do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {
    return (
        <section className='bg-Bege py-20'>
            <div className='maxW'>
                <article className='flex flex-col items-center'>
                    <h2 className='text-BegeD/10 uppercase text-center font-Catamaran font-bold tracking-wider text-5xl lg:text-8xl '>Produtos</h2>
                    <div className='flex items-center gap-4 mx-auto relative top-[-68px]'>
                        <div className='border-2 border-b-BegeD w-[50px]' />
                        <h2 className='font-CrimsonPro text-BegeD italic uppercase text-xl text-center'>Nossos produtos</h2>
                        <div className='border-2 border-b-BegeD w-[50px]' />
                    </div>
                    <h1 className='font-Catamaran text-GrayP uppercase font-semibold text-2xl text-center relative top-[-50px]'>Conheça a linha de sabores Guarany</h1>
                </article>

                <article className='mt-10'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                        className="products-swiper"
                    >
                        {products.map(product => (
                            <SwiperSlide key={product.id}>
                                <div className='flex flex-col items-center group'>
                                    <Link href={`/${product.slug}`}>
                                        <div className='overflow-hidden'>
                                            <img 
                                                src={product.image} 
                                                alt={product.name}
                                                className='w-full h-auto '
                                            />
                                        </div>
                                        <p className='text-center mt-4 uppercase font-Catamaran font-semibold text-GrayP hover:text-BegeD transition-colors duration-300'>
                                            Ver detalhes
                                        </p>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </article>
            </div>

        </section>
    );
}