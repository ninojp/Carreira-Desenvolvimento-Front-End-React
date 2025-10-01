const localCurrencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});
export default function DailyBudget({value}) {
  return (
    <p className="m-0 text-primary-highlight font-bold text-[39px] leading-[125%] text-center">
        {localCurrencyFormatter.format(value)}
    </p>
  );
};
