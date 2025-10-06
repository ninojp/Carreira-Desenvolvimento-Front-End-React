# Curso Alura - React: utilizando CSS Modules e Tailwind para estilização de componentes

## Aula 1 - Conhecendo etilos CSS no React

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Sejam bem-vindos a mais este curso de React na Alura. Eu sou Vinicios Neves, e estou aqui para ajudar nesta jornada de estilização de aplicativos React. Se já possuímos conhecimento prévio de React, compreendemos o funcionamento dos componentes e temos familiaridade com JSX, vamos prosseguir nesta jornada.

Explorando a estilização em aplicativos React

A primeira etapa será entender o estado da arte e o panorama de estilização de aplicativos React. Vamos explorar a principal diferença ao pensar e organizar os estilos de um site tradicional em comparação com componentes React.

Conhecendo as opções de estilização

Vamos primeiro entender com o que precisamos nos preocupar e conhecer as possíveis opções. Vamos explorar as diversas maneiras de estilizar aplicativos React, mas nos aprofundaremos em duas delas: CSS Modules e Tailwind CSS. Vamos construir o Poupaapp utilizando essas duas tecnologias, o que nos permitirá compará-las. No final, poderemos decidir qual delas preferimos.

Encorajando a prática e o aprendizado

O curso está repleto de desafios, então, se desejarmos não apenas aprender, mas também praticar, nos arriscar e nos desafiar, estamos no lugar certo. Esperamos que todos estejam tão animados quanto nós para começar a criar o Poupaapp. Estaremos aguardando no próximo vídeo e prometemos que não sairemos daqui. Vamos criar o Poupaapp e aprender sobre CSS Modules e Tailwind CSS. Vamos começar?

### Aula 1 - Preparando o ambiente: organizando o projeto

Salve o/
Seu dev careca e barbudo favorito aqui pra gente já começar com o pé direito!

