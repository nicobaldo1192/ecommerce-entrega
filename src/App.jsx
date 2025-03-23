import { Navbar } from "./components/layouts/navbar/Navbar";
import Cart from "./components/pages/Cart/Cart";
import Checkout from "./components/pages/Checkout/Checkout";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router";
import { CartContextProvider } from "./context/CartContext";
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="*" element={<h2>404 not found</h2>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
