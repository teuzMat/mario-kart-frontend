import { useState } from 'react';

// Note que aqui usamos '../' porque saímos da pasta 'pages' para acessar a raiz 'src'
import { personagens, carrocerias, pneus, planadores } from '../dados';
import CartaoCombo from '../components/CartaoCombo';
import SeletorCustomizado from '../components/SeletorCustomizado';

function ComboBuilder() {
  // 1. Estados para guardar qual item o usuário escolheu (começa com o primeiro de cada lista)
  const [personagemSel, setPersonagemSel] = useState(personagens[0]);
  const [carroceriaSel, setCarroceriaSel] = useState(carrocerias[0]);
  const [pneuSel, setPneuSel] = useState(pneus[0]);
  const [planadorSel, setPlanadorSel] = useState(planadores[0]);

  // 2. A FÓRMULA MATEMÁTICA DO JOGO: (Soma + 3) / 4
  const calcularAtributo = (p, c, pn, pl) => {
    const soma = p + c + pn + pl;
    return (soma + 3) / 4;
  };

  // 3. Calculando os status totais aplicando a fórmula em cada atributo
  const statusTotal = {
    velocidade: calcularAtributo(
      personagemSel.velocidade, carroceriaSel.velocidadeG, pneuSel.velocidadeG, planadorSel.velocidadeG
    ),
    aceleracao: calcularAtributo(
      personagemSel.aceleracao, carroceriaSel.aceleracao, pneuSel.aceleracao, planadorSel.aceleracao
    ),
    peso: calcularAtributo(
      personagemSel.peso, carroceriaSel.peso, pneuSel.peso, planadorSel.peso
    ),
    dirigibilidade: calcularAtributo(
      personagemSel.dirigibilidade, carroceriaSel.dirigibilidadeG, pneuSel.dirigibilidadeG, planadorSel.dirigibilidadeG
    ),
  };

  // 4. Desenhando a tela na página
  return (
    <div className="conteudo-principal">
      
      {/* Lado Esquerdo: Os Filtros Suspensos */}
      <section className="painel-selecao">
        <SeletorCustomizado 
          label="Personagem" 
          opcoes={personagens} 
          itemSelecionado={personagemSel} 
          setItemSelecionado={setPersonagemSel} 
        />
        <SeletorCustomizado 
          label="Carroceria" 
          opcoes={carrocerias} 
          itemSelecionado={carroceriaSel} 
          setItemSelecionado={setCarroceriaSel} 
        />
        <SeletorCustomizado 
          label="Pneus" 
          opcoes={pneus} 
          itemSelecionado={pneuSel} 
          setItemSelecionado={setPneuSel} 
        />
        <SeletorCustomizado 
          label="Planador" 
          opcoes={planadores} 
          itemSelecionado={planadorSel} 
          setItemSelecionado={setPlanadorSel} 
        />
      </section>

      {/* Lado Direito: O Cartão de Resultados */}
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