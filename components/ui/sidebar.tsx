"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home,
  Briefcase,
  Code2,
  Award,
  Mail,
  ChevronRight,
  ChevronLeft,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const menuItems = [
  { id: "home", label: "Home", icon: Home, href: "#hero" },
  { id: "projects", label: "Projects", icon: Briefcase, href: "#projects" },
  { id: "skills", label: "Skills", icon: Code2, href: "#skills" },
  { id: "certifications", label: "Certifications", icon: Award, href: "#certifications" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (id: string, href: string) => {
    setActiveItem(id);
    if (isMobile) setIsExpanded(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-secondary/50 backdrop-blur-sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isExpanded && isMobile && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 h-full z-50",
          "flex flex-col items-start gap-2",
          "bg-secondary/50 backdrop-blur-lg border-r border-border/50",
          "transition-all duration-300 ease-in-out",
          isExpanded ? "w-64" : "w-16",
          isMobile && !isExpanded && "-translate-x-full",
          "md:translate-x-0"
        )}
        initial={false}
      >
        {/* Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex self-end mt-4 mr-2 mb-8"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>

        {/* Menu Items */}
        <div className="w-full px-2 space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              className={cn(
                "w-full flex items-center gap-4 px-3 py-3 rounded-lg",
                "transition-all duration-300 ease-in-out",
                "hover:bg-accent/50",
                activeItem === item.id ? "bg-primary text-primary-foreground" : "text-foreground/80",
                !isExpanded && "justify-center md:justify-center"
              )}
              onClick={() => handleItemClick(item.id, item.href)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <AnimatePresence>
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="whitespace-nowrap overflow-hidden font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}