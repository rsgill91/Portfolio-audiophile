import { Routes, Route } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Checkout from "./pages/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./pages/productDetail/ProductDetail";
import CategoryPage from "./components/categoryPage/CategoryPage";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
