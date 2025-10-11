# Curso Alura - React: consumindo APIs HTTP no seu projeto

## Aula 1 - Obtendo dados com GET

### Aula 1 - Apresentação - Vídeo 1

Transcrição  
Olá! Bem-vindos a mais este curso de React. Meu nome é Vinicios Neves, sou o desenvolvedor careca e barbudo da Alura que vocês mais gostam. Estou aqui para aprendermos a nos comunicar com o back-end, ou seja, API e HTTP. Vamos fazer requisições e lidar com as respostas dentro do ecossistema do React.

Para alcançarmos esse resultado, há uma série de passos que precisamos seguir. Vamos começar configurando, por exemplo, o back-end. Vocês terão a opção de configurar o back-end com o Docker, caso o tenham disponível em suas máquinas, ou sem o Docker, caso não o tenham. Assim, poderão escolher o que melhor se adapta ao seu cenário.

Explorando ferramentas e técnicas

Vamos aprender a ler documentação utilizando o Swagger e explorar o que conseguimos fazer com a API. Também aprenderemos a usar uma ferramenta muito utilizada no dia a dia das pessoas desenvolvedoras, que é o Postman. Isso também fará parte do nosso curso. Além disso, vamos aprender a usar o Axios e suas funcionalidades mais complexas.

Conectando o projeto CodeConnect à API

Neste curso, vamos aprender bastante para conectar todo o fluxo do CodeConnect a uma API. O projeto CodeConnect já foi utilizado em cursos anteriores. Vamos começar fazendo alguns pequenos ajustes. Caso não tenha feito o curso anterior, mas possua os pré-requisitos, é possível baixar o projeto e continuar de onde estiver.

Requisitos e expectativas para o curso

É importante lembrar que, como pré-requisito para este curso, é necessário ter conhecimento sobre React, incluindo hooks, effects e states. Também é essencial entender como uma aplicação front-end sem React, ou seja, em Vanilla, funciona e como ela se conecta ao back-end. Vamos focar em como o React realiza essa conexão. Portanto, saber como o JavaScript faz isso é um dos pré-requisitos.

Estamos ansiosos para o próximo vídeo e esperamos que estejam tão animados quanto nós. Vamos levantar esse back-end e explorar como conectar um projeto React ao back-end. Até mais! [♪]

### Aula 1 - Preparando o ambiente

Agora que você já deu seus primeiros passos em uma das ferramentas mais utilizadas em aplicações web, bora seguir com um mergulho mais profundo e aprender ainda mais funcionalidades.

Mas antes de mergulharmos de cabeça, temos dois passos importantes para preparar nosso ambiente:

1. Se acostumar (ainda mais) com o terminal do nosso sistema operacional.
2. Baixar o projeto base.

E claro, eu, o careca barbudo mais bacana que você conhece, vou te ajudar nessa missão!

Então, bora começar?

Projeto base

Antes de mais nada, vale comentar que também temos duas opções de backend para acompanhar este projeto. Vamos configurar e levantar o backend juntos nos próximos vídeos, mas se você quiser se adiantar ou apenas dar uma olhada, os links estão aqui:

