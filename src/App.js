import React from "react";
import Guide from "./pages/Guide";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Guide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
