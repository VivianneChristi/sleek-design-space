
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl 
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover-scale smooth-shadow-lg border-0 bg-card">
      <div className="relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}`}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="default" size="sm" className="rounded-full">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Projeto
            </Button>
          )}
          
          {githubUrl && (
            <Button variant="outline" size="sm" className="rounded-full">
              <Github className="mr-2 h-4 w-4" />
              Código
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
