import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Components/Pages/Accueil/Accueil";
import Signup from "./Components/Pages/Signup/Signup";
import Login from "./Components/Pages/Login/Login";
import GeneralLayout from "./Components/Layout/GeneralLayout/GeneralLayout";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<GeneralLayout />}>
            <Route index element={<Accueil />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
