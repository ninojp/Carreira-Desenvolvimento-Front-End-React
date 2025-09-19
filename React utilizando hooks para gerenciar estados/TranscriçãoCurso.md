# Curso Alura - React: utilizando hooks para gerenciar estados

## Aula 1 - Criando um Dialog

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá! Seja bem-vindo a este curso de React. Meu nome é Vinícius Neves, o Dev careca barbudo da Alura que você mais gosta, e estou aqui para acompanhar a evolução dos seus estudos de React. Vamos aprender muitos conceitos novos, mas é essencial que já tenhamos domínio do JSX do React, ou seja, saibamos escrever os componentes e utilizar o useState, que é o nosso estado local. Esse é um pré-requisito importante para maximizar o aproveitamento ao longo das aulas.

Com isso em mente, podemos focar no que vamos aprender de interessante. Vamos trabalhar em uma aplicação que está parcialmente construída. Diferente do que fizemos anteriormente, não vamos criar tudo do zero. Estamos simulando o dia a dia de uma pessoa desenvolvedora, que nem sempre inicia projetos novos, mas frequentemente pega algo já em andamento para dar manutenção e evoluir. É isso que faremos com o checklist.

Explorando funcionalidades do checklist  
Vamos finalizar este checklist de estudo, abordando conceitos importantes para o desenvolvimento. Vamos trabalhar com uma modal, interagir com o local storage, aprender hooks do React e ver a aplicação em funcionamento.

Conseguimos concluir tarefas, deletá-las, desfazer a conclusão caso tenhamos concluído por engano, editar, trocar de useState para localStorage e salvar. Podemos adicionar novas tarefas, como estudar, e explorar a Context API.

Desafios e expectativas do curso  
Há muitas funcionalidades interessantes que podemos implementar na aplicação. Quando recarregamos, a lista de tarefas permanece intacta, exatamente como a deixamos. Podemos publicar isso e há muitos desafios legais ao longo do curso. Sempre deixamos um desafio no final para praticar e aplicar todo o conhecimento adquirido durante o desenvolvimento deste checklist de plano de estudo.

Estamos animados e esperamos que vocês também estejam, para começarmos a codificar nosso checklist. Vamos lá, estamos esperando por vocês!

### Aula 1 - Preparando o ambiente: organização inicial

