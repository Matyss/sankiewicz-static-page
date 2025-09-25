import { Button } from '@/components/ui/button';
import statueImage from '@/assets/statue.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-background"></div>

      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="text-center lg:text-left fade-in">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Mirosław
                <br />
                <span className="text-accent">Sankiewicz</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Prawnik ze Szczecina z 35-letnim doświadczeniem. Skuteczna pomoc prawna w sprawach gospodarczych, rodzinnych, karnych i cywilnych.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium"
              >
                Umów konsultację
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                Dowiedz się więcej
              </Button>
            </div>
          </div>

          {/* Statue Image */}
          <div className="relative lg:order-last slide-up">
            <div className="relative w-4/5 mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl hover-lift">
                <img
                  src={statueImage}
                  alt="Sprawiedliwość - Symbol prawa i sprawiedliwości"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;