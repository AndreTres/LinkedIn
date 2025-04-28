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

// Exibir mensagem de sucesso após envio do formulário
const form = document.getElementById("form-contato");
const messageContainer = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevenir o comportamento padrão de envio

  // Obter os dados do formulário
  const formData = new FormData(form);

  // Simulação de envio dos dados com fetch (AJAX)
  fetch('backend/processa_contato.php', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json()) // Espera que o servidor retorne um JSON
    .then(data => {
      // Exibir mensagem de sucesso com base na resposta do servidor
      if (data.success) {
        messageContainer.textContent = "Formulário enviado com sucesso!";
        messageContainer.classList.add("success");
        messageContainer.style.display = "block";
      } else {
        messageContainer.textContent = "Erro no envio do formulário. Tente novamente.";
        messageContainer.classList.add("error");
        messageContainer.style.display = "block";
      }

      // Remover a mensagem após 5 segundos
      setTimeout(() => {
        messageContainer.style.display = "none";
      }, 5000);
    })
    .catch(error => {
      console.error("Erro ao enviar o formulário:", error);
      messageContainer.textContent = "Ocorreu um erro ao enviar o formulário.";
      messageContainer.classList.add("error");
      messageContainer.style.display = "block";

      // Remover a mensagem após 5 segundos
      setTimeout(() => {
        messageContainer.style.display = "none";
      }, 5000);
    });
});