Neste curso, vamos criar um aplicativo do zero inspirado no layout do PoupApp — um painel lindão de controle financeiro. E tem um detalhe: a gente vai montar esse visual de duas formas diferentes. Na Aula 2 vamos usar [CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) e na Aula 3 vamos usar [Tailwind](https://tailwindcss.com/). Assim, você vê na prática como atingir o mesmo resultado com abordagens diferentes.

Para quem é esse curso?

Se você já se vira bem com HTML, CSS e JavaScript, e já deu uns primeiros passos em React, esse curso é pra você. Aqui, o foco é visual e organização de código — não vamos entrar em lógica de backend ou integrações externas, é mão na massa no front.

O que vamos usar no ambiente de desenvolvimento

- Node.js na versão 22

- Vite na versão 7.x

- VSCode (ou seu editor de confiança, mas o VSCode facilita a vida com as extensões certas)

- [Nosso Figma oficial do PoupApp](https://www.figma.com/community/file/1529188714475409012)

A Logo do PoupApp: [logo.svg](https://raw.githubusercontent.com/viniciosneves/poupapp-css-modules/refs/heads/aula-2/src/assets/logo.svg)

Conjunto de ícones em SVG já prontos pra colar no projeto

```JSX
export const IconSearch = () => { 
return ( 
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M4.4375 12.9375C5.60417 14.1042 7.02083 14.6875 8.6875 14.6875C10.3542 14.6875 11.7708 14.1042 12.9375 12.9375C14.1042 11.7708 14.6875 10.3542 14.6875 8.6875C14.6875 7.02083 14.1042 5.60417 12.9375 4.4375C11.7708 3.27083 10.3542 2.6875 8.6875 2.6875C7.02083 2.6875 5.60417 3.27083 4.4375 4.4375C3.27083 5.60417 2.6875 7.02083 2.6875 8.6875C2.6875 10.3542 3.27083 11.7708 4.4375 12.9375ZM16.6875 14.6875L23.3125 21.3125L21.3125 23.3125L14.6875 16.6875V15.625L14.3125 15.25C12.7292 16.625 10.8542 17.3125 8.6875 17.3125C6.27083 17.3125 4.20833 16.4792 2.5 14.8125C0.833333 13.1458 0 11.1042 0 8.6875C0 6.27083 0.833333 4.22917 2.5 2.5625C4.20833 0.854167 6.27083 0 8.6875 0C11.1042 0 13.1458 0.854167 14.8125 2.5625C16.4792 4.22917 17.3125 6.27083 17.3125 8.6875C17.3125 9.5625 17.1042 10.5625 16.6875 11.6875C16.2708 12.7708 15.7917 13.6458 15.25 14.3125L15.625 14.6875H16.6875Z" fill="#F5F5F5" /> 
</svg> 
) 
} 

export const IconSavings = () => { 
return ( 
<svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M24.4375 8H27.3125V17.3125L23.5625 18.5625L21.3125 26H14V23.3125H11.3125V26H4C4 26 3.91667 25.7292 3.75 25.1875C3.58333 24.6042 3.375 23.8542 3.125 22.9375C2.875 22.0208 2.60417 21 2.3125 19.875C2.0625 18.75 1.79167 17.6042 1.5 16.4375C1.25 15.2708 1.04167 14.1875 0.875 13.1875C0.75 12.1875 0.6875 11.3542 0.6875 10.6875C0.6875 9.3125 1 8.08333 1.625 7C2.29167 5.875 3.1875 4.97917 4.3125 4.3125C5.4375 3.64583 6.66667 3.3125 8 3.3125H14.6875C15.2708 2.52083 16.0208 1.89583 16.9375 1.4375C17.8958 0.9375 18.9167 0.6875 20 0.6875C20.5417 0.6875 21 0.875 21.375 1.25C21.7917 1.625 22 2.10417 22 2.6875C22 2.9375 21.9375 3.1875 21.8125 3.4375C21.6458 3.89583 21.5208 4.41667 21.4375 5L24.4375 8ZM15.3125 10V7.3125H8.6875V10H15.3125ZM19.3125 12.6875C19.6875 12.6875 20 12.5625 20.25 12.3125C20.5417 12.0208 20.6875 11.6875 20.6875 11.3125C20.6875 10.9792 20.5417 10.6875 20.25 10.4375C20 10.1458 19.6875 10 19.3125 10C18.9792 10 18.6667 10.1458 18.375 10.4375C18.125 10.6875 18 10.9792 18 11.3125C18 11.6875 18.125 12.0208 18.375 12.3125C18.6667 12.5625 18.9792 12.6875 19.3125 12.6875Z" fill="#D6FF62" /> 
</svg> 
) 
} 

export const IconCurrency = () => { 
return ( 
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M7.5 0.84375C8.41667 0.84375 9.27083 1.02083 10.0625 1.375C10.875 1.70833 11.5833 2.1875 12.1875 2.8125C12.8125 3.41667 13.2917 4.125 13.625 4.9375C13.9792 5.72917 14.1562 6.58333 14.1562 7.5C14.1562 8.41667 13.9792 9.28125 13.625 10.0938C13.2917 10.8854 12.8125 11.5938 12.1875 12.2188C11.5833 12.8229 10.875 13.3021 10.0625 13.6562C9.27083 13.9896 8.41667 14.1562 7.5 14.1562C6.58333 14.1562 5.71875 13.9896 4.90625 13.6562C4.11458 13.3021 3.40625 12.8229 2.78125 12.2188C2.17708 11.5938 1.69792 10.8854 1.34375 10.0938C1.01042 9.28125 0.84375 8.41667 0.84375 7.5C0.84375 6.58333 1.01042 5.72917 1.34375 4.9375C1.69792 4.125 2.17708 3.41667 2.78125 2.8125C3.40625 2.1875 4.11458 1.70833 4.90625 1.375C5.71875 1.02083 6.58333 0.84375 7.5 0.84375ZM8.09375 11.3438C8.17708 11.3229 8.32292 11.2812 8.53125 11.2188C8.76042 11.1562 8.98958 11.0521 9.21875 10.9062C9.46875 10.7604 9.67708 10.5521 9.84375 10.2812C10.0104 9.98958 10.0938 9.625 10.0938 9.1875C10.0938 8.72917 9.95833 8.30208 9.6875 7.90625C9.41667 7.51042 8.88542 7.17708 8.09375 6.90625C7.51042 6.69792 7.07292 6.51042 6.78125 6.34375C6.48958 6.17708 6.34375 5.9375 6.34375 5.625C6.34375 5.39583 6.40625 5.21875 6.53125 5.09375C6.67708 4.94792 6.84375 4.84375 7.03125 4.78125C7.21875 4.71875 7.38542 4.6875 7.53125 4.6875C7.82292 4.6875 8.05208 4.75 8.21875 4.875C8.40625 5 8.54167 5.13542 8.625 5.28125C8.72917 5.40625 8.79167 5.51042 8.8125 5.59375L9.875 5.15625C9.83333 5.05208 9.75 4.89583 9.625 4.6875C9.5 4.47917 9.3125 4.28125 9.0625 4.09375C8.8125 3.88542 8.48958 3.73958 8.09375 3.65625V2.84375H6.90625V3.6875C6.48958 3.77083 6.15625 3.91667 5.90625 4.125C5.67708 4.33333 5.51042 4.55208 5.40625 4.78125C5.30208 5.01042 5.23958 5.20833 5.21875 5.375C5.19792 5.54167 5.1875 5.63542 5.1875 5.65625C5.1875 6.03125 5.26042 6.34375 5.40625 6.59375C5.57292 6.84375 5.77083 7.05208 6 7.21875C6.25 7.38542 6.5 7.52083 6.75 7.625C7 7.70833 7.21875 7.78125 7.40625 7.84375C7.92708 8.03125 8.3125 8.22917 8.5625 8.4375C8.8125 8.625 8.9375 8.88542 8.9375 9.21875C8.9375 9.59375 8.79167 9.86458 8.5 10.0312C8.20833 10.1979 7.90625 10.2812 7.59375 10.2812C7.30208 10.2812 7.05208 10.2188 6.84375 10.0938C6.63542 9.96875 6.46875 9.82292 6.34375 9.65625C6.23958 9.46875 6.15625 9.30208 6.09375 9.15625C6.05208 9.01042 6.02083 8.91667 6 8.875L4.90625 9.34375C5.05208 9.82292 5.25 10.1979 5.5 10.4688C5.75 10.7396 6.01042 10.9375 6.28125 11.0625C6.55208 11.1875 6.76042 11.2708 6.90625 11.3125V12.1562H8.09375V11.3438Z" fill="#F5F5F5" /> 
</svg> 
) 
} 

export const IconWallet = () => { 
return ( 
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M7.9375 7.21875C8.14583 7.40625 8.38542 7.5 8.65625 7.5C8.92708 7.5 9.15625 7.40625 9.34375 7.21875C9.55208 7.03125 9.65625 6.79167 9.65625 6.5C9.65625 6.20833 9.55208 5.96875 9.34375 5.78125C9.15625 5.59375 8.92708 5.5 8.65625 5.5C8.38542 5.5 8.14583 5.59375 7.9375 5.78125C7.75 5.96875 7.65625 6.20833 7.65625 6.5C7.65625 6.79167 7.75 7.03125 7.9375 7.21875ZM6 9.15625V3.84375H12.6562V9.15625H6ZM12 10.5V11.1562C12 11.5104 11.8646 11.8229 11.5938 12.0938C11.3229 12.3646 11.0104 12.5 10.6562 12.5H1.34375C0.96875 12.5 0.645833 12.375 0.375 12.125C0.125 11.8542 0 11.5312 0 11.1562V1.84375C0 1.46875 0.125 1.15625 0.375 0.90625C0.645833 0.635417 0.96875 0.5 1.34375 0.5H10.6562C11.0104 0.5 11.3229 0.635417 11.5938 0.90625C11.8646 1.17708 12 1.48958 12 1.84375V2.5H6C5.625 2.5 5.30208 2.63542 5.03125 2.90625C4.78125 3.15625 4.65625 3.46875 4.65625 3.84375V9.15625C4.65625 9.53125 4.78125 9.85417 5.03125 10.125C5.30208 10.375 5.625 10.5 6 10.5H12Z" fill="#F5F5F5" /> 
</svg> 
) 
} 

export const IconBank = () => { 
return ( 
<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"> 
<path d="M6.65625 0.15625L13 3.5V4.84375H0.34375V3.5L6.65625 0.15625ZM9.65625 6.15625H11.6562V10.8438H9.65625V6.15625ZM0.34375 14.1562V12.1562H13V14.1562H0.34375ZM5.65625 6.15625H7.65625V10.8438H5.65625V6.15625ZM1.65625 6.15625H3.65625V10.8438H1.65625V6.15625Z" fill="#F5F5F5" /> 
</svg> 
) 
} 
```

JSONs mockados com as transações e contas bancárias para a gente simular os dados

Transações: transactions.json

```JSON
[ 
{ "description": "iFood", "value": -20, "date": "2024-10-01T00:00:00-03:00" }, 
{ "description": "Papelaria Mila", "value": -80, "date": "2024-10-03T00:00:00-03:00" }, 
{ "description": "Freela (2ª parte)", "value": 1000, "date": "2024-10-03T00:00:00-03:00" }, 
{ "description": "Magazine Luiza", "value": -300, "date": "2024-10-05T00:00:00-03:00" } 
] 
```

Contas bancárias: accounts.json

```JSON
[ 
{ "bank": "Anybank", "balance": 1200 }, 
{ "bank": "Bytebank", "balance": 800 }, 
{ "bank": "Switch Bank", "balance": 1800 } 
] 
```

Variáveis CSS definindo as cores do projeto: index.css

```CSS
:root { 
/* Neutral colors */ 
--neutral-darker: #1C1D21; 
--neutral-background: #212229; 
--neutral-surface: #2A2C34; 
--neutral-header: #33353F; 
--neutral-text: #F5F5F5; 
/* Primary colors */ 
--primary-highlight: #7693FF; 
/* Secondary colors */ 
--secondary-income: #D6FF62; 
--secondary-expense: #F87828; 
} 
```

### Aula 1 - Estlizando apps React - Vídeo 2

Transcrição  
Vamos iniciar nossa discussão sobre a estilização no React. Precisamos entender que, ao criar componentes, o paradigma de estilização é diferente. O que isso significa? Não devemos mais pensar em páginas globais ou em blocos de páginas, mas sim em componentes reutilizáveis. Para que um componente seja 100% reutilizável, devemos ter cuidado com elementos externos ou outros componentes que possam afetá-lo, como ocorre no CSS tradicional.

Quando estilizamos um site para a web, geralmente temos um arquivo global, como styles.css. Às vezes, conseguimos dividir isso em arquivos menores, separados por contexto, mas, ainda assim, todo CSS é, por padrão, global. Isso nos obriga a ter cuidado com seletores amplos. Por exemplo, se selecionarmos uma tag, todas as tags selecionadas terão aquele estilo aplicado. Assim, a estilização e os elementos que podem afetar uma parte da aplicação, ou seja, o componente, ficam espalhados pelo código.

Analisando exemplos de conflitos de estilo

Se analisarmos um exemplo na tela, como o que trouxemos, temos uma classe, um seletor .card, .card-title e .card-description, e o HTML correspondente do lado esquerdo. Imagine que estamos criando um card, algo genérico, mas se outra pessoa criar um seletor .card sem cuidado, ou se a base de código for grande demais para ser lida, haverá conflitos. Teremos estilos conflitantes, o que dificultará a depuração. Portanto, o paradigma de CSS global não funciona bem com aplicações React.

Aqui está um exemplo de como isso pode ser implementado em HTML e CSS:

```HTML
<div class="card">
    <h2 class="card-title">Título</h2>
    <p class="card-description">Descrição...</p>
</div>

<div class="card">
    <h2 class="card-title">Título</h2>
    <p class="card-description">Descrição...</p>
</div>

<div class="card">
    <h2 class="card-title">Título</h2>
    <p class="card-description">Descrição...</p>
</div>
```

```CSS
.card {
    background: white;
    padding: 20px;
}

.card-title {
    font-size: 18px;
}

.card-description {
    font-size: 14px;
}
```

Explorando a estilização de componentes React

Podemos ter estilos globais, como definir uma fonte padrão ou aplicar uma fonte específica em toda a aplicação, definir o tamanho de fonte base ou cores que serão usadas globalmente. Isso é tranquilo. No entanto, quando falamos de estilização de componentes, o caminho é diferente. E é sobre esses caminhos diferentes que vamos falar agora.

No caso de componentes React, devemos pensar em quais cuidados tomar ao estilizar componentes, e não uma página inteira. Um componente deve ser autocontido, ou seja, ele mesmo gerencia seu estilo. Ele pode reagir ao estado e ter estilos diferentes baseados em uma prop (propriedade) passada, mas, via de regra, a não ser que haja uma boa exceção, o próprio componente cuida do seu estilo.

Planejando e codificando componentes autossuficientes

Por exemplo, um botão pode ter um fundo colorido normal, ser um botão outline (com fundo transparente e apenas uma borda), ou ser um botão com ícone. Podemos controlar esses estilos através de props, sem reestilizá-lo a cada uso. A ideia é que ele seja autossuficiente. Se, ao planejar e codificar um componente, percebemos que as props são muitas ou complexas, talvez seja melhor dividir o componente em partes menores. Isso facilita a manutenção e a vida útil do componente, reduzindo o risco de causar um bug.

Ao analisar um componente, como o exemplo do card, podemos planejar um CSS específico para ele, aplicando o className no estilo tradicional que já vimos em cursos anteriores. Quais cuidados devemos ter? Ao importar estilos.card.css, mesmo que esteja separado em uma pasta relacionada a um componente específico, ele ainda é global. Esses estilos podem vazar para outras partes da aplicação se não tivermos cuidado. Devemos evitar seletores muito genéricos, como title, header, footer, card. Quanto menos genéricos formos, mais difícil será conflitar o estilo sem querer.

Estruturando um componente Card em React

Aqui está um exemplo de como podemos estruturar um componente Card em React:

```JSX
// Card.jsx
import './estilos.card.css';

function Card({ title, children }) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-body">{children}</div>
        </div>
    );
}
```

Explorando técnicas de estilização no React

Falamos bastante sobre CSS tradicional e global, mas o React oferece várias ferramentas para escolhermos como aplicar estilo na aplicação. Vamos explorar essas técnicas. Primeiro, o CSS tradicional, que já mencionamos. O CSS é global, e fazemos um import para utilizá-lo. O cuidado necessário é que o estilo é global e pode vazar para outros componentes. Devemos usar convenções de nomenclatura e técnicas para evitar colisões e vazamentos indesejados.

Por exemplo, temos um style.css, importamos e está feito. O próprio Vite já sabe lidar com isso. Outra opção é o estilo inline. Isso significa abrir uma propriedade style no HTML e aplicar o estilo como se fosse JavaScript. Isso funciona bem quando queremos variar muito o estilo baseado em uma prop e outras condições.

Aplicando estilos inline em componentes

Com isso, o que ganhamos? O estilo não vaza, mas precisamos tomar cuidado, pois isso pode crescer de forma desorganizada. Vamos evitar colisões por um lado, mas isso pode gerar outros tipos de problemas. Trouxemos um exemplo para analisarmos. Nesse cenário, temos o componente botão, que possui definido o background-color, a cor, o padding, entre outros. Note que, apesar de os nomes das propriedades serem muito parecidos com o que temos no CSS, eles serão ligeiramente diferentes. Por exemplo, background-color se torna backgroundColor, com "C" maiúsculo. O VS Code possui um autocomplete muito bom para esse tipo de situação, facilitando a alteração sem medo de errar o nome de uma propriedade.

Aqui está um exemplo de como podemos aplicar estilos inline em um componente Button:

```JSX
function Button() {
    return (
        <button style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px' }}>
            Clique aqui
        </button>
    );
}
```

Utilizando CSS Modules para escopo local

O que mais temos aqui? CSS Modules. Ele é muito parecido com o estilo e o paradigma do CSS tradicional, porém, resolve um dos nossos grandes problemas: o escopo local. O que significa escopo local? Significa que o CSS de um componente não vai vazar para os outros, permanecendo bem definido. Escolhemos quais classes vamos usar, mas o próprio CSS Modules faz um trabalho para evitar colisões de nome. Ele aplica alguns ajustes, e o que será compilado no final não é a classe que colocamos, mas algo gerado pelo módulo. Isso gera nomes únicos, e começamos a importar os estilos como se fossem um objeto JavaScript. No exemplo que trouxemos, do lado esquerdo, temos o CSS normal, com um ponto botão e os estilos dentro, e um ponto botão hover, um pseudo-seletor. Quando olhamos para o componente, estamos importando styles de Botao.module.css, como se fosse um módulo CSS. Na hora de aplicar, chamamos o className e usamos styles.botao. Em vez de passar uma string, estamos passando uma propriedade de um objeto JavaScript. Isso resolve problemas de conflitos de estilos, vazamento de estilos, colisão de nomes, entre outros.

Aqui está um exemplo de como podemos usar CSS Modules em um componente Botão:

```CSS
.botao {
    background-color: #0070f3;
    color: white;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
}

.botao:hover {
    background-color: #0059c1;
}
```

```JSX
import styles from './Botao.module.css'

export default function Botao({ texto }) {
    return <button className={styles.botao}>{texto}</button>
}
```

Explorando CSS em JS e Utility First

O que mais temos? CSS em JS. É muito parecido com o conceito de usar JavaScript para compilar. Qual é o paradigma, a ideia desse CSS em JS? O próprio JSX conterá o estilo, eliminando a separação do arquivo CSS. O JSX será autossuficiente, preparado para ser dinâmico e reativo ao estado. Quando o estado muda, o estilo reflete essa alteração, evitando problemas de vazamento de CSS e colisão de nomes. O exemplo que trouxemos é o styled-components. Note que ele possui uma sintaxe específica, onde fazemos styled.button, usando um template string. O styled.button é uma função, e passamos para essa função essa string. O próprio styled-components sabe como lidar com isso. Detalhe: o styled-components está depreciado. A pessoa que mantinha o styled-components identificou que o uso estava caindo e optou por não manter mais. Porém, isso não muda a quantidade de aplicações que já utilizam essa abordagem. Vale a pena conhecer e entender como funciona. Em regra, parece muito com CSS tradicional, mas tudo está dentro do JSX.

Aqui está um exemplo de como podemos usar styled-components:

```JSX
import styled from 'styled-components';
const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'gray'};
    color: white;
`;
<Button primary>Clique aqui</Button>
```

O que mais temos aqui? Utility First. O que queremos dizer com Utility First? Em vez de escrevermos arquivos CSS, usamos classes predefinidas por uma biblioteca, aplicando qualquer estilo CSS que aplicaríamos normalmente. A ideia é que isso vai direto no componente, evitando a necessidade de criar arquivos CSS em excesso, aumentando a produtividade. No entanto, há uma curva inicial alta. Isso significa que, para pegarmos o ritmo e entendermos como funciona, leva tempo. Com tudo isso, é importante cuidar da organização do nosso código, pois quando começamos a ter estados que variam com base em props, a situação pode se complicar. No exemplo que trouxemos, estamos usando classes do Tailwind. Note que temos classes como bg-blue-500, que define o background, text-white, que define a cor do texto como branca, px-4, que define o padding horizontal como 4, e py-2, que define o padding vertical como 2. Estamos usando pequenas classes, seguindo as convenções da biblioteca escolhida, como o Tailwind. O próprio Tailwind traduz e lida com isso, preparando a aplicação para produção.

Aqui está um exemplo de como podemos usar classes do Tailwind:

```JSX
<button className="bg-blue-500 text-white px-4 py-2">
    Salvar
</button>
```

Concluindo a discussão sobre estilização no React

Era isso que queríamos discutir, oferecendo um panorama. Neste curso, vamos nos especializar em duas dessas alternativas. Vamos falar mais sobre CSS Modules e praticar, e depois, na sequência, abordaremos o Tailwind e, obviamente, praticaremos também. Esse era o objetivo da conversa: mostrar o estado da arte dos estilos CSS dentro de um aplicativo React. Agora, estamos prontos, com a bagagem bem definida, para continuar nossos estudos e aplicar os estilos na nossa aplicação. Vamos lá? Estamos esperando na sequência.

### Aula 1 - Para saber mais: aprofundando em css :local

Vamos trocar uma ideia sobre um detalhe curioso (e muito útil) do CSS Modules: o tal do :local.

Se você já mexeu com CSS Modules, sabe que eles têm essa mania boa de colocar um “hash esquisito” no final de cada classe. É a mágica que evita que o seu .container de um componente brigue com o .container de outro. E isso é lindo. Mas… nem sempre foi assim.

O caos antes do CSS Modules

Pensa comigo: antes, no CSS tradicional, tudo era global. Tudo. Qualquer classe que você escrevesse ia parar no mesmo balaio. Então bastava um .botao meio genérico pra sair quebrando layout em cantos que você nem imaginava. Era o famoso efeito borboleta do CSS — você mexe aqui, e do outro lado do projeto alguém tá gritando “quem quebrou meu header?!”.

Esse problema escalava rápido em times grandes. E foi aí que CSS Modules chegou pra salvar o dia, trazendo o conceito de escopo local. Cada arquivo de estilo virava o seu mundinho particular.

Então pra que serve o :local?

Por padrão, tudo no CSS Modules já é local. Mas o :local existe pra quando você quer deixar isso escancarado ou quando precisa misturar estilos locais e globais no mesmo arquivo.

É como se fosse uma plaquinha de “propriedade privada” dizendo: isso aqui é só desse componente, não encosta.

Um exemplo rápido

```CSS
:local(.botao) { 
background: var(--primary-highlight); 
color: var(--neutral-text); 
} 
```

Essa .botao vai virar algo do tipo .botao__3H2aX e só vai afetar o componente que importar esse CSS.

Agora, se você quiser fazer um estilo que depende de uma classe global, mas sem abrir mão do escopo local, dá pra misturar:

```CSS
:global(.dark-theme) :local(.botao) { 
background: black; 
} 
```

O .dark-theme pode vir de qualquer lugar, mas .botao continua protegido.

Onde faz sentido usar

- Quando você tá num arquivo que mistura seletores globais e locais e quer evitar confusão.
- Quando precisa que todo mundo no time entenda claramente o que é local.
- Quando quer blindar seu componente contra qualquer efeito colateral.
- No fim, o :local é mais sobre clareza do que necessidade — já que o escopo local é o padrão. Mas ele é perfeito pra evitar mal-entendidos e manter o código limpo, especialmente em times grandes.

### Aula 1 - Para saber mais: OOCSS, SMACSS, BEM e SUIT

Antes de CSS Modules e Tailwind fazerem parte do nosso dia a dia, a galera precisava se virar com outras abordagens pra manter o CSS organizado e previsível. E olha… dava trabalho. Não era só sair criando classe no impulso, porque em projetos grandes isso virava um caos rapidinho.

Foi aí que surgiram metodologias como OOCSS, SMACSS, BEM e SUIT. Todas com o mesmo objetivo: dar uma lógica e uma estrutura pro CSS, pra evitar aquele efeito dominó onde uma alteração inocente num lugar quebrava o layout inteiro.

Vamos entender cada uma delas:

- OOCSS significa Object-Oriented CSS. A ideia é separar estrutura (layout, espaçamento, posicionamento) da aparência (cores, bordas, tipografia). Por exemplo, você poderia ter .media-object definindo display flex e alinhamento, e .highlight controlando apenas cor de fundo. Isso permitia reaproveitar a mesma “estrutura” com visuais diferentes sem duplicar regras.

- SMACSS vem de Scalable and Modular Architecture for CSS. É uma metodologia que organiza o CSS em categorias como Base, Layout, Module, State e Theme. Num projeto grande, isso significava ter arquivos separados para estilos globais de reset (Base), grids e cabeçalhos (Layout), componentes isolados como cards e botões (Module), classes de modificação como .is-collapsed (State) e variações visuais como .theme-dark (Theme). O ganho era saber exatamente onde procurar e alterar algo sem medo de quebrar outras partes.

- BEM é Block, Element, Modifier. Ele cria um padrão de nomenclatura pra mostrar a hierarquia e função de cada classe. Por exemplo, menu__item--active deixa claro que menu é o bloco, item é um elemento dentro dele e active é um modificador de estilo. Em uma lista complexa com vários estados, isso ajudava muito a manter a clareza de qual regra aplicava a qual parte.

- SUIT é SUIT CSS Naming Conventions, um padrão inspirado no BEM, mas mais enxuto e com prefixos. Por exemplo, Card-title indicava o elemento title dentro do componente Card, e is-loading mostrava um estado global. A vantagem era combinar clareza de escopo com nomes mais curtos e menos underscores.

Essas metodologias foram o “treinamento” que a comunidade teve pra chegar onde estamos hoje. Elas ensinaram a pensar em componentes, isolar responsabilidades e evitar que o CSS fosse uma massa única sem controle. Então, quando surgiram CSS Modules e Tailwind, a transição foi mais suave — a gente já estava acostumado a modularizar.

Saber dessas raízes não é só nostalgia de dev das antigas — é entender de onde veio o conceito de escopo e independência de estilo que usamos hoje sem nem perceber. E mesmo que você nunca vá escrever um .menu__item--active na vida, conhecer essa história ajuda a fazer escolhas mais conscientes na hora de estilizar.

E aí, bora mergulhar no que CSS Modules e Tailwind têm pra oferecer, sabendo de onde veio toda essa história?

### Aula 1 - Preparando o ambiente: dicas para aproveitar ao máximo

Primeiro: pratica, pratica, pratica. Mesmo com gabarito em vídeo ou texto, é só escrevendo código que o conteúdo gruda na cabeça.

Segundo: brinca com o projeto. Muda cor, troca fonte, testa espaçamentos diferentes. Mexer fora do “script” vai te dar muito mais domínio.

Terceiro: seja curioso(a). Quer se aprofundar em CSS Variables? [Dá uma olhada nesse artigo](https://www.alura.com.br/artigos/construa-css-magico-variaveis-nativas).

E, por último: respeita seu ritmo. Se travar, pausa, toma uma água e volta. Não tem pressa — o importante é seguir evoluindo.

Agora sim, bora aquecer os dedos e preparar o VSCode. No próximo passo, já vamos dar vida ao PoupApp.

Vida longa e próspera o/

### Aula 1 - O que aprendemos?

Nesta aula, aprendemos:

- A diferença entre estilização global e local em React.
- Os desafios do CSS global e a importância de evitar seletores genéricos.
- O uso de CSS Modules para escopo local de estilos.
- Os pros e contras dos Inline Styles em larga escala.
- O conceito de CSS em JS e styled-components.
- A metodologia Utility-first CSS com Tailwind CSS.
- A escolha da estratégia de estilização correta.
- A importância da organização e produtividade no código.

## Aula 2 - Utilizando o CSS Modules

### Aula 2 - Entendendo o CSS Modules - Vídeo 1

Transcrição  
Vamos prosseguir com nossos estudos e falar um pouco mais sobre CSS e módulos. Agora é o momento de respirarmos profundamente para fazermos um mergulho mais aprofundado. Antes de aprendermos como implementar, é importante entender por que essa técnica existe e qual foi o contexto que levou ao seu desenvolvimento. Vamos segurar a ansiedade para colocar a mão no código, pois já já faremos isso. Primeiro, vamos falar sobre CSS Modules.

Observando nossos slides, vemos que o CSS tradicional é global por padrão. Quando temos uma classe, como .botao, qualquer elemento em qualquer lugar da página que possua essa classe terá o estilo aplicado. Isso pode levar a conflitos de estilos ou colisões de nomes, onde aplicamos um estilo sem querer, resultando em bugs de tamanho ou cor que não desejamos. Precisamos então depurar, entender de onde vem o problema e ajustá-lo para que tudo fique correto. Esse é o problema que enfrentamos no dia a dia.

Exemplificando problemas do CSS tradicional

Para ilustrar, vamos ver um exemplo de como o CSS tradicional pode ser aplicado:

```CSS
/* botao.estilos.css */
.botao {
  background: red;
}
```

E como isso seria utilizado em um componente React:

```JSX
import './botao.estilos.css'

const Botao = ({ children }) => {
  return (
    <button className="botao">
      {children}
    </button>
  )
}
```

O primeiro ponto é que, sem querer, podemos afetar um elemento. Se não tomarmos cuidado, os nomes de classe podem virar uma bagunça. Isso não significa que não há solução; existem técnicas para lidar com isso, que estão disponíveis no material de apoio para quem quiser entender mais sobre essas técnicas. No entanto, se não tomarmos cuidado, a desorganização é inevitável. Precisamos seguir uma convenção para evitar esse tipo de comportamento.

Apresentando a solução com CSS Modules

A situação se complica em projetos grandes, com equipes numerosas, tornando-se cada vez mais desafiador manter essa abordagem sem perder muito tempo corrigindo problemas que deveriam ser simples. Enquanto o CSS é global por padrão, o CSS Modules é local por padrão, evitando vazamentos. Não precisamos nos preocupar com colisões de nomes, pois podemos criar uma classe .botao várias vezes sem medo, já que o CSS Modules gerencia isso.

Vamos ver como o CSS Modules resolve esse problema. Primeiro, criamos um arquivo CSS Module:

```JSX
/* Botao.module.css */
.botao {
  background-color: blue;
}
```

E importamos esse módulo no nosso componente:

```JSX
import styles from './Botao.module.css'

export function Botao({ children }) {
  return <button className={styles.botao}>
    {children}</button>
}
```

Explicando o funcionamento dos CSS Modules

No exemplo de código, vemos que é muito simples usar CSS Modules. Importamos um arquivo CSS como se fosse um objeto JavaScript e passamos um styles.botao, que referencia o seletor no arquivo Botao.module.css. Nesse cenário, temos segurança, pois não alteramos a cor, tamanho ou espaçamento de um elemento sem querer. Os componentes são isolados e mais fáceis de manter, pois são autocontidos. Mesmo que cometamos um erro, afetaremos apenas o componente específico em questão.

Quando utilizamos CSS Modules, é importante dar os devidos créditos aos criadores, Glen Maddern e Mark Dalgleish. O CSS Modules surgiu em 2015 e não foi criado do nada; inicialmente, utilizava algumas funcionalidades do Webpack para alcançar o mesmo resultado. Hoje, ele é suportado por padrão por ferramentas como Webpack, Vite (que é o que vamos usar), Parcel, entre outras. Antes, era necessário realizar um trabalho adicional para fazê-lo funcionar, mas agora, ao utilizarmos o Vite, por exemplo, ele já funciona por padrão, sem a necessidade de implementações ou instalações adicionais.

Detalhando o processo de build e isolamento

O que acontece por debaixo dos panos é que, ao aplicarmos estilos em um arquivo CSS, como botao.css, o CSS Modules cria um objeto que representa esses estilos. Ele faz um mapeamento do nome do seletor que utilizamos para a classe que o CSS Module gerou. Quando compila e transforma isso, o resultado é algo como botao___abc123, onde abc123 é um exemplo de hash. Isso garante que cada seletor e classe seja único, evitando conflitos de nome. O CSS Modules utiliza um pseudo-seletor CSS, :local, para isolar o CSS, garantindo que ele não vaze.

Para ilustrar, veja como o CSS é transformado durante o processo de build:

```CSS
/* Antes do build */
.botao { ... }

/* Depois da build */
.Botao_botao__abc123 { ... }
```

E o objeto JavaScript que representa esses estilos:

```JSX
// e o objeto JS:
const estilos = {
  botao: 'Botao_botao__abc123'
}
```

Concluindo com a aplicabilidade dos CSS Modules

O CSS Modules não foi criado apenas para React; ele também funciona com Vue, Svelte e até mesmo em aplicações vanilla, desde que utilizemos um bundler como Webpack ou Vite para lidar com essa transformação.

Agora que entendemos o contexto, a origem e o funcionamento do CSS Modules, vamos voltar ao slide onde analisamos o processo. Temos um arquivo CSS com seletores, um objeto JavaScript que o CSS Modules monta para nós, e o resultado da compilação. Essa é a mágica que acontece por debaixo dos panos, permitindo que colhamos todos os benefícios proporcionados pelo CSS Modules.

Já discutimos bastante, e agora é hora de colocar a mão no código. Vamos iniciar uma aplicação do zero, implementar uma página inteira usando essa estratégia e, enquanto implementamos, discutiremos boas práticas de estilização dentro do ecossistema do React. Nos vemos no próximo vídeo.

### Aula 2 - Iniciando o projeto - Vídeo 2

Transcrição  
Como prometido, está na hora de colocarmos a mão na massa. Como diz o ditado, "bem começado, metade feito". O que trouxemos aqui para discutir? Primeiramente, o link do Figma, que estará sempre disponível na atividade "Preparando o Ambiente".

Previamente, clicamos no botão "Open em Figma" e trouxemos para o nosso Figma pessoal a aplicação que vamos desenvolver. O nome dessa aplicação é Poupaapp, um aplicativo para poupar nosso dinheiro. Vamos focar nesta tela durante o curso e desenvolver exatamente os elementos que estão visíveis.

Configurando o ambiente com Vite

Como faremos isso? Utilizando o Vite. Na documentação do Vite, disponível em vite.dev/guide, encontramos o que é necessário para criar uma aplicação Vite do zero. O comando que procuramos já está no guia. Já acessamos anteriormente a seção "Get Started", por isso a URL está diferente. Podemos aumentar o zoom para visualizar melhor. A documentação explica o que é o Vite e, ao final, apresenta o comando npm create vite@latest. Como queremos criar uma aplicação React, podemos usar o parâmetro --template para já criar a aplicação preparada para o React.

Vamos abrir o terminal. No terminal, acessamos a área de trabalho. Já estamos no desktop. Para isso, utilizamos o comando:

> cd Desktop/

Criando a aplicação Poupaapp

Como não decoramos nada, verificamos o comando novamente: npm create vite@latest. Agora, vamos dar um nome para nossa aplicação, que será poupaapp.

O que mais faremos aqui? O uso de -- no terminal indica que estamos passando parâmetros para os comandos internos. Assim, o parâmetro chega onde precisa no Vite. Então, utilizamos --template react. No terminal, já na área de trabalho, rodamos esse comando:

> npm create vite@latest poupaapp -- --template react

O terminal informa que será necessário instalar o Vite na versão 7.1.1. Confirmamos que está tudo bem e prosseguimos.

Preparando o projeto para desenvolvimento

O Vite já preparou e fez o scaffolding da nossa aplicação, o que significa que ele criou todos os arquivos necessários. Agora, para ver isso funcionando, precisamos seguir as instruções fornecidas.

Para iniciar, precisamos entrar na pasta desejada. Vamos utilizar o comando:

> cd poupaapp

Em seguida, é necessário instalar as dependências com npm install. Vale ressaltar que existe um atalho para esse comando, pois é algo que utilizamos frequentemente no dia a dia. O atalho é npm i, apenas a letra "i", sem mais nada. Vamos utilizar esse atalho:

> npm i

Executando a aplicação e abrindo no VSCode

Ao executar o comando npm i, todas as dependências do nosso projeto serão instaladas, incluindo tudo que o Vite necessita para fazer um aplicativo React funcionar. O terminal indicará que tudo está em ordem e que foram necessários 197 pacotes para o funcionamento.

Com tudo pronto, podemos finalmente executar o comando npm run dev. Este comando irá iniciar a aplicação recém-criada, que por padrão roda na porta 5173. No terminal, ao clicar com o botão direito, há a opção de "open link", que abrirá diretamente no Chrome. Essa é a aplicação padrão que o Vite cria, algo que já vimos em cursos anteriores. Caso não tenha essa opção de clicar diretamente, basta digitar na barra de endereço localhost:5173.

> npm run dev

A próxima etapa é voltar ao terminal, abrir uma nova guia para não interromper o comando npm run dev, e abrir o Visual Studio Code a partir dessa pasta. Para isso, utilizamos o comando:

> code .

Iniciando o desenvolvimento no Figma

O VSCode abrirá com a aplicação que acabamos de criar. Não há muito conteúdo ainda, e não utilizaremos o Copilot. O VSCode indicará que está atualizado, e podemos aumentar o zoom, se necessário.

No arquivo app.jsx, temos a aplicação padrão que o Vite criou. Como mencionado anteriormente, "bem começado, metade feito", nosso aplicativo já está funcionando. O próximo passo é iniciar o desenvolvimento no Figma, começando pela barra lateral (sidebar).

Vamos desenvolver a barra lateral que contém o logo do Poupaapp e um texto indicando "desenvolvido por Alura, projeto fictício, sem fins de fomentação". Este será o primeiro trecho de código que vamos implementar. No entanto, estamos com a aplicação padrão, com muitos elementos que o Vite trouxe. Para organizar e estabelecer uma boa base para o projeto, vamos limpar o projeto no próximo vídeo.

Definiremos as cores que utilizaremos, utilizando variáveis CSS para isso. Aplicaremos um fundo padrão com uma cor mais escura quando a aplicação carregar. Em resumo, é hora de organizar a casa. Com o projeto iniciado, estamos prontos para dar nosso primeiro passo.

### Aula 2 - Inserindo variáveis de cores, logo e limpeza do projeto - Vídeo 3

Transcrição  
Vamos prosseguir com a implementação do projeto Poupaapp. Agora é o momento de limpar o projeto, removendo os elementos que o Vite traz por padrão. Também vamos adicionar as cores que utilizaremos ao longo do desenvolvimento. Na tela, temos as cores disponíveis no Figma. Para facilitar, criamos um repositório no Git que contém todas essas cores com os nomes e valores hexadecimais corretos, já no formato CSS.

Com isso em mente, vamos realizar a limpeza do projeto. No VS Code, vamos acessar o arquivo App.jsx e remover todo o conteúdo, deixando apenas o fragment do React. Adicionaremos um elemento `<h1>` com o texto "Poupaapp" para termos algum conteúdo exibido enquanto organizamos tudo. Vamos remover os imports do useState, do logo do React e do logo do Vite.

```JSX
function App() {
  return (
    <>
      <h1>Poupaapp</h1>
    </>
  )
}

export default App
```

Na pasta "assets", deletaremos o arquivo react.svg. Na pasta "public", deletaremos o arquivo vite.svg. O arquivo app.css não será mais necessário, então vamos deletá-lo. No index.css, vamos deletar todo o conteúdo, mas manteremos o arquivo.

Adicionando o logo e verificando erros

Já baixamos do Figma o logo que utilizaremos, logo.svg, e vamos colocá-lo na pasta "assets". Não utilizaremos mais o logo do React, mas sim o logo da própria aplicação Poupaapp.

Após a limpeza, verificaremos se há algum erro. No terminal, não há erros aparentes. No Chrome, ao inspecionar o console, não há mensagens de erro, indicando que está tudo correto. Podemos recarregar a página e confirmar que tudo está funcionando.

Definindo cores no CSS

Agora, vamos pegar o conteúdo do arquivo poupaapp.css, que contém a definição de todas as cores, e trazê-lo para o VS Code. No index.css, dentro do elemento :root, definiremos todas essas cores. Estamos apenas replicando o que temos no Figma. No Figma, as cores estão em português, mas aqui as trouxemos em inglês, pois o projeto será codificado em inglês.

```CSS
:root {
  /* Neutral colors */
  --neutral-darker: #1C1D21;
  --neutral-background: #212229;
  --neutral-surface: #2A2C34;
  --neutral-header: #33353F;
  --neutral-text: #F5F5F5;

  /* Primary colors */
  --primary-highlight: #7693FF;

  /* Secondary colors */
  --secondary-income: #D6FF62;
  --secondary-expense: #F87828;
}
```

Com isso, podemos ir ao nosso HTML e, no body, remover a margem padrão. Podemos também aplicar uma cor de fundo utilizando uma variável CSS. A variável que vamos usar é --neutral-background, definida na linha 4, com o valor hexadecimal #212229.

```CSS
body {
    margin: 0;
    background-color: var(--neutral-background);
}
```

Implementando a barra lateral

Vamos verificar no Chrome como ficou. Maravilha, o estilo foi aplicado, o fundo está com a cor desejada e o popup está sendo exibido. No entanto, o que combinamos de fazer foi implementar a barra lateral.

Voltando ao Figma, vamos focar na barra lateral que combinamos de criar. Já importamos a logo e fizemos o download da imagem logo.svg, que foi inserida no projeto.

Vamos começar a implementação no App. Vamos remover o h1 que colocamos anteriormente e criar um aside, que é uma tag apropriada para barras laterais. Dentro do aside, colocaremos uma img e precisamos importar essa imagem.

```JSX
import logo from './assets/logo.svg'

function App() {
  return (
    <>
      <aside>
        <img src={logo} alt="" />
      </aside>
    </>
  )
}

export default App
```

Corrigindo o caminho da imagem

Para isso, usamos o import para importar: import logo from './assets/logo.svg'. A imagem importada será atribuída ao atributo src da img. Note que não colocamos entre aspas, pois estamos usando JavaScript.

Vamos verificar se isso funcionou. No Chrome, ao acessar o endereço localhost:5173, recebemos um erro indicando que não foi possível importar ./assets/logo.svg. Provavelmente, houve um erro de digitação ou não estamos usando o caminho conforme o esperado pelo import.

Podemos consultar a documentação, mas já tínhamos esse import no código anterior. Vamos usar "Ctrl+Z" para reverter as alterações até o ponto correto. O caminho correto é ./assets/logo.svg, pois é um caminho relativo. O uso de /assets faria com que o sistema procurasse na pasta public.

Agora, refazemos as alterações, ajustando para ./assets/logo.svg. Vamos verificar novamente no Chrome. Agora sim, a imagem foi exibida corretamente. Ajustamos o zoom com "Ctrl+0" para visualizar o layout sem zoom.

Concluindo a fundação do projeto

Começamos a construir nosso aside e já importamos as cores. A fundação está feita, e vamos continuar evoluindo nossa aplicação. Até agora, não alteramos os CSS Modules, mas, como um spoiler, faremos isso em breve.

### Aula 2 - Importando a fonte - Vídeo 4

Transcrição  
Vamos continuar com nosso projeto. Agora, vamos trazer a fonte que utilizaremos para toda a tipografia do Poupaapp. No Figma, na parte superior, há uma descrição e um link para a fonte. O nome dessa fonte é Work Sans. Gostaríamos de explicar como proceder caso não tenhamos o link direto. Se soubermos o nome da fonte, podemos pesquisar no Google por "Work Sans Google Font". Mesmo que digitemos incorretamente, o Google geralmente corrige e nos direciona para a página correta no Google Fonts. Podemos também pesquisar pelo nome diretamente no site, mas o resultado será o mesmo.

Normalmente, ao inserir o nome da fonte seguido de "Google Font", se ela estiver disponível, o Google nos mostrará. Na página, podemos ver exemplos da tipografia, desde a versão mais fina até a com maior peso. No canto superior direito, há um botão "Get Font", no qual clicaremos. Ao acessar essa página, o Google oferece a opção de fazer o download ou obter o "Get Embed Code". Isso indica como lidaremos com a fonte e como a importaremos para nosso código. Podemos usar o @import do CSS ou inserir o link diretamente no index.html. Optaremos por inserir o link no index.html por preferência pessoal, mas o @import também é uma opção válida.

Configurando o arquivo index.html

Vamos abrir o index.html e alterar o title, que atualmente está como "Vite mais React", para o nome do nosso projeto, Poupaapp.

```html
<title>Poupaapp</title>
```

Logo abaixo do title, colaremos o código que copiamos. Sem modificar, clicaremos com o botão direito e pediremos ao VS Code para formatar o documento, o que ajustará as quebras de linha e a indentação. Existem dois pré-conexões para o Google Fonts, e no final, ele traz a Work Sans com todos os pesos disponíveis.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

Ainda há mais uma tarefa a ser realizada.

Aplicando a fonte Work Sans no CSS

Para aplicar a fonte Work Sans, vamos criar um seletor e definir a fonte Work Sans com a propriedade de fonte Optical Size em auto. Vamos copiar apenas essas duas linhas, sem incluir o Weight e o Style. No VS Code, em vez de aplicar no body, vamos usar um asterisco para aplicar a todos os elementos, sem exceção. Assim, todos terão a fonte Work Sans. Se essa fonte falhar, será utilizada a primeira fonte sem serifa disponível.

```CSS
* {
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
}
```

Também vamos definir o Optical Size como auto. Além disso, vamos adicionar box-sizing: border-box para todos os elementos. Isso ajudará no ajuste de padding, margin e larguras, garantindo que tudo fique bem alinhado. Este é um exemplo de CSS puro.

```CSS
* {
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
  box-sizing: border-box;
}
```

Testando a aplicação da fonte

Após importar a fonte Work Sans, podemos testá-la. No arquivo App.jsx, ao lado do Assign, vamos criar um h1 e chamá-lo de "Poupaapp".

```html
<h1>Poupaapp</h1>
```

Ao salvar, podemos verificar se o estilo foi aplicado. Ao inspecionar o elemento no navegador, na aba de Styles, podemos confirmar que a fonte Work Sans foi aplicada. Se essa falhar, uma fonte sem serifa será utilizada. A importação da fonte foi bem-sucedida.

Planejando o próximo passo no Figma

Nosso próximo passo é no Figma. Observando a versão desktop do resumo financeiro, temos um container de 1.200 pixels que centraliza a aplicação. Se a largura da tela for maior que 1.200 pixels, o container será centralizado e a página poderá crescer lateralmente, evitando que fique esticada em telas mais largas.

Esse é o componente que vamos criar, e em breve vamos trabalhar com CSS Modules. Já importamos a fonte Work Sans, e o container que vamos criar será o tema do próximo vídeo. Estaremos esperando por vocês lá, prometemos não sair daqui.

### Aula 2 - Criando o container principal - Vídeo 5

Transcrição  
Vamos criar o container da nossa aplicação. Como vamos pensar nesse container como um componente React, criaremos uma nova pasta chamada "components". Dentro dessa pasta, criaremos uma subpasta chamada "Container" com a primeira letra maiúscula, pois é um componente React. Dentro da pasta "Container", criaremos um arquivo chamado index.jsx.

Agora, vamos criar o componente de fato. Vamos exportar uma constante chamada Container (com C maiúsculo), que será uma arrow function. Este será um componente React que receberá children, ou seja, tudo o que estiver dentro dele será renderizado.

Definindo o componente Container

Começamos definindo o componente Container como uma função vazia:

```JSX
export const Container = () => {

}
```

Em seguida, vamos adicionar a capacidade de receber children:

```JSX
export const Container = ({ children }) => {

}
```

Faremos um return entre parênteses para permitir múltiplas linhas. Vamos criar uma div, pois este container não tem valor semântico, ele é apenas visual. Renderizaremos tudo o que ele receber.

```JSX
export const Container = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
```

Integrando o Container ao componente principal

Em seguida, vamos ao App e, em vez de usar um fragment, podemos usar o nosso Container. O VS Code já sugere importar o componente com import Container from, a partir do caminho components/Container.

```JSX
import { Container } from './components/Container'
```

Agora, podemos usar o Container no nosso componente principal:

```JSX
return (
    <Container>
      <aside>
        <img src={logo} alt="" />
      </aside>
      <h1>Poupaapp</h1>
    </Container>
)
```

Não há estilo aplicado ainda, mas neste momento, não devemos ver nada quebrando. Ao abrir o inspect novamente, verificamos que no console está tudo correto. A página está funcionando corretamente.

Criando e importando o módulo CSS

Agora, é hora de colocar em prática o que vimos na teoria. Dentro da pasta "Container", criaremos um novo arquivo chamado container.module.css. É importante que o nome seja exatamente .module.css no singular. O que vier antes disso fica a critério de cada um. Já copiamos o nome desse arquivo, pois vamos importá-lo como se fosse JavaScript.

```JSX
import styles from './container.module.css'
```

Há um detalhe sobre convenções: algumas pessoas usam a convenção de colocar a primeira letra maiúscula no nome do arquivo CSS. No entanto, a convenção que seguimos é usar sempre nomes de arquivos CSS em minúsculas. Isso é apenas um hábito, mas é possível encontrar por aí nomes com a primeira letra maiúscula, já que é um CSS de um componente, e o componente tem a primeira letra maiúscula. A escolha da convenção é livre. O mais importante é a consistência: ou usamos sempre minúsculas, ou sempre maiúsculas.

Aplicando estilos ao Container

Agora, vamos ao className. Aqui, é importante lembrar que não usamos como uma string, mas como um objeto. Faremos styles.container. Note que essa classe ainda não existe, pois ainda não a criamos.

```JSX
<div className={styles.container}>
    {children}
</div>
```

Se analisarmos o código e a aplicação em funcionamento, não há erros. Por que não há erros? Porque o arquivo que estamos importando existe. O módulo CSS está gerando o styles porque o arquivo existe. No entanto, o .container está indefinido, não existe. O que faremos agora? Vamos criar esse estilo .container.

```CSS
.container {
    
}
```

Devemos definir que, no máximo, o .container deve ter 1200 pixels de largura.

```CSS
.container {
    max-width: 1200px;
}
```

Além disso, queremos aplicar uma margem de 0 para cima e para baixo, e automática para a esquerda e para a direita. Isso centralizará o conteúdo.

```CSS
.container {
    max-width: 1200px;
    margin: 0 auto;
}
```

Outra configuração que queremos aplicar é definir um comportamento de display: flex para os elementos filhos.

```CSS
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
}
```

Também queremos adicionar um espaçamento entre os filhos de 24 pixels. De onde veio esse valor? Do Figma.

```CSS
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 24px;
}
```

Por fim, se o conteúdo não couber na largura, aplicaremos um flex-wrap: wrap.

```CSS
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
}
```

Verificando o funcionamento do Container

Isso significa que, se não couber, ele posicionará os elementos um abaixo do outro. O flex-wrap fará exatamente isso. Já definimos a largura máxima e centralizamos o display: flex com o espaçamento de 24 pixels. Será que isso funcionou? Ao verificar no Chrome, aparentemente funcionou, pois ao expandir, podemos ver nosso elemento. Ele gerou a classe com o hash, indicando que o módulo CSS está funcionando. A largura máxima de 1200 pixels foi aplicada, com a margem automática, centralizando o conteúdo. O display: flex está ativo, posicionando os elementos lado a lado.

Esse é o comportamento desejado para o .container. Se o conteúdo não couber, ele manterá o comportamento definido. De onde veio o valor de 24 pixels? No Figma, observamos que o espaçamento entre os elementos é de 24 pixels. Foi daí que esse valor foi retirado.

Nosso componente .container, o primeiro utilizando o módulo CSS, já está funcionando. Já vimos a teoria aplicada e a classe gerada. Agora, precisamos evoluir nossa aplicação. Temos muitos componentes para desenvolver ao longo desta aula. Estamos ansiosos para nosso próximo encontro.

### Aula 2 - Construindo a barra lateral - Vídeo 6

Transcrição  
Vamos continuar construindo nossos componentes, agora focando no Aside. Iniciamos esse componente anteriormente, então vamos voltar ao VS Code, no arquivo index.jsx, e não no app.jsx. Temos um Aside lá, mas não é isso que queremos. Precisamos de um componente para estilizar de forma isolada. Dentro da pasta "componentes", vamos criar um novo arquivo Aside/index.jsx. Além disso, criaremos um arquivo aside.module.css. É importante lembrar que deve ser .module.css.

Por que isso já funciona? Vamos mostrar agora. No Chrome, pesquisamos por "Vite CSS Modules". No primeiro link, encontramos as funcionalidades do Vite. Clicamos e, no menu à direita, há várias opções, como NPM, Hot Module, TypeScript, HTML, Framework, JSX, CSS. É exatamente o que precisamos. Ao clicar em CSS Modules, vemos que qualquer arquivo terminado em .module.css é considerado um CSS Module. Isso significa que podemos importá-lo e ele nos fornecerá um objeto correspondente. Toda a explicação que tivemos está documentada pelo Vite. Ele é genérico e não está restrito ao React, pois funciona para qualquer aplicação que utilize o Vite. Por isso, seguindo a convenção .module.css, já temos isso pronto para uso. Inicialmente, era necessário confiar, mas agora mostramos a fonte oficial. O Vite entrega, por padrão, CSS Modules.

Criando e estruturando o componente Aside

Agora, vamos voltar ao VS Code e gerar nosso componente Aside. Primeiro, importamos styles do arquivo aside.module.css.

```JSX
import styles from './aside.module.css'
```

Em seguida, exportamos o componente Aside, com letra maiúscula, pois é um componente React. Inicialmente, vamos criar o componente vazio.

```JSX
export const Aside = () => {

}
```

Não vamos utilizar children, mas sim retornar algo. Vamos começar a estruturar o retorno do componente.

```JSX
export const Aside = () => {
    return (
        
    )
}
```

No app.jsx, cortamos o conteúdo e colamos aqui, pedindo ao VS Code para formatar o documento corretamente. Também trazemos o import do logo, ajustando o caminho relativo. Antes, era ./assets, mas agora, como estamos em Aside, precisamos voltar duas pastas para acessar assets/logo.svg.

```JSX
import logo from '../../assets/logo.svg'
```

Adicionando conteúdo e estilização ao componente

Agora, vamos adicionar o conteúdo dentro do return.

```JSX
return (
    <aside>
        <img src={logo} alt="" />
    </aside>
)
```

Uma alternativa seria trazer o logo para dentro da pasta do Aside, mas como o Vite sugere lidar com assets separadamente, seguiremos essa convenção. Com o Aside pronto, aplicamos o className usando o objeto importado styles.aside.

```JSX
<aside className={styles.aside}>
    <img src={logo} alt="" />
