
// ===============================================
// DADOS: Conteúdo das Curiosidades
// ===============================================

const novidadesCuriosities = [
    {
        title: "O Ponto Quântico mais Rápido",
        text: "Cientistas criaram um ponto quântico que opera em menos de um picosegundo, um avanço que pode revolucionar a computação quântica e a velocidade de processamento.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Colloidal_nanoparticle_of_lead_sulfide_%28selenide%29_with_complete_passivation.png/250px-Colloidal_nanoparticle_of_lead_sulfide_%28selenide%29_with_complete_passivation.png",
        category: "novidades"
    },
    {
        title: "A Descoberta do 'Planeta Deserto'",
        text: "Astrônomos identificaram um novo exoplaneta que se assemelha a um deserto terrestre em escala massiva, apresentando condições únicas de temperatura e pressão.",
        img: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?auto=format&fit=crop&w=300&h=200&q=80",
        category: "novidades"
    },
    {
        title: "IA na Medicina Preventiva",
        text: "Uma nova ferramenta de Inteligência Artificial mostrou ser capaz de prever o risco de doenças cardíacas com 95% de precisão, anos antes dos sintomas se manifestarem.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubYox1Kd9Vb41v_AtnEbRYQ4igT9i6hroeQ&s",
        category: "novidades"
    },
    {
        title: "Plástico Comestível de Algas",
        text: "Uma startup desenvolveu uma embalagem biodegradável e até comestível, feita a partir de extratos de algas marinhas, combatendo a poluição plástica.",
        img: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/filme-plastico-biodegradavel-55520cbee9709.jpg",
        category: "novidades"
    },
    {
        title: "O Mapeamento da Mente de um Polvo",
        text: "Pesquisadores conseguiram mapear complexas redes neurais em polvos, revelando a base de sua inteligência surpreendente e capacidades de camuflagem.",
        img: "https://i.pinimg.com/564x/30/38/9a/30389a2eea08bee603c91d0f41702d14.jpg",
        category: "novidades"
    },
    {
        title: "A Revolução do Concreto Auto-Curável",
        text: "Cientistas de materiais criaram um concreto que 'se cura' sozinho, usando esporos bacterianos que preenchem rachaduras quando expostos à água.",
        img: "https://engenharia360.com/wp-content/uploads/2016/12/22-1.jpg",
        category: "novidades"
    },
    {
        title: "A Cidade Subterrânea de Tóquio",
        text: "Engenheiros revelaram planos para uma cidade subterrânea massiva em Tóquio, projetada para ser totalmente sustentável e resistente a terremotos, uma solução para a superlotação.",
        img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/5AF5/production/_105258232_e97ce1fa-2e9f-48df-9b39-120afae12ed0.jpg.webp",
        category: "novidades"
    },
    {
        title: "O Sabor Artificial que Engana a Gordura",
        text: "Um novhttpso aditivo alimentar promete imitar o sabor e a textura da gordura sem adicionar calorias, oferecendo uma alternativa mais saudável para a indústria alimentícia.",
        img: "https://img.freepik.com/fotos-gratis/uma-vista-frontal-de-drinks-e-macarons-coloridos-e-deliciosos-junto-com-pirulitos-e-doces-em-amarelo_140725-24671.jpg?semt=ais_hybrid&w=740&q=80",
        category: "novidades"
    },
    {
        title: "Redescobrindo a Linguagem Neandertal",
        text: "Análises genéticas e estruturais recentes sugerem que os Neandertais possuíam a capacidade vocal e cerebral para desenvolver uma linguagem complexa.",
        img: "https://img.odcdn.com.br/wp-content/uploads/2025/03/neandertais-e-homo-sapiens-1024x706.jpg",
        category: "novidades"
    },
    {
        title: "A Bateria de Areia que Armazena Energia",
        text: "Na Finlândia, foi instalada a primeira bateria de areia do mundo, capaz de armazenar energia renovável por meses, usando areia aquecida como meio de armazenamento térmico.",
        img: "https://thumbs.dreamstime.com/b/bateria-de-areia-que-armazena-energia-como-calor-uma-forma-inovadora-armazenar-renov%C3%A1vel-pe%C3%A7as-tecnol%C3%B3gicas-para-operar-273805981.jpg",
        category: "novidades"
    }
];

