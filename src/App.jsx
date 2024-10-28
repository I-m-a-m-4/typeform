import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Questionnaire from "./Questionnaire";
import ResponsesTable from "./ResponsesTable";
import WelcomeScreen from "./WelcomeScreen";
import EndScreen from "./EndScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="hr">
          <nav>
            <Link className="home" to="/">Home</Link> |
            <Link className="response" to="/responses">View Responses</Link> {/* Directly links to ResponsesTable */}
          </nav>
          <div className="logo">
            <img src="/gr.png" width="200px" alt="Fitness Logo" />
            <p className="home">Fitness</p>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/end" element={<EndScreen />} />
          <Route path="/responses" element={<ResponsesTable />} /> {/* Direct access to ResponsesTable */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
