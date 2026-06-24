import { useState } from 'react';
import { personagens, carrocerias, pneus, planadores } from '../dados';

// Definindo o componente FORA do Catalogo para corrigir o erro vermelho
const SelectOrdenacao = ({ valor, setValor }) => (
  <select value={valor} onChange={(e) => setValor(e.target.value)} className="select-tema">
    <option value="padrao">Padrão</option>
    <option value="peso">Maior Peso</option>
    <option value="velocidade">Maior Velocidade</option>
    <option value="aceleracao">Maior Aceleração</option>
    <option value="manuseio">Melhor Manuseio</option>
    <option value="tracao">Maior Tração</option>
    <option value="miniTurbo">Maior Mini-Turbo</option>
  </select>
);

function Catalogo() {
  const [ordemPersonagem, setOrdemPersonagem] = useState('padrao');
  const [ordemCarroceria, setOrdemCarroceria] = useState('padrao');
  const [ordemPneu, setOrdemPneu] = useState('padrao');
  const [ordemPlanador, setOrdemPlanador] = useState('padrao');

  // 1. Estado CORRIGIDO para o filtro de Personagens
  const [filtroPersonagem, setFiltroPersonagem] = useState({
    Pequeno: true, Médio: true, Grande: true
  });

  const togglePersonagem = (tamanho) => {
    setFiltroPersonagem(prev => ({ ...prev, [tamanho]: !prev[tamanho] }));
  };

  // 2. Estado para o filtro de Veículos
  const [filtroVeiculo, setFiltroVeiculo] = useState({
    Kart: true, Moto: true, ATV: true
  });

  const toggleVeiculo = (tipo) => {
    setFiltroVeiculo(prev => ({ ...prev, [tipo]: !prev[tipo] }));
  };

  const ordenarLista = (lista, criterio) => {
    if (criterio === 'padrao') return lista;
    
    return [...lista].sort((a, b) => {
      const valorA = typeof a[criterio] === 'object' ? a[criterio].terra : a[criterio];
      const valorB = typeof b[criterio] === 'object' ? b[criterio].terra : b[criterio];
      return valorB - valorA;
    });
  };

  // 3. CORRIGIDO: Aplicando o filtro nos personagens ANTES de ordenar
  const personagensFiltrados = personagens.filter(p => filtroPersonagem[p.tamanho]);
  const personagensProntos = ordenarLista(personagensFiltrados, ordemPersonagem);
  
  const carroceriasFiltradas = carrocerias.filter(c => filtroVeiculo[c.tipo]);
  const carroceriasProntas = ordenarLista(carroceriasFiltradas, ordemCarroceria);

  const pneusProntos = ordenarLista(pneus, ordemPneu);
  const planadoresProntos = ordenarLista(planadores, ordemPlanador);

  const renderItem = (item) => (
    <div key={item.id} className="card-grid">
      <img src={item.imagem} alt={item.nome} />
      <h4>{item.nome}</h4>
      
      <div className="status-detalhados">
        <div className="linha-status"><span>Velocidade:</span> <b>{item.velocidade?.terra}/{item.velocidade?.agua}/{item.velocidade?.ar}/{item.velocidade?.gravidade}</b></div>
        <div className="linha-status"><span>Aceleração:</span> <b>{item.aceleracao}</b></div>
        <div className="linha-status"><span>Peso:</span> <b>{item.peso}</b></div>
        <div className="linha-status"><span>Manuseio:</span> <b>{item.manuseio?.terra}/{item.manuseio?.agua}/{item.manuseio?.ar}/{item.manuseio?.gravidade}</b></div>
        <div className="linha-status"><span>Tração:</span> <b>{item.tracao}</b></div>
        <div className="linha-status"><span>Mini-Turbo:</span> <b>{item.miniTurbo}</b></div>
        <div className="linha-status"><span>Invencibilidade:</span> <b>{item.invencibilidade}</b></div>
      </div>
    </div>
  );

  return (
    <div className="pagina-catalogo">
      
      <div className="header-secao-inline">
        <h2>Personagens</h2>
        <div className="controles-inline">
          {/* 4. CORRIGIDO: Variável do checked e chamada da função para o filtroPersonagem */}
          <label className="checkbox-laranja"><input type="checkbox" checked={filtroPersonagem['Pequeno']} onChange={() => togglePersonagem('Pequeno')} /> Pequeno</label>
          <label className="checkbox-laranja"><input type="checkbox" checked={filtroPersonagem['Médio']} onChange={() => togglePersonagem('Médio')} /> Médio</label>
          <label className="checkbox-laranja"><input type="checkbox" checked={filtroPersonagem['Grande']} onChange={() => togglePersonagem('Grande')} /> Grande</label>
          <span className="separador">|</span>
          <label>Ordenar:</label>
          <SelectOrdenacao valor={ordemPersonagem} setValor={setOrdemPersonagem} />
        </div>
      </div>
      <div className="grid-4-colunas">{personagensProntos.map(renderItem)}</div>
      
      <div className="header-secao-inline">
        <h2>Carrocerias</h2>
        <div className="controles-inline">
          <label className="checkbox-laranja"><input type="checkbox" checked={filtroVeiculo.Kart} onChange={() => toggleVeiculo('Kart')} /> Kart</label>
          <label className="checkbox-laranja"><input type="checkbox" checked={filtroVeiculo.Moto} onChange={() => toggleVeiculo('Moto')} /> Moto</label>
          <label className="checkbox-laranja"><input type="checkbox" checked={filtroVeiculo.ATV} onChange={() => toggleVeiculo('ATV')} /> ATV</label>
          <span className="separador">|</span>
          <label>Ordenar:</label>
          <SelectOrdenacao valor={ordemCarroceria} setValor={setOrdemCarroceria} />
        </div>
      </div>
      <div className="grid-4-colunas">{carroceriasProntas.map(renderItem)}</div>

      <div className="header-secao-inline">
        <h2>Pneus</h2>
        <div className="controles-inline">
          <label>Ordenar:</label>
          <SelectOrdenacao valor={ordemPneu} setValor={setOrdemPneu} />
        </div>
      </div>
      <div className="grid-4-colunas">{pneusProntos.map(renderItem)}</div>

      <div className="header-secao-inline">
        <h2>Planadores</h2>
        <div className="controles-inline">
          <label>Ordenar:</label>
          <SelectOrdenacao valor={ordemPlanador} setValor={setOrdemPlanador} />
        </div>
      </div>
      <div className="grid-4-colunas">{planadoresProntos.map(renderItem)}</div>

    </div>
  );
}

export default Catalogo;