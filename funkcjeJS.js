var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function pokaz(id)
{
 tresc="";
 switch (id)
 { case 2: tresc += pokazRase(); break;
 case 3: tresc +=  pokazMiesiace();break;
 case 4: tresc += pokazPorady();break;
 case 5: tresc += pokazGalerie(); break;
 case 6: tresc +=pokazKontakt(); break;
 default: tresc += pokazGlowna();
 }

 document.getElementById('main').innerHTML = tresc;
}

function pokazGlowna(){
	tresc='<img src="beagle.jpg" style="width:30%" align="left" hspace="20">';
	
	tresc+='<h1>Witaj!</h1> <p> Witam na stronie poświęconej psom rasy Beagle. Jeśli chcesz się dowiedzieć więcej o tej rasie, zajrzyj do zakładki "O rasie". ';
	tresc+='Jeśli chcesz poczytać ogólnie o rowzoju psów, włącz zakładkę "Etapy życia psa". ';
	tresc+='Po wskazówki co do opieki nad Beaglem, zajrzyj do zakładki "Porady". ';
	tresc+='Jeśli chcesz obejrzeć zdjęcia mojego własnego psa, są one w zakładce "Galeria". ';
	tresc+='Informacje o mnie znajdują się w zakładce "O autorce". Można tam także skontaktować się ze mną. ';
	tresc+='</p><p>';
	tresc+='Miłego przeglądania! ';
	tresc+='</p>';
	return tresc;
	
}

function pokazRase(){


 tresc ='<h1>Opis rasy</h1> <p>Beagle wyróżniają się pięknym wyglądem oraz ciekawym usposobieniem. Skąd psy myśliwskie wzięły się na naszych kanapach? Dowiedzmy się więcej o tej cudownej rasie. </p>';
 tresc+='<img  src="beagle1.jpg"  alt="Zdjęcie Beagle" style="width:70%;display:block; margin-left: auto; margin-right: auto;"/>';
 tresc+='<h2>Charakter</h2>';
tresc+='<p>Te psy myśliwskie dopiero od niedawna są hodowane jako psy domowe i rodzinne, dlatego należy pamiętać, że w wielu przypadkach ich zachowanie będzie podyktowane instynktem. ';
tresc+='Beagle to łobuzy o wesołym usposobieniu. Są przyjazne i łagodne zarówno dla domowników, jak i dla obcych, dlatego nie nadają się na psy stróżujące, ale dzięki brakowi agresji będą świetnymi kompanami dla dzieci. ';
tresc+='Beagle są pełne energii i świetnie nadają się dla osób spędzających czas aktywnie. Beagle, który nie ma możliwości rozładowania energii, będzie niszczył meble lub przekopywał ogródek z nudów. ';
tresc+='Beagle bardzo źle znoszą samotność, pozostawione same na wiele godzin mogą wyć, niszczyć przedmioty lub celowo załatwiać się w domu. ';
tresc+='</p>';
tresc+='<h2> Umiejętności </h2>';
tresc+='<p>Beagle to pies myśliwski o niezwykle czułym węchu. Jest wytrzymały, silny i niezmordowany w pogoni. Może być wykorzystywany w polowaniu na prawie każdą zwierzynę. ';
tresc+='Oprócz polowań Beagle bywają używane m. in. do wykrywania narkotyków i przemycanej żywności na lotniskach. ';
tresc+='Sprawdzają się także w dogoterapii. ';
tresc+='</p>';
 tresc+='<img  src="beagle3.jpg"  alt="Zdjęcie Beagle" style="width:70%;display:block; margin-left: auto; margin-right: auto;"/>';
tresc+='<h2> Wychowanie </h2>';
tresc+='<p> Beagle są sprytne i uparte, dlatego już od pierwszych chwil wymagają konsekwencji i stanowczości. ';
tresc+='Należy jednak pamiętać, że te psy są bardzo wrażliwe, więc wymagają pozytywnych bodźców w szkoleniu. Traktowane zbyt ostro mogą stać się nieposłuszne lub zamknąć się w sobie. ';
tresc+='</p>';
tresc+='<h2>Zdrowie</h2>';
tresc+='<p>Większość Beagli to zdrowe i długowieczne psy. Do najczęstszych przypadłości należą problemy z oczami (szczególnie tzw. wiśniowe oko, czyli trzecia powieka). ';
tresc+='Mogą im się także przydarzać choroby uszu, różnego rodzaju alergie, rzadziej padaczka. ';
tresc+='Psy tej rasy mają ogromny apetyt, a przez to skłonności do tycia, jak również do zjadania śmieci na spacerze. ';
tresc+='</p>';
tresc+='<h2>Wygląd</h2>';
tresc+='<p>Beagle należą do psów średniej wielkości, rosną do około 40cm w kłębie. ';
tresc+='Mają krępą, masywną sylwetkę. Ich waga to zwykle między 10 a 18 kg, ale zdarzają się bardziej masywne osobniki. ';
tresc+='Mają silne, stosunkowo krótkie nogi, które jednak pozwalają na bardzo szybki bieg. ';
tresc+='Głowa Beagla jest dość długa, z charakterystycznymi zwisającymi uszami. ';
tresc+='Są to psy krótkowłose o umaszczeniu tricolor (czarny, płowy i biały) lub bicolor (najczęściej biały z płowym, rudym lub cytrynowym). Według wzorca rasy, koniec ogona musi koniecznie być biały.';
tresc+='</p>';
 tresc+='<img  src="beagle2.jpg"  alt="Zdjęcie Beagle" style="width:70%;display:block; margin-left: auto; margin-right: auto;"/>';
tresc+='<h2>Dla kogo taki pies</h2>';
tresc+='<p>Beagle nie nadają się dla osób zapracowanych, które większość dnia spędzają poza domem. Również nie są dobre dla osób, które szukają psa posłusznego, łatwego do ułożenia. ';
tresc+='Właściciel Beagla powinien być aktywny, cierpliwy, wyrozumiały, ale konsekwentny. Musi poświęcać psu dużo uwagi. ';
tresc+='Beagle najlepiej będzie się czuł w domu z ogrodem, ale bez problemu przystosuje się do życia w mieszkaniu, o ile będzie miał gdzie rozładować energię. ';
tresc+='Nadaje się zarówno dla osób samotnych, jak i rodzin z dziećmi, chociaż należy pamiętać, że to pies stadny, więc najlepiej będzie się czuł w dużej rodzinie. ';
tresc+='</p>';

	return tresc;

}


