import styles from './FormFieldset.module.css';

export default function FormFieldset({children, className}) {
    return (
        <fieldset className={`${styles.FormFieldset} ${className ?? ''}`}>
            {children}
        </fieldset>
    );
};
