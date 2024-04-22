import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CarbonDiagram from './components/CarbonDiagram';
import ChatbotPage from './components/ChatbotPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/carbon-diagram" element={<CarbonDiagram />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;