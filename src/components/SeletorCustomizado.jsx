function SeletorCustomizado({ label, opcoes, itemSelecionado, setItemSelecionado, isAberto, onToggle }) {
  return (
    <div className="seletor-customizado">
      <label>{label}</label>
      
      <div className="seletor-header" onClick={onToggle}>
        <div className="seletor-item-info">
          <img src={itemSelecionado.imagem} alt={itemSelecionado.nome} className="seletor-img" />
          <span>{itemSelecionado.nome}</span>
        </div>
        <span className="seta">{isAberto ? '▲' : '▼'}</span>
      </div>

      {isAberto && (
        <ul className="seletor-lista">
          {opcoes.map((opcao) => (
            <li 
              key={opcao.id} 
              className={itemSelecionado.id === opcao.id ? 'selecionado' : ''}
              onClick={() => {
                setItemSelecionado(opcao);
                onToggle();
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