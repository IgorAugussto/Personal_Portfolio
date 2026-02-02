import { ProjectCard } from "../ui-components/ProjectCard";
import dioImageDemo from "../assets/Gemini_Generated_Image_gqk9n3gqk9n3gqk9.png";
import financial from "../assets/Financial.png";

export function Projects() {
  const projects = [
    {
      title: "Domus",
      description: "Personal finance management platform designed to give users full control over their income, expenses, and investments. With Domus, users can track financial activity, visualize monthly and yearly projections, and gain insights into net worth and savings rate — all through a secure, modern, and intuitive interface. Built for people who want clarity, organization, and smarter financial decisions.",
      imageUrl: financial,
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS", "React", "TypeScript", "Tailwind CSS"],
      liveUrl: "http://domus-frontend-igoraugusto.s3-website.us-east-2.amazonaws.com/login",
      githubUrl: "https://github.com/IgorAugussto/Domus"
    },
    {
      title: "Mobile DioDemo App",
      description: "Prototype of a mobile application inspired by the DIO.me platform, focused on making course access easier outside the desktop environment. The app allows users to track their progress, watch lessons, and browse through courses in a practical way — exploring what the official platform experience could look like on mobile devices.",
      imageUrl: dioImageDemo,
      tags: ["Java", "Dart"],
      liveUrl: "https://www.youtube.com/shorts/HH5RAKLyQ-w",
      githubUrl: "https://github.com/IgorAugussto/App_Dio"
    },
    /*{
      title: "Financial Organizer",
      description: "Application designed to help individuals and families organize their finances. It allows users to record income and expenses, and clearly visualize their monthly financial health — making it easier to control spending and achieve financial goals.",
      imageUrl: financial,
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Java", "Spring Boot", "Docker", "Postman", "PostgreSQL"],
      liveUrl: "https://youtube.com/shorts/HH5RAKLyQ-w?si=7K4XLXEAnq7MBd-E",
      githubUrl: "https://github.com/IgorAugussto/Domus_BackEnd",
      comingSoon: true
    }*/    
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