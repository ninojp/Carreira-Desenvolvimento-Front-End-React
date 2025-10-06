import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
// import styles from "./ToDoGroup.module.css";

export default function ToDoGroup({ items, heading }) {
    return (
        <>
            <SubHeading>{heading}</SubHeading>
            <ToDoList>
                {items.map(function (t) {
                    return <ToDoItem
                        key={t.id}
                        item={t}
                    />
                })}
            </ToDoList>
        </>
    );
};
