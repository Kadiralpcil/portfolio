"use client"

//React
import { useState } from 'react';

//Icons
import { FaFile } from 'react-icons/fa';

//Components
import { AvatarImageBuilder } from '@/components/AvatarImageBuilder';

//Constants
import imgSrc from '../../../public/ProfilePicture.jpg';
import pages from '@/app/pages/index'
import Link from 'next/link';

const Header = () => {

    //States
    const [downloading, setDownloading] = useState(false);

    //Functions
    const handleDownload = () => {
        setDownloading(true);
        const downloadLink = document.createElement('a');
        downloadLink.href = '../../../SoftwareDeveloperKadirAlpCv.pdf';
        downloadLink.setAttribute('download', 'SoftwareDeveloperKadirAlpCv.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        setDownloading(false);
    };


    return (

        <nav className="bg-white  w-full z-20 sticky">
            <div className="flex flex-wrap items-center  p-4">
                <div className="flex items-center space-x-3 flex-1" >
                    <AvatarImageBuilder imgSrc={imgSrc} name={'Kadir Alp Çil'} />
                </div>

                <div className="">
                    <div className='flex flex-1 gap-2 '>
                        {pages.map((item, index) => (
                            <Link className='' key={index} href={item.path}>
                                <div className='p-2 bg-blue-400 text-white rounded-md'>
                                    {item.name}
                                </div>

                            </Link>

                        ))}
                        <button
                            disabled={downloading}
                            onClick={handleDownload}
                            className="text-white bg-blue-700 hover:bg-blue-800
                            font-medium rounded-lg text-sm px-4 py-2 
                            text-center "
                        >
                            <div className='flex items-center gap-1'>Resume <FaFile /> </div>
                        </button>
                    </div>



                </div>
            </div>
        </nav >
    );
};

export { Header };
