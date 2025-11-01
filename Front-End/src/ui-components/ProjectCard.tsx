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
  comingSoon?: boolean;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  githubUrl,
  comingSoon = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 border-border/50 relative
      ${comingSoon ? "opacity-50 pointer-events-none" : "hover:shadow-lg"}`}
    >
      {/* IMAGEM */}
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className={`w-full h-48 object-cover transition-transform duration-300
            ${comingSoon ? "opacity-40" : "group-hover:scale-105"}`}
        />

        {/* Dark Overlay */}
        {comingSoon && (
          <div className="absolute inset-0 bg-black/40" />
        )}
      </div>

      {/* SELO EM BREVE */}
      {comingSoon && (
        <div
          className="absolute top-3 -right-12 rotate-45 bg-rose-600 text-white 
          text-xs font-bold px-14 py-1 shadow-md"
        >
          EM BREVE
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Ações — desabilitadas quando comingSoon */}
        {!comingSoon && (
          <div className="flex gap-3">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </Button>
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" /> Code
                </Button>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
