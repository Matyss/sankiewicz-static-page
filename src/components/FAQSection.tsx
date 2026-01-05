import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FAQSection = () => {
    const [openItems, setOpenItems] = useState<string[]>([]);
    const [openCategories, setOpenCategories] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const toggleCategory = (categoryId: string) => {
        setOpenCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(cat => cat !== categoryId)
                : [...prev, categoryId]
        );
    };

    const faqData = [
        {
            id: 'costs',
            title: 'Koszty i Płatności',
            questions: [
                {
                    id: 'court-costs',
                    question: 'Jakie są koszty postępowania sądowego?',
                    answer: 'Koszty to przede wszystkim opłaty sądowe (np. od pozwu — opłata stała lub procent od wartości przedmiotu sporu) oraz wydatki związane z toczącym się postępowaniem. Dokładne stawki i sposób naliczania reguluje ustawa o kosztach sądowych; w praktyce występują opłaty stałe i opłaty zależne od wartości przedmiotu sporu.'
                },
                {
                    id: 'cost-recovery',
                    question: 'Czy mogę odzyskać koszty procesu od przeciwnika?',
                    answer: 'Tak — zasadniczo strona przegrywająca ma obowiązek zwrócić stronie wygranej koszty niezbędne do celowego dochodzenia praw (w tym opłaty sądowe, wydatki i — częściowo — koszty zastępstwa procesowego). Zwrot kosztów zastępstwa procesowego jest jednak limitowany tabelami określonymi w rozporządzeniu Ministra Sprawiedliwości; sąd przyznaje zwrot w zakresie uznanym za celowy i zasadny.'
                },
                {
                    id: 'additional-costs',
                    question: 'Jakie są dodatkowe koszty w sprawie sądowej?',
                    answer: 'Dodatkowe koszty to m.in. wynagrodzenie i zaliczki na opinię biegłego sądowego, tłumaczenia przysięgłe, koszty przesyłek/doręczeń (zwłaszcza przez komornika) oraz koszty egzekucji (opłaty komornicze). Sąd może też wymagać wpłaty zaliczek na niektóre wydatki. Koszty egzekucyjne obciążają dłużnika, jeśli egzekucja jest skuteczna (np. opłata egzekucyjna liczona od wyegzekwowanej kwoty).'
                }
            ]
        },
        {
            id: 'family',
            title: 'Prawo Rodzinne',
            questions: [
                {
                    id: 'divorce-duration',
                    question: 'Ile trwa postępowanie rozwodowe?',
                    answer: 'To zależy od sytuacji – w przypadku zgodnego wniosku i braku sporów może zakończyć się nawet na jednej rozprawie, ale przy sporach o dzieci, winę czy majątek postępowanie często trwa od kilku miesięcy do kilku lat.'
                },
                {
                    id: 'divorce-documents',
                    question: 'Jakie dokumenty potrzebne do rozwodu?',
                    answer: 'Podstawowo: odpis aktu małżeństwa i odpisy aktów urodzenia wspólnych dzieci, a dodatkowo – dokumenty potwierdzające sytuację majątkową lub dowody potrzebne w sporach o winę, dzieci czy alimenty.'
                },
                {
                    id: 'alimony-calculation',
                    question: 'Jak ustalić wysokość alimentów?',
                    answer: 'Sąd bierze pod uwagę usprawiedliwione potrzeby dziecka (lub osoby uprawnionej) oraz możliwości zarobkowe i majątkowe zobowiązanego, a nie tylko jego aktualne dochody.'
                },
                {
                    id: 'separation-vs-divorce',
                    question: 'Co to jest separacja i czym różni się od rozwodu?',
                    answer: 'Separacja to formalne orzeczenie sądu stwierdzające rozkład pożycia, ale bez rozwiązania małżeństwa – małżonkowie nie mogą zawrzeć nowego związku. Rozwód natomiast definitywnie kończy małżeństwo.'
                },
                {
                    id: 'alimony-change',
                    question: 'Czy mogę zmienić wysokość alimentów?',
                    answer: 'Tak – można żądać podwyższenia lub obniżenia alimentów, jeśli zmieniły się istotnie potrzeby uprawnionego albo sytuacja majątkowa i zarobkowa zobowiązanego.'
                }
            ]
        },
        {
            id: 'business',
            title: 'Prawo Gospodarcze',
            questions: [
                {
                    id: 'company-setup',
                    question: 'Jak założyć spółkę z o.o.?',
                    answer: 'Można to zrobić przez internet w systemie S24 albo tradycyjnie u notariusza – konieczny jest umowy spółki, wpis do KRS, wniesienie kapitału zakładowego i zgłoszenia do urzędów.'
                },
                {
                    id: 'business-vs-company',
                    question: 'Jakie są różnice między działalnością gospodarczą a spółką?',
                    answer: 'Działalność gospodarcza to forma jednoosobowa, z pełną odpowiedzialnością właściciela za długi, a spółka z o.o. jest osobnym podmiotem, gdzie wspólnicy co do zasady odpowiadają tylko do wysokości wniesionych wkładów.'
                },
                {
                    id: 'unpaid-contractor',
                    question: 'Co zrobić, gdy kontrahent nie płaci?',
                    answer: 'Najpierw warto wezwać go do zapłaty i próbować ugody, a jeśli to nieskuteczne – można skierować sprawę do sądu i następnie egzekucji komorniczej.'
                },
                {
                    id: 'contract-termination',
                    question: 'Jak rozwiązać umowę z kontrahentem?',
                    answer: 'Zależy to od treści umowy – zwykle możliwe jest wypowiedzenie lub odstąpienie w przypadkach przewidzianych przez przepisy albo same postanowienia kontraktowe.'
                },
                {
                    id: 'employer-obligations',
                    question: 'Jakie są obowiązki pracodawcy przy zatrudnieniu?',
                    answer: 'Pracodawca musi zawrzeć umowę, zgłosić pracownika do ZUS, zapewnić bezpieczne i zgodne z prawem warunki pracy oraz wypłacać wynagrodzenie na czas.'
                }
            ]
        },
        {
            id: 'criminal',
            title: 'Prawo Karne',
            questions: [
                {
                    id: 'police-detention',
                    question: 'Co robić, gdy zostanę zatrzymany przez policję?',
                    answer: 'Masz prawo do kontaktu z adwokatem, poinformowania bliskiej osoby, a także prawo do zachowania milczenia – policja musi pouczyć Cię o przysługujących prawach.'
                },
                {
                    id: 'avoid-prison',
                    question: 'Czy można uniknąć kary więzienia?',
                    answer: 'Tak – w wielu przypadkach sąd może orzec karę ograniczenia wolności, grzywnę albo warunkowe zawieszenie wykonania kary pozbawienia wolności, zależnie od rodzaju i okoliczności czynu.'
                },
                {
                    id: 'misdemeanor-proceedings',
                    question: 'Co to jest postępowanie w sprawie o wykroczenie?',
                    answer: 'To uproszczona procedura dotycząca lżejszych naruszeń prawa (np. drobne kradzieże, wykroczenia drogowe), zwykle kończąca się mandatem, naganą, grzywną lub ograniczeniem wolności.'
                },
                {
                    id: 'criminal-mediation',
                    question: 'Jak działa postępowanie mediacyjne w sprawach karnych?',
                    answer: 'Mediacja polega na dobrowolnym spotkaniu pokrzywdzonego i oskarżonego z udziałem mediatora; jej celem jest ugoda i naprawienie szkody, a sąd może uwzględnić wynik mediacji przy wymiarze kary.'
                }
            ]
        },
        {
            id: 'procedures',
            title: 'Procedury Sądowe',
            questions: [
                {
                    id: 'case-duration',
                    question: 'Jak długo trwa sprawa w sądzie?',
                    answer: 'To zależy od rodzaju sprawy i obciążenia sądu – proste sprawy mogą zakończyć się w kilka miesięcy, a złożone postępowania trwają często kilka lat.'
                },
                {
                    id: 'self-representation',
                    question: 'Czy mogę reprezentować się sam w sądzie?',
                    answer: 'Tak – co do zasady każda osoba fizyczna może występować przed sądem samodzielnie, ale w sprawach bardziej skomplikowanych warto skorzystać z pomocy profesjonalnego pełnomocnika.'
                },
                {
                    id: 'power-of-attorney',
                    question: 'Co to jest pełnomocnictwo i kiedy jest potrzebne?',
                    answer: 'Pełnomocnictwo to pisemne upoważnienie do działania w imieniu strony; jest wymagane, gdy w sądzie chce Cię reprezentować adwokat, radca prawny lub inna osoba.'
                },
                {
                    id: 'appeal-deadlines',
                    question: 'Jakie są terminy na odwołanie?',
                    answer: 'Zwykle na apelację przysługuje 14 dni od doręczenia wyroku z uzasadnieniem, a na zażalenia – 7 dni; w innych postępowaniach terminy mogą się różnić.'
                },
                {
                    id: 'losing-case',
                    question: 'Co zrobić, gdy przegram sprawę?',
                    answer: 'Możesz wnieść środek odwoławczy, a jeśli wyrok stanie się prawomocny – pozostaje jego wykonanie; w niektórych przypadkach możliwe są jeszcze nadzwyczajne środki zaskarżenia.'
                }
            ]
        },
        {
            id: 'local',
            title: 'Informacje Lokalne Szczecin',
            questions: [
                {
                    id: 'court-jurisdiction',
                    question: 'W którym sądzie będzie rozpatrywana moja sprawa?',
                    answer: 'Decyduje właściwość miejscowa i rzeczowa — sprawy cywilne, rodzinne i gospodarcze są zwykle rozpatrywane w sądzie rejonowym właściwym dla miejsca zamieszkania lub siedziby firmy, natomiast sprawy odwoławcze lub bardziej złożone – w Sądzie Okręgowym. W Szczecinie sądami niższego stopnia są m.in. Sąd Rejonowy Szczecin-Centrum i Sąd Rejonowy Prawobrzeże i Zachód.'
                },
                {
                    id: 'court-hours',
                    question: 'Jakie są godziny pracy sądów w Szczecinie?',
                    answer: 'Przykładowo Sąd Rejonowy w Prawobrzeże i Zachód przyjmuje interesantów: poniedziałki: 7:30 – 18:00, od wtorku do piątku: 7:30 – 15:30. Godziny sądów rejonowych i poszczególnych wydziałów mogą się różnić — najlepiej sprawdzić na stronie sądu, do którego kierujesz sprawę.'
                },
                {
                    id: 'document-submission',
                    question: 'Gdzie złożyć dokumenty w Szczecinie?',
                    answer: 'Dokumenty zwykle składa się w Biurze Podawczym lub Biurze Obsługi Interesanta (BOI) sądu właściwego — np. w budynku sądu rejonowego odpowiedniego dla Twojego adresu. W przypadku wydziałów Sądu Okręgowego w Szczecinie: część wydziałów znajduje się przy ul. Piotra Skargi 19, inne przy ul. Małopolskiej 17, główna siedziba Sądu Okręgowego: ul. Kaszubska 42.'
                }
            ]
        }
    ];

    return (
        <section id="faq" className="section-padding bg-secondary/30">
            <div className="container-custom">
                <div className="text-center mb-16 fade-in">
                    <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium text-sm rounded-full mb-4">
                        Najczęściej zadawane pytania
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                        Najczęściej zadawane <span className="text-accent">pytania</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Podstawowe informacje dotyczące procedur prawnych.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqData.map((category) => {
                        const isCategoryOpen = openCategories.includes(category.id);
                        return (
                            <Card key={category.id} className="border-0 shadow-md hover-lift">
                                <CardContent className="p-0">
                                    {/* Category Header - Now Clickable */}
                                    <button
                                        onClick={() => toggleCategory(category.id)}
                                        className="w-full bg-accent/5 p-6 rounded-t-lg border-b border-accent/10 hover:bg-accent/10 transition-colors focus:outline-none focus:bg-accent/10"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-semibold text-primary">
                                                {category.title}
                                            </h3>
                                            <div className="flex-shrink-0">
                                                {isCategoryOpen ? (
                                                    <ChevronUp className="w-6 h-6 text-accent" />
                                                ) : (
                                                    <ChevronDown className="w-6 h-6 text-accent" />
                                                )}
                                            </div>
                                        </div>
                                    </button>

                                    {/* Questions - Only show when category is open */}
                                    {isCategoryOpen && (
                                        <div className="divide-y divide-gray-100 slide-down">
                                            {category.questions.map((item) => {
                                                const isOpen = openItems.includes(item.id);
                                                return (
                                                    <div key={item.id} className="bg-white">
                                                        <button
                                                            onClick={() => toggleItem(item.id)}
                                                            className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <h4 className="font-medium text-primary pr-4 leading-relaxed flex-1">
                                                                    {item.question}
                                                                </h4>
                                                                <div className="flex-shrink-0">
                                                                    {isOpen ? (
                                                                        <ChevronUp className="w-5 h-5 text-accent" />
                                                                    ) : (
                                                                        <ChevronDown className="w-5 h-5 text-accent" />
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </button>

                                                        {isOpen && (
                                                            <div className="px-6 pb-5 slide-down">
                                                                <div className="pt-2 border-t border-gray-100 mt-2">
                                                                    <p className="text-muted-foreground leading-relaxed">
                                                                        {item.answer}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 fade-in">
                    <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">
                                Nie znalazłeś odpowiedzi?
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Skontaktuj się bezpośrednio.
                            </p>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-medium transition-colors"
                            >
                                Kontakt
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
