var counter = 0;
var right = [];
var wrong = [];
var quiz = [
  ["Who is god of roadways, travelers, merchants and thieves?", "hermes"],
  ["Who is the goddess of the moon, the hunt, and young maidens?", "artemis"],
  ["Who is the good of sleep?", "hypnos"],
  ["Who is the goddess of the rainbow, and messenger of the gods?", "iris"],
  ["Who is the god of archery, music poetry, prophecy, medicine, and later on the god of the sun?", "apollo"],
  ["Who is the goddess of war, wisdom and crafts?", "athena"],
  ["What is the roman name for Zeus?", "jupiter"],
  ["Who are Leto's two twins?", "apollo and artemis"],
  ["Who is the god of wine?", "dionysus"],
  ["Who is the goddess of victory?", "nike"],                                                                        ];                                                                                                                                                                                                                                  function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;

  //document.write(message);
}

for (var i=0; i < quiz.length; i++) {
  var answer = prompt(quiz[i][0]);
  answer = answer.toLowerCase();
  if (answer === quiz[i][1]) {
    counter += 1;
    right.push("<li>" + quiz[i][0] + "</li>");
  } else {
    wrong.push("<li>" + quiz[i][0] + "</li>");
  }
}


print("<p>You got " + counter + " question(s) right!</p>" + "<p><strong>You got these questions correct:</strong></p><ol>" + right.join(' ') + "</ol><p><strong>You got these questions wrong:</strong></p><ol>" + wrong.join(' ') + "</ol>");
//print("<p><strong>You got these questions correct:</strong></p>");
//print("<p><strong>You got these questions wrong:</strong></p>");
