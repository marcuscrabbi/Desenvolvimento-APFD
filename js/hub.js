document.addEventListener('DOMContentLoaded', () => {
    const novoProjetoBtn = document.getElementById('novoProjeto');

    novoProjetoBtn.addEventListener('click', () => {
        const nomeDoProjeto = prompt('Digite o nome do novo projeto:');
        if (nomeDoProjeto) {
            const dataAtual = new Date().toLocaleDateString();
            const horaAtual = new Date().toLocaleTimeString();

            // Aqui faremos a chamada ao backend para criar o projeto
            fetch('http://localhost:3000/createProject', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    projectName: `${nomeDoProjeto} - ${dataAtual} - ${horaAtual}`,
                    currentDate: dataAtual,
                    currentTime: horaAtual
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Projeto criado:', data);
                    window.open('main.html', '_blank'); // Redirecionar para a página do editor
                })
                .catch(err => console.error('Erro:', err));
        }
    });
});

function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    const formattedTime = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const dateTimeString = `${formattedDate}, ${formattedTime}`;

    document.getElementById('dateTime').innerText = dateTimeString;
}

// Atualiza a data e hora imediatamente
updateDateTime();

// Atualiza a data e hora a cada segundo
setInterval(updateDateTime, 1000);


