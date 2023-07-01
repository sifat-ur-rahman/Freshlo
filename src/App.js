
import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Discount from './Components/Discount/Discount';
import Footer from './Components/Footer';
import Freshlo from './Components/Freshlo';
import Inside from './Components/Inside';
import Pricing from './Components/Pricing';
import Reviews from './Components/Reviews';
import Works from './Components/Works';


function App() {
  return (
    <div className="">
      <Carousel></Carousel>
      <About></About>
      <Works></Works>
      <Pricing></Pricing>
      <Inside></Inside>
      <Discount></Discount>
      <Reviews></Reviews>
      <Freshlo></Freshlo>
      <Footer></Footer>
    </div>
  );
}

export default App;
