import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VerifyHost from './views/Customer/VerifyHost';
import ViewBill from './views/Customer/ViewBill';
import Rides from './views/Customer/Rides';
import GenerateRacePass from './views/Customer/GenerateRacePass';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/bill" element={<ViewBill />} />
          <Route path="/" element={<VerifyHost />} />
          <Route path="/rides" element={<Rides />} />
          <Route path="/pass" element={<GenerateRacePass />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
