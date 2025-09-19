import { Button } from "../ui-components/button";
import minhaFoto from '../assets/download.png'

export function Hero() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">Igor Augusto</span>
              </h1>
              <h2 className="text-xl text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build robust backend solutions with Java expertise and craft modern frontend experiences, as showcased in this
              portfolio site I developed. With a Systems Analysis and Development degree from UniCesumar and Java Developer 
              certifications, I bring a solid technical base. Currently, I’m enhancing my full-stack skills through the EBAC
              Full Stack course, eager to tackle challenging projects and expand my evolving portfolio.
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
                  <img src={minhaFoto} alt="Minha Foto" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}