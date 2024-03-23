import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Form from './components/Form';
import './styles/styles.css'; // Import the CSS file
function App() {
  const renderPage = () => {
    const path = window.location.pathname;
    if (path === '/about') {
      return <AboutPage />;
    } else if (path === '/contact') {
      return <ContactPage />;
    }
    return <HomePage />;
  };

  return (
    <div>
      <Navbar />
      {renderPage()}
    </div>
  );
}

export default App;
