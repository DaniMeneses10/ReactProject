import logo from './assets/images/logo.jpg';
import './assets/css/App.css';
import MyComponent from './components/MyComponent';

// Import components
import Bowls from './components/Bowls'
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';

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

      <Header />

      <Slider />

      <div className="center">
        <section id="content">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bienvenido al Proyecto de Danito
          </p>
          {HolaMundo(nombre)}
          <section className='components'>
            <MyComponent />
            <Bowls />
          </section>
        </section>

        <Sidebar />
      </div>


    </div>
  );
}

export default App;
