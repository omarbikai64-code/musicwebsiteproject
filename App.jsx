import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Artist from "./pages/Artist";
import Checkout from "./pages/Checkout";
import DealDone from "./pages/DealDone";
import AProfile from "./pages/AProfile";
import Chat from "./pages/Chat";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();

  // ✅ ADD IT HERE
  const hideLayout = ["/chat", "/login"].includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dealdone" element={<DealDone />} />
        <Route path="/aprofile" element={<AProfile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;