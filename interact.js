// Mostrar ou ocultar o botão "Voltar ao topo" conforme o scroll
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Ao clicar no botão, volta suavemente para o topo
document.getElementById("btnTopo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Alternância de tema com persistência via localStorage
const toggle = document.getElementById("toggle-dark-mode");
const body = document.body;

// Verifica se há tema salvo
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️ Modo Claro";
} else {
  toggle.textContent = "🌙 Modo Escuro";
}

// Ao clicar no botão de modo escuro/claro
toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️ Modo Claro";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙 Modo Escuro";
  }
});

// Animação simples ao clicar nos botões de ação (CTA)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  });
});



