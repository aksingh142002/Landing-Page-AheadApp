"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ghostImage from "@/public/images/pink_ghost_image_features.png";
import Slider from "./Slider";

const Emotions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const imageVariants = {
    hidden: {
      x: 300,
      y: 0,
      rotate: -90,
    },
    visible: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 1],
        path: [
          {
            x: 300,
            y: 0,
          },
          {
            x: 150,
            y: -50,
          },
          {
            x: 0,
            y: 0,
          },
        ],
      },
    },
  };

  const headingVariants = {
    hidden: {
      scale: 0,
      transformOrigin: 'top left',
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 1],
        bounce: 0.5,
      },
    },
  };

  return (
    <div id="emotions" className="px-0 xl:px-10">
      <div className="flex mt-[3rem] p-[2rem] gap-5">
        <div className="w-1/3 text-3xl font-bold flex-shrink-0">EQ beats IQ</div>
        <div className="w-1/3 text-xl px-4">
          People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
        </div>
        <div className="w-1/3 text-xl px-4">
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29 a year.
        </div>
      </div>
      <div className="px-4 pt-10 pb-4 md:pt-14 md:pb-4 lg:pt-20 lg:px-20 lg:pb-4">
        <div className="flex items-center gap-4 lg:gap-8">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            ref={ref}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={headingVariants}
          >
            Does this sound familiar...
          </motion.h1>
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={imageVariants}
            className="pb-4"
          >
            <Image src={ghostImage} alt="" />
          </motion.div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Emotions;
