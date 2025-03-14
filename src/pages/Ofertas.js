import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Ofertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [novoOferta, setNovoOferta] = useState({ nome: "", valor: "", data: "" });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/ofertas/`)
      .then(res => setOfertas(res.data))
      .catch(err => console.error(err));
  }, []);

  const adicionarOferta = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/ofertas/`, novoOferta)
      .then(res => setOfertas([...ofertas, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Ofertas</h2>
        <form onSubmit={adicionarOferta}>
          <input type="text" placeholder="Nome" onChange={(e) => setNovoOferta({ ...novoOferta, nome: e.target.value })} required />
          <input type="number" placeholder="Valor" onChange={(e) => setNovoOferta({ ...novoOferta, valor: e.target.value })} required />
          <input type="date" onChange={(e) => setNovoOferta({ ...novoOferta, data: e.target.value })} required />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {ofertas.map(oferta => (
            <li key={oferta.id}>{oferta.nome} - R$ {oferta.valor} - {oferta.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ofertas;