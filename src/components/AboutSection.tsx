import { CheckCircle, Scale, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Scale, text: "35 lat praktyki prawniczej" },
    { icon: Users, text: "Obsługa osób prywatnych i firm" },
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

          {/* Timeline */}
          <div className="slide-up">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-accent/20 timeline-line"></div>

              {/* Timeline Items */}
              <div className="space-y-8">
                <div className="relative flex items-start timeline-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-md z-10 timeline-dot transition-all duration-300 hover:shadow-lg">
                    <span className="text-white font-bold text-sm">1989</span>
                  </div>
                  <div className="ml-6 bg-card p-4 rounded-lg shadow-sm hover-lift flex-1 transition-all duration-300 hover:shadow-md">
                    <div className="font-semibold text-primary mb-1">Rozpoczęcie praktyki prawniczej</div>
                    <div className="text-sm text-muted-foreground">Początek pracy zawodowej i pierwsze sprawy sądowe w Szczecinie</div>
                  </div>
                </div>

                <div className="relative flex items-start timeline-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-md z-10 timeline-dot transition-all duration-300 hover:shadow-lg">
                    <span className="text-white font-bold text-sm">1995</span>
                  </div>
                  <div className="ml-6 bg-card p-4 rounded-lg shadow-sm hover-lift flex-1 transition-all duration-300 hover:shadow-md">
                    <div className="font-semibold text-primary mb-1">Pierwsze duże sprawy gospodarcze</div>
                    <div className="text-sm text-muted-foreground">Doświadczenie w obsłudze firm i sporach handlowych</div>
                  </div>
                </div>

                <div className="relative flex items-start timeline-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-md z-10 timeline-dot transition-all duration-300 hover:shadow-lg">
                    <span className="text-white font-bold text-sm">2005</span>
                  </div>
                  <div className="ml-6 bg-card p-4 rounded-lg shadow-sm hover-lift flex-1 transition-all duration-300 hover:shadow-md">
                    <div className="font-semibold text-primary mb-1">Rozwój kancelarii w Szczecinie</div>
                    <div className="text-sm text-muted-foreground">Stała obsługa klientów indywidualnych i przedsiębiorców z regionu</div>
                  </div>
                </div>

                <div className="relative flex items-start timeline-item">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md z-10 timeline-dot transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <span className="text-white font-bold text-sm">2025</span>
                  </div>
                  <div className="ml-6 bg-gradient-to-r from-accent/5 to-primary/5 p-4 rounded-lg shadow-sm hover-lift flex-1 border border-accent/20 transition-all duration-300 hover:shadow-md hover:border-accent/30">
                    <div className="font-semibold text-primary mb-1">Ponad 35 lat doświadczenia w zawodzie</div>
                    <div className="text-sm text-muted-foreground">Kontynuacja profesjonalnej pomocy prawnej dla osób prywatnych i firm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;