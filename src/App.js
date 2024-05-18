import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CarbonDiagram from './components/CarbonDiagram';
import ChatbotPage from './components/ChatbotPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Join from './components/Join';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/carbon-diagram" element={<CarbonDiagram />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path ="/about" element={About} />
          <Route path ="/join" Component={Join} />
          {/* Add more routes for other pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;