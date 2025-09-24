import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_r4sgf3s';
const EMAILJS_TEMPLATE_ID = 'template_o2us3qq';
const EMAILJS_PUBLIC_KEY = 'SJqItwSjnjorGao5x';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast({
        title: "Wymagana zgoda",
        description: "Musisz wyrazić zgodę na przetwarzanie danych osobowych.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Nie podano',
        subject: formData.subject,
        message: formData.message,
        current_date: new Date().toLocaleDateString('pl-PL', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Send email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Błąd wysyłania",
        description: "Przepraszam, wystąpił błąd. Spróbuj ponownie lub skontaktuj się telefonicznie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres kancelarii",
      content: "ul. Przykładowa 123\n70-001 Szczecin",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+48 91 123 45 67",
      link: "tel:+48911234567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "adwokat@miroslawsankiewicz.pl",
      link: "mailto:adwokat@miroslawsankiewicz.pl"
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      content: "Pn-Pt: 9:00 - 17:00\nSb: 9:00 - 13:00",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Umów <span className="text-accent">konsultację</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Potrzebujesz pomocy prawnej? Skontaktuj się ze mną już dziś.
            Pierwsza konsultacja telefoniczna jest bezpłatna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="space-y-6 slide-up">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-2">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 fade-in">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Imię i nazwisko *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Telefon
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Temat sprawy *
                      </label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        className="w-full"
                        placeholder="Krótki opis sprawy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Opis sprawy *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Proszę opisać swoją sprawę jak najdokładniej..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Mirosława Sankiewicza
                      w celu udzielenia odpowiedzi na zapytanie prawne zgodnie z RODO. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Wysyłanie...
                      </>
                    ) : (
                      'Wyślij wiadomość'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 fade-in">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="h-64 lg:h-80 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-lg font-medium text-primary mb-2">Kancelaria Prawna</p>
                <p className="text-muted-foreground">ul. Przykładowa 123, Szczecin</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent hover:text-accent/80 font-medium"
                >
                  Zobacz na mapie →
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;