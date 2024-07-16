fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })
    .catch(error => {
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = 'Failed to load a joke. Please try again!';
        console.error('Error fetching joke:', error);
    });
