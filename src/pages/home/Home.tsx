import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../components/cards/Card";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    "/src/assets/images/island.png",
    "/src/assets/images/orangeisland.png",
    "/src/assets/images/island.png",
    "/src/assets/images/orangeisland.png",
  ];
  const sectionContent = [
    "In the city's labyrinth, each corner turned might be a step into a memory reshaped by unseen hands. The past alters as often as the future, painting over old realities with new possibilities. Streets whisper of what might have been, echoes threading through the concrete maze, each one a fragment, a distorted reflection of another place and time.",
    
    "The narrative of existence loops and curls like smoke from an unseen fire. Stories told by voices not their own, layers of truth buried under shifting sands of perceived reality. Here, the script is written anew with each telling, meaning elusive, always just beyond grasp, like shadows that move against the light.",
    
    "Consider a film where the camera turns upon itself, endlessly reflecting. Here, mirrors are not just reflectors of the present but gateways to alternate realities. Each reflection a question posed, never answered. Are these reflections true, or merely distortions? The observer and the observed blur, lines dissolve between director and subject, between watcher and watched.",
    
    "What is plot but an attempt to bring order to chaos? Structures built on the foundation of what is known, only to be unmade by what is discovered. The narrative stripped to its essence, leaving only form, texture, sensation. Each moment a potential divergence, a path in a cosmic narrative where every choice reshapes the world, monumental yet trivial in its boundless possibilities."
  ]
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + window.innerHeight / 2;
      const sectionHeight = window.innerHeight;
      const newSection = Math.min(
        sections.length - 1,
        Math.floor(scrollPosition / sectionHeight)
      );
      setCurrentSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 0, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <div className="bg-bg w-screen min-h-screen overflow-auto flex flex-col items-end"
    style={{ scrollSnapType: "y proximity" }}>
      <header className="w-screen h-16 bg-main fixed m-0 shadow-md">
        <h1 className="text-white text-3xl font-bold">Island</h1>
      </header>
      {sections.map((src, index) => (
        <section
          key={index}
          className="w-full h-screen flex justify-center items-center"
        >
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
            <Card className="h-96 w-1/2">
              <CardContent>
              <p className="text-lg">{sectionContent[index]}</p>
            </CardContent>
            </Card>
          </AnimatePresence>
        </section>
      ))}
    </div>
  );
}