</aside>
```

Voltando ao Figma, copiamos o texto "desenvolvido por Alura, projeto fictício, sem fins comerciais". No VS Code, criamos uma tag footer e colamos o texto, pois ele é o rodapé do Aside.

```JSX
<aside className={styles.aside}>
    <img src={logo} alt="" />
    <footer>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
    </footer>
</aside>
```

Ajustando o layout e aplicando estilos CSS

Se salvarmos e importarmos esse componente no app.jsx, o VS Code já o importa automaticamente. No Chrome, ao recarregar, o texto aparece, mas queremos que fique semelhante ao que temos no Figma. A largura indicada no Figma é de 282 pixels, então aplicamos isso no aside.module.css. Criamos a classe .aside e definimos max-width de 282 pixels.

```CSS
.aside {
    max-width: 282px;
}
```

Queremos também aplicar a cor neutra usada no design. Qual é a nossa cor neutra? Vamos acessar o index.css, que é global de propósito, e utilizar a variável neutral-header, que é #3353S. Vamos copiar essa variável. O nosso background-color será var(--neutral-header).

```CSS
.aside {
    max-width: 282px;
    background-color: var(--neutral-header);
}
```

Além disso, precisamos garantir que o elemento ocupe toda a altura disponível. Vamos definir que a altura mínima é o que estiver disponível na altura vertical da página. Assim, tudo que estiver disponível será consumido nessa altura, utilizando vh (View Height).

```CSS
min-height: 100vh;
```

Refinando o design e aplicando espaçamentos

Vamos verificar como está ficando. Já fizemos bastante código e está mais ou menos parecido. Se aumentarmos a visualização, está mais ou menos parecido. O que queremos agora? Precisamos verificar o padding dentro do aside. Vamos ao Figma. Para ver o padding, selecionamos um elemento interno e verificamos o padding. No Mac, seguramos a tecla Option, e no Windows, se não me engano, é Alt. O padding vertical é de 40 pixels e o lateral é de 80 pixels.

Vamos aplicar o padding: primeiro o vertical, 80 pixels, depois o lateral, 40 pixels.

```CSS
padding: 80px 40px;
```

Vamos ver se isso funcionará. No nosso popup, já está mais parecido com o que precisamos. Agora, precisamos dar um espaçamento entre o footer e a logo. Existem várias formas de fazer isso. Poderíamos colocar uma margem na imagem, mas vamos transformar isso em um flex container.

Vamos transformar o container em um flex container.

```CSS
display: flex;
```

Selecionamos a logo e verificamos que há uma distância de 56 pixels entre os elementos. Vamos definir display: flex. Como queremos que seja uma coluna, mudamos o flex-direction para column.

```CSS
flex-direction: column;
```

O gap será de 56 pixels.

```CSS
gap: 56px;
```

Finalizando o componente e verificando o resultado

Vamos verificar como ficou. Voltando ao Chrome, vamos fechar tudo para não nos perdermos nas abas. Agora sim, voltando ao Chrome. Algo funcionou, mas algo não, pois o footer ficou fora do lugar. Vamos verificar. O aside está aqui, a imagem está aqui, mas o footer está fora. Obviamente, coloquei flex-direction: row, mas deveria ser column. Agora sim, os elementos estão um embaixo do outro, como deveriam.

O que está faltando agora? Precisamos estilizar a fonte. Ao selecionar a fonte, vemos a cor e os estilos que precisamos aplicar. A cor é neutra. Vamos verificar os estilos. No design, o alinhamento é centralizado. A tipografia é regular, o que significa peso 400. A altura é de 13 pixels e o line-height é de 120%. Precisamos levar isso para o código.

No footer, definimos font-size: 13px, line-height: 120% e color: var(--neutral-text).

```CSS
.footer {
    font-size: 13px;
    line-height: 120%;
    color: var(--neutral-text);
}
```

Novamente, não é o VAR do futebol, mas o VAR de variável neutral-text. No index.css, a variável neutral-text é #F5F5F5. Copiamos o nome da variável e aplicamos. A variável é global de propósito. Queremos evitar colocar um hexadecimal diretamente no CSS Modules, pois já temos as cores definidas.

Agora, aplicamos o estilo no nosso JSX. No footer, usamos className com o objeto JavaScript styles.footer.

```JSX
<footer className={styles.footer}>
    Desenvolvido por Alura. Projeto fictício sem fins comerciais.
</footer>
```

Voltando ao Chrome, no popup, recarregamos a página. Está bem mais parecido com o que queremos ver no Figma. Os espaçamentos estão corretos, o texto está centralizado. Maravilha!

Agora que o lado esquerdo está funcionando, precisamos olhar para o lado direito. Vamos fechar os estilos da fonte. Precisamos criar uma divisão entre o aside e o conteúdo principal da página e começar a trabalhar no input. Há bastante coisa para fazermos. Nos encontramos no próximo vídeo.

### Aula 2 - Implementando o input de texto e Main - Vídeo 7

Transcrição  
Vamos focar agora na barra de busca, que possui um ícone dentro. Existem várias formas de implementar isso, e vamos mostrar uma das maneiras mais simples, que causa menos complicações. Se quisermos criar um input com um ícone usando CSS Modules, podemos aplicar o seguinte:

No VS Code, dentro da pasta de componentes, criaremos um novo arquivo chamado SearchInput. Dentro dessa pasta, criaremos um index.jsx e também o CSS Module correspondente, searchInput.module.css.

Criando o componente SearchInput

No index.jsx, começaremos importando os estilos com:

```JSX
import styles from './searchInput.module.css';
```

Para evitar digitar duas vezes, podemos copiar e colar o nome do arquivo. Em seguida, exportaremos o componente com export const SearchInput, que receberá as props.

```JSX
export const SearchInput = (props) => {
    return (
        <div className={styles.container}>
            <input className={styles.input} {...props} />
        </div>
    );
}
```

Faremos um return de um input. Como precisamos incluir um ícone ao lado do input, faremos um return entre parênteses, colocando uma div. Dentro dessa div, colocaremos o input e importaremos o ícone. Já deixamos preparado o download da pasta de ícones. No nosso caso, ela está na pasta de downloads, e moveremos para dentro da pasta "components". Esses ícones são todos em SVG que utilizaremos.

Importando e utilizando o ícone de busca

Queremos usar o IconSearch. Decidimos não deixar o ícone opcional, então chamaremos diretamente o IconSearch, que o VS Code já importou para nós.

```JSX
import { IconSearch } from '../icons';

//...

return (
    <div className={styles.container}>
        <IconSearch />
        <input className={styles.input} {...props} />
    </div>
);
```

Podemos aplicar um className usando styles.container. Não haverá conflito, pois o CSS Modules transforma isso em algo único. Também podemos usar styles.input.

Configurando o componente Main

Após definir o className, pegaremos todas as props recebidas e as espalharemos dentro do input com ...props. Em uma aplicação React, um componente input pode receber várias props como onChange, value, onBlur, entre outras. Não queremos especificar uma a uma, então encaminharemos todas para o input.

Com a estrutura pronta, vamos colocá-la na tela. Em vez de usar um h1 inexistente, substituiremos por uma tag main. Dentro dessa tag main, chamaremos nosso SearchInput.

```JSX
import { SearchInput } from './components/SearchInput';

//...

<main>
    <SearchInput />
</main>
```

No Chrome, veremos que o input e o ícone estão funcionando, mas não estão como desejado. Precisamos ajustar para que ocupem toda a largura da tela, tenham uma cor específica e uma borda.

Estilizando o componente Main

Para isso, criaremos estilos para a tag main. No VS Code, criaremos o componente Main com main/index.jsx. Exportaremos const Main, uma arrow function que recebe children.

```JSX
export const Main = ({ children }) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}
```

Importaremos os estilos com:

```JSX
import styles from './main.module.css';
```

Se salvarmos agora, não funcionará, pois o arquivo CSS ainda não existe. Vamos criar main.module.css e estilizar o seletor main com largura de 100%.

```CSS
.main {
    width: 100%;
}
```

Corrigindo erros de renderização

Vamos começar ajustando o tamanho disponível. Precisamos alterar o className, não como string, mas pegando o objeto styles.main. Relembrando, o nome da propriedade é o nome da classe, essa é a mágica dos CSS Modules. Agora, podemos ir ao nosso app.jsx e trocar esse main pelo M maiúsculo, e pegar o componente que acabamos de criar.

```JSX
import { Main } from './components/Main';

// ...

<Main>
    <SearchInput />
