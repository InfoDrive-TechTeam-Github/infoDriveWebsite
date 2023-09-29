import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ImageRotator = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/WhatsApp Image 2023-09-25 at 14.49.36.jpeg",
    "/WhatsApp Image 2023-09-25 at 14.51.05.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images, currentImage]);

  const calculateDelay = (index) => {
    if (currentImage === index) {
      return 0;
    } else if (currentImage === 0 && index === 1) {
      return 1;
    } else if (currentImage === 1 && index === 0) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="mr-10">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ x: currentImage === index ? -90 : -180 }}
          animate={{
            x: [0, 100, 0],
            opacity: currentImage === index ? 0 : 0, // Adjust opacity based on current image
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut",
            delay: calculateDelay(index),
          }}
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className=" object-contain md:h-12 flex flex-col gap-0 md:gap-3   overflow-hidden h-5"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageRotator;
