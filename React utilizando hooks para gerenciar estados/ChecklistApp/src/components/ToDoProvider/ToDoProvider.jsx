import { useEffect, useState } from 'react';
import ToDoContext from './ToDoContext'

export default function ToDoProvider({ children }) {
    const LISTATODOS = "ListaLocalDeToDos";
    //----------------------------------------------------------
    const listaAtualToDos = localStorage.getItem(LISTATODOS);
    //----------------------------------------------------------
    const [toDoLista, setToDoLista] = useState(listaAtualToDos ? JSON.parse(listaAtualToDos) : []);
    //---------------------------------------------------------------------------------------------
    //useState é usado para criar um estado em componentes funcionais
    const [mostraDialogST, setMostraDialogST] = useState(false);
    //----------------------------------------------------------
    const [selectedToDo, setSelectedToDo] = useState();
    //---------------------------------------------------------------------------------------------
    useEffect(() => {
        localStorage.setItem(LISTATODOS, JSON.stringify(toDoLista));
    }, [toDoLista]);
    //--------------------------------------------------------------
    const openFormToDoDialog = (toDo) => {
        if (toDo) {
            setSelectedToDo(toDo);
        }
        setMostraDialogST(true);
    };
    //------------------------------------------
    const closeFormToDoDialog = () => {
        setMostraDialogST(false);
        setSelectedToDo(null);
    };
    //------------------------------------------
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
    //----------------------------------------------------------
    const editToDo = (formData) => {
        setToDoLista(prevState => {
            return prevState.map(t => {
                if (t.id === selectedToDo.id) {
                    return { ...t, description: formData.get('descriptionInputName') };
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
    //=====================================================
    return (
        //O ToDoContext.ToDoProvider disponibiliza o valor (value) para todos os componentes filhos (children) que estiverem dentro do componente ToDoProvider
        <ToDoContext
            value={{ 
                toDoLista, 
                adicionaToDo, 
                toggleToDoCompleted, 
                deleteToDo,
                mostraDialogST,
                openFormToDoDialog,
                closeFormToDoDialog,
                selectedToDo,
                editToDo
            }}
        >
            {children}
        </ToDoContext>
    );
};
