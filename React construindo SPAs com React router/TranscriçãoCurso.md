# Curso Alura - React: construindo SPAs com React router

## Aula 1 - Configurando o Roteamento

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá! Sejam bem-vindos a mais este curso de React, desta vez focado no React Router. Vamos entender o que é essa biblioteca, como ela funciona e aprender a implementar o roteamento usando o React Router. Além disso, vamos compreender o que é uma Single Page Application (Aplicação de Página Única), qual é a motivação por trás da existência de uma SPA, como chegamos até aqui e se isso ainda é relevante ou não.

Se desejarmos aprender como definir um roteamento declarativo utilizando o React Router, estamos no lugar certo. A única coisa que precisamos saber é o próprio React. Se já dominamos componentes React, JSX, State, Effects e outros conceitos, vamos juntos nessa jornada.

Apresentando o instrutor

Meu nome é Vinicios Neves.

Audiodescrição: Vinicios é uma pessoa careca, com barba, e está associada à Alura.

Espero que estejamos tão animados quanto eu para entender como podemos construir uma SPA (Aplicação de Página Única) com as tecnologias disponíveis atualmente. Nos encontramos no próximo vídeo. Vamos lá!

### Aula 1 - Preparando o ambiente: introdução ao ambiente React

Agora que você já deu seus primeiros passos em uma das ferramentas mais utilizada em aplicações web, bora seguir com um mergulho mais profundo e aprender ainda mais funcionalidades.

Mas antes de mergulharmos de cabeça, temos dois passos importantes para preparar nosso ambiente:

1. Se acostumar (ainda mais) com o terminal do nosso sistema operacional.
2. Baixar o projeto base.

E claro, eu, o careca barbudo mais bacana que você conhece, vou te ajudar nessa missão!

Então, bora começar?

Projeto base

