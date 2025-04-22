// Mostrar ou ocultar o botão "Voltar ao topo" conforme o scroll
function handleScroll() {
  const btn = document.getElementById("btnTopo");
  if (btn) {
    btn.style.display =
      document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
        ? "block"
        : "none";
  }
}
window.addEventListener("scroll", handleScroll);

// Ao clicar no botão, volta suavemente para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
const btnTopo = document.getElementById("btnTopo");
if (btnTopo) {
  btnTopo.addEventListener("click", scrollToTop);
}

// Alternância de tema com persistência via localStorage
function toggleTheme() {
  const body = document.body;
  const toggle = document.getElementById("toggle-dark-mode");

  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "☀️ Modo Claro";
  } else {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌙 Modo Escuro";
  }
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  document.getElementById("toggle-dark-mode").textContent = "☀️ Modo Claro";
} else {
  document.getElementById("toggle-dark-mode").textContent = "🌙 Modo Escuro";
}
document.getElementById("toggle-dark-mode")?.addEventListener("click", toggleTheme);

// Animação ao clicar nos botões de ação (CTA)
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 200);
  });
});

// Animação das seções (visibilidade ao rolar a página)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
      entry.target.classList.remove("section-hidden");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("section-hidden");
  observer.observe(section);
});

// Mostrar/ocultar galeria de certificados
function toggleCertificados() {
  const galeria = document.getElementById("certificados");
  if (galeria) {
    galeria.style.display =
      galeria.style.display === "none" || galeria.style.display === ""
        ? "block"
        : "none";
  }
}
const botaoCertificados = document.getElementById("ver-certificados");
botaoCertificados?.addEventListener("click", toggleCertificados);

// Mostrar campo "Outra vaga" se selecionado no formulário
document.getElementById("vaga")?.addEventListener("change", function () {
  const outraVagaContainer = document.getElementById("outra-vaga-container");
  if (this.value === "Outra") {
    outraVagaContainer.style.display = "block";
  } else {
    outraVagaContainer.style.display = "none";
  }
});
