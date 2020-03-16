import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Mainpage from './pages/Mainpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div className="App">
        <Header />
        <Mainpage />
        <Footer />
    </div>
  );
}

export default App;
