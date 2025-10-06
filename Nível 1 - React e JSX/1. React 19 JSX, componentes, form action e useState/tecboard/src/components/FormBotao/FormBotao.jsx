
import styles from './FormBotao.module.css';

export default function FormBotao({children, className}) {
  return (
    <button className={`${styles.botao} ${className ?? ''}`}>{children}</button>
  );
};
