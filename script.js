// Script de base - prêt pour extensions futures
console.log("Bienvenue sur le Réseau Culturel !");
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('addForm');
    const watchlist = document.getElementById('watchlist');
  
    form?.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const title = document.getElementById('title').value.trim();
      const category = document.getElementById('category').value;
  
      if (title && category) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${title}</strong> <span style="color: gray;">(${category})</span>`;
        watchlist.appendChild(li);
  
        form.reset();
      }
    });
  });
  