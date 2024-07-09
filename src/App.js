import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout page={<Homepage />} />} />
        <Route path="/services" element={<Layout page={<Services />} />} />
        <Route path="/team" element={<Layout page={<Team />} />} />
        <Route path="/contactus" element={<Layout page={<ContactUs />} />} />
      </Routes>
    </div>
  );
}

export default App;
