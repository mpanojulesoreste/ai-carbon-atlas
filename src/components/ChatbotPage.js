import React from 'react';
import './ChatbotPage.css';

const ChatbotPage = () => {
  return (
    <div className="chatbot-page">
      <h1>ChatBots</h1>
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-header">
            <div className="stat-label">ChatGPT</div>
            <div className="stat-value">150</div>
          </div>
          <div className="stat-subheader">
            <div className="stat-label">NO2</div>
            <div className="stat-value">0</div>
            <div className="stat-label">CH4</div>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-footer">
            <div className="stat-label">HIREABILITY SCORE</div>
            <div className="stat-progress">
              <div className="progress-bar" style={{ width: '54%' }}></div>
            </div>
            <div className="stat-score">54%</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-header">
            <div className="stat-label">CO2 per Hour</div>
            <div className="stat-value">150</div>
          </div>
          <div className="stat-subheader">
            <div className="stat-label">NO2</div>
            <div className="stat-value">0</div>
            <div className="stat-label">CH4</div>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-footer">
            <div className="stat-label">HIREABILITY SCORE</div>
            <div className="stat-progress">
              <div className="progress-bar" style={{ width: '54%' }}></div>
            </div>
            <div className="stat-score">54%</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-header">
            <div className="stat-label">CO2 per Hour</div>
            <div className="stat-value">150</div>
          </div>
          <div className="stat-subheader">
            <div className="stat-label">NO2</div>
            <div className="stat-value">0</div>
            <div className="stat-label">CH4</div>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-footer">
            <div className="stat-label">HIREABILITY SCORE</div>
            <div className="stat-progress">
              <div className="progress-bar" style={{ width: '54%' }}></div>
            </div>
            <div className="stat-score">54%</div>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-header">
            <div className="stat-label">CO2 per Hour</div>
            <div className="stat-value">150</div>
          </div>
          <div className="stat-subheader">
            <div className="stat-label">NO2</div>
            <div className="stat-value">0</div>
            <div className="stat-label">CH4</div>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-footer">
            <div className="stat-label">HIREABILITY SCORE</div>
            <div className="stat-progress">
              <div className="progress-bar" style={{ width: '54%' }}></div>
            </div>
            <div className="stat-score">54%</div>
          </div>
        </div>
        {/* Repeat the stat-item div for the remaining stats */}
      </div>
      <h1>Ways to reduce </h1>
    </div>
    
  );
};

export default ChatbotPage;