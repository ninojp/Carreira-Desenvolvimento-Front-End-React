import { useRef } from 'react';
import './DialogModal.css';

export default function DialogModal() {
    // const dialog = document.querySelector("dialog");
    // const showButton = document.querySelector("dialog + button");
    // const closeButton = document.querySelector("dialog button");
    const dialogRef = useRef(null);

    function abrirModal(){
        dialogRef.current.showModal();
    };
    function fecharModal() {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={fecharModal}>Fechar</button>
                <p>Nossa Modal!</p>
            </dialog>
            <button onClick={abrirModal}>abrirModal</button>
        </>
    );
};
