import { Card, CardContent, CardHeader, CardTitle } from "../ui-components/card";
import reactIcon from "../assets/icons/react-original.svg"
import typeScriptIcon from "../assets/icons/typescript-original.svg"
import tailWindIcon from "../assets/icons/tailwindcss-original.svg"
import sassIcon from "../assets/icons/sass-original.svg"
import javaIcon from "../assets/icons/java-original.svg"
import springBootIcon from "../assets/icons/spring-original.svg"
import postgresIcon from "../assets/icons/postgresql-original.svg"
import dockerIcon from "../assets/icons/docker-original.svg"
import postmanIcon from "../assets/icons/postman-original.svg"
import gitIcon from "../assets/icons/git-original.svg"

export function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: <img src={reactIcon} alt="React" className="w-6 h-6" /> },
        { name: "TypeScript", icon: <img src={typeScriptIcon} alt="Type Script" className="w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <img src={tailWindIcon} alt="Tailwind" className="w-6 h-6" /> },
        { name: "SCSS", icon: <img src={sassIcon} alt="SCSS" className="w-6 h-6" /> }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Java", icon: <img src={javaIcon} alt="Java" className="w-6 h-6" /> },
        { name: "Spring Boot", icon: <img src={springBootIcon} alt="Spring Boot" className="w-6 h-6" /> },
        { name: "PostgreSQL", icon: <img src={postgresIcon} alt="PostgreSQL" className="w-6 h-6" /> },
      ]
    },
    {
      title: "Tools & Others",
      technologies: [
        { name: "Git", icon: <img src={gitIcon} alt="Git" className="w-6 h-6" /> },
        { name: "Docker", icon: <img src={dockerIcon} alt="Docker" className="w-6 h-6" /> },
        { name: "Postman", icon: <img src={postmanIcon} alt="Postman" className="w-6 h-6" /> },
      ]
    }
  ];

  return (
    <section id="stack" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {techCategories.map((category, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center p-4 rounded-lg bg-background/50 hover:bg-background transition-colors border border-border/30"
                    >
                      <span className="text-2xl mb-2">{tech.icon}</span>
                      <span className="text-sm text-center text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/*<div className="text-center">
          <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              🛠️ Add your tech stack images here
            </p>
            <p className="text-xs text-muted-foreground">
              Replace the emoji icons above with actual technology logos and screenshots of your preferred tools
            </p>
          </div>
        </div>*/}
      </div>
    </section>
  );
}