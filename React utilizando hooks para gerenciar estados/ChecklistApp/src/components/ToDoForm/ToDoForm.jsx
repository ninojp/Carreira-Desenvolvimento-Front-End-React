import ButtonFormModal from '../ButtonFormModal/ButtonFormModal';
import TextInput from '../TextInput/TextInput';
import styles from './ToDoForm.module.css';

export default function ToDoForm({ onSubmit }) {
    return (
        <form action={onSubmit} className={styles.formModal}>
            <TextInput placeholder='Digite o item que deseja adicionar' required />
            <ButtonFormModal type="submit">Salvar item</ButtonFormModal>
        </form>
    );
};
