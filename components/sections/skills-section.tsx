"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Skill {
  name: string;
  logo: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    color: "#FF6F00",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    color: "#E10098",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    color: "#06B6D4",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  {
    name: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#00758F",
  },
  {
    name: "Management",
    logo: "file:///C:/Users/user/Downloads/managers-svgrepo-com.svg",
    color: "#00758F",
  }
];

const categories = [
  {
    name: "Languages",
    description: "Programming and markup languages I'm proficient in",
    items: ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"]
  },
  {
    name: "Soft Skills",
    description: "",
    items: ["Management", "Team Lead" ,"Cricket Player" ,"Poet"]
  },
  {
    name: "Tools",
    description: "Development tools and platforms I use",
    items: ["Git", "Docker","Cursor" , "VS Code", "Figma"]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Skills &amp; Technologies</h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of programming languages, frameworks, and tools I work with.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              className="bg-secondary rounded-lg p-6 glassmorphism"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="carousel-container mt-10">
          <div className="flex gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex-shrink-0 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center p-2"
                  style={{ backgroundColor: `${skill.color}20` }}
                >
                  <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}