import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            {/* <h2 className="text-xlfont-bold text-foreground">Kaustubh</h2>
            <p className="text-muted-foreground mt-2">Coding creativity into every line.</p> */}
          </div>
          
          <div className="flex space-x-4">
            <Link 
              href="https://github.com/Kaustubh2026" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/kaustubh-muley-827b76257/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:mkaustubh2026@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kaustubh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}