const humanasCuriosities = [
    {
        title: "O Segredo de Machu Picchu",
        text: "Novas pesquisas arqueológicas sugerem que Machu Picchu foi mais do que um refúgio real; era também um centro de observação astronômica e agricultura experimental.",
        img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=300&h=200&q=80",
        category: "humanas"
    },
    {
        title: "A Influência dos Memes na Política",
        text: "Estudos de comunicação digital mostram que a sátira e os memes se tornaram ferramentas cruciais na formação da opinião pública e no ativismo moderno.",
        img: "https://s2-g1.glbimg.com/dqVbR_yK3lfDdOgwsmW8kJUcvl0=/32x0:911x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/f/e/gRJoYcRbuBf65kkzxydw/meme-caveira.jpg",
        category: "humanas"
    },
    {
        title: "A Cidade Perdida na Amazônia",
        text: "Descobertas recentes de geoglifos e ruínas revelam uma vasta rede de cidades e estradas na Amazônia, desafiando a visão de que a floresta era pouco povoada antes da chegada europeia.",
        img: "https://portalamazonia.com/wp-content/uploads/2022/06/b2ap3_medium_el-dorado-saiba-tudo-sobre-o-mito-da-cidade-de-ouro-960x633.jpg",
        category: "humanas"
    },
    {
        title: "O Mito da Moeda em Papel na China",
        text: "Ao contrário do senso comum, o primeiro uso de moeda puramente em papel na China não foi imediatamente popular e enfrentou resistência por séculos devido à inflação.",
        img: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=300&h=200&q=80",
        category: "humanas"
    },
    {
        title: "A Origem do Simbolismo das Cores",
        text: "Antropólogos rastrearam a origem de 'vermelho' e 'preto' como as cores primárias de simbolismo em quase todas as culturas, ligadas a sangue e noite, vida e morte.",
        img: "https://rabiskandoarte.wordpress.com/wp-content/uploads/2016/07/teoria-das-cores.png?w=748",
        category: "humanas"
    },
    {
        title: "O Impacto da Ferrovia na Literatura",
        text: "A invenção da ferrovia não só transformou o transporte, mas também a narrativa, criando o gênero de mistério e acelerando o ritmo das histórias no século XIX.",
        img: "https://i0.wp.com/paulogala.com.br/wp-content/uploads/2023/06/rail.jpg?fit=820%2C537&ssl=1",
        category: "humanas"
    },
    {
        title: "O Sistema de Voto Mais Antigo",
        text: "A democracia direta na Suíça, com votações constantes e participação popular, é um dos sistemas de governo mais estáveis e antigos do mundo moderno.",
        img: "https://ensinarhistoria.com.br/s21/wp-content/uploads/2022/05/Voto-de-cabresto_storni-Careta-19-de-fevereiro-de-1927-p.14.-Copia.jpg",
        category: "humanas"

    },
    {
        title: "A Cultura do Café e a Revolução Industrial",
        text: "O consumo de café desempenhou um papel vital na Revolução Industrial, substituindo o álcool matinal e aumentando o foco e a produtividade dos trabalhadores.",
        img: "https://cursoenemgratuito.com.br/wp-content/uploads/2019/10/ciclo-do-caf%C3%A9-1.jpg",
        category: "humanas"
    },
    {
        title: "A Criação da Zona de Tempo Padrão",
        text: "Antes da adoção da zona de tempo padrão em 1883, cada cidade nos EUA e Canadá tinha seu próprio 'tempo local', causando caos nas operações ferroviárias.",
        img: "https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2024/03/Movimentos-da-terra-e-o-clima-e-dinamica-cotidiana-e1710174156613-1024x576.png",
        category: "humanas"
    },
    {
        title: "A Sociologia dos Graffiti Urbanos",
        text: "Sociólogos estudam graffiti não como vandalismo, mas como uma forma complexa de comunicação visual e territorial, expressando a identidade de comunidades marginais.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ULs99H5hJ14q2jMqj7GxjSo4TzWBuI5lvQ&s",
        category: "humanas"
    }
];

