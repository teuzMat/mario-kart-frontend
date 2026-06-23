import { useState } from 'react';
import { personagens, carrocerias, pneus, planadores } from '../dados';

function Catalogo() {
  const [ordemPeso, setOrdemPeso] = useState('padrao');

  // Lógica de ordenação: Cria uma cópia do array e ordena baseado no select
  const personagensOrdenados = [...personagens].sort((a, b) => {
    if (ordemPeso === 'leve-pesado') return a.peso - b.peso;
    if (ordemPeso === 'pesado-leve') return b.peso - a.peso;
    return 0; // 'padrao'
  });

  // Função para renderizar as cartinhas do grid
  const renderItem = (item) => (
    <div key={item.id} className="card-grid">
      <img src={item.imagem} alt={item.nome} />
      <h4>{item.nome}</h4>
      {item.peso !== undefined && <span className="info-extra">Peso: {item.peso}</span>}
    </div>
  );

  return (
    <div className="pagina-catalogo">
      <div className="header-catalogo">
        <h2>Personagens</h2>
        <div className="filtro">
          <label>Ordenar por Peso: </label>
          <select value={ordemPeso} onChange={(e) => setOrdemPeso(e.target.value)}>
            <option value="padrao">Padrão</option>
            <option value="leve-pesado">Mais Leves Primeiro</option>
            <option value="pesado-leve">Mais Pesados Primeiro</option>
          </select>
        </div>
      </div>
      <div className="grid-4-colunas">
        {personagensOrdenados.map(renderItem)}
      </div>

      <hr className="divisor" />

      <h2>Carrocerias</h2>
      <h3>Karts</h3>
      <div className="grid-4-colunas">
        {/* Assumindo que você tem 'tipo: "Kart"' no dados.js */}
        {carrocerias.filter(c => c.tipo !== 'Moto').map(renderItem)}
      </div>

      <h3>Motos</h3>
      <div className="grid-4-colunas">
        {carrocerias.filter(c => c.tipo === 'Moto').map(renderItem)}
      </div>

      <hr className="divisor" />

      <h2>Pneus</h2>
      <div className="grid-4-colunas">
        {pneus.map(renderItem)}
      </div>

      <hr className="divisor" />

      <h2>Planadores</h2>
      <div className="grid-4-colunas">
        {planadores.map(renderItem)}
      </div>
    </div>
  );
}

export default Catalogo;