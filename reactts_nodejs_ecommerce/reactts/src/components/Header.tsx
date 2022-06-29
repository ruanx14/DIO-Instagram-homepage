import styled from "styled-components";
import {Envelope, User, Phone, CurrencyDollarSimple, MapPin, ShoppingCart, List} from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const DivInfo = styled.div`
    height: 4vh;
    background-color: rgba(7, 8, 23, 1);
    width: 100%;
    @media screen and (max-width:700px){
        display: none;
    }
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

const DivSearch = styled.div`
    height: 12vh;
    background-color: rgba(27, 27, 30, 1); 
    display: flex;
    img{
        align-self: center;
    }
    #svgCart{
        align-self: center;
    }
    @media screen and (max-width:700px){
        img{
            display: none;
        }
        #svgCart{
            display: none;
        }

    }
`;
const DivInfoContent = styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto; 
    justify-content: space-evenly;
    img{
        width: 15rem;
        //12vh
        height: 10vh;
    }
`;
const FormSearch = styled.form`
    align-self: center;
    input{
        padding: 10px;
        margin-right: 5px;
        width: 400px;
    }
    button{
        border: 1px solid #b63a3a; ;
        background-color: rgba(32,32,32,0.1);
        color: #dbdbdb;
        font-weight: bold;
        width: 100px;
        padding: 10px;
        border-radius: 2px;
    }
    button:hover{
        cursor: pointer;
        background-color: #b63a3a; 
    }
    @media screen and (max-width:700px){
        input{
            width: 200px;
        }
    }
`;

const Nav = styled.nav`
    height: 5vh;
    background-color: white;
    display: flex;
    width: 100%;
    box-shadow: 2px 2px 2px grey;
    border-top: 3px solid rgba(225, 15, 30, 1);
    #menuButton{
        display: none;
    }
    @media screen and (max-width:700px){
        #menuButton{
            display: block;
        }
    }
`;
const NavUl = styled.ul`
    list-style: none;
    display: flex;
    z-index: 2;
    width: 70%;
    margin: 0 auto;
    transition: transform 0.3s ease-in-out;
    @media screen and (max-width:700px){
        flex-direction: column;
        position: absolute;
        margin-top: 5vh;
        margin-left: -5vh;
        width: 100%;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        border-bottom: 1px solid black;
    }
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
    @media screen and (max-width:700px){
        width: 100%;
        height: 48px;
        &:nth-child(odd){
        background-color: #fafafad1;
        }
        &:nth-child(even){
            background-color: #e7e7e7e4;
        }
    }
   
`;
const Clickable = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: 1;
    display: none;
    @media screen and (max-width:700px){
        //?
    }
`
//react-router-dom Link
const LinkStyled = styled(Link)`
    color: black;
`;

function Header() {
    let logged = 'My Account';
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        const clickable = document.querySelector("#clickable");
        if(open){
            setOpen(false);
            if(clickable){
                clickable.style.display = "none";
                clickable.addEventListener("click", () => {
                    setOpen(false);
                });
            }
        }else{
            setOpen(true);
            if(clickable!=undefined){
                clickable.style.display = "block";
                clickable.addEventListener("click", () => {
                    setOpen(false);
                    clickable.style.display = "none";
                });
            }
        }

    }
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
                <img src="./src/assets/default_logo.png" alt="default"></img> 
                <FormSearch>
                    <input type="text" placeholder="O que você procura?" />
                    <button type="submit">Procurar</button>
                </FormSearch>
                <ShoppingCart id="svgCart" size={50} color="white" />
            </DivInfoContent>
        </DivSearch>

        <Nav>
            <List id="menuButton" onClick={handleClick} size={32} color="black" style={{alignSelf: 'center', padding: '5px'}}  />
            <NavUl open={open}>
                <NavLi><LinkStyled to="/">Inicio</LinkStyled></NavLi>
                <NavLi><LinkStyled to="/products">Produtos</LinkStyled></NavLi>
                <NavLi><LinkStyled to="/cart">Carrinho</LinkStyled></NavLi>
                <NavLi><LinkStyled onClick={() => {
                    setOpen(false);
                }}to="#footerInfo">Sobre</LinkStyled></NavLi>
            </NavUl>
        </Nav>
        <Clickable id="clickable"></Clickable>
     </header>
  )
}

export default Header
