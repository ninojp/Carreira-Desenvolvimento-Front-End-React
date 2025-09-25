import Aside from "./components/Aside/Aside";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import DailyBudget from "./components/DailyBudget/DailyBudget";
import Main from "./components/Main/Main";
import SavingsStatus from "./components/SavingsStatus/SavingsStatus";
import SearchInput from "./components/SearchInput/SearchInput";
import Typography from "./components/Typography/Typography";

export default function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container >
        <Aside />
        <Main>
          <SearchInput name='q' placeholder="Procure seu dinheiro..." />
          <div>
            <Typography variant="h1">Olá, Dev!</Typography>
            <Typography variant="body">Veja como estão suas finanças hoje.</Typography>
          </div>
          <section className="grid grid-cols-2 items-stretch gap-6">
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira
              </Card.Header>
              <Card.Body>
                <SavingsStatus />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                <p>R$ 200,00</p>
                <p>R$ 200,00</p>
                <p>R$ 200,00</p>
                <p>R$ 200,00</p>
                <p>R$ 200,00</p>
                <p>R$ 200,00</p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Minhas Contas
              </Card.Header>
              <Card.Body>
                R$ 200,00
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  );
};
