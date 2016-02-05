var nouns = ['distance', 'thunder', 'meat', 'cake', 'flocks', 'history', 'pleasure', 'potatoes', 'worms', 'blades', 'lamps', 'cattle'];

var adjectives = ['premium', 'permissible', 'hot', 'imminent', 'curious', 'efficacious', 'stupid', 'chivalrous', 'threatening', 'parallel', 'three', 'agreeable'];

var adverbs = ['aboard', 'abnormally', 'about', 'abroad', 'absentmindedly', 'absolutely', 'abundantly', 'accidentally', 'accordingly', 'actively', 'actually', 'acutely'];

var verbs = ['lie', 'exercise', 'zoom', 'spoil', 'dream', 'signal', 'unpack', 'consider', 'scrape', 'approve', 'moor', 'pretend'];

function generateStory(){
  var storyBox = document.getElementById('story-box').innerText='';
  var storyBox = document.getElementById('story-box');

  var nounInput = document.getElementById('noun').value;
  var nounStr = nounInput;
  var nounStrArray = nounStr.split(',');
  if (nounStrArray[0] === ''){
    nounStrArray[0] = nouns[Math.floor(Math.random()*nouns.length)];
  }
  var wordsNeeded = 4 - nounStrArray.length;
  if (nounStrArray.length > 4){
    alert('Please type no more than 4 nouns separated by commas')
  }
  for(var i = 0; i < wordsNeeded; i++){
    var assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
    nounStrArray.push(assignedNoun);
  }

  var adjectiveInput = document.getElementById('adjective').value;
  var adjectiveStr = adjectiveInput;
  var adjectiveStrArray = adjectiveStr.split(',');
  if (adjectiveStrArray[0] === ''){
    adjectiveStrArray[0] = adjectives[Math.floor(Math.random()*adjectives.length)];
  }
  var wordsNeeded = 4 - adjectiveStrArray.length;
  if (adjectiveStrArray.length > 4){
    alert('Please type no more than 4 adjectives separated by commas')
  }
  for(var i = 0; i < wordsNeeded; i++){
    var assignedAdjective = adjectives[Math.floor(Math.random()*adjectives.length)];
    adjectiveStrArray.push(assignedAdjective);
  }

  var adverbInput = document.getElementById('adverb').value;
  var adverbStr = adverbInput;
  var adverbStrArray = adverbStr.split(',');
  if (adverbStrArray[0] === ''){
    adverbStrArray[0] = adverbs[Math.floor(Math.random()*adverbs.length)];
  }
  var wordsNeeded = 4 - adverbStrArray.length;
  if (adverbStrArray.length > 4){
    alert('Please type no more than 4 adverbs separated by commas')
  }
  for(var i = 0; i < wordsNeeded; i++){
    var assignedAdverb = adverbs[Math.floor(Math.random()*adverbs.length)];
    adverbStrArray.push(assignedAdverb);
  }

  var verbInput = document.getElementById('verb').value;
  var verbStr = verbInput;
  var verbStrArray = verbStr.split(',');
  if (verbStrArray[0] === ''){
    verbStrArray[0] = verbs[Math.floor(Math.random()*verbs.length)];
  }
  var wordsNeeded = 4 - verbStrArray.length;
  if (verbStrArray.length > 4){
    alert('Please type no more than 4 verbs separated by commas')
  }
  for(var i = 0; i < wordsNeeded; i++){
    var assignedVerb = verbs[Math.floor(Math.random()*verbs.length)];
    verbStrArray.push(assignedVerb);
  }


  
  if(document.getElementById('brainstorm').checked){
      var story = document.createElement('p');
      story.innerText = brainstormStory(nounStrArray, adjectiveStrArray, adverbStrArray, verbStrArray);
      storyBox.appendChild(story);
  } else if(document.getElementById('brainstorm').checked) {
      var story = document.createElement('p');
      story.innerText = brainstormStory(nounStrArray, adjectiveStrArray, adverbStrArray, verbStrArray);
      storyBox.appendChild(story);
  } else if(document.getElementById('brainstorm').checked && nounStrArray.length === 2 && adjectiveStrArray.length === 2 && adverbStrArray.length === 2 && verbStrArray.length === 2) {
      var assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      var story = document.createElement('p');
      story.innerText = brainstormStory(nounStrArray, adjectiveStrArray, adverbStrArray, verbStrArray);
      storyBox.appendChild(story);
  } else if(document.getElementById('brainstorm').checked && nounStrArray.length === 1 && adjectiveStrArray.length === 1 && adverbStrArray.length === 1 && verbStrArray.length === 1) {
      var assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      var story = document.createElement('p');
      story.innerText = brainstormStory(nounStrArray, adjectiveStrArray, adverbStrArray, verbStrArray);
      storyBox.appendChild(story);
  } else if(document.getElementById('brainstorm').checked && nounStrArray.length === 0 && adjectiveStrArray.length === 0 && adverbStrArray.length === 0 && verbStrArray.length === 0) {
      var assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      assignedNoun = nouns[Math.floor(Math.random()*nouns.length)];
      nounStrArray.push(assignedNoun);
      var story = document.createElement('p');
      story.innerText = brainstormStory(nounStrArray, adjectiveStrArray, adverbStrArray, verbStrArray);
      storyBox.appendChild(story);
  } else if(document.getElementById('shopping').checked ){
      var story = document.createElement('p');
      story.innerText = shoppingStory(nounStrArray, adjectiveStrArray, adverbStrArray, verbStrArray);
      storyBox.appendChild(story);
  } else if(document.getElementById('christmas').checked){
      var story = document.createElement('p');
      story.innerText = christmasStory(nounStrArray, adjectiveStrArray, adverbStrArray, verbStrArray);
      storyBox.appendChild(story);
  } else {
    alert("Please select story theme to continue!");
  }
}

