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

### Aula 2 - Quem controla o estado - Vídeo 1

Transcrição  
Já estamos encaminhados, nossa modal e nosso dialogue já funcionam como deveriam. Agora, precisamos discutir um ponto importante: no Chrome, temos o botão "show the dialogue" que abre a modal e um botão para fechar, que é o oposto. Isso foi implementado para entendermos como o dialogue e o useRef funcionam. No entanto, chegou o momento de conectar o comportamento dessa modal a um botão que não está diretamente vinculado a ela.

O que podemos considerar inicialmente? Podemos ir ao app.jsx e, em vez de manter o FAB button lá, copiá-lo para o local correto. No app.jsx, na linha 79, podemos copiar e mover o botão para o local desejado, organizando-o adequadamente. Isso resolveria o problema, mas queremos adotar uma abordagem ligeiramente diferente. Precisamos separar o comportamento, ou seja, a regra de negócio, da regra de exibição. Queremos que o dialogue não contenha a regra de negócio e não controle o estado internamente, deixando essa responsabilidade para quem consome o componente.

Modificando o Componente FabButton

Vamos fechar tudo que está aberto, exceto o app.jsx, que foi fechado acidentalmente. Queremos interagir com o FAB button (Float Action Button). Atualmente, ele só recebe children, mas queremos passar um evento de clique para reagir quando alguém clicar no botão. Podemos usar o spread operator para pegar as outras props e espalhá-las no botão, já que ele, além do onClick, aceita várias props que não queremos passar uma a uma. Vamos usar rest para isso. Assim, todas as props passadas para o FAB button serão aplicadas ao botão nativo.

Primeiro, vamos modificar o componente FabButton para aceitar propriedades adicionais usando o operador spread:

```JSX
export function FabButton({ children, ...rest }) {
    return (
        <button className='fab' {...rest}>
            {children}
        </button>
    )
}
```

Agora, no jsx, na linha 79, podemos passar um evento de clique. Como não estamos usando TypeScript e não temos autocomplete, precisamos digitar corretamente: onClick, com "on" minúsculo e "Click" com "C" maiúsculo. Para testar se está funcionando, podemos usar um console.log. Ao clicar, faremos um console.log de "alternar modal".

```JSX
<FabButton onClick={() => {
    console.log('alternar modal')
}}>
  <IconPlus />
</FabButton>
```

Alternando o Estado de uma Modal

Quando falamos em alternar, referimo-nos à ação de abrir ou fechar uma árvore de componentes. Se a árvore está fechada, ela deve ser aberta, e se está aberta, deve ser fechada. Queremos apenas alternar esse estado, portanto, vamos alternar a modal.

No navegador Chrome, ao clicar no botão, o ajuste que fizemos no código já nos permite realizar essa ação. Podemos controlar essa modal com um simples estado booleano no React. O que isso significa?

Voltando ao nosso código principal, podemos utilizar o useState. O useState é responsável por armazenar o estado dessa modal. Por padrão, ela começa como false, ou seja, está fechada quando a aplicação é carregada. Utilizamos a técnica de destructuring para pegar o valor do estado. Chamamos o valor de showDialog, e a função que altera o estado de setShowDialog.

Primeiro, precisamos importar o useState:

```JSX
import { useState } from 'react'
```

Em seguida, definimos o estado inicial da modal:

```JSX
const [showDialog, setShowDialog] = useState(false)
```

Podemos criar uma função que alterna esse valor. A função toggleDialog irá inverter o valor atual, utilizando setShowDialog para negar o estado atual. Isso é feito com JavaScript puro: se o estado está true, ele se torna false, e vice-versa.

```JSX
const toggleDialog = () => {
    setShowDialog(!showDialog)
    console.log('alternar modal')
}
```

No clique do botão, em vez de exibir uma função direta, chamamos toggleDialog. Isso cuidará do cenário de alternar o valor.

```JSX
<FabButton onClick={toggleDialog}>
  <IconPlus />
</FabButton>
```

Como nossa abordagem é declarativa, podemos mover a dialog para perto do botão fab, pois estão relacionados. Passamos uma prop chamada isOpen, que será o valor de showDialog. Se showDialog é true, a modal está aberta.

```JSX
<Dialog isOpen={showDialog}/>
```

Agora que temos esse mecanismo para gerenciar o estado, queremos reagir a essa alternância. Ou seja, quando o valor mudar de true para false ou de false para true, queremos abrir ou fechar a modal de fato. Para isso, precisamos conhecer outro hook do React que observa determinadas situações. Vamos explorar como reagir às mudanças desse estado na sequência. Nos encontramos na próxima etapa.

### Aula 2 - Conhecendo o useEffect - Vídeo 2

Transcrição  
Vamos prosseguir e adicionar mais um hook do React ao nosso conjunto de ferramentas. Desta vez, estamos falando do useEffect. Queremos usar um efeito, em tradução literal livre, que acabamos de criar. Basicamente, queremos gerar efeitos. Se olharmos a descrição na documentação, que está em react.dev, é a mesma coisa que fizemos para usar o useRef. Abra a busca e digite useEffect. O "F" aparece duas vezes, então é E-F-F-E-C-T, useEffect. A definição diz que esse React Hook permite sincronizar um componente com um sistema externo. Lembrando que a ideia do nosso componente é não conter regra de negócio. Ou seja, a regra de negócio, como se a modal está exibida ou não, fica do lado de fora. Uma vez que alguém toma essa decisão, nossa modal, o diálogo em si, apenas reage.

