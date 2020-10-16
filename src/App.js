import React from 'react';
import './App.css';
import Header from './components/Layouts/header/Header';
import Footer from './components/Layouts/footer/Footer';
import FrontPage from './components/Layouts/front_page/front_page';

function App() {
  return (
    <div>
      <Header />
      <FrontPage />
      <Footer />
    </div>
  );
}

export default App;
