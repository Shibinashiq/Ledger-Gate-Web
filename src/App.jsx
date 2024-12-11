import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/Pages/Home'; 
import LiveClassPage from '../src/Pages/LiveClassPage'; 
import ReportPage from '../src/Pages/ReportPage'
function App() {
  return (
    <Router> 
      <Routes>
        {/* HomePage directly rendered at the root path */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="liveclass/" element={<LiveClassPage />} /> 
        <Route path="report/" element={<ReportPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
