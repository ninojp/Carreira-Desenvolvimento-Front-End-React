import { useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import DialogModal from "./components/DialogModal/DialogModal"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import TestesComponent from "./components/TestesComponent/TestesComponent"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import ToDoForm from "./components/ToDoForm/ToDoForm"

// const toDoLista = [
//   {
//     id: 1,
//     description: "JSX e componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 2,
//     description: "Props, state e hooks",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31"
//   }
// ]
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31"
//   }
// ]

function App() {
  //useState é usado para criar estado em componentes funcionais
  const [mostraDialogST, setMostraDialogST] = useState(false);
  const [toDoLista, setToDoLista] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31"
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31"
    }
  ]);
  //----------------------------------------------------------
  const toggleDialogModal = () => {
    setMostraDialogST(!mostraDialogST);
    console.log('Alternar Modal Dialog', mostraDialogST);
  };
  //----------------------------------------------------------
  //Função para adicionar novo ToDo
  const adicionaToDo = (formData) => {
    const descriptionInputName = formData.get('descriptionInputName');
    setToDoLista(prevState => {
      const novoToDo = {
        id: prevState.length + 1,
        description: descriptionInputName,
        completed: false,
        createdAt: new Date().toISOString()
      };
      return [...prevState, novoToDo];
    });
    console.log('Adicionando novo ToDo');
    toggleDialogModal();
  };
  //----------------------------------------------------------
  const toggleToDoCompleted = (toDo) => {
    setToDoLista(prevState => {
      return prevState.map(t => {
        if (t.id === toDo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
    });
  };
  //-------------------------------------------------
  const deleteToDo = (toDo) => {
    setToDoLista(prevState => {
      return prevState.filter(t => t.id !== toDo.id);
    });
  };
    //------------------------------------------
    return (
      <main>
        <Container>
          <Header>
            <Heading>
              <IconSchool /> Plano de estudos
            </Heading>
          </Header>
          <ChecklistsWrapper>
            <SubHeading>Para estudar</SubHeading>
            <ToDoList>
              {toDoLista.filter(toDo => !toDo.completed).map(function (t) {
                return <ToDoItem
                  key={t.id}
                  item={t}
                  onToggleCompleted={toggleToDoCompleted}
                  onDeleteToDo={deleteToDo}
                />
              })}
            </ToDoList>
            <SubHeading>Concluído</SubHeading>
            <ToDoList>
              {toDoLista.filter(toDo => toDo.completed).map(function (t) {
                return <ToDoItem
                  key={t.id}
                  item={t}
                  onToggleCompleted={toggleToDoCompleted}
                  onDeleteToDo={deleteToDo}
                />
              })}
            </ToDoList>
            <Footer>
              <DialogModal estaAberta={mostraDialogST} estaFechada={toggleDialogModal}>
                <ToDoForm onSubmit={adicionaToDo} />
              </DialogModal>
              <FabButton onclick={toggleDialogModal} aria-label="Adicionar novo item">
                <IconPlus />
              </FabButton>
            </Footer>
          </ChecklistsWrapper>
        </Container>
      </main>
    )
  }
export default App
