async function copiarTextoMenu(varTexto) {
    try {
        await navigator.clipboard.writeText(varTexto);
        mostrarIconeETocarSom();
    } catch (err) {
        console.error('Falha ao copiar texto: ', err);
    }
}

async function copiarTextoPrompt(promptText) {
    const editor = tinymce.get('texto');
    const selectedText = editor.selection.getContent({ format: 'text' });
    const textToCopy = promptText + '\n' + selectedText;

    try {
        await navigator.clipboard.writeText(textToCopy);
        mostrarIconeETocarSom();
    } catch (err) {
        console.error('Falha ao copiar texto: ', err);
    }
}

function mostrarIconeETocarSom() {
    const icon = document.createElement("img");
    icon.src = "../images/checked.png";
    icon.style.position = "fixed";
    icon.style.right = "10px";
    icon.style.bottom = "10px";
    icon.style.width = "32px";
    icon.style.height = "32px";
    document.body.appendChild(icon);

    setTimeout(() => {
        icon.classList.add("fade-out");
    }, 2000);

    setTimeout(() => {
        icon.remove();
    }, 4000);

    const audio = new Audio("../sounds/answer.mp3");
    audio.play();
}

function openPdfOitiva() {
    window.open('../media/Desenvolvimento_APFD_Oitiva_do_Conduzido.pdf', '_blank');
}

function openPdfCelular() {
    window.open('../media/Desenvolvimento_APFD_Senha_Celular.pdf', '_blank');
}

function abrirModeloOitiva() {
    window.open('../pages/oitiva.html', '_blank');
}

function abrirModeloMandado() {
    window.open('../pages/mandado.html', '_blank');
}

function abrirContadorDinheiro() {
    window.open('../pages/dinheiro.html', '_blank');
}

function abrirDesenvolvimento() {
    window.open('../pages/main.html', '_blank');
}