function pokazMiesiace(){
	tresc='<h2> Etap neonatalny - 0 do 12 dni </h2>';
	tresc+='<figure>';
  tresc+='<img src="bianka_mala.png" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka w pierwszych dniach życia.</figcaption>';
tresc+='</figure>';
	tresc+='<p>Po narodzinach szczenię jest ślepe i głuche, więc początkowo poznaje świat za pomocą pozostałych zmysłów. ';
	tresc+='Szczenię w tym wieku jest całkowicie uzależnione od matki. Podążając za jej ciepłem, trafia do źródła jedzenia. ';
	tresc+='Przez pierwsze dni po porodzie nie należy oddzielać szczeniąt od matki nawet na chwilę. Najlepiej ich nie dotykać i nie próbować brać na ręce, aby nie niepokoić matki. ';
	tresc+='</p>';
	tresc+='<h2>Etap przejściowy - od 13 do 20 dnia </h2>';
	tresc+='<figure>';
  tresc+='<img src="bianka_mala2.jpeg" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka w pierwszych tygodniach życia.</figcaption>';
tresc+='</figure>';
	tresc+='<p>Szczeniaki są bardziej ruchliwe i zaczynają bawić się ze sobą. W tym wieku uczą się tzw. inhibicji gryzienia - czyli jak mocno mogą ugryźć, aby nie sprawić bólu. ';
	tresc+='Jeśli nie nabędą tej umiejętności, będzie to praktycznie niemożliwe do nadrobienia w późniejszym życiu. ';
	tresc+='Na tym etapie ważny jest także kontakt z ludźmi. Pod koniec trzeciego tygodnia pieski zaczynają jeść z miski i chodzić na czterech łapach zamiast czołgania. ';
	tresc+='Na początku okresu przejściowego szczeniaki otwierają oczy, a pod koniec zaczynają słyszeć. ';
	tresc+='</p>';
	tresc+='<h2>Etap socjalizacji - od 4 do 12 tygodnia </h2>';
	tresc+='<figure>';
  tresc+='<img src="bianka_8tyg.jpg" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka w wieku 8 tygodni.</figcaption>';
tresc+='</figure>';
	tresc+='<p>Jest to bardzo ważny etap w życiu psa i należy odpowiednio go wykorzystać. ';
	tresc+='Szczeniak nawiązuje kontakty socjalne, uczy się zasad obowiązujących w stadzie. ';
	tresc+='Między 8 a 11 tygodniem życia szczeniak zaczyna odczuwać strach, więc ważne, aby w tym okresie nie narażać go na duże stresy. ';
	tresc+='Wszystko, co zobaczy szczenię podczas socjalizacji, będzie później dla niego normalną częścią świata. ';
	tresc+='Warto więc zapoznać psa z elementami, z którymi później będzie miał często do czynienia, np. jeśli chcemy z psem podróżować autobusem, warto wybrać się na krótką przejażdżkę, albo przynajmniej zabrać psa na pętlę autobusową. ';
	tresc+='Dużym problemem jest to, że w okresie socjalizacji większość szczeniąt jest akurat w trakcie kwarantanny po szczepieniach. ';
	tresc+='Są dwie opcje: wychodzić ze szczenięciem w miejsca mało uczęszczane przez inne psy, aby się nie zaraził, albo noszenie psa w tzw. torbie socjalizacyjnej. ';
	tresc+='Ryzyko, że szczeniak się czymś zarazi, jest dość nieduże, a ważniejsze jest, aby pies prawidłowo się zsocjalizował i nie zdziczał. ';
	tresc+='</p>';
	tresc+='<h2>Etap młodzieńczy - od 3 do około 6 miesiąca </h2>';
	tresc+='<figure>';
  tresc+='<img src="bianka_zalew.jpg" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka w wieku 4 miesięcy.</figcaption>';
tresc+='</figure>';
	tresc+='<p>W tym okresie zaczynają być widoczne różnice w rozwoju w zależności od rasy - generalnie psy dużych ras dojrzewają nieco wolniej niż mniejszych. ';
	tresc+='Trwa wtedy okres socjalizacji wtórnej, nadal powinniśmy zapoznawać szczeniaka z nowymi bodźcami. ';
	tresc+='Młode psiaki stają się coraz bardziej niezależne, nie wracają do właściciela tak chętnie jak dawniej. ';
	tresc+='Pod koniec tego okresu samce zaczynają szukać przyszłej partnerki, a samice mają pierwszą cieczkę. ';
	tresc+='</p>';
	tresc+='<h2>Etap dojrzewania - od 6 do około 14 miesiąca </h2>';
	tresc+='<figure>';
  tresc+='<img src="dorosly_beagle.jpg" alt="Młody Beagle" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Młody Beagle.</figcaption>';
tresc+='</figure>';
	tresc+='<p>Jest to okres buntu, który jedne psy przechodzą bardziej burzliwie, drugie mniej. W organizmie psa zachodzą duże zmiany hormonalne.';
	tresc+='W tym okresie mogą się zdarzyć dziwne, niespodziewane zachowania, np. pies może zacząć bać się przedmiotów, które do tej pory nie sprawiały mu problemu. ';
	tresc+='</p>';
	tresc+='<h2>Etap dojrzały - osiągany po od 1 do około 4 lat </h2>';
		tresc+='<figure>';
  tresc+='<img src="beagle_spi.jpg" alt="Śpiący Beagle" style="width:70%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Dorosły, spokojniejszy Beagle.</figcaption>';
tresc+='</figure>';
	tresc+='<p>W tym okresie psy mają już w pełni ukształtowaną psychikę, a pod względem fizycznym osiągnęły docelowy rozmiar i wygląd. ';
	tresc+='Jest to wiek, w którym pies powinien już znać swoje miejsce w stadzie. ';
	tresc+='W zależności od rasy, w pewnym momencie tego okresu (może to być po roku, dwóch, trzech lub więcej) pies staje się bardziej stateczny i spokojny. ';
	tresc+='</p>';
	tresc+='<h2>Etap starości </h2>';
	tresc+='<figure>';
  tresc+='<img src="old-dog.jpg" alt="Stary pies" style="width:70%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Psia starość.</figcaption>';
tresc+='</figure>';
	tresc+='<p>O starości u psa możemy mówić w różnym wieku, w zależności od rasy i wielkości. ';
	tresc+='Na ogół psy dużych ras żyją krócej, np. dogi niemieckie żyją jedynie 6-8 lat. Średnio psy domowe dożywają około 10-13 lat. ';
	tresc+='Oznakami starzenia się są kłopoty z poruszaniem, mniejsza aktywność, pogorszenie się wzroku i słuchu. ';
	tresc+='Często seniorzy mniej chętnie nawiązują kontakty z innymi psami, mogą wykazywać strach lub agresję. ';
	tresc+='W tym czasie ważne jest, aby odpowiednio opiekować się psem, dbać o jego dietę, a jeśli to potrzebne, wspomagać psi organizm suplementami lub lekami. ';
	tresc+='Opieka nad psim staruszkiem może przysporzyć wielu zmartwień, ale warto dbać o zdrowie naszego pupila, aby jak najdłużej cieszyć się jego towarzystwem. ';
	tresc+='</p>';
	return tresc;
	
	
}

