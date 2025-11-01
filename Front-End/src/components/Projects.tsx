import { ProjectCard } from "../ui-components/ProjectCard";
import dioImageDemo from "../assets/Gemini_Generated_Image_gqk9n3gqk9n3gqk9.png";
import orgaizerImage from "../assets/Organizer.png";
import financial from "../assets/Financial.png";

export function Projects() {
  const projects = [
    {
      title: "DokaPlanner",
      description: "Intelligent system for meeting room scheduling. With it, users can choose which room to use, when, and for how long — avoiding conflicts and ensuring better space management. Ideal for companies that need to optimize resources and keep everything under control.",
      imageUrl: orgaizerImage,
      tags: ["Java", "Postman", "Docker", "Spring Boot", "PostgreSQL"],
      liveUrl: "https://app.postman.co/workspace/My-Workspace~78b7820d-76cc-4c0f-8560-cd76327de631/collection/40931996-0f1d784a-5680-4566-8ff1-37fc35d9a9e2?action=share&creator=40931996",
      githubUrl: "https://github.com/IgorAugussto/Domus_BackEnd"
    },
    {
      title: "Mobile DioDemo App",
      description: "Prototype of a mobile application inspired by the DIO.me platform, focused on making course access easier outside the desktop environment. The app allows users to track their progress, watch lessons, and browse through courses in a practical way — exploring what the official platform experience could look like on mobile devices.",
      imageUrl: dioImageDemo,
      tags: ["Java", "Dart"],
      liveUrl: "https://www.youtube.com/shorts/HH5RAKLyQ-w",
      githubUrl: "https://github.com/IgorAugussto/App_Dio"
    },
    {
      title: "Financial Organizer",
      description: "Application designed to help individuals and families organize their finances. It allows users to record income and expenses, and clearly visualize their monthly financial health — making it easier to control spending and achieve financial goals.",
      imageUrl: financial,
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Java", "Spring Boot", "Docker", "Postman", "PostgreSQL"],
      liveUrl: "https://youtube.com/shorts/HH5RAKLyQ-w?si=7K4XLXEAnq7MBd-E",
      githubUrl: "https://github.com/IgorAugussto/Domus_BackEnd",
      comingSoon: true
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