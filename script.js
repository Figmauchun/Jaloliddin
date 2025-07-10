const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  cards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    card.style.display = title.includes(value) ? "block" : "none";
  });
});

// Modal logic
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTrailer = document.getElementById("modal-trailer");
const closeBtn = document.getElementById("closeBtn");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalTrailer.src = card.dataset.trailer;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalTrailer.src = ""; // stop video
});

// Dark mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
