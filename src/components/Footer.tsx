import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Mirosław Sankiewicz</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Doświadczony prawnik z Szczecina oferujący profesjonalną 
              pomoc prawną od ponad 30 lat.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Kancelaria Prawna<br />
              NIP: 123-456-78-90<br />
              REGON: 123456789
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  ul. Przykładowa 123, 70-001 Szczecin
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <a 
                  href="tel:+48911234567"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  +48 91 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a 
                  href="mailto:miroslaw@sankiewicz-prawnik.pl"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  miroslaw@sankiewicz-prawnik.pl
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Specjalizacje</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Prawo gospodarcze</li>
              <li>Prawo rodzinne</li>
              <li>Prawo karne</li>
              <li>Prawo cywilne</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Mirosław Sankiewicz. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Polityka prywatności
              </button>
              <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                Regulamin
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;