const naturezaCuriosities = [
    {
        title: "O Peixe que Anda em Terra",
        text: "O peixe-gato-caminhador africano pode usar suas fortes barbatanas para se arrastar por terra e se locomover entre poças de água, sobrevivendo à seca.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouOHtt-rAb6uLmNElVMeuYG2ftDlKqm-E-w&s",
        category: "natureza"
    },
    {
        title: "A Maior Árvore do Mundo",
        text: "A 'General Sherman', uma sequoia gigante na Califórnia, é a maior árvore em volume do mundo e tem uma idade estimada em cerca de 2.300 a 2.700 anos.",
        img: "https://i0.wp.com/segredosdomundo.r7.com/wp-content/uploads/2020/09/sequoia-gigante-a-historia-da-maior-arvore-do-mundo-1.jpg?resize=640%2C816&quality=89&ssl=1",
        category: "natureza"
    },
    {
        title: "O Efeito de Mola Quântica",
        text: "Físicos observaram um novo estado da matéria onde as partículas vibram como uma mola quântica, que pode ser a chave para materiais supercondutores.",
        img: "https://static.todamateria.com.br/upload/fi/si/fisica-quantica-og.jpg?class=ogImageSquare",
        category: "natureza"
    },
    {
        title: "As Nuvens que Chovem Diamantes",
        text: "Em planetas gigantes gasosos como Júpiter e Saturno, as condições atmosféricas de pressão e temperatura podem fazer chover diamantes sólidos.",
        img: "https://s2-galileu.glbimg.com/2Qo-Poj_YCmGGk8BQH4FThZ39WY=/0x0:642x552/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2024/Y/v/yJLt8hTduuVXUy0MuCqw/diamondsmall.jpg",
        category: "natureza"
    },
    {
        title: "O Microplástico no Corpo Humano",
        text: "Estudos recentes confirmaram a presença de microplásticos na corrente sanguínea humana, levantando preocupações sobre seus efeitos a longo prazo na saúde.",
        img: "https://cdmf.org.br/wp-content/uploads/2025/08/microplasticos3.jpg",
        category: "natureza"
    },
    {
        title: "A Água Mais Antiga do Mundo",
        text: "Em uma mina no Canadá, cientistas descobriram água presa em rochas por mais de 1,5 bilhão de anos, contendo vida microbiana ainda ativa.",
        img: "https://olhardigital.com.br/wp-content/uploads/2025/08/agua-caverna-shutterstock_2354308891.jpg",
        category: "natureza"
    },
    {
        title: "O Som que as Plantas Emitem",
        text: "Pesquisadores detectaram que plantas estressadas (por falta de água ou corte) emitem sons ultrassônicos, inaudíveis para humanos, mas que podem ser ouvidos por insetos.",
        img: "https://s2-g1.glbimg.com/aCimahRCY-Qjp5T9zobocGlVS0E=/0x0:371x370/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/k/h/l9tK6dTnqqDxf64eB7Uw/sons-plantas.png",
        category: "natureza"
    },
    {
        title: "A Formiga que 'Explode'",
        text: "A formiga-de-cabeça-vermelha usa um mecanismo de defesa explosivo: ela pode contrair seus músculos até que sua cabeça exploda, liberando uma secreção tóxica.",
        img: "https://bioretro.eco.br/wp-content/uploads/2013/07/formiga-kamikaze-bioretro.jpg",
        category: "natureza"
    },
    {
        title: "A Gravidade Zero do Sol",
        text: "O Sol não tem uma superfície sólida; sua 'gravidade zero' está no centro de seu núcleo, onde a fusão nuclear acontece de forma mais intensa.",
        img: "https://static.vecteezy.com/ti/vetor-gratis/p1/24318095-ilustracao-do-gravidade-entre-terra-e-sol-dentro-espaco-tempo-vetor.jpg",
        category: "natureza"
    },
    {
        title: "O Fogo que não Gera Fumaça",
        text: "Em condições específicas de baixíssima pressão e alta concentração de oxigênio, o fogo pode queimar de forma tão limpa que não produz nenhuma fumaça visível.",
        img: "https://s1.static.brasilescola.uol.com.br/be/e/fogo%20q%20nao%20produz%20fumaca.jpg",
        category: "natureza"
    }
];

