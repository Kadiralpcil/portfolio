"use client"

import React from 'react'
import Image from 'next/image'
import ReactImg from '../../../public/React.png'
import NextImg from '../../../public/Next.png'
import JavaScriptIMg from '../../../public/javaScript.png'
import TypeScriptImg from '../../../public/TypeScript.png'
import CImg from '../../../public/CSharp-removebg-preview (1).png'
import SqlImg from '../../../public/SQL-removebg-preview.png'
import TailwindImg from '../../../public/Tailwinddpng-removebg-preview.png'
import BootstrapImg from '../../../public/Bootstrap-removebg-preview.png'
import CssImg from '../../../public/CSS.png'
import { useWindowDimensions } from '@/hooks'

const SoftwareLanguages = () => {

    const imgArray = [
        {
            id: 1,
            img: ReactImg,
            alt: "React.js",
        },
        {
            id: 2,
            img: NextImg,
            alt: "Next.js",
        },
        {
            id: 3,
            img: JavaScriptIMg,
            alt: "JavaScript",
        },
        {
            id: 4,
            img: TypeScriptImg,
            alt: "TypeScript",
        },
        {
            id: 5,
            img: TailwindImg,
            alt: "Tailwind",
        },
        {
            id: 6,
            img: BootstrapImg,
            alt: "Bootstrap",
        },
        {
            id: 7,
            img: CssImg,
            alt: "CSS",
        },
        {
            id: 8,
            img: CImg,
            alt: "C#",
        },
        {
            id: 9,
            img: SqlImg,
            alt: "SQL",
        },

    ]
    const [width, height] = useWindowDimensions();

    return (

        <div className='flex flex-wrap mt-5 '>
            {imgArray.map((imgItem, index) =>
                <div key={index} className={
                    width > 768 ? "h-[150px] w-[150px] relative mb-4" :
                        width > 640 ? "h-[120px] w-[150px] relative mb-2" :
                            "h-[110px] w-[150px] relative mb"}>
                    <div className='h-[100px] w-[150px] flex justify-center items-center'>
                        <Image
                            className='w-auto h-auto'
                            src={imgItem.img}
                            alt={imgItem.alt}
                            width={width > 768 ? 100 : width > 640 ? 80 : 60}
                            height={width > 768 ? 100 : width > 640 ? 80 : 60}
                        />
                    </div>
                    <div className=' absolute flex justify-center w-full bottom-0'>{imgItem.alt}</div>
                </div>
            )}
        </div>
    )
}

export { SoftwareLanguages }