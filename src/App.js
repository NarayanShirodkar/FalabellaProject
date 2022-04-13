
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './brands.css';
import Navbar from './Components/navbar';
import Brands from './Components/brands';
import Slider from './Components/slider';
import Cards from './Components/cards';
import Footer from './Components/footer';
import Alert from './Components/alert';
import { userData } from "./Components/records"
import $ from 'jquery'

function App() {
  return (
    <div className="App">

<Navbar/>
{(userData[0].sliderVisible)?<Slider/>:null}
{(userData[0].brandsVisible)?<Brands/>:null}
{(userData[0].cardsVisible)?<Cards/>:null}
<Footer/>
{(userData[0].alertVisible)?<Alert/>:null}




    </div>
  );
}

export default App;
