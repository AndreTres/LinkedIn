// Mostrar ou ocultar botão "Voltar ao topo"
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (btn) {
    btn.style.display =
      document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
        ? "block"
        : "none";
  }
};

// Botão "Voltar ao topo"
const btnTopo = document.getElementById("btnTopo");
if (btnTopo) {
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Alternância de tema (claro/escuro) com localStorage
const toggle = document.getElementById("toggle-dark-mode");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggle.textContent = "☀️ Modo Claro";
} else {
  toggle.textContent = "🌙 Modo Escuro";
}

if (toggle) {
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

// Botões com animação
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  });
});

// Animação de seções
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
      entry.target.classList.remove("section-hidden");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add("section-hidden");
  observer.observe(section);
});

// Alternância do campo "Outra vaga"
const selectVaga = document.getElementById("vaga");
const outraVagaContainer = document.getElementById("outra-vaga-container");

function verificarOutraVaga() {
  if (selectVaga && outraVagaContainer) {
    outraVagaContainer.style.display = selectVaga.value === "Outra" ? "block" : "none";
  }
}

if (selectVaga) {
  selectVaga.addEventListener("change", verificarOutraVaga);
  verificarOutraVaga();
}