function pokazPorady(){
	
	
	tresc='<h2>Jak żywić Beagle?</h2>';
	tresc+='<p>';
  tresc+='<img src="infografika.jpg" style="width:20%" align="left" hspace="20">';

  tresc+=' Beagle są znane ze swej żarłoczności. Niedopilnowany Beagle jest w stanie zjeść właściwie wszystko (może oprócz nudnej karmy, którą i tak je codziennie). ';
  tresc+='Należy pamiętać, co jest trujące dla psa i co należy trzymać poza jego zasięgiem, m. in. winogrona, rodzynki, awokado. ';
  tresc+='Czekolada i kakao zawierają teobrominę, która jest bardzo toksyczna dla psów. Zjedzenie czekolady może się skończyć nawet zapaleniem trzustki. ';
  tresc+='Podczas jesiennych spacerów warto uważać na kasztany, żołędzie i szyszki. Szczególnie kasztany są silnie trujące dla psa. ';
  tresc+='Warto też uważać, żeby pies nie pożerał śmieci czy skarpetek. Mogą one zapchać żołądek i pies nie będzie w stanie trawić. ';
  tresc+='</p>';
  tresc+='<p>Jeżeli właściciel chce żywić psa samą karmą, to jak najbardziej może. Karma zawiera wszystkie potrzebne składniki. ';
  tresc+='Jeżeli chcemy psu gotować, to warto się dowiedzieć, co pies może jeść. Poza tym, trzeba mu wtedy podawać suplementy. ';
  tresc+='Psy mogą jeść mięsa takie jak wołowina, konina, jagnięcina, drób i ryby. Oczywiście mowa o mięsie poddanym obróbce termicznej. ';
  tresc+='Możemy także karmić pupila jajkiem, ryżem, makaronem, płatkami owsianymi, większością warzyw i owoców (np. gotowana marchewka świetnie reguluje układ pokarmowy). ';
  tresc+='Psu możemy także dać kość do ogryzania, ale tylko pod warunkiem, że jest na tyle duża, że się nią nie udławi. ';
  tresc+='</p>';


tresc+='<h2> Jak powinien wyglądać spacer?</h2>';
tresc+='<p>';
  tresc+='<img src="infografika2.jpg" style="width:20%" align="right" hspace="20">';
  tresc+='Są dwie szkoły wyprowadzania Beagla. Jedni mówią, żeby go spuszczać ze smyczy, inni, żeby nigdy przenigdy nie spuszczać, bo ucieknie. ';
  tresc+='Beagle to pies myśliwski, więc jeśli złapie trop, to pobiegnie za nim, nie zważając na nasze wołanie. ';
  tresc+='Jeżeli chcemy pupila spuszczać ze smyczy, warto już od małego ćwiczyć przywoływanie, i spuszczać psa tylko w miejscach, gdzie jest to bezpieczne. ';
  tresc+='Koniecznie też trzeba mieć przy sobie psie przysmaki, żeby zachęcać psa do posłuszeństwa. Beagle są bardzo samodzielne, więc nawet ulubiony przysmak nie gwarantuje powrotu psa. ';
  tresc+='</p>';
  tresc+='<p>Beagle dawniej żyły w sforach, więc jest dla nich ważny kontakt z innymi psami. W miarę możliwości warto pozwolić pupilowi pobawić się z innymi psami. ';
  tresc+='W niektórych miastach właściciele organizują "Beaglówki", gdzie psy mogą się ze sobą pobawić, a właściciele wymienić doświadczenia. ';
  tresc+='</p>';
  tresc+='<p>Beagle to psy pełne energii i po odpowiednim szkoleniu na spacerze chętnie będą biegać za nami bądź przy naszym rowerze. ';
  tresc+='Należy pamiętać, że oprócz wybiegania się, Beagle mają silną potrzebę węszenia, i musimy im pozwolić na zaspokojenie tej potrzeby. ';
  tresc+='Warto z psem ćwiczyć różne sztuczki, można też na spacer wziąć zabawkę dla psa, lub po prostu rzucać mu patyki do aportowania. ';
  tresc+='</p>';
 



	
	tresc+='<h2> Na co zwrócić uwagę u weterynarza?</h2>';


tresc+='<p>';
tresc+='<img src="infografika3.jpg" style="width:20%" align="left" hspace="20">';

tresc+='Oczywiście trzeba pamiętać o regularnych szczepieniach, odrobaczaniach i podawaniu preparatu chroniącego od kleszczy (doustnie, kropelki lub obroża). ';
  tresc+='Do głównych problemów zdrowotnych należą choroby uszu. Uszy należy regularnie czyścić patyczkami (za pierwszym razem poprośmy weterynarza, żeby pokazał, jak to robić). ';
  tresc+='Niektóre Beagle wymagają także leczenia oczu, częstą przypadłością jest wypadanie trzeciej powieki. ';
  tresc+='W razie alergii lub nadwrażliwości pokarmowej, lekarz może nam doradzić specjalistyczną karmę. ';
  tresc+='Weterynarz może też pomóc z obcinaniem pazurków, szczególnie za pierwszym razem, jeśli sami nie wiemy jak to zrobić. ';
    tresc+='</p>';
   tresc+='<p>Do weterynarza udajemy się, jeśli widzimy coś niepokojącego w zachowaniu naszego pupila, np. brak apetytu, osowiałość, wymioty, inne objawy. ';
  tresc+='Szczególnie szczenięta bądź psy osłabione po innych chorobach czy zabiegach, są narażone. W chłodniejszym sezonie łatwo chociażby o zapalenie gardła. ';
  tresc+='</p>';
  tresc+='<p>Jeżeli rozważamy kastrację lub sterylizację, to warto dopytać weterynarza, w jakim wieku należy przeprowadzić zabieg. Najlepiej też poprosić o polecenie dobrej kliniki zajmującej się takimi zabiegami. ';
  tresc+='W przypadku suczek sterylizację zazwyczaj poleca się przeprowadzić po pierwszej cieczce. ';
  tresc+='Wielu właścicieli boi się tego zabiegu. Prawda jest taka, że jeśli nie planujemy mieć szczeniąt, to sterylizacja jest bardzo korzystna, uwalnia nas od niechcianych psich adooratorów, a suczka nie ma problemu z ciążami urojonymi, z kolei na starość nie ma ryzyka chorób układu rozrodczego, m. in. ropomacicza. ';
  tresc+='W przypadku samców, kastracja sprawi, że będą mniej skłonne do ucieczki. Jednakże, przy nieodpowiedniej diecie i braku ruchu, psy po kastracji mają jeszcze większe skłonności do tycia. ';
  tresc+='</p>';

	return tresc;
}

