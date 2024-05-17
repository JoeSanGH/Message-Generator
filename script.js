let fortunes = ['When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love. Then make that day count by setting your mind on doing good. - Marcus Aurelius',
  'It is no measure of health to be well-adjusted to a profoundly sick society. A profound individual and collective transformation is required, but that cannot come about if we are merely adjusting ourselves to the existing norms. - Jiddu Krishnamurti',
  'The secret of change is to focus all of your energy not on fighting the old, but on building the new. - Socrates',
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = 'Come back tomorrow!';
  button.style.cursor = 'default';
  // button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);