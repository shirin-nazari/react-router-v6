import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetallis from "./pages/ProductDetails";

function App() {
  const [cartIsEmpty] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products/:id" element={<ProductDetallis />} />

          <Route path="/products" element={<Products />} />
          <Route
            path="/test"
            element={
              <div>
                <h1>aps</h1>
                <p>Hello</p>
              </div>
            }
          />
          {/* redirect in v6 */}
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route
            path="/checkout"
            element={
              cartIsEmpty ? <Navigate to="/products" /> : <p>check out</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
