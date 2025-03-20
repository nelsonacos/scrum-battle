import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { InstructionsPage, QuizPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/" element={<Navigate to="/instructions" replace />} />
      </Routes>
    </Router>
  );
}

export default App;