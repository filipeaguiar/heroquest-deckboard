if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/heroquest-deckboard/sw.js', { scope: '/heroquest-deckboard/' })})}