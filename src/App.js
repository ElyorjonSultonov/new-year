import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Basket from "./pages/Basket/Basket";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Katalog from "./pages/Katalog/Katalog";
import Login from "./pages/Login/Login";
import New from "./pages/News/New";
import Order from "./pages/Order/Order";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<Order />} />
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
