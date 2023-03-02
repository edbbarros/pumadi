import Global from "./styles/Global";
import { About, AboutMkt, AboutMkt1, Card, Card1, Card2, Card3, Card4, HomeCard, HomeText, Navbar, NavItem, NavList, Section, Sectionfooter, SectionForm } from "./styles/Styles";
import { PrimaryFontText } from "./styles/Fonts";
import { logo, branding, estrategia, execucao, midiaOnline, propaganda, design, webLogo, Marcas } from './Index.jsx';

const App = () => {
  return (
    <>
      <Global />
      <PrimaryFontText />
      <Section>
        <Navbar>
          <img src={logo} alt="Logo" />
          <NavList>
            <NavItem>Inicio</NavItem>
            <NavItem>O que fazemos</NavItem>
            <NavItem>Cases</NavItem>
            <NavItem>Equipe</NavItem>
            <NavItem>Contato</NavItem>
          </NavList>
        </Navbar>

        <HomeText >
          <h1>SOLUÇÕES <strong>CRIATIVAS</strong> E <strong>FUNCIONAIS</strong> PARA O SEU NEGÓCIO
          </h1>
          <p>Somos uma Agência de Marketing especializada em criação e desenvolvimento denaming,
            branding e tudo mais que uma empresa precisa para se relacionar da melhor forma com o
            mercado</p>
          {/* <button>saiba mais</button> */}

        </HomeText>
      </Section>

      <HomeCard>
        <h1>NA PUMADI UNIMOS ESSES <strong>3 PILARES</strong></h1>
        <h3>
          Para gerar resultados reais para nossos clientes
        </h3>
      </HomeCard>

      <Card>
        <div className="containerArea">
          <div className="container">
            <div className="circle">
              <img src={branding} alt="Image branding" />
            </div>
            <div className="container2">
              <h1>BRANDING</h1>
              <h3>reproduzimos através de recursos visuais as
                ideias e comportamento da sua empresa que
                muitas vezes não são possíveis transmitir com
                palavras.</h3>
            </div>
          </div>

          <div className="container">
            <div className="circle">
              <img src={estrategia} alt="Image branding" />
            </div>
            <div className="container2">
              <h1>ESTRATÉGIA</h1>
              <h3>A estratégia surge para gerenciar as ações e
                objetivos definidos para seu negócio,
                considerando os ambientes que envolvem a
                organização,mantendo o trabalho alinhado
                aos objetivos.</h3>
            </div>
          </div>
          <div className="container">
            <div className="circle">
              <img src={execucao} alt="Image branding" />
            </div>
            <div className="container2">
              <h1>EXECUÇÃO</h1>
              <h3>Execução é fundamental para a estratégia, e
                deve moldá-la. Nenhuma estratégia que valha
                a pena pode ser planejada sem levarem
                conta a habilidade da organização em
                executá-la.</h3>
            </div>
          </div>
        </div>
      </Card>
      <About>
        <h1>O QUE <strong>FAZEMOS?</strong></h1>
      </About>
      <Card1>
        <div className="containerArea1">

          <div className="container1">
            <img src={midiaOnline} alt="Image branding" />
            <h1>MÍDIA ONLINE</h1>
            <h3>E-mail marketing, Banners,
              Estratégia de Marketing Online,
              Google AdGestão de Mídias Sociais:
              Facebook, Instagram, Linkedin, Blogs.</h3>
          </div>

          <div className="container1">
            <img src={propaganda} alt="Image branding" />
            <h1>PROPAGANDA</h1>
            <h3>Planejamento de Comunicação, Planejamento de Mídia. </h3>
          </div>

          <div className="container1">
            <img src={design} alt="Image branding" />
            <h1>DESIGN</h1>
            <h3>Identidade visual, key visual, lançamentos,  Social media, cria</h3>
          </div>

          <div className="container1">
            <img src={webLogo} alt="Image branding" />
            <h1>DESENVOLVIMENTO WEB</h1>
            <h3>Sites, Landing Pages E-commerce, Automações</h3>
          </div>
        </div>
      </Card1>

      <Card2>
        <div className="containerCardLarge">
          <div className="cardLarge border">
            <h1>EQUIPE <strong>PREPARADA</strong> E <strong>
              PRONTA</strong> PARA FAZER SEU NEGÓCIO DECOLAR!</h1>
            <button>Quero conhecer</button>
          </div>
        </div>
      </Card2>

      <AboutMkt>
        <h1> CLIENTES QUE JÁ PASSARAM PELA PUMADI </h1>
        <h3> Nossos cases de sucesso </h3>
      </AboutMkt>

      <Card3>
        <div className="containerCardLarge1">
          <div className="cardLarge1 border1">
            <img src={Marcas} alt="Marcas dos clientes" />
          </div>
        </div>
      </Card3>

      <AboutMkt1>
        <h1>NOSSOS PLANOS</h1>
      </AboutMkt1>

      <Card4>
        <div className="ContainerArea1">
          <div className="card1">
            <div className="rectangle">
              <h1>BÁSICO</h1>
            </div>
            <div className="card2">
              <h1><strong>R$299,</strong>00<sub>/MÊS</sub></h1>
            </div>
          </div>
          <div className="card1">
            <div className="rectangle">
              <h1>INTERMEDIÁRIO</h1>
            </div>
            <div className="card2">
              <h1><strong>R$799,</strong>00<sub>/MÊS</sub></h1>
            </div>
          </div>
          <div className="card1">
            <div className="rectangle">
              <h1>COMPLETO</h1>
            </div>
            <div className="card2">
              <h1><strong>R$1249,</strong>00<sub>/MÊS</sub></h1>
            </div>
          </div>
        </div>

      </Card4>

      {/* <CatButton>
        <button>QUERO CONHECER</button>
      </CatButton> */}

      <SectionForm>
        <h1>FAÇA O SEU NEGÓCIO DECOLAR <strong>
          AGORA!</strong></h1>
        <div className="containerForm border">
          <label htmlFor="">
            Primeiro nome
          </label>
          <input type="text" placeholder="Digite seu nome" />

          <label htmlFor="">
            E-mail
          </label>
          <input type="text" placeholder="Digite seu e-mail" />

          <label htmlFor="">
            DDD + Whatsapp
          </label>
          <input type="text" placeholder="Digite seu número" />

          <label htmlFor="">
            Cidade
          </label>
          <input type="text" placeholder="Digite sua cidade" />

          <label htmlFor="">
            Plano
          </label>
          <select name="" id="">
            <option>Selecione o seu plano</option>
            <option value=""> Básico</option>
            <option value=""> Intermediário</option>
            <option value=""> Completo</option>
          </select>

          <button>
            Solicitar Agora!
          </button>

        </div>
      </SectionForm>

      <Sectionfooter id="Inicio">
        <div className="containerFooter">
          <ul>
            <li><strong>Contato</strong></li>
            <li>Pina | Recife - PE</li>
            <li>(81) 4042-9575 | (81) 98220-7312</li>
            <li>mkt.pumadi@gmail.com</li>
            <li>CNPJ: 49.102.568/0001-02</li>
          </ul>

          <img src={logo} alt="Logo" />
        </div>
        <hr />
        <div className="Copyright">
          <p> &copy; 2023 Desenvolvido por: Pumadi</p>
        </div>
      </Sectionfooter>

    </>


  )
}

export default App;