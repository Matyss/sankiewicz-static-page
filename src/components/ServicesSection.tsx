import { Building2, Users, Shield, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Prawo gospodarcze",
      description: "Kompleksowa obsługa firm, umowy handlowe, spory gospodarcze i doradztwo biznesowe"
    },
    {
      icon: Users,
      title: "Prawo rodzinne",
      description: "Rozwody, alimenty, ustalenie ojcostwa, sprawy opiekuńcze z empatią i dyskrecją"
    },
    {
      icon: Shield,
      title: "Prawo karne",
      description: "Obrona w sprawach karnych, reprezentacja przed sądem, doradztwo w postępowaniach"
    },
    {
      icon: FileText,
      title: "Prawo cywilne",
      description: "Umowy, odszkodowania, sprawy spadkowe, nieruchomości i inne sprawy cywilne"
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            Specjalizacje
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Obszary <span className="text-accent">mojej praktyki</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferuję profesjonalną pomoc prawną w kluczowych obszarach prawa,
            zawsze z dbałością o najwyższe standardy obsługi klienta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift slide-up group border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
            className="text-accent font-medium hover:text-accent/80 transition-colors"
          >
            Skontaktuj się ze mną →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;