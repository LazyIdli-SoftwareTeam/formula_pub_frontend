import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VerifyHost from './views/Customer/VerifyHost';
import ViewBill from './views/Customer/ViewBill';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/bill" element={<ViewBill />} />
          <Route path="/" element={<VerifyHost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
