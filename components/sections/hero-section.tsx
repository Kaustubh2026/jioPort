"use client";

import { motion } from "framer-motion";
import { ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/20 text-primary rounded-full mb-4">
                Engineer • ML Enthusiast • Creative Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hi, I'm Kaustubh
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a Software Engineer With a Passion for Building Innovative
              Solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="Kaustubh_Muley_VITP.pdf" download>
                <Button size="lg" variant="outline" className="group">
                  Download Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated background circles */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-accent/20"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Profile image */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 glass-panel floating"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="kaustubh.jpg"
                  alt="Kaustubh"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
