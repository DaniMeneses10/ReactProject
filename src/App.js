import './assets/css/App.css';

// Import components
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';


function App() {
  
  return (
    <div className="App">

      <Header />      

      <Slider />

      <div className="center">
        
        <SeccionPruebas />

        <Sidebar />

        <div className='clearfix'></div>
        
      </div>{/*End div center */}
      <Footer/>
    </div>
  );
}

export default App;
