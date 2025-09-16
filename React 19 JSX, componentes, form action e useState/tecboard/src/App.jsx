import { useState } from 'react';
import './App.module.css';
import Banner from './components/Banner/Banner';
import CardEvento from './components/CardTema/CardEvento';
import FormAdicionaEvento from './components/FormAdicionaEvento/FormAdicionaEvento';
import Tema from './components/Tema/Tema';

export default function App() {
  const temas = [
    { id: 1, nome: 'Front-End' },
    { id: 2, nome: 'Back-End' },
    { id: 3, nome: 'Devops' },
    { id: 4, nome: 'Inteligência Artificial' },
    { id: 5, nome: 'Data Science' },
    { id: 6, nome: 'Cloud' }
  ];

  const [eventos, setEventos] = useState([
    {
      capa: './assets/Imagem1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEvento(evento) {
    // eventos.push(evento);
    // console.log('Eventos -->', eventos);
    setEventos([...eventos, evento])
  }
  return (
    <main>
      <header>
        <img src='./logo.png' alt='Logo' />
      </header>
      <Banner />
      <FormAdicionaEvento temas={temas} aoSubmeter={adicionarEvento} />
      {temas.map((tema) => (
        <section key={tema.id}>
          {<Tema tema={tema} />}
          {eventos.map(function(item, index) {
            return <CardEvento evento={item} key={index} />
          })}
        </section>
      ))}
    </main>
  );
};
