const games = [
  { title: "Super Mario World", cover: "images/smw.png", rom: "roms/smw.zip" },
  { title: "Zelda: A Link to the Past", cover: "images/zelda.png", rom: "roms/zelda.zip" },
  { title: "Donkey Kong Country", cover: "images/dkc.png", rom: "roms/dkc.zip" },
  // add as many games as you want
];
const carousel = document.getElementById('gameCarousel');

function createGameSlot(game) {
  const slot = document.createElement('div');
  slot.classList.add('game-slot');

  slot.innerHTML = `
    <div class="game-cover">
      <img src="${game.cover}" alt="${game.title}">
    </div>
    <div class="game-info">
      <p class="game-title">${game.title}</p>
      <a href="${game.rom}" download>Download ROM</a>
    </div>
  `;

  return slot;
}

function populateCarousel() {
  // Clear existing content
  carousel.innerHTML = '';

  // Add each game slot
  games.forEach(game => {
    carousel.appendChild(createGameSlot(game));
  });

  // Duplicate content to allow infinite scroll illusion
  games.forEach(game => {
    carousel.appendChild(createGameSlot(game));
  });
}

populateCarousel();

// Infinite scroll effect
carousel.scrollLeft = 0;

carousel.addEventListener('scroll', () => {
  // When scrolling past half, reset scrollLeft
  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0;
  }
});
