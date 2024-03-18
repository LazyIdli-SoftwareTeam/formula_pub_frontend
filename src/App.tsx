import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/home/Home";
import Payment from "./view/payment/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
