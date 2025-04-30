"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";
import CertificationsSection from "@/components/sections/certifications-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/ui/footer";

interface PortfolioMainProps {
  profile: string;
}

export default function PortfolioMain({ profile }: PortfolioMainProps) {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <motion.div
      ref={mainRef}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header profile={profile} />
      <Sidebar />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="md:pl-16 pt-16" // Adjusted padding for header and sidebar
      >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </motion.main>
      
      <Footer />
    </motion.div>
  );
}