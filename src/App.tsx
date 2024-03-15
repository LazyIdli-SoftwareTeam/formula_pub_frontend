import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VerifyHost from './views/Customer/VerifyHost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerifyHost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
