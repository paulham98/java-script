const playInterval = setInterval(() => console.log('hello'), 1000);

setTimeout(() => { clearInterval(playInterval); }, 5000);