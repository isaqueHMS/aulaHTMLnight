document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar_senha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Armazena usando o email como chave
    localStorage.setItem(`usuario_${email}`, JSON.stringify(usuario));

    alert('Conta criada com sucesso! Você será redirecionado para o login.');

    
    window.location.href = 'login.html';
});
