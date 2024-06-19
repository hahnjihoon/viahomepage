// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import CompanyInfo from "./pages/info/CompanyInfo";
import Perfume from "./pages/product/Perfume";
import Cosmetics from "./pages/product/Cosmetics";
import Shop from "./pages/location/Shop";
import Base from "./pages/location/Base";
import Notice from "./pages/notice/Notice";
import Board from "./pages/notice/Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/landing" element={<Home />} />
        <Route path="/info" element={<CompanyInfo />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/sales" element={<Shop />} />
        <Route path="/headquarters" element={<Base />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