Vamos entender como esse hook funciona. No VS Code, no index.jsx da modal, do nosso diálogo, o que faremos? A primeira coisa é receber aquele valor que estamos passando. No app.jsx, estamos passando o isOpen, então vamos capturá-lo aqui.

```JSX
export function Dialog({ isOpen }) {
```

Implementando o useEffect no componente
Repare que dentro dos parênteses já abrimos as chaves para fazer o destructuring e pegar apenas o que queremos. Logo após usar o useRef, chamaremos o useEffect. O VS Code já importou para nós.

```JSX
import React, { useEffect, useRef } from "react";
```

Agora, precisamos passar dois parâmetros: o efeito em si, ou seja, uma função, e a lista de dependências como segundo argumento. Primeiro, passamos uma arrow function e depois um array de dependências. No nosso caso, queremos gerar esse efeito toda vez que nossa dependência mudar. Qual é a nossa dependência? isOpen. Toda vez que esse valor mudar, queremos gerar esse efeito.

```JSX
useEffect(() => {

}, [isOpen])
```

Vamos gerar um console.log e colocar primeiro uma pergunta: "Deveríamos mostrar a modal?" Em seguida, faremos o console.log do valor dessa variável, isOpen.

```JSX
useEffect(() => {
    console.log('Deveríamos mostrar a modal?', isOpen)
}, [isOpen])
```

Testando o comportamento do useEffect

Chamamos o useEffect e passamos um array, ou um item do nosso array de dependências. Toda vez que isOpen mudar, ele gerará esse efeito. Vamos testar. Voltamos ao Chrome, na aplicação que está rodando na porta 5173, recarregamos a página e ele mostrou aqui agora, por padrão, duas vezes. Se clicarmos, precisamos remover o showTheDialog. Vamos removê-lo para não confundir nosso processo. Vou tirar isso aqui e comentar. Podemos deixar assim por enquanto. Apenas salvei para removê-lo de lá. Quando clicamos no botão, ele aparece: "Alternar modal", que está no nosso clique. "Deveríamos alternar a modal, true." Se clicarmos novamente, a mesma coisa, "false". Já estamos reagindo a efeitos colaterais, ou seja, toda vez que o valor muda, aquela função será executada.

Se ela será executada, o que queremos fazer? Vamos fazer um if tradicional. Se está aberta, ou seja, se queremos abrir essa modal, podemos chamar a função openDialog diretamente. Se isso for true, abre.

```JSX
useEffect(() => {
    console.log('Deveríamos mostrar a modal?', isOpen)
    if (isOpen) {
        openDialog()
    }
}, [isOpen])
```

Sincronizando o estado do componente

Vamos voltar e testar. Recarregamos, clicamos e funcionou, ele abriu. Mas quando clicamos em fechar, ainda estamos dessincronizados. Se clicarmos novamente, "Deveríamos alternar modal, false". Agora, para abrir a modal, temos que clicar novamente. Se fecharmos por fora, o valor está true. Se clicarmos, ele fecha. Repare que agora estamos dessincronizados. Por quê? Se estamos deixando o estado, quem vai controlar o estado, quem está usando a modal, temos que dizer que, da mesma forma que alguém define se a modal está aberta, essa mesma pessoa também deveria fazer algo no onClose. Ou seja, quando essa modal for fechada.

De onde saiu esse onClose? Ainda não saiu, estamos criando agora. O que queremos fazer? No onClose, vamos fazer um ToggleDialog, que vai inverter. Agora, o que precisamos fazer é, no nosso diálogo, receber o onClose.

```JSX
export function Dialog({ isOpen, onClose }) {
```

Implementando a função de fechamento

Um botão de fechar, vamos chamar essa função que estamos recebendo via prop. Então, se alguém chamar o onClose, ao clicar, nós chamamos o onClose.

```JSX
<button autoFocus onClick={onClose}>Close</button>
```

Precisamos interagir com ele no nosso cenário: se isOpen é verdadeiro, abre; caso contrário, fecha o diálogo.

```JSX
useEffect(() => {
    console.log('Deveríamos mostrar a modal?', isOpen)
    if (isOpen) {
        openDialog()
    } else {
        closeDialog()
    }
}, [isOpen])
```

Verificando a sincronização do estado

Basicamente, é isso: se for verdadeiro, abre o modal; se for falso, fecha.

Vamos verificar se isso agora está sincronizado corretamente. Voltamos ao Chrome, recarregamos a página, clicamos em adicionar, ou seja, clicamos no botão e ele abriu o modal. Clicamos em fechar, o modal abriu e alternou o valor. Se clicarmos novamente no botão de adicionar, agora o fechar funciona, ou seja, está sincronizado. Por quê? A fonte de verdade sobre esse modal, sobre esse diálogo, não é mais interna. Ou seja, o diálogo por si só apenas recebe isso e reage. Quem controla o estado é o nosso app.jsx. Esse é o tipo de técnica que chamamos de elevar o estado. Não queremos que o nosso diálogo conheça isso; queremos delegar para quem está usando o modal. Quem está usando o modal, o app.jsx ou qualquer outro componente, é quem deve cuidar desse estado. O diálogo não fará isso porque não queremos ter regra de negócio. Não queremos ser nós a decidir quando estará aberto ou não. Queremos receber um valor que indica se está aberto ou não e chamar uma função que será implementada se alguém clicar no botão de fechar.

