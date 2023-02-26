import styled from "styled-components";
import Background1 from '../assets/BG1.png';

export const Section = styled.section`
background-image: url(${Background1}); 
height: 100vh;
`

export const Navbar = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
  img {
    width: 20rem
  }
`
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  background-color: #8710c3;
  border-radius: 5rem;
  gap: 3rem;
  padding: 1rem;
`;

export const NavItem = styled.li`
  font-size: 1.2rem;
  font-weight: 300;
  color: #ffffff;
  cursor: pointer;

  &:hover {
  background-color: #ffffff;
  color: #8710c3;
  }
`;

export const HomeText = styled.header`
padding: 4rem;
color: #ffffff;

h1{
  font-size: 2.0rem;
  font-weight:300;
  width: 35rem;
}
p{
  margin-top: 2rem;
  font-size: 1rem;
  font-weight:300;
  width: 25rem;
}
`