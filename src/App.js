
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
import DemoFunc from './Components/demo';
import $ from 'jquery'

function App() {
  const operator = 0;
  return (
    <div className="App">


<Navbar data={userData[operator]} />

{/* 
{userData.map(userData=>userData)[operator].comp1}
{userData.map(userData=>userData)[operator].comp2}
{userData.map(userData=>userData)[operator].comp3} */}

{/* {userData.map(comp1=>comp1.comp1)}
{userData.map(comp2=>comp2.comp2)}
{userData.map(comp3=>comp3.comp3)} */}

{(userData[0].sliderVisible)?<Slider data={userData[operator]} />:null}
{(userData[0].brandsVisible)?<Brands data={userData[operator]} />:null}
{(userData[operator].cardsVisible)?<Cards data={userData[operator]} />:null}


<Footer data={userData[operator]} />


{(userData[operator].alertVisible)?<Alert/>:null}




    </div>
  );
}

export default App;
