import styles from './CardEvento.module.css'

export default function CardEvento({evento}) {
  return (
    <div className={styles.cardEventoContainer}>
      <img src={evento.capa} alt={evento.titulo} />
      <div className={styles.cardCorpo}>
        <p >{evento.tema.nome}</p>  
        <p className={styles.cardPNome}>{evento.data.toLocaleDateString('pt-BR')}</p>
        <h4 className={styles.h4EventoTitulo}>{evento.titulo}</h4>
      </div>
    </div>
  );
};
