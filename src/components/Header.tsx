import { Button } from "../ui-components/button";

export function Header() {
  return (
    <header className="w-full py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold text-foreground">Your Name</h1>
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

        <Button variant="outline" className="hidden md:flex">
          Download CV
        </Button>
      </div>
    </header>
  );
}