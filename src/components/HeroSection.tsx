import { Button } from '@/components/ui/button';
import lawyerPortrait from '@/assets/lawyer-portrait.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-background"></div>

      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div className="text-center lg:text-left fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
                30+ lat doświadczenia
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
                Mirosław
                <br />
                <span className="text-accent">Sankiewicz</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Doświadczony prawnik ze Szczecina oferujący kompleksową obsługę prawną
                z pasją i zaangażowaniem
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

          {/* Portrait */}
          <div className="relative lg:order-last slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl hover-lift">
                <img
                  src={lawyerPortrait}
                  alt="Mirosław Sankiewicz - Doświadczony prawnik ze Szczecina"
                  className="w-full h-auto object-cover"
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