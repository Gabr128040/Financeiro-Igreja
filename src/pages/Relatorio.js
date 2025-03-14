import React from "react";
import Navbar from "../components/Navbar";

const Relatorio = () => {
  const gerarPDF = () => {
    window.open(`${process.env.REACT_APP_API_URL}/gerar-pdf/`, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Gerar Relatório</h2>
        <button className="btn btn-primary" onClick={gerarPDF}>Baixar PDF</button>
      </div>
    </div>
  );
};

export default Relatorio;