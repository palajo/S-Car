import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import Mainpage from './pages/Mainpage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
        <Sidebar />
        <Header />
        <Mainpage />
        <Footer />
    </div>
  );
}

export default App;
