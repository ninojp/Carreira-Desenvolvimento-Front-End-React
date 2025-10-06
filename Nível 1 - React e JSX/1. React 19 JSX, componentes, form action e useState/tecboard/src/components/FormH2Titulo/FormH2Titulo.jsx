import styles from './FormH2Titulo.module.css';

//PROPS é um OBJETO, logo suas propriedades e métodos estão acessiveis obj.method
export default function FormH2Titulo({className, children}) {
    return (
        // <h2 className={className}> {children} </h2>
        <h2 className={`${styles.formH2Titulo} ${className ?? ''}`}>{children}</h2>
    );
};
