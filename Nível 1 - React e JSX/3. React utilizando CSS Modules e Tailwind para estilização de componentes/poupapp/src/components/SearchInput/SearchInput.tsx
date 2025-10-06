import { IconSearch } from '../icons';
import styles from './SearchInput.module.css';

export default function SearchInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.container}>
        <IconSearch />
        <input className={styles.input} {...props} />
    </div>
  )
}
