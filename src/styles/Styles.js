import styled from "styled-components";
import Background1 from '../assets/BG1.png';
import { Background2 } from '../Index.jsx';


export const Section = styled.section`
background-image: url(${Background1}); 
background-repeat: no-repeat;
background-size: 100% 100%;
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
  gap: 1rem;

`;

export const NavItem = styled.li`
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  color: #ffffff;
  cursor: pointer;

  &:hover {
  background-color: #ffffff;
  color: #8710c3;
  border-radius: 5rem;
  font-weight: bold;
  }
`;

export const HomeText = styled.header`
padding: 4rem;
color: #ffffff;

  h1{
    font-size: 2rem;
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

export const HomeCard = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  h1{
    font-size: 2.5rem;
    font-weight:300;

}
  h3{
    margin-top: 1rem;
    font-size: 1rem;
    font-weight:300;
    margin-bottom: 5rem;
  }
`

export const Card = styled.section`
.containerArea{
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  color: #8710c3;
  }
.container{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 30rem;
  width: 25rem;
  background-color: #8710c3;
  border-radius: 2rem;
  margin-bottom: 10rem;
  position: relative;
    .circle{
        display:flex;
        align-items: center;
        justify-content: center;
        width: 13rem;
        height: 13rem;
        border-radius: 50%;
        background-color: #660099;
        position: absolute;
        top: 25px;
          img {
            height: 8rem;
            width: 8rem;
          }
    }
  }

.container2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 25rem;
  background-color: #ffffff;
  border-radius: 2rem;
  }
   h1{
    margin-top:5rem;
    font-size: 2rem;
    font-weight: 700;
  }
   h3{    
    margin-top: 1rem;
    font-size: 1rem;
    font-weight:300;
    width: 20rem;
  }
`
export const About = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
   h1{
    /* margin-top:5rem; */
    font-size: 2rem;
    font-weight: 700;
  }
`

export const Card1 = styled.section`
.containerArea1{
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #ffffff;

}

.container1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 20rem;
  /* margin-bottom: 2rem; */

    img {
      height: 6rem;
      width: 6rem;
    }
    h1 {
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
  }
    h3 {    
      margin-top: 0.5rem;
      font-size: 0.8rem;
      font-weight: 300;
      width: 13rem;
      /* margin-bottom: 1rem; */

  }
}
`

export const Card2 = styled.section`
  .containerCardLarge{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    margin-bottom: 5rem;
  }

  .cardLarge{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 70rem;
    height: 25rem;
    background-color: #8710c3;
  }

  .border{
    box-shadow: 0.5rem 0.5rem 0px 1px #fff;
    border-radius: 2rem;
  }

  h1{ 
    font-size: 2rem;
    width:40rem;
    margin-bottom: 2rem;
    font-weight: 300;
  }
  button{
    color: #fff;
    width: 15rem;
    background-color: #660099;
    border-style: none;
    border-radius: 4rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 700;
  }
`

export const AboutMkt = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;

    h1{ 
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h3{ 
      font-size: 1rem;
      font-weight: 300;
      margin-bottom: 4rem;
    }
`

export const Card3 = styled.section`
   .containerCardLarge1{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    margin-bottom: 5rem;
  }

  .cardLarge1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 70rem;
    height: 25rem;
    background-color: #fff;
  }

  .border1{
    box-shadow: 0.5rem 0.5rem 0px 1px #8710c3;
    border-radius: 2rem;
  }

  img {
    width: 60rem;
  }
`

export const AboutMkt1 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-bottom: 5rem;
    h1{
      font-size: 2rem;
      font-weight: 700;
    }

`

export const Card4 = styled.section`
  .ContainerArea1{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: 10rem;
      gap: 3rem;
      }

  .card1{
    position: relative;    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 15rem;
    width: 20rem;
    background-color:#8710c3 ;
    border-radius: 3rem;

      .rectangle{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color:#660099;
        width: 17rem;
        height:4rem;
        border-radius: 3rem;
        position: absolute;
        top: 35px;
      }
  }
  .card2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 11.5rem;
    width: 20rem;
    background-color: #ffffff;
    border-radius: 3rem;
      h1{
      color: #660099;
      font-size: 1.8rem;
      font-weight: 700;
    }
  }
  `
// export const CatButton = styled.button`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-bottom: 10rem;

//   button {
//     background-color: #8710c3;
//     color: #fff;
//     border-style: none;
//     width: 10rem;
//     height: 5rem;

//    }
// `

export const SectionForm = styled.section`
background-image: url(${Background2}); 
background-repeat: no-repeat;
background-size:  100% 100%;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

  h1 {
    align-items: center;
    font-size: 4rem;
    font-weight: 300;
    color: #fff;
    width: 40rem;
  }
  .containerForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 42rem;
    width: 33rem;
    background-color: #8710c3;
    border-radius: 3rem;
    margin-bottom: 5rem;

      label {
      align-self:flex-start;
      margin-left: 4rem; 
      font-size: 1.5rem;
      color: #fff;
      font-weight: 700;
    }

    input {
      height: 3rem;
      width: 28rem;
      padding: 1rem;
      font-size:1rem;
      border-radius: 0.5rem;
      border: none;
      color: #fff;
      background-color: #660099;
     
    }

    select { 
      height: 3rem;
      width: 28rem;
      padding: 1rem;
      font-size:1rem;
      border-radius: 0.5rem;
      border: none;
      color: #fff;
      background-color: #660099;
      font-size: 1rem;
      font-weight: 300;
    }
    option {
      font-size: 1rem;
      font-weight: 700;
    }

    button {
      margin-top: 1rem;
    color: #fff;
    width: 15rem;
    background-color: #660099;
    border-style: none;
    border-radius: 4rem;
    height: 2rem;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: 0.2rem 0.2rem 0px 0px #fff;
    }

  }
  .border{
    box-shadow: 0.5rem 0.5rem 0px 0px #fff;
    border-radius: 3rem;
  }
`

export const Sectionfooter = styled.footer`
  .containerFooter {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 5rem;
    color: #fff;

      ul {
        list-style: none;
      }

      li {
        padding: 0.5rem;
      }

      img {
        height:15rem
      }
  }
      hr { 
        margin-bottom: 2rem;
      }

      .Copyright {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: 300;
        margin-bottom: 2rem;
      }

`