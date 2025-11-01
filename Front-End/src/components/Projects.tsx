import { ProjectCard } from "../ui-components/ProjectCard";
import dioImageDemo from "../assets/Gemini_Generated_Image_gqk9n3gqk9n3gqk9.png";
import orgaizerImage from "../assets/Organizer.png";
import financial from "../assets/Financial.png";

export function Projects() {
  const projects = [
    {
      title: "DokaPlanner",
      description: "Sistema inteligente para agendamento de salas de reunião.Com ele, o usuário escolheS qual sala usar, quando e por quanto tempo, evitando conflitos e garantindo melhor gestão do espaço. Ideal para empresas que precisam otimizar recursos e manter tudo sob controle.",
      imageUrl: orgaizerImage,
      tags: ["Java", "Postman", "Docker", "Spring Boot", "PostgreSQL"],
      liveUrl: "https://app.postman.co/workspace/My-Workspace~78b7820d-76cc-4c0f-8560-cd76327de631/collection/40931996-0f1d784a-5680-4566-8ff1-37fc35d9a9e2?action=share&creator=40931996",
      githubUrl: "https://github.com/IgorAugussto/Domus_BackEnd"
    },
    {
      title: "Mobile DioDemo App",
      description: "Protótipo de um aplicativo mobile inspirado na plataforma DIO.me, focado em facilitar o acesso aos cursos fora do desktop.O app permite acompanhar progresso, visualizar aulas e navegar entre os cursos de forma prática — explorando como seria a experiência oficial da plataforma em dispositivos móveis.",
      imageUrl: dioImageDemo,
      tags: ["Java", "Dart"],
      liveUrl: "https://www.youtube.com/shorts/HH5RAKLyQ-w",
      githubUrl: "https://github.com/IgorAugussto/App_Dio"
    },
    {
      title: "Financial Organizer",
      description: "Aplicativo criado para organizar a vida financeira de pessoas e famíliasPermite registrar entradas, saídas e visualizar a saúde financeira do mês de forma clara, ajudando no controle de gastos e no alcance de metas.",
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