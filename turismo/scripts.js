// Dados com imagem
    const destinos = [
      { nome: "Ubatuba", tipo: "Praia", preco: 750, imagem: "https://www.viagensecaminhos.com/wp-content/uploads/2012/01/ubatuba-saco-da-ribeira.jpg" },
      { nome: "Chapada Diamantina", tipo: "Montanha", preco: 800, imagem: "https://t4.ftcdn.net/jpg/01/16/40/37/360_F_116403790_3NkmuJkUSRIqGMpq8kNP2KbvI33lrrQk.jpg" },
      { nome: "Olinda", tipo: "Cultural", preco: 600, imagem: "https://media.istockphoto.com/id/1819246716/pt/foto/olinda-pe-brazil.jpg?s=612x612&w=0&k=20&c=dWfRktD3n85lliBmm5kgromS6c5mtgMhA8jlZCRCVio=" },
      { nome: "Bonito", tipo: "Ecoturismo", preco: 900, imagem: "https://t3.ftcdn.net/jpg/06/34/72/24/360_F_634722462_12QrAxqskfX9j8Jvfsfgc29SKhTTCOvm.jpg" }
    ];

    const pacotes = [
      { nome: "Ubatuba", tipo: "Praia", preco: 2500, imagem: "https://www.viagensecaminhos.com/wp-content/uploads/2012/01/ubatuba-saco-da-ribeira.jpg" },
      { nome: "Chapada Diamantina", tipo: "Montanha", preco: 1690, imagem: "https://t4.ftcdn.net/jpg/01/16/40/37/360_F_116403790_3NkmuJkUSRIqGMpq8kNP2KbvI33lrrQk.jpg" },
      { nome: "Olinda", tipo: "Cultural", preco: 1000, imagem: "https://media.istockphoto.com/id/1819246716/pt/foto/olinda-pe-brazil.jpg?s=612x612&w=0&k=20&c=dWfRktD3n85lliBmm5kgromS6c5mtgMhA8jlZCRCVio=" },
      { nome: "Bonito", tipo: "Ecoturismo", preco: 2700, imagem: "https://t3.ftcdn.net/jpg/06/34/72/24/360_F_634722462_12QrAxqskfX9j8Jvfsfgc29SKhTTCOvm.jpg" }
    ];

    function carregarDestinos() {
      const grid = document.getElementById("destinosGrid");
      destinos.forEach(d => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${d.imagem}" alt="${d.nome}">
          <h3>${d.nome}</h3>
          <p>${d.tipo}</p>
          <p><strong>R$ ${d.preco}</strong></p>
        `;
        grid.appendChild(card);
      });
    }

    function carregarPacotes() {
      const grid = document.getElementById("pacotesGrid");
      pacotes.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${p.imagem}" alt="${p.nome}">
          <h3>Pacote ${p.nome}</h3>
          <p>${p.tipo}</p>
          <p><strong>R$ ${p.preco}</strong></p>
        `;
        grid.appendChild(card);
      });
    }

    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    // Modal
    const modal = document.getElementById('meuModal');
    const btnAbrir = document.getElementById('abrirModal');
    const btnFechar = document.getElementById('fecharModal');

    btnAbrir.onclick = () => modal.style.display = 'flex';
    btnFechar.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; };

    // Envio do formulário
    document.getElementById("formReserva").addEventListener("submit", e => {
      e.preventDefault();
      alert("Reserva enviada com sucesso! Entraremos em contato.");
      modal.style.display = "none";
      e.target.reset();
    });

    // Inicialização
    window.onload = () => {
      document.getElementById("ano").textContent = new Date().getFullYear();
      carregarDestinos();
      carregarPacotes();
    };