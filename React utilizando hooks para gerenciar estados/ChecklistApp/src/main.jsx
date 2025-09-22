import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoProvider from './components/ToDoProvider/ToDoProvider.jsx'

createRoot(document.getElementById('root')).render(
  //ToDoProvider, envolve toda a aplicação para fornecer o estado global e prover as funções e estados a todos os componentes filhos
  <StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </StrictMode>,
)
