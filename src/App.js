import logo from './logo.svg';
import './App.css';
//Componentes
import MiComponente from './components/MiComponente';

function App() {
  let nombre = 'Daniel Osuna';
  let presentacion = <h2>Hola, soy {nombre}</h2>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {presentacion}

        <section className='componentes'>
          <MiComponente />
        </section>
          Learn React
      </header>
    </div>
  );
}

export default App;
