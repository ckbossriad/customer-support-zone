import React from 'react';
import Image from '../../assets/vector1.png'

const Hero = ({inProgress,resolved}) => {
    return (
<div className='max-w-[95%] md:max-w-[1270px] mx-auto flex flex-col md:flex-row justify-between items-center mt-[40px] md:mt-[80px] gap-5 md:gap-0 '>

            <div className="md:w-[45%] w-full h-[120px] md:h-[250px] bg-gradient-to-r from-[#9F62F2] to-[#632EE3] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 rounded-xl p-4">
                <img src={Image} alt="Normal" className="w-24 h-24 md:w-53 md:h-53 object-cover" />
                <div className='flex flex-col items-center'>
                    <p className='whitespace-nowrap text-lg md:text-xl'>In-Progress</p>
                    <h1 className='text-4xl md:text-6xl'>{inProgress}</h1>
                </div>
                <img src={Image} alt="Flipped" className="w-24 h-24 md:w-53 md:h-53 object-cover transform scale-x-[-1]" />
            </div>

            <div className="md:w-[45%] w-full h-[120px] md:h-[250px] bg-gradient-to-r from-[#00827A] to-[#54CF68] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 rounded-xl p-4">
                <img src={Image} alt="Normal" className="w-24 h-24 md:w-55 md:h-55 object-cover" />
                <div className='flex flex-col items-center'>
                    <p className='whitespace-nowrap text-lg md:text-xl'>Resolved</p>
                    <h1 className='text-4xl md:text-6xl'>{resolved}</h1>
                </div>
                <img src={Image} alt="Flipped" className="w-24 h-24 md:w-55 md:h-55 object-cover transform scale-x-[-1]" />
            </div>
        </div>

    );
};

export default Hero;