- [API sem Docker (mais simples)](https://github.com/viniciosneves/4870--api-sem-docker)

- [API com Docker (ambiente mais completo)](https://github.com/viniciosneves/4870--api-com-docker)

O projeto inicial está [disponível aqui no github](https://github.com/alura-cursos/4870--code-connect), onde você consegue acessar as branchs do projeto. Temos uma branch pra cada aula e um commit por vídeo, assim você consegue usar como base de consulta sempre que precisar.

Você pode baixar o projeto lá pelo GitHub ou [clicando aqui](https://github.com/alura-cursos/4869--react-router-code-connect/archive/refs/heads/main.zip).

Depois de baixar e extrair o conteúdo do arquivo zip, hora de ir pro terminal. Navegue até a pasta onde se encontra o projeto e execute o seguinte comando para instalar as dependências:

> npm install

Pode abrir o projeto no VSCode (ou seu editor favorito) pra ir se acostumando com ele e, na sequência, basta levantar o projeto que usa o Vite por debaixo dos panos:

> npm run dev

E pronto, agora é só acessar http://localhost:5173 e começar a estudar!

Aplicando as melhorias

Agora que o projeto está rodando, vamos aplicar uma série de melhorias para deixar a aplicação mais moderna, intuitiva e funcional. A seguir, o passo a passo completo:

1. Adicionar modal de comentários

Crie dois novos arquivos:

src/components/Modal/index.jsx: Componente Modal que encapsula a tag `<dialog>`, permitindo abrir/fechar via ref.

src/components/Modal/modal.module.css: Estilização com fundo escuro, bordas arredondadas e botão de fechar.

Código base para Modal/index.jsx:

```JSX
import { forwardRef, useImperativeHandle, useRef } from "react" 
import styles from './modal.module.css' 

export const Modal = forwardRef(({ children }, ref) => { 
const dialogRef = useRef(null) 

useImperativeHandle(ref, () => ({ 
openModal: () => dialogRef.current.showModal(), 
closeModal: () => dialogRef.current.close() 
})) 

return ( 
<dialog className={styles.dialog} ref={dialogRef}> 
<header className={styles.header}> 
<button onClick={() => dialogRef.current.close()}>X</button> 
</header> 
{children} 
</dialog> 
) 
}) 
```

2. Criar componente ModalComment

Crie:

- src/components/ModalComment/index.jsx: Componente que utiliza Modal para permitir ao usuário comentar ou editar comentários.
- src/components/ModalComment/commentmodal.module.css: Com um estilo simples para alinhar o botão de ação no final.

Este componente será utilizado nos lugares onde antes era exibido apenas o ícone de chat.

3. Substituir IconButton + IconChat por ModalComment

Em src/components/CardPost/index.jsx, remova:

```JSX
import { IconButton } from "../IconButton" 
import { IconChat } from "../icons/IconChat" 
```

E substitua:

```JSX
<IconButton> 
<IconChat /> 
</IconButton> 
```

por:

```JSX
<ModalComment /> 
```

Repita o mesmo em:

- src/pages/BlogPost/index.jsx
- src/components/Comment/index.jsx (use isEditing={true} nesse caso)

4. Melhorar visual dos comentários

No arquivo src/components/Comment/comment.module.css, adicione:

```JSX
.divider { 
flex-grow: 1; 
} 
```

Em Comment/index.jsx, logo após `<p>`{comment.text}`</p>`, adicione:

```JSX
<div className={styles.divider} /> 
```

5. Criar subheading reutilizável

Crie src/components/Subheading/index.jsx com:

```JSX
import styles from './subheading.module.css' 
export const Subheading = ({children}) => <h2 className={styles.subheading}>{children}</h2> 
```

E subheading.module.css:

```CSS
.subheading { 
color: #81FE88; 
font-size: 31px; 
line-height: 120%; 
} 
```

Substitua o título dentro do ModalComment por esse novo componente.

6. Criar Textarea estilizado

Crie src/components/Textarea/index.jsx:

```JSX
import style from './textarea.module.css' 
export const Textarea = ({children, ...rest}) => ( 
<textarea className={style.textarea} {...rest}>{children}</textarea> 
) 
```

Crie textarea.module.css com o estilo básico do campo de texto.

Use o componente em ModalComment no lugar de `<textarea>`.

7. Tornar IconChat personalizável

Edite src/components/icons/IconChat.jsx:

Substitua:

```JSX
export const IconChat = () => { 
```

por:

```JSX
export const IconChat = ({ fill = '#888888' }) => { 
```

Dentro do path, troque fill="#888888" por fill={fill}.

Em ModalComment, use fill="#000" quando estiver no modo edição.

8. Mostrar login/logout dinamicamente no menu lateral

Em Aside/index.jsx, importe:

```JSX
import { useAuth } from '../../hooks/useAuth' 
```

Dentro do componente Aside, extraia:

```JSX
const { isAuthenticated } = useAuth() 
```

Substitua o botão fixo de logout por:

```JSX
{isAuthenticated ? ( 
<AsideLink href="/auth/logout"> 
<IconLogin /> Logout 
</AsideLink> 
) : ( 
<AsideLink href="/auth/login"> 
<IconLogin /> Login 
</AsideLink> 
)} 
```

9. Remover ProtectedRoute

Em src/router/index.jsx:

Remova:

```JSX
import { ProtectedRoute } from "../components/ProtectedRoute" 
```

Substitua:

```JSX
<ProtectedRoute> 
<Feed /> 
</ProtectedRoute> 
```

por:

```JSX
<Feed /> 
```

E o mesmo para BlogPost.

Figma

O layout da aplicação que vamos utilizar está [disponível aqui no Figma](https://www.figma.com/community/file/1532859456666611154).

Agora sim, tudo no lugar. Bora começar?

### Aula 1 - Mudanças no Code Connect - Vídeo 2

Transcrição  
Vamos continuar evoluindo o CodeConnect, focando agora na parte de comunicação com a API. Para isso, precisaremos de alguns componentes adicionais e algumas modificações desde a última vez que trabalhamos nele. Tudo está bem descrito na preparação do ambiente, mas é interessante discutirmos essas alterações.

A primeira modificação é que tanto a rota de feed quanto a rota de post, para ver os detalhes de um post, eram protegidas e agora não são mais. Vamos deixá-las liberadas o tempo todo, permitindo que mesmo pessoas não logadas consigam ver essas páginas.

Introduzindo o componente de modal

Além disso, vamos introduzir um componente de modal. Assim, ao clicar no ícone do chat, um balão de chat de comentário, poderemos abrir a modal tanto para adicionar um comentário novo quanto para editar um comentário existente. Note que ela possui algumas props indicando se está em modo de edição ou não.

Essas são as modificações principais para este curso. Vamos focar exclusivamente na camada de comunicação com a API, e já preparei isso para vocês. Agora, vamos ao VSCode para ressaltar as alterações que foram feitas. Utilizaremos as próprias folhas do Git para entender o que aconteceu.

Alterações no componente Aside

No Aside, especificamente no index.jsx do Aside, ou seja, nosso componente, fizemos uma alteração: agora, se a pessoa está autenticada, exibimos a opção de logout; caso contrário, exibimos a opção de login.

Para implementar essa lógica, utilizamos o seguinte código:

```JSX
{isAuthenticated && (
  <li>
    <AsideLink href="/auth/logout">
      <IconLogin />
      Logout
    </AsideLink>
  </li>
)}
{!isAuthenticated && (
  <li>
    <AsideLink href="/auth/login">
      <IconLogin />
      Login
    </AsideLink>
  </li>
)}
```

Atualizações no Projeto

No componente CardPost, agora temos a modal de comentário. O ícone que abre a modal está incorporado nesse componente. Da mesma forma, no componente que exibe um comentário, aparece o ícone de balão para que possamos editar um comentário existente.

Para abrir a modal de comentário, utilizamos o componente ModalComment:

```JSX
<ModalComment />
```

E quando estamos no modo de edição, passamos a prop isEditing:

```JSX
<ModalComment isEditing />
```

Além disso, alteramos um ícone para que sua cor possa ser modificada via prop. Aqui está o componente IconChat que permite essa customização:

```JSX
export const IconChat = ({ fill = '#888888' }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6.01562V4H... " fill={fill} />
        </svg>
    )
}
```

Implementando novos componentes de modal

Introduzimos novos componentes: um componente de modal genérico, um componente de modal específico para comentários, um componente que serve como cabeçalho dessa modal, e um text area para que a pessoa usuária possa digitar o comentário.

Aqui está a implementação do componente Modal:

```JSX
import { forwardRef, useImperativeHandle, useRef } from "react"
import styles from './modal.module.css'

export const Modal = forwardRef(({ children }, ref) => {
    const dialogRef = useRef(null)

    const closeModal = () => {
        dialogRef.current.close()
    }

    const openModal = () => {
        dialogRef.current.showModal()
    }

    useImperativeHandle(ref, () => {
        return {
            closeModal,
            openModal
        }
    })

    return (
        <dialog className={styles.dialog} ref={dialogRef}>
            <header className={styles.header}>
                <button onClick={closeModal}>
                </button>
            </header>
            {children}
        </dialog>
    )
})
```

E o componente ModalComment que utiliza o Modal:

```JSX
import { useRef, useState } from "react"
import { IconButton } from "../IconButton"
import { Modal } from "../Modal"
import { Textarea } from "../Textarea"
import { Subheading } from "../Subheading"
import { IconChat } from "../icons/IconChat"
import { IconArrowForward } from "../icons/IconArrowForward"
import { Spinner } from "../Spinner"
import styles from './comment.modal.module.css'
import { Button } from "../Button"

export const ModalComment = ({ isEditing = false }) => {
    const modalRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const onSubmit = async (formData) => {
        const text = formData.get('text')
        if (!text.trim()) return

        try {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                modalRef.current.closeModal()
            }, 2000)
        } catch (error) {
            console.error('Erro ao criar/atualizar comentário:', error)
        }
    }
}
```

Integração da modal e ajustes nas rotas

Também integramos essa modal na página de blog post, especificamente na linha 55, onde está a modal de comentário. Um último detalhe é sobre as rotas protegidas: nas linhas 21 e 22, essas rotas estavam protegidas, mas agora não estão mais.

Para ilustrar, aqui estão as rotas que agora estão desprotegidas:

```JSX
<Route path='feed' element={<Feed />} />
<Route path='blog-post/:slug' element={<BlogPost />} />
```

Essas foram as alterações realizadas. Se no curso anterior você nos acompanhou do início ao fim, basta fazer esses pequenos ajustes e tudo estará em ordem. Caso deseje baixar o projeto já com essas alterações, disponibilizaremos o link para que você possa baixá-lo e seguir conosco a partir de agora.

Preparando para o próximo passo

Com isso, o front-end está pronto e funcionando. Vamos abrir o terminal para mostrar que ele está executando o npm run dev do vídeo, o que nos permite interagir:

```JSX
npm run dev
```

Nosso próximo passo é avançar para o back-end. Vamos entender o que será necessário em relação à nossa API.

### Aula 1 - Executando o backend com docker - Vídeo 3

Transcrição  
Vamos configurar o back-end. Existem duas maneiras de realizar essa configuração. A primeira é utilizando o Docker. Se já tivermos o Docker instalado, configurado e funcionando em nossa máquina, e o hardware for compatível, podemos usar o Docker para subir o back-end, juntamente com o banco de dados. Caso não tenhamos o Docker ou, por algum motivo, não possamos executá-lo em nossa máquina, no vídeo seguinte será mostrado como levantar o back-end sem a necessidade do Docker.

Primeiramente, vamos ver como subir o back-end com o Docker. Estamos no repositório do projeto. O que faremos agora é cloná-lo. Vamos copiar o link que o próprio GitHub fornece para o clone. No terminal, abriremos uma nova aba, sairemos da pasta em que estamos, dentro do projeto do front-end, e executaremos um git clone do projeto 4870-api-com-docker.git.

> git clone https://github.com/viniciosneves/4870-api-com-docker.git

Após o clone, entraremos no diretório do projeto.

> cd 4870-api-com-docker/

Instalando dependências e configurando variáveis de ambiente

Seguiremos o passo a passo para levantar o back-end. Esse passo a passo está na documentação do próprio projeto. Na documentação, encontramos informações sobre o que o projeto é, o que faz, as tecnologias e ferramentas utilizadas, além dos pré-requisitos, que incluem o Node 18 ou superior, com NPM, Docker com Docker Compose e o próprio Git. Após clonar o repositório, instalamos as dependências com npm i.

> npm i

Enquanto as dependências são instaladas, verificamos que será necessário criar, na raiz do projeto, um arquivo .env com valores específicos. Vamos abrir o VSCode, aumentar o zoom e fechar o Copilot.

> code .

Criamos o arquivo .env na raiz e copiamos e colamos o conteúdo necessário.

```JavaScript
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/code_connect"

# JWT
JWT_SECRET="seu-jwt-secret-super-secreto"
JWT_EXPIRES_IN="7d"

# Server
PORT=3000
```

No arquivo, temos o DATABASE_URL, que é a string de conexão com o banco, o segredo JWT e a porta. Seguimos as instruções e, posteriormente, analisamos o significado desses valores.

Subindo o banco de dados e configurando o Prisma

Em seguida, precisamos subir o banco de dados. Para isso, utilizamos o comando docker-compose up -d.

> docker-compose up -d

No nosso caso, com a versão atualizada, o comando é docker-compose up -d. O -d é para que o terminal não fique travado no processo. Ao executar o comando, ele baixa a imagem do Postgres e realiza as configurações necessárias. Quando o processo termina, o terminal não fica preso, pois o -d significa Detached, ou seja, o processo é executado em segundo plano.

Após a execução do comando, podemos usar o terminal normalmente. No dashboard do Docker, verificamos que um container chamado Postgres está em execução, com o ID e todas as informações corretas. Agora, precisamos configurar o banco de dados, o que será feito executando dois comandos em sequência.

A primeira etapa envolve o uso do comando npx prisma migrate dev para criar as tabelas necessárias.

> npx prisma migrate dev

Em seguida, utilizamos o npx prisma generate, que é responsável por gerar o que o ORM precisa.

> npx prisma generate

Por fim, o npx prisma db seed é utilizado para popular o banco de dados com posts, comentários e usuários, que já estarão disponíveis para visualização.

> npx prisma db seed

Finalizando a configuração e iniciando o projeto

No terminal, após limparmos a tela, executamos o npx prisma migrate dev. O processo é concluído com sucesso, indicando que o banco de dados está agora sincronizado com o nosso schema. Em seguida, executamos o npx prisma generate, que gera tudo o que o Prisma necessita para funcionar em relação ao banco de dados.

Por último, utilizamos o npx prisma db seed para popular os dados com autores, posts, comentários, entre outros. Após limparmos o terminal novamente, o processo é concluído com sucesso, e podemos ver que os autores, posts e comentários foram criados.

Com o banco de dados preparado, podemos iniciar o projeto em modo de desenvolvimento utilizando o comando npm run start:dev.

> npm run start:dev

No terminal, são exibidas todas as rotas disponíveis, incluindo a rota /blog/posts, que contém os posts do nosso blog.

Para acessar, utilizamos o endereço localhost:3000/blog/posts.

> localhost:3000/blog/posts

Ao fazermos uma requisição, os dados dos posts são exibidos, incluindo a capa do post, título, slug, corpo, markdown, quantidade de curtidas, entre outros. Com isso, nosso back-end está em funcionamento.

Considerações finais sobre o projeto

O projeto utiliza o Nest.js, que é o framework responsável por controlar toda a camada de back-end, utilizando TypeScript, Prisma como ORM, Postgres como banco de dados, JWT para autenticação, e Bcrypt para manipulação de senhas. Além disso, o Swagger é utilizado para documentação.

Se houver dúvidas sobre a necessidade de conhecer todos esses detalhes para o curso, a resposta é não. Essas informações são para pesquisa adicional, caso haja interesse em entender como o back-end foi desenvolvido. O essencial é seguir as instruções para levantar o back-end e conseguir realizar o fetch dos dados. Ao acessar localhost:3000/blog/posts, a lista de posts é exibida.

Não é necessário compreender o funcionamento interno, mas é importante saber ler a documentação e colocar o projeto para rodar. Se já estivermos preparados para executar o back-end no Docker, podemos pular para o próximo vídeo, onde será abordado como realizar o mesmo processo sem o Docker. Nos vemos em breve.

### Aula 1 - Executando o backend sem docker - Vídeo 4

Transcrição  
Vamos analisar o que precisamos fazer para levantar o back-end sem utilizar o container Docker. Primeiramente, estamos no repositório chamado 4870-API-100-docker. O primeiro passo é clonar esse projeto. Pegamos o URL direto do Git e, no terminal, já na área de trabalho, executamos o seguinte comando para clonar o repositório:

> git clone https://github.com/viniciosneves/4870-api-sem-docker.git

Em seguida, entramos na pasta do projeto com o comando:

> cd 4870-api-sem-docker/

Instalando dependências e configurando variáveis de ambiente

Vamos seguir as instruções do projeto. No arquivo README, encontramos informações sobre o que o projeto é, o que faz e como foi desenvolvido. Ele foi criado utilizando o framework Nest.js, o Prisma como ORM, o SQLite como banco de dados, autenticação com JWT, Bcrypt para realizar o hash das senhas e TypeScript como superset do JavaScript.

Não precisamos nos preocupar com os detalhes de implementação. O que realmente importa é saber como levantar esse back-end para interagir com ele. Após o git clone, já estamos dentro da pasta do projeto. Agora, vamos instalar as dependências com:

> npm install

Precisamos configurar as variáveis de ambiente, que são duas: JWT_SECRET e DATABASE_URL. Essas variáveis devem estar na raiz do projeto. Para isso, abrimos o VSCode com as pastas do back-end:

> code .

Criando o arquivo de configuração e aplicando migrações

No terminal, após a instalação das dependências, abrimos o VSCode na pasta e aplicamos um pouco de zoom, fechando o Copilot. Criamos o arquivo .env e inserimos as informações solicitadas na documentação:

```JavaScript
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-secret-key-here"
```

Temos o DATABASE_URL, que aponta para um arquivo, e o JWT_SECRET. Em seguida, precisamos realizar duas ações: executar o migrate para aplicar as migrações, o que criará todas as tabelas do banco de dados. No terminal, executamos:

> npx prisma migrate dev

Ele já executou e rodou com sucesso. Está tudo em ordem e sincronizado. O que mais precisamos fazer? Precisamos executar o comando npx prisma db seed. Esse comando é utilizado para popular o back-end com usuários, posts, comentários e outros dados. Caso contrário, o banco de dados estaria pronto, mas não teríamos dados para interagir.

Populando o banco de dados e iniciando o servidor

Vamos ao terminal, limpar e colar o comando:

> npx prisma db seed

Observe que ele vai criando o post, o autor, e assim por diante. No final, ele informa que o seed foi concluído com sucesso. Agora, precisamos iniciar o projeto. Para isso, vamos executar:

> npm run start:dev

Ele está compilando e processando, e vai mapear todas as rotas. Uma delas é um GET em /blog-posts.

Verificando o funcionamento do back-end

Podemos verificar isso no VSCode. Se recarregarmos a página, ele realiza um fetch. Vamos fechar e abrir novamente, pois parece que não houve muita alteração. No endereço http://localhost:3000/blog-posts, ao pressionar "Enter", podemos solicitar um preprint. Nosso back-end já está funcionando. Basta seguir as orientações da documentação. Ela fornece informações detalhadas sobre o projeto, explicando seu funcionamento e outros aspectos. Já vimos um pouco disso. Se desejarmos entender como ele foi feito, podemos nos guiar por lá. Para o curso, não precisamos desse conhecimento aprofundado de back-end. A única coisa que precisamos saber é como iniciar o projeto. Se conseguimos realizar um GET em /blog-posts, estamos aptos a continuar o curso.

Preparando para integrar o front-end

O que faremos agora? Em vez de solicitar ao navegador que obtenha esses posts, vamos pedir ao React para buscar esses posts da API. Temos bastante trabalho pela frente. No entanto, bem começado é meio caminho andado. O front-end está atualizado, o back-end está rodando, e agora é hora de adicionar novas funcionalidades.

### Aula 1 - Obtendo a lista de posts - Vídeo 5

Transcrição  
Já verificamos que nosso back-end está funcionando e o front-end está atualizado. Conseguimos visualizar no navegador a obtenção dos dados do post. Quando acessamos a URL localhost:3000/blog-posts, conseguimos ver a resposta em formato JSON. O que precisamos fazer agora é, no nosso feed, obter esses dados da API em vez de pegá-los dos dados locais.

Vamos abrir nosso front-end. Aqui está o back-end, e aqui está o front-end, CodeConnect. Precisamos acessar nossa página feed/index.jsx. Atualmente, estamos importando os posts a partir de um arquivo .js, mas não queremos mais fazer isso. Vamos deletar essa importação.

Configurando o estado local para os posts

A primeira coisa a fazer é iniciar um estado local com esses posts. Vamos usar posts e setPosts e chamar o useState. Verifique se o Code já importou isso para nós. Se fizermos isso agora, o console indicará um erro, pois estamos tentando fazer um .map em um valor undefined. Vamos iniciar como um array vazio. Agora, não há nada para exibir e nenhum erro no console.

Para começar, vamos definir o estado local para armazenar os posts:

```JSX
import { useState } from "react"
import { CardPost } from "../../components/CardPost"

export const Feed = () => {
  const [posts, setPosts] = useState([])
  return (
    <main className={styles.grid}>
      {posts.map(post => <CardPost key={post.slug} post={post} />)}
    </main>
  )
}
```

Utilizando o useEffect para buscar dados da API

No React, quando queremos executar algo ao montar o componente, usamos um hook chamado useEffect. Para garantir que o código só será executado quando o componente for montado, passamos um array vazio de dependências. Queremos pegar os dados e fazer um get para obter a lista de blog posts. Vamos copiar a URL para evitar digitar novamente e fazer um fetch.

Primeiro, vamos importar o useEffect e configurá-lo para executar uma função ao montar o componente:

```JSX
import { useEffect, useState } from "react"

useEffect(() => {

}, [])
```

Agora, vamos adicionar a chamada fetch dentro do useEffect para buscar os dados da API:

```JSX
useEffect(() => {
  fetch('http://localhost:3000/blog-posts')
}, [])
```

Lidando com o StrictMode e transformando a resposta em JSON

Agora, precisamos ler essa resposta no código. Antes disso, uma dica: mencionamos que o código só é executado quando o componente é montado. No VS Code, ao colocar um array vazio, deveríamos chamar uma vez só. No entanto, ao verificar o código, ele está chamando duas vezes. Isso ocorre porque, na raiz do projeto, no main.js, temos o app-router e, envolvendo o app-router, há um componente chamado StrictMode.

O componente StrictMode existe apenas em tempo de desenvolvimento e foi criado para detectar problemas nesse período. Ou seja, ele nos ajuda a identificar erros que podemos cometer, intencionalmente ou não, fornecendo mensagens mais detalhadas no console para entendermos o que está acontecendo. Quando enviamos o código para produção, o StrictMode não está mais presente, então podemos comentá-lo. Em produção, não há StrictMode.

Atualizando o estado com os dados da API

O StrictMode é extremamente útil durante o desenvolvimento, pois nos auxilia de várias maneiras. No entanto, ele não é gratuito. Para funcionar, o StrictMode realiza uma renderização adicional para garantir e testar o que é necessário. Se desativarmos o StrictMode e verificarmos no console do Chrome, notaremos que ele faz uma chamada apenas uma vez. O componente realiza a operação uma única vez, mas o StrictMode duplica essa operação para garantir que o componente está funcionando corretamente. Isso ocorre apenas durante o desenvolvimento. Quando enviamos para produção, não enfrentamos esse problema.

Agora, precisamos pegar a resposta e transformá-la em um JSON que possamos ler. Isso é uma promessa. Sendo uma promessa, podemos usar o método .then. Quando utilizamos fetch, podemos pegar a resposta, chamada de response, e transformá-la em JSON com response.json. Aqui, estamos utilizando uma linha só, que é uma abreviação da arrow function, equivalente a return response.json. Podemos simplificar em uma linha sem chaves e sem return, mas o resultado será o mesmo.

Vamos adicionar o tratamento da resposta do fetch para transformá-la em JSON e atualizar o estado dos posts:

```JSX
useEffect(() => {
  fetch('http://localhost:3000/blog-posts')
    .then(response => response.json())
    .then(data => setPosts(data))
}, [])
```

Verificando a atualização dos dados no front-end

Depois que a resposta é recebida e o fetch a transforma em JSON, podemos usar mais um .then para obter os dados, que chamaremos de data, e então fazer um setPosts com os dados recebidos do back-end. O que fizemos foi um fetch. O fetch é uma promessa e não garante se dará certo ou quando terminará. Portanto, é uma promessa. Dizemos: "Beleza, quando tudo estiver certo, pegue essa resposta e transforme em JSON." No final, pegamos esse JSON transformado e fazemos um setPosts no estado local do React.

No bloco de código das linhas 8 até 14, o useEffect é React, o fetch é Node, é JavaScript puro. O .then também é JavaScript, estamos lidando com promessas. No final, quando todas as promessas são concluídas, temos acesso aos dados e podemos fazer um setPosts. Isso é o que o código promete fazer, e vamos verificar se ele cumpre.

Vamos agora ao Google Chrome, recarregar a página, e lá está, ele obteve os dados e a lista de posts. A ordem pode variar, mas são essencialmente os mesmos posts que temos no data.js. O que muda é a quantidade de curtidas e comentários, que são gerados aleatoriamente. Se o back-end está rodando e fizemos todas as alterações no front-end, agora conseguimos ver os dados vindo da API. Devemos ficar atentos à aba de Network para monitorar essas chamadas e requisições.

Estamos conectados ao back-end. Vamos agora relembrar o protocolo HTTP e o que podemos fazer com ele. Em seguida, continuaremos evoluindo o CodeConnect. Vamos lá!

### Aula 1 - Entendendo as requisições HTTP - Vídeo 6

Transcrição  
Vamos discutir sobre requisições HTTP antes de continuarmos escrevendo código. O que é o HTTP, afinal? Trata-se de um protocolo universal da web, no qual o cliente faz um pedido e o servidor responde. No contexto do front-end, ele é a base das requisições AJAX, que o navegador realiza para o servidor e recebe de volta. Essencialmente, estamos lidando com um modelo de requisição e resposta.

Por exemplo, ao executarmos um GET em localhost:3000/blog-posts, o servidor processa e responde com um JSON contendo todos os posts disponíveis. Esse é o fundamento do que estamos fazendo: solicitar algo, fazer uma requisição e receber uma resposta. Essa resposta pode ser de sucesso, erro, timeout, ou até mesmo uma mensagem de erro diferente se a API não estiver funcionando. Tudo isso é baseado no modelo de requisição e resposta.

Explorando a estrutura das requisições HTTP

Qual é a estrutura de uma requisição? Temos uma URL para onde a requisição será enviada, um método que define o que queremos fazer (buscar, enviar, deletar ou atualizar dados), e informações adicionais no cabeçalho da requisição. Mesmo quando não especificamos, o navegador adiciona informações como identificação do navegador e origem. Além disso, podemos enviar informações no corpo da requisição, que é o body.

Quando falamos de métodos, referimo-nos aos verbos HTTP. Os principais que utilizamos no dia a dia como pessoas desenvolvedoras são: GET para buscar dados, POST para enviar dados, PUT para atualizar, e DELETE para apagar. Esses são os verbos que encontramos frequentemente em nosso trabalho.

Analisando a comunicação com APIs e status codes

Durante o desenvolvimento de uma comunicação ou integração com uma API HTTP, a escolha do verbo a ser utilizado em um endpoint pode variar de acordo com a API, e a documentação geralmente nos orienta sobre qual verbo usar. Ao analisar a resposta de uma API, devemos observar o status code. A família de códigos 200 indica que tudo ocorreu corretamente, a família 400 aponta para algum erro conhecido, e a família 500 sugere que algo deu errado e nem o back-end sabe o que aconteceu.

Na resposta, também devemos considerar o cabeçalho e o corpo da requisição. Por exemplo, quando pegamos nosso array com a lista de posts, ele estava no corpo da resposta. Ao observar a estrutura do fetch, encontramos elementos semelhantes. Realizamos um fetch em uma URL, especificamos o método (como POST), e definimos os cabeçalhos. Se estamos enviando um JSON, o tipo de conteúdo é application/json, indicando que estamos enviando um JSON.

Realizando uma requisição POST com fetch

Agora, vamos ver um exemplo prático de como realizar uma requisição POST utilizando fetch. Suponha que queremos fazer login em um sistema. Para isso, precisamos enviar um e-mail e uma senha para a API. Veja como podemos estruturar essa requisição:

```JSX
fetch("https://api.exemplo.com/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: "usuario@email.com",
        password: "123456"
    })
})
```

No corpo da requisição, utilizamos JSON.stringify, pois o corpo da requisição não entende objetos JavaScript, apenas strings. Assim, transformamos o objeto em uma string JSON e o enviamos.

Processando a resposta e lidando com erros

Em seguida, utilizamos .then para obter a resposta e transformá-la em JSON, e outro .then para processar os dados já como JSON:

```JSX
.then(response => response.json()) // transforma em JSON
.then(data => {
    console.log("Login realizado!", data)
})
```

Caso ocorra um erro, utilizamos .catch para capturá-lo e informar que algo deu errado:

```JSX
.catch(error => {
    console.error("Erro no login:", error)
})
```

Essa é a estrutura essencial do fetch.

Continuando o desenvolvimento com foco no back-end

Agora, vamos continuar codificando, pois há muitas integrações a serem feitas com o back-end, como curtir um post, comentar, editar ou deletar um comentário. Precisamos entender todos os mecanismos envolvidos nesse ecossistema, conhecido como CRUD, que significa criar, ler, atualizar e deletar dados.

Temos bastante trabalho pela frente, mas a base está sólida. Como sempre dizemos, "bem começado é metade feito". Vamos evoluir as funcionalidades do CodeConnect, focando sempre no nosso back-end, que será a fonte de verdade sobre os dados do CodeConnect.

### Aula 1 - Para saber mais: react strict mode no desenvolvimento

O React StrictMode é uma ferramenta auxiliar destinada apenas ao ambiente de desenvolvimento. Ele não afeta a versão de produção, mas é essencial para identificar problemas potenciais na aplicação. Essa ferramenta cria cenários onde certos comportamentos problemáticos, como efeitos colaterais inesperados, possam ser replicados e analisados com mais cuidado.

Funcionamento em ambiente de desenvolvimento

Durante o desenvolvimento, o StrictMode pode renderizar componentes mais de uma vez. Essa renderização duplicada serve para detectar dependências ou efeitos indesejados, obrigando a equipe a cuidar para que os side effects sejam corretamente tratados. Por exemplo, um componente que usa o hook useEffect pode ser executado duas vezes para testar a idempotência do efeito colateral, garantindo que nenhuma operação indesejada ocorra na montagem.

A ideia principal é que o código deve ser preparado para lidar com essas renderizações adicionais sem causar problemas, como chamadas duplicadas a APIs ou alterações inesperadas no estado da aplicação.

Benefícios e Considerações

A utilização do StrictMode contribui para a criação de aplicações mais robustas e resilientes. Entre os principais benefícios, podemos destacar:

- Detecção precoce de problemas, o que permite a correção antes da aplicação chegar à produção.
- Melhoria na organização dos efeitos colaterais, pois obriga a equipe a pensar em como e quando os hooks serão executados.
- Incentivo à pureza dos componentes, evitando condições onde múltiplas execuções causem efeitos adversos.
- No entanto, é importante ter atenção para não confundir esse comportamento com um erro no código, uma vez que a duplicação de renderizações acontece intencionalmente apenas em ambiente de desenvolvimento.

Exemplo Prático

Imagine um componente simples que busca dados a partir de uma API ao montar:

```JSX
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://api.exemplo.com/dados')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Carregando...'}
    </div>
  );
}
export default ExampleComponent;
```

Nesse exemplo, o StrictMode pode executar o efeito duas vezes para garantir que o método que busca os dados não desencadeie alterações indesejadas. Em produção, essa verificação extra não ocorrerá, garantindo uma execução mais suave e performática.

O uso consciente do React StrictMode é uma prática recomendada para melhorar a qualidade do código e antecipar problemas antes mesmo que eles impactem a experiência final dos usuários.

### Aula 1 - Para saber mais: o que precisamos saber sobre o backend?

À medida que vamos evoluindo na área de desenvolvimento, é comum começarmos focados em uma parte específica da stack — geralmente o frontend. Afinal, é ali que vemos o resultado mais direto do nosso trabalho: a interface, os botões funcionando, os dados aparecendo na tela.

Mas com o tempo, e principalmente ao participar de projetos reais, a gente começa a perceber que entender pelo menos um pouco do que acontece "do outro lado" — no backend — faz toda a diferença. Isso ajuda a:

- Debugar problemas mais rápido;
- Conversar melhor com o time;
- Fazer integrações com mais segurança;
- Ter mais autonomia e confiança.

Neste texto, vamos te apresentar alguns conceitos fundamentais para entender o funcionamento do backend da aplicação que estamos usando. Nada muito técnico nem aprofundado — a ideia aqui é desmistificar os termos e deixar um material pra você consultar sempre que precisar.

O que é uma API REST?

API vem de Application Programming Interface, que nada mais é do que uma forma padronizada de um sistema expor funcionalidades e dados para outros sistemas consumirem. No nosso caso, o frontend consome dados da API.

REST é um estilo de arquitetura que define convenções para criar APIs baseadas em HTTP. Por exemplo:

- GET /posts: buscar posts
- POST /posts: criar um novo post
- PUT /posts/123: atualizar o post com ID 123
- DELETE /posts/123: deletar o post com ID 123

Essas operações se baseiam nos verbos HTTP e facilitam bastante a vida de quem está consumindo a API.

Docker

Docker é uma tecnologia que nos permite empacotar uma aplicação e todas as suas dependências dentro de um contêiner. Isso garante que o app vai funcionar da mesma forma na sua máquina, na do colega, no servidor, etc.

No nosso curso, oferecemos duas opções de backend:

- Com Docker (ideal pra quem quer praticar esse tipo de ambiente)
- Sem Docker (pra quem quer algo mais direto e simples)

Se você nunca usou Docker, não se preocupe. Vamos mostrar o passo a passo nos vídeos. E aqui vai um resumo: ao usar Docker, você geralmente roda comandos como docker compose up para levantar tudo de forma automática.

Node.js

O backend que usamos no projeto é feito com Node.js, que é um ambiente que permite rodar JavaScript fora do navegador. Ele é muito usado para criar servidores, APIs e até ferramentas de linha de comando.

É como se fosse o "motor" por trás da nossa API: recebe as requisições do frontend, processa e responde com os dados certos.

Swagger

Swagger é uma ferramenta que gera uma documentação interativa para a API. Com ele, conseguimos ver todos os endpoints disponíveis, os parâmetros aceitos, os formatos de resposta e até testar as requisições diretamente pelo navegador.

É ótimo pra explorar a API sem precisar montar tudo no frontend primeiro.

ORM

ORM significa Object-Relational Mapping. É uma forma de interagir com o banco de dados usando objetos JavaScript (ou da linguagem que você estiver usando), em vez de escrever SQL diretamente.

No nosso caso, usamos um ORM para:

- Criar tabelas;
- Buscar registros;
- Atualizar e deletar dados.

Tudo isso com métodos que parecem código comum, como db.posts.findMany().

Migrations

Migrations são scripts que nos ajudam a controlar as mudanças no banco de dados ao longo do tempo. Toda vez que uma tabela é criada, modificada ou excluída, uma nova migration é gerada.

Isso garante que todo mundo do time tenha o mesmo banco de dados, com a mesma estrutura, sem precisar fazer tudo manualmente.

Seed

Seeds são scripts que populam o banco de dados com dados iniciais. É útil para testes, desenvolvimento ou quando você quer que o sistema já venha com algumas informações pré-cadastradas.  
Por exemplo, podemos usar um seed para criar usuários falsos, posts iniciais e categorias, sem precisar cadastrar tudo na mão.

Com esse conteúdo, você já tem uma boa base pra entender o que está acontecendo por trás das requisições que o frontend faz. Se algum termo te parecer confuso durante o curso, volta aqui — essa explicação vai estar sempre disponível pra consulta.

Bora continuar?

### Aula 1 - Atualização dinâmica de playlists na Playcatch

A Playcatch, uma plataforma de streaming de música, similar ao Spotify, está implementando uma nova funcionalidade que permite às pessoas usuárias verem playlists atualizadas em tempo real. A equipe de desenvolvimento está utilizando React para gerenciar o estado das playlists e precisa garantir que as atualizações sejam refletidas imediatamente na interface do usuário. No entanto, durante os testes, foi observado que as atualizações não estão sendo exibidas corretamente, e o console está mostrando erros relacionados a estados indefinidos.

Como a equipe pode resolver o problema de estados indefinidos e garantir que as playlists sejam atualizadas corretamente na interface do usuário?

Resposta:  
Inicializar o estado das playlists como um array vazio ao usar o hook useState e garantir que o array de dependências do hook useEffect esteja configurado corretamente.

> Correta, pois inicializar o estado como um array vazio evita erros ao acessar propriedades de um estado indefinido, e configurar corretamente o array de dependências do useEffect assegura que as atualizações ocorram apenas quando necessário.

### Aula 1 - O que aprendemos?

Nesta aula, aprendemos:

- A modificar a camada de comunicação com a API para acesso sem autenticação.
- A implementar e atualizar componentes React para interação e customização visual.
- A configurar o ambiente de back-end com Docker e o uso do docker-compose.
- A executar migrações e seeds de dados com Prisma.
- A iniciar e interagir com o servidor de back-end utilizando Nest.js.
- O uso de useEffect e useState no React para requisições HTTP e manipulação de estado.
- A estrutura e manipulação de requisições e respostas HTTP.
- O conceito de CRUD para manipulação de dados em aplicações web.

## Aula 2 - Enviando dados com POST

### Aula 2 - Projeto da aula anterior

Você pode ir acompanhando o passo a passo do desenvolvimento do nosso projeto e, caso deseje, você pode [acessar o projeto da aula anterior](https://github.com/alura-cursos/4870--code-connect/tree/aula-1)..

### Aula 2 - Entendendo o Swagger e Postman - Vídeo 1

Transcrição  
Vamos discutir um pouco sobre ferramentas que utilizamos no dia a dia ao nos comunicarmos com um back-end. Uma das ferramentas que queremos apresentar é o Swagger. O que é o Swagger? Vamos acessar o Chrome e, para acessar o Swagger do nosso back-end, vamos utilizar o endereço localhost:3000/api. Ao fazer isso, ele exibirá o Swagger.

```JSX
localhost:3000/api
```

Quando o Swagger carregar, ele mostrará todos os endpoints possíveis e disponíveis deste back-end específico. Observe que ele possui a camada de autenticação, onde podemos registrar um novo usuário, fazer login, obter os dados do usuário logado e fazer logout. Ele também possui a parte dos posts, como criar um novo post no blog, obter todos os posts, obter um post por ID e por slug, que é o que faremos em breve.

Explorando funcionalidades do Swagger

Além disso, há a parte de comentários, onde podemos criar, obter, atualizar e deletar comentários. Tudo está bem descrito. Além de descrever quais são os endpoints disponíveis, ele também mostra qual é o esquema, ou seja, o que precisamos enviar. Por exemplo, ao expandir a seção de registro, ele traz um exemplo do que devemos enviar e o que pode acontecer.

```JSX
RegisterDto {
  email*: string,
  password*: string,
  name*: string
}
```

Quando o usuário é cadastrado com sucesso, o código de resposta é 201. Pode ocorrer um erro 400 se alguém tentar cadastrar um e-mail já em uso, ou seja, cadastrar o mesmo e-mail duas vezes, ou se houver algum dado inválido ou em formato diferente do esperado, ou uma senha que não cumpre todos os requisitos, entre outros.

Apresentando o Postman como ferramenta de teste

Outra ferramenta que queremos apresentar é o Postman. Por que queremos mostrar o Postman? Quando terminamos de configurar o back-end, acessamos o navegador e utilizamos o endereço localhost:3000/blog-posts. No entanto, o navegador só consegue fazer requisições do tipo GET. Vamos copiar essa URL e colá-la no Postman.

```html
http://localhost:3000/blog-posts
```

Ao fazer isso, podemos clicar em enviar e ele trará, na parte inferior, todo o corpo da resposta com todos os posts.

Utilizando o Postman para requisições avançadas

Além disso, o Postman nos ajuda a trabalhar com a parte de autorização, adicionar cabeçalhos e incluir informações no corpo da requisição. Por exemplo, se quisermos testar o cadastro de um usuário, podemos fazer isso facilmente.

Podemos realizar algumas ações aqui, como, por exemplo, mudar o método para POST e alterar a URL para localhost:3000/auth/register.

```html
http://localhost:3000/auth/register
```

No Swagger, podemos acessar auth/register e pegar um exemplo de código. Para adicionar um JSON no corpo da requisição, vamos em body raw (dado cru) e mudamos de texto para JSON. Em seguida, colamos o conteúdo.

```JSX
{
  "email": "user@example.com",
  "password": "123456",
  "name": "João Silva"
}
```

Testando a criação de usuários com o Postman

Podemos tentar criar um usuário, como João Silva, clicando em enviar. Observamos que recebemos um status 201, indicando que o usuário foi criado. O retorno inclui o token de acesso e os dados do usuário, como id, email, nome, data de criação e atualização. Não há username nem avatar.

```JSX
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJzdWIiOiJjbmV6MWFrMDAwMDB2eXZyeWs4aG0vajNuIiwiaWF0IjoxNzI1MDk2MjAzLCJleHAiOjE3MjUxODI2MDN9.SfsnxdVL_ggFn5n9xWnBmbnuparUPdYt45hEjUA-",
    "user": {
        "id": "cnez1ak00000vyvrykyk8hj3n",
        "email": "user@example.com",
        "name": "João Silva",
        "username": null,
        "avatar": null,
        "createdAt": "2025-08-31T11:24:23.200Z",
        "updatedAt": "2025-08-31T11:24:23.200Z"
    }
}
```

Comparando Swagger e Postman

O Postman é uma ferramenta útil para testar, debugar e entender como a API funciona sem depender do front-end. Às vezes, queremos testar algo específico, e o Postman é uma das melhores ferramentas para isso.

Para saber o que a API faz, utilizamos o Swagger. Podemos acessá-lo em localhost:3000/api, onde ele apresenta todos os métodos disponíveis. Cada método mostra o verbo HTTP, a URL e o que precisamos enviar. Por exemplo, para fazer login, enviamos apenas o email e a senha.

```JSX
{
  "email": "user@example.com",
  "password": "123456"
}
```

Considerações finais sobre ferramentas e integração

O Swagger é a fonte de documentação, enquanto o Postman é uma ferramenta para fazer requisições. Deixamos um material para saber mais sobre o Postman e outras ferramentas. Algumas empresas não permitem o uso do Postman por motivos específicos, mas existem alternativas.

As ferramentas estão prontas: o Postman e o Swagger estão disponíveis em localhost:3000/api. Um detalhe importante é que, se estivermos usando o Chrome e aumentarmos o zoom em localhost:3000, isso também afetará localhost:5173, podendo parecer um bug, mas não é.

Integrando front-end e back-end no CodeConnect

Com as ferramentas em dia, vamos avançar no CodeConnect. A primeira tarefa no VS Code, na página de blog post, é parar de pegar o post do array de dados fixo e buscar do back-end. Faremos isso na sequência.

Para buscar os posts do back-end, podemos usar o seguinte código no React:

```JSX
useEffect(() => {
    fetch('http://localhost:3000/blog-posts')
        .then(response => {
            return response.json()
        })
        .then(data => setPosts(data))
}, [])
```

Esse código utiliza o fetch para buscar os dados dos posts e atualiza o estado com os dados recebidos. Em seguida, podemos encontrar um post específico pelo slug:

```JSX
const post = posts.find(p => p.slug === slug)
```

Com isso, conseguimos integrar o front-end com o back-end, utilizando as ferramentas e métodos discutidos.

### Aula 2 - Para saber mais: postman, insomnia e bruno

Quando a gente começa a se aventurar no mundo do desenvolvimento web, principalmente mexendo com frontend, é comum só pensar no navegador como nosso meio de ver o resultado. Mas, quando entra a tal da API no caminho... aí o jogo muda um pouquinho.

Como é que a gente testa uma requisição? Como saber se o backend está funcionando antes de integrar tudo? É aí que entram ferramentas como o Postman.

Pra que servem essas ferramentas?

Postman, Insomnia, Bruno e outras do tipo são como "clientes de API": elas simulam o que o navegador ou o app fariam, mas com muito mais controle.

Você consegue:

- Fazer requisições HTTP como GET, POST, PUT, DELETE
- Adicionar cabeçalhos (headers), tokens de autenticação, corpo da requisição (body)
- Ver a resposta completa: status, tempo, corpo de resposta e headers
- Organizar suas requisições em coleções
- Compartilhar essas coleções com outras pessoas do time

Ou seja, são ferramentas que ajudam muito a testar, entender e documentar APIs.

E o Postman?

![alt text](image.png)

O Postman é provavelmente a ferramenta mais conhecida e usada nesse universo. Ele tem uma interface gráfica bem amigável e muitos recursos úteis pra quem está aprendendo:

- Você digita a URL da requisição, escolhe o método (GET, POST, etc) e clica em enviar.
- Pode salvar seus testes, repetir, editar...
- Ajuda a ver se a API está mesmo respondendo como deveria, antes de você escrever uma linha de código no frontend.

Durante o curso, a gente vai usar o Postman pra explorar a API que criamos. Mas o mais importante aqui é entender o conceito por trás dele.

Outras opções: Insomnia e Bruno

Existem outras ferramentas que fazem a mesma coisa, e cada pessoa acaba escolhendo a que mais curte:

Insomnia

![alt text](image-1.png)

- Interface simples, rápida e bonita;
- Foco em desempenho e produtividade;
- Também permite organizar e sincronizar coleções.

Bruno

![alt text](image-2.png)

- 100% open source;
- Armazena as requisições como arquivos no projeto (ótimo pra versionar junto com o código);
- Leve e funcional, mesmo sem conexão com a internet.

Mas qual usar?

Sinceramente? Use a que for mais confortável pra você.

Aqui a gente usa o Postman porque ele é popular, tem bastante material de apoio e é fácil de usar — especialmente pra quem tá no primeiro contato com o backend.

Depois que você pegar o jeito, vale testar o Insomnia e o Bruno também. O importante é entender que essas ferramentas são suas aliadas no dia a dia do desenvolvimento.

Se amanhã você precisar testar uma API que nunca viu na vida, não precisa montar todo um app React só pra isso. Abre uma dessas ferramentas, faz os testes, entende a resposta... e aí sim parte pro código.

Mais uma habilidade na sua mochila de dev. Bora continuar?

### Aula 2 - Obtendo um post pelo slug - Vídeo 2

Transcrição  
Vamos adicionar a funcionalidade necessária: o feed. Ao recarregar a página, já estamos obtendo os dados do blog post. Quando acessamos os detalhes, ainda funciona, mas apenas porque nossa API retorna os mesmos posts que temos no data.js. Isso ainda funciona, mas não da maneira que precisamos. Se deletarmos o data.js e recarregarmos a página, ocorrerá um erro.

No console, ele indica que está tentando acessar o data.js, que não existe mais, resultando em erro. Vamos então ajustar nosso blog post. Vamos deletar o import do post que estava na linha 3. Em vez disso, queremos buscar os dados diretamente na API.

Configurando o componente BlogPost

Para começar, vamos configurar nosso componente BlogPost e importar os módulos necessários:

```JSX
import styles from './blogpost.module.css'
import { ThumbsUpButton } from "../../components/CardPost/ThumbsUpButton"
import { Author } from "../../components/Author"
import { Typography } from "../../components/Typography"
import { CommentList } from "../../components/CommentList"
import ReactMarkdown from "react-markdown"
import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { ModalComment } from "../../components/ModalComment"

export const BlogPost = () => {
```

Antes de acessar a API, vamos utilizar o Postman para demonstrar como interagir com um back-end novo ou desconhecido. Já temos um GET que obtém toda a lista de posts. Agora, queremos buscar um post por slug. Observando o primeiro slug com o id24, "Construindo SPA com Vue.js", vamos ver como fazer isso no Postman antes de implementar no código.

Testando a API com Postman e Swagger

No Swagger, na seção de blog post, encontramos o item para buscar post por slug. A URL é /blog-post/slug/{slug}, onde o segmento entre chaves é dinâmico, enquanto o restante é fixo. Vamos garantir que isso funcione, pois, caso contrário, enfrentaremos um erro na API. Primeiro, testamos a API isoladamente do React, em localhost:3000/blog-post/slug/. No histórico, já fizemos essa requisição antes. Ao fazer o GET no "Construindo SPA com Vue.js", funciona e retorna o post. Se tentarmos com um slug inválido, como adicionando "JS" no final, recebemos um erro 404, indicando que o post não foi encontrado.

Precisamos considerar esses dois cenários: sucesso ao encontrar o post ou erro 404, que requer um redirecionamento. Agora, vamos ao nosso código. Essencialmente, faremos o mesmo que no feed. Vamos copiar o fetch e colocá-lo no useEffect. Antes, o useEffect estava no post, mas agora faremos um fetch e precisaremos de um setPost. Será um único post, então removeremos a rede de dependência desnecessária e criaremos nosso estado local com o post, utilizando post e setPost com useState.

Implementando o estado e funções de navegação

Primeiro, vamos definir o estado e as funções de navegação:

```JSX
export const BlogPost = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const [post, setPost] = useState(null)
```

Começamos com um estado vazio e, em seguida, realizamos o fetch. O que precisamos fazer agora? Precisamos realizar um fetch na URL /slug/. Para isso, devemos concatenar a URL. Para concatenar, substituímos as aspas simples por crases, permitindo a interpolação com o uso do sinal de dólar entre chaves e a variável slug. Assim, ele nos solicitará que coloquemos o slug de volta no array de dependências.

Implementando o useEffect para buscar o post

Vamos implementar o useEffect para buscar o post:

```JSX
    useEffect(() => {
        fetch(`http://localhost:3000/blog-posts/slug/${slug}`)
            .then(response => {
                if (response.status === 404) {
                    navigate('/not-found')
                }
                return response.json()
            })
            .then(data => setPost(data))
    }, [slug, navigate])
```

Se esse código funcionar corretamente, no caso de sucesso, ele renderizará o post para nós. Vamos verificar? Voltamos ao Chrome e ao CodeConnect, recarregamos a página e o fetch foi realizado. Vamos conferir? No network, fechamos o console e lá está, ele fez um GET no array de posts. Está funcionando como deveria.

Lidando com erros e redirecionamento

Se tentarmos acessar um post que não existe, por exemplo, ao inserir "VueJS" com várias letras "s" no final, ele retornará um erro 404. No entanto, estamos recebendo um erro no console, um erro não tratado, pois ele está tentando ler a propriedade length de undefined. Por que isso está acontecendo?

Voltando ao código, ele está tentando acessar o tamanho do array de comentários, mas o nosso data não possui nada, não há um post no corpo da requisição. O que precisamos fazer? Precisamos verificar se a nossa requisição falhou com um erro 404 e, nesse caso, redirecionar para a página "not found" que já utilizávamos antes.

Corrigindo o tratamento de erros

Como sabemos se a requisição falhou com 404? No Postman, podemos ver que o status é 404. Dentro da resposta do primeiro fetch, no método .then, conseguimos acessar a resposta. Vamos corrigir o erro de digitação de "response" e verificar o status. Se o response.status for 404, realizamos um navigate para "not-found". Precisamos também adicionar o navigate ao nosso array de dependências.

Portanto, se o status da resposta for 404, redirecionamos para "not-found", pois esse post não existe. Salvamos e verificamos novamente no Chrome. Recarregamos a página e ele já está em "not-found". Vamos testar novamente: no feed, clicamos no primeiro post, que é o SPA com Vue, adicionamos várias letras "s" no final e pressionamos "Enter". Agora, o console exibe o log, e quando o fetch dá erro, ele já registra esse erro no console, independentemente do que estamos fazendo. Na aba de network, o erro 404 está lá, mas agora está tratado, e realizamos o redirecionamento dentro do React.

Concluindo a implementação do fetch

Conseguimos, assim, realizar um fetch passando um segmento dinâmico, que é o slug. Ainda estamos lidando com a URL, sem passar o slug no corpo da requisição, e já começamos a verificar o status da resposta. Se for 404, realizamos o redirecionamento. Está funcionando corretamente.

Agora, vamos implementar a funcionalidade de curtidas, enviando likes para os posts que acharmos interessantes. Isso será feito no próximo vídeo. Até lá!

### Aula 2 - Curtindo um post - Vídeo 3

Transcrição  
Vamos implementar a funcionalidade de curtida de post. Primeiro, vamos limpar o console e recarregar a página para remover os erros 404 que encontramos no último vídeo. Nosso objetivo é clicar no botão de curtir e aumentar o número de curtidas.

Vamos ao código e encontrar onde precisamos fazer as alterações, começando pelo cardPost. No cardPost, temos um ThumbsUpButton e queremos que, ao clicar nele, a curtida seja enviada. Para isso, vamos pegar as props restantes e passá-las para capturar o evento de clique no botão.

Definindo o componente ThumbsUpButton

Primeiro, vamos definir o componente ThumbsUpButton que receberá as propriedades necessárias:

```JSX
export const ThumbsUpButton = ({ loading, ...props }) => {
  return (
    <IconButton disabled={loading} {...props}>
      {loading ? <Spinner /> : <IconThumbsUp />}
    </IconButton>
  );
};
```

Agora, vamos criar uma constante chamada handleLikeButton, que será uma arrow function. Faremos um console.log para verificar se o onClick está funcionando.

```JSX
const handleLikeButton = () => {
  console.log('incrementar like');
};
```

No ThumbsUpButton, vamos adicionar o onClick chamando o handleLikeButton.

```JSX
<ThumbsUpButton loading={false} onClick={handleLikeButton} />
```

Após recarregar a página e alterar para a aba do console, ao clicar, veremos que o incremento da curtida está funcionando.

Criando estado local para curtidas
Estamos recebendo um post como prop, mas a propriedade post.likes é imutável. Portanto, não podemos simplesmente incrementar o valor diretamente. Vamos criar um estado local chamado likes e setLikes usando useState, com o valor inicial sendo post.likes.

```JSX
import { useState } from 'react';

const [likes, setLikes] = useState(post.likes);
```

Assim, exibiremos likes diretamente do nosso estado, permitindo a atualização.

```JSX
<p>{likes}</p>
```

Quando alguém clicar no botão de curtida, faremos um setLikes, olhando para o estado anterior e retornando o estado anterior mais um. Isso garantirá que o número de curtidas seja incrementado dinamicamente.

```JSX
setLikes(oldState => oldState + 1);
```

Vamos testar: ao clicar, o número de curtidas aumenta, mas ao recarregar a página, ele volta ao valor original, pois a atualização está apenas localmente.

Enviando curtida para o back-end

Precisamos enviar essa curtida para o back-end. Para isso, faremos um fetch enviando a curtida. Podemos usar a estrutura de fetch que já conhecemos. No Swagger, verificamos que a estrutura da URL para o like é um POST para /blog-posts/{id}/like, onde o id é dinâmico.

No código, substituímos slug por post.id e removemos o if desnecessário. Não precisamos da resposta em JSON, mas precisamos saber se a requisição foi bem-sucedida. No caso do fetch, verificamos isso com response.ok. Se tudo estiver certo, incrementamos os likes.

Portanto, no handleLikeButton, faremos um fetch e, ao resolver a promessa, verificaremos se a resposta está ok. Se estiver, incrementaremos o estado local para atualizar a quantidade de curtidas.

```JSX
const handleLikeButton = () => {
  fetch(`http://localhost:3000/blog-posts/${post.id}/like`, {
    method: 'POST'
  })
    .then(response => {
      if (response.ok) {
        setLikes(oldState => oldState + 1);
      }
    });
};
```

Testando e corrigindo erros de requisição

Vamos testar o funcionamento do nosso sistema. Primeiro, vamos ao navegador e ao nosso CodeConnect. Vamos recarregar a página e observar a parte de network para ver a requisição sendo feita. Após limparmos, clicamos em "curtir" e recebemos um erro 404 not found, indicando que não conseguimos acessar a URL solicitada. Isso ocorre porque a URL não é um GET. Conforme vimos no Swagger, ela é um POST. Portanto, precisamos configurar nossa requisição como um POST.

Para fazer isso usando o Swagger, passamos um segundo parâmetro, que é um objeto vazio. Nesse segundo parâmetro, podemos definir várias opções, como body, cache, credentials, headers, entre outras. O que queremos mudar é o método. O método desejado é POST. O segundo argumento para o fetch especifica que o método da requisição não é GET (o padrão quando não passamos nada), mas sim POST.

Vamos novamente ao navegador, recarregamos a página e clicamos em "like". Agora, recebemos um erro 401. Ao verificar a resposta, vemos que não estamos autorizados, pois o token não foi fornecido. Realmente, não passamos nenhum token até agora. Queremos testar no Postman para verificar se, ao enviar essa URL, conseguimos sucesso. Copiamos a URL, trocamos de GET para POST e enviamos. Recebemos a mensagem "token não fornecido, não autorizado", indicando que não estamos autorizados a curtir esse post. Para curtir um post, precisamos ser usuários do CodeConnect e estar logados.

Verificando autenticação e registrando usuário

Nosso próximo passo é verificar a parte de autenticação no Swagger, que inclui registrar o usuário e fazer login. Em vez de usar o mecanismo de autenticação atual, que está mocado e apenas armazena o usuário no local storage, queremos cadastrar os usuários na API e fazer login por meio dela.

No Postman, registramos um usuário, por exemplo, João da Silva, e agora queremos fazer login com ele. Copiamos o corpo da requisição, aumentamos o zoom, abrimos outra requisição e configuramos um POST com o body em JSON. Removemos o nome, pois para login precisamos apenas do e-mail e senha. A URL será http://localhost:3000/auth/login, conforme visto no Swagger. O access token que a API solicita é o que precisamos passar.

Atualizando autenticação para comunicação com a API

Precisamos atualizar nossa autenticação e todos os mecanismos de login, logout e registro de usuário para se comunicarem com a API, em vez de serem locais. Vamos ao VS Code e ajustamos o useAuth, que já está extraído para um hook. Se não quebrarmos a API ou o contrato de parâmetros e respostas, não precisaremos alterar muito a página de login.

No próximo vídeo, vamos entender como trocar o mecanismo de gestão de usuário, migrando do localhost para a API. Vamos lá!

### Aula 2 - Melhorando a experiência de navegação na Meteora - Exercício

A loja online Meteora, especializada em roupas e acessórios, está focada em melhorar a experiência de navegação de seus clientes. A equipe de desenvolvimento, da qual você faz parte, está trabalhando em uma funcionalidade que permite às pessoas usuárias visualizar detalhes de um produto ao clicar em seu nome. No entanto, foi identificado que, quando um produto não está mais disponível, o sistema exibe uma página de erro em vez de redirecionar para uma página de 'Produto indisponível'.

Qual das alternativas abaixo descreve a melhor abordagem para implementar uma solução eficaz para lidar com produtos indisponíveis?

Resposta:  
Implementar um mecanismo de redirecionamento que verifica o status da resposta da API após a requisição e, caso seja 404, utiliza uma função de redirecionamento para levar a pessoa usuária a uma página de 'Produto indisponível', que informa claramente a indisponibilidade e sugere produtos similares.

> Correta, pois essa abordagem melhora a experiência da pessoa usuária ao evitar páginas de erro genéricas e fornecer informações úteis, além de manter a navegação fluida.

### Aula 2 - O que aprendemos?

Nesta aula, aprendemos:

- Como utilizar o Swagger para documentar e visualizar APIs.
- A utilizar o Postman para testar e debugar APIs de forma independente.
- A executar requisições assíncronas com fetch e lidar com erros de HTTP.
- A gerenciar estado no React com useState e disparar efeitos colaterais com useEffect.
- A implementar interatividade em componentes React para operações como incrementos de curtidas.
- A fazer requisições HTTP POST e lidar com respostas baseadas no status code.
- A importância da autenticação com tokens para executar operações seguras na API.
- A migrar lógica de autenticação para uma abordagem baseada em tokens de API.

## Aula 3 - Autorizando requisições

### Aula 3 - Projeto da aula anterior

Você pode ir acompanhando o passo a passo do desenvolvimento do nosso projeto e, caso deseje, você pode [acessar o projeto da aula anterior](https://github.com/alura-cursos/4870--code-connect/tree/aula-2).

### Aula 3 -  - Vídeo 1
### Aula 3 -  - Vídeo 2
### Aula 3 -  - Vídeo 3
### Aula 3 -  - Vídeo 4
### Aula 3 -  - Vídeo 5
### Aula 3 -  - Vídeo 6
### Aula 3 -  - Vídeo 7
### Aula 3 -  - Vídeo 8
### Aula 3 -  - Vídeo 9
### Aula 3 -  - Vídeo 10
