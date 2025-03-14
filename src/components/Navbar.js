import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Financeiro Igreja</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/dizimos">Dízimos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ofertas">Ofertas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gastos">Gastos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contas">Contas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contribuicoes">Contribuições</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;