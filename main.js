var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var universe = "Everything that exists- from sub atomic particles to the largest structures ever found forms the universe, It is believed that the ,Universe contains about 100 billion galaxies of which each one has an average of 100 billion stars, The 'Big Bang' Theory is the widely accepted theory about the origin of the ,Universe,It has not been proved yet whether the ,Universe is expanding further or contracting or remaining steady,also universe is about 14 billion years old!!!";
var sun = "The Sun is a huge burning ball of gas at the centre of the solar system, It is the energy giving star to the whole solar system,  It is a yellow star about 5 billion years old, consisting entirely of hydrogen and helium,The temperature of the surface of the earth is about 5500 degree Celsius and of the centre is about 15,000,000 degree Celsius, The diameter of the Sun is about 1,392,000 kilometres which is 109 times that of the Earth, The Sun is very old, He is about 5 billion years old!!! The Sun is fast too,The time required by sunlight to reach the Earth is about 8 minutes and 20 seconds only, even though the distance between Sun and the Earth is about 150 million kilometres!!!";
var black_hole = "Many believe that Black Hole is the key to EVERYTHING, Like Time Travel and Multiverse and other stuff that conspiracy theorists have to work more, But we can't just take any spaceship and get to the Black Hole,   It has to be incredibly fast!!, The nearest Black Hole is about 1,500 light years from the Earth,   So its pretty far and by the way, 1 light year is about 10 trillion kilometres  But if you are planning to have a field trip the BLACK HOLE, then you have to be aware of the INSANE gravitation pull,  You will be eaten by the Black Hole in seconds!!!";
var theories = "Multiple Worlds Theory We have talked about ,Multiverse in the 'Universe' Section but we are going to talk more about it in this section, Here is one theory, So back in 1954, A student HUGH EVERETT came up with the first Multiverse Theory, his theory was that the Universe is splitting and each of these half universes became a whole Universe, and these 2 whole Universes split, and these 4 splits became whole and became 4 WHOLE UNIVERSES!!! Then these 4 universes split and made 8 whole universes then, you know the drill, example: You are buying a harry potter and the philosopher's stone, book in your universe, but in another universe you may be buying Sherlock Holmes, And maybe you will be wearing a detective hat too ya know, You can refer to the duplicates of loki in the 'Loki' series,   Just think that there are many varients of you choosing another book in that Librar, And these multiverse theories are not made by guesses, Smart people do actual maths and physics all those stuff and test it out,  So there is a possibility that multiverse exists,  Time Travel Theory, you guys have heard about the 'Bermuda Triangle Plane disappearing story' and we all know that the story was fake,  But what if it was not?, GOOSEBUMPS, isn't it?, We could actually travel through time forwards, And its also proven,  But the biggest question is that, Can we travel back in time?, Back in 1995, Mike Tyson was doing a boxing match, and somebody in the background was using a SMARTPHONE, and by the way this is the time where they had this big thick telephones,  SO.....ya know,  The mystery is still uncovered, Yes I know, GOOSEBUMPS no DUCKBUMPS, bad one, I know, John Titor claimed to be a time traveller from 2036, John Titor made numerous vague and specific predictions regarding calamitous events in 2004 and beyond, including a nuclear war, But an investigation in 2009 proved that the story was fake was a creation of Larry Haber, A florida entertainment lawyer with his brother Morey, a computer scientist, Again, we are not sure if it is actually fake or not!!!";
var aliens = "We couldn't be the only intelligent species in this huge Universe?There could be aliens but we just don't have the technology to communicate or see them, Of course its dangerous to have direct communication with aliens because we still don't know if they are dangerous or not,We have been looking to communicate with aliens for about 70 to 80 years and there is still no clue of aliens in this universe, What if aliens are planning a surprise attack to invade our planet like in the Stephen Hawking theory, Maybe aliens are monitoring you, yeah you";
var spek = [universe, sun, black_hole, theories, aliens]; 

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="speak")
      {
        console.log("speak --- ");
        speak();
      }
      
function speak(){
    var synth = window.speechSynthesis;

    speak_data = spek;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}}