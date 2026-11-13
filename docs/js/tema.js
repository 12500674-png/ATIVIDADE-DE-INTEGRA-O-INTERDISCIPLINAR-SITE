// Modo claro/escuro - guarda a escolha no localStorage pra lembrar na próxima visita
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  localStorage.setItem("duan_tema", tema);
}

function alternarTema() {
  const atual = localStorage.getItem("duan_tema") || "light";
  aplicarTema(atual === "light" ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", function () {
  aplicarTema(localStorage.getItem("duan_tema") || "light");
  const btn = document.getElementById("btnTema");
  if (btn) btn.addEventListener("click", alternarTema);
});
