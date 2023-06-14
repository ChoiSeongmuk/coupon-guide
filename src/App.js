import React from "react";
import Guide from "./pages/Guide";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Guide />} />
          <Route exact path={"/detail"} element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
