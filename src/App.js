
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './brands.css';
import Navbar from './Components/navbar';
import Brands from './Components/brands';
import Slider from './Components/slider';
import Cards from './Components/cards';
import Footer from './Components/footer';
import { userData } from "./Components/records"

function App() {
  return (
    <div className="App">

<Navbar/>
{(userData[0].sliderVisible)?<Slider/>:null}
{(userData[0].brandsVisible)?<Brands/>:null}
{(userData[0].cardsVisible)?<Cards/>:null}
<Footer/>

    </div>
  );
}

export default App;
