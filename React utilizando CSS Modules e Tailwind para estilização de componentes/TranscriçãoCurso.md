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

### Aula 1 -  - Vídeo 6
### Aula 1 -  - Vídeo 6
