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


