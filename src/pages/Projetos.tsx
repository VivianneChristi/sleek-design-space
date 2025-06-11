
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projetos = () => {
  const allProjects = [
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
    },
    {
      title: "App de Produtividade",
      description: "Aplicativo mobile para gestão de tarefas e produtividade com design minimalista e foco na experiência do usuário.",
      image: "photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
      technologies: ["Sketch", "InVision", "Mobile Design", "Usability Testing"],
      liveUrl: "#"
    },
    {
      title: "Sistema de Design",
      description: "Desenvolvimento de sistema de design completo com componentes reutilizáveis e documentação detalhada.",
      image: "photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      technologies: ["Figma", "Design System", "Component Library", "Documentation"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portal Educacional",
      description: "Redesign completo de portal educacional com foco na acessibilidade e experiência de aprendizado online.",
      image: "photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      technologies: ["Adobe XD", "Accessibility", "User Journey", "Educational Design"],
      liveUrl: "#"
    }
  ];

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8">
              <Button 
                variant="ghost" 
                onClick={handleBackToHome}
                className="mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Button>
            </div>
            
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Todos os <span className="text-gradient">Projetos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore todos os meus trabalhos em UX/UI Design, desde aplicativos mobile 
                até sistemas complexos de design
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projetos;
