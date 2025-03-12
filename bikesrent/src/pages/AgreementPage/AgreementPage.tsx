/* eslint-disable jsx-a11y/iframe-has-title */
import React, { ReactElement } from 'react';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import styles from './AgreementPage.module.scss';

const AgreementPage = (): ReactElement => {
  return (
    <>
      <Header />
      <section className={styles.home}>
        <div className={styles.container}>
          <div className="container">
            <h2 className={styles.title}>Regulamin Systemu ElectricGo</h2>
            <h3 className={styles.subtitle}>(obowiązuje od dnia …)</h3>
            <p className={styles.mainInfo}>
              Witaj w ElectricGo!
              <br /> Poniżej prezentujemy Regulamin, w którym poznasz zasady i warunki wynajmu
              rowerów elektrycznych ElectricGo.
              <br /> W pierwszej kolejności zapoznaj się z definicjami kluczowych pojęć, które
              znajdziesz w Regulaminie.
              <br /> Pamiętaj, żeby przed rozpoczęciem korzystania z usług ElectricGo zapoznać się z
              całą treścią Regulaminu.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>Definicje</b>
              <br /> Użyte w Regulaminie, pojęcia pisane wielką literą mają następujące znaczenie:
              <ul className={styles.list}>
                <li>
                  <b>Regulamin:</b> niniejszy dokument określający korzystanie z usług świadczonych
                  przez ElectricGo, którego postanowienia stanowią warunki Umowy;
                </li>
                <li>
                  <b>ElectricGo:</b> ElectricGo spółka z ograniczoną odpowiedzialnością z siedzibą w
                  Warszawie (02-454), przy ul. Szczęsna 26, wpisana do Krajowego Rejestru Sądowego
                  pod numerem: 0001082313, w imieniu spółki.
                </li>
                <li>
                  <b>Umowa:</b> umowa zawierana pomiędzy ElectricGo a Klientem, której przedmiotem
                  jest wynajem Roweru przez Klienta, określona w niniejszym Regulaminie;
                </li>
                <li>
                  <b>Abonament:</b> wynagrodzenie płacone przez Klienta na rzecz ElectricGo w zamian
                  za wynajem Roweru na podstawie Umowy;
                </li>
                <li>
                  <b>Klient:</b> każda osoba fizyczna, która ukończyła co najmniej 18 lat i posiada
                  pełną zdolność do czynności prawnych oraz zawarła Umowę;
                </li>
                <li>
                  <b>Identyfikator Klienta:</b> indywidualny numer nadany Klientowi po zawarciu
                  Umowy używany podczas kontaktu Klienta a ElectricGo;
                </li>
                <li>
                  <b>Rower:</b> rower elektryczny udostępniony Klientowi przez ElectricGo w ramach
                  Umowy a również akumulator, blokada koła, dodatkowa kłódka, ładowarka;
                </li>
                <li>
                  <b>Okres rozliczeniowy:</b> minimalny okres wypożyczenia roweru wynoszący 7 dni
                  kalendarzowych, rozpoczynający się w dniu rozpoczęcia wynajmu;
                </li>
                <li>
                  <b>Data Końcowa:</b> ostatni dzień obowiązywania Umowy;
                </li>
                <li>
                  <b>Strona Internetowa:</b> witryna https://electricgo.pl za pośrednictwem której
                  ElectricGo świadczy swoje usługi, w tym zawierana jest Umowa;
                </li>
                <li>
                  <b>Portal Klienta:</b> przestrzeń dostępna dla Klienta w portalu internetowym
                  https://electricgo.pl, gdzie Klient ma możliwość zarządzania zawartą Umową. W
                  szczególności, za pośrednictwem Portalu klienta, Klient może zaktualizować dane
                  osobowe, metodę płatności, czy też złożyć wypowiedzenie Umowy;
                </li>
                <li>
                  <b>Kod rabatowy:</b> elektroniczny bon towarowy o określonej przez ElectricGo
                  wartości oraz terminie ważności, który może być wykorzystany przez Klienta do
                  opłacenia Umowy. Po upływie daty ważności Kod rabatowy jest uważany za
                  przeterminowany i nie jest honorowany przez ElectricGo;
                </li>
                <li>
                  <b>Usterka:</b> losowa wada powstała wskutek normalnego używania Roweru lub
                  baterii, w szczególności przebita dętka, zużyte klocki hamulcowe, zużyty/urwany
                  łańcuch, uszkodzona przerzutka, pęknięta szprycha, zużyta kaseta;
                </li>
                <li>
                  <b>Uszkodzenie:</b> wada Roweru, baterii lub ładowarki spowodowana ich
                  nieprawidłowym używaniem lub powstała wskutek zdarzenia losowego. Uszkodzeniem
                  może być w szczególności połamany lub zgięty element Roweru.
                </li>
                <li>
                  <b>Program poleceń:</b> program lojalnościowy określony w pkt. 15 Regulaminu;
                </li>
                <li>
                  <b>Kod polecający:</b> unikalny ciąg znaków, przekazywany Klientowi po zawarciu
                  Umowy. Kod może być używany przez Klienta do polecania usług ElectricGo w ramach
                  Programu poleceń. Kod polecający jest udostępniany Klientowi na adres e-mail
                  wskazany w formularzu rejestracyjnym.
                </li>
              </ul>
            </p>

            <p className={styles.defenition}>
              <b className={styles.subtitle}>1. Zawarcie Umowy </b>
              <br />
              1.1. W ramach Umowy ElectricGo oddaje Klientowi do używania Rower na warunkach i w
              zamian za wynagrodzenie, o którym mowa w Regulaminie.
              <br /> 1.2. Umowa może być zawarta wyłącznie przez osobę fizyczną, która:
              <ul className={styles.list}>
                <li>ukończyła 18 lat,</li>
                <li>posiada pełną zdolność do czynności prawnych,</li>
                <li>posiada kartę płatniczą MasterCard /Visa,</li>
                <li>
                  dysponuje urządzeniem z dostępem do sieci Internet, przeglądarką internetową
                  obsługująca JavaScript, włączona obsługą plików cookies oraz aktywnym kontem
                  poczty elektronicznej (e-mail),
                </li>
                <li>wypełni formularz rejestracyjny i poda w nim prawdziwe dane.</li>
              </ul>
              1.3. Wypełnienie formularza rejestracyjnego na Stronie Internetowej następuje poprzez
              podanie następujących danych osobowych i dokonanie następujących działań:
              <ul className={styles.list}>
                <li>imię i nazwisko,</li>
                <li>numer dowodu osobistego / lub karty pobytu / lub paszportu,</li>
                <li>numer telefonu,</li>
                <li>adres e-mail</li>
                <li>miejsce zamieszkania</li>
                <li>zaakceptowanie Regulaminu i Polityki prywatności,</li>
                <li>
                  podanie danych karty płatniczej oraz udzielenie polecenia zapłaty w celu
                  realizowania płatności za Umowę.
                </li>
              </ul>
              1.4. Zawarcie Umowy następuje po wypełnieniu formularza rejestracyjnego w sposób
              wskazany w pkt. 1.3 powyżej. W celu potwierdzenia zawarcia Umowy, na adres e-mail
              Klienta podany w formularzu rejestracyjnym, wysłane zostanie potwierdzenie rejestracji
              wraz z Regulaminem w brzmieniu z dnia zawarcia Umowy.
              <br /> 1.5. Warunkiem wydania Roweru jest weryfikacja danych przekazanych przez
              Klienta w formularzu rejestracyjnym, w momencie przekazania Roweru. Dane będą
              weryfikowane w oparciu o okazany ElectricGo przez Klienta dokument tożsamości.
              <br /> 1.6. Jeden Klient może zawrzeć Umowę tylko na jeden Rower. Nie dotyczy to
              sytuacji, w których ElectricGo wymieni Klientowi Rower.
              <br /> 1.7. Rower jest częścią floty Rowerów. Umowa nie dotyczy konkretnego Roweru.
              <br />
              1.8. Rower pozostanie przez cały czas własnością ElectricGo. Klient nie jest
              uprawniony do przekazywania Roweru, w szczególności do używania, najmu, dzierżawy
              osobom trzecim, jak również udzielać żadnych zabezpieczeń na Rowerze.
              <br /> 1.9. Klient będzie odpowiedzialny za przekazanie zmian danych znanych
              ElectricGo, takich jak nowy adres zamieszkania, numer telefonu czy e-mail
              niezwłocznie, nie później niż 14 dni od momentu zmiany danych.
              <br /> 1.10. Odbiór oraz zwrot Roweru będą dokonywane na podstawie protokołu
              zdawczo-odbiorczego za zgodą stron.
            </p>

            <p className={styles.defenition}>
              <b className={styles.subtitle}>2. Warunki korzystania z Roweru</b>
              <br /> 2.1. ElectricGo wyda Klientowi Rower nowy lub używany, bez wad i w pełni zdatny
              do używania i dopuszczony do ruchu. ElectricGo informuje Klienta o stanie Roweru w
              pisemnym protokole wydania Roweru przekazywanym Klientowi w momencie jego wydania.
              <br />
              2.2. Klient zobowiązuje się do korzystania z Roweru zgodnie z prawem, zgodnie z jego
              przeznaczeniem oraz z zachowaniem należytej staranności, dbając o to, aby nie
              doprowadzić do jego uszkodzenia lub zniszczenia. Klient zobowiązuje się także do
              używania Roweru w taki sposób, aby nie stwarzać zagrożenia dla siebie, jak i innym
              uczestników ruchu.
              <br /> 2.3. Klient zobowiązuje się nie korzystać z Roweru pod wpływem alkoholu lub
              innych substancji spowalniających szybkość reakcji.
              <br /> 2.4. Klient zobowiązuje się nie korzystać z Roweru w celach przestępczych oraz
              nie przewozić Rowerem inne osoby.
              <br /> 2.5. Rower przeznaczony jest wyłącznie do użytku osobistego Klienta, na terenie
              miasta, w którym został wynajęty. Klient nie może bez zgody ElectricGo zmieniać
              miejsca użytkowania Roweru.
              <br /> 2.6. Punkty odbioru i zwrotu rowerów zlokalizowane są pod adresami:
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.6.1. Warszawa 02-672, ul. Domaniewska
                22.
              </p>
              2.7. W zależności od sytuacji, za ustną zgodą obu stron, w określonych przypadkach
              miejsce wydania i odbioru może ulec zmianie.
              <br /> 2.8. Rower, przeznaczony jest jedynie do użytku w ruchu miejskim. Klient nie
              może korzystać z Roweru na nawierzchniach gruntowych, w szczególności w lesie czy
              terenie trudno dostępnym.
              <br /> 2.9. Klient nie może dokonywać żadnych zmian w Rowerze, których nie można
              usunąć bez uszkodzenia Roweru i nie wolno mu w jakikolwiek sposób manipulować
              elektroniką i / lub oprogramowaniem Roweru.
              <br /> 2.10. Rower jest wyposażony w baterię z jednym kluczem do blokady baterii oraz
              blokadą tylnego koła z łańcuchem. Klient, w jednym czasie może posiadać tylko jeden
              egzemplarz klucza do baterii i do blokady tylnego koła. Jeśli którykolwiek z kluczy
              zostanie zgubiony lub uszkodzony, Klient powinien zgłosić ten fakt ElectricGo oraz
              uzyskać od ElectricGo nowy klucz, którego koszt wynosi 30 zł. Klucz, który został
              wcześniej zgłoszony jako zagubiony i który został odzyskany, musi zostać natychmiast
              zwrócony do ElectricGo.
              <br /> 2.11. W godzinach nocnych, tj. od g. 22.00 do 6.00, gdy Rower nie jest używany,
              musi on być przechowywany w lokalu, domu, mieszkaniu, piwnicy, garażu, wózkarni lub w
              innych zamykanych pomieszczeniach.
              <br /> 2.12. Pozostawiając Rower na ulicy lub w innych publicznie dostępnych
              miejscach, Rower należy zabezpieczyć poprzez blokadę tylnego koła oraz przymocowanie
              ramy Roweru dołączonym łańcuchem do uchwytu/rzeczy trwale przymocowanej do gruntu.
              Rama musi być przymocowana do stojaka rowerowego lub innego stałego, nieruchomego
              obiektu. Należy zabezpieczyć także baterię poprzez ustawienie pozycji zamkniętej.
              <br />
              2.13. Rower może zawierać reklamy. Klient, w trakcie używania Roweru powinien zadbać,
              aby reklamy były stale widoczne. Klient musi niezwłocznie skontaktować się z
              ElectricGo, jeśli reklama została uszkodzona lub reklama całkowicie zniknęła z Roweru.
              <br />
              2.14. W przypadku, w którym Klient poruszający się Rowerem uczestniczy w kolizji
              drogowej, której nie jest sprawcą, jeżeli jest taka możliwość, powinien zażądać od
              sprawcy kolizji dane jego polisy ubezpieczeniowej. Klient ponadto powinien
              udokumentować kolizję w formie zdjęcia lub wideo a także podjąć działania w celu
              ustalenia danych innych uczestników tego samego zdarzenia (jeśli występują) i przesłać
              te dane ElectricGo. Powyższe jest niezbędne dla ElectricGo do rozpatrzenia sytuacji, w
              których Rower ulega Uszkodzeniu lub zniszczeniu.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>3. Czas obowiązywania Umowy i Wypowiedzenie </b>
              <br /> 3.1. Umowa jest zawierana na czas nieokreślony, a swój bieg rozpoczyna od dnia
              odebrania Roweru przez Klienta.
              <br /> 3.2. Moment rozpoczęcia Umowy nie może nastąpić później niż 2 dni robocze od
              wypełniania formularza rejestracyjnego. ElectricGo zastrzega sobie prawo do
              wypowiedzenia Umowy ze skutkiem natychmiastowym, jeżeli Klient nie odbierze Roweru w
              wyżej wskazanym czasie.
              <br /> 3.3. Klient może wypowiedzieć Umowę po upływie co najmniej jednego tygodnia,
              zgłaszając oświadczenie o wypowiedzeniu Umowy osobiście w biurze ElectricGo.
              <br /> 3.4. Od dnia, w którym wypowiedzenie Umowy przez Klienta wpłynęło do
              ElectricGo, Umowa w części korzystania z Roweru będzie obowiązywała do końca Okresu
              rozliczeniowego, który należy rozumieć jako Datę Końcową. Klient jest zobowiązany do
              pokrycia kosztów Abonamentu do Daty Końcowej.
              <br /> 3.5. Wraz ze zgłoszeniem oświadczenia o wypowiedzeniu Umowy, klient jest
              zobowiązany dostarczyć Rower oraz wszelkie urządzenia/przedmioty, które zostały wydane
              Klientowi do biura ElectricGo lub do innego miejsca wyznaczonego przez ElectricGo nie
              później niż w Dacie Końcowej w czasie indywidualnie ustalonym z ElectricGo.
              <br /> 3.6. ElectricGo sprawdzi Rower po jego zwrocie w celu weryfikacji stanu
              technicznego i ewentualnych Uszkodzeń. W przypadku stwierdzenia wad, których Rower nie
              nosił w momencie jego wydania Klientowi, domniemywa się, że Uszkodzenie zostało
              spowodowane przez Klienta, a ElectricGo przysługuje prawo do dochodzenia od Klienta
              naprawienia tej szkody na zasadach wskazanych w Regulaminie.
              <br /> 3.7. Przekazanie przez Klienta Roweru przed Datą Końcową powoduje wygaśnięcie
              wszelkich praw Klienta wynikających z Umowy, bez uszczerbku dla zobowiązania Klienta
              do pokrycia pełnych kosztów Abonamentu do Daty Końcowej.
              <br /> 3.8. W przypadku, gdy Rower nie zostanie zwrócony w Datę końcową lub przed,
              ElectricGo zastrzega sobie prawo do nałożenia kary umownej w wysokości 100 zł za każdy
              dzień opóźnienia w zwrocie Roweru, maksymalnie do 7 dni, licząc dzień zwrotu.
              <br /> 3.9. Jeśli Rower nie zostanie zwrócony do biura ElectricGo w siedmiu dni od
              Daty Końcowej, o czym mowa w pkt. 3.5 powyżej, ElectricGo będzie uważać rower jako
              przywłaszczony. ElectricGo również zastrzega sobie prawo do obciążenia Klienta
              całkowitym kosztem Roweru w wysokości 5 000 zł (pięciu tysięcy złotych).
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>4. Naprawa usterek / Uszkodzenia Roweru</b>
              <br /> 4.1. W ramach Umowy ElectricGo zobowiązuje się do obsługi i dokonywania
              niezbędnych napraw Roweru oraz prowadzenia technicznych przeglądów okresowych i
              wymiany zużytych części eksploatacyjnych na zasadach określonych w Regulaminie.
              <br /> 4.2. W celu naprawy Usterek i / lub Uszkodzeń Roweru, Klient zobowiązuje się do
              dostawy Roweru do biura ElectricGo lub do innego miejsca wyznaczonego przez
              ElectricGo. ElectricGo będzie dążyć do jak najszybszej naprawy Usterki lub
              Uszkodzenia. Jeżeli czas niezbędny na dokonanie naprawy Usterki będzie dłuższy niż 1
              godzina, zostanie dokonana wymiana Roweru o tych samych parametrach.
              <br /> 4.3. Klient zobowiązuje się do zgłaszania ElectricGo wszelkich Usterek i / lub
              Uszkodzeń Roweru w terminie 3 dni roboczych od dnia ich stwierdzenia. Niezgłoszenie
              Usterki lub Uszkodzenia w określonym wcześniej terminie, może skutkować
              odpowiedzialnością Klienta za powstałą Usterkę lub Uszkodzenie.
              <br /> 4.4. ElectricGo zastrzega sobie prawo do wezwania Klienta, aby ten umożliwił
              przeprowadzenie Przeglądu technicznego Roweru, co najmniej z 3 dniowym wyprzedzeniem.
              <br /> 4.5. ElectricGo zastrzega sobie prawo do sprawdzenia stanu Roweru. Na żądanie
              ElectricGo Klient będzie współpracował z wszelkimi niezbędnymi serwisami lub
              konserwacjami.
              <br /> 4.6. W przypadku Uszkodzenia i zużycia Roweru innego niż te, będące wynikiem
              normalnego użytkowania, ElectricGo zastrzega sobie prawo do żądania odszkodowania od
              Klienta.
              <br /> 4.7. ElectricGo nie wyraża zgody na to, aby Klient dokonywał samodzielnych
              napraw Usterek lub Uszkodzeń Roweru, jak również, aby zlecał naprawy osobom trzecim.
              Wszelkie Usterki i Uszkodzenia Roweru podlegają naprawom w biurze ElectricGo lub innym
              miejscu wyznaczonym przez ElectricGo zgodnie z obowiązującymi cenami na dzień naprawy.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>5. Zamiana Roweru </b>
              <br /> 5.1. Zamiana Roweru może nastąpić tylko w przypadku naprawy Usterki w
              przypadku, o którym mowa w pkt. 4.2. Regulaminu.
              <br /> 5.2. Jeśli czas realizacji zamiany nie zostanie osiągnięty, Klient nie może
              żądać żadnego odszkodowania ani płatności.
              <br /> 5.3. Wraz z zamianą Roweru, Klient przekaże uszkodzony Rower do ElectricGo wraz
              z całym obecnym wyposażeniem wskazanym w rozdziale Definicje.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>6. Płatności</b>
              <br /> 6.1. W celu dokonywania opłaty Abonamentu, Klient będzie zobowiązany do
              udzielenia polecenia zapłaty na numer rachunku bankowego ElectricGo, przez
              udostępnienie danych karty płatniczej w systemie płatniczym opisanym w zdaniu
              następnym. Płatności będą realizowane za pośrednictwem systemu Stripe, którego
              regulamin dostępny jest pod następującym adresem: www.stripe.com/en-gb-pl/privacy.
              <br /> 6.2. Abonament za wynajem Roweru wynosi: 155 zł brutto za Okres rozliczeniowy.
              <br /> 6.3. Klient może wynająć dodatkową baterię do Roweru, której koszt wynosi 15 zł
              brutto za Okres rozliczeniowy.
              <br /> 6.4. Opłata jest ustalana zgodnie z aktualnie obowiązującym cennikiem wskazanym
              w pkt. 6.2 i 6.3 Regulaminu i jest płatna tygodniowo z góry, za pośrednictwem systemu
              Stripe, o którym mowa w pkt. 6.1 Regulaminu.
              <br /> 6.5. Opłata za wynajem nalicza się za Okres rozliczeniowy i nie podlega
              zwrotowi nawet jeżeli rzeczywisty okres wynajmu był krótszy. Jeżeli okres wynajmu
              przekracza jeden Okres rozliczeniowy, opłata naliczana jest za kolejny pełny Okres
              rozliczeniowy do zakończenia Umowy i nie podlega obniżeniu, jeżeli okres wynajmu
              zakończy się przed upływem kolejnego Okresu rozliczeniowego.
              <br /> 6.6. ElectricGo zastrzega sobie prawo do pobrania z karty płatniczej
              udostępnionej przez Klienta, za pośrednictwem systemu płatniczego określonego w pkt
              6.1. powyżej, kosztów związanych z Uszkodzeniami Roweru powstałych z winy Klienta,
              kar, mandatów etc.
              <br /> 6.7. Abonament ulega automatycznemu odnowieniu w każdym nowym tygodniu Umowy,
              chyba że Klient ją wypowiedział lub od niej odstąpił.
              <br /> 6.8. Płatność za Abonament może być również dokonana w części lub w całości z
              użyciem Kodu rabatowego emitowanego przez ElectricGo, który może być udostępniany
              przez ElectricGo lub podmioty współpracujące z ElectricGo. W tym celu, Klient w
              momencie składania zamówienia, jest zobowiązany do podania numeru Kodu rabatowego.
              Kody rabatowe są jednorazowe i mogą być wykorzystywane jedynie do opłaty Abonamentu.
              Kod rabatowy nie podlega wymianie na środki finansowe.
              <br /> 6.9. Za każdy dzień opóźnienia w płatności Abonamentu ElectricGo będzie
              przysługiwała opłata od Klienta w kwocie 10 zł brutto która musi być uiszczona przez
              Klienta do zakończenia bieżącego Okresu rozliczeniowego.
              <br /> 6.10. Jeżeli koszt odnowienia Abonamentu nie może zostać pobrany z karty
              płatniczej Klienta podpiętej w Systemie, ElectricGo wyśle wezwanie do zapłaty w formie
              wiadomości e-mail kierowanej na adres wskazany przez Klienta w Systemie. ElectricGo
              zastrzega sobie prawo do zaangażowania firmy windykacyjnej, jeśli należna kwota nie
              została zapłacona w ciągu 7 dni od otrzymania wezwania do zapłaty. ElectricGo obciąży
              Klienta kwotą 100 (sto) zł brutto za zaangażowanie firmy windykacyjnej dla pokrycia
              kosztów związanych z windykacją.
              <br /> 6.11. ElectricGo zapewnia Klientowi możliwość dostępu do Portalu Klienta, gdzie
              oprócz danych opisanych w sekcji Definicje ma on dostęp do historii płatności.
              Administrowanie danymi które się mieszczą na Portalu Klienta dokonuje ElectricGo.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>7. Kradzież Roweru</b>
              <br /> 7.1. Jeżeli Klient parkuje Rower, zawsze musi zabezpieczyć Rower w sposób
              określony w punktach 2.11, 2.12 Regulaminu.
              <br /> 7.2. W przypadku kradzieży Roweru i / lub baterii, Klient będzie zobowiązany
              niezwłocznie złożyć zawiadomienie o kradzieży wynajmowanego roweru w najbliższym
              komisariacie lub komendzie Policji.
              <br /> 7.3. W przypadku kradzieży Roweru i / lub baterii, Klient będzie zobowiązany
              niezwłocznie, nie później niż w ciągu 6 godzin, zgłosić to ElectricGo, przekazać
              ElectricGo klucze do baterii i blokady oraz poinformować ElectricGo o wszystkich
              okolicznościach kradzieży Roweru.
              <br /> 7.4. Jeżeli Rower został skradziony:
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.1. Jeżeli okaże się, że Rower nie
                został prawidłowo zabezpieczony przed kradzieżą, tj. w sposób zgodny z pkt. 2.11,
                2.12 Regulaminu, ElectricGo obciąży Klienta kwotą odpowiadającą pełnej wartości
                Roweru w wysokości 5 000 zł (pięciu tysięcy złotych).
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.2. Aby wykazać, że Rower był
                zabezpieczony w sposób określony w pkt. 7.4.1. powyżej, Klient powinien dysponować
                kluczem blokady tylnego koła.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.3. W przypadku odnalezienia Roweru po
                zgłoszeniu kradzieży, a Rower nie był prawidłowo zabezpieczony, Klient zostanie
                obciążony opłatą administracyjną w wysokości 500 (pięćset) zł.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.4.4. Gdy na skutek kradzieży, Rower nie
                zostanie odnaleziony, a był zablokowany zgodnie z pkt. 2.11, 2.12 Regulaminu,
                ElectricGo obciąży Klienta kwotą odpowiadającą połowie wartości Roweru,
                nieprzekraczającą jednak kwoty 2.500 zł (dwóch tysięcy pięciuset złotych).
              </p>
              7.5. Każdy Klient, którego Rower został skradziony co najmniej 2 razy, nie będzie miał
              możliwości korzystania z usług ElectricGo.
              <br /> 7.6. Jeżeli Klient ma wątpliwości co do bezpieczeństwa Roweru, musi
              niezwłocznie skontaktować się z ElectricGo wysyłając wiadomość e-mail na adres
              biuro@electricgo.pl.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>8. Odpowiedzialność</b>
              <br /> 8.1. ElectricGo nie ponosi odpowiedzialności za jakiekolwiek szkody lub krzywdy
              poniesione przez Klienta lub osoby trzecie w wyniku korzystania z Roweru w tym mandaty
              drogowe.
              <br /> 8.2. Klient zobowiązany jest do monitorowania stanu technicznego Roweru i
              niezwłocznego przekazywania do ElectricGo informacji o konieczności serwisowania
              Roweru.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>9. Niespełnienie zobowiązań</b>
              <br /> 9.1. ElectricGo jest uprawniona do wypowiedzenia Umowy ze skutkiem
              natychmiastowym, w całości lub w części, jeżeli:
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.1. Klient nie wypełnia swoich
                zobowiązań wynikających z Umowy, a w szczególności nieterminowo uiszcza wymagalne
                opłaty za co najmniej 3 kolejne okresy rozliczeniowe;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.2. Klient nie opłaci Abonamentu co
                najmniej za dwa okresy rozliczeniowe;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.3. Klient nie zgłasza się do
                ElectricGo na umówiony przegląd techniczny Roweru;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.4. Klient nie odpowiada na kontakt ze
                strony ElectricGo przez okres dłuższy niż 7 dni;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.5. Klient korzysta z Roweru niezgodnie
                z postanowieniami Regulaminu, a w szczególności doprowadza do jego Zniszczenia lub
                Uszkodzenia;
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.1.6. Klient celowo przekazuje ElectricGo
                nieprawdziwe informacje, w szczególności w formularzu rejestracyjnym lub też w
                bieżących wiadomościach wymienianych między Klientem a ElectricGo.
              </p>
              9.2. W przypadkach, określonych w ust. 9.1 powyżej, ElectricGo niezwłocznie po
              rozwiązaniu Umowy wezwie Klienta do zwrotu Roweru oraz uiszczenia opłaty za okres
              liczony od dnia rozwiązania Umowy do ostatniego dnia okresu rozliczeniowego w terminie
              3 (trzech) dni od dnia otrzymania wezwania. Jeżeli zwrócony Rower będzie nosił ślady
              zniszczenia, niebędące następstwem normalnego użytkowania Roweru, ElectricGo zastrzega
              sobie prawo do obciążenia Klienta kosztami naprawy Roweru.
              <br /> 9.3. W przypadku, gdy ElectricGo rozwiąże Umowę ze skutkiem natychmiastowym, na
              warunkach, o których jest mowa w pkt 9.1 powyżej, Klient nie będzie mógł zawrzeć nowej
              umowy przez okres 1 (jednego) roku od dnia rozwiązania Umowy.
              <br /> 9.4. Klient ma prawo do natychmiastowego wypowiedzenia Umowy, jeżeli ElectricGo
              wielokrotnie i / lub poważnie nie wywiązywał się ze swoich zobowiązań opisanych w
              Regulaminie.
              <br /> 9.5. W przypadku wskazanym w pkt. 10.4 Regulaminu, ElectricGo niezwłocznie po
              rozwiązaniu Umowy wezwie Klienta do zwrotu Roweru oraz uiszczenia opłaty za ostatni
              Okres rozliczeniowy w terminie 7 dni od dnia otrzymania wezwania. Na skutek
              rozwiązania Umowy na zasadach określonych w niniejszym pkt. 10.4 Regulaminu,
              ElectricGo nie będzie obciążał Klienta żadnymi dodatkowymi kosztami. Jeżeli zwrócony
              Rower będzie nosił ślady zniszczenia, niebędące następstwem normalnego użytkowania
              Roweru, ElectricGo zastrzega sobie prawo do obciążenia Klienta kosztami naprawy
              Roweru.
              <br /> 9.6. Za każde naruszenie Umowy przed końcem bieżącego Okresu rozliczeniowego
              ElectricGo ma prawo żądać od Klienta zapłaty kary pieniężnej w wysokości 200
              (dwieście) zł, a brak jej uiszczenia uniemożliwia dalsze korzystanie z Roweru przez
              konkretnego Klienta.
              <br /> 9.7. Suma kar umownych, których ElectricGo może dochodzić od Klienta na
              podstawie niniejszego Regulaminu nie może przekraczać 10 000 zł (dziesięciu tysięcy
              złotych) w roku, w którym Klient posiadał zawartą Umowę co najmniej na 1 (jeden)
              tydzień. Do sumy tej nie wlicza się wartość Roweru, jeżeli na gruncie Regulaminu
              ElectricGo nabędzie prawo do żądania od Klienta zapłaty tej wartości.
              <br /> 9.8. Zapłata kar umownych określonych w Regulaminie nie wyłącza dochodzenia
              przez ElectricGo roszczeń na zasadach ogólnych przewyższających wysokość kary umownej.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>10. Odstąpienie od Umowy</b>
              <br /> 10.1. Klient ma prawo odstąpić od Umowy bez podawania przyczyn w terminie 14
              dni od jej zawarcia. W tym celu powinien skierować do ElectricGo, na adres e-mail:
              biuro@electricgo.pl, oświadczenie o odstąpieniu od Umowy.
              <br /> 10.2. W terminie 3 dni od otrzymania oświadczenia ElectricGo skontaktuje się z
              Klientem w celu ustalenia terminu zwrotu Roweru.
              <br /> 10.3. W terminie 14 dniu od dnia zwrotu Roweru ElectricGo zwróci Klientowi
              uiszczone wcześniej koszty Abonamentu.
              <br /> 10.4. W przypadku, gdy Klient odstąpi od Umowy na zasadach określonych w
              niniejszej sekcji 10 Regulaminu, ElectricGo nie będzie go obciążał żadnymi kosztami.
              Jeżeli zwrócony Rower będzie nosił ślady zniszczenia, niebędące następstwem normalnego
              użytkowania Roweru, ElectricGo zastrzega sobie prawo do obciążenia Klienta kosztami
              naprawy Roweru.
              <br /> 10.5. Prawo odstąpienia od Umowy nie przysługuje w przypadku, gdy Klient
              odebrał Rower i tym samym rozpoczął pierwszy dzień Umowy.
              <br /> 10.6. W przypadku odstąpienia od Umowy Klient nie będzie mógł zawrzeć nowej
              Umowy przez okres 1 (jednego) roku od dnia zwrotu kosztów Umowy, o czym mowa w pkt
              10.3 powyżej.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>11. Reklamacje</b>
              <br /> 11.1. W trakcie obowiązywania Umowy, wszelkie reklamacje dotyczące wykonywania
              Umowy należy kierować drogą mailową na adres biuro@electricgo.pl.
              <br /> 11.2. Reklamacja powinna zawierać: imię, nazwisko i adres Klienta, jak również
              dokładny opis i powód reklamacji. ElectricGo zastrzega sobie prawo do pozostawienia
              reklamacji bez rozpatrzenia, w przypadku, w którym nie spełnia ona wymagań wskazanych
              w zdaniu poprzednim.
              <br /> 11.3. Reklamacje rozpatrywane będą w terminie 14 dni od dnia ich otrzymania
              przez ElectricGo. W przypadku reklamacji o skomplikowanym stanie faktycznym,
              ElectricGo zastrzega sobie prawo do wydłużenia czasu reklamacji do 60 dni od dnia ich
              otrzymania przez ElectricGo, o czym Klient zostanie poinformowany w terminie wskazanym
              w zdaniu poprzednim.
              <br /> 11.4. Reklamacje rozpatrywane będą na podstawie niniejszego Regulaminu.
              <br /> 11.5. W przypadku braku porozumienia, Klient ma możliwości skorzystania z
              pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń przed Polubownym
              Sądem Konsumenckim, który mieści się w Warszawie przy ulicy Henryka Sienkiewicza 3
              (Stały Sąd Polubowny przy Mazowieckim Wojewódzkim Inspektorze Inspekcji Handlowej).
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>12. Dane osobowe </b>
              <br /> 12.1. Administratorem danych osobowych Klientów jest ElectricGo zwana dalej
              również „Administratorem”.
              <br /> 12.2. Wraz z akceptacją Regulaminu, Klient wyraża zgodę na przetwarzanie danych
              osobowych w celu zawarcia i realizacji Umowy na zasadach określonych w Regulaminie
              ochrony danych osobowych w ElectricGo.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>13. Zmiany Regulaminu</b>
              <br /> 13.1. ElectricGo zastrzega sobie prawo do zmiany kosztów Abonamentu. Zmiany
              zostaną przekazane Klientowi pocztą elektroniczną co najmniej 7 dni przed datą wejścia
              w życie nowej wysokości Abonamentu.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>14. Kontakt </b>
              <br /> 14.1. Klienci mogą kontaktować się z ElectricGo w następujący sposób:
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14.1.1. E-mail: biuro@electricgo.pl</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14.1.2. Telegram: @ElectricGo_pl_bot 14.2.
                ElectricGo może kontaktować się z Klientem za pomocą środków komunikacji wskazanych
                przez Klienta podczas Rejestracji i przesłania informacji na podane przez Klienta
                dane stanowi stosowne powiadomienie w ramach Umowy.
              </p>
              <br /> 14.3. Klient zobowiązuje się do stworzenia możliwości kontaktu ze sobą przez
              okres nie dłuższy niż 1 godzina dla pracowników ElectricGo, przez cały okres
              użytkowania Roweru.
            </p>
            <p className={styles.defenition}>
              <b className={styles.subtitle}>15. Program poleceń </b>
              <br />
              15.1. Klient wynajmujący Rower może polecać usługę wynajmu świadczoną przez
              ElectricGo. Po zawarciu Umowy Klient otrzymuje unikalny Kod polecający, który może
              udostępniać osobom trzecim, gdy poleca usługi ElectricGo. Kod polecający zostanie
              wysłany na adres e-mail Klienta wskazany w formularzu rejestracyjnym.
              <br />
              15.2. W zamian za każdą osobę poleconą przez Klienta, która zawrze z ElectricGo umowę
              wynajmu Roweru:
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.2.1. ElectricGo obniży koszt Abonamentu
                Klientowi polecającemu za kolejny Okres rozliczeniowy o 50 zł, chyba że osoba ta nie
                była jeszcze Klientem.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15.2.2. ElectricGo obniży koszt Abonamentu
                osoby poleconej przez Klienta za pierwszy Okres rozliczeniowy o 50 zł, chyba że
                osoba ta była już kiedyś klientem ElectricGo.
              </p>
              15.3. ElectricGo nie przewiduje ograniczeń w kontekście ilości osób polecanych przez
              danego Klienta.
            </p>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default AgreementPage;
