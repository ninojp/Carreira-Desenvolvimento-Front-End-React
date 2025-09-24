import styles from './DailyBudget.module.css';

const formatoMoeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
});
export default function DailyBudget({value}: {value: number}) {
  return (
    <p className={styles.dailybudget}>
        {formatoMoeda.format(value)}
    </p>
  );
};
