import styles from './Card.module.css';

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.card}>{children}</div>
  );
};
//----------------------------------------------------------------------
export const CardHeader = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.headerCard}>{children}</div>
    );
};
//----------------------------------------------------------------------
export const CardBody = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.bodyCard}>{children}</div>
    );
};
//----------------------------------------------------------------------
Card.Header = CardHeader;
Card.Body = CardBody;
export default Card;
