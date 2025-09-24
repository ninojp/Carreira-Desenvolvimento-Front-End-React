import styles from './Aside.module.css';

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <img src="/Logo-PoupApp.svg" alt="Logo PoupApp" />
      <footer className={styles.footer}>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </footer>
    </aside>
  );
};
