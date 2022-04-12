import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './brands.css';
import Navbar from './Components/navbar';
import Brands from './Components/brands';
import Slider from './Components/slider';
import Cards from './Components/cards';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      
<Navbar/>
<Slider/>
<Brands/>
<Cards/>
<Footer/>

    </div>
  );
}

export default App;
