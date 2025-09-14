import styles from './Tema.module.css';

export default function Tema({tema, className}) {
  return <h3 className={`${styles.tituloDoTema} ${className ?? ''}`}> {tema.nome} </h3>;
};
