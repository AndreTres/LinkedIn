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

// Envio do formulário sem o uso de fetch (envio tradicional)
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contato");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio tradicional do formulário

      const formData = new FormData(formulario); // Coleta os dados do formulário

      fetch(formulario.action, {
        method: 'POST', // Envia os dados via POST
        body: formData
      })
      .then(response => response.text()) // Espera a resposta do servidor
      .then(data => {
        const mensagem = document.createElement("div");
        mensagem.className = "mensagem-confirmacao";
        mensagem.innerHTML = "<p style='color: green;'>Sua mensagem foi enviada com sucesso!</p>";

        // Exibe a mensagem de sucesso antes do formulário
        formulario.parentNode.insertBefore(mensagem, formulario);

        // Limpa o formulário e oculta após o envio
        formulario.reset();
        formulario.style.display = "none";

        // Remove a mensagem após 5 segundos
        setTimeout(() => {
          mensagem.remove();
        }, 5000);
      })
      .catch(error => {
        console.error('Erro ao enviar:', error);

        // Exibe a mensagem de erro em caso de falha
        const mensagemErro = document.createElement("div");
        mensagemErro.className = "mensagem-erro";
        mensagemErro.innerHTML = "<p style='color: red;'>Erro ao enviar. Tente novamente mais tarde.</p>";
        formulario.parentNode.insertBefore(mensagemErro, formulario);

        // Remove a mensagem de erro após 5 segundos
        setTimeout(() => {
          mensagemErro.remove();
        }, 5000);
      });
    });
  }
});
