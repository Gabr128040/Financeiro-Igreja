import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Contribuicoes = () => {
  const [contribuicoes, setContribuicoes] = useState([]);
  const [novoContribuicao, setNovoContribuicao] = useState({ nome: "", valor: "", data: "" });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/contribuicoes/`)
      .then(res => setContribuicoes(res.data))
      .catch(err => console.error(err));
  }, []);

  const adicionarContribuicao = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/contribuicoes/`, novoContribuicao)
      .then(res => setContribuicoes([...contribuicoes, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Contribuições</h2>
        <form onSubmit={adicionarContribuicao}>
          <input type="text" placeholder="Nome" onChange={(e) => setNovoContribuicao({ ...novoContribuicao, nome: e.target.value })} required />
          <input type="number" placeholder="Valor" onChange={(e) => setNovoContribuicao({ ...novoContribuicao, valor: e.target.value })} required />
          <input type="date" onChange={(e) => setNovoContribuicao({ ...novoContribuicao, data: e.target.value })} required />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          {contribuicoes.map(contribuicao => (
            <li key={contribuicao.id}>{contribuicao.nome} - R$ {contribuicao.valor} - {contribuicao.data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contribuicoes;