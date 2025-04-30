"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

interface ProfileSelectionProps {
  onSelect: (profile: string) => void;
}

const profiles = [
  {
    id: "kaustubh",
    name: "Kaustubh",
    image: "kaustubh.jpg",
    enabled: true,
  },
  {
    id: "Recruiter",
    name: "Recruiter",
    image: "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png",
    enabled: true,
  },
  {
    id: "Fun",
    name: "Fun",
    image: "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v1/feature/profile/29.png",
    enabled: false,
  },
  {
    id: "add",
    name: "Add Profile",
    image: "",
    enabled: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
    },
  },
};

const profileVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export default function ProfileSelection({ onSelect }: ProfileSelectionProps) {
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleProfileClick = (profile: string) => {
    if (!profiles.find(p => p.id === profile)?.enabled) return;
    
    setSelectedId(profile);
    setTimeout(() => onSelect(profile), 600);
  };

  return (
    <motion.div
      className="min-h-screen bg-background flex flex-col items-center justify-center p-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-16 text-white"
        variants={titleVariants}
      >
        Who's watching?
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-8 md:gap-12"
        variants={containerVariants}
      >
        <AnimatePresence>
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              className={cn(
                "ott-profile cursor-pointer flex flex-col items-center",
                !profile.enabled && "opacity-60 cursor-not-allowed",
                selectedId && selectedId !== profile.id && "opacity-0 scale-90"
              )}
              variants={profileVariants}
              onHoverStart={() => setHoveredProfile(profile.id)}
              onHoverEnd={() => setHoveredProfile(null)}
              onClick={() => handleProfileClick(profile.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {profile.id === "add" ? (
                <motion.div
                  className="relative w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-gray-800 border-2 border-gray-700"
                  whileHover={{ rotate: 90 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Plus className="w-12 h-12 text-gray-400" />
                </motion.div>
              ) : (
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-white">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 profile-gradient"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProfile === profile.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
              <motion.p
                className="mt-4 text-lg font-medium text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {profile.name}
              </motion.p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}