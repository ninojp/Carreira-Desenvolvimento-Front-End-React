import { useState } from 'react';
import styles from './App.module.css';
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
  //========================================
  const [eventos, setEventos] = useState([
    {
      // capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      capa: 'Imagem1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ]);
  //==================================
  function adicionarEvento(evento) {
    // eventos.push(evento);
    // console.log('Eventos -->', eventos);
    setEventos([...eventos, evento])
  }
  //Renderização condicional, pode ser feita de várias formas
  //1ª forma - if ternário
  //2ª forma - operador lógico && (curto circuito)
  //3ª forma - if comum (fora do JSX)
  //4ª forma - switch case (fora do JSX)
  //==================================
  return (
    <main>
      <header className={styles.headerEstilos}>
        <img src='./logo.png' alt='Logo' />
      </header>
      <Banner />
      <FormAdicionaEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className={styles.sectionTemasContainer}>
        {temas.map(tema => {
          const eventosDoTema = eventos.filter(evento => evento.tema.id === tema.id);
          if (eventosDoTema.length === 0) return null;
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className={styles.divEventosContainer}>
                {eventosDoTema.map((evento, indice) => (
                  <CardEvento evento={evento} key={indice} />
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </main >
  );
};

