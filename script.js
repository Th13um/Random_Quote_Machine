function randomQuote(){
switch (Math.floor(Math.random()*10)) {
  case 0:
    return["May I say that I have not thoroughly enjoyed serving with humans? I find their illogic and foolish emotions a constant irritant.","Star Trek, season 3, episode 7 (“Day of the Dove,” 1968)"];
    break;
  case 1:
    break;
    return["Computers make excellent and efficient servants, but I have no wish to serve under them.","Star Trek, season 2, episode 24 (“The Ultimate Computer,” 1968)"];
    break;
  case 2:
    return["Insufficient facts always invite danger.","Star Trek, season 1, episode 24 (“Space Seed,” 1968)"];
    break;
  case 3:
    return["In critical moments, men sometimes see exactly what they wish to see.","Star Trek, season 3, episode 9 (“The Tholian Web,” 1968)"];
    break;
  case 4:
    return["After a time, you may find that having is not so pleasing a thing after all as wanting. It is not logical, but is often true.","Star Trek, season 2, episode 1 (“Amok Time,” 1968)"];
    break;
  case 5:
    return["Without followers, evil cannot spread.","Star Trek, season 3, episode 5, (“And the Children Shall Lead,” 1968)"];
    break;
  case 6:
    return["When you eliminate the impossible, whatever remains, however improbable, must be the truth.","Star Trek VI: The Undiscovered Country, 1991"];
    break;
  case 7:
    return["I could not deprive you of the revelation of all that you could accomplish together, of a friendship that will define you both in ways you cannot yet realize.","Star Trek, 2009"];
    break;
  case 8:
    return["Live long and prosper.","Star Trek, season 2, episode 1 (“Amok Time,” 1968)"];
    break;
  case 9:
    return["The needs of the many outweigh the needs of the few.","Star Trek II: The Wrath of Khan, 1982"];
    break;
  case 10:
    return["Change is the essential process of all existence.","Star Trek, season 3, episode 15 (“Let That Be Your Last Battlefield,” 1969)"];
    break;
  default:
    return["I have never understood the female capacity to avoid a direct answer to any question.","Star Trek, season 1, episode 24 (“This Side of Paradise ,” 1967)"];
    break;
}
}

function bip(){
  randomQuote();
    var phrase = randomQuote();

  document.getElementById('phrase').innerHTML = phrase[0];
  document.getElementById('episode').innerHTML = phrase[1];
  document.getElementById("tweet").href = 'https://twitter.com/intent/tweet?text='+ phrase[0]+' Spock';
}