O projeto inicial está [disponível aqui no github](https://github.com/viniciosneves/4869--react-router-code-connect), onde você consegue acessar as branchs do projeto. Temos uma branch pra cada aula e um commit por vídeo, assim você consegue usar como base de consulta sempre que precisar.

Você pode baixar o projeto lá pelo github ou [clicando aqui](https://github.com/viniciosneves/4869--react-router-code-connect/archive/refs/heads/main.zip).

Depois de baixar e extrair o conteúdo do arquivo zip, hora de ir pro terminal. Navegue até a pasta onde se encontra o projeto e execute o seguinte comando para instalar as dependências:

> npm install

Pode abrir o projeto no VSCode (ou seu editor favorito) pra ir se acostumando com ele e, na sequência, basta levantar o projeto que usa o Vite por debaixo dos panos:

> npm run dev  

E pronto, agora é só acessar http://localhost:5173 e começar a estudar!

Figma

O layout da aplicação que vamos utilizar está [disponível aqui no Figma](https://www.figma.com/community/file/1532859456666611154).

Agora sim, tudo no lugar. Bora começar?

### Aula 1 - Entendendo o que é uma SPA - Vídeo 2

Transcrição  
Vamos discutir sobre o React Router e entender o que acontece nos bastidores. O React Router é uma biblioteca de roteamento que utiliza URLs para determinar qual componente será exibido. Com poucos passos, seguindo a documentação, conseguimos fazer com que, dada uma URL, um componente específico seja exibido. Por exemplo, se quisermos exibir a página de cadastro e acessarmos codeconnect.com/cadastro, o componente de cadastro será exibido. O mesmo ocorre para login e feed.

Ao utilizar o React Router de forma declarativa, estamos construindo uma SPA (Single Page Application, ou Aplicação de Página Única). Isso significa que temos nossa aplicação React publicada em algum lugar, ou no próprio ambiente de desenvolvimento do Vite. Quando o cliente, no sentido de client-side (a pessoa que está usando o navegador), acessa a URL codeconnect.com/cadastro, a requisição é processada e algo é entregue. Esse algo é composto por HTML, CSS e JavaScript, mas o HTML está vazio inicialmente. Somente após o carregamento no navegador é que ele saberá o que fazer, renderizando a página de login ou qualquer outra página com a qual o usuário interaja.

Explicando o processo de renderização em SPAs

Após o login, por exemplo, o usuário é encaminhado para a página inicial. Isso já está implementado pelo React Router. O ponto é que, quando fazemos essa requisição, o HTML não existe previamente. Quem cria o HTML é o próprio React. Na primeira requisição, a URL, o HTML, as imagens e os formulários não existem. Eles só passam a existir depois que o navegador solicita o HTML, que é carregado junto com o JavaScript. O JavaScript, contendo o React, inicia e renderiza tudo. Esse processo é conhecido como client-side.

Em uma Single Page Application, solicitamos ao servidor uma vez e, depois disso, não precisamos mais fazer novas requisições para renderizar a página inteira novamente. Podemos trocar informações, solicitar dados ou outros elementos, mas a página não é renderizada completamente de novo.

Contextualizando a criação das SPAs

Agora, vamos contextualizar historicamente por que as SPAs (Single Page Applications) foram criadas. Quando começamos a trabalhar com esse tipo de aplicação, entre 2013 e 2015, dependendo do framework, a ideia era criar páginas extremamente dinâmicas e interativas para a pessoa usuária, sem a necessidade de ir ao servidor, carregar e passar por ciclos de carregamento e renderização completos. Resumidamente, buscávamos mais dinamismo para as aplicações.

Atualmente, temos um ambiente híbrido. Algumas aplicações ainda utilizam SPA, enquanto outras voltaram a depender mais do servidor, pois as transições hoje são muito mais atualizadas e aprimoradas do que eram há 8, 9 ou 10 anos. Apesar disso, as single page applications continuam relevantes. Por quê? Primeiro, ainda faz sentido construir uma aplicação nessa arquitetura em muitos casos. Diversos fatores podem influenciar a decisão de construir ou não uma aplicação dessa forma. E isso se aplica a novas aplicações. Quando analisamos uma base de código já existente, o que chamamos de software "legado", encontramos muitas coisas já construídas com React Router. Portanto, ainda é relevante e precisamos conhecê-lo.

Comparando as versões 5 e 6 do React Router

Com o React Router, da versão 5 para a 6, muitas mudanças ocorreram. Vamos ver um exemplo de código de como funcionava na versão 5:

```JSX
// App.js com RRD v5
<Router>
    <Switch>
        <Route path="/sobre" component={Sobre} />
        <Route path="/" component={Home} />
    </Switch>
</Router>
```

Na versão 5, utilizávamos Router e Switch para definir as rotas. Agora, vejamos como isso mudou na versão 6:

```JSX
// App.js com RRD v6
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
    </Routes>
</BrowserRouter>
```

Na versão 6, passamos a usar BrowserRouter, Routes e Route, o que simplifica e moderniza a forma como definimos as rotas.

Resumindo o papel do React Router em SPAs

Para resumir, uma SPA entrega um HTML uma vez e múltiplas views (visões), ou seja, múltiplas páginas, mas tudo via JavaScript, sem solicitar nada do servidor, sem pedir HTML ou CSS em lugar algum. O JavaScript, com o React, cuida disso para nós. Além disso, o React Router DOM, ou React Router, gerencia a navegação. A versão 6, que estamos utilizando agora, é bem diferente da versão 5. Portanto, ao trabalhar em um projeto, verifique o package.json para entender qual versão do React Router está sendo usada e o que pode ou não ser utilizado.

Agora que já discutimos bastante, é hora de explorar ainda mais as possibilidades do React Router dentro do projeto CodeConnect, que já começamos a desenvolver. Esse foi o tema da nossa conversa. Nos vemos na sequência. Até mais!

### Aula 1 - Conhecendo o projeto - Vídeo 3

Transcrição  
Vamos entender o nosso cenário atual, como está o projeto e qual é o problema que precisamos resolver. Para isso, no ambiente de preparação, já há um link para o repositório para baixar o projeto inicial. Já fiz isso na minha máquina, e ele está no meu desktop.

Vamos abrir o terminal e navegar até o desktop com o comando:

> cd Desktop/

Explorando o projeto CodeConnect

Ao executar ls, podemos ver que o projeto CodeConnect, com o qual trabalharemos durante este curso, está lá. Vamos entrar nessa pasta:

> cd CodeConnect/

E abri-la no VS Code com o comando:

> code .

Enquanto deixamos o VS Code aberto, vamos limpar o terminal e executar o comando npm run dev. Este projeto utiliza o Vite e levantará o servidor web para nós.

> npm run dev

Ao abrir no Chrome, ele carrega uma página de login. O projeto base está funcionando.

Analisando o código inicial

Agora, vamos dar uma olhada no código. Vamos maximizar o VS Code e abrir o arquivo main.js. Este arquivo está exibindo a página de login. Inicialmente, o código está configurado para renderizar a página de login:

```JSX
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    {/* <Register /> */}
    {/* <Feed /> */}
    {/* <BlogPost /> */}
  </StrictMode>,
)
```

Temos outras páginas disponíveis, como Register para cadastro, Feed, que será a lista de blog posts do CodeConnect, e o post em si. Vamos examinar esses componentes. Vamos comentar o login e descomentar o Register para exibir a página de cadastro:

```JSX
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    <Register />
    {/* <Feed /> */}
    {/* <BlogPost /> */}
  </StrictMode>,
)
```

Explorando as páginas do projeto

Ao voltar para o Chrome, ele exibe a página de cadastro. Já temos duas páginas funcionando.

Agora, vamos olhar para o Feed. Ele traz uma barra lateral e o feed com todos os posts do blog. Para isso, descomente o Feed:

```JSX
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    {/* <Register /> */}
    <Feed />
    {/* <BlogPost /> */}
  </StrictMode>,
)
```

Por fim, vamos descomentar o blog post. Ele exibe os detalhes de um post, incluindo texto, exemplo de código e comentários:

```JSX
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <Feed /> */}
    <BlogPost />
  </StrictMode>,
)
```

Está tudo funcionando corretamente.

Planejando o roteamento condicional

Nosso objetivo é exibir essas páginas condicionalmente, ou seja, queremos interagir com a URL que a pessoa está acessando. Por exemplo, se acessar /auth/login, exibiremos a página de login. Se acessar /auth/register, exibiremos a página de cadastro. É isso que vamos implementar.

Antes de colocarmos a mão na massa, vamos entender como este projeto está organizado em termos de código.

Estrutura do projeto e organização de código

A primeira pasta que vamos mostrar é a pasta "pages". Esta pasta contém todas as páginas e componentes que acabamos de ver: blog post, feed, login e register. Um detalhe importante é que cada página utiliza um layout específico. Por exemplo, as páginas de login e register usam o AltLayout, enquanto a página de feed e o blog post utilizam o AppLayout. Assim, extraímos o código comum a todas essas páginas, e podemos analisá-las também.

Ao abrir o layout/app/index, encontramos o AppLayout, que exibe a barra de navegação lateral. No caso do AltLayout, de autenticação, temos um container, um card e o conteúdo principal da página, que é o que muda. No caso do login e logout, o que muda é o formulário. Se olharmos nas páginas, no index.js dentro de login, encontramos um AltFormContainer com todo o formulário, e o mesmo ocorre com o register, utilizando o AltLayout com AltFormContainer.

Explorando componentes e layouts

O projeto está bem organizado. A última pasta que vamos ver é a de "components". Nela, encontramos o Side, SideLink, o próprio AltFormContainer, Alt, Avatar, Button, CardPost, CheckBox, entre outros. Ou seja, todos os nossos componentes visuais estão dentro da pasta "components", todos os nossos layouts estão na pasta "layouts" e todas as nossas páginas estão na pasta "pages".

É isso que vamos trabalhar. Se desejar, entre este vídeo e o próximo, você pode explorar o projeto para ver como ele foi feito. Ele foi construído usando CSS modules, e já temos um curso específico sobre isso. Você pode conferir se quiser entender como ele foi construído.

Concluindo a preparação para o roteamento

Com o projeto apresentado, o CodeConnect já deve estar rodando na sua máquina, assim como está na nossa. Estamos prontos para começar a entender como faremos o roteamento e exibiremos componentes condicionalmente, de acordo com a rota ou URL acessada no momento.

Nos vemos na próxima aula. Até lá!

### Aula 1 - Para saber mais: modos do react router

O [React Router](https://reactrouter.com/6.30.1/start/overview) é uma ferramenta poderosa que nos ajuda a criar aplicações com navegação entre páginas. Conforme você avança no uso dele, vai perceber que existem diferentes modos de usar o React Router, cada um com suas características e nível de complexidade.

Vamos conhecer os três modos disponíveis:

- Declarative Mode (modo declarativo)
- Data Mode (modo de dados)
- Framework Mode (modo framework)

No curso, vamos focar apenas no Declarative Mode, que é o mais simples e ideal para quem está começando. Mas é importante conhecer os outros dois, para entender as possibilidades.

1. Declarative Mode

Esse é o modo mais direto e comum. Ideal para quem quer fazer uma SPA (Single Page Application).
No modo declarativo, usamos o componente `<BrowserRouter>` e criamos as rotas dentro da renderização dos componentes React.

Exemplo:

```JSX
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./Home"; 
import About from "./About"; 

function App() { 
return ( 
<BrowserRouter> 
<Routes> 
<Route path="/" element={<Home />} /> 
<Route path="/about" element={<About />} /> 
</Routes> 
</BrowserRouter> 
); 
} 
```

Principais recursos:

- Navegação com `<Link>`;
- Controle de URL com useNavigate e useLocation;
- Renderização baseada no caminho da URL.

Quando usar?

- Quando você quer começar simples;
- Quando já usa Create React App ou Vite com React;
- Quando você tem uma arquitetura de dados separada.

2. Data Mode

Esse modo traz mais funcionalidades. Ele separa a configuração das rotas da renderização React e permite carregar dados antes de mostrar a página. Ideal para apps mais complexos.

Exemplo:

```JSX
import { 
createBrowserRouter, 
RouterProvider, 
} from "react-router-dom"; 

const router = createBrowserRouter([ 
{ 
path: "/", 
Component: Home, 
loader: () => fetch("/api/home-data"), 
}, 
]); 

ReactDOM.createRoot(document.getElementById("root")).render( 
<RouterProvider router={router} /> 
); 
```

Principais recursos:

- loader: carrega dados antes de renderizar a página;
- action: trata formulários e eventos;
- useFetcher: controle mais fino de requisições e estados pendentes

Quando usar?

- Quando você quer mais controle sobre os dados carregados;
- Quando sua aplicação tem muitas interações com API;
- Quando quer mostrar estados de carregamento (loading).

3. Framework Mode

Esse é o modo mais avançado. Usa um plugin do Vite para transformar as rotas em módulos e trazer recursos prontos como:

- Tipagem automática de rotas;
- Divisão inteligente de código (code splitting);
- Suporte nativo a SSR (Server-side rendering) e SSG (Static site generation).

Exemplo:

```JSX
// routes.js 
import { index, route } from "@react-router/dev/routes"; 

export default [ 
  index("./pages/home.tsx"), 
  route("products/:id", "./pages/product.tsx"), 
]; 
```

loader do lado do módulo:

```JSX
import { Route } from "+./types/product.tsx"; 

export async function loader({ params }: Route.LoaderArgs) { 
  const product = await fetchProduct(params.id); 
  return { product }; 
} 

export default function Product({ loaderData }: Route.ComponentProps) { 
  return <h1>{loaderData.product.name}</h1>; 
} 
```

Quando usar?

- Quando você quer o máximo de produtividade com integração de tudo;
- Quando quer comparar com frameworks como Next.js ou Remix;
- Quando precisa de SSR ou SSG prontos.

Como escolher o modo certo?

A documentação do React Router recomenda escolher o modo baseado na quantidade de ajuda que você quer:

| Modo       | Controle | Funcionalidades  | Ideal para                          |
| ---------- | -------: | ---------------- | ----------------------------------- |
| Declarative| Alto     | Básicas          | Quem está começando                 |
| Data       | Médio    | Intermediárias   | Apps com interação com API          |
| Framework  | Baixo    | Avançadas        | Projetos grandes e completos        |

No nosso curso, vamos usar o Declarative Mode porque ele é mais simples e ideal para começar. Com ele você já consegue criar uma SPA funcional e entender como a navegação funciona no React.

Mais pra frente, quando você tiver mais confiança, vale a pena explorar os outros modos e ver o que melhor se encaixa com os seus projetos.

Vida longa e próspera o/

### Aula 1 - Criando a primeira rota - Vídeo 4

Transcrição  
Para realizar o roteamento, utilizaremos uma biblioteca bastante conhecida no mundo do React, chamada React Router. Vamos acessar a internet e buscar por React Router no Google. O primeiro resultado que aparece é a documentação oficial, então clicamos em reactrouter.com, depois em "Docs" e, no menu à esquerda, em "Instalação". Por padrão, a opção de instalação com framework está selecionada, mas não é isso que queremos. Vamos trabalhar com o modo declarativo do React Router. No menu à esquerda, na parte inferior, encontramos "Declarative Mode, Instalação", que é o que precisamos.

Quais são os passos para instalar o React Router? O primeiro passo é criar o projeto, mas podemos pular essa etapa, pois o CodeConnect já foi criado utilizando o Vite. Em seguida, instalamos a biblioteca. No terminal, paramos o projeto que estava rodando com npm run dev e colamos o comando npm i react-router-dom, que copiamos do navegador.

> npm i react-router-dom

Após a instalação, executamos npm run dev novamente para reiniciar o projeto.

> npm run dev

Configurando o BrowserRouter

No CodeConnect, abrimos o console com o inspecionador de elementos e recarregamos a página para garantir que a instalação da biblioteca não causou problemas. É um hábito verificar se está tudo funcionando corretamente após a instalação de uma biblioteca.

Com a instalação concluída, a documentação indica que devemos renderizar um BrowserRouter na camada superior da aplicação. Copiamos a linha que importa o BrowserRouter e, no VS Code, colamos no arquivo main.

> import { BrowserRouter } from "react-router-dom";

Na linha 8, inserimos o BrowserRouter e renderizamos tudo dentro dele.

```JSX
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Feed /> */}
      <BlogPost />
    </BrowserRouter>
  </StrictMode>,
)
```

Existem várias coisas comentadas, mas podemos deixá-las assim por enquanto, pois estamos seguindo a orientação da documentação. Após recarregar, verificamos que a aplicação continua funcionando, exibindo o autoregistro discutido na última aula. Ao trocar, comentamos o do blog post e exibimos o do registro, e tudo continua funcionando corretamente. O React Router está instalado.

Definindo as Rotas

Voltamos à documentação, onde, no canto inferior esquerdo, encontramos a parte sobre roteamento, que é o que desejamos. Vamos para o nosso routing. Definimos as rotas utilizando o BrowserRouter e um componente chamado Routes no plural, que conterá todas as rotas.

```JSX
<BrowserRouter>
  <Routes>
    
  </Routes>
</BrowserRouter>
```

Cada elemento Routes no plural pode possuir várias Route no singular. Na linha 11 da documentação, é mencionado que temos um Path, ou seja, um caminho e um elemento. Isso se refere ao Path que utilizamos, dado uma URL, como o LoginRegister, que exibirá o componente específico.

Podemos agora ir para o código e começar a implementar. No VS Code, dentro do BrowserRouter, criamos o Routes no plural. Todas as nossas rotas ficarão dentro dele. Em seguida, criamos uma Route no singular.

```JSX
<Routes>
  <Route />
</Routes>
```

O VS Code já importou automaticamente tanto o Routes no plural quanto o Route no singular. Vamos prosseguir com a implementação.

Definição de Rotas no Componente

No nosso componente de rota, precisamos definir o path (caminho). Vamos usar o exemplo /auth/register. Além disso, precisamos definir o elemento que será renderizado, que é o nosso componente Register.

```JSX
<Route path='/auth/register' element={<Register />} />
```

É importante notar que estamos utilizando o componente na forma de JSX, e não como uma função, pois o React Router não aceita dessa forma.

Já temos a rota /auth/register e podemos adicionar /auth/login.

```JSX
<Route path='/auth/register' element={<Register />} />
<Route path='/auth/login' element={<Login />} />
```

Estamos utilizando o prefixo /auth para agrupar por contexto, já que estamos lidando com autenticação, como cadastrar um novo usuário e fazer login.

Podemos também definir a rota inicial. Quando alguém acessar /, exibiremos o feed de postagens.

```JSX
<Route path='/auth/register' element={<Register />} />
<Route path='/auth/login' element={<Login />} />
<Route path='/' element={<Feed />} />
```

Se alguém acessar uma rota específica, exibiremos um blog-post, que será o elemento BlogPost.

```JSX
<Route path='/auth/register' element={<Register />} />
<Route path='/auth/login' element={<Login />} />
<Route path='/' element={<Feed />} />
<Route path='/blog-post' element={<BlogPost />} />
```

Vamos remover os componentes soltos e deixar apenas as rotas organizadas. Ficamos com o StrictMode do lado de fora, o BrowserRouter, e dentro dele, as rotas. Temos quatro rotas conhecidas: cadastrar um usuário, fazer login, feed de blog e o post em si, o BlogPost.

```JSX
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/' element={<Feed />} />
        <Route path='/blog-post' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
```

Testando as Rotas

Após salvar, verificamos se tudo funciona. No navegador, ao recarregar a página, por padrão, o feed é carregado, que era o esperado. Ao acessar /auth/register, a página de cadastro é exibida. Em /auth/login, a página de login aparece. E ao acessar /blog-post, o BlogPost é carregado.

Implementação do Roteamento

O roteamento está implementado. Precisamos de um BrowserRouter, rotas e uma rota. Essa é a organização mínima para um React Router declarativo. Resumidamente, implementamos o roteamento e estamos reagindo à troca de rota. Usar essa biblioteca é mais interessante do que manualmente monitorar o objeto window, location e pathname.

Considerações Finais

Embora o roteamento esteja parcialmente implementado, precisamos entender o que está acontecendo. É importante compreender a arquitetura por trás da solução e prestar atenção aos detalhes ao usar o React Router. Vamos explorar mais a fundo no próximo vídeo.

### Aula 1 - Para saber mais: client side vs server side

Quando começamos a aprender sobre desenvolvimento web, principalmente com React e o conceito de SPA (Single Page Application), alguns termos começam a aparecer com mais frequência. Dois deles são Client-side e Server-side.

Talvez você tenha ouvido essas palavras pela primeira vez agora. Sem problema! Vamos com calma e explicar tudo do zero.

O que são "Client" e "Server"?

Antes de falar sobre "side" (lado), precisamos entender quem são os personagens dessa história:

- Client (cliente) é o navegador da pessoa usuária. Pode ser o Chrome, Firefox, Safari, etc. Ele é quem faz o pedido (request) para acessar um site.
- Server (servidor) é o computador (ou serviço na nuvem) que envia os arquivos do site ou da aplicação quando o client faz um pedido.

Imagine assim:

"Quando você digita www.alura.com.br no navegador e aperta Enter, o navegador (client) envia um pedido para o servidor. O servidor responde com os arquivos (html, css, js, imagens, etc) que formam a página."

Agora sim, vamos para os "lados" dessa conversa.

Server-side

Server-side é quando o servidor é o responsável por montar a página antes de enviá-la ao navegador.

Vamos imaginar que você quer acessar um perfil de usuário:

- O navegador faz uma requisição para https://cursos.alura.com.br/user/viniciosneves;
- O servidor recebe esse pedido, busca os dados do usuário "viniciosneves" no banco de dados, monta uma página HTML completa com essas informações e envia essa página prontinha para o navegador;
- O navegador exibe o que recebeu.

Esse modelo é usado desde os primórdios da web. É simples, direto, mas pode ser um pouco lento, porque cada vez que o usuário clica em algo, o navegador precisa pedir tudo de novo para o servidor.

Client-side

Client-side é quando o servidor envia um arquivo básico (geralmente um HTML vazio ou quase vazio), e quem monta a página é o próprio navegador, usando JavaScript.

- O navegador faz uma requisição para https://cursos.alura.com.br/;
- O servidor responde com um HTML que carrega os scripts do React;

Esses scripts são baixados e executados no navegador, e é o React (no lado do client) que vai buscar os dados, montar os componentes e exibir a interface.

Essa é a base do que chamamos de SPA. O aplicativo só carrega uma vez, e depois disso, as mudanças de tela (as "rotas") são tratadas pelo próprio navegador, sem precisar pedir uma nova página inteira para o servidor.

Por que isso importa no frontend?

Porque afeta como a nossa aplicação funciona, como ela é carregada, e como o usuário interage com ela.

Com React, normalmente usamos o client-side para criar aplicações mais rápidas e fluidas. A troca de telas é imediata, os componentes são reaproveitados, e você tem mais controle sobre a experiência da pessoa usuária.

Mas isso também traz desafios, como:

- Como garantir que o Google entenda o conteúdo da página? (SEO)
- Como mostrar algo rápido enquanto os dados estão sendo carregados?

E é por isso que existem técnicas como Server-side Rendering ou Hydration, mas isso fica para outro momento :)

Por agora, o mais importante é entender:

- Server-side: o servidor monta a página e envia pronta.
- Client-side: o navegador monta a página com JavaScript (por exemplo, com React).

Ambos são importantes, e a escolha depende do tipo de aplicação que você quer criar.

Vida longa e próspera o/

### Aula 1 - O que aprendemos?

Nesta aula, aprendemos:

- Como iniciar um projeto web com Vite e abrir no VSCode.
- A importância do roteamento condicional e organização estrutural em projetos.
- O uso de layouts para reutilizar estruturas comuns nas páginas.
- Como instalar e configurar o React Router para gerenciamento de rotas em React.
- A diferença entre componentes Routes e Route para estruturar rotas.
- O conceito e funcionamento das Single Page Applications (SPAs).
- Comparar manipulação de URLs usando React Router versus métodos manuais.
- A importância de verificar a versão do React Router em uso para compatibilidade.

## Aula 2 - Protegendo e agrupando Rotas

### Aula 2 - Agrupando rotas - Nested routes - Vídeo 1

Transcrição  
Vamos continuar desenvolvendo o nosso CodeConnect. Já temos o React Router instalado e configurado, com o roteador funcionando. Agora, precisamos manter a organização do projeto. A estrutura já está bem definida, então devemos, no mínimo, manter essa organização.

A fonte de verdade e consulta para o código que vamos desenvolver é a documentação. Tudo que faremos aqui pode ser encontrado diretamente lá. Vamos aplicar um projeto específico, discutindo nossas decisões ao longo do processo.

Focando nas rotas no VS Code

Vamos focar nas nossas rotas no VS Code. Elas já estão funcionando. Por exemplo, se alterarmos a URL de /auth/register para a barra, que é a página inicial, o sistema já responde como deveria. No entanto, temos dois cenários distintos. Vou separar esses dois cenários para melhor visualização.

O primeiro cenário é focado em autenticação, com um prefixo auth para indicar que estão relacionados de alguma forma. Eles utilizam o mesmo layout. A parte inferior é a aplicação em si, com a página inicial e a página de um post. Em situações como essa, é comum agrupar por contexto.

Definindo e agrupando rotas básicas

Para começar, vamos definir nossas rotas básicas:

```JSX
<Routes>
    <Route path='/auth/register' element={<Register />} />
    <Route path='/auth/login' element={<Login />} />
    <Route path='/' element={<Feed />} />
    <Route path='/blog-post' element={<BlogPost />} />
</Routes>
```

Como agrupamos? Normalmente, quando usamos um prefixo e temos mais de uma rota com o mesmo prefixo, isso pode indicar que faz sentido agrupar. Não é uma regra, mas pode ser o caso. Para agrupar rotas usando as ferramentas do React Router, criamos um elemento de rota no singular. Dentro desse elemento, colocamos as rotas que queremos. Assim, estamos criando uma rota alinhada.

Agrupando rotas de autenticação
Vamos começar a agrupar as rotas de autenticação:

```JSX
<Routes>
    <Route path='/auth'>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
    </Route>
    <Route path='/'>
        <Route path='' element={<Feed />} />
        <Route path='blog-post' element={<BlogPost />} />
    </Route>
</Routes>
```

Criamos uma rota e a agrupamos. Agora, temos dois elementos de rota. Removemos as linhas em branco e, dentro, temos o caminho. Se salvarmos e recarregarmos a página, tudo continuará funcionando. Ao acessar /auth/login ou /auth/register, o funcionamento permanece o mesmo. Já está agrupado e nada mudou.

Trabalhando com segmentos de rota

O que conseguimos fazer é trabalhar com o segmento que estamos repetindo, /auth, na rota mais externa. Colocamos o path como /auth. Dentro de /auth, temos os dois elementos desejados: register, sem a barra no início, e login.

```JSX
<Routes>
    <Route path='/auth'>
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
    </Route>
    <Route path='/'>
        <Route path='' element={<Feed />} />
        <Route path='blog-post' element={<BlogPost />} />
    </Route>
</Routes>
```

No caso abaixo, o path padrão que colocamos é a raiz, a página inicial. Podemos remover essa barra de dentro e também do blog-post. No caso de /auth, não há mais duplicação desse prefixo, e no caso abaixo, estamos agrupando semanticamente as rotas de aplicação e as rotas de autenticação.

Verificando o funcionamento das rotas agrupadas

Ao recarregar no Chrome, tudo continua funcionando. Se acessarmos /auth/login, funciona; /auth/register, funciona; /, funciona; e /blog-post, também funciona. Agora, está agrupado de forma semântica. No código, estamos agrupando semanticamente conjuntos de rotas. Isso nos ajuda a organizar e preparar o terreno para futuras modificações.

Ao criar rotas, devemos sempre pensar se elas fazem parte de algum grupo e se queremos segmentá-las dessa forma. A missão deste encontro foi organizar nosso roteamento, removendo o /auth repetido, e agora estamos no caminho para continuar evoluindo o CodeConnect. Esse era o objetivo deste encontro. Nos vemos na sequência.

### Aula 2 - Implementando Linking - Vídeo 2

Transcrição  
Nosso objetivo agora é implementar a navegação sem precisar alterar manualmente a URL. Atualmente, estamos trocando as páginas manualmente, utilizando caminhos como /blog, /post, /out, /register. Precisamos oferecer uma forma para que as pessoas possam navegar entre essas páginas de maneira mais intuitiva.

Vamos começar consultando a documentação. Estamos na seção de roteamento, onde configuramos as rotas. Em seguida, temos a parte de navegação, que é dividida em três blocos principais:

NavLink: A ideia do NavLink é renderizar ou aplicar estilos com base na ativação da rota. Por exemplo, se a rota está ativa, podemos passar uma função para o className para tomar decisões estilísticas.

Link Direto: Permite a navegação sem a necessidade de controlar o estado de ativação da rota.

useNavigate: Utilizado para navegação via JavaScript, útil quando queremos navegar em resposta a eventos.

Para o momento, vamos focar no Link, pois temos dois cenários no projeto que precisam ser ajustados. Vamos fechar tudo que está aberto e começar.

Ajustando o AsideLink

A primeira modificação é no AsideLink. Ele não pode mais ser uma tag <a>, mas sim um componente do React Router. Caso contrário, não teremos o comportamento de Single Page Application.

Para começar, precisamos importar o Link do React Router:

```JSX
import { Link } from "react-router-dom";
```

Agora, vamos substituir a tag `<a>` por um componente Link. O Link não utiliza href, mas sim to, indicando o destino da navegação. Dessa forma, utilizamos o Link do React Router sem alterar o contrato do AsideLink, que continua recebendo um href.

```JSX
return (<Link to={href} className={styles.asideLink}>
    {children}
</Link>)
```

Além do AsideLink, temos um componente chamado link que também exporta uma tag <a>. Precisamos alterar ambos os cenários para usar o componente Link do React Router.

Implementando ajustes no componente Link

Nosso objetivo é substituir o que temos pelo comportamento do React Router sem quebrar a API existente. Ou seja, sem precisar fazer substituições manuais de find e replace.

Importação do Link: No arquivo index.js do componente link, importamos o Link do React Router. Aqui, enfrentamos um conflito de nomes, pois nosso componente já se chama link. Para resolver isso, podemos importar o Link do React Router com um apelido, por exemplo, RouterLink.

```JSX
import { Link as RouterLink } from "react-router-dom";
```

Ajustes no Componente Link: Vamos definir o componente Link para utilizar o RouterLink:

```JSX
export const Link = ({ children, href, ...props }) => {
    return (
        <RouterLink to={href} {...props} className={`${styles.link} ${className}`}>
            {children}
        </RouterLink>
    );
}
```

Manutenção da Estratégia: Como as pessoas estão utilizando o componente como se fosse uma tag <a>, podemos receber o href e passá-lo para o to do RouterLink. Assim, mantemos a mesma estratégia de navegação.
Com essas alterações, garantimos uma navegação mais fluida e integrada ao React Router, sem comprometer a estrutura existente do projeto.

Realizando ajustes específicos

Primeiramente, no componente sideindex.jsx, a logo do CodeConnect não levará mais para trás, mas sim para a página inicial:

```JSX
<Link to="/" alt="Logo da CodeConnect">
    <img src={logo} alt="Logo da CodeConnect" />
</Link>
```

O link de publicar pode ser mantido, pois está fora do nosso escopo. O feed também deve ser alterado para a barra inicial:

```JSX
<AsideLink href="/">
    <IconFeed />
    Feed
</AsideLink>
```

No caso do login, temos uma página específica para isso, que é barra-auth-login, e já está configurado corretamente:

```JSX
<AsideLink href="/auth/login">
    <IconLogin />
    Login
</AsideLink>
```

Precisamos fazer mais ajustes. Vamos olhar a página de login. O caminho é src-páginas-login-index.jsx. No rodapé, há um link que diz "Ainda não tem conta? Crie seu cadastro." Queremos que esse link aponte para barra-auth-register:

```JSX
<Link to="/auth/register">
    <Typography variant="body" color="--highlight-green">
        Crie seu cadastro!
    </Typography>
    <IconAssignement color="#81FE88" />
</Link>
```

No registro, temos um cenário inverso: "Já tem uma conta? Faça login." Vamos trocar o href para login:

```JSX
<Link to="/auth/login">
    <Typography variant="body" color="--highlight-green">
        Faça seu login!
    </Typography>
    <IconLogin color="#81FE88" />
</Link>
```

Testando a navegação implementada

Resumindo, incorporamos o componente de link dentro do nosso aside-link e do link do nosso projeto. Agora, deveríamos ver essa navegação funcionando. Vamos testar. No Chrome, ao acessar o CodeConnect e recarregar a página, vemos "Já tem uma conta? Faça login." Ao clicar, somos direcionados para a página de login. "Ainda não tem conta? Crie seu cadastro." Ao clicar, somos direcionados para a página de cadastro. Está funcionando corretamente.

Agora, vamos manualmente para a página inicial. Dentro do card post, há um link para ver detalhes, mas ele ainda não leva a lugar algum. Vamos ajustar para ter a navegação para a última página que falta: Blog post.

Vamos fechar tudo que está aberto para não nos confundirmos com os componentes. Temos um componente chamado card post em src-componentes-card-post-index.jsx. Há um "ver detalhes" que está com a tag a, com âncora direta. Não queremos a tag âncora, mas sim o componente link do react-router. Vamos importar o link do react-router e substituir href por to, apontando para barra-blog-post.

```JSX
import { Link } from "react-router-dom";
<p>
    <Link to="/blog-post">Ver detalhes</Link>
</p>
```

Isso deveria renderizar a página de detalhes. Vamos testar. Recarregamos a página, clicamos em "ver detalhes" e fomos direcionados corretamente.

O ponto de atenção é que já temos o fluxo funcionando. Conseguimos entrar no login, voltar, entrar no detalhe de um post, e tudo isso sem recarregar a página inteira. Quando usamos nosso SPA, toda a troca de páginas é feita dentro do navegador, totalmente via JavaScript, sem ir ao servidor.

Com a navegação implementada, podemos continuar desenvolvendo o restante, sempre utilizando o React Router. Até a próxima!

### Aula 2 - Para saber mais: manter contrato da api na migração do link

Contextualizando a Estratégia

Em muitos projetos, sobretudo os com evolução contínua, é comum precisarmos atualizar componentes para aproveitar melhores práticas ou novas ferramentas sem causar impactos inesperados em partes já consolidadas do sistema. Um exemplo é a migração de uma tag de âncora () para o componente de navegação do React Router. Ao mesmo tempo, a API do componente – ou seja, as propriedades que ele recebe – deve se manter para não forçar mudanças em todas as áreas que já o utilizam.

O Mecanismo de Wrapper

A estratégia consiste em criar um componente que envolva o componente nativo do React Router, fazendo a ponte entre a API antiga e a nova. Em outras palavras, o componente wrapper aceita, por exemplo, a propriedade href e a converte internamente para to, que é a propriedade esperada pelo componente do React Router. Dessa forma, módulos que utilizam o componente não necessitam de alterações mesmo quando a implementação interna muda.

Um exemplo de como isso pode ser realizado é:

```JSX
import { Link as RouterLink } from 'react-router-dom';

function LinkWrapper({ href, ...props }) {
  return <RouterLink to={href} {...props} />;
}

export default LinkWrapper;
```

Nesse exemplo, o componente LinkWrapper continua a expor a propriedade href, mantendo o contrato original, enquanto, por baixo dos panos, converte o dado para to para compatibilizar com o React Router.

Racional e Benefícios da Abordagem

Ao adotar essa técnica, garantimos que a evolução da aplicação ocorra de forma segura e modular. A manutenção de uma API consistente permite:

- Reduzir a necessidade de grandes refatorações em pontos do código que consomem o componente;
- Facilitar a integração entre equipes, assegurando que as mudanças internas não afetem diretamente a forma como o componente é utilizado;
- Minimizar riscos de erros inesperados e a propagação de bugs em funcionalidades já consolidadas.

Considerações Finais

Embora seja uma solução que agregue robustez ao projeto, é interessante documentar bem o comportamento do wrapper. Isso evitará dúvidas futuras, principalmente em times com diversos colaboradores, e garantirá o alinhamento sobre quando e como os wrappers devem ser implementados em outros contextos. A clareza na definição da interface é essencial para uma manutenção efetiva e contínua da aplicação.

### Aula 2 - Implementando rotas protegias - Vídeo 3

Transcrição  
Vamos seguir com a implementação, agora focando em proteger determinadas rotas. O que significa proteger? Por exemplo, ao acessar manualmente a raiz do nosso projeto no Chrome, queremos garantir que tanto a página inicial quanto a página de blog post sejam exibidas apenas se a pessoa estiver logada. Não queremos exibir o feed nem a página de detalhes se a pessoa não estiver autenticada na nossa aplicação.

Vamos pensar em uma estratégia para definir isso. No arquivo main.jsx, podemos implementar uma das possíveis estratégias. Podemos envolver tanto o feed quanto o blog post em um componente que chamaremos de ProtectedRoute. Assim, queremos proteger esses elementos. Vamos formatar o código adequadamente.

Criando o componente ProtectedRoute

Inicialmente, temos a rota do feed configurada assim:

```JSX
<Route path='' element={<Feed />} />
```

Temos essa estratégia: uma rota protegida que envolve uma página. Nesse componente de rota protegida, implementaremos a lógica de redirecionamento. Vamos criar esse componente na pasta "components", em um novo arquivo ProtectedRoute/index.jsx. Utilizaremos JSX normal e exportaremos a constante ProtectedRoute, que receberá uma arrow function.

Primeiro, vamos definir a estrutura básica do componente ProtectedRoute:

```JSX
export const ProtectedRoute = () => {

}
```

Agora, vamos modificar a rota do feed para usar o ProtectedRoute:

```JSX
<Route path='' element={
    <ProtectedRoute>
    </ProtectedRoute>
} />
```

Passando componentes como children

Em seguida, vamos passar o componente Feed como children para o ProtectedRoute:

```JSX
<Route path='' element={
    <ProtectedRoute>
        <Feed />
    </ProtectedRoute>
} />
```

E faremos o mesmo para a rota do blog post:

```JSX
<Route path='blog-post' element={
    <ProtectedRoute>
        <BlogPost />
    </ProtectedRoute>
} />
```

Agora, vamos expandir o componente ProtectedRoute para aceitar children e retornar esses children por padrão:

```JSX
export const ProtectedRoute = ({children}) => {
    return children
}
```

Vamos importar o ProtectedRoute no nosso projeto:

```JSX
import { ProtectedRoute } from './components/ProtectedRoute/index.jsx'
```

Implementando lógica de autenticação

Agora, o que falta é implementar a lógica de autenticação na rota protegida. Já temos um hook no projeto chamado useAuth, localizado em src/hooks/useAuth. Esse hook já possui toda a lógica de registro de usuário, login, logout e estado de autenticação, utilizando local storage. Como isso está fora do nosso escopo atual, focaremos no comportamento do React Router e das rotas. O hook já está pronto desde o início.

Vamos utilizá-lo para obter o estado do usuário e verificar se está carregando ou não. No componente de rota protegida, utilizaremos o useAuth. O VS Code já importou para nós. Queremos guardar o isAuthenticated e o isLoading:

```JSX
const { isAuthenticated, isLoading } = useAuth()
```

Se estiver carregando, precisamos esperar. Vamos começar com nossas condições: se isLoading, podemos exibir o componente de spinner que temos no projeto, localizado em src/components. Podemos retornar esse componente spinner:

```JSX
if (isLoading) {
    return <Spinner />
}
```

Redirecionando usuários não autenticados

Se está carregando, já eliminamos um estado. O que mais precisamos fazer? Vamos criar mais um cenário. Se não estamos autenticados, não queremos retornar nada, queremos retornar nulo e redirecionar:

```JSX
if (!isAuthenticated) {
    return null
}
```

O que mais precisamos fazer agora? Precisamos utilizar o useEffect, ou seja, precisamos de um efeito para isso. Vamos gerar esse efeito:

```JSX
useEffect(() => {

}, [isAuthenticated, isLoading])
```

Vamos passar a lista de dependências, que será composta por isAuthenticated e isLoading. Basicamente, o que faremos é: se não está carregando e não estamos autenticados (isAuthenticated), precisamos fazer um redirecionamento para /auth/login:

```JSX
useEffect(() => {
    if(!isLoading && !isAuthenticated) {
        // redirect /auth/login
    }
}, [isAuthenticated, isLoading])
```

Utilizando useNavigate para redirecionamento

Como fazemos para realizar esse redirecionamento usando o React Router? Já vimos isso em um vídeo anterior. Repare que, ao recarregar a página, ele não está renderizando nada, pois o usuário não está autenticado. Na documentação do React Router, temos a navegação via hook para fazer essa navegação de forma programática, via JavaScript. Vamos implementar isso.

Vamos importar o useNavigate e obter o navigate a partir desse hook:

```JSX
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
```

Se não está carregando e não está autenticado, navegamos para /auth/login. A lista de dependências também deve incluir o navigate:

```JSX
useEffect(() => {
    if(!isLoading && !isAuthenticated) {
        navigate('/auth/login')
    }
}, [isAuthenticated, isLoading, navigate])
```

Verificando o funcionamento do roteamento protegido

Após salvar, vamos verificar se está funcionando. No Chrome, ao voltar para o CodeConnect, ele carregou o login. Se clicarmos em "crie seu cadastro", a página de cadastro é exibida corretamente. Se tentarmos acessar a raiz, ele faz o redirecionamento. Se tentarmos acessar /blog-post e pressionarmos "Enter", ele também faz o redirecionamento. Não conseguimos mais acessar aquelas rotas protegidas.

Nosso roteamento protegido está funcionando, mas ainda não temos a rotina de login, logout e cadastro de usuário. O hook está lá, é do React Hook, não do hook da Marvel. Precisamos agora integrá-lo tanto na página de login quanto na página de cadastro. Essas são nossas próximas missões, pois nossa rota já está protegida e removemos uma funcionalidade. Vamos devolvê-la para que tudo funcione corretamente. Podemos acessar aquelas rotas especialmente se estivermos autenticados. Nos vemos na próxima etapa.

### Aula 2 - Para saber mais: padrões de URLs

Quando estamos criando uma aplicação web, a organização das URLs faz toda a diferença para manter o código limpo, previsível e fácil de entender. Assim como pastas ajudam a manter seus arquivos organizados, os prefixos de rota ajudam a organizar as páginas da sua aplicação.

Vamos entender como fazer isso na prática com o React Router.

O que é uma URL e uma rota?

Uma URL é o endereço que aparece no navegador, como:

```JSX
https://codeconnect.com/auth/login 
```

A rota é a parte da URL que seu código React Router reconhece para decidir qual componente mostrar. Exemplo:

```JSX
<Route path="/auth/login" element={<Login />} /> 
```

Por que usar prefixos nas rotas?

Imagine que você tem duas páginas:

Uma para login;

Outra para cadastro.

Ao invés de criar rotas separadas como /login e /register, podemos organizar assim:

```JSX
/auth/login 
/auth/register 
```

Isso deixa claro que ambas fazem parte de uma mesma "sessão" da aplicação: autenticação.

Na prática: organizando com prefixos

Com o React Router, podemos agrupar rotas com o mesmo prefixo:

```JSX
<Route path="/auth"> 
  <Route path="login" element={<Login />} /> 
  <Route path="register" element={<Register />} /> 
</Route> 
```

Isso significa:

- Quando a URL for /auth/login, renderiza o componente Login;
- Quando for /auth/register, renderiza o Register.

O que mudou no projeto?

Antes:

```JSX
<Route path="/auth/login" element={<Login />} /> 
<Route path="/auth/register" element={<Register />} /> 
```

Depois:

```JSX
<Route path="/auth"> 
  <Route path="login" element={<Login />} /> 
  <Route path="register" element={<Register />} /> 
</Route> 
```

O comportamento final é o mesmo, mas a segunda forma deixa o código mais organizado, principalmente quando temos muitos grupos de rotas (ex: /blog, /admin, /user, etc).

### Aula 2 - Sincronização segura de contatos na Indexa - Exercício

A Indexa, uma plataforma que organiza e gerencia contatos pessoais e profissionais de forma inteligente, está enfrentando um desafio com a sincronização automática de contatos. Você precisa garantir que apenas usuários autenticados possam realizar a sincronização de seus contatos, evitando que dados pessoais sejam expostos indevidamente. Atualmente, a sincronização pode ser iniciada por qualquer pessoa, o que compromete a segurança dos dados.

Qual estratégia você adotaria para garantir que apenas usuários autenticados possam iniciar a sincronização de contatos?

Alternativa correta  
Implementar uma verificação de autenticação antes de permitir a execução da funcionalidade de sincronização, utilizando um hook de autenticação como o use-auth, para garantir que apenas usuários autenticados possam iniciar o processo.

> Correta, pois essa abordagem assegura que apenas usuários autorizados possam acessar e sincronizar seus contatos, protegendo os dados pessoais de acessos não autorizados.

### Aula 2 - O que aprendemos?

Nesta aula, aprendemos:

- A importância de manter uma estrutura organizada em projetos utilizando prefixos.
- Como agrupar rotas utilizando componentes de rota no React Router.
- A estruturar rotas de forma alinhada e encapsular conjuntos de rotas relacionadas.
- A usar o componente Link do React Router para navegação em SPA.
- Como resolver conflitos de nome ao importar componentes com aliases.
- A implementar o componente Link e a usar NavLink para estilos de rotas ativas.
- A proteger rotas com um componente de rota protegida (ProtectedRoute).
- A usar o useNavigate para redirecionamento de usuários não autenticados.

## Aula 3 - Trabalhando com autentificação

### Aula 3 - Projeto da aula anterior

Você pode ir acompanhando o passo a passo do desenvolvimento do nosso projeto e, caso deseje, você pode [acessar o projeto da aula anterior](https://github.com/alura-cursos/4869--react-router-code-connect/tree/aula-2).

Bons estudos!

### Aula 3 -  - Vídeo 1

### Aula 3 -  - Vídeo 2
### Aula 3 -  - Vídeo 3
### Aula 3 -  - Vídeo 4
### Aula 3 -  - Vídeo 5
### Aula 3 -  - Vídeo 6
### Aula 3 -  - Vídeo 7
### Aula 3 -  - Vídeo 8
