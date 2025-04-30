"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
}

const certifications: Certification[] = [
  // {
  //   id: "google-ml",
  //   title: "Google Machine Learning Engineer",
  //   issuer: "Google Cloud",
  //   date: "Feb 2024",
  //   image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   url: "#",
  // },
  // {
  //   id: "aws-dev",
  //   title: "AWS Certified Developer",
  //   issuer: "Amazon Web Services",
  //   date: "Nov 2023",
  //   image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   url: "#",
  // },
  // {
  //   id: "deeplearning-ai",
  //   title: "Deep Learning Specialization",
  //   issuer: "DeepLearning.AI",
  //   date: "Aug 2023",
  //   image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   url: "#",
  // },
  // {
  //   id: "meta-react",
  //   title: "Meta React Developer",
  //   issuer: "Meta",
  //   date: "May 2023",
  //   image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   url: "#",
  // },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* <h2 className="text-3xl font-bold mb-2">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl">
            Professional certifications and courses I've completed to enhance my skills.
          </p> */}
        </motion.div>

        <div className="carousel-container">
          <div className="flex gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="movie-card flex-shrink-0 w-72 md:w-80"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="movie-card-overlay" />
                  <div className="movie-card-content">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="text-sm text-primary-foreground">{cert.issuer}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{cert.date}</p>
                    
                    <Button size="sm" variant="secondary" className="group" asChild>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Certificate
                      </a>
                    </Button>
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