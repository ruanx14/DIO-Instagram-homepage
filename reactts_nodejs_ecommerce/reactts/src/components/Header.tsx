import styled from "styled-components";
import {Envelope, User, Phone, CurrencyDollarSimple, MapPin, Calculator} from "phosphor-react";
import { Link } from "react-router-dom";


const DivInfo = styled.div`
    height: 4vh;
    background-color: rgba(7, 8, 23, 1);
    width: 100%;
`;
const DivInfoBetween = styled.div`
    display: flex;
    margin: 0 auto;
    width: 70%;
    justify-content: space-between;
    height: 100%;
`;
const InfoUl = styled.ul`
    list-style: none;
    display: flex;
`;
const InfoLi = styled.li`
    margin: 0px 15px;
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    color: white;
`;


const DivInfoContent = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
`;
const DivSearch = styled.div`
    height: 12vh;
    background-color: rgba(27, 27, 30, 1); 
    display: flex;
    width: 100%;
`;

const FormSearch = styled.form`
    background-color: red;
`;








const Nav = styled.nav`
    height: 5vh;
    background-color: white;
    display: flex;
    width: 100%;
    box-shadow: 2px 2px 2px grey;
    border-top: 3px solid rgba(225, 15, 30, 1);
`;
const NavUl = styled.ul`
    list-style: none;
    display: flex;
    width: 70%;
    margin: 0 auto;
`;
const NavLi = styled.li`
    width: 150px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: white;
    text-align: center;
    font-size: 1.2rem;
    &:hover{
        cursor: pointer;
    }
    &:after{
        content: "";
        width: 0%;
        height: 2px;
        background-color: #464646;
        transition: 0.2s all;
    }
    &:hover::after{
        width: 70%;
    }
`;
//react-router-dom Link
const LinkStyled = styled(Link)`
    color: black;
`;

function Header() {
    let logged = 'My Account';
    
  return (
     <header>
        <DivInfo>
                <DivInfoBetween>
                    <InfoUl>
                        <InfoLi>
                        <Phone size={20} style={{marginRight: '2px'}} />
                            Number
                            </InfoLi>
                        <InfoLi>
                        <Envelope size={20} style={{marginRight: '2px'}} />
                            email@enterprise.com
                            </InfoLi>
                        <InfoLi>
                        <MapPin size={20} style={{marginRight: '2px'}} />
                            Av Somewhere, 117
                            </InfoLi>
                    </InfoUl>

                    <InfoUl>
                        <InfoLi>
                        <CurrencyDollarSimple size={20} style={{marginRight: '2px'}} />
                            R$ 0,0
                            </InfoLi> 
                        <InfoLi>
                            <User size={20} style={{marginRight: '2px'}} />
                            <Link to="myAccount" >{logged}</Link>
                        </InfoLi>
                    </InfoUl>
                    </DivInfoBetween>
        </DivInfo>
        
        <DivSearch>
            <DivInfoContent>
                <img  style={{maxHeight: 'calc(100%/3)'} } src="./src/assets/default.jpg" alt="default"></img> 
                <FormSearch>

                </FormSearch>
            </DivInfoContent>
        </DivSearch>
        <Nav>
            <NavUl>
                <NavLi><LinkStyled to="/">Inicio</LinkStyled></NavLi>
                <NavLi><LinkStyled to="/products">Produtos</LinkStyled></NavLi>
                <NavLi><LinkStyled to="/cart">Carrinho</LinkStyled></NavLi>
                <NavLi><LinkStyled to="#footerInfo">Sobre</LinkStyled></NavLi>
            </NavUl>
        </Nav>
     </header>
  )
}

export default Header
