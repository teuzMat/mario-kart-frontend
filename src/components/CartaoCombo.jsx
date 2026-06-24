function CartaoCombo({ personagem, carroceria, pneu, planador, statusTotal }) {
  const formatarNumero = (num) => num.toFixed(2).replace('.00', '');

  // Função para não repetir o mesmo código HTML nas 7 barras
  const renderBarra = (nome, valor) => (
    <div className="atributo" key={nome}>
      <span>{nome}: {formatarNumero(valor)}</span>
      <div className="barra-fundo">
        <div className="barra-progresso" style={{ width: `${(valor / 6) * 100}%` }}></div>
      </div>
    </div>
  );

  return (
    <div className="card-combo">
      <div className="card-header">
        <div className="grupo-imagens-combo">
          <img src={personagem.imagem} alt={personagem.nome} title={personagem.nome} />
          <img src={carroceria.imagem} alt={carroceria.nome} title={carroceria.nome} />
          <img src={pneu.imagem} alt={pneu.nome} title={pneu.nome} />
          <img src={planador.imagem} alt={planador.nome} title={planador.nome} />
        </div>
        <h2>{personagem.nome} + {carroceria.nome}</h2>
      </div>

      <div className="card-body">
        <h3>Status Finais do Combo</h3>
        {renderBarra("Velocidade", statusTotal.velocidade)}
        {renderBarra("Aceleração", statusTotal.aceleracao)}
        {renderBarra("Peso", statusTotal.peso)}
        {renderBarra("Manuseio", statusTotal.manuseio)}
        {renderBarra("Tração", statusTotal.tracao)}
        {renderBarra("Mini-Turbo", statusTotal.miniTurbo)}
        {renderBarra("Invencibilidade", statusTotal.invencibilidade)}
      </div>
    </div>
  );
}

export default CartaoCombo;