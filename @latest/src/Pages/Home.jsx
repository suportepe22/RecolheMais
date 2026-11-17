import { useState } from 'react';
import '../App.css';
import Header from '../Header';
import Menu from '../Menu';
import {link} from 'react-router-dom';

function App() {
  const [contador, setContador] = useState(0);
  function increment() {
    setContador(contador + 1);
  }

  return (
    <>
      <Header title="Bem vindo!" />
      <Menu />
      <section id="center">

        <div>
          <h1>Projeto PI Recolhe_Mais</h1>
          <p><input type="button" value="Clique" onClick={increment} /></p>
          <p>{contador}</p> Clique!
        </div>

      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App;