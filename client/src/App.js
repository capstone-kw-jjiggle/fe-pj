import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import MainPage from "./components/pages/Mainpage";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
