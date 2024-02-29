import { useState } from 'react';
import { FaFile } from 'react-icons/fa';
import { AvatarImageBuilder } from '@/components/ui/AvatarImageBuilder';
import imgSrc from '@/../public/assets/ProfilePicture.jpg';

const Header = () => {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);
        const downloadLink = document.createElement('a');
        downloadLink.href = '/assets/SoftwareDeveloperKadirAlpCv.pdf'; // Dosya yolunu doğru şekilde ayarlayın
        downloadLink.setAttribute('download', 'SoftwareDeveloperKadirAlpCv.pdf');
        document.body.appendChild(downloadLink);
        downloadLink.click();
        setDownloading(false);
    };

    return (
        <div className="p-12">
            <div className="flex justify-between">
                <AvatarImageBuilder imgSrc={imgSrc} name={'Kadir Alp Çil'} />
                <button
                    disabled={downloading}
                    onClick={handleDownload}
                    className="p-2 rounded-lg border-2 flex items-center cursor-pointer gap-2 hover:bg-headerTextHover hover:text-white transition-all"
                >
                    <p>Resume</p>
                    <div>
                        <FaFile />
                    </div>
                </button>
            </div>
        </div>
    );
};

export { Header };