const culturaCuriosities = [
    {
        title: "O Papiro Perdido de Alexandria",
        text: "Historiadores acreditam que a maior perda da Biblioteca de Alexandria não foi o fogo, mas sim a deterioração lenta e a falta de recursos para cópia dos papiros.",
        img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=300&h=200&q=80",
        category: "cultura"
    },
    {
        title: "A Dança que Criou o Jazz",
        text: "O 'Cakewalk', uma dança de origem escrava que satirizava a elite branca, foi um precursor rítmico e estilístico essencial para o desenvolvimento do Jazz.",
        img: "https://static.wixstatic.com/media/983aa4_f43c1f06dcfb4e3a8f38284c51da0d57~mv2.jpg/v1/fill/w_780,h_480,al_c,lg_1,q_85/983aa4_f43c1f06dcfb4e3a8f38284c51da0d57~mv2.jpg",
        category: "cultura"
    },
    {
        title: "O 'Silêncio' da Música Clássica",
        text: "A peça '4'33\"' de John Cage, onde o músico não toca nada, desafiou o conceito de música e arte, fazendo do 'silêncio' o ponto focal da performance.",
        img: "https://entrecontos.com/wp-content/uploads/2019/02/somsilencio.jpg",
        category: "cultura"
    },
    {
        title: "A Cidade de Livros da Islândia",
        text: "A Islândia tem a maior taxa de leitores e escritores per capita do mundo. Lançar um livro no Natal é uma tradição cultural chamada 'Jólabókaflóð' (Inundação de Livros).",
        img: "https://content.r9cdn.net/rimg/dimg/1e/c3/eb2142b0-city-11024-163f05c953d.jpg?width=1200&height=630&xhint=1833&yhint=914&crop=true",
        category: "cultura"
    },
    {
        title: "O Significado Oculto do Xadrez",
        text: "O xadrez moderno surgiu na Pérsia e Índia e, em sua forma original, as peças representavam a sociedade (realeza, cavalaria, infantaria e elefantes).",
        img: "https://i1.wp.com/mediablogs.arautos.org/juizdefora/files/2017/10/05_1253.jpg?resize=610%2C336",
        category: "cultura"
    },
    {
        title: "O Mistério da Monalisa na Guerra",
        text: "Durante a Segunda Guerra Mundial, a 'Monalisa' foi secretamente movida seis vezes pela França para evitar que fosse roubada ou destruída, sendo escondida em castelos e museus menores.",
        img: "https://aventurasnahistoria.com.br/wp-content/uploads/linhas_de_simetria.jpg",
        category: "cultura"
    },
    {
        title: "A Lenda da Origem da Pizza",
        text: "A 'Pizza Margherita' foi criada em 1889 para a Rainha Margherita da Itália e suas cores (vermelho, branco e verde) representam a bandeira italiana.",
        img: "https://blog.novus.com.br/wp-content/uploads/2021/06/pizza1_blog.png",
        category: "cultura"
    },
    {
        title: "O Idioma Mais Falado sem Escritura",
        text: "O idioma 'Warlpiri' na Austrália, falado por cerca de 3.000 pessoas, possui uma rica tradição oral e não tem uma forma escrita padronizada para toda a sua história.",
        img: "https://bravatraining.com.br/wp-content/uploads/2021/06/2021-07-23-idiomas-mais-falados-no-mundo-1.jpg",
        category: "cultura"
    },
    {
        title: "A Popularidade do Sushi no Ocidente",
        text: "O sushi só ganhou popularidade nos EUA e na Europa no final do século XX, devido à invenção do 'California Roll' (com abacate e pepino) para atrair paladares não acostumados a peixe cru.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsa9RC2-jc5H7Oxze-V-CCUflIoQPMhQ_tmw&s",
        category: "cultura"
    },
    {
        title: "O Teatro das Sombras (Wayang Kulit)",
        text: "Na Indonésia, o 'Wayang Kulit' é uma performance de teatro de sombras com figuras de couro, que conta épicos hindus e islâmicos e é considerado Patrimônio Cultural Imaterial pela UNESCO.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3ixvDLDqk-gaw6OiTW3V8BBQeApIHb56Og&s",
        category: "cultura"
    }
];

