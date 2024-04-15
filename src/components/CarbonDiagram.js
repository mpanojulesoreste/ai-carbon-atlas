import React from 'react';
import './CarbonDiagram.css';
import { Link } from 'react-router-dom';
const CarbonDiagram = () => {
  return (
    <div className="carbon-diagram">
  <h2>AIMING TO SHOW ALL CARBON PRODUCED BY AI TOOLS</h2>
  <div className="diagram-element ai-tools">
  <div>AI TOOLS</div>
  </div> 
  <div className="line line-1"></div>
  <div className="line line-2"></div>
  <div className="line line-3"></div>
  <div className="diagram-element chatbots">
  <Link to="/chatbot" className="diagram-element chatbots">
  <div>CHATBOTS</div>
</Link>
</div>
<div className="diagram-element content-creation">
  <div>CONTENT CREATION</div>
</div>
<div className="diagram-element task-project-management">
  <div>TASK &amp; PROJECT MAAGEMENT</div>
</div>
<div className="diagram-element transcription-meeting-assistants">
  <div>TRANSCRIPTION AND MEETING ASSISTANTS</div>
</div>
<div className="diagram-element scheduling">
  <div>SCHEDULING</div>
</div>
<div className="diagram-element voice-music-generation">
  <div>VOICE &amp; MUSIC GENERATION</div>
</div>
<div className="diagram-element image-generation">
  <div>IMAGE GENERATION</div>
</div>
<div className="diagram-element video-production">
  <div>VIDEO PRODUCTION</div>
</div>
<div className="diagram-element grammar-checkers">
  <div>GRAMMAR CHECKERS</div>
</div>

</div>
  );
};

export default CarbonDiagram;