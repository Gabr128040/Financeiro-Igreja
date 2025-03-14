import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Gastos = () => {
  const [gastos, setGastos] = useState([]);
  const [novoGasto, setNovoGasto] = useState({ nome: "", valor: "", data: "" });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/gastos/`)
      .then(res => setGastos(res.data))
      .catch(err => console.error(err));
  }, []);

  const adicionarGasto = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/gastos/`, novoGasto)
      .then(res => setGastos([...gastos, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Gastos</h2>
        <form onSubmit={adicionarGasto}>
          <input type="text" placeholder="Nome" onChange={(e) => setNovoGasto({ ...novoGasto, nome: e.target.value })} required />
          <input type="number" placeholder="Valor" onChange={(e) => setNovoGasto({ ...novoGasto, valor: e.target.value })} required />
          <input type="date" onChange={(e) => setNovoGasto({ ...novoGasto, data: e.target.value })} required />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {gastos.map(gasto => (
            <li key={gasto.id}>{gasto.nome} - R$ {gasto.valor} - {gasto.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gastos;