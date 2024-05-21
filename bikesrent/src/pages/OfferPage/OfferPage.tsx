import React, { ReactElement } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './OferPage.module.scss';

const OfferPage = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.container}>
          <div className="container">
            <p>
              <h2 className={styles.title}>
                Regulamin ochrony danych osobowych w ElectricGo Sp. z o.o.
              </h2>
              <p className={styles.defenition}>
                <b className={styles.subtitle}>1. Słownik pojęć </b>
                <ul className={styles.list}>
                  <li>
                    Administrator Danych (Administrator) - ElectricGo Sp. z o.o. ul. Szczęsna 26,
                    02-454 Warszawa, NIP: 5223285321, REGON:527493428
                  </li>
                  <li>
                    Inspektor Ochrony Danych Osobowych (IOD) - osoba powoływana przez instytucję lub
                    organ Unii Europejskiej w celu zapewnienia stosowania przepisów Rozporządzenia
                    Parlamentu Europejskiego i Rady (UE) o ochronie osób fizycznych w związku z
                    przetwarzaniem danych osobowych przez instytucje i organy wspólnotowe i o
                    swobodnym przepływie takich danych.
                  </li>
                  <li>
                    Administrator Systemów Informatycznych (ASI) - osoba zobowiązana do zarządzania
                    systemami informatycznymi wykorzystywanymi do przetwarzania danych osobowych.
                    Jej podstawowym zadaniem jest bieżąca współpraca z Inspektorem Ochrony Danych
                    mająca na celu ochronę przetwarzanych przez firmę danych osobowych w zakresie
                    zabezpieczeń teleinformatycznych.
                  </li>
                  <li>
                    Dane osobowe zwykłe, standardowe – informacje o zidentyfikowanej lub możliwej do
                    zidentyfikowania osoby fizycznej (tj. podmiot danych). Osobą możliwą do
                    zidentyfikowania jest każda osoba fizyczna, którą można bezpośrednio lub
                    pośrednio zidentyfikować, w szczególności na podstawie Identyfikatora takiego
                    jak: imię i nazwisko, numer identyfikacyjny (np. PESEL, NIP, nr dowodu
                    osobistego), identyfikator internetowy jeden bądź kilka szczególnych czynników
                    określających fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną,
                    kulturową lub społeczną tożsamość osoby fizycznej, inne – dane adresowe i
                    teleadresowe, dane majątkowe.
                  </li>
                  <li>
                    Dane osobowe szczególnej kategorii, (tzw. wrażliwe) – dane osobowe ujawniające:
                    pochodzenie rasowe lub etniczne, poglądy polityczne, przekonania religijne lub
                    światopoglądowe, przynależność do związków zawodowych, dane genetyczne lub dane
                    biometryczne przetwarzane w celu jednoznacznego zidentyfikowania osoby
                    fizycznej, dane dotyczące zdrowia, dane dotyczące seksualności lub orientacji
                    seksualnej osoby, dane dotyczące wyroków skazujących oraz naruszeń prawa.
                  </li>
                  <li>
                    Przetwarzanie danych osobowych – operacja lub zestaw operacji wykonywanych na
                    danych osobowych lub zestawach danych osobowych w sposób zautomatyzowany lub
                    niezautomatyzowany, w tym: zbieranie, utrwalanie, organizowanie, porządkowanie,
                    przechowywanie, adaptowanie lub modyfikowanie, pobieranie, przeglądanie,
                    wykorzystywanie, ujawnianie poprzez przesłanie, rozpowszechnianie lub innego
                    rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie, usuwanie lub
                    niszczenie.
                  </li>
                  <li>
                    Metody przetwarzania danych – forma przetwarzania danych, tj. przetwarzanie
                    danych w formie papierowej lub elektronicznej.
                  </li>
                  <li>
                    Procesy przetwarzania danych – przepływ danych w ramach wewnętrznych struktur
                    organizacyjnych Administratora uwzględniający m.in. stanowiska pracy, na których
                    dochodzi do przetwarzania danych oraz ewentualne przekazywanie danych do
                    podmiotów zewnętrznych.
                  </li>
                  <li>
                    Procedury przetwarzania danych – dokumentacja regulująca zasady przetwarzania
                    danych przez Administratora, w szczególności obowiązujące akty wewnętrzne
                    (polityki, regulaminy) oraz faktycznie stosowane rozwiązania w toku
                    przetwarzania danych (tzw. zwyczaje pracownicze).
                  </li>
                  <li>
                    Członek personelu – osoba świadcząca pracę lub usługi na rzecz Administratora
                    niezależnie od podstawy, formy i wymiaru zatrudnienia (w szczególności na
                    podstawie umowy o pracę, umowy cywilnoprawnej, umowy o pracę tymczasową, stałej
                    współpracy gospodarczej).
                  </li>
                </ul>
                <br />
                <br />
                <b className={styles.subtitle}>2. Wprowadzenie</b>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 2.1. Administrator – ElectricGo Sp. z o.o. – działając w
                oparciu o art. 24 Rozporządzenia Parlamentu Europejskiego i Rady UE 2016/679 z dnia
                27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
                danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia
                dyrektywy 95/46/WE (Dz.U.UE.L.2016.119.1), w celu zapewnienia odpowiedniego poziomu
                bezpieczeństwa przetwarzanych danych osobowych, wprowadza niniejszym wewnętrzny
                system regulacji z zakresu danych osobowych. Opracowany on został na podstawie:
                <ul className={styles.list}>
                  <li>
                    Dyrektywa Parlamentu Europejskiego i Rady (UE) 2016/680 z dnia 27 kwietnia 2016
                    r.
                  </li>
                  <li>
                    Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                    2016 r. (dalej RODO)
                  </li>
                </ul>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 2.2. Na rzeczony wewnętrzny system regulacji z zakresu
                danych osobowych składają się przyjęte dokumenty w postaci:
                <ul className={styles.list}>
                  <li>
                    Regulamin Ochrony Danych Osobowych (dalej: Regulamin) – jako dokument o
                    fundamentalnym znaczeniu zawiera ogólny opis przyjętych norm i procedur
                    związanych z zapewnieniem bezpieczeństwa danych osobowych oraz opisuje
                    wewnętrzny system bezpieczeństwa danych przy uwzględnieniu zasady wiedzy
                    koniecznej. Regulamin adresowany jest do wszystkich członków personelu
                    Administratora i którego znajomość potwierdzana jest oświadczeniem ww. osób
                    składanym w formie pisemnej.
                  </li>
                  <li>
                    Polityka przetwarzania danych osobowych – określa zasady i tryb przetwarzania
                    danych osobowych niebędących danymi osobowymi szczególnej kategorii (danymi
                    wrażliwymi). Stanowi dokument powszechnie obowiązujący u Administratora,
                    adresowany do członków personelu uprawnionych do przetwarzania danych osobowych
                    zwykłych, standardowych.
                  </li>
                  <li>
                    Zasady przetwarzania wrażliwych danych osobowych – określa zasady i tryb
                    przetwarzania danych szczególnej kategorii (danych wrażliwych). Dokument
                    obowiązujący w stosunku do członków personelu Administratora, którzy uprawnieni
                    są do przetwarzania danych osobowych wrażliwych, szczególnej kategorii.
                  </li>
                </ul>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 2.3. Celem niniejszego Regulaminu jest wdrożenie zasad -
                privacy by design oraz privacy by default w ramach systemu bezpieczeństwa danych.
                Administrator uwzględnienia ochronę danych na każdym etapie ich przetwarzania. Tym
                samym dla zapewnienia funkcjonalności rzeczonego systemu, Administrator wprowadza
                dokumentację systematyzującą procedury, procesy i zasady przetwarzania danych. Z
                uwagi na starania zapewnienia najwyższych standardów przetwarzania danych i
                zgodności z obowiązującym prawem, Administrator uświadamia wszystkich członków
                personelu o obowiązujących regulacjach i przyjętych procedurach minimalizując ryzyko
                nieuprawnionego, niezamierzonego przetwarzania danych przez członków personelu.
                Jednocześnie Regulamin nakłada na wszystkich członków personelu obowiązek
                weryfikacji przetwarzania danych w zgodzie z przyjętymi zasadami.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 2.4. Nadzór, bieżąca kontrola, aktualizacja systemu
                bezpieczeństwa danych oraz prowadzenie dokumentacji są prowadzone przez
                Administratora Bezpieczeństwa Informacji / Inspektora Ochrony Danych Osobowych,
                Administratora Danych, Administratora Systemu Informatycznego.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 2.5. Przy powierzeniu funkcji Inspektora Ochrony Danych
                Osobowych, Administrator kierował się umiejętnościami i kwalifikacjami kandydata, w
                tym w szczególności spełnieniem warunków określonych w art. 37 ust. 5 RODO,
                (kwalifikacje zawodowe, fachowa wiedzę na temat prawa i praktyk w dziedzinie ochrony
                danych oraz umiejętności wypełnienia powierzonych zadań). Administrator zawiadamia
                organ nadzoru o powołaniu IOD. Do kompetencji Inspektora Ochrony Danych Osobowych
                należy:
                <ul className={styles.list}>
                  <li>
                    Sprawuje bieżącą kontrolę nad systemem przetwarzania danych, w tym monitoruje
                    przestrzeganie zasad przetwarzania danych oraz inicjuje działania profilaktyczne
                    i naprawcze w zakresie przestrzegania zasad przetwarzania danych.
                  </li>
                  <li>
                    Prowadzi dokumentację z zakresu przetwarzania danych, w tym:
                    <ul className={styles.list}>
                      <li>
                        Rejestr upoważnień do przetwarzania danych o Prowadzi / nadzoruje
                        prowadzenie rejestru czynności przetwarzania
                      </li>
                      <li>
                        Prowadzi / nadzoruje prowadzenie oraz monitoruje prawidłowość mapy procesów
                        przetwarzania danych Administratora w świetle przyjętych zasad przetwarzania
                        danych przez Administratora.
                      </li>
                      <li>Weryfikuje przestrzeganie zasad retencji danych osobowych</li>
                      <li>Weryfikuje aktualność i prawidłowość danych osobowych</li>
                    </ul>
                  </li>
                </ul>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 2.6. Administrator w celu zapewnienia bieżącej kontroli nad
                bezpieczeństwem przetwarzania danych wyznaczył stanowisko Administratora Systemu
                Informatycznego. Do kompetencji Administratora Systemu Informatycznego należy:
                <ul className={styles.list}>
                  <li>
                    Sprawuje bieżącą kontrolę nad przetwarzaniem danych w systemach informatycznych,
                    w tym monitoruje przestrzeganie zasad przetwarzania danych oraz inicjuje
                    działania profilaktyczne i naprawcze w zakresie przestrzegania zasad
                    przetwarzania danych.
                  </li>
                  <li>
                    Prowadzi dokumentację z zakresu przetwarzania danych opisaną w polityce
                    przetwarzania danych osobowych.
                  </li>
                </ul>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 2.7. Dane Inspektora Ochrony Danych Osobowych w tym kontakt
                udostępniony został każdemu członkowi personelu Administratora oraz osobom, których
                dane przetwarzane są przez Administratora poprzez: ujawnienie informacji w treści
                stosowanych klauzul umownych, informacyjnych, na stronie internetowej
                Administratora, poprzez wywieszenie w biurze Administratora.
                <br />
                <br />
                <br />
                <b className={styles.subtitle}>
                  3. Dane osobowe i ich przetwarzanie przez Administratora
                </b>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 3.1. Administrator w toku prac nad wewnętrznymi regulacjami
                z zakresu ochrony danych osobowych dokonał następujących czynności:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.1.1. Zidentyfikował dane
                osobowe przetwarzane przez Administratora.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.2. Zidentyfikował
                procesy, w ramach których przetwarzane są dane osobowe Administratora.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.3. Dokonał analizy
                przetwarzania danych zgodnie z zasadami wynikającymi z RODO.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.4. Dokonał ogólnej
                oceny ryzyka procesów przetwarzania.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.1.5. Wdrożył przyjęte
                regulacje z ochrony danych osobowych w zgodności z zasadami i normami wynikającymi z
                RODO.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 3.2. Dane osobowe przetwarzane przez Administratora
                obejmują zarówno dane osobowe zwykłe, jak i dane osobowe szczególnej kategorii –
                dane wrażliwe. Poprzez dane osobowe rozumieć należy:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.1. Dane osobowe
                zwykłe, standardowe – informacje o zidentyfikowanej lub możliwej do zidentyfikowania
                osoby fizycznej (tj. podmiot danych). Osobą możliwą do zidentyfikowania – podmiotem
                danych jest każda osoba fizyczna, którą można bezpośrednio lub pośrednio
                zidentyfikować, w szczególności na podstawie Identyfikatora takiego jak: 1) imię i
                nazwisko, 2) numer identyfikacyjny (np. PESEL, NIP, nr dowodu osobistego), 3)
                identyfikator internetowy 4) jeden bądź kilka szczególnych czynników określających
                fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub
                społeczną tożsamość osoby fizycznej; 5) inne – dane adresowe i teleadresowe, dane
                majątkowe
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.2.2. Dane osobowe
                wrażliwe, szczególnej kategorii – rozumie się przez to dane ujawniające: 1)
                pochodzenie rasowe lub etniczne, 2) poglądy polityczne, 3) przekonania religijne lub
                światopoglądowe, 4) przynależność do związków zawodowych 5) dane genetyczne lub dane
                biometryczne przetwarzane w celu jednoznacznego zidentyfikowania osoby fizycznej 6)
                dane dotyczące zdrowia, 7) dane dotyczące seksualności lub orientacji seksualnej
                osoby, 8) dane dotyczące wyroków skazujących oraz naruszeń prawa Administrator
                dokonał identyfikacji przetwarzanych danych w ramach występujących czynności
                przetwarzania danych.
                <br />
                <br />
                <br />
                <b className={styles.subtitle}>
                  4. Zasady przetwarzania danych osobowych przez Administratora
                </b>
                <br />
                Administrator w toku prac nad regulacjami z zakresu ochrony danych osobowych
                kierował się zasadami ujętymi w RODO, w tym:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.1. Zasada zgodności z prawem, rzetelności i
                przejrzystości Zgodnie z art. 5 ust. 1 lit. a RODO dane osobowe przetwarzane są
                zgodnie z prawem, rzetelnie i w sposób przejrzysty dla osoby, której dane dotyczą. W
                myśl preambuły RODO powyższa zasada skutkuje koniecznością poinformowania osób
                fizycznych w sposób przejrzysty, że dotyczące ich dane osobowe są zbierane,
                wykorzystywane, przeglądane lub w inny sposób przetwarzane. Zasada przejrzystości
                wymaga, by wszelkie informacje i wszelkie komunikaty związane z przetwarzaniem tych
                danych osobowych były łatwo dostępne i zrozumiałe oraz sformułowane jasnym i prostym
                językiem. Jednocześnie zasady rzetelnego i przejrzystego przetwarzania wymagają, by
                osoba, której dane dotyczą, była informowana o prowadzeniu operacji przetwarzania i
                o jej celach. Administrator powinien podać osobie, której dane dotyczą, wszelkie
                inne informacje niezbędne do zapewnienia rzetelności i przejrzystości przetwarzania,
                uwzględniając konkretne okoliczności i konkretny kontekst przetwarzania danych
                osobowych. Ponadto należy poinformować osobę, której dane dotyczą, o fakcie
                profilowania oraz o konsekwencjach takiego profilowania. Jeżeli gromadzi się dane
                osobowe od osoby, której dane dotyczą, należy ją też poinformować, czy ma ona
                obowiązek je podać, oraz o konsekwencjach ich niepodania. Informacje te można
                przekazać w połączeniu ze standardowymi znakami graficznymi, które w widoczny,
                zrozumiały i czytelny sposób przedstawią sens zamierzonego przetwarzania. Jeżeli
                znaki te są przedstawione elektronicznie, powinny nadawać się do odczytu
                maszynowego.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.2. Zasada ograniczenia celu przetwarzania danych Zgodnie
                z art. 5 ust. 1 lit. b RODO dane osobowe muszą być zbierane w konkretnych, wyraźnych
                i prawnie uzasadnionych celach i nieprzetwarzane dalej w sposób niezgodny z tymi
                celami. Jednocześnie przetwarzanie danych osobowych do celów innych niż cele, w
                których dane te zostały pierwotnie zebrane, powinno być dozwolone wyłącznie w
                przypadkach, gdy jest zgodne z celami, w których dane osobowe zostały pierwotnie
                zebrane. Jeżeli administrator planuje przetwarzać dane osobowe w celu innym niż cel,
                w których dane osobowe zostały zebrane, powinien on przed takim dalszym
                przetwarzaniem poinformować osobę, której dane dotyczą, o tym innym celu oraz
                dostarczyć jej innych niezbędnych informacji.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.3. Zasada minimalizacji danych Zgodnie z art. 5 ust. 1
                lit. c RODO dane osobowe muszą być adekwatne, stosowne oraz ograniczone do tego, co
                niezbędne do celów, w których są przetwarzane. Powyższe wymaga w szczególności
                zapewnienia ograniczenia okresu przechowywania danych do ścisłego minimum. Dane
                osobowe powinny być przetwarzane tylko w przypadkach, gdy celu przetwarzania nie
                można w rozsądny sposób osiągnąć innymi sposobami. Aby zapobiec przechowywaniu
                danych osobowych przez okres dłuższy, niż jest to niezbędne, administrator powinien
                ustalić termin ich usuwania lub okresowego przeglądu.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.4. Zasada prawidłowości danych Zgodnie z art. 5 ust. 1
                lit. d RODO dane osobowe muszą być prawidłowe i w razie potrzeby uaktualniane.
                Należy podjąć wszelkie rozsądne działania, aby dane osobowe, które są nieprawidłowe
                w świetle celów ich przetwarzania, zostały niezwłocznie usunięte lub sprostowane
                („prawidłowość”). Gwarancja realizacji zasady prawidłowości danych wymaga stosowania
                odpowiednich rozwiązań technicznych i organizacyjnych umożliwiających korektę
                nieprawidłowych lub nieaktualnych danych.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.5. Zasada ograniczenia przechowania danych Zgodnie z art.
                5 ust. 1 lit. e RODO dane osobowe muszą być przechowywane w formie umożliwiającej
                identyfikację osoby, której dane dotyczą, przez okres nie dłuższy, niż jest to
                niezbędne do celów, w których dane te są przetwarzane. Powyższe wymaga m.in.
                zapewnienia ograniczenia okresu przechowywania danych do niezbędnego minimum oraz
                wdrożenie odpowiednich procedur wyznaczających terminy przechowania danych (okresy
                retencji) lub procedur określających terminy okresowych przeglądów danych.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.6. Zasada integralności i poufności danych Zgodnie z art.
                5 ust. 1 lit. f RODO dane osobowe muszą być przetwarzane w sposób zapewniający
                odpowiednie bezpieczeństwo danych osobowych, w tym ochronę przed niedozwolonym lub
                niezgodnym z prawem przetwarzaniem oraz przypadkową utratą, zniszczeniem lub
                uszkodzeniem, za pomocą odpowiednich środków technicznych lub organizacyjnych
                („integralność i poufność”).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.7. Zasada rozliczalności Zgodnie z art. 5 ust. 2 RODO
                Administrator jest odpowiedzialny za przestrzeganie przepisów dotyczących zasad
                przetwarzania danych i musi być w stanie wykazać ich stosowanie („rozliczalność”).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 4.8. Zasada legalności Procesy przetwarzania danych
                wymagają legalności źródła i podstawy przetwarzanych danych, którymi mogą być,
                zgodnie z art. 6 RODO:
                <ul className={styles.list}>
                  <li>
                    zgoda osoby, której dane dotyczą w zakresie celu wskazanego w udzielonej zgodzie
                  </li>
                  <li>
                    umowa, której stroną jest osoba, której dane dotyczą a przetwarzanie danych jest
                    niezbędne do wykonania umowy,
                  </li>
                  <li>
                    przetwarzanie na podstawie przepisów prawa w ramach realizacji obowiązku
                    prawnego ciążącego na administratorze;
                  </li>
                </ul>
                Powyżej wskazane przesłanki legalizacyjne, mają charakter autonomiczny i
                równoprawny, co oznacza, że do spełnienia przez administratora zasady legalności
                wystarczające jest zaistnienie jednej spośród nich. Jednakże w przypadku warunku
                zgody, przyjmuje się, że nie jest co do zasady dopuszczalne jej wykorzystywanie do
                legalizacji przetwarzania, które swoje źródło ma w np. realizacji obowiązku lub
                przepisie prawa. Innymi słowy, opieranie legalności przetwarzania w oparciu o
                udzielone zgody nie powinno dotyczyć przetwarzania danych mających inne podstawy.
                Jednocześnie oznaczenie przesłanki legalizacyjnej, na której administrator opiera
                przetwarzanie danych, ma charakter uprzedni w stosunku do procesu przetwarzania.
                <br />
                <br />
                <br />
                <b className={styles.subtitle}>
                  5. Realizacja zasad przetwarzania danych przez Administratora
                </b>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 5.1. Administrator przed przystąpieniem do przetwarzania
                danych zapewnił, ażeby przetwarzanie danych następowało na następujących warunkach:
                <ul className={styles.list}>
                  <li>
                    przetwarzanie następuje wyłącznie przez osoby upoważnione. Upoważnienia
                    udzielane są przez Administratora, zaś członkowie personelu je posiadający
                    uprawnieni są wyłącznie do przetwarzania danych zgodnie z zakresem upoważnienia.
                    IOD prowadzi rejestr upoważnień, dokonując jego cyklicznej weryfikacji, która
                    odbywa się co 12 miesięcy. Członkom personelu nieposiadających upoważnienia
                    zabronione jest dokonywanie operacji na danych osobowych.
                  </li>
                  <li>
                    Administrator dokonał inwentaryzacji danych ustalając kategorie, zakres danych
                    oraz cele, metody i procesy przetwarzania, oznaczył przy tym obszary,
                    (pomieszczenia) w obrębie których dozwolone jest przetwarzanie danych. Samowolne
                    przetwarzanie przez członków personelu, danych nieewidencjonowanych przez
                    Administratora lub przetwarzanie w obszarach do tego nie przeznaczonych jest
                    niedopuszczalne.
                  </li>
                  <li>
                    Podmiot danych, przed przystąpieniem do przetwarzania jego danych uzyskał
                    informację zgodnie z wymogami RODO.
                  </li>
                  <li>
                    Administrator przed przystąpieniem do przetwarzania danych dokonał kategoryzacji
                    celów oraz przeprowadził analizę zasadności zakresu przetwarzanych danych dla
                    realizacji celów jego przetwarzania. Jednocześnie Administrator przyjął zasady
                    retencji danych oraz procedury nadzorcze i kontrolne w zakresie ich
                    przestrzegania. Samowolne przetwarzanie przez członków personelu, danych
                    osobowych dla innych celów niż ustalone przez Administratora lub przez dłuższy
                    czas jest niedopuszczalne.
                  </li>
                  <li>
                    Administrator wprowadził odpowiednie środki ochrony danych, w tym środki
                    organizacyjne, fizyczne i techniczne.
                  </li>
                </ul>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; 5.2. Dane osobowe klientów a również dane płatnicze
                gromadzą się przez Administratora w dokumentach, podpisywanych przez klientów, w
                serwisie chargebee.com, a również są przekazywane do serwisu transakcyjnego
                stripe.com.
              </p>
              <br />
              <br />
              <br />
              <b className={styles.subtitle}>6. Postanowienia końcowe</b>
              <br />
              Niniejszy Regulamin stanowi dokument jawny Administratora, z którego treścią zapoznani
              zostają wszyscy interesariusze. Członek personelu zobowiązany jest złożyć oświadczenie
              o tym, iż został zapoznany z obowiązującymi przepisami oraz przyjętymi regulacjami
              przez Administratora, a także o zobowiązaniu się do ich przestrzegania. W sprawach
              nieuregulowanych w niniejszym Regulaminie i dokumentacji wewnętrznej Administratora z
              zakresu bezpieczeństwa danych zastosowanie mają przepisy RODO oraz aktów prawa
              powszechnie obowiązującego.
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default OfferPage;
