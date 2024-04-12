import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../../components/cards/Card';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    "/src/assets/images/island.png",
    "/src/assets/images/orangeisland.png",
    "/src/assets/images/island.png",
    "/src/assets/images/orangeisland.png",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;
      const sectionHeight = window.innerHeight;
      const newSection = Math.min(sections.length - 1, Math.floor(scrollPosition / sectionHeight));
      setCurrentSection(newSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: 0, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  return (
    <div className="bg-bg w-screen min-h-screen overflow-auto flex flex-col items-end">
        <header className="w-screen h-16 bg-main fixed m-0 shadow-md">
            <h1 className="text-white text-3xl font-bold">Island</h1>
        </header>
      {sections.map((src, index) => (
        <section key={index} className="w-full h-screen flex justify-center items-center">
          <AnimatePresence>
            {index === currentSection && (
              <motion.img
                key={src}
                src={src}
                alt={`Island ${index + 1}`}
                className="fixed right-10 md:right-20 top-1/2 transform -translate-y-1/2 w-96 h-96 object-cover"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            )}
            <Card className='h-96 w-1/2'>
                
            </Card>
          </AnimatePresence>
        </section>
      ))}
    </div>
  );
}