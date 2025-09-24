import Aside from './components/Aside/Aside';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import DailyBudget from './components/DailyBudget/DailyBudget';
import Main from './components/Main/Main';
import SearchInput from './components/SearchInput/SearchInput';
import Typography from './components/Typography/Typography';

export default function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput placeholder='Procure seu Dinheiro'/>
        <div>
          <Typography variant='h1'>Olá, Nino JP!</Typography>
          <Typography variant='p'>Veja como estão suas finanças</Typography>
        </div>
        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponivel:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={1000}/>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponivel:
            </Card.Header>
            <Card.Body>
              R$ 100,00
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponivel:
            </Card.Header>
            <Card.Body>
              R$ 100,00
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponivel:
            </Card.Header>
            <Card.Body>
              R$ 100,00
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
    );
};
