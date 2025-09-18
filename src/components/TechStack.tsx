import { Card, CardContent, CardHeader, CardTitle } from "../ui-components/card";

export function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Vue.js", icon: "💚" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Next.js", icon: "⚫" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "SCSS", icon: "💄" }
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", icon: "💚" },
        { name: "Python", icon: "🐍" },
        { name: "Express", icon: "🚂" },
        { name: "Django", icon: "🎸" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" }
      ]
    },
    {
      title: "Tools & Others",
      technologies: [
        { name: "Git", icon: "📝" },
        { name: "Docker", icon: "🐋" },
        { name: "AWS", icon: "☁️" },
        { name: "Figma", icon: "🎨" },
        { name: "Webpack", icon: "📦" },
        { name: "Jest", icon: "🧪" }
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
        
        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-8 border-2 border-dashed border-border max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              🛠️ Add your tech stack images here
            </p>
            <p className="text-xs text-muted-foreground">
              Replace the emoji icons above with actual technology logos and screenshots of your preferred tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}