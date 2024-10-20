import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Crew from './components/crew/Crew';
import Destination from './components/destination/Destination';
import Home from './components/home/Home';
import Technology from './components/technology/Technology';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
