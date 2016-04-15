var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
console.log('Start');


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
