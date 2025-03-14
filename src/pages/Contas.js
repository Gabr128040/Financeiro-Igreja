import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Contas = () => {
  const [contas, setContas] = useState([]);
  const [novoConta, setNovoConta] = useState({ nome: "", valor: "", data: "" });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/contas/`)
      .then(res => setContas(res.data))
      .catch(err => console.error(err));
  }, []);

  const adicionarConta = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contas/`, novoConta)
      .then(res => setContas([...contas, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Contas</h2>
        <form onSubmit={adicionarConta}>
          <input type="text" placeholder="Nome" onChange={(e) => setNovoConta({ ...novoConta, nome: e.target.value })} required />
          <input type="number" placeholder="Valor" onChange={(e) => setNovoConta({ ...novoConta, valor: e.target.value })} required />
          <input type="date" onChange={(e) => setNovoConta({ ...novoConta, data: e.target.value })} required />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {contas.map(conta => (
            <li key={conta.id}>{conta.nome} - R$ {conta.valor} - {conta.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contas;