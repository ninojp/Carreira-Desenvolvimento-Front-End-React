import { useEffect, useRef } from 'react';
// import './DialogModal.css';
import styles from './DialogModal.module.css';
import { IconClose } from '../icons';

export default function DialogModal({ children, estaAberta, estaFechada }) {
    // const dialog = document.querySelector("dialog"); --> FORMA IMPERATIVA de se trabalhar com o DOM
    //No React usamos useRef para referenciar elementos do DOM --> FORMA DECLARATIVA, o React cuida do DOM
    const dialogRef = useRef(null);
    //==================================
    function abrirModal() {
        dialogRef.current.showModal();
    };
    function fecharModal() {
        dialogRef.current.close();
    };
    //================================================================================
    //Usamos o useEffect para monitorar mudanças, como o estado de abertura da modal 
    useEffect(() => {
        if (estaAberta) {
            abrirModal();
        } else {
            fecharModal();
        };
    }, [estaAberta]);
    //======================================================================
    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.addEventListener('close', estaFechada);
        //Removemos o event listener quando o componente for desmontado
        return () => {
            dialog?.removeEventListener('close', estaFechada);
        };
      }, [estaFechada]);
    //======================================================================
    return (
        <dialog ref={dialogRef} className={styles.dialogModal}>
            <div className={styles.divBtnFecharModal}>
                <button autoFocus onClick={estaFechada} className={styles.iconBtnFechar} aria-label="Fechar modal">
                    <IconClose />
                </button>
            </div>
            <div className={styles.corpoModal}>
                {children}
            </div>
        </dialog>
    );
};
