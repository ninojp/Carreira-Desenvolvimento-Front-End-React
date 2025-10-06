import styles from './FormLabel.module.css';

export default function FormLabel({children, htmlFor, className}) {
    return (
        <label htmlFor={htmlFor} className={`${styles.formLabel} ${className ?? ''}`}> {children} </label>
    );
};
