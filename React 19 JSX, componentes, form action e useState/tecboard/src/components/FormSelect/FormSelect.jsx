import styles from './formSelect.module.css';

export default function FormSelect({children, className}) {
  return (
    <select className={`${styles.formSelect} ${className ?? ''}`}>
        <option value=''>{children}</option>
    </select>
  );
};
