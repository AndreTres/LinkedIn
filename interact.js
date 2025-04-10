// Mostrar ou ocultar o botão conforme o scroll
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Quando clicado, volta suavemente para o topo
document.getElementById("btnTopo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById('toggle-dark-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});
const toggleBtn = document.getElementById('toggle-dark-mode');

toggleBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Modo Claro';
  } else {
    toggleBtn.textContent = '🌙 Modo Escuro';
  }
});
// Elementos
const toggle = document.getElementById("toggle-darkmode");
const body = document.body;

// Checar se o usuário já tem uma preferência salva
const savedTheme = localStorage.getItem("theme");

// Se existir uma preferência, aplicar
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️ Modo Claro";
} else {
  toggle.textContent = "🌙 Modo Escuro";
}

// Alternar temas ao clicar no botão
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Salvar a preferência no localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️ Modo Claro";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙 Modo Escuro";
  }
});



