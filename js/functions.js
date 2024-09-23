// Nopan kuvat
const diceImages = [
    'images/1.png',
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png'
];

// Hakee kuvan elementin
const dice = document.getElementById('dice');

// Lisää kuuntelijan, joka reagoi klikkaukseen
dice.addEventListener('click', function()
 {
    // Arvotaan satunnaisluku 1-6
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    // Päivitetään nopan kuva arvotun luvun mukaan
    dice.src = diceImages[randomNumber - 1];
});