function brainstormStory(nounArray, adjectiveArray, adverbArray, verbArray){
  return 'Many say that brainstorming is ' + adjectiveArray[0] + ' and does not ' + verbArray[0] + '. However, with the combination of the right computer and ' + nounArray[0] + ', anyone can lead a good ' + verbArray[1] + '. When you have ' + adverbArray[0] + ' pulled together a ' + adjectiveArray[1] + ' group of ' + nounArray[1] + ' in a big room with lots of TV\s then magical things will happen. In the past we have ' + verbArray[2] + ' suggested participants work together to find the most ' + adjectiveArray[2] + ' solution. The most difficult part is many ' + adjectiveArray[3] + ' ' + nounArray[2] + ' like to ' + adverbArray[1] + '. This has proved to be ' + adverbArray[2] + ' problematic.  But in the end the most important ' + nounArray[3] + ' usually is brought to light.  Typically we try to encourage ideas to ' + verbArray[3] + ', and never shut ideas  down. This concludes our instructions. Thanks for ' + adverbArray[3] + ' listening!';
}

function christmasStory(nounArray, adjectiveArray, adverbArray, verbArray){
  return 'Every Christmas we ' + verbArray[0] + ' to a ' + adjectiveArray[0] + ' tree farm far away. This is not just any ' + adjectiveArray[1] + ' tree farm. My dad and I ' + verbArray[1] + ' onto the ' + nounArray[0] + ' to ' + verbArray[2] + ' for the perfect ' + nounArray[1] + '. Some people like them ' + adjectiveArray[2] + ', but I prefer them ' + adjectiveArray[3] + '. After  searching for hours I usually ' + adverbArray[0] + '  exclaim \"Dad! The perfect tree is over   there!\" Off we ' + verbArray[3] + ' to get the tree. The problem is we always forget the ' + nounArray[2] + ' and the ' + nounArray[3] + '. But at the end of the day we ' + adverbArray[1] + ' get the tree and head home ' + adverbArray[2] + '. \"I wish it was Christmas all year round\"  I ' + adverbArray[3] + ' think to myself.'
}

function shoppingStory(nounArray, adjectiveArray, adverbArray, verbArray){
  return 'Today I went shopping. When I arrived at the store I saw a ' + adjectiveArray[0] + ' ' + nounArray[0] + ', who upon noticing me ' + adverbArray[0] + ' said \"I need to ' + verbArray[0] + '\". \"Well, that was ' + adjectiveArray[1] + '\" I thought to myself and walked in the store. The store had rearranged it\s inventory, so I felt ' + adverbArray[1] + ' lost. I walked up to store clerk and said ' + adverbArray[2] + '\"I am looking for a ' + adjectiveArray[2] + ' ' + nounArray[1] + ' that doesn’t ' + verbArray[1] + ' as often as the last one I had.\" The store clerk looked at me with a ' + adjectiveArray[3] + ' look in his eye and said, \"What you are looking for can be found by the ' + nounArray[2] + ', if you see a ' + nounArray[3] + ' that ' + adverbArray[3] + ' can ' + verbArray[2] + ', then you\'ve gone too far.\"  As I tried to understand his directions, I thought to myself, \"I should have just ordered it on amazon.com, Their products seem to ' + verbArray[3] + ' the perfect amount\"'
}