</Main>
```

Vamos verificar se isso está funcionando. Ao olhar no Chrome, percebemos que não está renderizando. Vamos ao console para investigar. Ele indica que objetos não são válidos como react-child, então cometemos algum erro. Provavelmente, algo na hora de renderizar a child. O que aconteceu aqui? Por padrão, o React fornece um objeto, que podemos chamar de props, com todas as props passadas. Poderíamos usar props.children dentro do componente. Ao recarregar, já funcionou. O main agora ocupa 100% da tela.

Ajustando o estilo do SearchInput

Por que ocorreu o erro? Não fizemos o destructuring, então chamamos props de children e tentamos renderizar dentro, o que causou o erro. O React não aceita isso, então precisamos fazer o destructuring, colocando entre chaves para pegar apenas a propriedade children do objeto inteiro que recebemos. Entendemos o que aconteceu: não fizemos o destructuring e pegamos o objeto inteiro de props, o que o React não aceita. É necessário sempre fazer o destructuring, ou podemos usar props.children, mas preferimos o primeiro método.

Agora está funcionando, ocupando toda a largura disponível. Vamos começar a estilizar esse componente. Primeiramente, trabalharemos no container no VS Code. No nosso searchInput, criaremos uma classe .container.

```CSS
.container {
    width: 100%;
    background-color: var(--neutral-surface);
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    gap: 16px;
    align-items: center;
}
```

Definindo estilos adicionais para o input

Vamos definir que ele tem largura de 100% e uma cor de fundo usando var. Precisamos verificar o hexadecimal. No index, temos todos os hexadecimais mapeados. Vamos ao Figma para ver qual foi aplicado. Selecionando o estilo, vemos que é 2A2C34, que corresponde ao neutral surface.

Além disso, queremos definir o border-radius. No Figma, a barra de busca tem um border-radius de 8 pixels. Vamos adicionar isso. Também precisamos de um padding. O tamanho do padding é 12 pixels na vertical e 16 pixels na horizontal. Ao verificar no pop-up, o container já está aparecendo como deveria.

Para estilizar o input, usaremos um display: flex, alinhando tudo, e deixaremos o input ocupar toda a largura disponível. No VS Code, no container, colocaremos display: flex e um gap de 16 pixels entre o ícone e o input. Queremos também align-items: center para centralizar verticalmente.

Finalizando a estilização do input

Do lado do input, precisamos pegar os estilos da fonte. No guia de estilos, temos o large, que é size regular, tamanho 20, com largura de 125%.

```CSS
.input {
    font-size: 20px;
    line-height: 125%;
    color: var(--neutral-text);
    flex: 1;
    border: none;
    background-color: transparent;
}
```

Para o input, definiremos flex-grow, permitindo que ele cresça e ocupe todo o espaço disponível. Removeremos a borda com border: none e o background-color para deixá-lo transparente. Vamos testar. Com isso, já está bem parecido com o que precisamos. Manteremos a borda quando selecionado por questões de acessibilidade.

Parece que falta um padding interno no input. Vamos adicionar um padding de 12 pixels para cima. O componente main precisa de um padding vertical de 80 pixels, igual ao que colocamos no sidebar. No main.module.css, adicionamos padding de 80 pixels na vertical e 0 na horizontal.

```CSS
.main {
    padding: 80px 0;
}
```

Agora, ao verificar no Chrome, está tudo alinhado e com o padding correto. A cor do input será mantida por questões de acessibilidade. O menu e o input de busca com ícone estão no lugar correto. Temos mais um componente pronto, na verdade dois, pois criamos um main. Vamos continuar estilizando nosso pop-up com CSS Modules na sequência.

### Aula 2 - Desenvolvendo o componente de tipografia - Vídeo 8

Transcrição  
Vamos continuar desenvolvendo o Poupaapp e agora é o momento de trabalharmos na parte de títulos. Temos o Olavinho, que é o nosso H1, o título de maior destaque na página, e um parágrafo logo abaixo com o texto "Veja como estão as suas finanças hoje". Poderíamos criar dois componentes, um para o H1 e outro para o parágrafo. No entanto, considerando o cuidado que estamos tendo com a aplicação até agora, criando os componentes corretamente, vamos abrir apenas o nosso app.jsx.

Um padrão que observamos em algumas aplicações quando o assunto é tipografia é criar um único componente, como Typography, ao invés de criar componentes do tipo Heading para o título ou Body para o parágrafo. Vamos criar algo desse tipo e trazer o texto Olavinho e o texto logo abaixo, "Veja como estão as suas finanças hoje".

Implementando o componente Typography

Observando o espaçamento entre o primeiro e o segundo texto, que é de 40 pixels, podemos pensar em separar isso usando o Flexbox. Podemos colocar um flex em coluna e um gap de 40 pixels. Para isso funcionar, podemos colocar essa tipografia dentro de uma div, permitindo que os textos fiquem próximos e o gap crie a distância entre o título e os elementos abaixo.

Voltando à nossa tipografia, podemos ter uma propriedade chamada variant. Para o primeiro texto, queremos um H1, e para o segundo, uma variante para body, que é o corpo do texto da página. Se olharmos o nosso pop-up, ele apresentará um erro, pois estamos tentando usar a tipografia que ainda não está definida. No app, na linha 13, estamos importando algo que não existe. Estamos idealizando o componente primeiro e agora podemos pensar em criá-lo.

Criando o arquivo Typography no VS Code

Vamos para a implementação no VS Code. No diretório "components", criaremos um novo arquivo chamado Typography. Dentro dele, criaremos um index.jsx. Vamos começar exportando a constante Typography, que recebe uma arrow function.

```JSX
export const Typography = () => {}
```

Faremos o destructuring de children e retornaremos o children dentro de um fragment do React.

```JSX
export const Typography = ({ children }) => {
    return (
        <>{children}</>
    );
}
```

Definindo as tags e variantes

Queremos escolher uma tag baseada na variante recebida. Podemos criar um objeto que representa essa tag. Criamos uma constante TAGS, que são as tags permitidas.

```JSX
const TAGS = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}
```

Precisamos definir qual será a tag externa. Podemos criar uma constante chamada Component, com C maiúsculo, pois será uma tag dinâmica. Vamos olhar para as TAGS definidas e pegar a tag correspondente à variante usando colchetes.

```JSX
const Component = TAGS[variant] || 'p';
```

Podemos renderizar isso ao invés do fragment.

```JSX
return (
    <Component>{children}</Component>
);
```

Garantindo valores padrão e importando no app.jsx

Se alguém passar um valor inválido, o resultado será undefined e não funcionará. Podemos passar um valor padrão, como p, para evitar esse problema.

Se por algum motivo alguém passar uma variante que não é aceita, no nosso caso, nós aceitamos apenas h1, h2 e body. Se alguém passar algo que não seja isso, vamos usar a tag p, de parágrafo. Essa é a estrutura física sem os estilos da nossa tipografia.

Se voltarmos ao app.jsx, agora podemos fazer o import da tipografia e verificar se isso vai funcionar. Voltando ao Chrome, ele já renderizou. Vamos recarregar a página para limpar o console, o que nos deixará tranquilos. O console está limpo, sem erros. Se inspecionarmos o h1, ele está lá. O texto "Olavinho" está com o h1, e "veja como estão as suas finanças hoje" está como parágrafo. Era isso que queríamos.

Estilizando o componente Typography

O que está faltando agora? Estilizar. Se voltarmos ao VS Code, podemos criar o nosso já conhecido typography.module.css. Lembrando que tem que ser esse nome. Queremos agora importar o CSS no nosso index.jsx, sempre no início:

```JSX
import styles from './typography.module.css';
```

Mas agora precisamos decidir qual estilo vamos usar. Podemos pegar os estilos baseados na variante que recebemos. Podemos fazer isso da mesma forma. Criamos uma constante, que podemos chamar de variantClass, que é a classe variante que vamos pegar.

```JSX
const variantClass = styles[variant] || styles.p;
```

Vamos pegar o resultado dessa operação e passá-lo para o nosso componente:

```JSX
return (
    <Component className={variantClass}>
        {children}
    </Component>
);
```

Aplicando estilos CSS

Agora precisamos criar esses estilos: h1, h2 e parágrafo. O que todos eles terão em comum? A cor do texto. Podemos pegar no nosso search input, por exemplo, a cor na linha 14. Podemos aplicar esses estilos logo no início. Todos terão essa cor. Outra coisa que faremos é remover a margem desses componentes. Sem margem nenhuma. Do jeito que o Figma está estruturado, o line-height, que é maior do que o tamanho da fonte, já cuidará desse espaçamento para nós.

```JSX
.h1 {
    color: var(--neutral-text);
    margin: 0;
    font-weight: 700;
    font-size: 31px;
    line-height: 120%;
}
.h2 {
    color: var(--neutral-text);
    margin: 0;
}
.p {
    color: var(--neutral-text);
    margin: 0;
    font-size: 16px;
    line-height: 120%;
}
```

Verificando a aplicação dos estilos

Vamos verificar se isso já está funcionando. Deveríamos ver algo diferente no Chrome. Voltando ao Chrome, no pop-up, já está diferente, sem a margem e com a cor aplicada. O que precisamos fazer agora? Aplicar o restante dos estilos. O "Olavinho" está com xxl-bold. Vamos ao botão de settings e pegamos os estilos: line-height de 120%, fonte com tamanho de 31 e em negrito. Esse negrito do Figma é equivalente ao font-weight de 700 no CSS. Queremos um font-weight de 700, font-size de 31 pixels e line-height de 120%. Como a altura da linha é maior, já haverá um espaçamento para o parágrafo abaixo. No pop-up, o parágrafo já aumentou um pouco. Ele está colado porque ainda não temos um espaço no componente pai, mas do "Olavinho" para o parágrafo já está separado.

Finalizando a estilização e próximos passos

Agora, falando no parágrafo, vamos pegar os estilos dele: é o ag-md. Clicamos na seta, md, e vemos que o tamanho é 16, o peso é regular, não precisamos mexer, e o line-height também é de 120%. Vamos copiar o font-size e o line-height de cima, colar no parágrafo, ajustar a indentação e trocar apenas o 31 por 16. O line-height também é de 120%. No pop-up, já está tudo certo.

O que precisamos fazer agora? Dado o nosso cenário, podemos começar a organizar o componente mais externo, nosso componente in-line, para ter esse espaçamento entre os itens e também podemos começar a olhar para os cards. Podemos primeiro fazer os cards e depois pensar no grid. Ainda há muitos componentes para criar e estilizar usando o CSS Modules. Para este encontro, era isso que precisávamos fazer. A missão está cumprida. Criamos um componente altamente reutilizável de tipografia. Recebemos uma variante e escolhemos a tag e a classe de forma dinâmica. Até a próxima!

### Aula 2 - Estruturando card, card.header e card.body - Vídeo 9

Transcrição  
Seguindo com nosso código, ao observarmos no Chrome e no Figma, a próxima parte que está faltando são os cards. Como podemos estruturar isso? No arquivo App.jsx, logo abaixo da div que envolve a tipografia, podemos adicionar uma section, pois teremos uma seção de cards.

```JSX
<section>
</section>
```

Podemos criar um componente chamado Card, que será global, e utilizá-lo quatro vezes, independentemente do conteúdo interno.

```JSX
<section>
    <Card>
    </Card>
</section>
```

Definindo a estrutura do componente Card

Podemos definir um header e um body para o card. Assim, podemos usar Card.Header para inserir um texto, como "orçamento diário disponível", e Card.Body para inserir o valor, como "duzentos reais".

```JSX
<Card>
    <Card.Header></Card.Header>
</Card>
```

Dessa forma, se tivermos quatro cards, podemos replicar essa estrutura quatro vezes. O conteúdo será ajustado posteriormente, pois estamos criando um componente reutilizável.

```JSX
<Card.Header>Orçamento diário disponível:</Card.Header>
<Card.Body>
</Card.Body>
```

```JSX
<Card.Body>
    R$ 200
</Card.Body>
```

Criando e exportando o componente Card

Ao verificar nossa aplicação na porta 5173, ocorre um erro porque o componente ainda não existe. Estamos discutindo como utilizá-lo. Um detalhe importante é que, embora não esteja diretamente relacionado aos CSS Modules, está ligado à forma como estamos compondo nossa aplicação. O uso de Card.Header ainda não foi implementado. Precisamos exportá-lo de forma diferente para que funcione.

Vamos criar uma nova pasta chamada "Card" e, dentro dela, um arquivo index.jsx. Primeiramente, exportamos o Card, recebendo children e retornando uma div que renderiza o conteúdo recebido.

```JSX
export const Card = () => {}
```

```JSX
export const Card = ({ children }) => {}
```

```JSX
export const Card = ({ children }) => {
    return (<div>
        {children}
    </div>)
}
```

Para isso, precisamos de um export default, então não podemos fazer export const Card. Criamos o Card e fazemos um export default no final.

```JSX
const Card = ({ children }) => {
    return (<div>
        {children}
    </div>)
}
export default Card
```

Implementando os componentes CardHeader e CardBody

A próxima etapa é criar o Header. Definimos const CardHeader, e será semelhante ao Card, apenas renderizando children.

```JSX
const CardHeader = () => {}
```

```JSX
const CardHeader = ({ children }) => {
    return (<div>
        {children}
    </div>)
}
```

Teremos também o CardBody.

```JSX
const CardBody = ({ children }) => {
    return (<div>
        {children}
    </div>)
}
```

Podemos exportar esses dois componentes nomeadamente, já que temos o export default no final.

```JSX
export const CardHeader = ({ children }) => {
    return (<div>
        {children}
    </div>)
}
```

```JSX
export const CardBody = ({ children }) => {
    return (<div>
        {children}
    </div>)
}
```

Configurando a estrutura de importação e uso do Card
Para utilizar a sintaxe Card.Header e Card.Body no componente, fazemos Card.Header receber CardHeader e Card.Body receber CardBody.

```JSX
Card.Header = CardHeader
Card.Body = CardBody
```

Assim, ao importar Card como default, podemos usar essa estrutura.

```JSX
import Card from './components/Card'
```

Se olharmos na aplicação, podemos verificar se passou a funcionar. Recarregamos, não há erros no console, que está limpo e elegante. Além disso, agora já temos o conteúdo que colocamos sendo renderizado: orçamento diário disponível e o valor. O que está faltando agora? Precisamos estilizar esse card. Podemos fazer isso com base no nosso Figma. Temos o header de um jeito e o card com uma cor diferente, sendo o header de uma cor e o card com uma cor mais escura no final. Como faremos isso?

Aplicando estilos ao componente Card

Vamos começar a aplicar os estilos. Voltamos ao VS Code e, dentro da pasta "Card", teremos um arquivo card.module.css. Vamos importar esse arquivo no início, utilizando CSS Modules como já aprendemos.

```JSX
import styles from './card.module.css'
```

Importamos styles de card.module. Agora, distribuímos o className. Teremos um className para o card, styles.card, um styles para o header e também para o body.

```JSX
const Card = ({ children }) => {
    return (<div className={styles.card}>
        {children}
    </div>)
}
```

```JSX
export const CardHeader = ({ children }) => {
    return (<div className={styles.header}>
        {children}
    </div>)
}
```

```JSX
export const CardBody = ({ children }) => {
    return (<div className={styles.body}>
        {children}
    </div>)
}
```

Desafio de estilização e conclusão

Agora podemos pensar em estilizar isso: card, header e, finalmente, body. Aqui, estamos lidando com CSS em sua forma mais pura.

```CSS
.card {
    background-color: var(--neutral-surface);
    border-radius: 24px;
}

.header {
    background-color: var(--neutral-header);
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
}
```

Já fizemos isso até agora, então vou lançar um desafio clássico: pause o vídeo, estilize você mesmo e depois compare com a minha versão. Praticar e pensar em como estilizar um componente é o que fazemos no dia a dia. Além de acompanhar e desenvolver juntos, você pode se arriscar um pouco. Esses estilos que vamos aplicar são simples e sabemos que estão isolados por causa dos CSS Modules. Então, é hora do desafio: pause o vídeo. Prometo que não sairei daqui. Quando terminar, volte, dê o play e compare com a minha solução.

Estou confiando que você pausou e que já está com o seu card pronto. Agora, vamos discutir como fiz isso. A primeira coisa: no card externo, aplicarei o background-color. Já sabemos que podemos usar a variável e abrir o index.css para pegar a cor necessária. A cor que precisamos é o neutral surface. Na dúvida, podemos sempre consultar o Figma. Quando selecionamos o card, está lá: neutras, fundo detalhe, e é o 2A2C. Se olharmos no index.css, é 2A2C, Neutral Surface. Outra coisa que podemos definir é o background do header. O background do header será o neutral header. Como sei disso? Já verifiquei: neutral header, 33353F. Se selecionarmos no card, conseguimos ver: neutros cabeçalho, e nos ajustes, 33353F. Maravilha, é isso.

Outra coisa que precisamos considerar é o border-radius do card. O border-radius é 8.16. Podemos extrapolar pelo tamanho do padding, provavelmente é 24 pixels. Normalmente, é 8 a mais do que o padding neste cenário. Então, no nosso card.module, no card como um todo, podemos colocar um border-radius de 24 pixels. No header, há um detalhe: só temos um border-radius superior esquerdo e superior direito. Vamos fazer border-top-left-radius de 24 pixels e border-top-right-radius de 24 pixels. Se salvarmos e voltarmos ao Chrome, já está com as cores, embora ainda falte o padding e outros ajustes, mas já está com as cores necessárias.

Vamos estilizar esse card até o fim, mas isso ficará como lição para o nosso próximo vídeo. O que precisamos fazer? Ajustar o padding, o espaçamento interno do header, o espaçamento interno do body e também a cor do título. Na sequência, compararemos o meu resultado com o seu, pois estou confiante de que você se arriscou um pouco e aplicou esses estilos por conta própria.

### Aula 2 - Desafio

Salve o/

Hora de colocar a mão no código e criar algo que você já viu no nosso layout: a lista de bancos na seção “Minhas contas”.

O desafio é simples de entender, mas perfeito pra treinar sua autonomia: você vai implementar essa lista por conta própria, com base no que viu no Figma. Cada item deve mostrar o nome do banco, o ícone e o saldo formatado.

E olha, não precisa reinventar a roda — comece pequeno:

- Monte a estrutura — pense em como organizar cada banco (um contêiner, o ícone e as informações).
- Alimente a lista — use o array de contas que passamos na aula.
- Estilize — aplique as cores e espaçamentos pra deixar igualzinho ao design.

Se travar, respira. Olhe pro layout e tente quebrar ele em pedaços menores. Você não precisa resolver tudo de uma vez. Começa pelo HTML/JSX básico, depois estiliza, depois ajusta os detalhes.

Dica de ouro: olhe para o primeiro item e tente replicar ele sozinho. Quando estiver pronto, repita o padrão pros outros usando .map().

Vai lá, confio no seu código!

Opinião do instrutor

Antes de tudo: não existe uma única resposta certa para este desafio. O que você vê aqui é um caminho possível, pensado para ser claro de ler, fácil de manter e simples de evoluir. Se você resolveu de outro jeito e chegou ao mesmo resultado, ótimo. O objetivo é entender o raciocínio por trás das escolhas.

1. Ideia geral

O layout pede uma lista de contas com nome do banco, ícone e saldo, além de um botão de ação no final. Em vez de espalhar marcação solta pelo App, centralizamos tudo em componentes pequenos e focados:

Account: renderiza uma conta individual

Accounts: orquestra a lista e o botão  
List e ListItem: componentes genéricos para listas, garantindo visual consistente e menos repetição

2. Ajuste no App.jsx

Trocamos os elementos soltos pela chamada a , delegando a renderização das contas a um componente especializado.

```JSX
// src/App.jsx 
import { Accounts } from './components/Accounts' 

// ... 
<Card.Body> 
<Accounts /> 
</Card.Body> 
```

3. Componente Account

Responsável por exibir uma conta. Inclui formatação de moeda via Intl.NumberFormat.

```JSX
// src/components/Account/index.jsx 
import { IconBank } from '../icons' 
import styles from './account.module.css'

const formatter = new Intl.NumberFormat('pt-BR', { 
style: 'currency', 
currency: 'BRL', 
}) 


export const Account = ({ account }) => { 
return ( 
<div className={styles.account}> 
<div> 
<p className={styles.bank}> 
<IconBank /> 
<strong>{account.bank}</strong> 
</p> 
</div> 
<div className={styles.details}> 
<p><strong>Saldo</strong></p> 
<p>{formatter.format(account.balance)}</p> 
</div> 
</div> 
) 
} 
```

```CSS
/* src/components/Account/account.module.css */ 
.account { 
display: flex; 
justify-content: space-between; 
color: var(--neutral-text); 
} 

.account p { 
margin: 0; 
font-size: 15px; 
line-height: 120%; 
} 

.details { 
display: flex; 
flex-direction: column; 
gap: 8px; 
width: 100px; 
} 

.bank { 
display: flex; 
gap: 8px; 
align-items: center; 
} 
```

4. Componente Accounts

Encapsula a lista. Hoje os dados estão em um array local; amanhã podem vir de uma API sem precisar reescrever o componente. A lista usa os componentes genéricos List e ListItem.

```JSX
// src/components/Accounts/index.jsx 
import styles from './accounts.module.css' 
import { Button } from "../Button" 
import { Account } from "../Account" 
import { IconWallet } from '../icons' 
import { List } from "../List" 
import { ListItem } from "../ListItem" 

export const Accounts = () => { 
const accounts = [ 
{ bank: "Anybank", balance: 1200 }, 
{ bank: "Bytebank", balance: 800 }, 
{ bank: "Switch Bank", balance: 1800 } 
] 

return ( 
<div className={styles.accounts}> 
<List> 
{accounts.map(ac => ( 
<ListItem key={ac.bank}> 
<Account account={ac} /> 
</ListItem> 
))} 
</List> 
<div className={styles.divider} /> 
<div className={styles.actions}> 
<Button> 
<IconWallet /> Adicionar conta 
</Button> 
</div> 
</div> 
) 
} 
```

```CSS
/* src/components/Accounts/accounts.module.css */ 
.accounts { 
display: flex; 
flex-direction: column; 
height: 100%; 
} 

.divider { 
flex-grow: 1; 
} 

.actions { 
display: flex; 
justify-content: center; 
} 
```

5. Infra de lista: List e ListItem

Separar esses componentes evita repetir estilos em cada lista do projeto. Ganhamos consistência visual e um ponto único de ajuste.

```JSX
// src/components/List/index.jsx 
import styles from './list.module.css' 

export const List = ({ children, className, ...props }) => { 
return ( 
<ul className={`${styles.list} ${className || ''}`} {...props}> 
{children} 
</ul> 
) 
} 
```

```CSS
/* src/components/List/list.module.css */ 
.list { 
padding: 0; 
margin: 0; 
list-style: none; 
margin-bottom: 48px; 
} 
```

```JSX
// src/components/ListItem/index.jsx 
import styles from './listitem.module.css' 
 
export const ListItem = ({ children, className, ...props }) => { 
return ( 
<li className={`${styles.item} ${className || ''}`} {...props}> 
{children} 
</li> 
) 
} 
```

```CSS
/* src/components/ListItem/listitem.module.css */ 
.item { 
border-bottom: 1px solid var(--neutral-header); 
padding-bottom: 16px; 
margin-bottom: 16px; 
} 

