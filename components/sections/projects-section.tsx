"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "krishi-sanjivani",
    title: "KrishiSanjivani",
    description: "AI-powered crop disease detection and treatment recommendation system",
    image: "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Python", "TensorFlow", "Flask"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kaustubh2026/KrishiSanjivani",
  },
  {
    id: "EventHUB",
    title: "EventHUB",
    description: "An Event Booking Platform For College Students",
    image: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_640.jpg",
    tech: ["Typescript", "Javascript", "TailwindCSS"],
    demoUrl: "https://fantastic-bavarois-d51936.netlify.app/",
    githubUrl: "https://github.com/Kaustubh2026/EventHub",
  },
  {
    id: "FutureForge",
    title: "FutureForge",
    description: "Webbased AI Agent For Job Recommendation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuTxjjZtsBwc5WUr_LqI1W4e7r6Vebg0QMwA&s",
    tech: ["Javascript", "Python", "TailwindCSS" ,"HTML"],
    demoUrl: "https://future-forge-omega.vercel.app/",
    githubUrl: "https://github.com/Kaustubh2026/FutureForge",
  },
  {
    id: "WeatherUI",
    title: "WeatherUI",
    description: "Perfect UI For Weather App For Checking Weather Of Any City",
    image: "https://assamtribune.com/h-upload/2022/03/01/1330873-clouds-weather.webp?width=500&height=300",
    tech: ["React", "Typescript", "TailwindCSS"],
    demoUrl: "https://weather-ui-nu.vercel.app/",
    githubUrl: "https://github.com/Kaustubh2026/WeatherUI",
  },
  {
    id: "sentiment-analyzer",
    title: "Sentiment Analyzer",
    description: "Real-time sentiment analysis tool for social media content",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Python", "NLTK", "Flask", "React","LangFlow"],
    demoUrl: "#",
    githubUrl: "https://github.com/Tarunkasliwal/BeerBros_mumbai",
  },
];

const techColors: Record<string, string> = {
  Python: "bg-blue-500/20 text-blue-300",
  TensorFlow: "bg-orange-500/20 text-orange-300",
  Flask: "bg-gray-500/20 text-gray-300",
  React: "bg-cyan-500/20 text-cyan-300",
  PyTorch: "bg-red-500/20 text-red-300",
  "scikit-learn": "bg-yellow-500/20 text-yellow-300",
  Django: "bg-green-500/20 text-green-300",
  "React Native": "bg-indigo-500/20 text-indigo-300",
  "TensorFlow.js": "bg-orange-500/20 text-orange-300",
  "Node.js": "bg-green-500/20 text-green-300",
  MQTT: "bg-purple-500/20 text-purple-300",
  ChartJS: "bg-pink-500/20 text-pink-300",
  NLTK: "bg-teal-500/20 text-teal-300",
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">Explore my latest works across various domains including AI, machine learning, and web development.</p>
        </motion.div>

        <div className="carousel-container">
          <div className="flex gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="movie-card flex-shrink-0 w-72 md:w-80"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="movie-card-overlay" />
                  <div className="movie-card-content">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={`${project.id}-${tech}`} 
                          className={`project-badge ${techColors[tech] || "bg-gray-500/20 text-gray-300"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="group" asChild>
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" className="group" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}