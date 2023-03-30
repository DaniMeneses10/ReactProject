import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import MyComponent from './components/MyComponent';

function HolaMundo(nombre) {
  var presentacion = (
    <h2>Hola soy {nombre}</h2>
  );
  return presentacion;
}


function App() {
  var nombre = "Daniel";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al Proyecto de Dani
        </p>
        {HolaMundo(nombre)}
        <section className='components'>
        <MyComponent />
      </section>
      </header>


    </div>
  );
}

export default App;
