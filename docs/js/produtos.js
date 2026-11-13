// Catálogo da Duan - doces de fruta.
const produtos = [
  { id: 1, nome: "Bala de limão", descricao: "Pacote de 600g, bala artesanal de limão", categoria: "Bala de fruta", preco: 15.00, emoji: "🍋", cor: "#dff2a8" },
  { id: 2, nome: "Bala de laranja", descricao: "Pacote de 600g, bala artesanal de laranja", categoria: "Bala de fruta", preco: 15.00, emoji: "🍊", cor: "#ffd9a0" },
  { id: 3, nome: "Bala de morango", descricao: "Pacote de 600g, bala artesanal de morango", categoria: "Bala de fruta", preco: 15.00, emoji: "🍓", cor: "#ffc2c2" },
  { id: 4, nome: "Pudim de banana", descricao: "Pudim cremoso com banana e chantilly", categoria: "Sobremesa", preco: 15.00, emoji: "🍌", cor: "#fff0b3" },
  { id: 5, nome: "Tortinha de morango", descricao: "Massa amanteigada, creme e morango fresco", categoria: "Sobremesa", preco: 15.00, emoji: "🍰", cor: "#ffd6e8" }
];

// Desenha os cards de produto na tela, filtrando pelo texto da busca
function mostrarProdutos(filtro) {
  const grid = document.getElementById("gridProdutos");
  if (!grid) return;

  const texto = (filtro || "").toLowerCase().trim();
  const lista = produtos.filter(p =>
    p.nome.toLowerCase().includes(texto) || p.categoria.toLowerCase().includes(texto)
  );

  grid.innerHTML = "";
  if (lista.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Nenhum produto encontrado.</p>';
    return;
  }

  lista.forEach(p => {
    const card = document.createElement("div");
    card.className = "card-produto";
    card.innerHTML = `
      <div class="foto-produto" style="background:${p.cor}">
        <span class="emoji-produto">${p.emoji}</span>
        <span class="fita">${p.categoria}</span>
      </div>
      <div class="info-produto">
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <span class="preco">R$ ${p.preco.toFixed(2).replace(".", ",")}</span>
        <button onclick="adicionarAoCarrinho(${p.id})">Adicionar ao carrinho</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarProdutos("");
  const campoBusca = document.getElementById("campoBusca");
  if (campoBusca) {
    campoBusca.addEventListener("input", function () {
      mostrarProdutos(campoBusca.value);
    });
  }
});
