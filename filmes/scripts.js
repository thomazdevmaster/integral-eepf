const filmesData = [
    {
        titulo: "Vingadores: Ultimato",
        categoria: "Mais Procurados",
        img: "https://play-lh.googleusercontent.com/nz5s7-HJ3iijnvitzCwsa_oD5l7saKAnF_Hv3qGtsP6dtsXTqESZmfuQKqyZZD4UywyB",
        resumo: "Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas. Com a ajuda dos aliados restantes, os Vingadores se reúnem mais uma vez para reverter as ações de Thanos e restaurar o equilíbrio.",
        link: "VingadoresUltimato.html"
    },
    {
        titulo: "Homem-Aranha",
        categoria: "Mais Procurados",
        img: "https://br.web.img3.acsta.net/pictures/bzp/01/29007.jpg",
        resumo: "Após ser picado por uma aranha geneticamente modificada, o jovem Peter Parker ganha poderes e precisa aprender a usá-los para proteger Nova York como o super-herói Homem-Aranha.",
        link: "HomemAranha.html"
    },
    {
        titulo: "Mestre do ar",
        categoria: "Lançamentos",
        img: "https://br.web.img3.acsta.net/c_310_420/img/a7/ca/a7ca62563ebb91bffcb84f48fc37efc3.jpg",
        resumo: "Uma série dramática que acompanha os bombardeiros da Oitava Força Aérea dos EUA durante a Segunda Guerra Mundial, em missões perigosas contra o regime nazista.",
        link: "MestreDoAr.html"
    },
    {
        titulo: "Avatar",
        categoria: "Lançamentos",
        img: "https://recreio.com.br/wp-content/uploads/filmes/avatar_capa.jpg",
        resumo: "Em 2154, a Terra sofre com o esgotamento de recursos e o colapso ecológico. A Administração de Desenvolvimento de Recursos (RDA) extrai o valioso mineral unobtanium em Pandora, uma lua exuberante e habitável que orbita um gigante gasoso no sistema estelar Alpha Centauri.",
        link: "Avatar.html"
    },
    {
        titulo: "Terrifer",
        categoria: "Lançamentos",
        img: "https://i.pinimg.com/736x/40/f2/0f/40f20f49be7345c7221a4cc56fefc830.jpg",
        resumo: "Na noite de Halloween, três mulheres enfrentam o palhaço sádico Art, que começa a aterrorizar a cidade e a todos que cruzam seu caminho de formas brutais e sangrentas.",
        link: "Terrifer.html"
    },
    {
        titulo: "Ação",
        categoria: "Gêneros",
        img: "https://s2-techtudo.glbimg.com/V27nXrhni4LV9GFyNbj8dxe3KnY=/0x0:1280x719/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/L/I/BExUBxQZS6xaPkYs9EqQ/05.20-film-left-mad-max.jpg",
        resumo: "Página de Gênero: Ação. Encontre filmes explosivos e cheios de adrenalina.",
        link: "Ação.html"
    },
    {
        titulo: "Romance",
        categoria: "Gêneros",
        img: "https://play-lh.googleusercontent.com/JQKfopRtWqyD1cUXjx4V00qLnKecgKlSTS6sL0YX1T0H4bzyOK8SxdQIUbZ6NTsKfkBm",
        resumo: "Página de Gênero: Romance. Histórias de amor, paixão e relacionamentos emocionantes.",
        link: "Romance.html"
    }
];

// Função para gerar o HTML do cartão de filme
function criarCartaoFilme(filme) {
    // Usamos 'data-title' para passar o título para a função abrirModal
    return `
        <div class="filme" onclick="abrirModal('${filme.titulo}')">
            <img src="${filme.img}" width=500>
            <h3>${filme.titulo}</h3>
        </div>
    `;
}

// Função para renderizar os filmes na página
function renderizarFilmes(filmesParaExibir) {
    const container = document.getElementById("lista-filmes");
    container.innerHTML = ''; // Limpa o conteúdo anterior

    // Define as categorias a serem exibidas na ordem desejada
    const categorias = ["Mais Procurados", "Lançamentos", "Gêneros"];
    let htmlContent = '';

    categorias.forEach(categoria => {
        // Filtra os filmes da categoria e que correspondem à busca (se houver)
        const filmesDaCategoria = filmesParaExibir.filter(filme => filme.categoria === categoria);

        if (filmesDaCategoria.length > 0) {
            htmlContent += `
                <section id="${categoria.toLowerCase().replace(/\s/g, '-')}" class="categoria-section">
                    <h2>${categoria}</h2>
                    <div class="filmes">
                        ${filmesDaCategoria.map(filme => criarCartaoFilme(filme)).join('')}
                    </div>
                </section>
            `;
        }
    });

    container.innerHTML = htmlContent;

    // Se a busca for feita, garante que apenas a seção com resultados seja exibida
    if (document.getElementById("pesquisa").value.trim() !== "") {
        document.querySelectorAll('.categoria-section').forEach(section => {
            if (section.querySelector('.filmes').children.length > 0) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    } else {
         // Exibe todas as seções se a busca estiver vazia
        document.querySelectorAll('.categoria-section').forEach(section => {
            section.style.display = 'block';
        });
    }
}

// Função de busca
function buscarFilme() {
    let input = document.getElementById("pesquisa").value.toLowerCase();
    
    // Filtra o array original
    const filmesFiltrados = filmesData.filter(filme => 
        filme.titulo.toLowerCase().includes(input)
    );

    // Renderiza a lista filtrada
    renderizarFilmes(filmesFiltrados);
}

// Funções da Modal
function abrirModal(tituloFilme) {
    // Encontra o objeto do filme no array usando o título
    const filme = filmesData.find(f => f.titulo === tituloFilme);

    if (filme) {
        document.getElementById('modal-title').innerText = filme.titulo;
        document.getElementById('modal-img').src = filme.img;
        document.getElementById('modal-resumo').innerText = filme.resumo;
        document.getElementById('modal-link').href = filme.link;

        document.getElementById('filme-modal').style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Evita rolagem da página
    }
}

function fecharModal() {
    document.getElementById('filme-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura a rolagem da página
}

// Inicialização: Renderiza todos os filmes ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    renderizarFilmes(filmesData);
    
    // Adiciona evento de clique para fechar a modal clicando fora
    const modal = document.getElementById('filme-modal');
    modal.addEventListener('click', (event) => {
        // Verifica se o clique foi no fundo da modal (e não dentro do conteúdo)
        if (event.target === modal) {
            fecharModal();
        }
    });
});