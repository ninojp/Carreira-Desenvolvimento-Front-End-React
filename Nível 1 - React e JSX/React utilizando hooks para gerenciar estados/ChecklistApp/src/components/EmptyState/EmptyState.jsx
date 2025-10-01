import styles from './EmptyState.module.css';

export default function EmptyState() {
  return (
    <div className={styles.emptyStateImage} >
        <p className={styles.emptyStateText}>Ainda não tem tarefas cadastradas, adicione tarefas para começar</p>
        <img src='./noun-empty.svg' alt='Nenhum item cadastrado' />
    </div>
  )
}
