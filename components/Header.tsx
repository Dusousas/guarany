import React from 'react';
import Navbar from './subc/Navbar';

export default function Header() {
    return (
        <>
            <header className='bg-Bege border-b border-GrayP/20 py-6'>
                <img className='hidden top-[-10px] left-[-60px] z-[20] absolute lg:block' src="/h6.png" alt="" />
                <img className='hidden top-[-10px] right-[-60px] z-[20] absolute lg:block' src="/h6.png" alt="" />


                <div className='maxW flex justify-between items-center'>
                    <div>
                        <a className='text-GrayP font-CrimsonPro text-4xl font-semibold italic tracking-wider' href="/">Guarany</a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    );
}