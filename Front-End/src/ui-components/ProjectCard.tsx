import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui-components/card";
import { Badge } from "../ui-components/badge";
import { Button } from "../ui-components/button";
import { ImageWithFallback } from "../figma/ImageWithFallBack";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, imageUrl, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="outline"
             size="sm" 
             className="flex-1 cursor-pointer"
             onClick={() => window.open(liveUrl, '_blank', 'noopener,noreferrer')}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button variant="outline" 
            size="sm" 
            className="flex-1 cursor-pointer"
            onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}