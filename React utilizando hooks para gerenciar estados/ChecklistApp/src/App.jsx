import { use, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import DialogModal from "./components/DialogModal/DialogModal"
import ToDoForm from "./components/ToDoForm/ToDoForm"
import ToDoContext from "./components/ToDoProvider/ToDoContext"
import ToDoGroup from "./components/ToDoGroup/ToDoGroup"
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
  //useState é usado para criar um estado em componentes funcionais
  const [mostraDialogST, setMostraDialogST] = useState(false);
  //----------------------------------------------------------
  const {toDoLista, adicionaToDo} = use(ToDoContext);
  //----------------------------------------------------------
  const toggleDialogModal = () => {
    setMostraDialogST(!mostraDialogST);
    console.log('Alterna ModalDialog: ', mostraDialogST);
  };
  //------------------------------------------
  const handleFormSubmit = (formData) => {
    adicionaToDo(formData);
    toggleDialogModal();
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
          <ToDoGroup heading='Para Estudar' items={toDoLista.filter(toDo => !toDo.completed)}/>
          <ToDoGroup heading='Concluído' items={toDoLista.filter(toDo => toDo.completed)}/>
          {/* <SubHeading>Para estudar</SubHeading>
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
          </ToDoList> */}
          <Footer>
            <DialogModal estaAberta={mostraDialogST} estaFechada={toggleDialogModal}>
              <ToDoForm onSubmit={handleFormSubmit} />
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
