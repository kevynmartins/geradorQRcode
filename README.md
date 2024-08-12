
# Documentação do Gerador de QR Code

## Visão Geral

Este projeto consiste em uma aplicação web simples que permite a geração de QR codes a partir de um texto ou URL fornecido pelo usuário. A aplicação é composta por três arquivos principais: `index.html`, `style.css` e `script.js`.

## Estrutura do Projeto

### Arquivos do Projeto

- `index.html`: Contém a estrutura HTML da página.
- `style.css`: Arquivo de estilo responsável pela aparência e layout da página.
- `script.js`: Contém a lógica JavaScript para a geração e exibição do QR code.

### 1. Estrutura HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Gerador de QRcode</title>
</head>
<body>
    <img src="./assets/logo-delupo.png" alt="">
    <div class="container">
        <header>
            <h2>Gerador de QRcode</h2>
        </header>    
        <main class="form">
            <input type="text" placeholder="Insira o texto ou URL aqui" id="gerador">
            <button>Gerar QRcode</button>
        </main>
        <footer class="qr-code">
            <img src="" alt="" class="img">
        </footer>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```

#### Descrição dos Elementos

- **Cabeçalho (`head`)**:
  - Define a codificação de caracteres como UTF-8 e ajusta a página para ser responsiva com a tag `viewport`.
  - Inclui o link para o arquivo CSS (`style.css`) e define o título da página.

- **Corpo (`body`)**:
  - Contém a estrutura principal da aplicação, incluindo uma imagem do logo da empresa, o contêiner principal (`.container`), um cabeçalho com o título, um formulário para entrada de dados, e um rodapé onde o QR code será exibido.

### 2. Estilos CSS (`style.css`)

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #4c5454;
}

.container{
    height: 260px;
    background: #fff;
    max-width: 410px;
    border-radius: 7px;
    padding: 16px 25px;
    transition: height 0.5s ease;
}

.container.active{
    height: 530px;
}

h1, header h2{
    text-align: center;
    font-weight: 600;
    font-size: 28px;
}

.container .form{
    padding: 20px 0 25px;
}

.container :where(input,button){
    width: 100%;
    height: 55px;
    border: none;
    outline: none;
    border-radius: 7px;
}

.form input{
    padding: 0 17px;
    font-size: 18px;
    border: 1px solid #999;
}

.form button{
    color: #fff;
    background: #987a71;
    margin-top: 20px;
    font-size: 17px;
    cursor: pointer;
    transition: all 0.5s ease;
}

.form button:hover{
    background: #b8958a;
}

.container .qr-code{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 33px 0;
    pointer-events: none;
    opacity: 0;
}

.qr-code .img{
    width: 220px;
    height: auto;
}

.container.active .qr-code{
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.5s ease;
}
```

#### Descrição dos Estilos

- **Resets e Fonte**: O seletor universal (`*`) remove margens e paddings padrão, define `box-sizing` como `border-box`, e aplica a fonte `sans-serif` ao documento.

- **Body**:
  - Centraliza o conteúdo da página vertical e horizontalmente.
  - Define uma altura mínima de 100vh (100% da altura da viewport) e um fundo cinza escuro (`#4c5454`).

- **Container**:
  - Define o contêiner principal com uma altura inicial de 260px, um fundo branco, bordas arredondadas, e padding interno.
  - Aplica uma transição suave de altura.

- **Container Ativo (`.container.active`)**:
  - Aumenta a altura do contêiner para 530px quando o QR code é gerado, criando espaço para exibir a imagem.

- **Formulário (`.form`)**:
  - Adiciona padding ao formulário e estilo ao campo de entrada e botão.

- **Campo de Entrada e Botão**:
  - Ambos ocupam 100% da largura disponível, têm 55px de altura, bordas arredondadas, e transições para efeitos de foco e hover.
  - O botão muda de cor ao ser hoverado.

- **QR Code**:
  - O contêiner do QR code é inicialmente oculto (opacidade 0), mas se torna visível com a classe `.active`, exibindo a imagem.

### 3. Código JavaScript (`script.js`)

```javascript
const container = document.querySelector('.container'),
qrinput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrimg = container.querySelector('.qr-code .img');
 
generateBtn.addEventListener('click', () =>{
    let qrValue = qrinput.value;
    if(!qrValue){
        alert('Insira um texto ou uma URL para gerar o QRcode.')
        return;
    }
    generateBtn.innerText = "Gerando um QRcode...";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrimg.addEventListener('load', () => {
        generateBtn.innerText = "Gerar QRcode";
        container.classList.add('active');
    });
})

qrinput.addEventListener('keyup', () => {
    if(!qrinput.value){
        container.classList.remove('active');
    }
});
```

#### Descrição do JavaScript

- **Seleção de Elementos**: O script começa selecionando os elementos HTML que serão manipulados, como o contêiner principal, campo de entrada, botão de geração, e a imagem onde o QR code será exibido.

- **Geração do QR Code**:
  - Ao clicar no botão, o script verifica se há algum valor no campo de entrada. Se não houver, um alerta é exibido.
  - Caso o campo esteja preenchido, o QR code é gerado utilizando a API `qrserver.com`, e a imagem resultante é exibida.

- **Atualização do Contêiner**:
  - Quando o QR code é gerado, a classe `.active` é adicionada ao contêiner, expandindo-o para mostrar o código.

- **Verificação de Campo Vazio**:
  - Se o campo de entrada for esvaziado, o QR code é ocultado removendo a classe `.active`.

---

## Como Usar

1. **Inserir Texto ou URL**: Digite o texto ou URL no campo de entrada.
2. **Gerar QR Code**: Clique no botão "Gerar QRcode".
3. **Visualizar QR Code**: O QR code será gerado e exibido na página.

Este guia cobre todas as partes do projeto e fornece uma visão completa de como a aplicação é construída e como ela funciona.
