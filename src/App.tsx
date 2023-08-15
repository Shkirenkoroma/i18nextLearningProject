import { FC } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Contact from './pages/contact';
import NavBar from './components/navbar';
import './App.css';

const App:FC = ():JSX.Element => {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
