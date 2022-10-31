// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar />
      <Home />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
