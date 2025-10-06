import styles from './ButtonFormModal.module.css';

export default function ButtonFormModal({ children, ...rest }) {
    return (
        <button {...rest} className={styles.btnFormSalvar}>
            {children}
        </button>
    );
};
