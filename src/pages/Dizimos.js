import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Dizimos = () => {
  const [dizimos, setDizimos] = useState([]);
  const [novoDizimo, setNovoDizimo] = useState({ nome: "", valor: "", data: "" });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/dizimos/`)
      .then(res => setDizimos(res.data))
      .catch(err => console.error(err));
  }, []);

  const adicionarDizimo = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/dizimos/`, novoDizimo)
      .then(res => setDizimos([...dizimos, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Dízimos</h2>
        <form onSubmit={adicionarDizimo}>
          <input type="text" placeholder="Nome" onChange={(e) => setNovoDizimo({ ...novoDizimo, nome: e.target.value })} required />
          <input type="number" placeholder="Valor" onChange={(e) => setNovoDizimo({ ...novoDizimo, valor: e.target.value })} required />
          <input type="date" onChange={(e) => setNovoDizimo({ ...novoDizimo, data: e.target.value })} required />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {dizimos.map(dizimo => (
            <li key={dizimo.id}>{dizimo.nome} - R$ {dizimo.valor} - {dizimo.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dizimos;