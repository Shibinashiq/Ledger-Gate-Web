import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/Pages/Home'; 
import LiveClassPage from '../src/Pages/LiveClassPage'; 
import ReportPage from '../src/Pages/ReportPage'
import Login from './Components/Login/Login';
import ReviewQuestions from '../src/Pages/ReviewQuestion'
import QuestionSelection from './Components/Question-Selection/QuestionSelection';
function App() {
  return (
    <Router> 
      <Routes>
        {/* HomePage directly rendered at the root path */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="liveclass/" element={<LiveClassPage />} /> 
        <Route path="report/" element={<ReportPage />} /> 
        <Route path="login/" element={<Login />} /> 
        <Route path="reviewquestions/" element={<ReviewQuestions />} /> 
        <Route path="questionselection/" element={<QuestionSelection />} /> 
      </Routes>
    </Router>
  );
}

export default App;
