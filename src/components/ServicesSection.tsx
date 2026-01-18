import { Building2, Users, Shield, FileText, Landmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Prawo cywilne",
      description: "Umowy, odszkodowania, sprawy spadkowe, nieruchomości"
    },
    {
      icon: Building2,
      title: "Prawo gospodarcze",
      description: "Obsługa podmiotów gospodarczych, umowy handlowe, spory gospodarcze i doradztwo biznesowe i inne"
    },
    {
      icon: Users,
      title: "Prawo rodzinne",
      description: "Rozwody, podział majątku, alimenty i inne"
    },
    {
      icon: Shield,
      title: "Prawo karne",
      description: "Obrona w sprawach karnych, reprezentacja przed organami ścigania i wymiaru sprawiedliwości, obrona w sprawach karno-skarbowych"
    },
    {
      icon: Landmark,
      title: "Prawo administracyjne",
      description: "Rozprawy przed wojewódzkim i naczelnym Sądem Administracyjnym"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            Specjalizacje (przykładowe)
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Obszary <span className="text-accent">praktyki</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesjonalna pomoc prawna w kluczowych obszarach prawa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover-lift slide-up group border-0 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="w-8 h-8 text-accent transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4 transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-primary/80">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-6">
            Potrzebujesz pomocy w innej dziedzinie prawa?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-accent font-medium hover:text-accent/80 transition-all duration-300 hover:translate-x-1 icon-bounce"
          >
            Skontaktuj się ze mną →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;