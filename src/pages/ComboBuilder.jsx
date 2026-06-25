import { useState } from 'react';
import { personagens, carrocerias, pneus, planadores } from '../dados';
import CartaoCombo from '../components/CartaoCombo';
import SeletorCustomizado from '../components/SeletorCustomizado';

function ComboBuilder() {
  const [personagemSel, setPersonagemSel] = useState(personagens[0]);
  const [carroceriaSel, setCarroceriaSel] = useState(carrocerias[0]);
  const [pneuSel, setPneuSel] = useState(pneus[0]);
  const [planadorSel, setPlanadorSel] = useState(planadores[0]);

  const [menuAberto, setMenuAberto] = useState(null);

  const toggleMenu = (menuNome) => {
    setMenuAberto(menuAberto === menuNome ? null : menuNome);
  };

  const calcularAtributo = (p, c, pn, pl) => {
    return p + c + pn + pl;
  };

  const statusTotal = {
    velocidade: calcularAtributo(personagemSel.velocidade.terra, carroceriaSel.velocidade.terra, pneuSel.velocidade.terra, planadorSel.velocidade.terra),
    aceleracao: calcularAtributo(personagemSel.aceleracao, carroceriaSel.aceleracao, pneuSel.aceleracao, planadorSel.aceleracao),
    peso: calcularAtributo(personagemSel.peso, carroceriaSel.peso, pneuSel.peso, planadorSel.peso),
    manuseio: calcularAtributo(personagemSel.manuseio.terra, carroceriaSel.manuseio.terra, pneuSel.manuseio.terra, planadorSel.manuseio.terra),
    tracao: calcularAtributo(personagemSel.tracao, carroceriaSel.tracao, pneuSel.tracao, planadorSel.tracao),
    miniTurbo: calcularAtributo(personagemSel.miniTurbo, carroceriaSel.miniTurbo, pneuSel.miniTurbo, planadorSel.miniTurbo),
    invencibilidade: calcularAtributo(personagemSel.invencibilidade, carroceriaSel.invencibilidade, pneuSel.invencibilidade, planadorSel.invencibilidade),
  };

  return (
    <div className="pagina-builder">
      <div className="header-builder">
        <h2>Oficina de Karts</h2>
        <p>Selecione suas peças abaixo para montar o combo perfeito e analisar a performance em tempo real de como você se sairá em uma partida de MK8.</p>
      </div>

      <div className="conteudo-principal">
        <section className="painel-selecao">
          <SeletorCustomizado
            label="Personagem: "
            opcoes={personagens}
            itemSelecionado={personagemSel}
            setItemSelecionado={setPersonagemSel}
            isAberto={menuAberto === 'personagem'}
            onToggle={() => toggleMenu('personagem')}
          />
          <SeletorCustomizado
            label="Carroceria: "
            opcoes={carrocerias}
            itemSelecionado={carroceriaSel}
            setItemSelecionado={setCarroceriaSel}
            isAberto={menuAberto === 'carroceria'}
            onToggle={() => toggleMenu('carroceria')}
          />
          <SeletorCustomizado
            label="Pneus: "
            opcoes={pneus}
            itemSelecionado={pneuSel}
            setItemSelecionado={setPneuSel}
            isAberto={menuAberto === 'pneu'}
            onToggle={() => toggleMenu('pneu')}
          />
          <SeletorCustomizado
            label="Planador: "
            opcoes={planadores}
            itemSelecionado={planadorSel}
            setItemSelecionado={setPlanadorSel}
            isAberto={menuAberto === 'planador'}
            onToggle={() => toggleMenu('planador')}
          />
        </section>

        <section className="painel-resultado">
          <CartaoCombo
            personagem={personagemSel}
            carroceria={carroceriaSel}
            pneu={pneuSel}
            planador={planadorSel}
            statusTotal={statusTotal}
          />
        </section>
      </div>
    </div>
  );
}

export default ComboBuilder;