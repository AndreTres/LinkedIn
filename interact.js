// Mostrar ou ocultar o botão "Voltar ao topo" conforme o scroll
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  if (btn) {
    btn.style.display =
      document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
        ? "block"
        : "none";
  }
};

// Ao clicar no botão, volta suavemente para o topo
const btnTopo = document.getElementById("btnTopo");
if (btnTopo) {
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Alternância de tema com persistência via localStorage
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

// Animação ao clicar nos botões de ação (CTA)
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 200);
  });
});

// Animação das seções
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

// Mostrar/ocultar galeria de certificados
const botaoCertificados = document.getElementById("ver-certificados");
const galeria = document.getElementById("certificados");

if (botaoCertificados && galeria) {
  botaoCertificados.addEventListener("click", () => {
    galeria.style.display =
      galeria.style.display === "none" || galeria.style.display === ""
        ? "block"
        : "none";
  });
}

// Mostrar campo adicional ao selecionar "Outra" vaga
const selectVaga = document.getElementById("vaga");
const outraVagaContainer = document.getElementById("outra-vaga-container");

function verificarOutraVaga() {
  if (selectVaga && outraVagaContainer) {
    outraVagaContainer.style.display = selectVaga.value === "Outra" ? "block" : "none";
  }
}

if (selectVaga) {
  selectVaga.addEventListener("change", verificarOutraVaga);
  verificarOutraVaga(); // Verifica estado inicial
}

// Interceptar envio do formulário e exibir mensagem na mesma página
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contato");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede envio tradicional

      setTimeout(() => {
        const mensagem = document.createElement("div");
        mensagem.className = "mensagem-confirmacao";
        mensagem.innerHTML = `
          <p><strong>✔ Sua resposta foi enviada com sucesso!</strong></p>
          <p>Obrigado pelo contato. Entrarei em breve em comunicação com você.</p>
        `;

        formulario.parentNode.insertBefore(mensagem, formulario);
        formulario.reset(); // Limpa o formulário
        formulario.style.display = "none"; // Oculta o formulário (opcional)
      }, 500); // Simulando tempo de resposta
    });
  }
});
