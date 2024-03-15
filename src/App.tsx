import { lazy } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const Home = lazy(() => import('./view/home/Home'));
const TopHeader = lazy(() => import('./components/header/Header'));

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
