import React, { ReactElement } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './PoliticPage.module.scss';

const PoliticPage = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.container}>
          <div className="container">
            <p>
              <h2 className={styles.title}>Polityka prywatności</h2>
              <p className={styles.mainInfo}>Szanowni Państwo!</p>

              <p className={styles.mainInfo}>
                Dokładamy wszelkich starań, by chronić zbierane przez nas dane osobowe zgodnie z
                przepisami krajowymi oraz rozporządzenia Parlamentu Europejskiego i Rady UE 2016/679
                z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
                przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
                uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz. Urz. UE
                L 119 z 04.05.2016, str. 1, ze zmianą ogłoszoną w Dz. Urz. UE L 127 z 23.05.2018,
                str. 2), (dalej: „RODO”).
                <br /> Udostępniamy Państwu niniejszą politykę prywatności, aby każda osoba, z którą
                wchodzimy w relację, wiedziała:
                <ul className={styles.list}>
                  <li>kto jest administratorem jej danych osobowych,</li>
                  <li>
                    w jakim zakresie, w jakich celach i na jakich podstawach prawnych przetwarzamy
                    dane oraz komu je udostępniamy,
                  </li>
                  <li>jakie prawa przysługują w związku z przetwarzaniem danych,</li>
                </ul>
                zgodnie z art. 13 i 14 RODO.
                <br /> Uszczegółowieniem polityki prywatności mogą być informacje przekazywane w
                momencie zbierania danych osobowych lub w rozsądnym terminie – najpóźniej w ciągu
                miesiąca – w przypadku gromadzenia danych ze źródeł pośrednich, tj. nie od osób,
                których one dotyczą.
              </p>
              <p className={styles.defenition}>
                <br />
                <b className={styles.subtitle}>§ 1 Administrator</b>
                <br />
                1. Administratorem danych osobowych jest ElectricGo Sp. z o.o. z siedzibą w
                Warszawie (02-454) przy ul. Szczęsnej 26 (dalej jako: „ElectricGo”, „Administrator”
                lub „My”).
                <br /> 2. W określonych przypadkach możemy przetwarzać także dane jako ich odbiorca
                lub podmiot przetwarzający.
              </p>
              <p className={styles.defenition}>
                <br />
                <b className={styles.subtitle}>§ 2 Inspektor ochrony danych</b>
                <br />
                By nadzorować sprawy związane z ochroną danych osobowych oraz udzielać Państwu
                szczegółowych informacji wyznaczyliśmy inspektora ochrony danych. Jego obowiązki
                pełni pan Ihar Karas. Mogą Państwo skontaktować się z inspektorem pisząc na adres
                siedziby administratora lub drogą mailową: biuro@electricgo.pl.
              </p>
              <p className={styles.defenition}>
                <br />
                <b className={styles.subtitle}>§ 3 Przetwarzanie danych</b>
                <br />
                <b>1. Klienci i kontrahenci</b>
                <br />
                Jeśli należą Państwo do grona naszych klientów/kontrahentów, to:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy w celu zawarcia lub realizacji
                umowy (art. 6 ust. 1 lit. b RODO), wypełnienia obowiązków prawnych ciążących na nas,
                wynikających z przepisów prawa (art. 6 ust. 1 lit. c RODO), a w określonych
                przypadkach do realizacji celów wynikających z prawnie uzasadnionych interesów (art.
                6 ust. 1 lit. f RODO). Przypadki naszych uzasadnionych interesów opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować:
                imię i nazwisko, nr tel., adres e-mail, nazwę firmy, NIP, Regon, funkcję/stanowisko,
                adres firmy; numer PESEL, numer dowodu osobistego, datę urodzenia oraz adres
                zamieszkania osób fizycznych.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                kurierskie, pocztowe, prawne lub informatyczne.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres min. 5 lat od końca
                roku kalendarzowego, w którym upłynął termin zapłaty podatku w związku z zawartą
                umową, jednakże przepisy prawa mogą przewidywać dłuższy okres przechowywania danych,
                w szczególności w zakresie dochodzenia lub obrony roszczeń. Przypadki dłuższego
                okresu przetwarzania danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wniesienia sprzeciwu wobec przetwarzania, prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa). Szczegółowe
                informacje dotyczące poszczególnych praw znajdą Państwo w § 5.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. Państwa dane osobowe mogą być przetwarzane w formie
                profilowania analitycznego, sprzedażowego oraz marketingowego. Wiążące decyzje nie
                są zautomatyzowane, czyli nigdy nie są podejmowane bez udziału człowieka.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;g. Podanie danych jest wymogiem umownym, a odmowa ich
                podania może uniemożliwić zawarcie lub realizację umowy.
                <p>
                  <br />
                  <b>2. Partnerzy</b>
                </p>
                Jeśli należą Państwo do grona naszych partnerów, partnerów handlowych, są Państwo
                ich pracownikami, współpracownikami, zleceniobiorcami, to:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy w celu zawarcia lub realizacji
                umowy (art. 6 ust. 1 lit. b RODO), wypełnienia obowiązków prawnych ciążących na nas,
                wynikających z przepisów prawa (art. 6 ust. 1 lit. c RODO), a w określonych
                przypadkach do realizacji celów wynikających z prawnie uzasadnionych interesów (art.
                6 ust. 1 lit. f RODO). Przypadki naszych uzasadnionych interesów opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować
                nazwę firmy, adres jej siedziby, adres www, dane do kontaktu, nr telefonu, adres
                e-mail, imię i nazwisko osoby wyznaczonej w celach kontaktowych, adres zamieszkania.
                W celu ustalenia szczegółów współpracy możemy poprosić Państwa o kilka informacji
                dotyczących Państwa firmy, liczby jej pracowników czy ich doświadczenia w zakresie
                świadczonych przez usług.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                kurierskie, pocztowe, prawne lub informatyczne.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres min. 5 lat od końca
                roku kalendarzowego, w którym upłynął termin zapłaty podatku w związku z zawartą
                umową, jednakże przepisy prawa mogą przewidywać dłuższy okres przechowywania danych,
                w szczególności w zakresie dochodzenia lub obrony roszczeń. Przypadki dłuższego
                okresu przetwarzania danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wniesienia sprzeciwu wobec przetwarzania, prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa). Szczegółowe
                informacje dotyczące poszczególnych praw znajdą Państwo w § 5.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. Państwa dane osobowe mogą być przetwarzane w formie
                profilowania analitycznego, sprzedażowego oraz marketingowego. Wiążące decyzje nie
                są zautomatyzowane, czyli nigdy nie są podejmowane bez udziału człowieka.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;g. Podanie danych jest wymogiem umownym, a odmowa ich
                podania może uniemożliwić zawarcie lub realizację umowy.
                <p>
                  <br />
                  <b>3. Dostawcy</b>
                </p>
                Jeśli dostarczają nam Państwo towary lub świadczą nam usługi, to:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy w celu zawarcia lub realizacji
                umowy (art. 6 ust. 1 lit. b RODO), wypełnienia obowiązków prawnych ciążących na nas,
                (art. 6 ust. 1 lit. c RODO), a w określonych przypadkach do realizacji celów
                wynikających z prawnie uzasadnionych interesów (art. 6 ust. 1 lit. f RODO).
                Przypadki naszych uzasadnionych interesów opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować:
                imię i nazwisko, nr tel., adres e-mail, nazwę firmy, NIP, Regon, funkcja/stanowisko.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                energetyczne, usługi kurierskie, pocztowe, prawne lub informatyczne.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres min. 5 lat od końca
                roku kalendarzowego, w którym upłynął termin zapłaty podatku w związku z zawartą
                umową, jednakże przepisy prawa mogą przewidywać dłuższy okres przechowywania danych,
                w szczególności w zakresie dochodzenia lub obrony roszczeń. Przypadki dłuższego
                okresu przetwarzania danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wniesienia sprzeciwu wobec przetwarzania, prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa). Szczegółowe
                informacje dotyczące poszczególnych praw znajdą Państwo w § 5.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. Podanie danych jest wymogiem umownym, a odmowa ich
                podania może uniemożliwić zawarcie lub realizację umowy.
                <p>
                  <br />
                  <b>4. Osoby reprezentujące oraz wyznaczone do kontaktu</b>
                </p>
                Jeśli są Państwo osobami reprezentującymi lub osobami wyznaczonymi do kontaktu, to:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy w celu zawarcia lub realizacji
                umowy (art. 6 ust. 1 lit. b RODO), wypełnienia obowiązków prawnych ciążących na nas,
                wynikających z przepisów prawa (art. 6 ust. 1 lit. c RODO), a w określonych
                przypadkach do realizacji celów wynikających z prawnie uzasadnionych interesów (art.
                6 ust. 1 lit. f RODO). Przypadki naszych uzasadnionych interesów opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować:
                imię i nazwisko, firmę, z którą są Państwo powiązani, Państwa stanowisko/pełniona
                funkcja, służbowy numer telefonu, służbowy adres e-mail, historię kontaktów między
                nami, a Państwem.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                kurierskie, pocztowe, prawne lub informatyczne.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres niezbędny do
                realizacji potrzeb związanych z utrzymywaniem kontaktu między nami, a Państwem.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wniesienia sprzeciwu wobec przetwarzania, prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa). Szczegółowe
                informacje dotyczące poszczególnych praw znajdą Państwo w § 5.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. Podanie danych jest dobrowolne, a odmowa ich podania może
                uniemożliwić komunikację.
                <p>
                  <br />
                  <b>5. Kandydaci</b>
                </p>
                Jeśli są Państwo zainteresowani naszymi ofertami pracy lub współpracy, to:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy w celu zawarcia umowy o pracę
                na podstawie i w zakresie określonym w art. 22(1) § 1 Kodeksu pracy (art. 6 ust. 1
                lit. b RODO), bądź zawarcia umowy cywilnoprawnej (art. 6 ust. 1 lit. b RODO).
                Przetwarzamy Państwa dane osobowe również do celów wynikających z prawnie
                uzasadnionych interesów (art. 6 ust. 1 lit. f RODO) zgodnie § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. W przypadku chęci uczestnictwa w kolejnych rekrutacjach
                lub zawarcia w dokumentach aplikacyjnych informacji, które mogą zostać uznane za
                dane wrażliwe, będą one przetwarzane na podstawie dobrowolnie wyrażonej przez
                Państwa zgody (art. 6 ust. 1 lit. a lub art. 9 ust. 2 lit. a RODO).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Kategorie przetwarzanych danych obejmują: imię (imiona) i
                nazwisko, datę urodzenia, wskazane przez Państwa dane kontaktowe, wykształcenie,
                kwalifikacje zawodowe, przebieg dotychczasowego zatrudnienia, firmę (w przypadku
                osób prowadzących jednoosobową działalność gospodarczą), a także inne dane, które
                podali Państwo w dokumentach aplikacyjnych.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Odbiorcami danych mogą być podmioty świadczące usługi
                informatyczne.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. Dane przechowywane będą przez okres prowadzenia danej
                rekrutacji, chyba że wyrażą Państwo zgodę na dalsze ich przechowywanie na potrzeby
                rekrutacji prowadzonych w przyszłości. Przypadki dłuższego okresu przetwarzania
                danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem
                przetwarzania, którego dokonano przed jej wycofaniem), prawo do wniesienia sprzeciwu
                wobec przetwarzania, prawo do usunięcia danych, prawo do wniesienia skargi do
                Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;g. Podanie danych wynika z zakresu określonego przez Kodeks
                pracy lub jest wymogiem umownym (w przypadku zatrudnienia w oparciu o umowę
                cywilnoprawną) a odmowa ich podania może uniemożliwić nawiązanie stosunku pracy lub
                zawarcie umowy.
                <p>
                  <br />
                  <b>6. Uczestnicy szkoleń i webinariów </b>
                </p>
                Jeśli są Państwo uczestnikami organizowanych przez nas szkoleń, włączając w to
                szkolenia w formie zdalnej oraz organizowane przez nas webinaria:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy na potrzeby realizacji
                szkolenia oraz obsługi programu licencyjnego na podstawie umowy (art. 6 ust. 1 lit.
                b RODO).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować
                imię i nazwisko, nazwę firmy, adres e-mail, kontaktowy numer telefonu, wizerunek.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                informatyczne, marketingowe, dostawcy komunikatorów internetowych.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres min. 5 lat od końca
                roku kalendarzowego, w którym upłynął termin zapłaty podatku w związku z zawartą
                umową, jednakże przepisy prawa mogą przewidywać dłuższy okres przechowywania danych,
                w szczególności w zakresie dochodzenia lub obrony roszczeń. Przypadki dłuższego
                okresu przetwarzania danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. Organizowane przez administratora webinaria i szkolenia w
                formie zdalnej mogą być również rejestrowane w takiej sytuacji może dojść do
                utrwalenia Państwa wizerunku, głosu oraz innych danych, które dobrowolnie Państwo
                udostępnią podczas webinarium lub szkolenia w formie zdalnej. Administrator nie
                wymaga podawania innych danych niż te, które są niezbędne do zarejestrowania na dane
                webinarium, czy szkolenie w formie zdalnej (nazwa firmy, imię lub nick, adres
                e-mail). Wszelkie pozostałe udostępnione przez Państwa dane będą przetwarzane na
                podstawie art. 6 ust. 1 lit. a RODO, czyli na podstawie dobrowolnej zgody. Zgodę
                można wycofać w dowolnym momencie – bez wpływu na zgodność z prawem przetwarzania,
                którego dokonano przed jej wycofaniem. Jeśli nie chcą Państwo udostępniać nam
                swojego wizerunku, wystarczy że wyłączą Państwo swoją kamerę internetową.
                Korzystanie z mikrofonu również nie jest obligatoryjne – wszelkie pytania do osoby
                prowadzącej dane webinarium lub szkolenie mogą Państwo kierować w formie pisemnej
                poprzez czat.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do wycofania zgody w dowolnym
                momencie (bez wpływu na zgodność z prawem przetwarzania, którego dokonano przed jej
                wycofaniem), prawo do usunięcia danych (w tym prawo do „bycia zapomnianym”), prawo
                do ograniczenia przetwarzania, prawo do wniesienia sprzeciwu wobec przetwarzania,
                prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2,
                00-193 Warszawa). Szczegółowe informacje dotyczące poszczególnych praw znajdą
                Państwo w § 5.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;g. Podanie danych jest wymogiem umownym, a odmowa ich
                podania może uniemożliwić zawarcie lub realizację umowy.
                <p>
                  <br />
                  <b>7. Sponsorowani </b>
                </p>
                Jeśli jesteśmy Państwa sponsorem, w ramach swojej działalności sponsoringowej:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane na podstawie umowy sponsoringu (art. 6 ust.
                1 lit. b RODO).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować
                imię i nazwisko.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                informatyczne, marketingowe.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres min. 5 lat od końca
                roku kalendarzowego, w którym upłynął termin zapłaty podatku w związku z zawartą
                umową, jednakże przepisy prawa mogą przewidywać dłuższy okres przechowywania danych,
                w szczególności w zakresie dochodzenia lub obrony roszczeń. Przypadki dłuższego
                okresu przetwarzania danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wniesienia sprzeciwu wobec przetwarzania, prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa). Szczegółowe
                informacje dotyczące poszczególnych praw znajdą Państwo w § 5.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. Podanie danych jest wymogiem umownym, a odmowa ich
                podania może uniemożliwić zawarcie lub realizację umowy.
                <p>
                  <br />
                  <b>8. Dziennikarze i przedstawiciele mediów </b>
                </p>
                Jeśli są Państwo dziennikarzami lub przedstawicielami mediów:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy przekazywania informacji
                prasowych (art. 6 ust. 1 lit. f RODO).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować
                imię i nazwisko, adres e-mail, kontaktowy numer telefonu.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                informatyczne, marketingowe.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres min. 5 lat od końca
                roku kalendarzowego, w którym upłynął termin zapłaty podatku w związku z zawartą
                umową, jednakże przepisy prawa mogą przewidywać dłuższy okres przechowywania danych,
                w szczególności w zakresie dochodzenia lub obrony roszczeń. Przypadki dłuższego
                okresu przetwarzania danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wniesienia sprzeciwu wobec przetwarzania, prawo do wniesienia skargi do Prezesa
                Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa). Szczegółowe
                informacje dotyczące poszczególnych praw znajdą Państwo w § 5.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. Podanie danych jest wymogiem umownym, a odmowa ich
                podania może uniemożliwić zawarcie lub realizację umowy.
                <p>
                  <br />
                  <b>9. Osoby komunikujące się z nami za pomocą naszej strony internetowej </b>
                </p>
                Jeśli kontaktują się Państwo z nami przez naszą stronę internetową, to:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a. Państwa dane przetwarzamy do realizacji celu wynikającego
                z prawnie uzasadnionych interesów, którym jest komunikacja między nami a Państwem
                (art. 6 ust. 1 lit. f RODO).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;b. Kategorie przetwarzanych danych osobowych mogą obejmować
                imię i nazwisko, nazwę firmy, adres e-mail, kontaktowy numer telefonu.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;c. Odbiorcami danych mogą być podmioty świadczące usługi
                informatyczne, marketingowe.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;d. Dane przechowywane będą przez okres niezbędny do
                udzielenia odpowiedzi na nadesłane zapytania lub do momentu wycofania przez Państwa
                zgody. Przypadki dłuższego okresu przetwarzania danych opisujemy w § 4.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;e. W związku z przetwarzaniem przysługuje Państwu prawo do
                dostępu do danych oraz ich sprostowania, prawo do ograniczenia przetwarzania, prawo
                do wniesienia sprzeciwu wobec przetwarzania, prawo do wycofania zgody w dowolnym
                momencie (bez wpływu na zgodność z prawem przetwarzania, którego dokonano przed jej
                wycofaniem), prawo do usunięcia danych, prawo do wniesienia skargi do Prezesa Urzędu
                Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;f. Podanie danych jest dobrowolne.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;g. Możemy także przetwarzać informacje, które umożliwiają
                nam zapamiętanie Państwa preferencji w użytkowaniu witryny - do zbierania tego typu
                danych wykorzystujemy pliki „cookies”.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;h. Dane dotyczące wykorzystywania naszej strony internetowej
                mogą być zastosowane do wewnętrznych celów statystycznych oraz funkcjonalności
                strony internetowej, a także w celu zapewnienia bezpieczeństwa informatycznego. W
                takiej sytuacji wykorzystujemy wyłącznie dane zagregowane i nie wykorzystujemy
                nazwisk, adresów e-mail, ani innych informacji pozwalających na Państwa bezpośrednią
                identyfikację.
              </p>
            </p>
            <p className={styles.defenition}>
              <br />
              <b className={styles.subtitle}>§ 4 Inne podstawy przetwarzania</b>
              <br />
              1. Oprócz sytuacji wymienionych w § 3 możemy w określonych przypadkach przetwarzać
              Państwa dane także w innych celach. Mogą one wiązać się w wydłużeniem okresu
              przechowywania Państwa danych.
              <br />
              <br />
              2. W celach niezbędnych do realizacji ciążących na nas obowiązków prawnych (art. 6
              ust. 1 lit. c RODO) Państwa dane będziemy przetwarzać:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;a. przez czas wykonywania obowiązków prawnych nakładanych na
              nas przez właściwe przepisy, w tym m.in. przepisy prawa podatkowego, ubezpieczeń
              społecznych, etc.;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;b. przez czas, w którym określone przepisy prawa nakazują nam
              przechowywać dane (przepisy te mogą przewidywać różny okres przechowywania danych).
              <br />
              <br />
              3. Ponadto, Państwa dane możemy przetwarzać także w innych celach, wynikających z
              naszych prawnie uzasadnionych interesów (podstawa prawna: art. 6 ust. 1 lit. f RODO):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;a. prowadzenia korespondencji;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;b. ustalania, obrony i dochodzenia roszczeń, co obejmuje m.in.
              sprzedaż naszych wierzytelności innemu podmiotowi;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;c. promocji firmy oraz naszych usług;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;d. tworzenia zestawień, analiz i statystyk;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;e. nawiązania współpracy biznesowej lub partnerskiej;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;f. archiwizacji;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;g. weryfikacji licencji przez użytkownika końcowego;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;h. wręczania gadżetów;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;i. realizowania szkoleń oraz dla celów edukacyjnych;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;j. prowadzenia programów motywacyjnych.
              <br />
              <br />
              4. W sytuacji, w której przebywają Państwo na terenie naszej siedziby, możemy utrwalać
              Państwa wizerunek za pomocą systemu monitoringu wizyjnego w celach związanych z
              zapewnieniem bezpieczeństwa osób i ochrony mienia. Dane utrwalone za pomocą
              monitoringu wizyjnego przechowywane będą nie dłużej niż przez okres 30 dni od momentu
              utrwalenia.
              <br />
              <br />
              5. Państwa dane osobowe nie będą przetwarzane na podstawie naszych prawnie
              uzasadnionych interesów, jeżeli w określonych przypadkach Państwa prawa i wolności
              okażą się wobec nich nadrzędne.
            </p>
            <p className={styles.defenition}>
              <br />
              <b className={styles.subtitle}>§ 5 Prawa</b>
              <br />
              1. Prawo dostępu do danych osobowych i uzyskania ich kopii – na Państwa żądanie
              udzielimy informacji, czy przetwarzamy Państwa dane osobowe. Jesteśmy również
              zobowiązani, na oddzielne żądanie, udzielić bardziej szczegółowych informacji w
              zakresie: celów przetwarzania, kategorii danych osobowych, odbiorców danych lub ich
              kategorii, okresu przechowywania danych osobowych lub kryteriów jego ustalania, źródła
              pozyskania danych, o zautomatyzowanym przetwarzaniu danych osobowych i konsekwencjach
              takiego przetwarzania danych dla Państwa. W przypadku przekazywania danych osobowych
              do państwa trzeciego poinformujemy Państwa również o stosowanych na potrzeby transferu
              zabezpieczeniach na Państwa żądanie. Na Państwa żądanie sporządzimy również kopię
              danych osobowych. Zostanie ona Państwu udostępniona w popularnym formacie pliku
              informatycznego. Pierwsza kopia zostanie udostępniona bezpłatnie. Jednak za każdą
              kolejną możemy naliczyć opłatę w wysokości, którą określimy w oparciu o postanowienia
              RODO.
              <br />
              <br />
              2. Prawo do sprostowania danych – jeśli okaże się, że Państwa dane osobowe są
              niepoprawne usuniemy nieprawidłowości. Zrobimy to z własnej inicjatywy – bądź, jeśli
              zwrócą nam Państwo na to uwagę – na Państwa żądanie.
              <br />
              <br />
              3. Prawo do usunięcia danych, w tym „prawo do bycia zapomnianym” – jeśli nie życzą
              sobie Państwo przetwarzania danych osobowych i stwierdzimy brak innych podstaw
              prawnych, które umożliwiają nam przetwarzanie Państwa danych – usuniemy je z naszych
              baz danych. Należy jednak pamiętać, że usunięcie niektórych danych może uniemożliwić
              nam świadczenie usług dla Państwa – dotyczy to tych usług w związku z którymi
              konieczne jest przetwarzanie danych osobowych, które zostały udostępnione.
              Przykładowo, nie będziemy mogli odpowiedzieć na Państwa pytania i przedstawić Państwu
              naszą ofertę, jeżeli zażądają Państwo usunięcia adresu e-mail. Mimo takowego żądania,
              w określonych będziemy jednak mogli przetwarzać niektóre dane osobowe na zasadach
              określonych w RODO.
              <br />
              <br />
              4. Prawo do ograniczenia przetwarzania – w przypadkach przewidzianych przez RODO, na
              Państwa żądanie ograniczymy przetwarzanie Państwa danych osobowych. Najprościej rzecz
              ujmując, ograniczenie przetwarzania danych osobowych uniemożliwia ich wykorzystywanie
              poza przechowywaniem. W takim przypadku jakiekolwiek inne działania na danych
              podlegających ograniczeniu przetwarzania, będą mogły być wykonywane jedynie za Państwa
              zgodą.
              <br />
              <br />
              5. Prawo do przenoszenia danych – na zasadach przewidzianych w RODO mogą Państwo
              zażądać przekazania danych osobowych zapisanych w standardowym formacie pliku
              nadającym się do odczytu maszynowego. Jeśli Państwa celem jest przekazanie ich innemu
              administratorowi, prześlemy plik zawierający Państwa dane osobowe bezpośrednio do
              niego.
              <br />
              <br />
              6. Prawo do sprzeciwu – w niektórych przypadkach, nawet jeśli przetwarzamy dane
              osobowe zgodnie z prawem, bez Państwa zgody, mogą Państwo żądać od nas zaprzestania
              przetwarzania danych osobowych wnosząc sprzeciw. Będzie on uzasadniony, jeżeli wykażą
              Państwo, że nasze zgodne z prawem działania mimo wszystko naruszają Państwa interesy,
              prawa lub wolności.
              <br />
              <br />
              7. Prawo do niepodlegania zautomatyzowanym decyzjom w indywidualnych przypadkach, w
              tym profilowaniu – mają Państwo prawo, by nie podlegać decyzjom, które miałyby opierać
              się wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, jeżeli miałyby
              one wywoływać wobec Państwa skutki prawne lub w podobny sposób istotnie na Państwa
              wpływać.
              <br />
              <br />
              8. Prawo do wycofania zgody w dowolnym momencie – w sytuacji, gdy poprosiliśmy Państwa
              o zgodę mogą Państwo wycofać tę zgodę w każdym czasie. Jeżeli nie będziemy mieli
              odrębnej podstawy przetwarzania, zaprzestaniemy wykorzystywania danych osobowych w tym
              celu, w jakim została wyrażona zgoda. Należy jednak pamiętać, że wycofanie zgody może
              czasem uniemożliwić dostarczenie Państwu interesujących treści lub informacji.
              <br />
              <br />
              9. Prawo do wniesienia skargi do organu nadzorczego – jeśli uważają Państwo, że przez
              nasze działania związane z przetwarzaniem danych osobowych Państwa prawa zostały
              naruszone, mogą Państwo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul.
              Stawki 2, 00-193 Warszawa).
              <br />
              <br />
              10. Wymienione powyżej prawa mogą być ograniczone w niektórych sytuacjach, np. kiedy
              możemy wykazać, że jesteśmy zobowiązani prawnie do przetwarzania Państwa danych.
              <br />
              <br />
              11. Jeśli pragną Państwo skorzystać z należnych praw, wszystko co należy zrobić to
              przesłać odpowiednią prośbę korzystając z danych kontaktowych wskazanych w § 1 lub §
              2.
            </p>
            <p className={styles.defenition}>
              <br />
              <b className={styles.subtitle}>§ 6 Źródła danych</b>
              <br />
              1. Co do zasady, większość danych, które przetwarzamy to informacje, które przekazali
              nam Państwo z własnej woli.
              <br />
              <br />
              2. W niektórych, sporadycznych przypadkach, zwłaszcza, jeżeli korzystają Państwo z
              naszych określonych usług możemy przetwarzać dane osobowe, które jesteśmy w stanie
              wywnioskować względem Państwa na podstawie innych informacji, które nam Państwo
              przekazują oraz które pozyskujemy w toku naszych relacji. Dane te nie będą
              przetwarzane dłużej niż jest to konieczne ze względu na cel, dla którego zostały
              zebrane lub będą niezwłocznie usuwane.
              <br />
              <br />
              3. W przypadku, gdy nie uzyskaliśmy danych osobowych bezpośrednio od Państwa,
              informujemy, że:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;a. dane mogły zostać uzyskane od osoby lub podmiotu, który
              wskazał Państwa jako osoby reprezentujące lub wyznaczone do kontaktu,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;b. w przypadku osób biorących udział w procesie rekrutacji lub
              osób zainteresowanych nawiązaniem współpracy w oparciu o umowę cywilnoprawną - dane
              osobowe mogły zostać uzyskane od agencji rekrutacyjnych lub firm doradztwa
              personalnego, z którymi współpracujemy lub naszych pracowników (w przypadku poleceń).
            </p>
            <p className={styles.defenition}>
              <br />
              <b className={styles.subtitle}>§ 7 Środki techniczne i organizacyjne</b>
              <br />
              1. Zobowiązujemy się właściwie chronić Państwa dane osobowe zgodnie z przyjętymi
              wewnętrznymi politykami, zarządzeniami, procedurami i standardami tak, aby dane
              osobowe były chronione przed nieautoryzowanym użyciem lub dostępem, bezprawnymi
              modyfikacjami, utratą lub zniszczeniem.
              <br />
              <br />
              2. Stosujemy zabezpieczenia fizyczne oraz logiczne o wysokim standardzie.
              <br />
              <br />
              3. Państwa dane osobowe nie będą przechowywane dłużej, niż jest to konieczne dla celu,
              dla którego zostały zebrane, włączając w to konieczność zachowania zgodności z
              obowiązkami prawnymi oraz dla rozpatrywania sporów, dochodzenia lub obrony roszczeń.
              <br />
              <br />
              4. W ramach zapewniania bezpieczeństwa przetwarzanych danych osobowych zobowiązujemy
              się do uwzględnienia:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;a. poufności – będziemy chronić Państwa dane przed
              przypadkowym ujawnieniem osobom trzecim;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;b. integralności – będziemy chronić Państwa dane przed
              nieuprawnioną modyfikacją;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;c. dostępności – będziemy zapewniać dostęp wyłącznie
              upoważnionych osób do Państwa danych, tylko jeżeli wystąpi taka konieczna potrzeba.
              <br />
              <br />
              5. Państwa dane osobowe mogą być przetwarzane przez osoby trzecie jedynie w przypadku,
              gdy taki podmiot zobowiąże się do zapewnienia właściwych technicznych i
              organizacyjnych środków gwarantujących zapewnienie bezpieczeństwa przetwarzania danych
              osobowych, jak również do zachowania poufności tych danych.
              <br />
              <br />
              6. Każdy nasz pracownik lub współpracownik posiadający dostęp do danych osobowych
              dysponuje odpowiednim upoważnieniem i jest zobowiązany do zachowania poufności.
              <br />
              <br />
              7. Dane osobowe, które podają Państwo na naszych stronach są szyfrowane i chronione za
              pomocą certyfikatu SSL. Zabezpiecza on transmisję danych w obrębie domeny i potwierdza
              jej autentyczność.
            </p>
            <p className={styles.defenition}>
              <br />
              <b className={styles.subtitle}>§ 8 Międzynarodowy transfer danych</b>
              <br />
              1. Państwa dane osobowe co do zasady nie będą przekazywane do państw spoza
              Europejskiego Obszaru Gospodarczego, w których prawo może nie zapewniać takiego samego
              poziomu ochrony Państwa danych.
              <br />
              <br />
              2. Jeśli jednak w ramach przetwarzania Państwa dane osobowe będą przekazywane do
              odbiorców w państwach trzecich (poza EOG), np. w Stanach Zjednoczonych, takie
              przekazywanie danych będzie odbywać się wyłącznie na podstawie standardowych klauzul
              umownych zgodnie z decyzją Komisji Europejskiej albo na podstawie Państwa wyraźnej
              zgody, o którą zostaną Państwo przez nas bezpośrednio poproszeni w stosownych
              przypadkach
            </p>
            <p className={styles.defenition}>
              <br />
              <b className={styles.subtitle}>§ 9 Pliki &quot;cookies&quot;</b>
              <br />
              1. Nasza strona internetowa korzysta z plików &quot;cookies&quot;.
              <br />
              <br />
              2. Pliki &quot;cookies&quot;, są to informacje w postaci niewielkich plików tekstowych
              zapisywanych na Państwa komputerach przez serwer. Są one istotne, ponieważ pozwalają
              serwerowi na każdorazowe odczytanie informacji w przypadku połączenia z konkretnym
              komputerem.
              <br />
              <br />
              3. Informacje zbierane przy użyciu plików &quot;cookies&quot; nie stanowią danych
              osobowych, jednakże mogą być wykorzystywane w celu udostępnienia Państwu określonych
              funkcji. Takie dane są zaszyfrowane w sposób uniemożliwiający dostęp do nich osobom
              nieuprawnionym.
              <br />
              <br />
              4. Oprogramowanie wykorzystywane do przeglądania stron internetowych domyślnie
              dopuszcza umieszczanie plików &quot;cookies&quot; w Państwa komputerach – za pomocą
              ustawień przeglądarki internetowej została wyrażona przez Państwa zgoda (art. 6 ust. 1
              lit. a RODO).
              <br />
              <br />
              5. Mogą Państwo dokonać właściwej konfiguracji swojej przeglądarki, aby zablokować
              automatyczne akceptowanie plików &quot;cookies&quot; lub uzyskać każdorazową
              informację o przesłaniu pliku na urządzenie. Więcej informacji o obsłudze plików
              &quot;cookies&quot; oraz możliwych konfiguracjach można uzyskać w ustawieniach Państwa
              przeglądarki. Poziom ograniczeń dotyczący stosowania plików &quot;cookies&quot; może
              wpłynąć na dostępność i funkcjonalności oferowane przez nasze strony internetowe,
              włącznie z możliwością zablokowania ich pełnego działania.
              <br />
              <br />
              6. Nasza strona internetowa wykorzystuje pliki &quot;cookies&quot; w celu poprawnej
              konfiguracji, a w szczególności do:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;a. dostosowywania zawartości stron internetowych serwisu do
              Państwa preferencji;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;b. poprawnej konfiguracji wybranych funkcji stron
              internetowych, umożliwiając w szczególności weryfikację autentyczności sesji
              przeglądarki;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;c. rozpoznania urządzenia i odpowiedniego wyświetlania strony
              internetowej, dostosowanej do Państwa indywidualnych potrzeb;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;d. zapamiętania Państwa ustawień i personalizacji interfejsu,
              np. w zakresie wybranego języka lub regionu;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;e. zapamiętania historii odwiedzonych stron w serwisie w celu
              rekomendacji treści, rozmiaru czcionki, wyglądu strony internetowej, itp.
              <br />
              <br />
              7. Możemy wykorzystywać również pliki &quot;cookies&quot; umożliwiające wyświetlanie
              reklam i rozliczanie ich efektów (mogą to być przykładowo Google Analytics, Google
              AdWords).
              <br />
              <br />
              8. Gromadzone przez nas dane mogą służyć nam do tworzenia tzw. profili, opartych m.
              in. na zainteresowaniach oraz ich aktywności na naszych stronach internetowych.
              <br />
              <br />
              9. Na podstawie stworzonych profili wysyłamy bardziej dostosowane komunikaty
              marketingowe informujące o naszych towarach lub usługach. Podstawą prawną
              przetwarzania przez nas tego rodzaju danych jest prawnie uzasadniony interes
              administratora (art. 6 ust. 1 lit. f RODO) polegający w szczególności na prowadzeniu
              działań marketingowych.
              <br />
              <br />
              10. W ramach naszych stron internetowych możemy gromadzić dane dotyczące Państwa
              aktywności. Powyższe dane będą wykorzystywane do wewnętrznych celów statystycznych
              oraz rozwijania i ulepszania naszych produktów, usług, metod komunikacji oraz
              funkcjonalności naszych stron internetowych, a także w celu zapewnienia bezpieczeństwa
              informatycznego. W takiej sytuacji wykorzystujemy wyłącznie dane zagregowane i nie
              wykorzystujemy nazwisk, adresów e-mail, ani innych informacji pozwalających na
              bezpośrednią identyfikację.
              <br />
              <br />
              11. Podstawą prawną przetwarzania przez nas tego rodzaju danych jest uzasadniony
              interes (art. 6 ust. 1 lit. f RODO) polegający w szczególności na ulepszaniu naszych
              stron internetowych, w celu zapewnienia wysokiej jakości usług i funkcjonalności
              naszych stron internetowych.
              <br />
              <br />
              12. Wskazane powyżej w niniejszym punkcie okresy przechowywania danych osobowych będą
              zachodzić najczęściej. W związku z wielością możliwych sytuacji, ewentualne pytania
              dotyczące okresów przechowywania danych osobowych w danej sytuacji prosimy kierować na
              dane kontaktowe wskazane w § 1 lub § 2.
            </p>
            <p className={styles.defenition}>
              <br />
              <b className={styles.subtitle}>§ 10 Uwagi końcowe</b>
              <br />
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej polityce prywatności, które
              mogą wynikać z potrzeb dostosowywania do zmian w przepisach prawa, czy obowiązujących
              standardów prywatności lub też związanych z poszerzeniem naszej oferty.
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default PoliticPage;
