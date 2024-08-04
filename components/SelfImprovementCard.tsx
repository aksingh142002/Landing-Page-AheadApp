import React from 'react';


interface SelfImprovementCard{
    heading: string;
    description: string;
    active: boolean;
}

const SelfImprovementCard: React.FC<SelfImprovementCard> = ({heading, description, active}) => {
    return (
        <div className={'w-full h-40 sm:h-36 flex gap-4 px-4'}>
            <div className={'relative'}>
                <div className={`h-full w-[0.15rem] ${active ? 'bg-[#6341ef]' : 'bg-gray-300'} transition-all duration-300`}>
                </div>
                <div className={`absolute top-2 -translate-x-[40%] ${active ? 'bg-[#6341ef] h-4 w-4' : 'bg-gray-300 h-4 w-4'} rounded-full transition-all duration-300`}>
                </div>
            </div>
            <div className={`flex flex-col gap-1 md:gap-4 ${active ? 'text-black' : 'text-gray-300'} transition-all duration-300`}>
                <div className={'font-semibold text-lg sm:text-2xl'}>
                    {heading}
                </div>
                <div className={'font-normal text-sm sm:text-xl'}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default SelfImprovementCard;