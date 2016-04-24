var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
console.log('Start');


var lyrics =
"Well I've heard there was a secret chord\
That David played and it pleased the Lord\
But you don't really care for music, do you?\
Well it goes like this:\
The fourth, the fifth, the minor fall and the major lift\
The baffled king composing Hallelujah\
Well your faith was strong but you needed proof\
You saw her bathing on the roof\
Her beauty and the moonlight overthrew ya\
She tied you to her kitchen chair\
And she broke your throne and she cut your hair\
And from your lips she drew the Hallelujah\
But baby I've been here before\
I've seen this room and I've walked this floor\
You know, I used to live alone before I knew ya\
And I've seen your flag on the marble arch\
And love is not a victory march\
It's a cold and it's a broken Hallelujah\
Well there was a time when you let me know\
What's really going on below\
But now you never show that to me do ya\
But remember when I moved in you\
And the holy dove was moving too\
And every breath we drew was Hallelujah\
Maybe there's a God above\
But all I've ever learned from love\
Was how to shoot somebody who outdrew ya\
And it's not a cry that you hear at night\
It's not somebody who's seen the light\
It's a cold and it's a broken Hallelujah";



var rec = new SpeechRecognition();
var grammar = '#JSGF V1.0; grammar commands; public <command> = everybody | stop | start;';
var recList = new SpeechGrammarList();
recList.addFromString(grammar, 1);
rec.grammars = recList;
rec.lang = 'en-US';
rec.interimResults = false;
rec.maxAlternatives = 1;

var output = document.getElementById('output');

var result;

document.body.onclick = function() {
  rec.start();
  console.log('rec started');
}

rec.onresult = function(event) {
  console.log(event);

  if (event.results[0][0].transcript === 'everybody' && event.results[0][0].confidence > 0.9) {
    output.innerHTML = "EVERYBODY";
    console.log('found!');
  }
  console.log('almost kinda');
  
}

rec.onspeechend = function() {
  rec.stop();
  console.log('stahp');
}

rec.onnomatch = function(event) {
  output.textContent = "did not recognize";
  console.log('womp');
}

rec.onerror = function(event) {
  output.textContent = 'error: ' + event.error;
}


var synth = window.speechSynthesis;

var voices = [];


synth.onvoicechanged = function() {
    voices = synth.getVoices();
}


var utter = new SpeechSynthe




