import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { useUserContext } from "./context/userContext";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from "react";
import Router from './config/Routes';
import Auth from './components/auth';
import Loader from './components/Loader/Loader';

function App() {

  const { user, loading, error } = useUserContext();
  console.log(user);
  
  return (
    
    <div>
    {error && <p className="error">{error}</p>}
    {loading ? <div className='Loading-Conatainer'><Loader/></div> : <> {user ? <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props} />
          <Router/>
          <Footer/>
        </>
      )} />
    </BrowserRouter> : <Auth />} </>}
  </div>
  );
}

export default App;
