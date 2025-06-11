
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Criando experiências
            <span className="text-gradient block">digitais incríveis</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            UX/UI Designer especializado em transformar ideias complexas em 
            interfaces intuitivas e experiências memoráveis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="px-8 py-6 text-lg font-medium rounded-full hover-scale"
            >
              Ver Meus Projetos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-medium rounded-full hover-scale"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="animate-bounce">
            <button
              onClick={scrollToProjects}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
