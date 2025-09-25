import { MapPin, Phone, Mail } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import logoDark from '@/assets/logo_1.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logoDark}
                alt="Mirosław Sankiewicz - Kancelaria Prawna"
                className="h-8 w-auto"
              />
              <h3 className="text-2xl font-bold">Mirosław Sankiewicz</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Doświadczony prawnik ze Szczecina oferujący profesjonalną
              pomoc prawną od ponad 35 lat.
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
            </ul>
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