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
      <h2 style={{ color: "#fff" }}>{nome}</h2>
      <button onClick={mudarONome} >mudaNome</button>
      <p style={{ color: "#fff" }}>Numero de Cliques: {clique}</p>
    </div>
  )
}
//EXEMPLO DE USO DO useRef, Guarda valores sem causar re-render  
//Vamos supor que você queira guardar quantas vezes um botão foi clicado, 
//mas sem re-renderizar o componente a cada clique. Olha só que tranquilo:
function ContadorCliques() {
  const contadorRef = useRef(0);
  function handleClick() {
    contadorRef.current += 1;
    alert(`Você clicou ${contadorRef.current} vezes!`);
  }
  return <button onClick={handleClick}>Clique aqui</button>;
}
//===========================================================
function FocarInput() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focar input</button>
    </>
  );
} 
