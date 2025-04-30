"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  profile: string;
}

export default function Header({ profile }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.95)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(30, 41, 59, 0)", "rgba(30, 41, 59, 0.2)"]
  );

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
        style={{
          backgroundColor: headerBg,
          borderColor: headerBorder,
        }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"></h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className="nav-item text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden" 
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6">
          <nav className="flex flex-col space-y-6 items-center justify-center flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-gray-200 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}