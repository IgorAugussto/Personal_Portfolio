import { Button } from "../ui-components/button";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui-components/sheet";
import { Menu, User, Briefcase, Code, Mail } from "lucide-react";

export function Header() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Verifica o tema preferido ao carregar a página
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Alterna o tema e salva a preferência
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Small delay to allow sheet to close before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);

  };
  return (
    <header className="w-full py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold text-foreground">Igor Augusto</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#stack" className="text-muted-foreground hover:text-foreground transition-colors">
            Tech Stack
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <Button 
          variant="outline"
          size="icon"
          className="hidden md:flex"
          onClick={toggleTheme}
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-800" />}          
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-8 space-y-4">
              <button
                onClick={() => handleNavClick('#about')}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-accent rounded-lg transition-colors"
              >
                <User className="h-5 w-5 text-muted-foreground" />
                <span>About</span>
              </button>
              
              <button
                onClick={() => handleNavClick('#projects')}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-accent rounded-lg transition-colors"
              >
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                <span>Projects</span>
              </button>
              
              <button
                onClick={() => handleNavClick('#stack')}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-accent rounded-lg transition-colors"
              >
                <Code className="h-5 w-5 text-muted-foreground" />
                <span>Tech Stack</span>
              </button>
              
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center space-x-3 p-4 text-left hover:bg-accent rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>Contact</span>
              </button>
              
              {/*<div className="pt-4 border-t border-border">
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>*/}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}