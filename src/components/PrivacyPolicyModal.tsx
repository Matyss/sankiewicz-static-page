import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface PrivacyPolicyModalProps {
    children: React.ReactNode;
}

const PrivacyPolicyModal = ({ children }: PrivacyPolicyModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-primary">
                        Polityka Prywatności
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Informacje dotyczące przetwarzania danych osobowych
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-700">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent">
                        <h3 className="font-semibold text-primary mb-2">Administrator danych osobowych</h3>
                        <p>
                            <strong>Mirosław Sankiewicz</strong><br />
                            ul. Dworcowa 20b<br />
                            skrytka pocztowa nr 772<br />
                            70-952 Szczecin
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-2">Zakres przetwarzanych danych</h3>
                        <p>
                            Dane podane w formularzu kontaktowym (imię, nazwisko, e-mail, telefon, opis sprawy)
                            są przetwarzane w celu udzielenia odpowiedzi na zapytanie prawne na podstawie zgody użytkownika.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-2">Przekazywanie danych</h3>
                        <p>
                            Dane mogą być przekazane podmiotom świadczącym usługi IT i hostingu.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-2">Prawa użytkownika</h3>
                        <p>
                            Przysługuje Państwu prawo dostępu do danych, ich poprawienia, usunięcia,
                            ograniczenia przetwarzania, sprzeciwu oraz prawo do cofnięcia zgody
                            i wniesienia skargi do Urzędu Ochrony Danych Osobowych (UODO).
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-2">Okres przechowywania danych</h3>
                        <p>
                            Dane są przechowywane przez czas niezbędny do realizacji celu kontaktu.
                            Podanie danych jest dobrowolne, ale niezbędne do obsługi zapytania.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-primary mb-2">Pliki cookies</h3>
                        <p>
                            Strona wykorzystuje pliki cookies wyłącznie do obsługi technicznej witryny.
                        </p>
                    </div>

                    <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                        <p className="text-xs text-muted-foreground">
                            <strong>Kontakt w sprawie danych osobowych:</strong><br />
                            W przypadku pytań dotyczących przetwarzania danych osobowych,
                            prosimy o kontakt pod adresem: adwokat@miroslawsankiewicz.pl
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PrivacyPolicyModal;
