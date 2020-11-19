var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
	tresc='<img src="img/beagle.jpg" alt="picture of a Beagle" style="width:30%;margin:20px; float:left;">';
	
	tresc+='<h1>Welcome!</h1> ';
tresc+='<p> Welcome to the Beagles website. If you want to know more about this breed, see "About breed" tab. '+
'If you want to read about dog development in general, click on the "Stages of a dog\'s life" tab. '+
'For tips on caring for Beagle, see the "Advices" tab. '+
'If you want to see pictures of my own dog, they are in the "Gallery" tab. '+
'Information about me can be found in the "About me" tab. You can also contact me there. '+
'</p><p>'+
	'Happy browsing!'+
	'</p>';
	return tresc;
	
}

function pokazRase(){


 tresc ='<h1>About breed</h1> <p>Beagles are known for their beautiful appearance and interesting character. How did these hunting dogs find way to our couches? Let\'s find out more about this wonderful breed. </p>';
 tresc+='<img  src="img/beagle1.jpg"  alt=" Beagle picture" style="width:70%;display:block; margin-left: auto; margin-right: auto;"/>';
 tresc+='<h2>Character</h2>';
tresc+='<p>These hunting dogs have only recently been bred as domestic and family dogs, so keep in mind that in many cases their behavior will be dictated by instinct. ';
tresc+='Beagles are mischevious dogs with a happy temper. They are friendly and gentle with both household members and strangers, so they are not suitable as guard dogs, but thanks to the lack of aggression, they will be great companions for children. ';
tresc+='Beagles are full of energy and are perfect for people who spend time actively. Beagle which is unable to discharge energy, will destroy furniture or dig the garden out of boredom.';
tresc+='Beagles tolerate loneliness very badly, and, left alone for hours, can howl, destroy objects or deliberately treat your couch as a bathroom. ';
tresc+='</p>';
tresc+='<h2> Skills </h2>';
tresc+='<p>The Beagle is a hunting dog with an extremely sensitive sense of smell. It is tough, strong and tireless in pursuit. It can be used in hunting almost any game. ';
tresc+='In addition to hunting, Beagles are sometimes used to detect drugs and smuggled food at airports.';
tresc+='They also work well in dog therapy. ';
tresc+='</p>';
 tresc+='<img  src="img/beagle3.jpg"  alt="small Beagle picture" style="width:70%;display:block; margin-left: auto; margin-right: auto;"/>';
tresc+='<h2> Upbringing </h2>';
tresc+='<p> Beagles are clever and stubborn, which is why they require consistency and determination from the very first moment.';
tresc+='However, keep in mind that these dogs are very sensitive and require positive training. When treated too harshly, they can become disobedient or become extremely shy. ';
tresc+='<h2>Health</h2>';
tresc+='<p>Most Beagles are healthy and long-living dogs. The most common ailments are eye problems (especially the so-called cherry eye, i.e. the third eyelid). ';
tresc+='They can also suffer from ear diseases, various allergies, and less often epilepsy. ';
tresc+='Dogs of this breed have a huge appetite, and therefore a tendency to gain weight and also to eat rubbish while walking. ';
tresc+='</p>';
tresc+='<h2>Appearance</h2>';
tresc+='<p>Beagles are medium-sized dogs, growing to about 40 cm at the withers. ';
tresc+='They have a stocky, chunky silhouette. Their weight is usually between 10 and 18 kg, but more massive individuals can be found. ';
tresc+='They have strong, relatively short legs which, however, allow them to run very quickly. ';
tresc+='Beagle\'s head is quite long, with distinctive hanging ears. ';
tresc+='They are short-haired dogs with three (black, fawn and white) or two (most often white with fawn, red or lemon) colors. According to the breed standard, the tail end must necessarily be white. ';
tresc+='</p>';
 tresc+='<img  src="img/beagle2.jpg"  alt="Beagle with a girl" style="width:70%;display:block; margin-left: auto; margin-right: auto;"/>';
tresc+='<h2>Who is this dog for</h2>';
tresc+='<p>Beagles are not suitable for busy people who spend most of the day outside the home. They are also not good for people who are looking for an obedient, easy-to-train dog. ';
tresc+='A Beagle owner should be active, patient, understanding, but consistent. He must pay a lot of attention to the dog. ';
tresc+='Beagle will feel best in a house with a garden, but it will easily adapt to living in an apartment as long as it has a place to discharge its energy. ';
tresc+='It is suitable for both single people and families with children, although one has to remember that it is a group dog, so it will feel best in a large family. ';
tresc+='</p>';

	return tresc;

}


