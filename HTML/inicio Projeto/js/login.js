document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;

    const usuarioJSON = localStorage.getItem(`usuario_${email}`);

    if (!usuarioJSON) {
        alert('Usuário não encontrado!');
        return;
    }

    const usuario = JSON.parse(usuarioJSON);

    if (usuario.senha === senha) {
        alert(`Bem-vindo, ${usuario.nome}!`);
        
        // 🔥 ESSA LINHA AQUI:
        localStorage.setItem('usuarioLogado', email);

        // Redireciona para a página inicial ou painel
        window.location.href = 'index.html';
    } else {
        alert('Senha incorreta!');
    }
});