Introdução ao ambiente React: primeiros passos
Agora que você já deu o [primeiro passo](https://cursos.alura.com.br/course/react-19-jsx-componentes-form-action-usestate) em uma das ferramentas mais utilizada em aplicações web, bora seguir com um mergulho mais profundo e aprender ainda mais funcionalidades que o React nos disponibiliza.

Mas antes de mergulharmos de cabeça, temos dois passos importantes para preparar nosso ambiente:

1. Se acostumar (ainda mais) com o terminal do nosso sistema operacional.
Baixar o projeto base.
2. E claro, eu, o careca barbudo mais bacana que você conhece, vou te ajudar nessa missão!

Então, bora começar?

Projeto base

O projeto inicial está [disponível aqui no github](https://github.com/alura-cursos/react-todo-list/tree/projeto-inicial), onde você consegue acessar as branchs do projeto. Temos uma branch pra cada aula e um commit por vídeo, assim você consegue usar como base de consulta sempre que precisar.

Você pode baixar o projeto lá pelo github ou [clicando aqui](https://github.com/alura-cursos/react-todo-list/archive/refs/heads/projeto-inicial.zip).

Depois de baixar e extrair o conteúdo do arquivo zip, hora de ir pro terminal. Navegue até a pasta onde se encontra o projeto e execute o seguinte comando para instalar as dependências:

> npm install

Pode abrir o projeto no VSCode (ou seu editor favorito) pra ir se acostumando com ele e, na sequência, basta levantar o projeto que usa o Vite por debaixo dos panos:

> npm run dev

E pronto, agora é só acessar http://localhost:5173 e começar a estudar!

Figma

O layout da aplicação que vamos utilizar está [disponível aqui no Figma](https://www.figma.com/community/file/1496539950424761759).

O ícone que vamos usar na aula 2:

```JSX
export function IconClose() { 
return ( 
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M9.65625 1.28125L5.9375 5L9.65625 8.71875L8.71875 9.65625L5 5.9375L1.28125 9.65625L0.34375 8.71875L4.0625 5L0.34375 1.28125L1.28125 0.34375L5 4.0625L8.71875 0.34375L9.65625 1.28125Z" fill="#EAEAEA" />Add commentMore actions 
</svg> 
) 
} 
```

Agora sim, tudo no lugar. Bora começar?

### Aula 1 - Iniciando o projeto React - Vídeo 2

Transcrição  
Diferente do que fizemos no curso anterior, agora vamos trabalhar em um projeto que já está em andamento e adicionar novas funcionalidades. Neste caso específico, o projeto já existe e está codificado, mas apenas a parte estática. Vamos analisar esse projeto antes de começarmos a codificar. Existe uma mística no desenvolvimento de software, onde passamos muito tempo lendo o código em vez de escrever algo novo. Vamos colocar isso à prova.

Primeiramente, precisamos baixar o projeto base que está na seção de preparação do ambiente. Eu já fiz o download e, no meu caso, ele está na área de trabalho. O nome do projeto é checklist, e eu o clonei na pasta "checklist". Para colocá-lo em execução, não há mistério em relação ao que fizemos anteriormente. Vamos para o terminal. No terminal, já estou na pasta do projeto. Vou fechar tudo que está aberto e focar no checklist.

Preparando o ambiente de desenvolvimento  
No terminal que estou usando, ele indica onde estou. Estou dentro de "Desktop", na pasta "Checklist". Existe um comando de terminal que nos permite ver onde estamos, que é o pwd.

> pwd

No meu caso, o caminho é /users/Vinicius Deves/Desktop/checklist. Portanto, já estou no local correto.

Agora, vou abrir o VSCode nesta pasta usando o comando code ., e ele abrirá o VSCode para nós.

> code .

A primeira coisa que pensamos é em colocar o projeto para rodar. Para isso, usamos o comando npm run dev.

> npm run dev

Instalando dependências e configurando o projeto

No entanto, se fizermos isso imediatamente após clonar o projeto e abrir o terminal, ele dirá que não reconhece o comando que estamos tentando executar, que é o Vite. Vamos fazer o caminho inverso. Sabemos que no arquivo package.json, há uma seção chamada scripts, localizada na linha 6, onde executamos o script de desenvolvimento com npm run dev, que chama o processo do Vite.

```JSX
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
}
```

Por que ele não encontrou isso? Porque, ao clonar ou baixar um projeto, seja por zip ou git clone, precisamos instalar as dependências.

A pasta NodeModules nunca deve ser incluída no git, pois ela varia de acordo com o sistema operacional. Por exemplo, ao usar o macOS, ela será configurada para funcionar nesse sistema. Se estivermos utilizando Linux ou Windows, o processo será ajustado conforme o sistema operacional correspondente.

Antes de executar o comando npm run start, devemos realizar um npm install.

> npm install

Esse comando pode ser abreviado para npm i, que é um atalho útil para quem prefere digitar menos.

> npm i

Executando o projeto e verificando funcionalidades

Após pressionar "Enter", o npm install baixará todas as dependências do projeto. Quando esse processo for concluído, podemos executar o npm run dev.

> npm run dev

Nesse ponto, o Vite, que anteriormente não estava disponível, agora está presente na pasta NodeModules e pronto para ser utilizado.

O projeto estará disponível no localhost na porta 5173. Ao abrir o Chrome e recarregar a página, veremos que a camada visual está pronta. No entanto, ainda há funcionalidades a serem implementadas. Por exemplo, ao clicar em adicionar, nada acontece, e ao alternar o valor entre concluído ou não, ele não muda de lugar. Portanto, há bastante trabalho a ser feito.

Planejando o desenvolvimento de novas funcionalidades

No Figma, temos uma pequena modal que precisaremos abrir quando clicarmos no ícone de adicionar uma nova tarefa. Vamos começar pela modal, mas nosso projeto base já está funcionando corretamente.

Para garantir a compatibilidade entre o que está acontecendo em nossa máquina e na de outras pessoas, recomendamos o uso da mesma versão do Node que estamos utilizando, que é a 22.12.0. Podemos verificar a versão do Node instalada com o seguinte comando:

> node -v

Alterações na versão secundária, como 12.0, geralmente não causam problemas, mas para uma experiência idêntica, a versão 22 do Node é a mais indicada.

Com o ambiente pronto, podemos começar a desenvolver a nossa modal ou dialog, criando esse componente para adicionar itens à lista de estudo. Vamos continuar esse processo no próximo vídeo.

### Aula 1 - Utilizando elemento dialog nativo - Vídeo 3

Transcrição  
No nosso último encontro, discutimos a criação de um componente dialog para uma interface modal, que obscurece o fundo. No Figma, já temos a modal escura, mas precisamos implementá-la no estilo React.

Para isso, podemos abrir o VS Code, que já está com o projeto aberto. Vamos fechar tudo que está aberto e, dentro da pasta "components", criar uma nova pasta chamada "dialog". Dentro dela, criaremos o arquivo index.jsx.

Criando a função Dialog

Vamos criar uma função e exportá-la: export function Dialog, que será nosso componente. Lembrando que componentes em React são funções que começam com letra maiúscula, por isso usamos "Dialog" com letra maiúscula.

```JSX
export function Dialog() {

}
```

Podemos então adicionar o nosso return e, ao invés de chaves, usaremos parênteses para retornar o código JSX, ou seja, nossa marcação.

```JSX
export function Dialog() {
    return (

    )
}
```

Explorando a tag dialog no HTML

Existe uma tag semântica no HTML, que já vem com várias funcionalidades por padrão, chamada dialog, que é ideal para modais. Vamos pesquisar no Google por "HTML tag dialog" e acessar a documentação da Mozilla. A versão em português não contém todos os exemplos, então usaremos a versão em inglês.

Na documentação, encontramos um exemplo que utiliza Javascript para manipular o elemento dialog. Ele busca o elemento, assim como os botões de mostrar e fechar, e realiza ações com eles. Quando clicamos em "show the dialog", ele exibe a modal com um fundo colorido, e ao clicar em "close", ele fecha. Esse exemplo é um bom ponto de partida para nosso projeto.

Implementando o exemplo no projeto

Vamos copiar o HTML do exemplo, que inclui a dialog, um botão de fechar e um botão de mostrar, e colá-lo no return dentro dos parênteses no VS Code.

```JSX
export function Dialog() {
    return (
        <dialog>
            <button autofocus>Close</button>
            <p>This modal dialog has a groovy backdrop!</p>
        </dialog>
        <button>Show the dialog</button>
    )
}
```

Ao formatar o código, o VS Code nos alerta que expressões JSX devem retornar um único elemento pai. Isso significa que não podemos retornar uma dialog ao lado de um button sem um elemento pai.

Utilizando fragmentos do React

Para resolver isso, podemos envolver tudo em uma div, mas uma solução mais elegante é usar um fragmento do React. Basta abrir e fechar com os sinais de maior e menor, sem nenhum elemento, e o React saberá lidar com isso. Isso é equivalente a usar React.Fragment.

```JSX
export function Dialog() {
    return (
        <>
            <dialog>
                <button autofocus>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button>Show the dialog</button>
        </>
    )
}
```

No React, podemos utilizar React.Fragment ou deixar o JSX vazio. Se deixarmos vazio, o JSX consegue resolver, e se importarmos dessa forma, o React também sabe lidar. Vamos deixar explícito, pois é melhor do que implícito.

```JSX
import React from "react";

export function Dialog() {
    return (
        <React.Fragment>
            <dialog>
                <button autofocus>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button>Show the dialog</button>
        </React.Fragment>
    )
}
```

Integrando o componente Dialog no app  
Agora, temos o dialog com os botões relacionados. Vamos salvar e colocar isso no app.jsx.

Vamos colapsar a estrutura de todo, que seria um afazer, e completed, que seria o completo, e posicioná-los no final do container. Vou colocá-los no início para facilitar a visualização, logo abaixo do header, chamando nosso dialog. O VSCode já identificou e importou esse componente na linha 3: import { Dialog } from './components/Dialog';.

```JSX
import { Dialog } from "./components/Dialog";
```

Testando a aplicação e corrigindo erros

Vamos verificar se isso já está aparecendo na tela. No Chrome, no localhost na porta 5173, ao recarregar a página, ele não conseguiu carregar. Precisamos executar npm run dev no terminal, pois o processo foi interrompido para discutirmos a versão do Node e não foi reiniciado.

```JSX
npm run dev
```

Voltando ao navegador, agora sim, o show dialog aparece, mas ao clicar, nada acontece. Precisamos implementar os mecanismos que a Mozilla disponibiliza para interagir com esses botões.

Adicionando interatividade ao dialog

Vamos copiar o que está na documentação, que utiliza document.querySelector para buscar uma tag dialog ou um botão dentro dela. Vamos colar isso no JSX e pedir ao VSCode para formatar o documento, colapsando a estrutura de pastas.

```JSX
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

Estamos buscando os elementos dialog, showbutton e closebutton. Quando alguém clica no showbutton, mostramos o modal com dialog.showModal(), e ao clicar em close, usamos dialog.close(). Esses são eventos nativos do elemento dialog, por isso é importante utilizá-los em vez de uma div com muitos estilos.

Estilizando o componente dialog

Vamos criar um novo arquivo dentro da pasta "dialog", chamado dialog.style.css. Vamos importar esse arquivo no index.jsx com import './dialog.style.css';.

```JSX
import './dialog.style.css';
```

Podemos agora aplicar os estilos disponíveis no exemplo, como o .backdrop, no dialog.style.css.

```CSS
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

Identificando e abordando problemas no React

Ao testar a aplicação, encontramos um erro não tratado: não conseguimos ler propriedades de nulo no index.jsx nas linhas 11 e 16. Isso significa que o showbutton é nulo, pois o React não o encontrou. Estamos usando a documentação da Mozilla como base, mas ao trabalhar com React, precisamos seguir a abordagem correta.

No curso anterior, discutimos programação declarativa e imperativa. A programação imperativa é quando especificamos exatamente o que o navegador deve fazer, como interagir com a API document. No entanto, o React não espera que escrevamos esse tipo de comportamento dessa forma. O erro ocorreu porque, quando o código foi executado, o dialog não existia no HTML, impossibilitando a execução do addEventListener.

Estamos no caminho certo ao utilizar o dialog, que é o elemento adequado para essa funcionalidade. No entanto, precisamos traduzir essa abordagem. Não podemos usar a API do document dessa maneira em situações como essa dentro do React. No próximo vídeo, veremos como corrigir esse problema. Até lá!

### Aula 1 - Reagindo a cliques - Vídeo 4

Transcrição  
Vamos começar a resolver os problemas que encontramos ao copiar e colar a documentação da Mozilla. A primeira coisa que precisamos transformar é a parte de localizar o elemento e adicionar um listener para ouvir o evento de clique. Vamos fazer isso de acordo com a abordagem do React.

Inicialmente, o código que utilizamos para adicionar eventos de clique aos botões era o seguinte:

```JSX
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});
```

Adotando uma abordagem declarativa com React

No entanto, queremos adotar uma abordagem mais declarativa, típica do React. Temos uma função para abrir a modal. Vamos remover o closeButton e o openButton.edg, deixando apenas a arrow function que abre e fecha a modal. Podemos guardar isso em uma constante. Assim, criamos uma constante chamada openDialog. É importante ser explícito no nome, então usamos openDialog. A função que fecha também será guardada em uma constante, chamada closeDialog.

```JSX
const openDialog = () => {
    dialog.showModal();
}

const closeDialog = () => {
    dialog.close();
}
```

A primeira coisa que podemos fazer é deletar aquelas referências, pois não queremos mais buscar o showButton e o closeButton. O que queremos é que, quando alguém clicar nesse botão, algo aconteça. No onClick, que é JSX puro, usamos onClick com a letra "C" maiúscula. Se estivéssemos no HTML nativo, seria onclick em minúsculas. Mas, como é JSX, usamos onClick com "C" maiúsculo.

Implementando funções de clique no JSX

Quando alguém clicar no close, queremos chamar a função closeDialog. Estamos passando a referência da função. Quando alguém clicar, a função será executada. Se executássemos a função diretamente, ela seria chamada quando o JavaScript ou JSX fosse interpretado, mas não é isso que queremos. Queremos passar a referência.

```JSX
<button autoFocus onClick={closeDialog}>Close</button>
```

Da mesma forma, quando alguém clicar no showDialog, queremos chamar a função openDialog. Assim, não precisamos mais adicionar o addEventListener quando esse componente é montado. Não precisamos fazer nada de forma imperativa.

```JSX
<button onClick={openDialog}>Show the dialog</button>
```

Corrigindo erros e ajustando propriedades

Estamos abordando de forma declarativa, ou seja, declaramos o que deve acontecer quando o botão for clicado. Vamos verificar se conseguimos resolver o erro? No Chrome, ao recarregar a página, observamos que há uma propriedade inválida chamada autofocus. O console sugere que utilizemos autofocus com "F" maiúsculo. Vamos corrigir isso? Assim como onClick é capitalizado, autofocus também deve ser. Após a correção e recarregar a página, não há mais erros no console.

Agora, estamos declarando o que queremos fazer: declaramos funções e quando vamos executá-las, ou seja, quando o botão for clicado. No entanto, ao clicar em "show the dialog", encontramos outro erro. Esse erro ocorre porque ainda estamos utilizando o querySelector no dialog. No momento em que esse código é executado, o dialog ainda não está presente no DOM, resultando em um valor nulo. Precisamos, portanto, estabelecer um vínculo de forma React com esse elemento dialog.

Estabelecendo vínculo com elementos no React

Não devemos realizar buscas no DOM dessa maneira. Precisamos de uma abordagem React para interagir com esse elemento. Esse tipo de interação é relativamente comum, e há mais de um cenário em que precisamos ter uma referência para o elemento com o qual queremos interagir. Isso é comum o suficiente para que o React nos forneça uma solução. Quando precisarmos realizar esse tipo de ação, devemos utilizar a abordagem que o React nos oferece. Esse é o assunto que abordaremos na sequência. Nos encontramos lá.

### Aula 1 - Conhecendo o useRef - Vídeo 5

Transcrição  
Temos nosso último elemento do quebra-cabeça para resolver: a forma como vamos interagir com o elemento dialog. Já trouxemos aqui a documentação do hook que utilizaremos para isso. O nome do hook que vamos utilizar é useRef. Se olharmos a definição, o useRef é um React hook que permite referenciar um valor que não é necessário para renderização.

A documentação fornece detalhes sobre a referência, o valor inicial e o uso. Na parte de uso, uma das opções é manipular o DOM com uma referência. É comum usar um ref para manipular o DOM, e o React oferece suporte nativo para isso. Primeiro, declaramos um ref com valor inicial de nulo. Fazemos o import do useRef do React e o inicializamos como nulo. Depois, passamos essa referência no JSX.

Implementando o useRef no componente

Para começar, vamos importar o useRef do React e inicializar nossa referência:

```JSX
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  // ...
```

No exemplo, é utilizado um input, passando uma propriedade chamada ref, que aponta para a referência criada. Em algum momento, quando precisamos acessar, por exemplo, o método focus do input, fazemos isso dentro de uma função, não diretamente no JSX. A função handleClick acessa o inputRef.current e chama o método focus.

```JSX
  return <input ref={inputRef} />;
```

```JSX
function handleClick() {
  inputRef.current.focus();
}
```

Aplicando useRef para manipulação de modais

No nosso caso, queremos chamar showModal e closeModal. Vamos seguir a documentação. Primeiro, chamamos o useRef, que o VS Code já importou, e o valor padrão é nulo. Guardamos isso em uma constante chamada dialogRef. O sufixo ref deixa claro que é uma referência. No JSX, passamos a referência dialogRef. O VS Code tem um autocomplete para ref, pois isso está bem documentado. Ele pega uma referência a um elemento HTML usando essa propriedade.

```JSX
const dialogRef = useRef(null);
```

```JSX
<dialog ref={dialogRef}>
```

Seguimos a documentação do React e fazemos dialogRef.current.showModal. O mesmo para closeModal. Agora, nos livramos da programação imperativa. Não manipulamos o DOM diretamente. Declaramos uma referência, passamos ela via prop ref, acessamos o current e executamos a ação.

```JSX
// "Show the dialog" button opens the dialog modally
const openDialog = () => {
  dialogRef.current.showModal();
};

// "Close" button closes the dialog
const closeDialog = () => {
  dialogRef.current.close();
};
```

Testando a funcionalidade do modal

Para verificar se funciona, voltamos ao Chrome, na nossa aplicação rodando na porta 5173. Recarregamos a página, clicamos em showTheDialog, e o modal aparece conforme esperado, como na documentação do dialog.

Vamos abrir novamente e clicar em showTheDialog. Observe que ele está trazendo a cor daquele gradiente, então já está funcionando corretamente. Vamos verificar se o close está funcionando. Cliquei em close, e ele está funcionando, mostrando e fechando. Relembrando tudo isso, estamos utilizando o useRef.

Explorando o conceito do useRef

O que é o useRef? Ele traz um objeto que não será referenciado durante a renderização. Por isso, não estamos fazendo algo como dialog.ref.current.algumacoisa. Não queremos referenciá-lo durante a renderização. Usamos de forma declarativa, encapsulando o acesso ao dialog e reagindo a cliques. Ou seja, declaramos o que queremos que aconteça, reagindo ao que a pessoa usuária está fazendo. Reagimos ao clique para abrir ou fechar a modal. Esse é o useRef.

Além da documentação oficial, temos a documentação do React na versão 19.1, disponível em react.dev. Ao acessar o site, há uma opção de busca onde podemos digitar useRef e encontrar a parte que estávamos analisando. Também há um vídeo no canal da Alura que fala sobre esse hook e traz alguns exemplos e outros casos de uso. O exemplo que discutimos agora é sobre abrir e fechar uma modal, um elemento dialog, usando os eventos nativos do HTML. Para isso, utilizamos o useRef para gerenciar essa funcionalidade.

Ajustando o estilo do modal

Agora, o que precisamos fazer? Primeiramente, nosso layout não possui esse fundo colorido. Podemos ir até dialog.styles e, em vez de usar uma imagem de fundo, podemos usar um background-color de #000, que é preto. Quando todos os seis dígitos são iguais, podemos usar apenas três, e o CSS entenderá. Salvei aqui, e ao voltar ao Chrome, ele já está com a aparência do nosso projeto, que é um modo escuro bem definido. Não temos mais aquele fundo colorido, mas se desejar, pode mantê-lo. Nosso projeto está preparado para continuar desenvolvendo as funcionalidades. Precisamos implementar um campo de texto e um botão, transformando isso em um formulário de alguma forma.

```CSS
::backdrop {
  /* background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75; */
  background-color: #000;
}
```

Concluindo e preparando para próximos passos

Era isso que tínhamos para o momento. Observe que, para construir algo utilizando programação imperativa, como visto no MDN da Mozilla, fazemos isso de forma imperativa via API do document. O React, por outro lado, é declarativo. Em vez de dizer explicitamente o que queremos fazer, como querySelector, declaramos como queremos que o JSX reaja de acordo com o que acontece na aplicação. Aprendemos um novo hook, o useRef.

Agora que temos mais uma ferramenta em nosso arsenal, podemos continuar desenvolvendo o checklist. Afinal, essa modal precisa interagir com o botão correto, que não é o exemplo de showTheDialog que estamos usando. Há bastante trabalho a fazer, então vamos seguir com o desenvolvimento. Estou aguardando vocês na próxima etapa. Até mais!

### Aula 1 - Para saber mais: Arrow Functions

Continuando nossa saga de preparação para explorar React, hoje vamos dar uma revisitada nas Arrow Functions, aquelas funções bacanas do JavaScript que você vai usar muito (e já deve estar usando bastante, né?). Bora lá refrescar a memória?

Afinal, o que são Arrow Functions?

As Arrow Functions, introduzidas no ES6, são uma forma mais curta e prática de escrever funções no JavaScript. Elas deixam o código mais limpo e claro, especialmente quando precisamos de funções rápidas e simples.

Veja só a diferença:

```JavaScript
// Função normal 
function somar(a, b) { 
return a + b; 
} 

// Arrow Function 
const somar = (a, b) => a + b; 
```

Massa, né? De cara já dá pra notar a vantagem da simplicidade. Menos linhas, mais clareza.

O que muda de fato?

Arrow Functions não são apenas uma sintaxe bonitinha. Elas têm algumas particularidades que vale a pena destacar:

this: Arrow Functions não têm um this próprio. Elas pegam o this do escopo onde foram definidas, o que pode simplificar ou complicar sua vida dependendo do contexto. Fica esperto!

Não podem ser usadas como construtores: Nada de criar objetos com new usando Arrow Functions, hein? Vai dar erro!

Retorno abreviado

Outra coisa bem legal é que você pode simplificar ainda mais o retorno. Quando a função tiver apenas uma linha, não precisamos usar {} nem a palavra-chave return:

```JavaScript
// Com retorno explícito 
const quadrado = (x) => { return x * x; }; 

// Forma abreviada (lindona) 
const quadrado = x => x * x; 
```

Show de bola, né?

E quando tenho só um parâmetro?

Se a sua função recebe só um parâmetro, você pode deixar os parênteses de fora:

```JavaScript
// Forma completa 
const dobro = (x) => x * 2; 

// Forma abreviada (mais leve ainda) 
const dobro = x => x * 2; 
```

Cuidado com a clareza!

Olha só, abreviar demais pode dificultar a leitura, principalmente pra quem está começando. Então, busque um equilíbrio. Se ficar confuso, manda parênteses ou chaves sem dó!

Onde vamos ver isso no React?

No React, Arrow Functions aparecem em todo lugar, especialmente:

- Componentes funcionais
- Manipuladores de eventos (event handlers)
- Métodos dentro de hooks, como no useEffect ou useCallback

Então é bom estar afiado nelas pra não tropeçar no meio da batalha!

Bora praticar?

Crie algumas funções usando diferentes estilos pra se familiarizar bem. Vale até brincar um pouco com o código existente antes de seguir pra próxima aula.

Por hoje é isso aí, pessoal! Vida longa e próspera! o/

### Aula 1 - Analisando uso da Modal

A Dev.Spot, uma plataforma para desenvolvedores criarem portfólios digitais e link trees personalizados, está desenvolvendo uma nova funcionalidade que permite às pessoas desenvolvedoras destacar projetos específicos em seus portfólios digitais através de uma modal interativa. A equipe de desenvolvimento precisa garantir que a modal seja implementada de forma a ser facilmente customizável e integrada com o restante da aplicação.

Quais estratégias a equipe pode adotar para garantir que a modal seja flexível e facilmente integrável com outros componentes da plataforma?

Resposta:  
Implementar a modal como um componente React reutilizável, utilizando props para permitir a customização de conteúdo e estilo, encapsulando-a dentro de um único elemento pai e utilizando fragmentos do React para evitar erros de retorno múltiplo. Evitar manipulações diretas do DOM, utilizando métodos declarativos do React, como hooks de estado e referências, para controlar a visibilidade e interatividade da modal. Garantir que a modal seja modular, permitindo que outros componentes da plataforma possam interagir com ela de forma fácil e eficiente, através de eventos e callbacks.

> Correta, pois essa abordagem garante que a modal seja flexível e facilmente integrável, utilizando práticas recomendadas do React para modularidade e interatividade.

### Aula 1 - Para saber mais: Criando funções dentro de funções

Seguindo nossa jornada, vamos falar sobre um conceito que você já viu (mesmo que ainda não tenha percebido totalmente): funções dentro de funções. Parece um papo estranho? Não se preocupe, vamos descomplicar isso junto e entender por que esse padrão é tão comum e útil no JavaScript, especialmente no React.

Funções dentro de funções, mas por quê?

No JavaScript, é super comum você criar funções dentro de outras funções. Essa técnica tem até nome bonito: funções aninhadas (nested functions). Ela é muito útil por diversos motivos:

- Organização do código: cria blocos menores e mais específicos, facilitando a leitura e manutenção.
Escopo protegido: funções internas têm acesso às variáveis da função externa, mas não poluem o escopo global.
- Closures: um conceito importantíssimo que surge naturalmente aqui (falaremos já já).
Se liga aqui nesse trecho de código:

```JavaScript
function criarMensagem(nome) { 
function adicionarCumprimento() { 
return `Salve, ${nome}! Tudo bem?`; 
} 
    
return adicionarCumprimento(); 
} 

console.log(criarMensagem("Vinny")); 
// Output: "Salve, Vinny! Tudo bem?" 
```

Aqui, a função adicionarCumprimento está dentro de criarMensagem. A função interna usa uma variável (nome) declarada na função externa. Isso já nos leva diretamente ao próximo conceito: closures.

Closures: Um superpoder das funções internas

Uma closure ocorre quando uma função interna acessa variáveis do escopo externo, mesmo depois da função externa ter sido executada completamente. Parece mágica, mas é só JavaScript!

Olha só esse exemplo:

```JavaScript
function contador() { 
let count = 0;
    
function incrementar() { 
count += 1; 
return count; 
} 
    
return incrementar; 
} 

const contar = contador(); 

console.log(contar()); // Output: 1 
console.log(contar()); // Output: 2 
console.log(contar()); // Output: 3 
```

Aqui, incrementar acessa e altera o valor de count, mesmo que a função contador já tenha terminado sua execução. Isso é uma closure em ação!

E no React, onde vemos isso?

No React, você vê funções internas constantemente, por exemplo:

Ao usar Hooks como useState, useEffect, useRef, onde você define funções internas para manipular estados e efeitos.
Dentro de callbacks e manipuladores de eventos.
Exemplo prático com useState:

```JavaScript
import { useState } from 'react'; 

function MeuComponente() { 
const [count, setCount] = useState(0); 

function incrementar() { 
setCount(count + 1); 
} 

return ( 
<div> 
<p>Você clicou {count} vezes</p> 
<button onClick={incrementar}>Clique aqui!</button> 
</div> 
); 
} 
```

Aqui, incrementar é uma função interna que manipula o estado criado pelo useState. Simples e muito poderoso!

Quando usar funções internas?

Sempre que precisar de:

- Organização local: não vai usar fora do contexto atual? Função interna!
- Closures: precisar manter referências específicas no contexto local.

Atenção!

Só cuidado para não abusar, hein? Se a função interna ficar grande demais, talvez valha a pena reconsiderar e colocá-la fora pra não deixar o código muito aninhado e difícil de ler.

### Aula 1 - Faça como eu fiz: Criando uma modal funcional com React e useRef

Nesta aula, aprendemos como transformar um projeto estático em um projeto funcional utilizando React. Para isso, começamos adicionando uma modal (componente Dialog), entendendo as limitações da abordagem imperativa e implementando a solução correta usando a programação declarativa com o hook useRef. Aprendemos também como aplicar estilos e conectar eventos de clique ao funcionamento da modal.

Agora é sua vez de praticar, fazendo o mesmo no seu projeto! Siga o passo a passo:

- Crie um novo componente Dialog dentro da pasta components.
- Adicione o HTML básico da modal utilizando a tag semântica `<dialog>`.
- Substitua o uso de document.querySelector por uma referência com useRef.
- Faça a modal abrir e fechar corretamente com base em eventos de clique.
- Aplique um estilo escuro no fundo da modal para deixá-la mais próxima do layout do Figma.

Opinião do instrutor

1. Criando a estrutura do componente:

No seu projeto, dentro da pasta components, crie uma nova pasta chamada Dialog.

Dentro dela, crie dois arquivos:

- index.jsx: onde ficará o código React.
- dialog.style.css: onde aplicaremos os estilos da modal.
- Em index.jsx, comece criando um componente com:

```JavaScript
export function Dialog() {
  return (
    <React.Fragment>
      <button>Show the dialog</button>
      <dialog>
        <p>This is a dialog</p>
        <button>Close</button>
      </dialog>
    </React.Fragment>
  );
}
```

2. Tornando o componente funcional com useRef:

Importe o hook useRef do React:

```JavaScript
import { useRef } from 'react';
```

Crie uma constante para guardar a referência da dialog:

```JavaScript
const dialogRef = useRef(null);
```

Adicione a prop ref={dialogRef} no elemento `<dialog>`.

Crie duas funções para abrir e fechar a modal:

```JavaScript
const openDialog = () => dialogRef.current?.showModal();
const closeDialog = () => dialogRef.current?.close();
```

3. Conectando os botões aos eventos:

Altere os botões da modal para que eles chamem as funções declaradas:

```JavaScript
<button onClick={openDialog}>Show the dialog</button>
...
<button onClick={closeDialog}>Close</button>
```

4. Estilizando a modal:

No arquivo dialog.style.css, adicione:

```JavaScript
dialog::backdrop {
  background-color: #000;
  opacity: 0.6;
}
```

Importe esse arquivo no index.jsx com:

```JavaScript
import './dialog.style.css';
```

5. Usando o componente no seu app:

Importe e use o componente Dialog dentro do App.jsx, de preferência abaixo do header:

```JavaScript
import { Dialog } from './components/Dialog';

function App() {
  return (
    <>
      <Header />
      <Dialog />
      ...
    </>
  );
}
```

Com essa estrutura, você criou um componente reutilizável e funcional com React, usando a abordagem declarativa que o React recomenda. No próximo passo, você poderá conectar essa modal ao botão de adicionar tarefa e incluir um formulário.

Boa prática e até a próxima etapa!

### Aula 1 - O que aprendemos?

Nesta aula, aprendemos:

- A importância de analisar e entender o código existente antes de adicionar funcionalidades.
- Como configurar o ambiente de desenvolvimento ao clonar um projeto e instalar dependências com npm.
- A executar scripts npm como npm run dev para iniciar projetos, garantindo que as dependências estejam instaladas.
- A importância de utilizar um servidor local para visualizar projetos em desenvolvimento.
- A criar um componente dialog em React, utilizando a tag semântica dialog do HTML.
- A transição de manipulação imperativa para declarativa em React, evitando o uso de addEventListener.
- A utilizar o hook useRef no React para manipular elementos do DOM de maneira declarativa.
- A ajustar estilos em CSS, utilizando notação hexadecimal para cores.

## Aula 2 - Efeitos colaterais

### Aula 2 -  - Vídeo 1
### Aula 2 -  - Vídeo 2
### Aula 2 -  - Vídeo 3
### Aula 2 -  - Vídeo 4
### Aula 2 -  - Vídeo 5
### Aula 2 -  - Vídeo 6
### Aula 2 -  - Vídeo 7
### Aula 2 -  - Vídeo 8
### Aula 2 -  - Vídeo 9
