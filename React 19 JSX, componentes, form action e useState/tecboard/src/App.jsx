import './App.module.css';
import FormAdicionaEvento from './components/FormAdicionaEvento/FormAdicionaEvento';

export default function App() {
  return (
    <main>
      <header>
        <img src='./logo.png' alt='Logo' />
      </header>
      <section>
        <img src='./banner.png' alt='Banner' />
      </section>
      <FormAdicionaEvento />
    </main>
  );
};