// Mapeia o nome da página para o array de dados e título
const pageDataMap = {
    'novidades': { title: "10 Novidades e Curiosidades do Mundo", data: novidadesCuriosities },
    'humanas': { title: "10 Curiosidades de Ciências Humanas", data: humanasCuriosities },
    'natureza': { title: "10 Curiosidades de Ciências da Natureza", data: naturezaCuriosities },
    'cultura': { title: "10 Curiosidades de Cultura", data: culturaCuriosities }
};

// ===============================================
// FUNÇÕES GERAIS
// ===============================================

function Pesquisar() {
    const query = document.getElementById("searchInput").value.trim();

    if (query) {
        // Abre a pesquisa no Google em uma nova aba
        const searchUrl = `https://www.google.com/search?q=curiosidade+sobre+${encodeURIComponent(query)}`;
        window.open(searchUrl, '_blank');
    } else {
        alert("Por favor, digite o que você deseja pesquisar!");
    }
}

// ===============================================
// NOVO SCRIPT: MODAL (Visualização Detalhada)
// ===============================================

const modal = document.getElementById('curiosityModal');
const modalBody = document.getElementById('modal-body');

/**
 * Abre o modal com os detalhes completos de uma curiosidade.
 * @param {string} title - Título da curiosidade.
 * @param {string} text - Texto detalhado da curiosidade.
 * @param {string} img - URL da imagem.
 */
function openModal(title, text, img) {
    modalBody.innerHTML = `
                <h3>${title}</h3>
                <img src="${img}" alt="${title}">
                <p>${text}</p>
                <button onclick="closeModal()" style="background-color: #00796b; color: white; margin-top: 10px;">Fechar</button>
            `;
    modal.style.display = "block";
}

/**
 * Fecha o modal.
 */
function closeModal() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}


// ===============================================
// NOVO SCRIPT: GERENCIADOR DE PÁGINAS (SPA)
// ===============================================

const mainContent = document.getElementById('main-content');

/**
 * Simula o envio do formulário (apenas demonstração no front-end).
 */
function submitSuggestion() {
    const name = document.getElementById('sugestaoNome').value;
    const email = document.getElementById('sugestaoEmail').value;
    const category = document.getElementById('sugestaoCategoria').value;
    const title = document.getElementById('sugestaoTitulo').value;
    const text = document.getElementById('sugestaoCuriosidade').value;
    const feedbackMessage = document.getElementById('feedbackMessage');

    if (!title || !text) {
        feedbackMessage.style.display = 'block';
        feedbackMessage.style.backgroundColor = '#f8d7da';
        feedbackMessage.style.color = '#721c24';
        feedbackMessage.innerHTML = '⚠️ Por favor, preencha o **Título** e a **Curiosidade**!';
        return;
    }

    // Simula o processamento dos dados
    console.log("Sugestão enviada:", { name, email, category, title, text });

    // Mostra a mensagem de sucesso
    feedbackMessage.style.display = 'block';
    feedbackMessage.style.backgroundColor = '#d4edda';
    feedbackMessage.style.color = '#155724';
    feedbackMessage.innerHTML = '✅ **Obrigado pela sua sugestão!** Analisaremos a sua curiosidade em breve.';

    // Limpa o formulário após 3 segundos
    setTimeout(() => {
        document.getElementById('suggestionForm').reset();
        feedbackMessage.style.display = 'none';
    }, 3000);
}

/**
 * Retorna o HTML do formulário de sugestão.
 */
