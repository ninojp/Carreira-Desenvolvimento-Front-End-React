import styles from './formSelect.module.css';

export default function FormSelect({itens, className, ...rest}) {
  return (
    <select {...rest} className={`${styles.formSelect} ${className ?? ''}`} defaultValue=''>
        <option className={styles.formSlectOption} value='' disabled>Selecione uma opção</option>
        {itens.map(function(iten) {
          return <option className={styles.formSlectOption} key={iten.id} value={iten.id}> {iten.nome} </option>
        })}
    </select>
  );
};
