import { SoftwareLanguages } from "../ui"

const Content = () => {

    return (
        <div className=' flex pt-8 pl-16 justify-center flex-col grow shrink-0 basis-auto'>
            <div className='flex items-center'>
                <div className='text-headerTextHover font text-xl font-bold'>HELLO, </div>
                <h1> <span style={{
                    animationName: "wave-animation",
                    animationDuration: '2.5s',
                    animationIterationCount: 'infinite',
                    transformOrigin: '70% 70%',
                    display: 'inline-block',
                    fontSize: '1.8rem'
                }}>👋</span>
                </h1>

                <div className='text-headerTextHover font text-xl font-bold'>MY NAME IS ALP </div>
            </div>
            <h1 className='text-4xl
            xl:text-headerText xl:text-8xl	xl:font-medium xl:mb-10 xl:mt-5 
            md:text-6xl md:mb-5 sm:text-4xl sm:mb-2'>
                Software Developer
            </h1>
            <p className='mb-2 text-2xl font-light leading-10 flex flex-wrap '>
                I am a Software Developer. 3+ years Front-end Developer experiance 💻.
                Musician 🎸,
                Trader 📈,
            </p>
            <SoftwareLanguages />
        </div>
    )
}

export { Content }