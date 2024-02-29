import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


export default function Footer() {
    return (
        <div className='fixed bottom-0 p-5 flex justify-between w-[90%] max-w-[1200px]
         bg-footerColor flex-wrap'>
            <div className='flex gap-2 [&>*]:cursor-pointer flex-wrap'>
                <a href='https://www.instagram.com/kadiralpcil/' target='blank'>
                    <FaInstagram className="hover:scale-150 w-8 h-8 transition-all" />
                </a>
                <a href='https://twitter.com/KadirAlpC7' target='blank'>
                    <FaXTwitter className="hover:scale-150 w-8 h-8 transition-all" />
                </a>
            </div>
            <div className='flex gap-2 [&>*]:cursor-pointer flex-wrap'>
                <a href='https://github.com/Kadiralpcil' target='blank'>
                    <FaGithub className="hover:scale-150 w-8 h-8 transition-all" />
                </a>
                <a href='https://www.linkedin.com/in/kadiralpcil/' target='blank'>
                    <FaLinkedin className="hover:scale-150 w-8 h-8 transition-all" />
                </a>
                <a href='mailto:Kadiralpcil@outlook.com'>
                    <CiMail className="hover:scale-150 w-8 h-8 transition-all" />
                </a>

            </div>
        </div>
    )
}