.item:last-child { 
border: none; 
padding-bottom: 0; 
margin-bottom: 0; 
} 
```

6. Reaproveitando no Transactions

Como a infraestrutura de listas ficou genérica, a seção de transações também passa a usá-la. Isso reduz duplicação e mantém a mesma linguagem visual.

```JSX
// src/components/Transactions/index.jsx 
import { List } from "../List" 
import { ListItem } from "../ListItem"
// ... 
<List> 
{items.map((transactionItem, index) => ( 
<ListItem key={index}> 
<TransactionItem item={transactionItem} /> 
</ListItem> 
))} 
</List> 
```

Por que esse caminho funciona bem?

- Organização: cada componente tem responsabilidade clara.
- Reaproveitamento: List e ListItem servem para qualquer lista no app.
- Manutenção: se o espaçamento, a borda ou o alinhamento das listas mudar, alteramos em um único lugar.
- Evolução: os dados podem deixar de ser mockados e vir de uma API sem reescrever a estrutura.
- Leitura: o App.jsx fica mais limpo e fácil de entender.

Se em algum ponto você travar, tente voltar um passo: comece renderizando uma única conta sem estilos. Depois aplique a estrutura de lista. Em seguida, adicione o CSS. Por fim, traga o botão de ação. Pequenas vitórias em sequência constroem o resultado final.

### Aula 2 - Estilizando card header e body - Vídeo 10

Transcrição  
Vamos continuar estilizando nosso card, focando agora na parte de espaçamento, texto e outros detalhes. Já estamos no Figma com o texto de orçamento de área disponível selecionado. A tipografia utilizada é a L Bold. Vamos ajustar as configurações: o tamanho da fonte é 20, o line-height é 120% e o peso é Bold.

Queremos um line-height de 120%, um font-size de 20 pixels e um font-weight de 700. Já discutimos que Bold no Figma normalmente corresponde a 700 no CSS. Precisamos também definir a cor e centralizar o texto. Vamos ajustar o text-align para o centro e definir a cor da fonte como var(--neutral-text), que é a cor do nosso texto.

Ajustando o padding e verificando o design

Após salvar, vamos verificar como está ficando. No popup, o texto já está centralizado e no tamanho adequado. Agora, precisamos ajustar o padding: 75 pixels na horizontal e 16 pixels na vertical. Se o texto está centralizado e possui 16 pixels de espaçamento acima e abaixo, podemos definir o padding como 16 pixels e deixar o restante para o texto centralizar. Vamos aplicar esse padding de 16 pixels no Figma.

Vamos observar o popup, que já está bem mais parecido com o que deveria ser. Não vamos nos preocupar com o tamanho agora, pois o definiremos usando o grid posteriormente. Vamos prosseguir. O que mais queremos fazer agora? O body, o corpo do texto. Vamos usar como referência o card de baixo, pois ele ocupa todo o espaço disponível. Podemos observar que ele tem um padding vertical de 32 e lateral de 16.

Trabalhando nos componentes internos

Vamos aplicar isso ao body, que possui um padding vertical de 16 e lateral de 32, correto? Na verdade, é o contrário: 32 na vertical e 16 na horizontal. Agora sim. Se olharmos no popup, está bem mais parecido com o que deveria ser.

Agora, precisamos trabalhar nos componentes internos: o número 200 em roxo, o texto "economizar" com a barra de progresso, e a mini tabela. Esses elementos não estão relacionados ao card, pois são componentes específicos e não estão dentro do escopo desses estilos.

Finalizando o card e preparando para o próximo passo

Portanto, agora sim, o card está pronto para uso, e o popup está evoluindo. Se olharmos no nosso código, já temos a estrutura. Vamos verificar no app, puxar tudo que está aberto e abrir o app para ver. Já temos a estrutura, com uma seção contendo todos os cards. Precisamos começar a focar na parte interna. Essas são cenas do próximo capítulo, que veremos na sequência.

### Aula 2 - Configurando o componente DailyBudget - Vídeo 11

Transcrição  
Para continuar o desenvolvimento do Poupaapp, vamos focar nos cards. Inicialmente, vamos configurar o interior de cada card, e posteriormente lidaremos com os tamanhos utilizando o grid. Começando de cima, da esquerda para a direita, precisamos de um componente que receba o valor do orçamento diário disponível e o exiba conforme visualizado no Figma.

Estamos com a aplicação rodando na porta 5173. É importante lembrar que o processo deve estar sempre ativo no terminal para continuarmos o desenvolvimento. No Poupaapp, vamos ajustar o valor "R$ 200". Para isso, criaremos um novo componente no VS Code. Na pasta "componente", criaremos um novo arquivo chamado DailyBudget, que exibirá o valor "R$ 200".

Criando e exportando o componente DailyBudget

Dentro do arquivo index.jsx, criaremos os módulos CSS correspondentes, nomeados como dailybudget.module.css. No index.js, faremos a importação com import styles from './dailybudget.module.css'.

```JSX
import styles from './dailybudget.module.css';
```

Em seguida, exportaremos uma constante chamada DailyBudget, que será uma arrow function. Inicialmente, vamos definir a estrutura básica do componente.

```JSX
export const DailyBudget = () => {

}
```

Modificando o componente para receber props

Agora, vamos modificar o componente para receber um valor via props.

```JSX
export const DailyBudget = ({ value }) => {

}
```

Precisamos retornar um parágrafo formatado. Vamos começar com a estrutura básica do retorno.

```JSX
return (
    <p>

    </p>
)
```

Formatando o valor como moeda

O detalhe é que, embora recebamos um número em JavaScript, precisamos exibi-lo no formato de moeda. Para isso, utilizaremos a API Intl, que o JavaScript fornece, sem necessidade de bibliotecas adicionais. Usaremos o método NumberFormat, cuja documentação pode ser encontrada facilmente pesquisando "intl.numberformat" no Google.

A classe NumberFormat é instanciada para obtermos um objeto, do qual chamamos o método format. Ao instanciá-la, especificamos o idioma e a localização. No exemplo, a configuração está para a Alemanha (DE), mas ajustaremos para o português do Brasil (pt-BR) e a moeda para reais brasileiros (BRL).

Implementando a formatação de moeda

Vamos criar uma constante chamada formatter fora do componente, que armazenará a referência para new NumberFormat.

```JSX
const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
```

Com isso, estamos prontos para exibir o valor. Dentro do parágrafo, chamaremos formatter.format com o valor recebido via props. Também aplicaremos o className a partir do objeto styles.dailybudget.

```JSX
return (
    <p className={styles.dailybudget}>
        {formatter.format(value)}
    </p>
)
```

Utilizando o componente DailyBudget

Para prosseguir, vamos realizar algumas alterações. Vamos utilizar o componente DailyBudget. No arquivo app.jsx, no primeiro card, substituiremos o conteúdo para chamar esse componente. Utilizamos um atalho no VS Code para facilitar a inserção e passamos o valor de 200, mantendo o mesmo valor anterior.

```JSX
<DailyBudget value={200} />
```

Ao verificar no Chrome, no popup, conferimos o console para garantir que não há erros. Com um pouco de zoom, constatamos que não há erros no console. Observamos que o primeiro card, que foi alterado, já está com a formatação monetária correta, incluindo o "0,00" no final, diferentemente dos demais. Podemos alterar o valor para 250 e verificar a diferença.

```JSX
<DailyBudget value={250} />
```

Estilizando o componente DailyBudget

O primeiro card, agora com 250, mantém a formatação, inclusive dos centavos. Não precisamos nos preocupar com os demais, pois estão apenas ocupando espaço.

Metade do caminho está concluída. Qual é a outra metade? Precisamos estilizar esse componente. Vamos buscar os detalhes no Figma. Precisamos da cor primária, que é um tom de roxo presente no index.css. Essa cor é o #7693fe.

Abrimos o index.css e o dailybudget.module.css no VS Code, lado a lado. No arquivo dailybudget.module.css, criamos a classe .dailybudget e definimos a cor usando a variável correspondente ao roxo.

```JSX
.dailybudget {
    color: var(--primary-highlight);
}
```

Aplicando estilos adicionais

Precisamos também dos estilos do parágrafo, que utiliza o xxxlbold. Vamos definir o tamanho da fonte como 39, o espaçamento entre linhas como 125% e o peso da fonte como 700. No CSS, isso se traduz em:

```CSS
.dailybudget {
    color: var(--primary-highlight);
    font-weight: 700;
    font-size: 39px;
    line-height: 125%;
    margin: 0;
    text-align: center;
}
```

Verificando a aplicação dos estilos

Verificamos no Chrome se os estilos foram aplicados corretamente. O card está mais próximo do design do Figma: centralizado, com o tamanho e a cor corretos. Podemos inspecionar o elemento para ver a classe gerada pelo CSSModule. Usamos dailybudget como referência, mas o CSSModule gera uma classe única, evitando conflitos, mesmo que a classe seja usada em vários componentes.

Relembrando, utilizamos o Intl.NumberFormat para formatar a moeda. Essa funcionalidade é do JavaScript, não do React ou CSSModule. Para mais informações, podemos consultar a documentação.

Concluindo a implementação do primeiro card

Após estilizar e centralizar o texto na cor roxa, conforme o Figma, concluímos a recapitulação. No próximo card, conforme o Figma, teremos uma barra de progresso e um ícone de economia. Missão cumprida para o primeiro card; continuaremos com o segundo no próximo vídeo.

### Aula 2 - O que aprendemos?

Nesta aula, aprendemos:

- A segurança de escopo local em CSS Modules e a geração de nomes únicos para evitar conflitos de estilos.
- A implementação de estilos ajustados a designs no Figma, incluindo espaçamento e tipografia.
- A criação de componentes React estilizados com CSS Modules, como DailyBudget e componentes complexos com subcomponentes.
- Utilização de Vite para criar e configurar projetos React, incluindo a gestão de dependências e inicialização do projeto.
- Gerenciamento de design consistente com a definição de variáveis de cor e importação de fontes do Google Fonts.
- Organização e estilização de componentes em React, usando CSS Modules para encapsulamento.
- Implementação de um componente de Typography customizável por variantes para renderização flexível de tags HTML.
- A prática de composição de componentes React para reutilização e organização eficiente dentro de um mesmo arquivo.

## Aula 3 - Utilizando o Tailwind

### Aula 3 - Entendendo o Tailwind CSS - Vídeo 1

Transcrição  
Vamos discutir sobre o Tailwind CSS e explorar esse universo de estilização. Retornando aos nossos slides, qual é o conceito do Tailwind CSS? Ele é um framework utilitário, e vamos entender essa ideia de utilitário em breve. A proposta ao utilizar o Tailwind CSS é escrever menos CSS manualmente, ou seja, reduzir a necessidade de definir propriedades como margin, padding, border, bottom, entre outras. Assim, nos preocupamos menos com o nome das classes, pois não teremos um seletor aplicando um estilo complexo com várias propriedades a um elemento específico. Quando falamos de JavaScript e React, a ideia é que possamos interpretar as classes no JSX e entender o que o componente faz.

Por que escrever menos CSS? Temos feito isso até agora com sucesso. Qual é o contexto histórico do Tailwind CSS e sua premissa? O CSS foi criado por volta de 1996, quando a ideia de componentes, como conhecemos hoje, não existia. O suporte a JavaScript era limitado, e os frameworks e bibliotecas atuais não estavam disponíveis para ajudar. Ou seja, o CSS não foi pensado para as aplicações complexas que desenvolvemos atualmente. Esse é o ponto. Com muitas telas, estados dinâmicos e reatividade, alteramos, clicamos em botões, mudamos cores de fundo e de botões, e adicionamos elementos dinamicamente. Quando o CSS foi criado, isso não existia.

Explorando os desafios e soluções do CSS tradicional

Quais eram os desafios enfrentados naquela época? Já mencionamos alguns, mas vale relembrar. Havia dificuldade em escalar e manter o CSS. Diferentes pessoas escreviam estilos, criando classes como .botão e .btn, resultando em falta de padronização. Refatorar, trocar ou apagar uma classe sem querer poderia quebrar algo, e não havia segurança para refatorar CSS. No entanto, era possível consertar. A solução foi criar e seguir um padrão, organizando o estilo de forma escalável. Deixei uma atividade para entender o paradigma por trás de cada padrão. A ideia aqui não é se aprofundar nisso, mas destacar que havia uma solução para organizar o estilo.

O Tailwind foi criado por volta de 2017 por Adam Wathan, e cresceu com a comunidade do Laravel, um framework PHP. A comunidade do Vue também adotou o Tailwind, e posteriormente, o pessoal do React e do Next.js também o abraçou.

Experimentando o Tailwind CSS no Playground

Agora, vamos ver como esse framework funciona na prática. Vamos usar o Playground do Tailwind para experimentar antes de chegar ao React. Se escanear o QR Code na tela, será direcionado para lá. Se preferir digitar no navegador, o endereço é play.tailwindcss.com. Isso já o deixará pronto para acessar o mesmo endereço que eu. Vou organizar minha tela e entrar no navegador.

Queremos explorar o Playground do Tailwind, certo? Então, play.tailwindcss.com. Vou aumentar um pouco o zoom. Vamos pensar no que fazíamos antes. Qual é a ideia? Vamos criar três quadrados orientados em coluna, usando Flex, com tamanho de 200 pixels cada, e cada um com uma cor diferente. Como faríamos isso usando CSS tradicional? Criaríamos uma div para organizá-los externamente e outra div para cada quadrado.

Comparando CSS tradicional e Tailwind CSS

Primeiro, vamos criar a estrutura básica em HTML:

```HTML
<div>
    <div></div>
</div>
```

Em seguida, adicionamos uma classe para estilizar os quadrados:

```HTML
<div>
    <div class="quadrado"></div>
</div>
```

Agora, vamos adicionar mais quadrados:

```HTML
<div>
    <div class="quadrado"></div>
    <div class="quadrado"></div>
    <div class="quadrado"></div>
</div>
```

No CSS tradicional, definiríamos as propriedades da classe .quadrado assim:

```CSS
.quadrado {
    height: 200px;
    width: 200px;
    background: red;
    margin-bottom: 5px;
}
```

Lembramos que a premissa do Tailwind é que escrevamos menos CSS. Em vez de pensarmos dessa forma, utilizaremos classes utilitárias do Tailwind. Vamos apagar tudo isso e voltar ao nosso HTML. Se quisermos um elemento com largura de 200 pixels, faremos assim:

```HTML
<div class="w-[200px]"></div>
```

Além disso, queremos definir uma altura de 200 pixels:

```HTML
<div class="w-[200px] h-[200px]"></div>
```

Queremos também um background-color vermelho. No Tailwind, usamos:

```HTML
<div class="w-[200px] h-[200px] bg-red-500"></div>
```

Aplicando classes utilitárias do Tailwind CSS

Com isso, conseguimos, usando apenas classes utilitárias, alcançar o resultado desejado. Podemos trocar e aplicar as mesmas classes a outros elementos, alterando, por exemplo, de red para green e o de baixo para blue:

```HTML
<div>
    <div class="w-[200px] h-[200px] bg-red-500"></div>
    <div class="w-[200px] h-[200px] bg-green-500"></div>
    <div class="w-[200px] h-[200px] bg-blue-500"></div>
</div>
```

Podemos também usar o flex para organizar nosso container. Na div externa, aplicamos a classe flex:

```HTML
<div class="flex">
    <div class="w-[200px] h-[200px] bg-red-500"></div>
    <div class="w-[200px] h-[200px] bg-green-500"></div>
    <div class="w-[200px] h-[200px] bg-blue-500"></div>
</div>
```

Ao fazer isso, os quadrados são organizados automaticamente. Podemos adicionar espaçamento entre os elementos com a propriedade gap. Por exemplo, gap-2 aplica essa estilização:

```HTML
<div class="flex gap-2">
    <div class="w-[200px] h-[200px] bg-red-500"></div>
    <div class="w-[200px] h-[200px] bg-green-500"></div>
    <div class="w-[200px] h-[200px] bg-blue-500"></div>
</div>
```

Se quisermos que o layout seja em coluna, utilizamos flex-col:

```HTML
<div class="flex flex-col gap-2">
    <div class="w-[200px] h-[200px] bg-red-500"></div>
    <div class="w-[200px] h-[200px] bg-green-500"></div>
    <div class="w-[200px] h-[200px] bg-blue-500"></div>
</div>
```

Explorando a documentação do Tailwind CSS

Essa é a premissa do Tailwind: em vez de escrever estilos, encontramos uma classe utilitária que aplica o estilo desejado. Na documentação do Tailwind, ao buscar por "Tailwind CSS" no Google e acessar o primeiro resultado, encontramos a seção "Core Concepts". Lá, vemos exemplos como mx-auto para margem automática no eixo X, flex, entre outros. A documentação é bem detalhada, cobrindo espaçamento, tamanho, tipografia, e mais.

Por exemplo, para font-size, temos text-xs para extra pequeno, text-sm para pequeno, e assim por diante. Também encontramos text-decoration-line, text-transform, e a cor do texto. Existem várias formas de aplicar estilos usando apenas classes utilitárias.

Algo comum é o padding. Na seção de Layout, vemos o padding com o prefixo p-. Podemos usar valores em pixels ou pré-definidos, como p-4 e p-8, para controlar o padding. O mesmo vale para margin, com m-, e para tamanhos máximos de largura e altura.

Desenvolvendo a aplicação Poupaapp com Tailwind CSS

Para aprender a base do Tailwind CSS, vamos desenvolver a aplicação Poupaapp do zero, recriando a tela que já fizemos com CSS Modules, agora usando Tailwind. Assim, entenderemos as diferenças entre eles e poderemos escolher o que preferimos. No mercado de trabalho, estaremos prontos para ambos os cenários, seja Tailwind ou CSS Modules, e aptos a desenvolver e estilizar componentes.

Por enquanto, essa era a conversa que queríamos ter. Agora é hora de pôr a mão na massa, criar o projeto e desenvolver o Poupaapp novamente. Nos vemos na próxima aula.

### Aula 3 - Iniciando o projeto - Vídeo 2

Transcrição  
Vamos criar nosso projeto, instalar o Tailwind e começar a configurar e estilizar nosso projeto. O arquivo no Figma está aberto, o mesmo da aula anterior, com o projeto. Além disso, a documentação que estávamos visualizando no vídeo anterior, disponível em tailwindcss.com, possui um botão "Get Started" para começarmos. A primeira coisa que ele exibe é a instalação. Vou aumentar um pouco o zoom e, por coincidência, a primeira opção que ele mostra é utilizando o Vite. É com o Vite que vamos criar este projeto, então precisamos seguir essas instruções.

A primeira coisa que ele diz é: "Primeiro, crie o seu projeto." Vamos ao terminal, entrar na área de trabalho e chamar o comando para criar o projeto:

> cd Desktop/  
> npm create vite@latest my-project  
> cd my-project

Configurando o template React

No nosso caso, queremos usar o template de React, então podemos executar o mesmo comando que executamos na aula anterior:

> npm create vite@latest poupaapp -- --template react  
> cd poupaapp/

O Vite vai criar o projeto. No meu caso, ele já está instalado, mas pode ser que, no seu caso, ele peça para instalar o Vite localmente. Confirme a instalação e, no final, tudo estará certo. Agora, vamos entrar na pasta criada e rodar npm i para instalar todas as dependências:

> npm i

Assim que terminar, podemos limpar o terminal e usar npm run dev para verificar se tudo está funcionando:

> npm run dev

Clique com o botão direito para abrir o link, e ele deve mostrar a página base do React com o Vite.

Instalando e configurando o Tailwind

Agora, podemos seguir com o que a documentação nos pede. O segundo passo é instalar o Tailwind. Ele diz para instalar o tailwindcss e @tailwindcss/vite. Vamos instalar essas duas bibliotecas. No terminal, copie o comando da documentação e cole:

> npm install tailwindcss @tailwindcss/vite

O tailwindcss cuidará do CSS propriamente dito, e o @tailwindcss/vite usará o Vite para preparar tudo que o Tailwind precisa. Por isso, precisamos dessas duas bibliotecas.

O terceiro passo é configurar o plugin do Vite. Vamos ao arquivo vite.config.js. Primeiro, abra o projeto no VSCode. No vite.config.js, precisamos adicionar nosso plugin. Feche o Copilot, pois não vamos utilizá-lo. Voltando à documentação, vamos trazer o import:

```JSX
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

Importando Tailwind no projeto

Além disso, precisamos fazer um import do tailwindcss no nosso arquivo CSS. Vamos copiar esse import e ir ao src/index.css. Selecione tudo e apague, deixando apenas o import do Tailwind:

> @import "tailwindcss";

No arquivo main.jsx, o index.css é sempre importado. Vamos agora limpar o nosso app.css, removendo os states e tudo que está sendo importado. Já fizemos isso anteriormente. Podemos deletar o react.svg, o vite.svg e o app.css. Por enquanto, vamos deixar assim.

Testando a configuração do Tailwind

Nosso próximo passo é testar se o Tailwind está funcionando. No terminal, ao rodar o comando npm run dev novamente, o servidor será iniciado. No navegador Chrome, acessando a porta 5173 e recarregando a página, veremos que está tudo em branco. Isso ocorre porque não temos nada no jsx. Ao verificar o console, não há erros, o que indica que está funcionando corretamente.

Aplicando estilos com Tailwind

Vamos começar a estilização, entendendo como o Tailwind funciona, como navegar na documentação e aplicar esses estilos. Primeiramente, podemos pensar em uma div que ocupe 100% da altura disponível e aplicar uma cor de fundo. Em vez de usar o método tradicional, onde criaríamos uma div com um className chamado container e aplicaríamos o estilo nesse seletor, faremos isso utilizando o Tailwind.

Na documentação, podemos buscar por "background". No lado esquerdo, encontramos tudo que o Tailwind oferece em relação a background. Vamos olhar a terceira opção, "background color". Para testar, podemos usar bg-black, que deixará o fundo todo escuro. Após aplicar isso, verificamos no Vite React e nada acontece. Isso ocorre porque não há tamanho definido, e o elemento está vazio.

Definindo altura mínima com Tailwind

Ao inspecionar o body, vemos uma div com a classe bg-black, mas sem tamanho. Podemos aplicar uma altura mínima. Na documentação, em "layout", "flexbox e grid", "espaçamento" e "tamanho", encontramos "sizing". Queremos olhar para min-height, ou seja, altura mínima. A opção desejada é min-h-screen, que define a altura mínima como 100vh (altura da visualização disponível).

Aplicamos a classe min-h-screen junto com bg-black:

`<div className="bg-black min-h-screen">`

Ao voltar para o Vite React, o estilo e a altura mínima são aplicados corretamente. No explorador de elementos, vemos as duas classes, e nos developer tools podemos verificar que bg-black aplica a cor de fundo e min-h-screen define a altura mínima de 100vh.

Conclusão e próximos passos

Essa é a premissa: conseguimos o resultado desejado sem escrever CSS diretamente, apenas utilizando as classes utilitárias do Tailwind. Mas isso é apenas o começo. Queremos agora trazer as cores do projeto. O Tailwind não conhece as cores do nosso projeto, então vamos ensiná-lo quais cores utilizaremos e como deixá-las disponíveis. Esse será o assunto do nosso próximo vídeo. Nos vemos lá!

### Aula 3 - Inserindo variáveis de cores, logo e limpeza do projeto - Vídeo 3

Transcrição  
Vamos pensar em como configurar as cores do nosso projeto. No Figma, temos definidas cores neutras, primárias e secundárias que utilizamos neste projeto. No GIST que compartilhamos, temos as variáveis CSS definidas. No entanto, desta vez, não vamos usá-las da mesma forma, pois agora estamos utilizando o Tailwind CSS.

Quando estávamos no Playground, utilizamos algo como bg-red-500. Ao salvar, estávamos usando as cores conhecidas pelo Tailwind CSS. Vamos entender o que o Tailwind CSS conhece de cores e como utilizá-las. Na documentação, na seção de Core Concepts (Conceitos Principais), encontramos a parte de Colors (Cores). A paleta de cores é vasta e possui um intervalo de opacidade, permitindo visualizar essa gama de valores. Quando usamos red-500, utilizamos o vermelho intermediário. Se trocarmos para red-50, veremos um tom de vermelho muito mais claro, quase rosa.

Exemplificando o uso de cores no Tailwind CSS

Para ilustrar, podemos começar com um exemplo básico de como o Tailwind CSS aplica essas cores:

```JSX
<div className="bg-red-500 min-h-screen">
</div>
```

Esse exemplo utiliza a classe bg-red-500 para aplicar um fundo vermelho. Se quisermos um tom mais claro, podemos alterar para:

```JSX
<div className="bg-red-50 min-h-screen">
</div>
```

Essas são as cores que o Tailwind CSS conhece, e há muitas disponíveis, como rosa, rosê, cinza, fúcsia, entre outras. Para quem trabalha com design, essa variedade é útil, mas no caso do Poupaapp, temos cores pré-definidas. No nosso cenário, temos o Tailwind CSS e cores específicas. Podemos usar as classes e utilitários para cores? Sim, conseguimos.

Personalizando cores com @theme no Tailwind CSS

Na documentação, há uma opção para personalizar cores. Podemos usar uma funcionalidade do CSS chamada @theme para definir cores customizadas com um prefixo --color--. Vamos trazer o @theme para o nosso projeto. No index.css, colaremos o @theme.

```CSS
@import "tailwindcss";

@theme {
  --color-midnight: #121063;
  --color-tahiti: #3ab7bf;
  --color-bermuda: #78dcca;
}
```

Um detalhe importante: se não estiver vendo o quadradinho com o hexadecimal da cor que a classe CSS aplica, é possível resolver isso. Nas extensões do VS Code, uma delas é a do Tailwind CSS, chamada Tailwind CSS IntelliSense, do Tailwind Labs. Essa extensão ajuda no autocomplete de classes e outras funcionalidades. Você pode instalá-la, se desejar, mas o projeto funcionará mesmo sem ela.

Adaptando cores personalizadas para o projeto

Vamos fechar o parêntese e adicionar nossas cores. Não estamos falando de Midnight, Tahiti e Bermuda, mas sim das nossas cores. Vamos voltar ao nosso gist, copiar tudo o que está lá, exceto o :root, que é um pseudo-seletor, e colar abaixo do que já trouxemos, mantendo os exemplos. Precisamos adaptar esses valores para usar o prefixo --color-. Vamos copiar color- e colar logo após o primeiro --. No final, ficará assim:

```CSS
@import "tailwindcss";

@theme {
    /* Neutral colors */
    --color-neutral-darker: #1C1D21;
    --color-neutral-background: #212229;
    --color-neutral-surface: #2A2C34;
    --color-neutral-header: #33353F;
    --color-neutral-text: #F5F5F5;

    /* Primary colors */
    --color-primary-highlight: #7693FF;

    /* Secondary colors */
    --color-secondary-income: #06FF62;
    --color-secondary-expense: #F8782B;
}
```

Agora podemos remover os exemplos que trouxemos e testar.

Aplicando cores personalizadas no projeto

Voltando à documentação, com base no exemplo fornecido, só precisamos adicionar o prefixo --color-. O que vem depois do prefixo pode ser utilizado, como bg-midnight, que é o exemplo dado. No caso do pop-up, temos uma cor de fundo, que é 21, 22, 29. Em vez de usar o rosê, vamos usar nossa cor de fundo, neutral-background. Note que o prefixo não será incluído, então vamos copiar neutral-background e substituir red-50 por neutral-background. No Chrome, a cor já está customizada. O Tailwind CSS, por trás dos panos, transforma a classe bg-neutral-background em uma classe com background-color, chamando a variável que definimos: --color-neutral-background.

```JSX
<div className="bg-neutral-background min-h-screen">
</div>
```

Integrando a logo do projeto

Agora, vamos trazer a logo do projeto. Com o VS Code aberto, vamos à pasta de downloads, onde já temos o logo em SVG, e movê-lo para a pasta "assets". No app.jsx, vamos adicionar o nosso aside. Dentro do aside, colocaremos a logo e a importaremos corretamente:

```JSX
import logo from './assets/logo.svg'
```

No nosso src, usaremos a logo que acabamos de importar:

```JSX
<div className="bg-neutral-background min-h-screen">
  <aside>
    <img src={logo} alt="" />
  </aside>
</div>
```

No navegador, as cores já estão definidas, a logo está no lugar e o aside já está iniciado.

Concluindo a configuração de cores e estilização

Estamos no caminho certo, com nossas cores customizadas e aprendendo a usar as cores disponíveis no Tailwind CSS. Vamos focar na estilização do pop-up e seguir com a componentização, como fizemos no encontro sobre CSS e módulos. Desta vez, não escreveremos nenhuma linha de CSS para aplicar esses estilos, confiando no Tailwind CSS para isso. Nos vemos na próxima aula.

