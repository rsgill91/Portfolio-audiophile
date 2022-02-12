import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Earphones from "./pages/earphones/Earphones";
import Headphones from "./pages/headphones/Headphones";
import Home from "./pages/home/Home.jsx";
import Speakers from "./pages/speakers/Speakers";
import Checkout from "./pages/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./pages/productDetail/ProductDetail";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
