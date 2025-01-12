import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Error404 from "./pages/Error404.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