function pokazGalerie(){

	tresc='<h2>Galeria zdjęć Bianki</h2>';
tresc+='<div class="slideshow-container">'+
'<div class="mySlides fade">'+
    '<div class="numbertext">1 / 7</div>'+
    '<img src="img7.jpg" style="width:100%">'+
    '<div class="text">Krótki spacerek</div>'+
  '</div>'+


  '<div class="mySlides fade">'+
    '<div class="numbertext">2 / 7</div>'+
    '<img src="img2.jpg" style="width:100%">'+
    '<div class="text">Bianka w zimowej kurtce</div>'+
  '</div>'+

 '<div class="mySlides fade">'+
    '<div class="numbertext">3 / 7</div>'+
    '<img src="img3.jpg" style="width:100%">'+
    '<div class="text">Bianka pierwszy raz nad Zalewem</div>'+
  '</div>'+
   '<div class="mySlides fade">'+
    '<div class="numbertext">4 / 7</div>'+
    '<img src="img4.jpg" style="width:100%">'+
    '<div class="text">Pierwszy dzień w nowym domu</div>'+
  '</div>'+
    '<div class="mySlides fade">'+
    '<div class="numbertext">5 / 7</div>'+
    '<img src="img5.jpg" style="width:100%">'+
    '<div class="text">Zabawa z większym kolegą</div>'+
  '</div>'+
    
    '<div class="mySlides fade">'+
    '<div class="numbertext">6 / 7</div>'+
    '<img src="img6.jpg" style="width:100%">'+
    '<div class="text">Spanko w gościach na przyjęciu urodzinowym</div>'+
  '</div>'+
    '<div class="mySlides fade">'+
    '<div class="numbertext">7 / 7</div>'+
    '<img src="img1.jpg" style="width:100%">'+
    '<div class="text">Bianka w legowisku</div>'+
  '</div>'+

  '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>'+
  '<a class="next" onclick="plusSlides(1)">&#10095;</a>'+
'</div>'+
'<br>'+

'<div style="text-align:center">'+
  '<span class="dot" onclick="currentSlide(1)"></span>'+
  '<span class="dot" onclick="currentSlide(2)"></span>'+
  '<span class="dot" onclick="currentSlide(3)"></span>'+
    '<span class="dot" onclick="currentSlide(4)"></span>'+
	  '<span class="dot" onclick="currentSlide(5)"></span>'+
	    '<span class="dot" onclick="currentSlide(6)"></span>'+
		  '<span class="dot" onclick="currentSlide(7)"></span>'+
'</div>';
 
  return tresc;

	
	
}


