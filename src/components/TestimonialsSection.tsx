import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anna",
      role: "Właścicielka firmy w Szczecinie",
      content: "Sprawa rozwodowa zakończyła się szybciej, niż się spodziewałam. Pan Mirosław zadbał, aby wszystko przebiegło w spokojnej atmosferze.",
      rating: 5
    },
    {
      name: "Tomasz",
      role: "Przedsiębiorca z regionu",
      content: "Dzięki Panu Mirosławowi udało się rozwiązać skomplikowany spór gospodarczy. Jego doświadczenie i skuteczność są niezaprzeczalne.",
      rating: 5
    },
    {
      name: "Maria",
      role: "Klientka prywatna",
      content: "Bardzo profesjonalne i życzliwe podejście. Pan Mirosław zawsze znajdował czas na wyjaśnienie wszystkich wątpliwości. Zdecydowanie polecam!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            Opinie klientów
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Co mówią o mnie <span className="text-accent">klienci</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Najlepszą rekomendacją mojej pracy są opinie zadowolonych klientów,
            którym mogłem pomóc w trudnych sytuacjach prawnych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift slide-up border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <div className="inline-flex items-center space-x-4 bg-card px-8 py-4 rounded-xl shadow-sm">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-lg font-semibold text-primary">4.9/5</div>
            <div className="text-muted-foreground">średnia ocen klientów</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;