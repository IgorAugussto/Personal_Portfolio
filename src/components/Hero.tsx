import { Button } from "../ui-components/button";

export function Hero() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <h2 className="text-xl text-muted-foreground">
                Full Stack Developer & UI/UX Designer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about creating beautiful, functional, and user-centered digital experiences. 
              With expertise in modern web technologies, I bring ideas to life through clean code and 
              thoughtful design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                  Profile Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}