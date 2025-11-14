const track = document.getElementById('track');
const cards = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const grupoInfo = document.getElementById('grupoInfo');
const btnTheme = document.querySelector('.toggle-theme'); 
let angle = 0;
const total = cards.length;

// Variáveis para a funcionalidade de Swipe
let startX = 0;
let endX = 0;
const swipeThreshold = 50;

// FUNÇÃO ADICIONADA: Calcula o raio da órbita com base no tamanho da tela
function getDynamicRadius() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
        return 130; // Raio pequeno para celulares
    } else if (screenWidth <= 768) {
        return 250; // Raio médio para tablets
    } else {
        return 400; // Raio padrão para desktop
    }
}

function arrangeCards() {
    // O raio é obtido dinamicamente a cada rotação/redimensionamento
    const radius = getDynamicRadius();

    const deg = 360 / total;
    cards.forEach((card, i) => {
        const theta = (i * deg + angle) * Math.PI / 180;
        const x = Math.sin(theta) * radius;
        const z = Math.cos(theta) * radius;
        card.style.transform = `translateX(${x}px) translateZ(${z}px)`;
        card.classList.remove('active');
        card.classList.add('inactive');
    });

    // Calcula o índice do card ativo
    const activeIndex = (Math.round(-angle / (360 / total)) % total + total) % total;
    cards[activeIndex].classList.add('active');
    cards[activeIndex].classList.remove('inactive');

    // Atualiza a informação do grupo abaixo do carrossel
    grupoInfo.textContent = cards[activeIndex].dataset.grupo;
}

// Inicializa a disposição dos cards ao carregar a página
document.addEventListener("DOMContentLoaded", arrangeCards);

// Controle do Carrossel
nextBtn.addEventListener('click', () => {
    angle -= 360 / total;
    arrangeCards();
});

prevBtn.addEventListener('click', () => {
    angle += 360 / total;
    arrangeCards();
});

// NOVO EVENT LISTENER: Garante que o carrossel se ajuste se o usuário redimensionar ou girar a tela
window.addEventListener('resize', () => {
    arrangeCards();
});

// =======================================
// LÓGICA DE SWIPE PARA TOUCHSCREEN
// =======================================

// 1. Início do toque (touchstart)
track.addEventListener('touchstart', (e) => {
    // Registra a posição X inicial do primeiro toque
    startX = e.touches[0].clientX;
});

// 2. Fim do toque (touchend)
track.addEventListener('touchend', (e) => {
    // Registra a posição X final
    endX = e.changedTouches[0].clientX;
    const swipeDistance = endX - startX;

    // Se o swipe for significativo (maior que o threshold)
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe para a direita -> move para o card ANTERIOR
            prevBtn.click();
        } else {
            // Swipe para a esquerda -> move para o card SEGUINTE
            nextBtn.click();
        }
    }
});

// 📌 CORREÇÃO DA LÓGICA DO TEMA
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('light');
    
    // Atualiza o texto baseado na classe atual
    if (document.body.classList.contains('light')) {
        btnTheme.innerHTML = '🌙 Modo Escuro';
    } else {
        btnTheme.innerHTML = '🌞 Modo Claro';
    }
});

// =======================================
// CONTROLE DO MODAL SOBRE
// =======================================
const modalSobre = document.getElementById('modalSobre');
const btnSobre = document.getElementById('btnSobre');
const fecharSobre = document.getElementById('fecharSobre');

// Abre o modal
btnSobre.addEventListener('click', () => {
    modalSobre.style.display = 'flex';
});

// Fecha o modal pelo botão 'X'
fecharSobre.addEventListener('click', () => {
    modalSobre.style.display = 'none';
});

// Fecha o modal clicando fora dele
window.addEventListener('click', (event) => {
    if (event.target === modalSobre) {
        modalSobre.style.display = 'none';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    modalSobre.style.display = 'none';
});