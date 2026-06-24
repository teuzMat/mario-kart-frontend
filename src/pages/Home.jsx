import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pagina-home">
      <h1>Mario Kart 8 Deluxe: O Guia Definitivo</h1>

      <div className="card-info">
        <h2>🏎️ A Origem de um Fenômeno</h2>
        <p>Lançado originalmente em 2014 para o Wii U, <strong>Mario Kart 8</strong> revolucionou a franquia ao introduzir a mecânica de antigravidade, permitindo que os pilotos corressem pelas paredes, tetos e pistas distorcidas.</p>
        <p>Em 2017, a Nintendo lançou <strong>Mario Kart 8 Deluxe</strong> para o Nintendo Switch. Esta versão definitiva incluiu todas as DLCs anteriores, novos personagens e um Modo Batalha totalmente reformulado. Hoje, é o jogo mais vendido da história do Nintendo Switch.</p>
      </div>

      <div className="card-info">
        <h2>⚙️ Mecânicas de Corrida</h2>
        <ul className="lista-mecanicas">
          <li><strong>Antigravidade:</strong> Ao colidir com outros pilotos ou obstáculos especiais, você ganha um pequeno impulso de velocidade (Spin Boost).</li>
          <li><strong>Adaptação de Terreno:</strong> A física do seu veículo muda drasticamente na terra, água, ar e gravidade.</li>
          <li><strong>Dois Itens Simultâneos:</strong> A versão Deluxe permite carregar dois itens ao mesmo tempo, adicionando uma camada de estratégia.</li>
          <li><strong>Ultra Mini-Turbo:</strong> Realizar drifts precisos possui três níveis de força (Azul, Laranja e Roxo).</li>
        </ul>
      </div>

      <div className="card-info">
        <h2>📊 Por que a montagem do Kart importa?</h2>
        <p>Por trás dos visuais coloridos, Mario Kart 8 possui uma matemática complexa. O seu desempenho não depende apenas de quão bem você pilota, mas sim da <strong>combinação de peças</strong> que você escolhe.</p>
        
        <div className="grid-atributos-home">
          <div className="atributo-box"><h4>Velocidade</h4><p>Determina o limite máximo de velocidade em retas.</p></div>
          <div className="atributo-box"><h4>Aceleração</h4><p>O quão rápido você atinge a velocidade máxima.</p></div>
          <div className="atributo-box"><h4>Peso</h4><p>Karts pesados empurram os leves para fora da pista.</p></div>
          <div className="atributo-box"><h4>Manuseio</h4><p>O quão fechadas podem ser as suas curvas.</p></div>
          <div className="atributo-box"><h4>Tração</h4><p>Essencial para pistas com gelo ou areia.</p></div>
          <div className="atributo-box"><h4>Mini-Turbo</h4><p>Define a força e a duração do seu drift.</p></div>
        </div>

        <div className="area-chamada">
          <p>Pronto para encontrar a combinação perfeita para o seu estilo de jogo?</p>
          <Link to="/builder" className="btn-tema btn-grande">Acessar o Combo Builder</Link>
        </div>
      </div>

      <div className="card-info">
        <h2>👨‍💻 Sobre o Projeto e Equipe</h2>
        <p>
          Esta aplicação foi desenvolvida como um trabalho acadêmico de transição tecnológica. 
          O desafio consistiu em refatorar um projeto legado em JavaScript puro (Vanilla JS), focado em um e-commerce, 
          para uma aplicação moderna e modular baseada em <strong>React (SPA/MPA)</strong>, aproveitando o sistema matemático e o banco de dados do Mario Kart 8.
        </p>
        
        <div className="equipe-grid">
          <div className="equipe-membro">
            <img src="/img/character/44_BotW_Link_Icon.png" alt="Avatar Davi" className="avatar-equipe" />
            <div className="dados-membro">
              <strong>Davi Neves</strong>
              <span>Matrícula: 24214290067</span>
            </div>
          </div>
          
          <div className="equipe-membro">
            <img src="/img/character/28_Bowser_Icon.png" alt="Avatar Gabriel" className="avatar-equipe" />
            <div className="dados-membro">
              <strong>Gabriel Candido</strong>
              <span>Matrícula: 24214290023</span>
            </div>
          </div>

          <div className="equipe-membro">
            <img src="/img/character/26_Waluigi_Icon.png" alt="Avatar Gustavo" className="avatar-equipe" />
            <div className="dados-membro">
              <strong>Gustavo Noronha</strong>
              <span>Matrícula: 24214290006</span>
            </div>
          </div>

          <div className="equipe-membro">
            <img src="/img/character/12_ShyGuy_Icon.png" alt="Avatar Mateus" className="avatar-equipe" />
            <div className="dados-membro">
              <strong>Mateus Cantanhêde</strong>
              <span>Matrícula: 24214290038</span>
            </div>
          </div>

          <div className="equipe-membro">
            <img src="/img/character/01_Mario_Icon.png" alt="Avatar Pedro" className="avatar-equipe" />
            <div className="dados-membro">
              <strong>Pedro Henrique Ferreira</strong>
              <span>Matrícula: 24214290003</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;