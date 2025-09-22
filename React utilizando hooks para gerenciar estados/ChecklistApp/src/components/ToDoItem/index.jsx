import './todo-item.style.css'
import { IconPencil, IconTrash } from "../icons";
import { use } from 'react';
import ToDoContext from '../ToDoProvider/ToDoContext';

export function ToDoItem({ item }) {
    const {toggleToDoCompleted, deleteToDo } = use(ToDoContext);
    //------------------------------------------
    const estilos = ['todo-item']
    if (item.completed) {
        estilos.push('completed')
    }
    //==========================================
    return (
        <li className={estilos.join(' ')}>
            <p className="date">
                {new Date(item.createdAt).toLocaleDateString('pt-BR')}
            </p>
            <div className="details">
                <input
                    type="checkbox"
                    className="checkbox"
                    defaultChecked={item.completed}
                    onClick={() => toggleToDoCompleted(item)}
                />
                <p className="description">
                    {item.description}
                </p>
                <div className="actions">
                    <button className="btn" onClick={() => deleteToDo(item)}>
                        <IconTrash />
                    </button>
                    <button className="btn">
                        <IconPencil />
                    </button>
                </div>
            </div>
        </li>
    )
}
