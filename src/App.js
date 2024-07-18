import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Team from './pages/Team';
import ContactUs from './pages/ContactUs';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
      theme="light"
      />
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
