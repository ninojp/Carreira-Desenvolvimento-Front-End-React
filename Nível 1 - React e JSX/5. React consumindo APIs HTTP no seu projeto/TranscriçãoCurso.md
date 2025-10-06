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

<ModalComment />
```

E quando estamos no modo de edição, passamos a prop isEditing:

<ModalComment isEditing />
```

Além disso, alteramos um ícone para que sua cor possa ser modificada via prop. Aqui está o componente IconChat que permite essa customização:

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

<Route path='feed' element={<Feed />} />
<Route path='blog-post/:slug' element={<BlogPost />} />
```

Essas foram as alterações realizadas. Se no curso anterior você nos acompanhou do início ao fim, basta fazer esses pequenos ajustes e tudo estará em ordem. Caso deseje baixar o projeto já com essas alterações, disponibilizaremos o link para que você possa baixá-lo e seguir conosco a partir de agora.

Preparando para o próximo passo
Com isso, o front-end está pronto e funcionando. Vamos abrir o terminal para mostrar que ele está executando o npm run dev do vídeo, o que nos permite interagir:

npm run dev
```

Nosso próximo passo é avançar para o back-end. Vamos entender o que será necessário em relação à nossa API.

### Aula 1 -  - Vídeo 3
### Aula 1 -  - Vídeo 4
### Aula 1 -  - Vídeo 5
### Aula 1 -  - Vídeo 6
### Aula 1 -  - Vídeo 7
### Aula 1 -  - Vídeo 8
