import { useState } from 'react';
import { personagens, carrocerias, pneus, planadores } from '../dados';
import CartaoCombo from '../components/CartaoCombo';
import SeletorCustomizado from '../components/SeletorCustomizado';

function ComboBuilder() {
  const [personagemSel, setPersonagemSel] = useState(personagens[0]);
  const [carroceriaSel, setCarroceriaSel] = useState(carrocerias[0]);
  const [pneuSel, setPneuSel] = useState(pneus[0]);
  const [planadorSel, setPlanadorSel] = useState(planadores[0]);

  // Estado que controla qual dropdown está aberto no momento
  const [menuAberto, setMenuAberto] = useState(null);

  const toggleMenu = (menuNome) => {
    // Se clicar no mesmo que já está aberto, ele fecha (null). Se clicar em outro, ele abre o outro.
    setMenuAberto(menuAberto === menuNome ? null : menuNome);
  };

  const calcularAtributo = (p, c, pn, pl) => {
    const soma = p + c + pn + pl;
    return (soma + 3) / 4;
  };

  // Matemática atualizada para ler os atributos de "terra" e os novos status da tabela
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
    <div className="conteudo-principal">
      <section className="painel-selecao">
        <SeletorCustomizado 
          label="Personagem" 
          opcoes={personagens} 
          itemSelecionado={personagemSel} 
          setItemSelecionado={setPersonagemSel} 
          isAberto={menuAberto === 'personagem'}
          onToggle={() => toggleMenu('personagem')}
        />
        <SeletorCustomizado 
          label="Carroceria" 
          opcoes={carrocerias} 
          itemSelecionado={carroceriaSel} 
          setItemSelecionado={setCarroceriaSel} 
          isAberto={menuAberto === 'carroceria'}
          onToggle={() => toggleMenu('carroceria')}
        />
        <SeletorCustomizado 
          label="Pneus" 
          opcoes={pneus} 
          itemSelecionado={pneuSel} 
          setItemSelecionado={setPneuSel} 
          isAberto={menuAberto === 'pneu'}
          onToggle={() => toggleMenu('pneu')}
        />
        <SeletorCustomizado 
          label="Planador" 
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
  );
}

export default ComboBuilder;