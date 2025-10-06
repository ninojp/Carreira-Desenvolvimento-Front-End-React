import styles from './TextInput.module.css';

export default function TextInput(props) {
  return <input
    className={styles['text-input']}
    type="text"
    placeholder="Adicione um novo item"
    {...props}
  />;
};
