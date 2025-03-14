import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Dizimos from "./pages/Dizimos";
import Ofertas from "./pages/Ofertas";
import Gastos from "./pages/Gastos";
import Contas from "./pages/Contas";
import Contribuicoes from "./pages/Contribuicoes";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dizimos" element={<Dizimos />} />
      <Route path="/relatorio" element={<Relatorio />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/gastos" element={<Gastos />} />
      <Route path="/contas" element={<Contas />} />
      <Route path="/contribuicoes" element={<Contribuicoes />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

