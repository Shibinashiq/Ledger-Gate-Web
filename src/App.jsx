import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/Pages/Home'; 
import LiveClass from './Components/LiveClass/LiveClass';
function App() {
  return (
    <Router> 
      <Routes>
        {/* HomePage directly rendered at the root path */}
        <Route path="/" element={<HomePage />} /> 
        <Route path="liveclass/" element={<LiveClass />} /> 
      </Routes>
    </Router>
  );
}

export default App;
