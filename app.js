function toggleSenha() {
    const senhaInput = document.getElementById('senha')
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
    
};

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio automático do formulário
        alert('Enviado com Sucesso');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const senhaInput = document.getElementById('senha');
    const toggleOlho = document.querySelector('.toggle-olho');

    toggleOlho.addEventListener('click', function () {
        senhaInput.type = senhaInput.type === "password" ? "text" : "password";
        toggleOlho.textContent = senhaInput.type === "password" ? '🕳️' : '👁';
    });
});
       