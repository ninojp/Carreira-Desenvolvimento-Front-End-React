import { use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import DialogModal from "./components/DialogModal/DialogModal"
import ToDoForm from "./components/ToDoForm/ToDoForm"
import ToDoContext from "./components/ToDoProvider/ToDoContext"
import ToDoGroup from "./components/ToDoGroup/ToDoGroup"
import EmptyState from "./components/EmptyState/EmptyState"
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
export default function App() {
  const { toDoLista, adicionaToDo, mostraDialogST, openFormToDoDialog, closeFormToDoDialog, selectedToDo, editToDo } = use(ToDoContext);
  //----------------------------------------------------------
  const handleFormSubmit = (formData) => {
    if (selectedToDo) {
      editToDo(formData);
    } else {
      adicionaToDo(formData);
    }
    closeFormToDoDialog();
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
          <ToDoGroup heading='Para Estudar' items={toDoLista.filter(toDo => !toDo.completed)} />
          {toDoLista.length === 0 && <EmptyState />}
          <ToDoGroup heading='Concluído' items={toDoLista.filter(toDo => toDo.completed)} />
          <Footer>
            <DialogModal estaAberta={mostraDialogST} estaFechada={closeFormToDoDialog}>
              <ToDoForm 
                onSubmit={handleFormSubmit}
                defaultValue={selectedToDo?.description}
              />
            </DialogModal>
            <FabButton onclick={() => openFormToDoDialog()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
};

/* Usado antes, no lugar do ToDoGroup
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
</ToDoList> */
