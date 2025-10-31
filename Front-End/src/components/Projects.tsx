import { ProjectCard } from "../ui-components/ProjectCard";
import dioImageDemo from "../assets/Gemini_Generated_Image_gqk9n3gqk9n3gqk9.png";
import orgaizerImage from "../assets/Organizer.png";
import financial from "../assets/Financial.png";

export function Projects() {
  const projects = [
    {
      title: "Financial Organizer",
      description: "A modern analytics dashboard for e-commerce businesses with real-time data visualization, sales tracking, and inventory management features.",
      imageUrl: financial,
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://.postman.co/workspace/My-Workspace~78b7820d-76cc-4c0f-8560-cd76327de631/collection/40931996-0f1d784a-5680-4566-8ff1-37fc35d9a9e2?action=share&creator=40931996",
      githubUrl: "#"
    },
    {
      title: "Mobile DioDemo App",
      description: "Aplicativo mobile com autenticação biométrica, histórico de transações e transferências rápidas.",
      imageUrl: dioImageDemo,
      tags: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://www.youtube.com/watch?v=SEU_VIDEO_ID",
      githubUrl: "https://github.com/seuusuario/seu-projeto-mobile"
    },
    {
      title: "DokaPlanner",
      description: "A secure mobile banking interface with biometric authentication, transaction history, and seamless money transfer functionality.",
      imageUrl: orgaizerImage,
      tags: ["React Native", "Firebase", "Redux", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with smooth animations, optimized performance, and modern design principles.",
      imageUrl: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTgxMzQ2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vue.js", "SCSS", "GSAP", "Netlify"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development and design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        {/*<div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <div className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border">
              <p className="text-sm text-muted-foreground mb-4">
                📸 Add your project images here
              </p>
              <p className="text-xs text-muted-foreground">
                Replace the placeholder images above with screenshots of your actual projects
              </p>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}