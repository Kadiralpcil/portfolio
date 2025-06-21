import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 fixed py-3 bottom-0 w-full z-20">
            <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
                <div className="flex gap-5">
                    <a href='https://www.instagram.com/kadiralpcil/' target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a href='https://twitter.com/KadirAlpC7' target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href='https://github.com/Kadiralpcil' target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a href='https://www.linkedin.com/in/kadiralpcil/' target='_blank' rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href='mailto:Kadiralpcil@outlook.com' className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <HiOutlineMail className="w-5 h-5" />
                    </a>
                </div>
                <div className="text-gray-400 text-xs font-light">© 2024 Kadır Alp Çil</div>
            </div>
        </footer>
    );
};

export default Footer;