### Aula 3 - Criando a barra lateral - Vídeo 4

Transcrição  
Vamos configurar nosso primeiro componente Aside utilizando o Tailwind e começar a perceber as diferenças entre CSS Modules e Tailwind CSS.

Para criar um componente, não há mistério. Dentro da pasta src, vamos criar uma nova pasta chamada "components" e, dentro dela, um novo arquivo Aside/index.jsx.

Recomendando extensões para Tailwind CSS

Sobre extensões, recomendamos instalar a extensão Tailwind CSS IntelliSense, desenvolvida pela equipe do Tailwind Labs. Essa extensão oferece funcionalidades como IntelliSense e autocomplete, que são bastante úteis.

No componente, faremos um export const Aside, que é uma arrow function, e retornaremos um elemento. Vamos começar definindo a estrutura básica do componente:

```JSX
export const Aside = () => {

}
```

Adicionando elementos ao componente Aside

Agora, vamos adicionar o retorno do componente, que inicialmente será vazio:

```JSX
export const Aside = () => {
    return ()
}
```

Em seguida, vamos adicionar um elemento aside e uma imagem dentro do retorno. Para isso, precisamos importar o logo corretamente:

```JSX
import logo from '../../assets/logo.svg';

export const Aside = () => {
    return (
        <aside>
            <img src={logo} alt="" />
        </aside>
    )
}
```

Integrando o componente Aside no App

No App.jsx, podemos importar o Aside. Verificamos se o código já importou o componente automaticamente. Após salvar, conferimos no Vite React e tudo deve estar igual, apenas em uma nova localização.

```JSX
import { Aside } from "./components/Aside";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Aside />
    </div>
  )
}
```

Adicionando texto e verificando no Vite React

Podemos adicionar o texto "Desenvolvido por Alura. Projeto fictício sem fins comerciais" ao lado da imagem, abaixo dela, em um parágrafo. Ao verificar no Vite React, o texto e a imagem devem estar presentes.

```JSX
<aside>
    <img src={logo} alt="" />
    <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
</aside>
```

Definindo estilos e layout com Tailwind CSS

Agora, vamos definir tamanhos e padding necessários para o layout. Precisamos definir a largura de 282 pixels e o fundo como "neutral header". No VS Code, adicionamos as classes CSS. Para o fundo, usamos bg-neutral-header.

```JSX
<aside className="bg-neutral-header max-w-[282px]">
```

Definimos uma altura mínima de 100vh, como feito no App.jsx. Utilizamos min-h-screen para definir a altura mínima como a altura da tela disponível.

```JSX
<aside className="bg-neutral-header max-w-[282px] min-h-screen">
```

Aplicando padding e estilizando o parágrafo

Para aplicar padding, temos padding-y (vertical) e padding-x (horizontal). No Figma, o padding lateral é de 40 pixels e o vertical de 80 pixels. No Tailwind, usamos py-20 para o padding vertical e px-10 para o horizontal.

```JSX
<aside className="bg-neutral-header max-w-[282px] min-h-screen py-20 px-10">
```

Precisamos agora estilizar nosso parágrafo, aplicando as cores, tamanhos e fontes definidos no Figma. Primeiramente, aplicaremos a cor neutra do texto. No VS Code, no arquivo index.css, temos um neutral text. Para aplicar cor no Tailwind, abrimos um className no próprio parágrafo e usamos o prefixo text seguido do tamanho ou cor desejada.

```JSX
<p className="text-neutral-text text-[13px] leading-[120%] text-center">
```

Ajustando espaçamento e finalizando o componente

O que falta é o espaçamento entre a imagem e o texto. O tamanho é de 56 pixels. Podemos usar o Flex para isso. No Aside, aumentaremos o número de classes e usaremos o Flex. Para isso, aplicamos a classe flex. Se quisermos em coluna, usamos flex-col. Para adicionar um gap, verificamos no Figma que é 56 pixels, então aplicamos gap-[56px].

```JSX
<aside className="bg-neutral-header max-w-[282px] min-h-screen py-20 px-10 flex flex-col gap-[56px]">
```

Ao salvar e verificar no Vite React, o resultado está bem próximo do final. O Aside está pronto, com todas as classes do Tailwind aplicadas para alcançar o resultado desejado. Um detalhe importante é que a fonte usada no projeto é a Work Sans. No Guia, vemos que a fonte é Work Sans, e precisamos trazê-la para o projeto. O Tailwind possui uma maneira própria de fazer isso, que aprenderemos na sequência.

### Aula 3 - Importando a fonte - Vídeo 5

Transcrição  
Vamos agora incorporar a fonte Work Sans em nosso projeto e aprender uma das formas de aplicar isso, pensando em estilos globais. No navegador, já abrimos o link direto do Figma para a Work Sans, mas também é possível obter o link direto no Google Fonts. No lado direito, em cima, temos a opção "Get Font". Vamos pegar o "Get Embed Code" e utilizar o @import para fazer isso diretamente no CSS.

No VS Code, deixaremos apenas o index.css aberto. Vamos trazer esse import da URL para dentro do nosso index.css, colocando-o no topo. Isso fará a importação da fonte.

> @import url('<https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap>');

Aplicando a fonte globalmente

Agora que importamos a fonte, queremos aplicá-la. Podemos consultar a documentação, procurar por fonte e acessar a parte de texto, que está como "typography". Lá, conseguimos usar as fontes disponíveis, e ele fornece alguns exemplos, mencionando o uso de um valor customizado. Podemos usar o font-family para personalizar nossa fonte.

No entanto, não queremos aplicar isso elemento por elemento; queremos que seja global. Todas as fontes, sem exceção, serão Work Sans. Como fazemos isso? No VS Code, a primeira coisa é definir essa nova fonte. Dentro do @font-face, faremos um font-family com o nome da fonte que desejamos, que é Work Sans. O valor disso é o que pegamos do Figma: Work Sans, sem serifa.

> --font-work-sans: "Work Sans", sans-serif;

Utilizando o Tailwind para estilos globais

Assim, já conseguimos aplicar esse estilo sempre que necessário. Não queremos fazer isso componente a componente, mas sim globalmente. Para alcançar esse resultado, utilizaremos algumas diretivas do Tailwind. O que vamos escrever agora não é do CSS, mas do Tailwind. Vamos começar a pensar nas camadas do Tailwind, utilizando a palavra em inglês @layer.

```JSX
@layer base {
    html {
        @apply font-work-sans;
    }
}
```

Note que o layer que estamos usando é uma extensão do Tailwind, que já foi mostrada anteriormente. Temos quatro camadas: tema, base, componentes e utilitários. Ao falarmos sobre a aplicação de um CSS globalmente, estamos nos referindo à aplicação na camada mais básica, ou seja, no nível mais baixo. Vamos aplicar esse CSS. Se é CSS que vamos aplicar, abrimos e fechamos as chaves. O que queremos aplicar? Podemos usar um seletor, como o seletor do HTML, que poderia ser body ou *. Neste caso, vamos aplicar no html.

Verificando a aplicação da fonte

Observe que o VS Code indica que a regra @apply não é reconhecida como uma regra CSS, e de fato não é, pois pertence ao Tailwind. Vamos verificar se isso funcionou. Ao abrir no Chrome, no Vite React, a fonte já deve ter mudado. Se comentarmos essa linha ou a deletarmos, a fonte encolhe, pois a fonte padrão é um pouco menor. Quando aplicamos, a fonte muda ligeiramente, e podemos ver isso acontecendo. Ao inspecionar os elementos, conseguimos ver no html o font-family: var(--font-work-sans) aplicado. Note que isso está na layer-base, e é o próprio Tailwind que faz isso por nós.

Considerações finais sobre a aplicação de fontes

Com tudo no lugar, conseguimos utilizar as fontes normalmente. Recapitulando, importamos as fontes, e o import sempre fica no topo. Depois, criamos a variável para a fonte work-sans e, em seguida, aplicamos.

Vini, é necessário sempre colocar no global layer-base no html? Não, depende. É comum ter fontes diferentes para os títulos e para o corpo da página. Nesse cenário, não aplicamos uma fonte global, mas apenas nos elementos necessários. No caso do pop-up, sim, é global, e para isso usamos o layer-base e o apply.

Vou deixar uma atividade em texto para entender melhor como isso funciona, mas, por enquanto, era isso que precisávamos saber. Queremos aplicar um estilo global? Sim, queremos aplicar um estilo global. A dicção é clara: @layer base, dentro dele passamos o seletor e, dentro do seletor, aplicamos o estilo. Nossa fonte já está no lugar. Vamos continuar desenvolvendo os componentes do nosso pop-up no próximo vídeo.

### Aula 3 - Para saber mais: CSS @import, @theme e @apply

Hoje vamos abrir a caixa-preta de três palavrinhas que apareceram no nosso arquivo de estilos: @import, @theme e @apply. À primeira vista, pode parecer que tudo isso faz parte do mesmo pacote, mas não é bem assim. Temos que separar o que é puro CSS do que é mágica do Tailwind.

@import

Esse é 100% CSS puro. É como dizer pro navegador: "ei, traz esse outro arquivo de estilos aqui pra dentro".

No nosso caso:

```CSS
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap'); 
```

Estamos chamando a fonte Work Sans direto do Google Fonts. Isso não tem nada a ver com Tailwind, funcionaria do mesmo jeito em qualquer projeto CSS.

Já aqui:

```CSS
@import "tailwindcss"; 
```

Estamos puxando o núcleo do Tailwind pro nosso arquivo. É como plugar uma biblioteca externa: se você não importa, não tem como usar suas classes utilitárias.

@theme

Aqui entramos no território Tailwind. Essa diretiva é a forma que o Tailwind nos dá pra criar um tema customizado usando CSS custom properties (as famosas variáveis --alguma-coisa).

Exemplo do nosso curso:

```CSS
@theme { 
--color-neutral-darker: #1C1D21; 
--color-primary-highlight: #7693FF; 
--font-work-sans: "Work Sans", sans-serif; 
} 
```

Traduzindo: estamos criando nosso próprio vocabulário de design (cores, tipografia, etc.) que depois pode ser usado em qualquer lugar do projeto. É como montar um dicionário onde você escreve "azul-principal" e ele entende que isso significa #7693FF.

Isso não é só CSS puro porque o @theme não existe no CSS tradicional. Ele é interpretado pelo compilador do Tailwind, que pega essas variáveis e integra ao sistema de utilitários.

@apply

Esse é outro recurso do Tailwind. O que ele faz é pegar classes utilitárias e aplicá-las dentro de uma regra CSS.

Exemplo:

```CSS
@layer base { 
html { 
@apply font-work-sans; 
} 
} 
```

Aqui, em vez de escrever manualmente:

```CSS
html { 
font-family: "Work Sans", sans-serif; 
} 
```

A gente deixa o Tailwind traduzir a classe font-work-sans (que criamos no @theme) e aplicar direto no elemento html. Ou seja: estamos reaproveitando a linguagem utilitária do Tailwind dentro do CSS.

Resumindo

- @import → vem do CSS puro, serve pra puxar estilos ou bibliotecas externas.
- @theme → exclusivo do Tailwind, cria variáveis globais (cores, fontes etc.) que viram parte do sistema.
- @apply → exclusivo do Tailwind, traz as classes utilitárias para dentro do CSS tradicional.

Se fosse uma analogia de cozinha:

- @import é como ir no mercado comprar os ingredientes.
- @theme é como organizar a despensa, rotulando os potes ("açúcar", "sal", "pimenta").
- @apply é como pegar os rótulos e usar direto na receita, sem precisar lembrar o ingrediente exato.

E é por isso que esse arquivo mistura um pouco de cada mundo. A base é CSS normal, mas com o Tailwind adicionando superpoderes que tornam o código mais consistente e fácil de manter.

Vida longa e próspera!

### Aula 3 - Criando o container principal - Vídeo 6

Transcrição  
Já está tudo preparado para continuarmos desenvolvendo nossa aplicação. O que faremos agora? Estamos com o Figma aberto e vamos criar nosso componente que irá sustentar a aplicação. Temos um container com largura máxima de 1200 pixels e o espaçamento interno entre os elementos, ou seja, entre o aside e o corpo principal, é de 24 pixels.

Com todas essas informações, já temos o necessário para criar o container. Vamos ao VS Code e, dentro de "Components", vamos criar um novo arquivo Container com "C" maiúsculo, na pasta index.jsx. Desta vez, não haverá estado de componente, e não escreveremos CSS manualmente.

Criando o componente Container

Primeiro, vamos exportar a constante Container. Para isso, começamos com a declaração da constante:

```JSX
export const Container
```

Em seguida, definimos Container como uma arrow function:

```JSX
export const Container = () => {

}
```

Faremos uma desestruturação para pegar children. Desta vez, receberemos props, então pegamos children e fazemos o retorno de algo:

```JSX
export const Container = ({ children }) => {

}
```

Definindo o retorno do componente

Agora, vamos adicionar o retorno. Podemos usar uma div, pois não há valor semântico neste caso, e dentro dessa div renderizamos children:

```JSX
export const Container = ({ children }) => {
    return
}
```

Com o retorno definido, podemos completar a função:

```JSX
export const Container = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
```

Estilizando o componente com Tailwind

Agora, vamos aos nossos estilos. Já sabemos como fazer alguns deles. Por exemplo, largura máxima. Como definimos a largura máxima? max-w-1200px. Poderíamos fazer uma conta baseada no número? Poderíamos, mas neste cenário preferimos deixar explícito, pois contas muito grandes podem dificultar o entendimento do que está acontecendo.

Começamos adicionando a classe de largura máxima:

```JSX
<div className="max-w-[1200px]">
```

O que mais queremos? Queremos que a margem horizontal seja automática para centralizar. Se queremos margem, usamos m. Se queremos margem horizontal, usamos mx. Se queremos que ela seja automática para centralizar, usamos mx-auto:

```JSX
<div className="max-w-[1200px] mx-auto">
```

Se queremos um espaçamento, um gap de 24 pixels, podemos usar flex e colocar um gap de 6, pois 6x4 é 24. Então, gap-6:

```JSX
<div className="max-w-[1200px] mx-auto flex gap-6">
```

Repare que o próprio VS Code já faz essa conta. Ele indica que gap-6 significa 1.5 rem, que equivale a 24 pixels.

Utilizando o componente Container no App
O que mais queremos fazer agora? Usar esse componente. No app.jsx, vamos colocar o nosso Container. Ele já foi importado para nós:

```JSX
import { Container } from "./components/Container";
```

Agora, vamos utilizar o Container no nosso componente App:

```JSX
function App() {

  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
      </Container>
    </div>
  )
}
```

Verificando o resultado e próximos passos

Se olharmos agora no nosso BitMix React, já está com o Container. Se fizermos uma inspeção, devemos tomar cuidado para deixar a tela com mais de 1.200 pixels. A largura máxima já está lá, o gap já está lá. Não temos nada ali dentro, mas o gap já está presente, e ele já está centralizado na tela. O mx-auto também funcionou. Então, o Container está pronto.

Lembrando que agora estamos utilizando o idioma do Tailwind. A ideia é não escrever mais CSS manualmente e usar apenas essas classes utilitárias. Então, é isso. O pullback está nascendo, os componentes estão sendo desenvolvidos, mas ainda há bastante coisa para fazermos. Estamos aguardando vocês no nosso próximo encontro.

### Aula 3 - Implementando input de texto e Main - Vídeo 7

Transcrição  
Vamos continuar desenvolvendo o projeto. Agora é o momento de olharmos para o corpo da aplicação. Precisamos de um elemento que contenha todos os outros elementos. Observando o Figma, notamos um espaçamento, alinhamento e separação entre eles. Em seguida, podemos desenvolver nosso campo de busca (search input).

Vamos utilizar a mesma estratégia que usamos com o CSS Modules. Sem demoras, vamos ao VS Code. Saindo do Figma e indo para o VS Code, vamos criar um novo componente. Primeiro, criaremos o componente externo em main/index.jsx. Novamente, estamos utilizando React, então não há muitas novidades. Vamos exportar uma constante Main, que será uma arrow function.

```JSX
export const Main = () => {
}
```

Para esse componente, capturaremos children, fazendo o destructuring das props.

```JSX
export const Main = ({ children }) => {
}
```

Faremos um retorno do componente Main, renderizando children.

```JSX
export const Main = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}
```

Aplicando estilos com Tailwind

Utilizaremos as classes do Tailwind para aplicar os estilos desejados. Queremos que a largura seja 100%, e para isso usamos w-full, que ocupa 100% da largura.

```JSX
<main className="w-full">
    {children}
</main>
```

Além disso, precisamos de um padding de 80, conforme visto no Figma. Para isso, utilizamos py-20, pois 10 é 40 e 20 é 80.

```JSX
<main className="w-full py-20">
    {children}
</main>
```

Agora, podemos ir ao nosso app.jsx e trazer o componente Main para cá. O VS Code já importou automaticamente para nós.

```JSX
import { Aside } from "./components/Aside"
import { Container } from "./components/Container"
import { Main } from "./components/Main"

function App() {

  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>

        </Main>
      </Container>
    </div>
  )
}

export default App
```

Voltando ao nosso aplicativo, faremos uma inspeção. Se procurarmos pelo elemento main, veremos que ele já está ocupando 100% da largura e possui um padding de 80 para cima e para baixo.

Preparando o componente de busca

Agora, vamos para o componente de busca. Para isso, precisamos fazer o download dos ícones. Se ainda não baixamos, eles são os mesmos que usamos anteriormente e estão disponíveis na seção de preparação do ambiente, junto com a imagem e o logotipo que utilizamos. Vamos trazer os ícones para cá, arrastando a pasta de ícones para dentro da pasta de componentes no VS Code.

Vamos começar a construir nosso campo de busca em search-input/index.jsx. Novamente, estamos utilizando React. Vamos exportar uma constante SearchInput, que será uma arrow function.

```JSX
export const SearchInput = () => {
}
```

Vamos pegar as props, ou seja, tudo que recebermos, e passá-las para o nosso componente de entrada (input).

```JSX
export const SearchInput = (props) => {
}
```

Faremos um retorno, e como queremos colocar um ícone antes, colocaremos uma div.

```JSX
export const SearchInput = (props) => {
    return (
        <div>

        </div>
    )
}
```

Integrando ícones e input

Em seguida, chamaremos nosso ícone de busca (search).

```JSX
import { IconSearch } from "../icons"

export const SearchInput = (props) => {
    return (
        <div>
            <IconSearch />
        </div>
    )
}
```

Ao lado do ícone, colocaremos o input.

```JSX
<div>
    <IconSearch />
    <input type="text"/>
</div>
```

Vamos remover o tipo text, mas podemos deixá-lo se quisermos. Faremos o spread das props recebidas para o input.

```JSX
<input type="text" {...props} />
```

Agora podemos utilizá-lo. No Main, chamaremos o SearchInput. Podemos, por exemplo, passar um name. Como estamos falando de busca, podemos usar q, de query de busca. O name será q.

```JSX
<Main>
    <SearchInput name="q" />
</Main>
```

Estilizando o campo de busca

Vamos verificar se está funcionando. No Chrome, recarregaremos a página e faremos uma inspeção. Na div, veremos o svg e o input. O Tailwind já faz um reset, removendo bordas e outros estilos. Queremos organizá-lo para que fique com o fundo da cor necessária, conforme está no Figma. Precisamos centralizá-lo, mudar a cor da fonte, posicionar o ícone corretamente, adicionar padding e outros ajustes.

Vamos utilizar a mesma estratégia que usamos nos CSS modules. No nosso search input, vamos começar a organizar essa estrutura. Primeiramente, vamos adicionar a classe flex para definir o display como flex.

```JSX
<div className="flex">
```

Queremos também alinhar os itens ao centro, então utilizaremos a classe do Tailwind, items-center, para alinhar verticalmente no centro.

```JSX
<div className="flex items-center">
```

Além disso, queremos o mesmo background color que temos no aside. Podemos buscar o valor bg-neutral-header, que é o background desejado.

```JSX
<div className="flex items-center bg-neutral-header">
```

Após salvar, podemos verificar o resultado. Observando no Figma, já está começando a tomar forma. Agora, precisamos aplicar o padding interno. Ao selecionar a lupa, podemos ver que o padding é de 12 para cima e para baixo, e 16 para os lados. Assim, para cima e para baixo, utilizamos padding-y com valor 3, que equivale a 12. Para os lados, padding-x com valor 4, que equivale a 16. Cada unidade representa 0,25 rem, então o valor 4 é 1 rem.

```JSX
<div className="flex items-center bg-neutral-header py-3 px-4">
```

Ajustando o layout e finalizando

Ao verificar na tela, já está bem mais parecido, e o tamanho está fluido. O nosso contêiner superior está com tamanho fluido, e podemos aplicar o mesmo ao nosso input com className: w-full. Vamos ajustar isso.

```JSX
<input type="text" className="w-full" {...props} />
```

Agora, o componente externo e o interno estão fluindo corretamente.

Queremos agora arredondar os cantos. Antes disso, vamos adicionar o espaçamento entre o input e o ícone. No Figma, o valor é 16, que corresponde a gap-4.

```JSX
<div className="flex items-center bg-neutral-header py-3 px-4 gap-4">
```

Verificando no Chrome, já está correto. Agora, precisamos arredondar os cantos. Na documentação do Tailwind, na seção de bordas, encontramos a opção Border Radius. No Figma, o Corner Radius é 8, que corresponde à classe rounded-lg, equivalente a meio rem.

```JSX
<div className="flex items-center bg-neutral-header py-3 px-4 gap-4 rounded-lg">
```

Após aplicar essa classe, verificamos no Chrome e está bem parecido com o desejado. Agora, vamos estilizar o nosso input. Queremos definir o tamanho e a cor da fonte. No className do input, utilizamos text-neutral-text para a cor, definida no index.css.

```JSX
<input type="text" className="w-full text-neutral-text" {...props} />
```

Queremos também definir o tamanho da fonte e o line-height. No Figma, o parágrafo large tem tamanho de fonte 20 e line-height de 125%.

```JSX
<input type="text" className="w-full text-neutral-text text-[20px] leading-[125%]" {...props} />
```

Verificando no Chrome, tudo está conforme o esperado, semelhante ao que vimos no Figma. Com isso, nossa estrutura principal está pronta. Agora, vamos continuar evoluindo e pensar em uma estratégia para reescrever os componentes de tipografia. Nos vemos na próxima aula. Até mais!

### Aula 3 - Desenvolvendo componente para tipografia - Vídeo 8

Transcrição  
Vamos então pensar no nosso componente de tipografia. Sem demoras, vamos para a nossa pasta de componentes e criar um novo arquivo chamado typography/index.jsx. Vamos usar a mesma estratégia de antes, criando uma constante de tags. Vamos focar apenas no que precisamos, criando uma tag p que representa o contexto do body. Se alguém passar um h1, por exemplo, vamos pegar a tag h1. Se passar uma tag h2, vamos pegar a tag h2. Essas são as variantes que vamos receber.

Para começar, definimos a constante TAGS:

```JSX
const TAGS = {
    body: 'p',
    h1: 'h1',
    h2: 'h2'
}
```

Exportando a constante Typography

