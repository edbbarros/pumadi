import Global from "./styles/Global";
import { HomeText, Navbar, NavItem, NavList, Section } from "./styles/Styles";
import logo from './assets/logo.svg'
import { PrimaryFontText } from "./styles/Fonts";

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

        <HomeText>
          <h1>SOLUÇÕES <strong>CRIATIVAS</strong> E <strong>FUNCIONAIS</strong> PARA O SEU NEGÓCIO
          </h1>
          <p>Somos uma Agência de Marketing especializada em criação e desenvolvimento denaming,
            branding e tudo mais que uma empresa precisa para se relacionar da melhor forma com o
            mercado</p>
          {/* <button>saiba mais</button> */}
        </HomeText>


      </Section>
    </>
  )
}

export default App;