import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Airdopes from './Airdopes';
import Neckbands from './Neckbands';
import Smartwatches from './Smartwatches';
import Wiredheadphones from './Wiredheadphones';
import WirelessHeadphones from './WirelessHeadphones';
import WiredEarphones from './WiredEarphones';
import Airdopes1 from './Airdopes1';
import Airdopes2 from './Airdopes2';
import Airdopes3 from './Airdopes3';
import Smartwatches1 from './Smartwatches1';
import Smartwatches2 from './Smartwatches2';
import Neckbands1 from './Neckbands1';
import Neckbands2 from './Neckbands2';
import Wiredheadphones1 from './Wiredheadphones1';
import Wiredheadphones2 from './Wiredheadphones2';
import Wirelessheadphones1 from './Wirelessheadphones1';
import Wirelessheadphones2 from './Wirelessheadphones2';
import Wiredearphones1 from './Wiredearphones1';
import Wiredearphones2 from './Wiredearphones2';
import Cart from './Redux/Cart';
import BoattrulyYours from './BoattrulyYours';
import Order from './Order';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='BoattrulyYours' element={<BoattrulyYours/>}/>
        <Route path='/Airdopes' element={<Airdopes/>}/>
        <Route path='/Smartwatches' element={<Smartwatches/>}/>
        <Route path='/Smartwatches1' element={<Smartwatches1/>}/>
        <Route path='/Smartwatches2' element={<Smartwatches2/>}/>
        <Route path='/Neckbands' element={<Neckbands/>}/>
        <Route path='/Neckbands1' element={<Neckbands1/>}/>
        <Route path='/Neckbands2' element={<Neckbands2/>}/>
        <Route path='/Wiredheadphones' element={<Wiredheadphones/>}/>
        <Route path='/Wiredheadphones1' element={<Wiredheadphones1/>}/>
        <Route path='/Wiredheadphones2' element={<Wiredheadphones2/>}/>
        <Route path='/WirelessHeadphones' element={<WirelessHeadphones/>}/>
        <Route path='/WirelessHeadphones1' element={<Wirelessheadphones1/>}/>
        <Route path='/WirelessHeadphones2' element={<Wirelessheadphones2/>}/>
        <Route path='/WiredEarphones' element={<WiredEarphones/>}/>
        <Route path='/WiredEarphones1' element={<Wiredearphones1/>}/>
        <Route path='/WiredEarphones2' element={<Wiredearphones2/>}/>
        <Route path='/Airdopes1' element={<Airdopes1/>}/>
        <Route path='/Airdopes2' element={<Airdopes2/>}/>
        <Route path='/Airdopes3' element={<Airdopes3/>}/>
        <Route path='/Footer' element={<Footer/>}/>       
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
        
        

    
        
      </Routes>
      </BrowserRouter>
 

    </div>
  );
}

export default App;
