import { useState } from 'react';
import { personagens, carrocerias, pneus, planadores } from '../dados';

function Catalogo() {
  const [ordemPeso, setOrdemPeso] = useState('padrao');
  // Estado para controlar o que mostrar (Checkbox)
  const [visibilidade, setVisibilidade] = useState({
    personagens: true, carrocerias: true, pneus: true, planadores: true
  });

  const toggleVisibilidade = (cat) => {
    setVisibilidade(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const personagensOrdenados = [...personagens].sort((a, b) => {
    if (ordemPeso === 'leve-pesado') return a.peso - b.peso;
    if (ordemPeso === 'pesado-leve') return b.peso - a.peso;
    return 0;
  });

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
        <h2>Catálogo de Itens</h2>
        
        <div className="controles-filtro">
          <label><input type="checkbox" checked={visibilidade.personagens} onChange={() => toggleVisibilidade('personagens')} />Personagens</label>
          <label><input type="checkbox" checked={visibilidade.carrocerias} onChange={() => toggleVisibilidade('carrocerias')} />Carrocerias</label>
          <label><input type="checkbox" checked={visibilidade.pneus} onChange={() => toggleVisibilidade('pneus')} />Pneus</label>
          <label><input type="checkbox" checked={visibilidade.planadores} onChange={() => toggleVisibilidade('planadores')} />Planadores</label>
        </div>

        <select value={ordemPeso} onChange={(e) => setOrdemPeso(e.target.value)}>
          <option value="padrao">Peso Padrão</option>
          <option value="leve-pesado">Leve → Pesado</option>
          <option value="pesado-leve">Pesado → Leve</option>
        </select>
      </div>

      {visibilidade.personagens && (
        <>
          <h3>Personagens</h3>
          <div className="grid-4-colunas">{personagensOrdenados.map(renderItem)}</div>
        </>
      )}

      {visibilidade.carrocerias && (
        <>
          <h3>Carrocerias</h3>
          <div className="grid-4-colunas">{carrocerias.map(renderItem)}</div>
        </>
      )}

      {visibilidade.pneus && (
        <>
          <h3>Pneus</h3>
          <div className="grid-4-colunas">{pneus.map(renderItem)}</div>
        </>
      )}

      {visibilidade.planadores && (
        <>
          <h3>Planadores</h3>
          <div className="grid-4-colunas">{planadores.map(renderItem)}</div>
        </>
      )}
    </div>
  );
}

export default Catalogo;