function galeria(){
	
	pokaz(5);
	showSlides(1);
}
function wyslij(){
alert("Jeśli podałeś/aś prawidłowo swój adres e-mail, to wiadomość została wysłana.");
 document.getElementById('kontakt').reset();
}
function pokazKontakt(){
	tresc='<h2>Autorka</h2>';
tresc+='<img src="autorki.jpg" style="width:60%;display:block; margin-left: auto; margin-right: auto;">';


tresc+='<p>Nazywam się Alicja, a mój Beagle to Bianka. Jesteśmy razem od wakacji 2020. Opieka nad Bianką pochłania mi większość czasu. ';
tresc+='W wolnych chwilach studiuję matematykę i informatykę. Jesli Bianka długo śpi, to zdarza mi się obejrzeć film z przyjaciółmi (uwielbiam klasyki z lat 80-tych). ';
tresc+='Lubię też oglądać seriale, czytać książki, rysować, a jeśli najdzie mnie wena, to piszę opowiadania na mojej maszynie do pisania. Moim marzeniem od zawsze jest wydać własną książkę. ';
tresc+='Gram też na gitarze i ukulele, a kiedy nie ma koronawirusa, to uczęszczam z partnerem na kurs tańca. ';
tresc+='Z kolei Bianka uwielbia długie spacery, dużo dobrego jedzenia, a potem długie spanko (zazdroszczę jej podejścia do życia). ';
tresc+='</p>';
tresc+='<p> Stronę "Beaglowe love" stworzyłam, aby podzielić się doświadczeniami mojej opieki nad Beaglem. Strona nadal się rozwija, więc jeśli macie jakieś uwagi to zachęcam do kontaktu. ';
tresc+='Jeżeli chcesz ze mną porozmawiać o Beaglach, to również zapraszam, można mnie znaleźć na <a href="https://www.facebook.com/people/Ala-Ho%C5%82owiecka/100004190028525"> Facebooku </a> lub skontaktować się ze mną przez poniższy formularz: ';
tresc+='</p>';
  
tresc+='<form id="kontakt" action="" method="post">';

tresc+='<label>Adres e-mail</label>';
tresc+='<input type="text" name="email_address" size="40">';

tresc+='<label>Wiadomość</label>';
tresc+='<textarea name="feedback" cols="50" rows="10"></textarea>';
tresc+='<br>';
tresc+='<input type="button" value="Wyślij" onclick =wyslij()>';

tresc+='</form>';



	return tresc;
	
	
}

