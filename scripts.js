// Função para aplicar o tema salvo
function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// função para chamar o tema
applyTheme();

// Alterna o tema
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Alternar Tema';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#7d5fff';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Salva a preferência de tema
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Validação
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('mensagem-sucesso').style.display = 'block'; // Exibe mensagem de sucesso
    this.reset(); // Reseta o formulário
});