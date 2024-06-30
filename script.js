function generateJoke() {
  const jokes = [
    "Why was the math book sad? Because it had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What do you call fake spaghetti? An im-pasta!"
  ];
  
  const jokeContainer = document.getElementById('jokeContainer');
  const newDiv = document.createElement('div');
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  
  newDiv.innerText = randomJoke;
  jokeContainer.appendChild(newDiv);
}