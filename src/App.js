import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import WhoWeAre from './pages/whowheare/WhoWeAre';
import Services from './pages/services/Services';
import Projects from './pages/projects/Projects';
import ContactUs from './pages/contactus/ContactUs';
import WhyAndes from './pages/Why/Why';



function App() {
  return (
    <div className="App font-OpenSans ">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/whoweare' element={<WhoWeAre/>}></Route>
        <Route path='/whyandes' element={<WhyAndes/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