function pokazMiesiace(){
	tresc='<h2> Neonatal stage - 0 to 12 days </h2>';
	tresc+='<figure>';
  tresc+='<img src="img/bianka_mala.png" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka in first days of life.</figcaption>';
tresc+='</figure>';
	tresc+='<p>At birth, the puppy is blind and deaf, so it initially explores the world through his other senses. ';
	tresc+='A puppy at this age is completely dependent on its mother. Following her heat, it goes to the food source. ';
	tresc+='During the first days after birth, puppies should not be separated from their mother even for a moment. It is best not to touch them and not try to pick them up, so as not to disturb the mother. ';
	tresc+='</p>';
	tresc+='<h2>Transitional stage - from 13th to 20th day </h2>';
	tresc+='<figure>';
  tresc+='<img src="img/bianka_mala2.jpeg" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka in first weeks of life.</figcaption>';
tresc+='</figure>';
	tresc+='<p>Puppies are livelier and begin to play with each other. At this age they learn the so-called bite inhibition - how hard they can bite without causing pain. ';
	tresc+='If they don\'t acquire this skill, it will be virtually impossible to catch up in later life. ';
	tresc+='Contact with people is also important at this stage. At the end of the third week, the dogs begin to eat from the bowl and walk on all fours instead of crawling. ';
	tresc+='At the beginning of the transition period, puppies open their eyes and at the end they begin to hear. ';
	tresc+='</p>';
	tresc+='<h2>Socialization stage - from 4th to 12th week </h2>';
	tresc+='<figure>';
  tresc+='<img src="img/bianka_8tyg.jpg" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka at the age of 8 weeks.</figcaption>';
tresc+='</figure>';
	tresc+='<p>This is a very important stage in a dog\'s life and we should take advantage of it. ';
	tresc+='The puppy makes social contacts, learns the rules of the herd. ';
	tresc+='Between 8 and 11 weeks of age, the puppy begins to feel fear, so it\'s important not to put him under a lot of stress during this period. ';
	tresc+='Anything a puppy sees during socialization will later be a normal part of the world for him. ';
	tresc+='So let\'s get the dog familiar with the elements that it will often deal with later, e.g. if you want to travel with the dog by bus, it is worth going for a short ride, or at least taking the dog to the bus stop. ';
	tresc+='The big problem is that most puppies are in quarantine after vaccinations during socialization stage. ';
	tresc+='There are two options: go with your puppy to places that are not frequented by other dogs so that it does not get infected, or carry your puppy in the so-called socialization bag. ';
	tresc+='The risk of a puppy getting infected is fairly small, and it is more important that the dog is properly socialized and does not become wild. ';
	tresc+='</p>';
	tresc+='<h2>Youth stage - from 3rd to about 6th month </h2>';
	tresc+='<figure>';
  tresc+='<img src="img/bianka_zalew.jpg" alt="Bianka" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Bianka at the age of 4 months.</figcaption>';
tresc+='</figure>';
	tresc+='<p>During this period, differences in development depending on the breed begin to become apparent - in general, large breed dogs mature a little more slowly than smaller dogs. ';
	tresc+='It is then a period of re-socialization, we should still introduce the puppy to new stimuli. ';
	tresc+='Young dogs are becoming more and more independent, they do not return to their owners as willingly as they used to. ';
	tresc+='At the end of this period, males start looking for a future mate and females have their first heat. ';
	tresc+='</p>';
	tresc+='<h2>Maturation stage - from 6th to about 14th month </h2>';
	tresc+='<figure>';
  tresc+='<img src="img/dorosly_beagle.jpg" alt="Young Beagle" style="width:50%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Young Beagle.</figcaption>';
tresc+='</figure>';
	tresc+='<p>This is a period of rebellion that some dogs go through more stormily, others less. There are major hormonal changes in the dog\'s body.';
	tresc+='During this period, strange, unexpected behaviors may occur, e.g. the dog may become afraid of items that have not been a problem for him so far. ';
	tresc+='</p>';
	tresc+='<h2>Adult stage - reached after from 1 to about 4 years </h2>';
		tresc+='<figure>';
  tresc+='<img src="img/beagle_spi.jpg" alt="Sleeping Beagle" style="width:70%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Adult, calmer Beagle.</figcaption>';
tresc+='</figure>';
	tresc+='<p>During this period, dogs have a fully developed psyche and have reached their target size and appearance physically. ';
	tresc+='This is the age when the dog should already know its place in the herd.';
	tresc+='Depending on the breed, the dog becomes more stable and calm at some point during this period (it could be after a year, two, three or more). ';
	tresc+='</p>';
	tresc+='<h2>Senility stage </h2>';
	tresc+='<figure>';
  tresc+='<img src="img/old-dog.jpg" alt="Old dog" style="width:70%;display:block; margin-left: auto; margin-right: auto;">';
  tresc+='<figcaption style="text-align:center">Elderly dog.</figcaption>';
tresc+='</figure>';
	tresc+='<p>We can talk about old age in a dog at various ages, depending on the breed and size. ';
	tresc+='In general, large breed dogs live shorter lives, e.g. Great Danes live only 6-8 years. On average, domestic dogs live to be around 10-13 years. ';
	tresc+='Signs of aging include difficulty with moving, being less active, and deteriorating eyesight and hearing. ';
	tresc+='Often seniors are less likely to establish contacts with other dogs, they may show fear or aggression. ';
	tresc+='During this time, it is important to properly care for the dog, choose its diet accordingly, and if necessary, support the dog\'s body with supplements or medications. ';
	tresc+='Caring for an old dog can cause many worries, but it is worth taking care of our pet\'s health in order to enjoy its company as long as possible. ';
	tresc+='</p>';
	return tresc;
	
	
}

