import { ProjectCard } from "../ui-components/ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A modern analytics dashboard for e-commerce businesses with real-time data visualization, sales tracking, and inventory management features.",
      imageUrl: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MDY3MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with team workspaces, real-time updates, and advanced project tracking capabilities.",
      imageUrl: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBjb21wdXRlcnxlbnwxfHx8fDE3NTgxMzQ2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking interface with biometric authentication, transaction history, and seamless money transfer functionality.",
      imageUrl: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzbWFydHBob25lfGVufDF8fHx8MTc1ODEzNDYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
        
        <div className="text-center mt-12">
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
        </div>
      </div>
    </section>
  );
}