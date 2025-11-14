function mostrarEstacao() {
    const input = document.getElementById('dataInput');
    if (!input.value) return;

    const data = new Date(input.value);
    const mes = data.getMonth() + 1;
    const dia = data.getDate();

    let estacao = '', descricao = '', icone = '', classe = '';
    if ((mes === 12 && dia >= 21) || (mes <= 3 && dia < 20)) {
        estacao = 'Verão';
        descricao = 'O verão é a estação mais quente do ano. Os dias são longos e ensolarados, perfeitos para passeios, viagens e diversão ao ar livre. A natureza está vibrante, e o clima convida a aproveitar o sol, o mar e a alegria dessa época.☀️';
        icone = '🌞';
        classe = 'verao';
    } else if ((mes === 3 && dia >= 20) || (mes < 6 || (mes === 6 && dia < 21))) {
        estacao = 'Outono';
        descricao = 'O outono é a estação das folhas caindo e das cores douradas. As temperaturas começam a esfriar, os dias ficam mais curtos e a natureza se prepara para o inverno. É um tempo de transição e equilíbrio entre o calor e o frio. 🍂';
        icone = '🍁';
        classe = 'outono';
    } else if ((mes === 6 && dia >= 21) || (mes < 9 || (mes === 9 && dia < 22))) {
        estacao = 'Inverno';
        descricao = 'O inverno é a estação mais fria do ano. Os dias são curtos, as noites longas e o clima costuma ser gelado. Muitas plantas descansam, os animais se abrigam e as pessoas buscam o calor das roupas e das casas. É um tempo de recolhimento e tranquilidade.❄️';
        icone = '⛄';
        classe = 'inverno';
    } else {
        estacao = 'Primavera';
        descricao = "A primavera é a estação das flores e do renascimento. Após o inverno, a natureza volta a ganhar vida: as árvores florescem, os dias ficam mais quentes e o sol brilha com mais força. É um tempo de alegria, cores e renovação.🌸";
        icone = '🌷';
        classe = 'primavera';
    }

    // Atualiza conteúdo
    document.getElementById('nomeEstacao').textContent = estacao;
    document.getElementById('descricao').textContent = descricao;
    document.getElementById('icone').textContent = icone;

    // Aplica o fundo correspondente
    document.body.className = classe;
}