import { SoftwareLanguages } from "./SoftwareLanguages/softwareLanguages";

const Content = () => {
    return (
        <div className='flex flex-col p-4 sm:pt-8 sm:pl-16 sm:justify-center'>
            <div className='flex items-center mb-4'>
                <div className='text-headerTextHover font text-sm font-bold sm:text-lg'>HELLO, </div>
                <div>👋</div>
                <div className='text-headerTextHover font text-sm font-bold sm:text-lg'>MY NAME IS ALP </div>
            </div>
            <h1 className='text-4xl xl:text-8xl xl:font-medium xl:mb-10 xl:mt-5 
            md:text-6xl md:mb-5 sm:text-4xl sm:mb-2'>
                Software Developer
            </h1>
            <p className='mb-6 text-lg font-light leading-7'>
                I am a Software Developer with over 3 years of experience in Front-end Development 💻. Im also a Musician 🎸 and a Trader 📈.
            </p>
            <SoftwareLanguages />
        </div>
    );
};

export { Content };