Agora já podemos fazer um export da constante Typography. Vamos receber várias propriedades, então vamos pensar no que fazer. Já vamos fazer o return de algo, colocando entre parênteses para seguir nosso padrão. O que queremos fazer? A primeira coisa é escolher qual será a variante que será renderizada. Vamos receber uma propriedade chamada variant e, baseado nisso, vamos pegar nosso componente. Qual é o nosso componente? Vamos nas nossas tags e pegamos na posição da variant que recebemos. Mas se alguém passar algo inválido, isso não será adequado. Então, se alguém passar algo inválido e o resultado for undefined, podemos passar por padrão tags.p. Passamos o body, tags.body, agora sim. Com isso, já sabemos que temos um componente para ser renderizado.

```JSX
export const Typography = ({ variant }) => {
    const Component = TAGS[variant] || TAGS.body;
    return (
        <Component>
        </Component>
    );
}
```

Adicionando children ao componente

O que mais queremos pegar aqui? Queremos pegar, por exemplo, children. O que vamos receber de filho? Qual é o texto que será exibido aqui dentro? Então exibimos children lá dentro.

```JSX
export const Typography = ({ variant, children }) => {
    const Component = TAGS[variant] || TAGS.body;
    return (
        <Component>
            {children}
        </Component>
    );
}
```

Definindo classes de estilo

O que mais queremos? Agora queremos definir as classes. Imagine que cada estilo terá uma variante diferente. Vamos criar uma constante chamada VARIANT_CLASS. Podemos colocar tudo em maiúsculo e usar um sublinhado para separar VARIANT de CLASS. Agora vamos seguir a mesma estratégia das tags em si. Aqui não queremos definir o parágrafo, mas sim os estilos. Estamos falando de font-size, font-color, margem, entre outros. Uma coisa que já podemos definir por padrão para todos é a margem. Não importa se é para cima, para baixo, de um lado ou para o outro, será zero. Vamos ter margem zero.

```JSX
const VARIANT_CLASS = {
    body: 'm-0',
    h1: 'm-0',
    h2: 'm-0'
}
```

Aplicando classes e estilos

Agora já conseguimos pegar qual será o className. Então, a constante className virá de VARIANT_CLASS, novamente passando na variant. Se isso falhar, nosso padrão será pegar de VARIANT_CLASS.body. Se alguém passar uma variante que não existe, ele renderizará o texto e não dará erro. Agora já podemos passar um className, o className que acabamos de definir. Essa é a estrutura base, mas precisamos aplicar mais estilos aqui. Já sabemos como aplicar a cor do texto, que é text-neutral-text. Então já podemos trazer isso para todos eles, sem exceção. O que vai mudar agora? O tamanho da fonte.

```JSX
const className = VARIANT_CLASS[variant] || VARIANT_CLASS.body;

return (
    <Component className={className}>
        {children}
    </Component>
);
```

Definindo tamanhos de fonte

Qual é o tamanho da fonte de cada texto? Vamos verificar isso no Figma. Primeiro, vamos olhar o texto do corpo. No corpo, ele está com o AGMD, que indica um tamanho de 16. O peso é regular, e o espaçamento entre linhas é de 120%. Vamos ajustar isso.

No VS Code, no corpo do texto, vamos definir o tamanho. Poderíamos usar text- e passar o tamanho, mas é interessante consultar a documentação para reforçar o que é possível fazer em termos de tamanho de fonte. Na documentação, em "typography", ao lado esquerdo, encontramos "font-size" com alguns tamanhos pré-definidos: XS para 12, SM para 14, base para 16, e assim por diante. Para o corpo, que tem tamanho 16, usaremos a classe text-base. Já sabemos como definir o espaçamento entre linhas. Vamos olhar na documentação sobre espaçamento entre linhas. Queremos calcular o valor do leading, ou seja, o espaçamento entre linhas desejado. Se queremos 120%, faremos leading-120%. Vamos verificar se é isso mesmo: 120%, perfeito. Essas são as classes para o corpo do texto.

```JSX
const VARIANT_CLASS = {
    body: 'm-0 text-neutral-text text-base leading-[120%]',
    h1: 'm-0 text-neutral-text text-[31px] leading-[120%]',
    h2: 'm-0 text-neutral-text'
}
```

Ajustando o componente H1

Agora, para o H1. Vamos verificar o tamanho, que é 31, e o peso, que já é negrito por padrão, então não precisamos alterar. O tamanho 31 não existe na nossa lista de tamanhos pré-definidos, temos 30, mas não 31. Precisaremos definir o tamanho específico que queremos, usando text-[31px]. Precisamos também do espaçamento entre linhas, que é 120%, igual ao do corpo. Não faremos isso para todos os elementos, mas esses dois já servirão.

Organizando o arquivo app.jsx

No arquivo app.jsx, podemos organizar isso dentro de uma div, pensando na organização futura. Vamos chamar o Typography. Por padrão, ele é o corpo do texto, então não precisamos especificar a variante. Para o texto, podemos deixar e alterar isso, passando a variante h1 como uma string, apenas para o título. O segundo texto, que é o corpo, é o padrão, então podemos deixá-lo vazio.

```JSX
import { Typography } from "./components/typography";

<div>
    <Typography variant="h1">Olá, Vinny!</Typography>
    <Typography>Veja como estão suas finanças hoje,</Typography>
</div>
```

Ajustando o layout do main

Vamos verificar se ficou como desejado. O texto está lá, mas o main está com display: flex, mas não está orientado em coluna. Vamos ajustar isso. Onde está o nosso main? Na verdade, nem colocamos o main no app.jsx. Por isso, a div está fora do lugar. Ela deve ficar dentro do main, logo abaixo do search input. Vamos verificar agora. Perfeito, mas ainda precisamos estilizar o main para ter o espaçamento necessário, que é de 40 pixels. Vamos ajustar isso.

```JSX
<main className="w-full py-20 flex gap-10 flex-col">
```

Já temos a largura máxima e o padding. Agora, o display será flex com um gap de 40. Vamos verificar. Está quase lá. O que falta agora é colocar em coluna, flex-col. Agora sim, está do jeito que precisamos. Flex em coluna com o gap correto e o texto como deveria. Já temos a tipografia, podemos seguir em frente.

Planejando a próxima etapa

Vamos começar a pensar na parte inferior. Temos alguns cartões para criar, há bastante trabalho a fazer. Vamos a isso. Nos vemos na sequência.

### Aula 3 - Estruturando o card, card.header e card.body - Vídeo 9

Transcrição  
Vamos continuar desenvolvendo nosso projeto, agora focando nos cards. Seguiremos a mesma estratégia de arquitetura, criando o Card, Card.Header e Card.Body, assim como fizemos com os CSS Modules.

Dentro da pasta "componentes", criaremos um novo arquivo chamado Card. Dentro da pasta "Card", criaremos o arquivo index.jsx. A estrutura inicial será a seguinte:

```JSX
export default Card = () => {}
```

Esta função receberá children e retornará uma div que renderiza children.

```JSX
export default Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
```

Corrigindo a exportação e criando variantes

Após verificar o código, notamos que a exportação correta é export const Card. No final, podemos fazer export default Card para permitir a criação de Card.Header e Card.Body.

```JSX
export const Card = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Card
```

Agora, vamos criar as variantes. Como aqui só temos a estrutura, copiaremos e colaremos duas vezes. O primeiro será o Card.Header e o segundo será o Card.Body.

```JSX
export const CardHeader = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const CardBody = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
```

Integrando componentes e testando no projeto

Podemos remover a exportação nominal do Card e deixar apenas o export default. O Card.Header receberá o CardHeader e o Card.Body receberá o CardBody.

```JSX
Card.Header = CardHeader
Card.Body = CardBody
```

Com essa estrutura, já podemos utilizá-la. No arquivo app.jsx, logo após a div de tipografia, podemos criar uma section e chamar nosso Card. Podemos fazer um Card.Header e, abaixo, um Card.Body.

```JSX
<section>
    <Card>
        <Card.Header></Card.Header>
        <Card.Body></Card.Body>
    </Card>
</section>
```

Precisamos agora confirmar se o VS Code importou corretamente, e sim, ele importou. Vamos pegar os textos: "Orçamento diário disponível" e o valor "200". Vamos nos concentrar primeiro no card e depois pensar no restante.

```JSX
<Card.Header>
    Orçamento diário disponível:
</Card.Header>
<Card.Body>
    R$200
</Card.Body>
```

Criando múltiplos cards e aplicando estilos

Precisamos de quatro cards, então podemos copiar e colar para ter isso quatro vezes. Os títulos serão: "Orçamento diário", "Progresso da meta financeira", "Movimentação financeira" e "Minhas contas".

```JSX
<section>
    <Card>
        <Card.Header>
            Orçamento diário disponível:
        </Card.Header>
        <Card.Body>
            R$200
        </Card.Body>
    </Card>
    <Card>
        <Card.Header>
            Progresso da meta financeira
        </Card.Header>
        <Card.Body>
            R$200
        </Card.Body>
    </Card>
    <Card>
        <Card.Header>
            Movimentação financeira
        </Card.Header>
        <Card.Body>
            R$200
        </Card.Body>
    </Card>
    <Card>
        <Card.Header>
            Minhas contas
        </Card.Header>
        <Card.Body>
            R$200
        </Card.Body>
    </Card>
</section>
```

Podemos salvar e verificar no projeto. Está tudo correto, mas ainda sem estilo. Vamos começar a aplicar os estilos.

Aplicando estilos com Tailwind CSS

Voltando ao VS Code, dentro do index do card, começaremos a trazer o className, ou seja, as classes do Tailwind. Precisamos pegar isso do Figma. A cor de fundo é o "neutra fundo", cujo hexadecimal é algo como 2A2C.... No index.css, podemos começar a aplicar bg-neutral-surface. Além disso, precisamos considerar os cantos arredondados.

```JSX
<div className="bg-neutral-surface rounded-3xl">
```

Vamos pegar o corner radius. O corner radius é de 24 pixels. Vamos verificar se temos isso disponível. Vamos consultar a documentação do Tailwind. Vamos procurar por border, "Ctrl+F", border radius. Aqui está, border radius. Já esquecemos qual é o valor, quanto é mesmo? 24, vamos procurar esse valor do border radius. 6, 18, 24, aqui está, 3XL. Então é o rounded-3XL.

O padding não será colocado, o header e a borda definirão o padding. Agora, se olharmos na nossa aplicação, ela já está com o canto arredondado, que era o que precisávamos. Está faltando ajustar o espaçamento interno. Vamos lá.

Estilizando o Card.Header e Card.Body

Vamos começar pela parte do header. Temos uma cor diferente, que é o neutral header, que é 3353F. Vamos pegar isso. 3353F é a cor neutral header. Podemos aplicar essa cor. No card-header, vamos ter um className bg-neutral-header.

```JSX
<div className="bg-neutral-header p-4 text-center rounded-t-3xl text-neutral-text text-xl leading-[120%] font-bold">
```

Agora, o que mais precisamos pegar? Precisamos pegar o espaçamento. Vamos ver o que temos de espaçamento. O padding será 16. Como vamos centralizar o texto, não precisamos nos preocupar com padding vertical e horizontal. Vamos colocar aqui o padding 16, que é p-4, de forma global. E o texto, nós já o alinhamos ao centro. Então, text-center, texto alinhado ao centro.

O que mais precisamos aqui? Precisamos colocar a borda arredondada apenas no topo. Se olharmos na documentação, podemos colocar separadamente. Queremos arredondar os cantos separadamente, e há uma opção que é rounded-t, que é rounded-top. É exatamente isso que queremos. Queremos o mesmo 3XL, mas apenas no topo. Vamos colapsar a estrutura de pastas. Então é rounded-t-3XL. Vamos verificar como ficou. Maravilha, o card-header está quase pronto.

Precisamos agora trazer a cor do texto. Podemos pegar, o último que fizemos isso foi o typography. Vamos abrir o typography. É só pegar aqui, text-neutral-text, e trazê-lo para cá, text-neutral-text. Maravilha.

O que precisamos ver agora? Tamanho da fonte e leading. Da mesma forma que fizemos no typography, temos o leading, que é o line-height, e o tamanho do texto em si. Vamos ver. Olhando aqui, temos um lg bold. Precisamos aplicar um bold. Vamos ter que aplicar um bold, pois por padrão não tem. E o tamanho da fonte é 20. Será que temos tamanho de fonte para 20? Então, font-size. Vamos olhar aqui, 12, 16, 14, 18, 20. 20 aqui é o XL, então text-xl. Já temos, vamos apenas aplicar. Então, neutral-text, isso vai crescer bastante para o lado. Text-xl.

O que mais queremos fazer agora? Queremos fazer o leading. O leading de quanto? Vamos pegar lá, 120? 120%. E também queremos um texto em bold. Bold. Text-bold, acho que é isso, text-bold. Não, não é text-bold, queremos fonte bold. Agora sim. Vamos ver se ele vai ficar direitinho agora. Maravilha, já está centralizado. Já está com o texto em bold, maravilha. E está centralizado direitinho, como pedem, está tudo do jeito que deveria.

Na parte agora do body, o que precisamos fazer é aplicar o padding. O padding do body. Aqui, nós sempre olhamos para o que tem o maior, o que tem a altura maior. Vamos ver o que temos de padding. Vou pegar primeiro o de baixo. Então, na vertical, temos 24 de body, de padding, e na horizontal, 16. Horizontal 16, vertical 24. Beleza? Vamos lá. Se queremos colocar o padding, vamos lá, primeiro no card-body, obviamente, className. Vamos pensar no vertical, py. Vertical é 24. Então, fazemos a conta 4, 8, 12. 3 é 12, 6 é 24. Beleza? Py-6. Vamos ver se isso vai dar o que precisamos. Olhando agora no card-body. Vamos ver aqui. Padding 24, maravilha. Era isso que queríamos. Na vertical, 24. Agora, 16, 16. Então é px-4. O 16 é sempre 4. Olhando aqui no nosso padding, maravilha. 16 para cima e para baixo, ou 24 para cima e para baixo, e 16 para um lado e para o outro. Maravilha. Já temos o nosso card estilizado.

Finalizando e próximos passos

Agora, o que precisamos começar a focar é na parte interna. Calcular o valor do orçamento diário disponível, trazer o economizar com a barra de progresso e a tabela no final. Beleza? Por enquanto, está tudo tranquilo. Vamos seguir estilizando e criando nossos componentes com Tailwind. Nos vemos na próxima.

### Aula 3 - Estilizando o componente de orçamento diário - Vídeo 10

Transcrição  
Vamos prosseguir com a estilização dos nossos componentes, focando agora no componente de orçamento diário. Este será o primeiro componente a receber um valor que será formatado como moeda, utilizando o formato PT-BR e a moeda real do Brasil.

Criação do componente

Vamos criar um novo arquivo chamado DailyBudget.jsx. Nele, faremos um export de uma constante chamada DailyBudget, que receberá uma função vital. Inicialmente, vamos definir a estrutura básica do componente:

```JSX
export const DailyBudget = () => {

}
```

Receberemos o value como props, e já o estamos capturando aqui:

```JSX
export const DailyBudget = ({ value }) => {

}
```

Em seguida, faremos um return, utilizando a tag `<p>` de parágrafo, pois será apenas um texto exibido:

```JSX
export const DailyBudget = ({ value }) => {
    return (
        <p>

        </p>
    )
}
```

Formatando o valor

Precisamos formatar esse valor, então criaremos nosso formatador. Utilizaremos o Intl.NumberFormat. Chamaremos nosso formatter, que receberá um new Intl.NumberFormat. Precisamos passar a configuração, começando pela localização, que será pt-BR. Depois, passamos um objeto para definir como o número será formatado. O estilo será currency (moeda), e a moeda será BRL, que representa o real do Brasil.

```JSX
const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})
```

Implementando no aplicativo

Agora, vamos pegar o valor recebido e chamar nosso formatter com formatter.format no valor recebido:

```JSX
export const DailyBudget = ({ value }) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return (
        <p>
            {formatter.format(value)}
        </p>
    )
}
```

No arquivo App.jsx, importaremos esse componente. Após a importação, verificamos se ele está funcionando corretamente. O valor 42 já aparece, mas ainda precisamos estilizar o componente.

```JSX
<DailyBudget value={42} />
```

Estilizando o componente

Para estilizar, começaremos pela cor. No arquivo index.css, definiremos a cor como roxa, utilizando o código hexadecimal #769. Aplicaremos essa cor como primary-highlight. No className, como estamos lidando com um parágrafo (<p>), removeremos a margem com margin: 0. Em seguida, aplicaremos a cor primary-highlight.

Queremos também que a fonte esteja em negrito, então definiremos font-weight: bold. Para o tamanho da fonte, utilizaremos xxlbold, que corresponde a 39 pixels, e o espaçamento entre linhas será de 125%. Utilizaremos colchetes para definir o tamanho da fonte: text-[39px]. Por fim, o espaçamento entre linhas será leading-[125%], e alinharemos o texto ao centro.

```JSX
<p className="m-0 text-primary-highlight font-bold text-[39px] leading-[125%] text-center">
    {formatter.format(value)}
</p>
```

Com essas configurações, nosso componente de orçamento diário estará devidamente estilizado e funcional.

Integrando o componente de economia

Vamos alinhar o texto ao centro utilizando o traço centro. Verificamos no Figma e está tudo correto. Agora, podemos trazer nosso componente, pensando no componente de economia, que é o texto com o ícone do cofrinho. Vamos começar a integrar esse componente.

Na nossa pasta de componentes, criamos uma nova pasta chamada "savings", que representa o status da poupança. Inicialmente, criamos uma pasta em vez de um arquivo, mas corrigimos isso. Criamos o arquivo savings/Status/index.js. No arquivo, declaramos a constante SavingsStatus, que não precisa receber nenhuma prop e apenas retorna um conteúdo. Colocamos uma div externa e inserimos o ícone de economia, que é o ícone IconSavings. Como o ícone será colocado ao lado de um texto, inserimos tudo dentro de um parágrafo. O texto será "Economizar". Não podemos esquecer de exportar:

```JSX
export const SavingsStatus = () => {
    return (
        <div>
            <p>
                <IconSavings /> Economizar
            </p>
        </div>
    )
}
```

No App.jsx, vamos integrar o SavingsStatus, que inicialmente estará sem estilo. Precisamos ajustar a cor, tamanho de fonte e alinhamento. A cor do texto é #D6FF, que já está definida no index.css como secondary-income. No SavingsStatus, abrimos o className e aplicamos text-secondary-income.

Para o estilo, aplicamos display: flex com gap: 8 e alinhamento ao centro. O parágrafo será flex, alinhando os itens ao centro com items-center. O gap é 8, então usamos gap-2. Precisamos justificar ao centro com justify-center, que é uma propriedade do flex.

```JSX
<p className="text-secondary-income flex items-center gap-2 justify-center text-xl leading-[125%]">
    <IconSavings /> Economizar
</p>
```

Verificamos o tamanho da fonte e o espaçamento no Figma. O texto "Economizar" tem tamanho de fonte 20 e espaçamento de linha 125%. O tamanho de fonte 20 corresponde a text-xl. O espaçamento de linha será 125%.

Agora, o SavingsStatus está quase completo. O que falta é a barra de progresso. Por enquanto, tudo está fluindo bem e estamos estilizando o conteúdo conforme necessário. No próximo encontro, criaremos o componente da barra de progresso. Estamos ansiosos para continuar.

### Aula 3 - Implementando barra de progresso - Vídeo 11

Transcrição  
Vamos prosseguir com a implementação da nossa barra de progresso. Sem mais delongas, vamos direto para o VS Code e criar o componente. Primeiro, criamos um novo arquivo chamado ProgressBar e, dentro dele, o index.jsx. Vamos exportar a constante ProgressBar, que será uma arrow function (função de seta). Essa função receberá um percentual como props e retornará a estrutura da barra de progresso.

Começamos definindo a exportação do componente:

```JSX
export const ProgressBar = ({ percent }) => {
    return (
        <div className="bg-neutral-darker rounded-lg overflow-hidden w-full h-10">
            <div
                className="bg-primary-highlight h-full flex justify-center items-center text-neutral-darker"
                style={{ width: `${percent}%` }}
            >
                {percent}%
            </div>
        </div>
    );
}
```

Lembrando que utilizaremos a estratégia de ter uma div externa e uma div interna. A div interna terá um estilo inline do React para calcular o tamanho da barra, que será uma porcentagem do valor recebido. Exibiremos o valor percentual seguido do símbolo de porcentagem para indicar que a barra interna será proporcional à barra externa.

Estilizando a barra de progresso

Nosso próximo passo é estilizar a barra utilizando o Tailwind CSS. Vamos trazer as cores do Figma para o nosso projeto. A cor de fundo da barra externa é #1c1d, que corresponde ao neutral-darker. No arquivo index.css, aplicamos essa cor à div externa com a classe bg-neutral-darker.

Precisamos também de cantos arredondados de 8 pixels. Consultando a documentação do Tailwind, encontramos que rounded-lg corresponde a esse valor. Além disso, aplicaremos overflow-hidden para garantir que qualquer conteúdo que ultrapasse os limites da barra seja ocultado. A largura será definida como w-full para ocupar 100% do espaço disponível, e a altura será de 40 pixels, que no Tailwind é representada por h-10.

Integrando a barra de progresso no aplicativo

Agora, vamos integrar a barra de progresso no nosso App.jsx. Colocaremos o componente logo abaixo do saving status. Dentro do saving status, adicionamos o componente ProgressBar e passamos o percentual desejado, por exemplo, 42%.

```JSX
import { ProgressBar } from "../ProgressBar";

// Dentro do componente App
<ProgressBar percent={42} />
```

Ao verificar no Vite React, a barra já está exibindo 100% da largura e o valor 42%. Precisamos agora colorir a parte interna da barra. No ProgressBar, como teremos várias classes, vamos quebrar o className em várias linhas para facilitar a leitura.

Ajustando cores e alinhamento

Começamos pelo fundo da barra interna, que será primary-highlight, uma cor roxa. No index.css, aplicamos bg-primary-highlight à div interna. A altura será definida como h-full para ocupar 100% da altura disponível. Para alinhar o texto ao centro, utilizamos flex e justify-center.

Ajustando o texto e a fonte

O que precisamos fazer agora? Precisamos mudar a cor do texto. A cor do texto deve ser a mesma cor de fundo do elemento pai, que é o neutral-darker. Portanto, vamos aplicar text-neutral-darker. Vamos verificar como está ficando. Salvamos, vamos ao Figma, React, e está funcionando! O texto já está preenchido, centralizado e justificado ao centro. Vamos alinhar verticalmente ao centro também, utilizando items-center. Está quase pronto.

O que queremos fazer agora? Precisamos ajustar o tamanho da fonte, o peso da fonte e o leading para que fique igual ao que está no Figma. No Figma, o tamanho da fonte é 40, usando typography-md-medium, o que significa que o tamanho da fonte é 16. Podemos consultar a documentação para confirmar que font-size 16 é text-base. Vamos aplicar text-base.

```CSS
.text-base {
    font-size: 16px;
}
```

Aplicando transições e animações

O que mais precisamos? Vamos verificar. O estilo medium não tem bold, então não precisamos nos preocupar com isso. O que está faltando agora é o leading. O line-height é de 120%, então aplicamos leading-120. Agora, está mais parecido com o que precisamos. Vamos ajustar o valor. Ao invés de 42, colocamos 38. Perfeito, ele já está ajustando. Se colocarmos 100, fica completo. Voltando para 42, está ótimo.

O que está faltando agora? Precisamos ajustar os CSS Modules. Adicionamos uma transição. Se quisermos nos aprofundar, podemos consultar a documentação do Tailwind sobre transições. Vamos focar no que queremos: uma transição semelhante ao que tínhamos antes. Para isso, aplicamos transition-all com uma duração de 300 milissegundos e ease-in-out.

