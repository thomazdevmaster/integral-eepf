const destinos = [
  { nome: "Ubatuba", tipo: "Praia", preco: 750,
    descricao: "Ubatuba possui mais de 100 praias paradisíacas e trilhas incríveis.",
    imagem: "https://www.viagensecaminhos.com/wp-content/uploads/2012/01/ubatuba-saco-da-ribeira.jpg"
  },
  { nome: "Chapada Diamantina", tipo: "Montanha", preco: 800,
    descricao: "A Chapada Diamantina é famosa por cânions, cachoeiras e paisagens únicas.",
    imagem: "https://t4.ftcdn.net/jpg/01/16/40/37/360_F_116403790_3NkmuJkUSRIqGMpq8kNP2KbvI33lrrQk.jpg"
  },
  { nome: "Olinda", tipo: "Cultural", preco: 600,
    descricao: "Olinda é rica em história, cultura, cores e gastronomia.",
    imagem: "https://img.freepik.com/fotos-premium/olinda-com-recife-ao-fundo-pernambuco-brasil_491130-1804.jpg"
  },
  { nome: "Bonito", tipo: "Ecoturismo", preco: 900,
    descricao: "Bonito é referência mundial em águas cristalinas e biodiversidade.",
    imagem: "https://t3.ftcdn.net/jpg/06/34/72/24/360_F_634722462_12QrAxqskfX9j8Jvfsfgc29SKhTTCOvm.jpg"
  }
];


const pacotes = [
  { nome: "Pacote Ubatuba", tipo: "Praia", preco: 2500,
    descricao: "Inclui hotel + traslado + passeios pelas melhores praias.",
    imagem: destinos[0].imagem
  },
  { nome: "Pacote Chapada", tipo: "Montanha", preco: 1690,
    descricao: "Passeios guiados + hospedagem + trilhas exclusivas.",
    imagem: destinos[1].imagem
  },
  { nome: "Pacote Olinda", tipo: "Cultural", preco: 1000,
    descricao: "Carnaval, cultura e gastronomia em uma só viagem.",
    imagem: destinos[2].imagem
  },
  { nome: "Pacote Bonito", tipo: "Ecoturismo", preco: 2700,
    descricao: "Flutuação + trilhas + hotel + refeições.",
    imagem: destinos[3].imagem
  }
];


// Criar cards
function criarCard(dados) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${dados.imagem}">
    <h3>${dados.nome}</h3>
    <p>${dados.tipo}</p>
    <p><strong>R$ ${dados.preco}</strong></p>
    <button onclick="window.open('https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dados.nome)}', '_blank')">Ver no Google Maps</button>
  `;
  card.onclick = () => abrirInfo(dados);
  return card;
}


// Modal info
function abrirInfo(d) {
  document.getElementById("infoImg").src = d.imagem;
  document.getElementById("infoTitle").textContent = d.nome;
  document.getElementById("infoTipo").textContent = "Tipo: " + d.tipo;
  document.getElementById("infoPreco").textContent = "Preço: R$ " + d.preco;
  document.getElementById("infoDescricao").textContent = d.descricao;
  document.getElementById("infoModal").style.display = "flex";
}


document.getElementById("closeInfo").onclick = () =>
  document.getElementById("infoModal").style.display = "none";


// Modal Cadastro
const modalCadastro = document.getElementById("modalCadastro");
document.getElementById("abrirCadastro").onclick = () =>
  modalCadastro.style.display = "flex";


document.getElementById("fecharCadastro").onclick = () =>
  modalCadastro.style.display = "none";


window.addEventListener("click", e => {
  if (e.target === modalCadastro) modalCadastro.style.display = "none";
});


// Envio cadastro
document.getElementById("formCadastro").addEventListener("submit", e => {
  e.preventDefault();
  alert("Cadastro realizado com sucesso!");
  modalCadastro.style.display = "none";
  e.target.reset();
});


// Carregamento inicial
window.onload = () => {
  const g1 = document.getElementById("destinosGrid");
  destinos.forEach(d => g1.appendChild(criarCard(d)));


  const g2 = document.getElementById("pacotesGrid");
  pacotes.forEach(p => g2.appendChild(criarCard(p)));
};


function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}