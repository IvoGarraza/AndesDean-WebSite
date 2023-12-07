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
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/whoweare' element={<WhoWeAre/>}></Route>
        <Route exact path='/whyandes' element={<WhyAndes/>}></Route>
        <Route exact path='/services' element={<Services/>}></Route>
        <Route exact path='/projects' element={<Projects/>}></Route>
        <Route exact path='/contactus' element={<ContactUs/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
