import { CheckCircle, Scale, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Scale, text: "35 lat praktyki prawniczej" },
    { icon: Users, text: "Setki zadowolonych klientów" },
    { icon: Award, text: "Specjalizacja w wielu dziedzinach prawa" },
    { icon: CheckCircle, text: "Indywidualne podejście do każdej sprawy" }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="fade-in">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
                O mnie
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Doświadczenie, które <span className="text-accent">buduje zaufanie</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Od ponad 35 lat pomagam klientom w rozwiązywaniu ich problemów prawnych.
                Moją specjalnością jest łączenie głębokiej wiedzy prawniczej z indywidualnym,
                empatycznym podejściem do każdego klienta.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wierzę, że prawo powinno służyć ludziom, dlatego zawsze staram się
                tłumaczyć skomplikowane kwestie prawne w sposób zrozumiały i przystępny.
                Każda sprawa jest dla mnie wyzwaniem, które podejmuję z pełnym zaangażowaniem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <achievement.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="slide-up">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-xl shadow-sm hover-lift">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">35</div>
                <div className="text-sm text-muted-foreground">Lat doświadczenia</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-sm hover-lift">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">380</div>
                <div className="text-sm text-muted-foreground">Wygranych spraw</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-sm hover-lift">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
              </div>
              <div className="text-center p-6 bg-card rounded-xl shadow-sm hover-lift">
                <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Dostępność w pilnych sprawach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;