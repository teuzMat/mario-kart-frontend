function CartaoCombo({ personagem, carroceria, pneu, planador, statusTotal }) {
  // Função para garantir que o número tenha no máximo 2 casas decimais (ex: 4.75)
  const formatarNumero = (num) => num.toFixed(2).replace('.00', '');

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
        
        {/* A barra máxima no jogo é 6. Dividimos por 6 para achar a porcentagem de preenchimento CSS */}
        <div className="atributo">
          <span>Velocidade: {formatarNumero(statusTotal.velocidade)}</span>
          <div className="barra-fundo"><div className="barra-progresso" style={{ width: `${(statusTotal.velocidade / 6) * 100}%` }}></div></div>
        </div>

        <div className="atributo">
          <span>Aceleração: {formatarNumero(statusTotal.aceleracao)}</span>
          <div className="barra-fundo"><div className="barra-progresso" style={{ width: `${(statusTotal.aceleracao / 6) * 100}%` }}></div></div>
        </div>

        <div className="atributo">
          <span>Peso: {formatarNumero(statusTotal.peso)}</span>
          <div className="barra-fundo"><div className="barra-progresso" style={{ width: `${(statusTotal.peso / 6) * 100}%` }}></div></div>
        </div>

        <div className="atributo">
          <span>Dirigibilidade: {formatarNumero(statusTotal.dirigibilidade)}</span>
          <div className="barra-fundo"><div className="barra-progresso" style={{ width: `${(statusTotal.dirigibilidade / 6) * 100}%` }}></div></div>
        </div>
      </div>
    </div>
  );
}

export default CartaoCombo;