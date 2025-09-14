import './App.module.css';
import Banner from './components/Banner/Banner';
import CardEvento from './components/CardTema/CardEvento';
import FormAdicionaEvento from './components/FormAdicionaEvento/FormAdicionaEvento';
import Tema from './components/Tema/Tema';

const temas = [
  { id: 1, nome: 'front-end' },
  { id: 2, nome: 'back-end' },
  { id: 3, nome: 'devops' },
  { id: 4, nome: 'inteligência artificial' },
  { id: 5, nome: 'data science' },
  { id: 6, nome: 'cloud' }
];

const eventos = [
  {
    capa: './assets/Imagem1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front'
  }
]
export default function App() {
  return (
    <main>
      <header>
        <img src='./logo.png' alt='Logo' />
      </header>
      <Banner />
      <FormAdicionaEvento />
      {temas.map((tema) => (
        <section key={tema.id}>
          {<Tema tema={tema} />}
          {<CardEvento evento={eventos[0]} />}
        </section>
      ))}
      {/* <section>
        <Tema tema={temas[0]} />
      </section>
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  );
};
