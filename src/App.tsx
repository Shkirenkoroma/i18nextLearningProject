import { FC } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Contact from './pages/contact';
import NavBar from './components/navbar';
//необходимо подключить bootstrap в index.html  public
//необходимо подключить react route dom
//необходимо подключить select bиз bootstrap
//необходимо подключить i18next
//скопировать шаблон с официальной страницы i18next
//необходимо устаовить зависимость i18 next http backend


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
