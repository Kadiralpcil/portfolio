import React from 'react';
import Image from 'next/image';
import ReactImg from '../../../public/React.png';
import NextImg from '../../../public/next.png';
import JavaScriptIMg from '../../../public/javaScript.png';
import TypeScriptImg from '../../../public/TypeScript.png';
import CImg from '../../../public/CSharp-removebg-preview (1).png';
import SqlImg from '../../../public/SQL-removebg-preview.png';
import TailwindImg from '../../../public/Tailwinddpng-removebg-preview.png';
import BootstrapImg from '../../../public/Bootstrap-removebg-preview.png';
import CssImg from '../../../public/CSS.png';
import { useWindowDimensions } from '@/hooks';

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
    ];

    const [width, height] = useWindowDimensions();

    return (
        <div className='flex flex-wrap mt-5 gap-5 justify-center'>
            {imgArray.map((imgItem, index) =>
                <div key={index} className="text-center w-40">
                    <div className="relative h-40 flex justify-center items-center">
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white text-lg font-semibold">{imgItem.alt}</span>
                        </div>
                        <Image
                            src={imgItem.img}
                            alt={imgItem.alt}
                            layout="fill"
                            objectFit="contain"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export { SoftwareLanguages };
