// Recupera os valores salvos no localStorage ao carregar a página
let total = parseFloat(localStorage.getItem("total")) || 0; // Recupera o total ou define como 0
let moedas = JSON.parse(localStorage.getItem("moedas")) || { 0.10: 0, 0.25: 0, 0.50: 0, 1.00: 0 }; // Recupera as moedas ou define como 0

// Atualiza a exibição inicial
AtualizarTotal();
AtualizarMoedas();
AtualizarBarra();

const maxTotal = 100; // Valor máximo que o cofre pode "encher"

// Função para adicionar um valor ao total
function Adicionar(valor) {
    total += valor; // Incrementa o total
    moedas[valor]++; // Incrementa a contagem da moeda correspondente
    SalvarNoLocalStorage(); // Salva os valores no localStorage
    AtualizarTotal(); // Atualiza a exibição do total
    AtualizarMoedas(); // Atualiza a exibição das moedas
    AtualizarBarra(); // Atualiza a barra de progresso
}

// Função para mostrar o total
function MostrarTotal() {
    alert(`O total atual é: R$ ${total.toFixed(2)}`);
}

// Função para esvaziar o cofre
function EsvaziarCofre() {
    total = 0; // Reseta o total
    moedas = { 0.10: 0, 0.25: 0, 0.50: 0, 1.00: 0 }; // Reseta as moedas
    SalvarNoLocalStorage(); // Salva os valores no localStorage
    AtualizarTotal(); // Atualiza a exibição do total
    AtualizarMoedas(); // Atualiza a exibição das moedas
    AtualizarBarra(); // Reseta a barra de progresso
}

// Função para salvar os valores no localStorage
function SalvarNoLocalStorage() {
    localStorage.setItem("total", total); // Salva o total
    localStorage.setItem("moedas", JSON.stringify(moedas)); // Salva as moedas como string
}

// Função para atualizar o total na página
function AtualizarTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para atualizar a exibição das moedas
function AtualizarMoedas() {
    const moedasElement = document.getElementById("moedas");
    moedasElement.innerHTML = `
        Moedas adicionadas:<br>
        0,10: ${moedas[0.10]}<br>
        0,25: ${moedas[0.25]}<br>
        0,50: ${moedas[0.50]}<br>
        1,00: ${moedas[1.00]}
    `;
}

// Função para atualizar a barra de progresso
function AtualizarBarra() {
    const barra = document.getElementById("cofreBarra");
    const altura = Math.min((total / maxTotal) * 100, 100); // Calcula a altura em porcentagem
    barra.style.height = `${altura}%`; // Atualiza a altura da barra
}

// Função para mudar o fundo para ciano
function MudarFundo() {
    document.body.style.backgroundColor = "#90EE90"; // Define o fundo como ciano
}
function Sacar() {
    const valorSaque = parseFloat(prompt("Digite o valor que deseja sacar:"));

    if (isNaN(valorSaque) || valorSaque <= 0) {
        alert("Por favor, insira um valor válido para o saque.");
        return;
    }

    if (valorSaque > total) {
        alert("Você não tem saldo para o saque!!");
    } else {
        total -= valorSaque; // Subtrai o valor do saque do total
        AtualizarTotal(); // Atualiza a exibição do total
        alert(`Você sacou R$ ${valorSaque.toFixed(2)}. Saldo restante: R$ ${total.toFixed(2)}`);
    }
}