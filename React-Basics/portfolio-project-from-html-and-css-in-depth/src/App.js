import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Booking from './components/pages/Booking';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/contact-us' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
