# Cofrinho Digital

Este projeto é um cofrinho digital interativo desenvolvido em HTML, CSS e JavaScript. O objetivo é simular um cofre onde o usuário pode adicionar moedas de diferentes valores, visualizar o total acumulado, sacar valores, esvaziar o cofre e acompanhar visualmente o enchimento do cofrinho.

## Lógica do Projeto

- O usuário pode adicionar moedas de R$0,10, R$0,25, R$0,50 e R$1,00 clicando nos botões correspondentes.
- Cada moeda adicionada incrementa o total e a quantidade de cada tipo de moeda.
- O total acumulado é exibido e atualizado automaticamente na tela.
- O usuário pode sacar um valor qualquer, desde que haja saldo suficiente. Caso contrário, recebe um aviso.
- O botão "Esvaziar Cofre" zera o total e a quantidade de moedas.
- O cofre possui uma barra de enchimento visual que cresce conforme o total aumenta.
- Todos os dados (total e moedas) são salvos no navegador usando `localStorage`, garantindo persistência mesmo após fechar ou recarregar a página.
- O usuário pode personalizar a cor de fundo do site.

## Como usar

1. Abra o arquivo `Cofre.html` em seu navegador.
2. Utilize os botões para adicionar moedas, sacar, esvaziar ou visualizar o total.
3. Observe o cofrinho enchendo conforme você adiciona moedas.

## Estrutura do Projeto

- `Cofre.html` — Página principal do cofrinho digital.
- `Cofre.css` — Estilos para layout, botões e barra de enchimento.
- `Cofre.js` — Lógica do cofre, controle de moedas, saque, enchimento e persistência.
- `img/` — Pasta para imagens do cofre.

## Dicas para alterar a moeda (R$ para US$)

Para alterar a moeda de reais (R$) para dólares (US$), basta modificar os pontos onde a moeda é exibida no código JavaScript:

- Troque `toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })` por `toLocaleString('en-US', { style: 'currency', currency: 'USD' })`
- Altere os textos dos botões e exibições de valores de "R$" para "US$".
- Exemplo:
  ```javascript
  totalElement.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });