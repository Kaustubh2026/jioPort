"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSelection from "@/components/profile-selection";
import PortfolioMain from "@/components/portfolio-main";
import AudioPlayer from "@/components/audio-player";

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile);
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-16 h-16">
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-primary"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {!selectedProfile ? (
          <ProfileSelection key="profile-selection" onSelect={handleProfileSelect} />
        ) : (
          <PortfolioMain key="portfolio-main" profile={selectedProfile} />
        )}
      </AnimatePresence>
      <AudioPlayer />
    </>
  );
}