function pokazPorady(){
	
	
	tresc='<h2>How to feed a Beagle?</h2>';
	tresc+='<p>';
  tresc+='<img src="img/infografika.jpg" alt="Infographics feeding" style="width:20%; float:left; margin:20px;" >';

  tresc+=' Beagles are known to be voracious. When left unattended, Beagle can eat just about anything (except for the boring dog food it eats every day). ';
  tresc+='Remember what is poisonous to your dog and what should be kept out of its reach, e.g. grapes, raisins, and avocados. ';
  tresc+='Chocolate and cocoa contain theobromine which is very toxic to dogs. Eating chocolate can even result in pancreatitis. ';
  tresc+='During autumn walks, it is worth paying attention to chestnuts, acorns and cones. Chestnuts in particular are highly poisonous to the dog. ';
  tresc+='It is also worth being careful that the dog does not eat rubbish or socks. These can clog the stomach and the dog will not be able to digest. ';
  tresc+='</p>';
  tresc+='<p>If the owner wants to feed the dog with dog food only, it is fully possible. The food contains all the necessary ingredients. ';
  tresc+='If you want to cook your dog, find out what the dog can eat. Besides, you need to give him supplements. ';
  tresc+='Dogs can eat meats such as beef, horse meat, lamb, poultry, and fish. Of course, we are talking about heat-treated meat. ';
  tresc+='You can also feed your pet with eggs, rice, noodles, oatmeal, most vegetables and fruits (e.g. boiled carrots regulate the digestive system very well). ';
  tresc+='We can also give the dog a bone to chew on, but only if it is large enough not to choke on it. ';
  tresc+='</p>';
  tresc+='<h2> Check if your puppy\'s weight is correct for its age </h2>';
  tresc+='<p>Enter your puppy\'s age (in full months):</p> <input type="text" id="wiek"> <br> ';
  tresc+='<p>Choose your puppy\'s gender:</p>'+
'<label for="male"><input type="radio" id="male" name="gender" value="male">Male</label><br>'+

'<label for="female"><input type="radio" id="female" name="gender" value="female">Female</label>';
tresc+='<br>';
tresc+='<input type="button" value="Check weight" onclick =sprawdz_wage()>';
tresc+='<br>';
tresc+='<div id="waga">';
tresc+='</div>';

tresc+='<h2> What should a walk be like?</h2>';
tresc+='<p>';
  tresc+='<img src="img/infografika2.jpg" alt="Infographics walk" style="width:20%; float:right; margin:20px" >';
  tresc+='There are two schools of walking the Beagle. Some say to unleash him, others say never to let him go, because he will run away. ';
  tresc+='The Beagle is a hunting dog, so if it catches a trail it will run after it, regardless of our calls. ';
  tresc+='If we want to let the dog off the leash, it is worth practicing recalling from an early age, and do it only in places where it is safe to let the dog go. ';
  tresc+='You also need to have dog treats with you to encourage your dog\'s obedience. Beagles are very self-reliant, so even a favorite treat does not guarantee the dog\'s return. ';
  tresc+='</p>';
  tresc+='<p>Beagles used to live in packs, so contact with other dogs is important to them. If possible, let your pet play with other dogs. ';
  tresc+='In some cities, owners organize "Beagle Meetings", where dogs can play with each other and the owners exchange experiences. ';
  tresc+='</p>';
  tresc+='<p>Beagles are full of energy and after proper training they will be happy to run with us or next to our bike. ';
  tresc+='Keep in mind that in addition to running out, Beagles have a strong need to sniff, and we must allow them to meet that need. ';
  tresc+='It is worth practicing various tricks with the dog, you can also take a toy for the dog for a walk, or simply throw it sticks to retrieve. ';
  tresc+='</p>';
 



	
	tresc+='<h2> What to pay attention for at the vet?</h2>';


tresc+='<p>';
tresc+='<img src="img/infografika3.jpg" alt="Infographics vet" style="width:20%; float: left; margin:20px;" >';

tresc+='Of course, you have to remember about regular vaccinations, deworming and administering a tick protection (pills, drops or a collar). ';
  tresc+='Major health problems include ear diseases. Ears should be cleaned regularly with sticks (ask your vet to show you how to do this the first time). ';
  tresc+='Some Beagles also require eye treatment, with the third eyelid falling out frequently. ';
  tresc+='In the case of food allergies or hypersensitivity, the doctor can advise us on a specialized dog food. ';
  tresc+='A vet can also help with claw trimming, especially the first time, if we don\'t know how to do it ourselves. ';
    tresc+='</p>';
   tresc+='<p>We go to the vet anytime we see something disturbing in the behavior of our pet, e.g. lack of appetite, depression, vomiting, other symptoms. ';
  tresc+='Especially puppies or dogs weakened by other diseases or treatments are at risk. In the colder season, it is easy to even get pharyngitis. ';
  tresc+='</p>';
  tresc+='<p>If we are considering castration or sterilization, it is worth asking the vet at what age the procedure should be performed. It\'s also best to ask for a recommendation from a good clinic that deals with such procedures. ';
  tresc+='In the case of bitches, sterilization is usually recommended after the first heat. ';
  tresc+='Many owners are afraid of this procedure. The truth is that if we do not plan to have puppies, sterilization is very beneficial, it frees us from unwanted dog adoorators, and the bitch has no problem with imaginary pregnancies, moreover at old age there is no risk of diseases of the reproductive system, e.g. pyomyxia. ';
  tresc+='For males, castration will make them less likely to flee. However, with an inadequate diet and lack of exercise, castrated dogs are even more likely to gain weight. ';
  tresc+='</p>';

	return tresc;
}
function sprawdz_wage(){
	
	var wiek=document.getElementById("wiek").value;
	wiek=parseInt(wiek);
	var plec;
	if(document.getElementById("male").checked) {plec="samiec";}
	else if(document.getElementById("female").checked) {plec="samica";}
	if(plec=="samica"){
		switch(wiek){
			case 1: document.getElementById("waga").innerHTML='Correct weight is about 1.5kg'; break;
			case 2: document.getElementById("waga").innerHTML='Correct weight is about 3.4kg'; break;
			case 3: document.getElementById("waga").innerHTML='Correct weight is about 5kg'; break;
			case 4: document.getElementById("waga").innerHTML='Correct weight is about 7kg'; break;
			case 5: document.getElementById("waga").innerHTML='Correct weight is about 8kg'; break;
			case 6: document.getElementById("waga").innerHTML='Correct weight is about 9kg'; break;
			case 7: document.getElementById("waga").innerHTML='Correct weight is about 10kg'; break;
			case 8: document.getElementById("waga").innerHTML='Correct weight is about 10.5kg'; break;
			case 9: document.getElementById("waga").innerHTML='Correct weight is about 10.8g'; break;
			case 10: document.getElementById("waga").innerHTML='Correct weight is about 11kg'; break;
			case 11: document.getElementById("waga").innerHTML='Correct weight is about 12kg'; break;
			case 12: document.getElementById("waga").innerHTML='Correct weight is about 13kg'; break;
			default: document.getElementById("waga").innerHTML='Correct weight for adult Beagle female is about 13kg'; break;
		}
	}
	else if(plec=="samiec"){
		switch(wiek){
			case 1: document.getElementById("waga").innerHTML='Correct weight is about 2kg'; break;
			case 2: document.getElementById("waga").innerHTML='Correct weight is about 3-4kg'; break;
			case 3: document.getElementById("waga").innerHTML='Correct weight is about 6kg'; break;
			case 4: document.getElementById("waga").innerHTML='Correct weight is about 8kg'; break;
			case 5: document.getElementById("waga").innerHTML='Correct weight is about 10kg'; break;
			case 6: document.getElementById("waga").innerHTML='Correct weight is about 12kg'; break;
			case 7: document.getElementById("waga").innerHTML='Correct weight is about 13kg'; break;
			case 8: document.getElementById("waga").innerHTML='Correct weight is about 14kg'; break;
			case 9: document.getElementById("waga").innerHTML='Correct weight is about 15kg'; break;
			case 10: document.getElementById("waga").innerHTML='Correct weight is about 16kg'; break;
			case 11: document.getElementById("waga").innerHTML='Correct weight is about 17kg'; break;
			case 12: document.getElementById("waga").innerHTML='Correct weight is about 18kg'; break;
			default: document.getElementById("waga").innerHTML='Correct weight for adult Beagle male is about 18kg'; break;
		}
	}
	
}
function pokazGalerie(){

	tresc='<h2>Pictures of Bianka</h2>';
tresc+='<div class="slideshow-container">'+
'<div class="mySlides fade">'+
    '<div class="numbertext">1 / 7</div>'+
    '<img src="img/img7.jpg" alt="Short walk" style="width:100%">'+
    '<div class="text">Short walk</div>'+
  '</div>'+


  '<div class="mySlides fade">'+
    '<div class="numbertext">2 / 7</div>'+
    '<img src="img/img2.jpg" alt="Bianka in winter jacket" style="width:100%">'+
    '<div class="text">Bianka in winter jacket</div>'+
  '</div>'+

 '<div class="mySlides fade">'+
    '<div class="numbertext">3 / 7</div>'+
    '<img src="img/img3.jpg" alt="Bianka at Zalew Zemborzycki for the first time" style="width:100%">'+
    '<div class="text">Bianka at Zalew Zemborzycki for the first time</div>'+
  '</div>'+
   '<div class="mySlides fade">'+
    '<div class="numbertext">4 / 7</div>'+
    '<img src="img/img4.jpg" alt="First day at home" style="width:100%">'+
    '<div class="text">First day at home</div>'+
  '</div>'+
    '<div class="mySlides fade">'+
    '<div class="numbertext">5 / 7</div>'+
    '<img src="img/img5.jpg" alt="Playing with bigger friend" style="width:100%">'+
    '<div class="text">Playing with bigger friend</div>'+
  '</div>'+
    
    '<div class="mySlides fade">'+
    '<div class="numbertext">6 / 7</div>'+
    '<img src="img/img6.jpg" alt="Visiting friends at birthday party" style="width:100%">'+
    '<div class="text">Visiting friends at birthday party</div>'+
  '</div>'+
    '<div class="mySlides fade">'+
    '<div class="numbertext">7 / 7</div>'+
    '<img src="img/img1.jpg" alt="Bianka in her den" style="width:100%">'+
    '<div class="text">Bianka in her den</div>'+
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
alert("If your e-mail address was correct, the message is sent.");
 document.getElementById('kontakt').reset();
}
function pokazKontakt(){
	tresc='<h2>About me</h2>';
tresc+='<img src="img/autorki.jpg" alt="Author with her dog" style="width:60%;display:block; margin-left: auto; margin-right: auto;">';


tresc+='<p>My name is Alicja and my Beagle here is Bianka. We have been together since summer 2020. Taking care of Bianka takes me most of my time. ';
tresc+='In my free time I study mathematics and computer science. If Bianka sleeps for a long time, I sometimes watch a movie with my friends (I love the classics from the 80\'s). ';
tresc+='I also like watching TV series, reading books, drawing, and if I am inspired, I write short stories on my typewriter. My dream has always been to publish my own book. ';
tresc+='I also play guitar and ukulele, and when there is no coronavirus, I attend a dance course with my partner. ';
tresc+='On the other hand, Bianka loves long walks, lots of good food, and then a long sleep (I envy her approach to life). ';
tresc+='</p>';
tresc+='<p> I created the "Beaglowe love" site to share my experience of caring for Beagle. The website is still developing, so if you have any comments, feel free to contact me. ';
tresc+='If you want to talk with me about Beagles, you can find me on <a href="https://www.facebook.com/people/Ala-Ho%C5%82owiecka/100004190028525">Facebook</a> or contact me via the interactive form below: ';
tresc+='</p>';
  
tresc+='<form id="kontakt" action="" method="post">';

tresc+='<label>E-mail address:</label>';
tresc+='<input type="text" name="email_address" size="40">';

tresc+='<label>Message</label>';
tresc+='<textarea name="feedback" cols="50" rows="10"></textarea>';
tresc+='<br>';
tresc+='<input type="button" value="Send" onclick =wyslij()>';

tresc+='</form>';



	return tresc;
	
	
}

