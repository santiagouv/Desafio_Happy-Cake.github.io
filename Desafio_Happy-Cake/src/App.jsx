import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='*' element={ <NotFound/> }/>
        <Route path='contacto' element={ <Contact/> }/>
      </Routes>
      <br/>
      <Footer />
    </>
  );
};

export default App;