Concluindo a implementação e próximos passos

Repare na inversão que fizemos: tiramos essa responsabilidade do diálogo e a elevamos para o app.jsx. Fizemos dessa forma, mas existem várias maneiras de construir modais usando React, muitas mesmo. Trouxemos essa forma específica porque queríamos passar por esses dois hooks, o useRef e o useEffect, para que possamos conhecer essas ferramentas e adicioná-las ao nosso cinto de utilidades. Agora, já estamos mais fluentes no React, ou seja, nosso repertório está aumentando. Já conhecemos o useState, o useRef e o useEffect quando temos uma rede de dependência.

Deixamos como referência um vídeo sobre o useRef, e claro que o Careca Barbudo também deixou um de referência sobre o useEffect. Há uma aula extra na Alura que fala exatamente sobre isso, hooks do React e useEffect. Se quisermos fazer um mergulho profundo e entender todo o poder do useEffect, porque só vimos uma parcela dele, podemos assistir a esse vídeo.

Para já, o que queríamos fazer era elevar esse estado. Não queremos que o diálogo seja responsável por controlar esse estado, mas sim o componente mais acima. Com isso, já concluímos o que tínhamos para fazer neste momento, mas ainda há bastante coisa para implementar, como a lógica inteira desse CRUD: adicionar tarefas, remover tarefas e editar tarefas também. Portanto, por enquanto, era isso. Vamos lá, ainda há bastante coisa para rodar.

### Aula 2 - Para saber mais: useRef

Salve o/

Continuando firme na missão de explorar os Hooks do React, hoje vamos entender de forma leve e direta o useRef, um daqueles Hooks que, quando bem usados, resolvem vários probleminhas que poderiam dar dor de cabeça. Bora dominar mais esse?

Primeiro, o que é o useRef?

O useRef é um Hook do React que permite armazenar um valor ou referenciar elementos do DOM sem causar re-renderizações no seu componente. É tipo aquele bloquinho de anotações que você deixa ao lado do código pra guardar algo sem que o React precise reagir visualmente.

Como usar?  
Para usar o useRef, você primeiro o importa:

```JSX
import { useRef } from 'react'; 
```

Depois cria a referência:

```JSX
const minhaRef = useRef(valorInicial); 
```

O valor inicial (valorInicial) pode ser qualquer coisa (número, objeto, array, até mesmo null). Importante: esse valor só é definido na primeira renderização.

Exemplos práticos

Guardar valores sem causar re-render  
Vamos supor que você queira guardar quantas vezes um botão foi clicado, mas sem re-renderizar o componente a cada clique. Olha só que tranquilo:

```JSX
function ContadorCliques() { 
const contadorRef = useRef(0); 
 
function handleClick() { 
contadorRef.current += 1; 
alert(`Você clicou ${contadorRef.current} vezes!`); 
} 

return <button onClick={handleClick}>Clique aqui</button>; 
} 
```

Percebeu que não causa re-render? Maravilhoso, né?

Referenciando elementos do DOM  
Outra utilidade incrível é manipular diretamente elementos do DOM. Vamos ver um exemplo clássico:

```JSX
function FocarInput() { 
const inputRef = useRef(null); 
function handleClick() { 
inputRef.current.focus(); 
} 
return ( 
<> 
<input ref={inputRef} /> 
<button onClick={handleClick}>Focar input</button> 
</> 
); 
} 
```

Clicou, focou! Simples assim.

Coisas importantes sobre o useRef

