
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const featuredProjects = [
    {
      title: "App de E-commerce Mobile",
      description: "Design completo de aplicativo mobile para e-commerce com foco na experiência do usuário, desde o onboarding até a finalização da compra.",
      image: "photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Interface para dashboard de analytics com visualização de dados complexos de forma simples e intuitiva para tomada de decisões.",
      image: "photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Figma", "Data Visualization", "UI Design", "UX Research"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Website SaaS",
      description: "Design de landing page e área administrativa para plataforma SaaS, focando em conversão e usabilidade.",
      image: "photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Figma", "Webflow", "Landing Page", "A/B Testing"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const handleViewAllProjects = () => {
    // Navegar para a página de todos os projetos
    window.location.href = '/projetos';
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes em UX/UI Design, 
            mostrando diferentes abordagens e soluções criativas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleViewAllProjects}
            size="lg"
            className="px-8 py-6 text-lg font-medium rounded-full hover-scale"
          >
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
