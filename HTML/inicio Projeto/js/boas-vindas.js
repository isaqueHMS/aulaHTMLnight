document.addEventListener('DOMContentLoaded', function () {
    const emailLogado = localStorage.getItem('usuarioLogado');

    if (emailLogado) {
        // Recupera os dados do usuário do localStorage
        const usuarioJSON = localStorage.getItem(`usuario_${emailLogado}`);
        if (usuarioJSON) {
            const usuario = JSON.parse(usuarioJSON);

            // Atualiza o cabeçalho com o nome do usuário
            const nomeDiv = document.getElementById('usuario-nome');
            if (nomeDiv) nomeDiv.textContent = `Olá, ${usuario.nome}`;

            // Exibe a tela de boas-vindas se ainda não tiver sido exibida
            if (!sessionStorage.getItem('boasVindasExibida')) {
                const tela = document.getElementById('telaBoasVindas');
                if (tela) {
                    tela.style.display = 'flex';
                    // Exibe a mensagem na tela de boas-vindas
                    document.getElementById('nomeUsuarioTela').textContent = usuario.nome;

                    // Oculta a tela de boas-vindas ao clicar
                    tela.addEventListener('click', function () {
                        tela.style.display = 'none';
                        sessionStorage.setItem('boasVindasExibida', 'true');
                    });
                }
            }
        }
    }
});