```CSS
.transition-all {
    transition: all 300ms ease-in-out;
}
```

Finalizando a barra de progresso
Vamos verificar no Chrome se conseguimos visualizar essa animação. Ajustamos o tamanho para ver as mudanças. Alteramos de 32 para 5, e agora há uma transição. Se mudarmos para 50, há uma pequena transição. Para 75, está perfeito.

O que está faltando agora é o espaçamento entre o texto "economizar" e a barra de progresso. Vamos fechar tudo e olhar para o componente SaveStatus. Precisamos definir um espaço entre esses elementos. Vamos usar flexbox, com flex e flex-col, pois queremos na horizontal. Precisamos definir o gap. O tamanho do gap é de 40 pixels, então aplicamos gap-10.

```CSS
.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.gap-10 {
    gap: 40px;
}
```

Vamos verificar como ficou. Perfeito, agora está exatamente como queríamos, com a porcentagem animada, assim como fizemos nos CSS Modules. Se quiser se aprofundar em como essas animações funcionam no Tailwind, a documentação está disponível. Focando no que queríamos, aplicamos transition-all, uma duração de 300 milissegundos e ease-in-out para um efeito fluido.

A barra de progresso está pronta e entregue. Vamos continuar estilizando nosso pop-up. Nos vemos na sequência. Até mais!

### Aula 3 - Montando o Grid para os cards - Vídeo 12

Transcrição  
Chegou a hora de montar nosso grid para separar os cards. Vamos abrir o arquivo App.jsx. Já temos uma section que está separando todos esses elementos. O que precisamos fazer é colocar duas colunas e aplicar o align-items: stretch para garantir que os cards respeitem sempre o tamanho do maior card na coluna, em termos de altura.

Começamos com a estrutura básica da section:

```JSX
<section className="">
```

Agora, vamos organizar o grid. Quando trabalhamos com grid, o nome da classe é grid. Precisamos adicionar o template de colunas. Para colocar duas colunas, utilizamos a classe grid-cols-2. Isso é o que define duas colunas. Essa informação pode ser confirmada na documentação, especificamente na seção de grid-template-columns, que explica quantas colunas podemos ter. A documentação é bastante clara nesse sentido.

Definindo colunas e espaçamento

Primeiro, transformamos a section em um grid:

```JSX
<section className="grid">
```

Em seguida, definimos duas colunas:

```JSX
<section className="grid grid-cols-2">
```

Além disso, queremos aplicar o align-items: stretch para manter sempre o tamanho do maior card. Se verificarmos no nosso projeto, isso já está acontecendo. Vamos adicionar essa propriedade:

```JSX
<section className="grid grid-cols-2 items-stretch">
```

Agora, vamos definir o espaçamento entre esses elementos. O valor do gap será 24, que é um múltiplo de 4, então utilizamos gap-6. Com isso, tudo já está devidamente separado.

```JSX
<section className="grid grid-cols-2 items-stretch gap-6">
```

Ajustando o comportamento dos cards

O que falta agora é ajustar o comportamento dos cards. Precisamos aplicar o flex-column e o flex-grow. Vamos ao nosso card. No primeiro card, aplicamos flex e flex-col para que ele cresça e fique orientado em coluna, permitindo que o corpo do card cresça.

```JSX
<div className="bg-neutral-surface rounded-3xl flex flex-col">
```

No card-body, aplicamos o flex-grow para finalizar o ajuste.

```JSX
<div className="py-6 px-4 flex-grow">
```

Flex Grow

Agora sim, o flex-grow vai proporcionar o comportamento de flex-grow: 1, permitindo que ele ocupe todo o tamanho disponível. Além desse comportamento de se expandir e ocupar toda a área disponível, precisamos configurar o display como flex, definir a direção com flex-direction: column, ou seja, flex-col.

```JSX
<div className="py-6 px-4 flex-grow flex">
```

Também devemos aplicar um justify, e como está em coluna, não é align-items, mas sim justify. Devemos centralizar com justify-content: center.

```JSX
<div className="py-6 px-4 flex-grow flex flex-col">
```

Assim, ele ocupará toda a área disponível e centralizará o texto verticalmente.

```JSX
<div className="py-6 px-4 flex-grow flex flex-col justify-center">
```

Lembrando que, quando temos flex orientado a coluna, para alinhar verticalmente, utilizamos o justify. Vamos verificar se isso funcionou. Observando no Chrome, já está correto. O número 42 está centralizado.

Podemos repetir o que fizemos anteriormente. Vamos aumentar esse valor de 200 algumas vezes para observar a diferença. Vamos criar um parágrafo e colá-lo várias vezes. No outro, faremos o mesmo, mas em menor quantidade. Podemos ver que o card sempre cresce, faz o stretch e o tamanho sempre será baseado no maior card daquela linha.

Sistema de Grid

Com isso, montamos nosso sistema de grid para exibir esses cards. O que falta agora? Precisamos estilizar o botão e a lista de itens. Até agora, aprendemos a nos orientar no Tailwind. Conseguimos explorar a documentação para encontrar as propriedades desejadas.

Para finalizar essa parte inferior de movimentação financeira em linhas fontes, é sua vez de praticar tudo que aprendemos até agora. Já vimos como trabalhar com bordas, espaçamento e outros aspectos. Agora é sua vez de finalizar o projeto com Tailwind.

A base que já temos é suficiente para concluirmos. O desafio está lançado. Claro que deixarei um gabarito para você consultar, mas não se prenda a isso, pois existem várias formas e respostas corretas para esse desafio.

Lembre-se de que você tem um gabarito à disposição, mas se sua versão estiver diferente, aproveite o Discord e o fórum para mostrar como chegou ao seu resultado. Missão dada, missão cumprida. Estamos contando com você. Agora é sua vez de se aventurar no mundo do Tailwind. Nos vemos na próxima aula. Até mais!

### Aula 3 - Desafio

Hora de colocar a mão no código e criar algo que você já viu no nosso layout: a movimentação financeira não seção "Movimentação financeira" e a lista de bancos na seção “Minhas contas”.

O desafio é simples de entender, mas perfeito pra treinar sua autonomia: você vai implementar essa lista por conta própria, com base no que viu no Figma. Cada item deve mostrar o nome do banco, o ícone e o saldo formatado.

E olha, não precisa reinventar a roda — comece pequeno:

- Monte a estrutura: pense em como organizar cada banco (um contêiner, o ícone e as informações).
- Alimente a lista: use o array de contas que passamos na aula.
- Estilize: aplique as cores e espaçamentos pra deixar igualzinho ao design.
- Se travar, respira. Olhe pro layout e tente quebrar ele em pedaços menores. Você não precisa resolver tudo de uma vez. Começa pelo HTML/JSX básico, depois estiliza, depois ajusta os detalhes.

Dica de ouro: olhe para o primeiro item e tente replicar ele sozinho. Quando estiver pronto, repita o padrão pros outros usando .map().

Vai lá, confio no seu código!

Opinião do instrutor

A ideia aqui é te acompanhar, passo a passo, pela solução do desafio e, mais importante, pelo porquê de cada mudança. Não existe uma única resposta certa; esta é uma solução que privilegia clareza, reuso e evolução futura. Se você chegou ao mesmo resultado por outro caminho, está tudo certo.

Visão geral rápida

- O App.jsx parou de renderizar conteúdo estático e passou a delegar para componentes especializados: Transactions e Accounts.
- Criamos três “primitivas de UI” simples e reaproveitáveis: Button, List e ListItem.
- Separamos responsabilidades: TransactionItem cuida de uma transação, Account cuida de uma conta. Transactions e Accounts apenas orquestram listas e ações.

Passo 1 — App.jsx delegando responsabilidades

O primeiro movimento foi substituir os blocos de textos fixos pelos novos componentes.

```JSX
// src/App.jsx 
import { Accounts } from "./components/Accounts" 
import { Aside } from "./components/Aside" 
import Card from "./components/Card" 
import { Container } from "./components/Container" 
import { DailyBudget } from "./components/DailyBudget" 
import { Main } from "./components/Main" 
import { SavingsStatus } from "./components/SavingsStatus" 
import { SearchInput } from "./components/SearchInput" 
import { Transactions } from "./components/Transactions" 
import { Typography } from "./components/Typography" 

function App() { 
return ( 
<Container> 
{/* ... layout omitido para foco no escopo do desafio ... */} 
<section> 
<Card> 
<Card.Header>Movimentação financeira</Card.Header> 
<Card.Body> 
<Transactions /> 
</Card.Body> 
</Card> 
<Card> 
<Card.Header>Minhas contas</Card.Header> 
<Card.Body> 
<Accounts /> 
</Card.Body> 
</Card> 
</section> 
</Container> 
) 
} 
```

Por que fazer isso: o App fica mais legível e fácil de manter. Ele deixa de conhecer detalhes de markup e estilo das listas e passa a apenas montar a estrutura de página.

Passo 2 — Primitivas de UI: Button, List e ListItem

Antes de falar de transações e contas, criamos peças pequenas e reutilizáveis. Isso evita CSS duplicado e dá consistência visual ao longo do app.

```JSX
// src/components/Button/index.jsx 
export const Button = ({ children, ...props }) => { 
return ( 
<button 
{...props} 
className="bg-transparent border border-neutral-text text-neutral-text px-6 py-3 flex items-center justify-center cursor-pointer gap-2 rounded-[24px] text-base leading-[120%] hover:opacity-80" 
> 
{children} 
</button> 
) 
} 
```

```JSX
// src/components/List/index.jsx 
export const List = ({ children, className, ...props }) => { 
return ( 
<ul className={`p-0 m-0 list-none mb-12 ${className || ''}`} {...props}> 
{children} 
</ul> 
)} 
```

```JSX
// src/components/ListItem/index.jsx 
export const ListItem = ({ children, className, ...props }) => { 
return ( 
<li 
className={`border-b border-neutral-header pb-4 mb-4 last:border-none last:pb-0 last:mb-0 ${className || ''}`} 
{...props} 
> 
{children} 
</li> 
)
} 
```

Passo 3 — Transactions: dados mockados, formatação e estado visual

Separamos a renderização de uma transação (TransactionItem) da orquestração da lista (Transactions). Isso deixa clara a responsabilidade de cada componente.

```JSX
// src/components/TransactionItem/index.jsx 
const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }) 

export const TransactionItem = ({ item }) => { 
const detailAddicionalClassName = item.value >= 0 ? "text-secondary-income" : "text-secondary-expense" 

return ( 
<div className="flex justify-between"> 
<div className={`flex flex-col gap-2 text-[15px] leading-[120%] font-medium ${detailAddicionalClassName}`}> 
<p className="m-0">{item.description}</p> 
<p className="m-0">{formater.format(item.value)}</p> 
</div> 
<div className="text-neutral-text text-sm leading-5"> 
{new Date(item.date).toLocaleDateString('pt-BR')} 
</div> 
</div> 
) 
} 
```

Pontos de atenção:

- Formatação de moeda com Intl.NumberFormat para evitar lógica repetida.
- Classe condicional para cor do valor, reforçando semântica visual de crédito ou débito.
- Data em pt-BR via toLocaleDateString.

```JSX
// src/components/Transactions/index.jsx 
import { Button } from "../Button" 
import { IconCurrency } from "../icons" 
import { TransactionItem } from "../TransactionItem" 
import { List } from "../List" 
import { ListItem } from "../ListItem" 
 
export const Transactions = () => { 
const items = [ 
{ description: "iFood", value: -20, date: "2024-10-01T00:00:00-03:00" }, 
{ description: "Papelaria Mila", value: -80, date: "2024-10-03T00:00:00-03:00" }, 
{ description: "Freela (2ª parte)", value: 1000, date: "2024-10-03T00:00:00-03:00" }, 
{ description: "Magazine Luiza", value: -300, date: "2024-10-05T00:00:00-03:00" } 
]

return ( 
<> 
<List> 
{items.map((transactionItem, index) => ( 
<ListItem key={index}> 
<TransactionItem item={transactionItem} /> 
</ListItem> 
))} 
</List> 

<div className="flex justify-center"> 
<Button> 
<IconCurrency /> Adicionar transação 
</Button> 
</div> 
</> 
) 
} 
```

Decisão: Transactions não conhece detalhes de layout de cada item; apenas mapeia dados para TransactionItem e exibe a ação de adicionar no rodapé.

Passo 4 — Accounts: item e lista de contas

Aplicamos a mesma filosofia de separação entre item e lista.

```JSX
// src/components/Account/index.jsx 
import { IconBank } from '../icons' 

const formatter = new Intl.NumberFormat('pt-BR', { 
style: 'currency', 
currency: 'BRL', 
}) 

export const Account = ({ account }) => { 
return ( 
<div className="flex justify-between text-neutral-text"> 
<div> 
<p className="flex gap-2 items-center m-0 text-[15px] leading-[120%]"> 
<IconBank /> 
<strong>{account.bank}</strong> 
</p> 
</div> 
<div className="flex flex-col gap-2 w-[100px]"> 
<p className="m-0 text-[15px] leading-[120%]"><strong>Saldo</strong></p> 
<p className="m-0 text-[15px] leading-[120%]">{formatter.format(account.balance)}</p> 
</div> 
</div> 
) 
} 
```

```JSX
// src/components/Accounts/index.jsx 
import { Button } from "../Button" 
import { Account } from "../Account" 
import { IconWallet } from '../icons' 
import { List } from "../List" 
import { ListItem } from "../ListItem" 

export const Accounts = () => { 
const accounts = [ 
{ bank: "Anybank", balance: 1200 }, 
{ bank: "Bytebank", balance: 800 }, 
{ bank: "Switch Bank", balance: 1800 } 
] 

return ( 
<div className="flex flex-col h-full"> 
<List> 
{accounts.map(ac => ( 
<ListItem key={ac.bank}> 
<Account account={ac} /> 
</ListItem> 
))} 
</List> 
<div className="flex-grow" /> 
<div className="flex justify-center"> 
<Button> 
<IconWallet /> Adicionar conta 
</Button> 
</div> 
</div> 
) 
} 
```

Decisão: a lista preserva a hierarquia visual do Figma (itens com divisória inferior, espaçamentos consistentes) e reserva uma área inferior para ações. Account cuida da formatação de valores e do alinhamento de colunas.

Checklist do que foi criado ou alterado

- App.jsx: passou a importar e renderizar Transactions e Accounts.
- Button: primitiva de botão com estilo único para o projeto.
- List e ListItem: camada de consistência para qualquer lista do app.
- TransactionItem: exibe uma transação com formatação e cores por tipo de valor.
- Transactions: orquestra a lista de transações e a ação de adicionar.
- Account: exibe uma conta individual com nome e saldo.
- Accounts: orquestra a lista de contas e a ação de adicionar.

Por que este desenho é útil no longo prazo?

- Organização: cada componente tem uma responsabilidade clara.
- Reuso: Button, List e ListItem podem ser usados em outras áreas sem copiar CSS.
- Evolução: trocar dados mockados por API exige poucas mudanças.
- Consistência: as mesmas decisões de tipografia, espaçamento e divisórias valem para transações e contas.
- Legibilidade: o fluxo de leitura no App.jsx fica simples.

Se bater dúvida em algum ponto, recomendo um caminho progressivo: renderize um único item, depois a lista, depois estilize, por fim adicione as ações. Quando percebemos que cada etapa ficou pequena e resolvível, o resto flui.

### Aula 3 - Para saber mais: CVA (Class Variance Authority)

Até aqui trabalhamos com o Tailwind puro, escrevendo classes utilitárias direto no JSX. Mas, em projetos maiores, logo aparece a dúvida: como organizar componentes de forma que eles fiquem flexíveis sem se tornarem um caos de classes repetidas? É aí que entra o CVA (Class Variance Authority).

O CVA é uma pequena lib que ajuda a criar componentes com variantes usando Tailwind. Em vez de espalhar condicionais de classe pelo código, a gente centraliza a lógica de estilos em uma função, deixando o componente mais legível e fácil de manter.

O problema

Imagina um botão que pode ser primary ou secondary, e além disso pode ter tamanhos diferentes (sm, md, lg). Se fizermos só com Tailwind, o JSX logo fica assim:

```JSX
<button 
className={`px-4 py-2 rounded-md font-semibold 
${variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} 
${size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base"}`} 
> 
Clique aqui 
</button> 
```

Funciona, mas começa a ficar verboso e difícil de manter.

A solução com CVA

Com o CVA, criamos um contrato de variantes para o componente:

```JSX
import { cva } from "class-variance-authority"; 

const button = cva( 
"px-4 py-2 rounded-md font-semibold", // classes base 
{ 
variants: { 
variant: { 
primary: "bg-blue-500 text-white", 
secondary: "bg-gray-200 text-black" 
}, 
size: { 
sm: "text-sm", 
md: "text-base", 
lg: "text-lg" 
} 
}, 
defaultVariants: { 
variant: "primary", 
size: "md" 
} 
} 
); 
```

E no componente:

```JSX
export function Button({ variant, size, children }: any) { 
return <button className={button({ variant, size })}>{children}</button>; 
} 
```

Por que isso é legal?

- O componente fica mais limpo.
- As regras de estilo ficam centralizadas e padronizadas.
- É fácil adicionar novas variantes sem refatorar o JSX.
- Dá pra combinar com clsx se precisar de condições extras.

Na prática, o CVA funciona como uma extensão da forma como já usamos o Tailwind: ele não substitui nada, só organiza melhor os cenários onde temos múltiplas opções de estilo para o mesmo componente.

Vida longa e próspera!

### Aula 3 - Criatividade com modelo multimodal - Exercício

A Dev.Spot, uma plataforma que permite a desenvolvedores criarem portfólios digitais e link trees personalizados, está buscando maneiras de melhorar a experiência de seus usuários. A equipe de desenvolvimento está considerando a implementação de uma barra de progresso para indicar o nível de completude dos perfis dos usuários, incentivando-os a preencher mais informações. No entanto, a equipe está em dúvida sobre como estilizar essa barra de progresso para que ela se integre bem ao design atual da plataforma, que utiliza Tailwind CSS.

Como a equipe de desenvolvimento da Dev.Spot pode estilizar a barra de progresso para que ela se alinhe com o design existente e ofereça uma experiência visualmente agradável aos usuários?

Resposta:  
A equipe pode estilizar a barra de progresso utilizando Tailwind CSS, definindo uma estrutura básica com uma div externa para o contorno e uma div interna para o preenchimento. A div externa pode ter bg-neutraldarker para consistência com o tema, e a div interna bg-primaryhighlight para destacar o progresso. Aplicar rounded-lg e overflow-hidden garante bordas arredondadas e conteúdo contido. Para animação, transition-all com duration-300 e ease-in-out proporciona uma transição suave. O texto pode ser centralizado com flex, justify-center e items-center, e estilizado com text-neutraldarker.

> Correta, pois essa abordagem utiliza as classes do Tailwind CSS para criar uma barra de progresso que se integra bem ao design atual da plataforma, mantendo a consistência visual e proporcionando uma experiência agradável aos usuários.

### Aula 3 - O que aprendemos?

Nesta aula, aprendemos:

- A utilizar o Tailwind CSS para aplicar estilos utilitários diretamente no JSX, reduzindo a necessidade de CSS manual.
- A formatar valores monetários em React com Intl.NumberFormat para o formato brasileiro.
- A comparar visões e práticas de estilização entre Tailwind CSS e CSS Modules, entendendo suas vantagens e desvantagens.
- A personalizar e utilizar corretamente cores e fontes em Tailwind CSS, integrando com React.
- A criar componentes React estilizados com Tailwind, como Aside, Container, Main e SearchInput, aplicando princípios de layout flexível.
- A aplicar técnicas de tipografia em componentes React usando Tailwind, garantindo fallbacks e variantes para diferentes tags HTML.
- A explorar o sistema de grids e flexbox para organizar layouts responsivos e consistentes.
- A configurar e inicializar um projeto React com Vite e Tailwind CSS, incluindo importação de plugins e ajustes de estilos globais.

### Aula 3 - Projeto final do curso

Baixe o projeto final

Você pode baixar a versão final dos dois projetos aqui:

- Repositório [css modules](https://github.com/alura-cursos/poupapp-css-modules/tree/solucao-desafio)
- Repositório [tailwindcss](https://github.com/alura-cursos/poupapp-tailwindcss/tree/desafio-resolvido)

Terminei o curso, e agora?

Parabéns demais por ter chegado até aqui! Construir um app completo, cuidando da parte visual e aprendendo diferentes formas de estilizar componentes React, é um baita marco. Olhar o PoupApp rodando na sua máquina já mostra o quanto você evoluiu.

Nesse curso, você não ficou só na teoria: aprendeu sobre CSS Modules, Tailwind, viu prós e contras de cada abordagem e, principalmente, colocou tudo em prática construindo interfaces que fazem sentido. Também experimentou como pensar em componentes mais auto-suficientes, evitando dores de cabeça com estilos globais.

Continue praticando!

Quer continuar evoluindo? Algumas ideias:

- Crie novas telas pro PoupApp — um dashboard, histórico de transações, gráficos. Dá pra soltar a criatividade.
- Brinque com os estilos: troque a paleta de cores, fontes e espaçamentos, tanto com Tailwind quanto com CSS Modules.
- Adicione temas claro/escuro. Esse é um ótimo exercício pra consolidar o aprendizado.
- Publica seu projeto na Vercel ou Netlify e mostra pra galera.
- Conta como foi a experiência e me marca nas redes: LinkedIn ou Instagram. Vou adorar ver sua versão do app!

Lembra: aprender desenvolvimento front-end é um processo contínuo. Cada projeto que você termina te deixa mais confiante e preparado pra encarar o próximo. Então segue experimentando, refatorando e, principalmente, se divertindo com o que constrói.

Se quiser trocar ideia, pedir dica ou compartilhar conquistas, tô sempre à disposição no Discord, LinkedIn ou Instagram.

Vida longa e próspera no mundo React!

Abraço do careca barbudo o/

### Aula 3 - Conclusão - Vídeo

Transcrição  
Parabéns por termos concluído mais este curso na Alura. Desta vez, abordamos a estilização de projetos. Nesta jornada, tivemos duas abordagens diferentes. Primeiro, focamos nos CSS Modules com Vite e, em seguida, no Tailwind CSS.

O que isso nos proporciona como base? Se colocarmos os dois projetos lado a lado, podemos observar o progress bar dos CSS Modules e também o do Tailwind CSS. Ao colocá-los lado a lado, podemos perceber a diferença no conceito aplicado. Enquanto com CSS Modules escrevemos o CSS manualmente, com o Tailwind CSS utilizamos apenas classes utilitárias.

Comparando CSS Modules e Tailwind CSS

No final, chegamos ao mesmo resultado, mas o mais importante é que, além de conhecermos a fundo o Tailwind CSS e o CSS Modules, entendemos o panorama de estilização de componentes em aplicações React. Foi uma jornada significativa para chegarmos ao final, com o pull-back funcionando, bem estilizado.

Avaliando o curso e compartilhando experiências

Agora é o momento de avaliar o curso. Deixe um depoimento sobre o que mais gostou, as dificuldades e facilidades encontradas, e sua opinião geral sobre o curso. Compartilhe sua preferência: você preferiu Tailwind CSS ou CSS Modules? Lembre-se de utilizar o Discord e o fórum para postar seus resultados e tirar dúvidas. Estamos sempre por lá, então, se desejar, pode nos marcar que vamos analisar seu projeto.

Encerrando a jornada e próximos passos

Missão dada, missão cumprida. Agora, estamos com um conjunto de ferramentas completo para estilizar aplicativos React. Nos vemos em breve, e esperamos que tenha se divertido tanto quanto nós nesta jornada. Até lá!
