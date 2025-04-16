// Mostrar ou ocultar o botão "Voltar ao topo" conforme o scroll
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (btn) { // Verifica se o botão realmente existe
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
};

// Ao clicar no botão, volta suavemente para o topo
const btnTopo = document.getElementById("btnTopo");
if (btnTopo) { // Verifica se o botão existe
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

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
if (toggle) { // Verifica se o toggle existe
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
}

// Animação simples ao clicar nos botões de ação (CTA)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  });
});

// Seleciona todas as sections que serão animadas
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
      entry.target.classList.remove("section-hidden");
    }
  });
}, {
  threshold: 0.1  // A animação é disparada quando 10% da section aparece
});

// Aplica as classes às seções
sections.forEach(section => {
  section.classList.add("section-hidden");
  observer.observe(section);
});




