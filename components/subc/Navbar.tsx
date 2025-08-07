import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    return (
        <>
            {/* Navbar Desktop */}
            <nav className="hidden lg:block">
                <ul className="flex gap-6 uppercase text-GrayP font-Catamaran font-semibold text-lg">
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            {/* Navbar Mobile */}
            <div className="lg:hidden">
                {/* Botão do menu */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl text-GrayP focus:outline-none relative z-50"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Menu Mobile */}
                <nav
                    className={`fixed top-0 right-0 h-screen w-full bg-gray-800 shadow-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <ul className="flex flex-col items-center gap-8 text-lg uppercase text-GrayP">
                        <li><a href="#home" onClick={() => setIsOpen(false)}>Início</a></li>
                        <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre</a></li>
                        <li><a href="#services" onClick={() => setIsOpen(false)}>Serviços</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contato</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}