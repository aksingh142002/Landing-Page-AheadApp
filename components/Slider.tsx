'use client';
import React, { useEffect, useRef, useState } from 'react';
import SliderCard from "@/components/SliderCard";
import { cardData } from "./data";
import { motion } from "framer-motion";

const Slider = () => {
    const [width, setWidth] = useState(0);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [carousel.current]);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        }, 2000);

        return () => clearInterval(scrollInterval);
    }, []);

    useEffect(() => {
        if (carousel.current) {
            const cardWidth = carousel.current.offsetWidth / 3; // Assuming 3 cards are visible at a time
            const scrollToPosition = cardWidth * currentCardIndex;
            carousel.current.scrollTo({
                left: scrollToPosition,
                behavior: 'smooth',
            });
        }
    }, [currentCardIndex]);

    return (
        <motion.div ref={carousel} className={'cursor-grab overflow-hidden'}>
            <motion.div
                drag={"x"}
                dragConstraints={{ right: 0, left: -width }}
                whileTap={{ cursor: 'grabbing' }}
                className={'flex'}
            >
                {cardData.map((card, index) => (
                    <div key={card.cardNo} className={'px-4 py-10'}>
                        <SliderCard
                            heading={card.heading}
                            description={card.description}
                            backgroundColor={card.backgroundColor}
                            svg={card.svg}
                        />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Slider;
