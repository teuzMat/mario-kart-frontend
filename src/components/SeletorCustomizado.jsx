import { useState } from 'react';

function SeletorCustomizado({ label, opcoes, itemSelecionado, setItemSelecionado }) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="seletor-customizado">
      <label>{label}</label>
      
      {/* Botão principal que mostra o item selecionado atual */}
      <div className="seletor-header" onClick={() => setAberto(!aberto)}>
        <div className="seletor-item-info">
          <img src={itemSelecionado.imagem} alt={itemSelecionado.nome} className="seletor-img" />
          <span>{itemSelecionado.nome}</span>
        </div>
        <span className="seta">{aberto ? '▲' : '▼'}</span>
      </div>

      {/* Lista suspensa que só aparece se 'aberto' for true */}
      {aberto && (
        <ul className="seletor-lista">
          {opcoes.map((opcao) => (
            <li 
              key={opcao.id} 
              className={itemSelecionado.id === opcao.id ? 'selecionado' : ''}
              onClick={() => {
                setItemSelecionado(opcao);
                setAberto(false); // Fecha o menu ao clicar
              }}
            >
              <img src={opcao.imagem} alt={opcao.nome} className="seletor-img" />
              <span>{opcao.nome}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SeletorCustomizado;