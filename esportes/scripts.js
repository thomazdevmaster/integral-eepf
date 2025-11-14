function mostrarAba(aba) {
    const secoes = document.querySelectorAll("section");
    secoes.forEach((secao) => secao.classList.remove("active"));
    document.getElementById(aba).classList.add("active");


    if (aba === "cadastro") {
        const nome = document.getElementById("cadastroNome").value.trim();
        document.getElementById("nomeUsuario").textContent =
            nome || "Usuário";
    }
}