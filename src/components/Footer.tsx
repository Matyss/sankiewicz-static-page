import { MapPin, Phone, Mail, Mailbox } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import logoDark from '@/assets/logo_1.png';
import adwokaturaLogo from '@/assets/adwokatura_logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_2fr_1fr] gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logoDark}
                alt="Mirosław Sankiewicz - Kancelaria Adwokacka"
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">Mirosław Sankiewicz</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Adwokat z wieloletnim doświadczeniem ze Szczecina oferujący profesjonalną pomoc prawną.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Kancelaria Adwokacka<br />
              NIP: 8520018068
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-4">
              <div>
                <div className="flex items-start space-x-3 mb-1">
                  <MapPin className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-primary-foreground/60 mb-1">Adres biura</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Aleja+Niepodległości+14/2,+71-899+Szczecin,+Poland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                    >
                      Aleja Niepodległości 14/2<br />71-899 Szczecin
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start space-x-3">
                  <Mailbox className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-xs text-primary-foreground/60 mb-1">Adres do doręczeń</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=ul.+Dworcowa+20b,+70-952+Szczecin,+Poland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                    >
                      ul. Dworcowa 20b<br />skrytka pocztowa nr 772<br />70-952 Szczecin
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <a
                  href="tel:+48601707117"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  +48 601 707 117
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:adwokat@miroslawsankiewicz.pl"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  adwokat@miroslawsankiewicz.pl
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
              <li>Prawo administracyjne</li>
            </ul>
          </div>

          {/* Advocacy Badge */}
          <div className="flex items-start justify-center md:justify-start lg:justify-end">
            <img
              src={adwokaturaLogo}
              alt="Okręgowa Rada Adwokacka"
              className="h-32 w-auto"
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Mirosław Sankiewicz. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm">
              <PrivacyPolicyModal>
                <button className="text-primary-foreground/60 hover:text-accent transition-colors">
                  Polityka prywatności
                </button>
              </PrivacyPolicyModal>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;