- O .current do ref pode ser alterado diretamente sem re-renderizar o componente.
- Não leia nem escreva ref.current durante a renderização do componente, pois pode causar comportamento imprevisível.
- Se precisar usar um ref em um componente personalizado, você precisa passar a ref com a técnica chamada "forwardRef". (confere mais no [vídeo sobre useRef aqui](https://www.youtube.com/watch?v=BwRxBGsT_f0)).

Dicas práticas e boas práticas

- Use refs para dados que não afetam a interface visual diretamente.
- Evite usar refs para dados que precisam ser exibidos ou causar atualizações visuais. Use o estado (useState) pra isso.

Problemas comuns

Um problema comum ao tentar usar refs é tentar atribuir diretamente a componentes personalizados:

```JSX
// errado 
const meuRef = useRef(null); 
<MyComponente ref={meuRef} /> 
```

Se precisar fazer isso, precisa usar o forwardRef. Dá uma conferida na [documentação oficial](https://react.dev/) ou no vídeo [useRef: como funciona esse React Hook](https://www.youtube.com/watch?v=BwRxBGsT_f0), disponível no canal da Alura, para entender mais sobre isso!

### Aula 2 - Criando um componente reaproveitável - Vídeo 3

Transcrição  
Já refatoramos nosso componente e agora temos uma modal funcional. No entanto, atualmente, o conteúdo dela está fixo. Nosso objetivo é criar um componente reaproveitável, sem regras de negócio embutidas. Vamos continuar nessa direção.

Para começar, vamos definir a estrutura básica do nosso componente Dialog. Inicialmente, podemos criar o componente com as propriedades isOpen, onClose e children, que serão passadas de fora:

```JSX
export function Dialog({ isOpen, onClose, children }) {
    return (
        <dialog open={isOpen} className="dialog">
            <div className="btn-close-wrapper">
                <button autoFocus onClick={onClose} className="btn-close">
                    <IconClose />
                </button>
            </div>
            {children}
        </dialog>
    );
}
```

Importando e utilizando ícones

Ao recarregar a página, verificamos que não há erros no console. Vamos seguir com a estilização da modal no Figma. A primeira coisa que precisamos é do ícone de fechar. No arquivo de preparação do ambiente, há um arquivo com todos os ícones que utilizaremos, incluindo outros que também serão necessários. Podemos importar o ícone de fechar:

```JSX
import { IconClose } from "../icons";
```

Voltando ao dialog, não queremos mais exibir o parágrafo fixo. Queremos que ele seja dinâmico, vindo de fora. Sabemos como fazer isso no React. Vamos cortar o parágrafo e colá-lo no app.jsx. Em vez de fechar o dialog diretamente, vamos passar o parágrafo como children. Isso é feito pegando a propriedade children que o React injeta, e renderizando-a dentro do componente.

```JSX
<Dialog isOpen={showDialog} onClose={toggleDialog}>
    <p>This modal dialog has a groovy backdrop!</p>
</Dialog>
```

Estilizando a modal no Figma

Após salvar, testamos para ver se funciona. Está rodando no S5173, e ao clicar em exibir, continua funcionando, mas agora de forma reaproveitável.

No Figma, precisamos trocar a cor. O cinza utilizado é 54D4D. Vamos ajustar isso no dialog.styles, trocando de 0 para 54D4D. Ao voltar para a aplicação, vemos que está mais próximo do desejado.

Precisamos também mudar o background da modal. No Figma, o background é 1e1e1e. Vamos criar um seletor CSS para isso, evitando estilizar diretamente o HTML. Usaremos .dialog e aplicaremos background-color: #1e1e1e.

```CSS
.dialog {
    background-color: #1E1E1E;
    border: none;
    border-radius: 16px;
    padding: 16px;
}
```

Ajustando bordas e botões

Vamos ajustar o className para dialog e verificar se funcionou. No checklist, já está mais escurecido.

Precisamos mexer na borda, que é arredondada. No Figma, o corner radius é de 16 pixels, e não há borda. Vamos aplicar border: none e border-radius: 16px no nosso dialog.

Por fim, ajustaremos o botão de fechar, que fica na extrema direita. Em vez de exibir o texto "close", vamos usar o ícone de fechar que pegamos no arquivo de preparação do ambiente. O ícone é um SVG e deve ser posicionado corretamente à direita.

O que podemos fazer é organizar o HTML para que fique mais estruturado. Vamos criar uma div dentro da seção de dados e atribuir a ela um class name chamado close-btn-wrapper, que será responsável por envolver o nosso botão de fechar. Aqui, estamos lidando com CSS puro, e existem várias maneiras de alinhar à direita. Neste caso, um text-align à direita já resolverá o problema.

```CSS
.close-btn-wrapper {
    text-align: right;
}
```

Finalizando a estilização

Queremos também estilizar esse botão, então adicionaremos mais um class name. Vamos quebrar a linha para melhorar a legibilidade, adicionando autofocus, clique e class name btn-close. Agora, vamos estilizar. Inicialmente, mencionamos close-btn-wrapper, mas vamos reorganizar para que faça sentido semanticamente. Em vez de close-btn, usaremos btn-close-wrapper, o que agora faz sentido.

```CSS
.btn-close {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
```

Vamos ajustar o nosso estilo na área de style. No index, vamos inverter btn por close, resultando em btn-close-wrapper e btn-close. Isso foi feito para manter a consistência entre btn-close e o sufixo wrapper. Agora, o que queremos fazer com o btn-close é definir um background-color transparente, remover a borda com border: none e alterar o cursor para pointer. Isso deve ser suficiente para alcançar o resultado desejado.

No Chrome, ao passar o mouse sobre o botão, ele já exibe o ícone de mãozinha, e o clique ainda funciona. Estamos quase lá. Precisamos verificar se o espaçamento interno está correto. No elemento dialog, o padding padrão é de 16 pixels para todos os lados. No Figma, o botão de fechar tem 8 pixels de espaçamento para cima e 16 para baixo. Podemos manter como está ou definir explicitamente um padding de 16 pixels no CSS para garantir consistência.

Ajustando opacidade e finalizando

Olhando no Figma, parece que é isso. O conteúdo interno da modal vem de fora, então não precisamos estilizar essa parte no componente dialog. Com isso, conseguimos deixar a modal na nossa dialog sem problemas. Ela já está bem parecida, recebendo o children, e agora podemos passar o input e o botão do app.jsx para dentro. Assim, temos uma modal reaproveitável e estilizada conforme o Figma.

A única coisa que falta é ajustar a opacidade, pois no Figma ela não é tão baixa. Vamos aumentá-la para 85, o que a deixará mais parecida com o design original.

```CSS
::backdrop {
    background-color: #504D4D;
    opacity: 0.85;
}
```

Agora está tudo certo para continuarmos evoluindo nossas funcionalidades.

Resumindo o que fizemos: aplicamos muito CSS. No VS Code, formatamos o documento para garantir que tudo esteja correto. Criamos o seletor dialog e aplicamos vários estilos, como cor de fundo, borda, border-radius, padding, e alinhamos o botão de fechar à direita. Estilizamos o próprio botão de fechar para remover o estilo cinza padrão do HTML. A dialog agora está estilizada, mas ainda há muito a ser feito. Vamos continuar trabalhando.

### Aula 2 - Para saber mais: useEffect e suas possibilidades

Continuando firme na nossa trilha com React, hoje vamos aprofundar em um dos Hooks mais usados e que gera muitas dúvidas (e bugs também, sejamos sinceros): o useEffect. Bora desvendar esse carinha que é fundamental pra sua aplicação funcionar lindamente!

O que é o useEffect?

O useEffect é um Hook do React que permite executar efeitos colaterais nos componentes funcionais. Efeitos colaterais são operações que afetam algo fora do componente, como buscar dados numa API, adicionar ouvintes de eventos ou modificar o DOM diretamente.

A estrutura básica é essa aqui:

```JSX
useEffect(() => { 
// efeito colateral aqui 
}, [dependências]); 
```

Mas calma, vamos explicar direitinho cada detalhe disso.

Array de dependências

Esse array mágico ([]) controla quando seu efeito vai rodar:

- Sem array: o efeito roda sempre que o componente renderizar.
- Array vazio ([]): o efeito roda só uma vez, logo após o componente montar.
- Com dependências ([variável]): o efeito roda quando uma ou mais dependências mudarem.

Array vazio - rodar uma vez só

```JSX
useEffect(() => { 
console.log("Componente montado!"); 
}, []); 
```

Perfeito pra buscar dados iniciais!

```JSX
Com dependências
useEffect(() => { 
console.log(`O valor mudou para: ${valor}`); 
}, [valor]); 
```

Sempre que valor mudar, o efeito roda novamente.

Função de cleanup (limpeza)

Às vezes, precisamos "limpar" nosso efeito pra evitar bugs e vazamentos de memória. Para isso, usamos uma função de cleanup, que é executada antes do efeito rodar novamente ou quando o componente desmontar.

Exemplo com cleanup:

```JSX
useEffect(() => { 
const handleResize = () => console.log(window.innerWidth); 
window.addEventListener('resize', handleResize); 

// Função de cleanup 
return () => window.removeEventListener('resize', handleResize); 
}, []); 
```

Aqui, ao desmontar o componente, o evento de resize é removido. Show de bola!

Cuidados importantes

- Nunca minta pro array de dependências! Se você usa algo dentro do efeito, coloque no array.
- Evite dependências desnecessárias que possam causar loops infinitos.

Quer se aprofundar ainda mais?

Dá uma conferida nesses materiais incríveis que vão reforçar seu aprendizado:

- [Entenda de vez o hook useEffect e transforme seu código React](https://medium.com/@marcosviniciosneves/entenda-de-vez-o-hook-useeffect-e-transforme-seu-c%C3%B3digo-react-39245296ef7e)
- [Alura+: Hooks do React - useEffect](https://cursos.alura.com.br/extra/alura-mais/hooks-do-react-useeffect-c1533)

### Aula 2 - Criando o Input - Vídeo 4

Transcrição  
Vamos prosseguir com o desenvolvimento da nossa aplicação. Precisamos agora evoluir a aplicação implementando o TextInput, que é um input de texto. Este componente ainda não existe na aplicação, então vamos criá-lo juntos.

Primeiramente, vamos criar um novo arquivo para o componente TextInput. O nome do arquivo deve ser TextInput, com "T" e "I" maiúsculos, dentro da pasta index.jsx. Também vamos criar o arquivo de estilo, text-input.style.css.

Criando e exportando a função TextInput

No index.jsx, logo na primeira linha, faremos um import do CSS para não esquecermos:

```JSX
import './text-input.style.css';
```

Em seguida, vamos exportar a função TextInput, com "T" e "I" maiúsculos. Esta função receberá props e retornará um input em código JSX:

```JSX
export function TextInput(props) {
    return <input />;
}
```

Tudo que recebermos em props será espalhado dentro do TextInput:

```JSX
export function TextInput(props) {
    return <input {...props} />;
}
```

E vamos sobrescrever com um className, que queremos controlar, chamado text-input:

```JSX
export function TextInput(props) {
    return <input {...props} className='text-input'/>;
}
```

Estilizando o componente TextInput

Vamos trazer esse seletor para o nosso arquivo CSS e começar a aplicar os estilos:

```CSS
.text-input {
    font-size: 16px;
    line-height: 150%;
    color: #EAEAEA;
    border-radius: 24px;
    border: 1px solid #EAEAEA;
    width: 360px;
    max-width: 100%;
    padding: 12px;
    text-align: center;
    background-color: transparent;
}
```

No Figma, ao selecionar o texto, podemos ver à direita, na seção de tipografia, que ele está como parágrafo médio. Ao clicar no ícone para editar esses estilos, vemos que a fonte é Montserrat, que é o padrão, com tamanho 16 e line-height de 150%. Vamos aplicar todas essas configurações.

Definindo propriedades adicionais e ajustes de layout

Text-input: queremos um font-size (tamanho da fonte) de 16 pixels, que pegamos anteriormente. Nosso line-height (altura da linha) é de 150%. Precisamos agora definir a cor, que será cinza claro. Vamos copiar o código hexadecimal do Figma. A cor será aplicada também no placeholder (texto de preenchimento) do text-input, já que o fundo é escuro:

```CSS
.text-input::placeholder {
    color: #EAEAEA;
}
```

Vamos agora definir o border-radius (raio da borda). O text-input terá um border-radius de 24 pixels. A borda em si será cinza claro, com 1 pixel de espessura, sólida, utilizando o código hexadecimal copiado. O padding (recuo interno) será de 12 pixels. Vamos definir que o tamanho máximo é de 100% para que não ultrapasse em telas menores. A largura será de 360 pixels, conforme indicado no auto layout do Figma.

Aplicando box-sizing e verificando a implementação

Para garantir que todos os elementos se ajustem corretamente, utilizaremos a propriedade box-sizing: border-box. Isso será aplicado globalmente no index.css, onde já temos estilos aplicados no body, como background (fundo), sem margem, e a fonte padrão. Vamos adicionar um asterisco para definir que o padrão é box-sizing: border-box:

```CSS
* {
    box-sizing: border-box;
}
```

Essa propriedade considera o espaçamento ao calcular o tamanho máximo do elemento, evitando que ele fique maior do que o desejado.

Testando o componente TextInput no aplicativo

Agora, vamos verificar se tudo está funcionando corretamente. Vamos copiar o texto que queremos passar como placeholder e inserir no nosso app.js. Vamos criar uma tag form e um text-input dentro dela:

<Dialog isOpen={showDialog} onClose={toggleDialog}>
    <form>
        <TextInput placeholder="Digite o item que deseja adicionar"/>
    </form>
</Dialog>
```

O VS Code já identificou a prop (propriedade) que queremos passar: placeholder. Lembrando que, da forma como fizemos, recebemos props e as passamos adiante, permitindo que qualquer propriedade, como onChange, onBlur, ou id, seja utilizada.

Ajustando detalhes de estilo e layout

Vamos verificar como ficou. O fundo não está com a cor desejada, então ajustaremos para que o background-color (cor de fundo) seja transparente. No Figma, o texto do placeholder está alinhado corretamente, e a cor da fonte está adequada.

Há um detalhe no espaçamento entre o botão de fechar e o corpo da modal. No Figma, o espaçamento é de 10 pixels. Vamos corrigir isso criando uma div para envolver o conteúdo e aplicando um className de body:

```JSX
<div className="body">
    {children}
</div>
```

No estilo, vamos adicionar um padding de 10 pixels no .dialog .body:

```CSS
.dialog .body {
    padding: 10px 0;
}
```

Agora, o espaçamento está correto, apenas para cima e para baixo, com 10 pixels.

Nosso text-input está funcionando, e o formulário está ganhando vida, mas ainda temos mais ajustes a fazer. Vamos continuar!

### Aula 2 - Desafio: estilizando o botão

No próximo vídeo, vamos seguir com a construção do nosso formulário — e para isso, precisamos estilizar o botão “Salvar Item” de forma reutilizável, do jeitinho que o Figma está propondo.

Mas antes de te mostrar como eu fiz, vou te propor um desafio: que tal você mesmo tentar criar esse componente primeiro?

Use o que já aprendemos sobre props, estilização e componentização. Isse é um conteúdo que nós já temos, certo? Crie o botão, estilize com base no layout e teste como ele se comporta.

Isso vai te ajudar a ganhar segurança e praticar como um dev de verdade.

Feito isso, dá um play no vídeo e confere com a minha solução.

Bora praticar?

Opinião do instrutor

Deixei a forma como solucionei essa estilização no vídeo. Dá um play ;)

### Aula 2 - Finalizando o formulário - Vídeo 5

Transcrição  
Vamos iniciar a criação de um botão reaproveitável. Primeiramente, abrimos o VS Code, fechamos tudo que estava aberto e, dentro da pasta "componente", criamos um novo arquivo chamado button-index.jsx e, obviamente, o nosso estilo button.style.css.

No arquivo index, antes de começarmos a codificar, propomos um desafio: utilizar o conhecimento que já temos sobre props e estilização para criar esse componente de botão. Com acesso ao Figma, sugerimos pausar o vídeo, criar o componente, experimentar e codificar. Após finalizar, podemos comparar nossa solução com a proposta. Lembramos que não há solução errada, apenas diferentes formas de estilizar um componente desse tipo. O desafio está lançado: pause, codifique e depois compare.

Criando o componente de botão

Agora, vamos discutir como criar esse componente de botão. No index.jsx, a primeira ação é importar o CSS com:

```JSX
import './button.style.css';
```

Em seguida, exportamos a função Button, que recebe props. Vamos fazer o retorno de um botão, mas precisamos considerar que teremos children. Assim, fazemos o return de um botão com children e um className de btn.

```JSX
export function Button({ children, ...rest }) {
    return <button {...rest} className="btn">{children}</button>
}
```

Utilizamos destructuring para pegar children e o restante das propriedades, que chamamos de rest. Podemos nomear como quisermos, mas o importante é o operador. Fazemos um spread de tudo que não é children e colocamos children dentro do botão.

Estilizando o botão no Figma

No app.jsx, logo abaixo do TextInput, chamamos o nosso Button com o texto "Salvar item". O VS Code já importa automaticamente para nós.

```JSX
import { Button } from "./components/Button";
...

<Button>Salvar item</Button>
```

Vamos ao Figma para estilizar o botão. Selecionamos o botão e copiamos o background roxo primário, hexadecimal #877EED, para o button.style.css. Definimos background-color, border-radius de 24px, e removemos a borda com border: none.

```CSS
.btn {
    background-color: #877EED;
    border-radius: 24px;
    border: none;
    padding: 16px 12px;
    font-size: 16px;
    line-height: 150%;
    font-weight: 700;
    color: #FFF;
    cursor: pointer;
}
```

Verificamos o estado hover no Figma, que muda apenas a cor do fundo.

```CSS
.btn:hover {
    background-color: #544ACB;
}
```

Ajustando o estilo do botão

Após ajustes, percebemos que o font-weight estava muito alto, então reduzimos para 600 e depois para 500, para ficar mais próximo do desejado. Ajustamos o padding para 12px na horizontal, verificando se está de acordo com o Figma.

Por fim, estruturamos o botão dentro de um formulário para que fique um abaixo do outro e centralizado, conforme o design no Figma.

Criando o formulário de tarefas

Para realizar essa tarefa, existem várias abordagens possíveis. Antes de lançar o desafio, é importante destacar que estamos tomando cuidado para criar componentes sem regras de negócio. Se continuarmos construindo o formulário onde ele está, o app.jsx conhecerá a implementação, ou seja, a camada visual desse formulário. Portanto, podemos separar isso em um componente cuja responsabilidade será apenas submeter o to-do.

Atualmente, temos todo item e todo list. Vamos criar um novo arquivo todo form e criar um index.jsx. Nele, faremos o export da função todo form, que receberá uma propriedade chamada onSubmit. Quando alguém submeter esse formulário, algo será feito. Vamos retornar o JSX que já temos, retirando-o do app.jsx.

```JSX
export function ToDoForm({ onSubmit }) {
    return (
        <form action={onSubmit} className="todo-form">
            <TextInput placeholder="Digite o item que deseja adicionar" />
            <Button>Salvar item</Button>
        </form>
    )
}
```

Estilizando o formulário de tarefas

Após colar e formatar o documento, o onSubmit será configurado para chamar uma ação. A ação desse formulário será chamar a função onSubmit. Como estamos usando form e action, o próprio React Compiler cuidará para que a página não seja recarregada.

Precisamos estilizar o formulário. Podemos organizá-lo de forma adequada. Existem várias maneiras de fazer isso, e optaremos por usar o Flex. A camada de estilização não possui um único jeito certo, e o fato de haver diferentes abordagens não significa que algumas estejam erradas. Devemos apenas evitar seguir um antepadrão, algo que discutiremos durante o curso.

Desafio de organização do formulário

O desafio está lançado: organizar o formulário para exibir tudo corretamente, um elemento abaixo do outro. Se você pausou para fazer isso, ótimo! Vamos agora para a solução. No VS Code, criaremos um novo arquivo chamado todo-form.style.css, seguindo o padrão de código que estamos utilizando. Importaremos esse arquivo no todo form com:

```JSX
import './todo-form.style.css';
```

No app.jsx, chamaremos o todo form, mas não passaremos nenhuma função inicialmente. No Chrome, ao recarregar a página, pode ocorrer um erro indicando que o text input não foi definido. Isso ocorre porque não o importamos. Portanto, importaremos o text input e o button.

```JSX
import { Button } from '../Button';
import { TextInput } from '../TextInput';
import './todo-form.style.css';

export function ToDoForm({ onSubmit }) {
    return (
        <form action={onSubmit} className="todo-form">
            <TextInput placeholder="Digite o item que deseja adicionar" />
            <Button>Salvar item</Button>
        </form>
    )
}
```

Ajustando o layout do formulário

Após recarregar, se clicarmos no botão de adicionar, o formulário estará desorganizado. Vamos ajustar isso. No VS Code, adicionaremos um className ao formulário, chamando-o de todo-form para evitar colisões com outros formulários. Configuraremos o display como flex, flex-direction como column, e o gap como 10 pixels. Queremos centralizar tudo, então usaremos justify-content: center e align-items: center.

```CSS
.todo-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
}
```

No Chrome, o formulário estará mais parecido com o desejado, mas o espaçamento lateral ainda não estará ideal. Não queremos alterar o espaçamento da modal, que é de 40 pixels apenas para os lados. Portanto, o formulário terá um padding de 0 para cima e para baixo, e 40 para os lados. O gap entre os elementos é de 10 pixels.

Implementando a ação de submissão do formulário

No checklist de estudo, ao salvar, a página recarrega e não faz nada, exibindo um objeto na URL. Precisamos implementar essa ação. No app.jsx, passaremos um onSubmit para adicionar um to-do. A função addToDo será uma arrow function. Optamos por usar arrow functions por estilo de código, pois a sintaxe é mais agradável visualmente. Em termos de performance, não há diferença entre usar uma ou outra, mas é importante seguir um padrão.

```JSX
const addTodo = () => {
    console.log('precisamos add um novo todo');
}
```

No cenário atual, queremos fazer um console.log para adicionar um novo to-do. Após recarregar a página, ao abrir o formulário e clicar em salvar item, a página ainda recarrega, o que não é o comportamento desejado. O submit do formulário está tentando enviar os parâmetros, mas não está funcionando corretamente. Precisamos corrigir essa ação do formulário para que ele não recarregue a página ao ser submetido. Estamos progredindo lentamente para alcançar o cenário desejado. Agora, precisamos resolver esse bug e finalizar a implementação. Quando alguém submeter o formulário, queremos adicionar um novo to-do à nossa lista. Vamos investigar o bug para entender o que está acontecendo.

### Aula 2 - Desafio: estruturando layout

No vídeo, eu te mostrei como estruturei o layout do nosso formulário, centralizando os elementos e organizando o espaçamento entre eles.

Mas como comentei, existem várias formas diferentes de chegar no mesmo resultado — e isso é algo super comum no dia a dia de quem desenvolve interfaces.

Então aqui vai o convite: tente fazer do seu jeito.

Use flex, explore diferentes combinações de gap, padding, alinhamento… o importante é você praticar e começar a encontrar seu próprio estilo de resolver os desafios de layout.

Se quiser, compartilha a sua solução com a gente! Vai ser massa ver como você pensou e trocarmos ideias sobre outras possibilidades.

Bons estudos!

Opinião do instrutor

A solução da forma como resolvi esse desafio foi feita no vídeo "Finalizando o formulário" Se tiver com dúvida, dá um play nessa aula.

### Aula 2 - Caçando bugs e aplicando boas práticas - Vídeo 6

Transcrição  
Vamos começar a integrar os snippets de código à transcrição, seguindo a ordem didática apresentada.

Na transcrição, começamos discutindo um bug relacionado ao onSubmit no componente TodoForm. Inicialmente, o onSubmit não foi desestruturado corretamente, o que causou problemas na execução da função ao submeter o formulário.

Primeiro, vamos ver como o TodoForm foi inicialmente definido:

```JSX
export function TodoForm(onSubmit)
```

Aqui, o onSubmit foi passado diretamente como argumento, mas isso não está correto, pois precisamos desestruturar as props.

Corrigindo a desestruturação das props

Em seguida, o código foi ajustado para:

```JSX
export function TodoForm(props)
```

No entanto, ainda não estamos utilizando o onSubmit corretamente. Precisamos desestruturar as props para acessar onSubmit diretamente. O código foi então corrigido para:

```JSX
export function TodoForm({ onSubmit })
```

Agora, com o onSubmit desestruturado, podemos utilizá-lo corretamente no formulário. Vamos ver como o formulário é construído:

```JSX
export function TodoForm({ onSubmit }) {
  return (
    <form action={onSubmit} className='todo-form'>
      <TextInput placeholder='Digite o item que deseja adicionar' />
      <Button>
        Salvar item
      </Button>
    </form>
  )
}
```

Com essa estrutura, o onSubmit é passado corretamente para o formulário, permitindo que a função seja executada ao submeter.

Implementando a função toggleDialog

Voltando à transcrição, discutimos a necessidade de fechar o modal após adicionar um novo todo. Para isso, implementamos a função toggleDialog:

```JSX
const toggleDialog = () => {
  setShowDialog(!showDialog)
}
```

Essa função alterna o estado do diálogo, permitindo que o modal seja fechado após a adição de um novo item.

Garantindo a validação do formulário

Além disso, para garantir que o formulário não seja submetido sem preenchimento, adicionamos o atributo required ao TextInput:

```JSX
<TextInput
  placeholder='Digite o item que deseja adicionar'
  required
/>
```

Com isso, o formulário agora exige que o campo seja preenchido antes de permitir o envio.

Separando responsabilidades no projeto

Por fim, a transcrição menciona a separação de responsabilidades e a importância de desacoplar a lógica da apresentação visual. Isso é refletido na estrutura do projeto, onde o app.jsx gerencia a lógica, enquanto componentes como TodoForm e Dialog cuidam da apresentação.

A prática de separar responsabilidades é essencial para manter o código organizado e fácil de manter, especialmente em projetos React. Com essas correções e melhorias, o bug foi resolvido, e o comportamento do formulário e do modal está funcionando conforme esperado.

### Aula 2 - O que aprendemos?

Nesta aula, aprendemos:

- A prática de separar a lógica de negócios da lógica de apresentação em componentes React.
- O uso do hook useState para gerenciar o estado e useEffect para efeitos colaterais.
- A técnica de elevar o estado para promover um fluxo de dados claro.
- Como transformar componentes fixos em componentes reutilizáveis usando children.
- A estilização de componentes com CSS personalizados seguindo especificações de design.
- A criação de componentes de input de texto e botão reutilizáveis no React.
- O controle de submissão de formulários em React sem recarregar a página.
- A implementação da lógica de fechamento automático de modais com toggle.

### Aula 2 -  - Vídeo 8
### Aula 2 -  - Vídeo 9