function renderSuggestionPage() {
    return `
                <div id="suggestion-form-page">
                    <h3>✉️ Sugira uma Nova Curiosidade!</h3>
                    <p style="text-align: center; color: #00796b;">Quer contribuir com nosso acervo? Envie a sua descoberta! **A imagem é opcional e pode ser uma descrição.**</p>
                    
                    <form id="suggestionForm" onsubmit="event.preventDefault(); submitSuggestion();">
                        
                        <div class="form-group">
                            <label for="sugestaoNome">Seu Nome (Opcional):</label>
                            <input type="text" id="sugestaoNome" placeholder="Seu nome ou apelido">
                        </div>

                        <div class="form-group">
                            <label for="sugestaoEmail">Seu Email (Opcional, para contato):</label>
                            <input type="email" id="sugestaoEmail" placeholder="seu.email@exemplo.com">
                        </div>

                        <div class="form-group">
                            <label for="sugestaoCategoria">Categoria:</label>
                            <select id="sugestaoCategoria" required>
                                <option value="novidades">Novidades</option>
                                <option value="humanas">Ciências Humanas</option>
                                <option value="natureza">Ciências da Natureza</option>
                                <option value="cultura">Cultura</option>
                                <option value="outra">Outra</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="sugestaoTitulo">Título da Curiosidade: <span style="color: red;">*</span></label>
                            <input type="text" id="sugestaoTitulo" required placeholder="Ex: O Segredo das Pirâmides">
                        </div>
                        
                        <div class="form-group">
                            <label for="sugestaoCuriosidade">Curiosidade Completa: <span style="color: red;">*</span></label>
                            <textarea id="sugestaoCuriosidade" rows="6" required placeholder="Descreva a curiosidade e sua fonte se possível."></textarea>
                        </div>
                        
                        <div class="form-group">
                            <label for="sugestaoImagem">Sugestão de Imagem / Descrição (Opcional):</label>
                            <input type="text" id="sugestaoImagem" placeholder="Ex: Foto de uma sequoia gigante ou 'Cientista olhando microscópio'">
                        </div>
                        
                        <button type="submit" class="submit-btn">Enviar Sugestão</button>
                        
                        <div id="feedbackMessage"></div>
                    </form>
                </div>
            `;
}

/**
 * Gera o HTML para a seção de curiosidades de uma categoria.
 * @param {string} title - Título principal da seção.
 * @param {Array<Object>} data - Array de objetos de curiosidades.
 * @returns {string} HTML da página da categoria.
 */
function renderCuriosityPage(title, data) {
    let html = `<div class="curiosity-section"><h3>${title}</h3>`;

    data.forEach((item, index) => {
        // Adiciona a função openModal ao evento onclick do item
        const onClickAction = `openModal('${item.title.replace(/'/g, "\\'")}', '${item.text.replace(/'/g, "\\'")}', '${item.img}')`;

        html += `
                    <div class="curiosity-item" onclick="${onClickAction}">
                        <img src="${item.img}" alt="${item.title}">
                        <div class="curiosity-text-container">
                            <h4>${index + 1}. ${item.title}</h4>
                            <p>${item.text}</p>
                        </div>
                    </div>
                `;
    });

    html += `</div>`;
    return html;
}

/**
 * Roteia e carrega o conteúdo da "página" selecionada.
 * @param {string} pageName - Nome da página a carregar ('home', 'novidades', etc.).
 */
function loadPage(pageName) {
    let contentHtml = '';

    // Fecha o menu se estiver aberto
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }

    // Lógica de roteamento
    if (pageName === 'home') {
        contentHtml = `
                    <div id="home-page">
                        <h1>💡 Você sabia? 🧐</h1>
                        <p>Explore as últimas novidades, ciências e cultura por trás do óbvio. Use o menu para navegar entre as categorias!</p>
                        <img id="home-page-image" src="img/capa.png" alt="Imagem chamativa de conceitos de ciência e conhecimento">
                    </div>
                `;
    } else if (pageName === 'sugestoes') {
        contentHtml = renderSuggestionPage();
    }
    else if (pageDataMap[pageName]) {
        const { title, data } = pageDataMap[pageName];
        contentHtml = renderCuriosityPage(title, data);
    } else {
        contentHtml = `<div style="text-align: center; padding: 50px;"><h3>Página Não Encontrada</h3><p>O conteúdo para esta área não está disponível.</p></div>`;
    }

    // Injeta o novo HTML no conteúdo principal
    mainContent.innerHTML = contentHtml;

    // Rola a tela para o topo do conteúdo
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


// ===============================================
// INICIALIZAÇÃO E CONTROLE DO MENU
// ===============================================
document.addEventListener("DOMContentLoaded", () => {
    // Carrega a página inicial ao iniciar
    loadPage('home');

    // Configuração do Menu Dropdown
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    menuBtn.addEventListener("click", (event) => {
        // Impede que o clique no botão feche imediatamente o menu
        event.stopPropagation();
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
});
