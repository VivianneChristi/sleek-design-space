
import { Award, Code, Palette, Users } from "lucide-react";

export function AboutSection() {
  const skills = [
    "Figma", "Adobe XD", "Sketch", "Adobe Creative Suite",
    "Prototyping", "User Research", "Usability Testing", 
    "Design Systems", "Wireframing", "Information Architecture"
  ];

  const stats = [
    { icon: Award, label: "Anos de Experiência", value: "5+" },
    { icon: Users, label: "Projetos Completados", value: "50+" },
    { icon: Code, label: "Clientes Satisfeitos", value: "30+" },
    { icon: Palette, label: "Design Systems", value: "10+" }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Apaixonado por criar experiências digitais que conectam pessoas e tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6">Minha Jornada</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 5 anos de experiência em UX/UI Design, venho transformando 
                ideias complexas em soluções digitais intuitivas e acessíveis. Minha 
                paixão é entender as necessidades dos usuários e criar interfaces que 
                não apenas funcionem perfeitamente, mas também proporcionem experiências memoráveis.
              </p>
              <p>
                Trabalho com metodologias centradas no usuário, desde pesquisa e análise 
                até prototipagem e testes de usabilidade. Acredito que o bom design é 
                invisível - ele simplifica a vida das pessoas sem que elas percebam.
              </p>
              <p>
                Além do design, tenho conhecimentos em desenvolvimento front-end, 
                o que me permite criar designs mais viáveis tecnicamente e colaborar 
                melhor com equipes de desenvolvimento.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=face"
              alt="Workspace"
              className="rounded-2xl smooth-shadow-lg w-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card smooth-shadow animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Ferramentas & Habilidades
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium 
                          hover:bg-primary/20 transition-colors cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
