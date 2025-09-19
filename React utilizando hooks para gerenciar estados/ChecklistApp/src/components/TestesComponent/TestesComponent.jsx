import { useState } from 'react'

export default function TestesComponent() {
    const [nome, setNome] = useState("Nino");
    const [clique, setClique] = useState(0);
   
    function mudarONome() {
        setNome("Edenilson");
        setClique(clique + 1)
    };
  return (
    <div>
        <h2 style={{color:"#fff"}}>{nome}</h2>
        <button onClick={mudarONome} >mudaNome</button>
        <p style={{color:"#fff"}}>Numero de Cliques: {clique}</p>
    </div>
  )
}
