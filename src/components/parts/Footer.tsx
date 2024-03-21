import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <div className="bg-white py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex gap-4 mb-4 sm:mb-0">
                    <a href='https://www.instagram.com/kadiralpcil/' target='_blank' rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-all">
                        <FaInstagram className="w-8 h-8" />
                    </a>
                    <a href='https://twitter.com/KadirAlpC7' target='_blank' rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-all">
                        <FaTwitter className="w-8 h-8" />
                    </a>
                    <a href='https://github.com/Kadiralpcil' target='_blank' rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-all">
                        <FaGithub className="w-8 h-8" />
                    </a>
                    <a href='https://www.linkedin.com/in/kadiralpcil/' target='_blank' rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-all">
                        <FaLinkedin className="w-8 h-8" />
                    </a>
                    <a href='mailto:Kadiralpcil@outlook.com' className="text-gray-700 hover:text-black transition-all">
                        <HiOutlineMail className="w-8 h-8" />
                    </a>
                </div>
                <div className="text-gray-700 text-sm">© 2024 Kadır Alp Çil. Tüm Hakları Saklıdır.</div>
            </div>
        </div>
    );
};

export default Footer;
