import styles from './FormInput.module.css';

export default function FormInput({className, ...props}) {
    return (
        <input {...props} className={`${styles.formInput} ${className ?? ''}`} />
    );
};
