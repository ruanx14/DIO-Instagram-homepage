import styled from "styled-components";
import { Link } from "react-router-dom";
import {Envelope, Phone, MapPin} from "phosphor-react";

const DivInfo = styled.div`
    width: 100%;
    background-color: rgba(51, 51, 51, 1);
    display: flex;
    justify-content: center;
    gap: 25px;
    border-top: 3px solid rgba(225, 15, 30, 1);
    height: 300px;
    font-size: 1rem;
    @media screen and (max-width: 700px) {
        font-size: 0.7em;
        gap: 15px;
        padding: 5px;
    }
`
const SectionBody = styled.section`
    max-height: 80%;
    display: flex;
    width: 200px;
    gap: 20px;
    color: rgba(197, 197, 200, 1);
    flex-direction: column;
    &:nth-child(1){
        p{
            margin: 0;
        }
    }
    
`
const LinkStyled = styled(Link)`
    &:hover{
        color: rgba(225, 15, 30, 1);
        cursor: pointer;
    }
`
const DivLast = styled.div`
    height: 160px;
    width: 100%;
    background-color: rgba(27, 27, 30, 1);
    display: flex; justify-content: center; align-items:center;
    color: white;
    @media screen and (max-width: 700px) {
        font-size: 0.7em;
        gap: 15px;
        padding: 5px;
    }
`
//rgba(62, 69, 82, 1)
function Footer() {
  return (
    <footer>
        <DivInfo id="footerInfo">
            <SectionBody>
                <h4 style={{color: 'white'}}>ABOUT US</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                    <LinkStyled to="#"><MapPin /> Av Somewhere, 117  </LinkStyled>
                    <LinkStyled to="#"><Phone /> Number-3 </LinkStyled>
                    <LinkStyled to="#"><Envelope /> email@enterprise.com </LinkStyled>
            </SectionBody>
            <SectionBody>
                <h4 style={{color: 'white'}}>CATEGORIES</h4>
                <LinkStyled to="#"> Mais Vendidos </LinkStyled>
                <LinkStyled to="#"> Notebooks </LinkStyled>
                <LinkStyled to="#"> Celulares </LinkStyled>
                <LinkStyled to="#"> Cameras </LinkStyled> 
                <LinkStyled to="#"> Acessórios </LinkStyled> 
            </SectionBody>
            <SectionBody>
                <h4 style={{color: 'white'}}>INFORMATION</h4>
                <LinkStyled to="#"> Sobre Nos </LinkStyled> 
                <LinkStyled to="#"> Contate-nos </LinkStyled>
                <LinkStyled to="#"> Privacy Policy </LinkStyled>
                <LinkStyled to="#"> Orders and Returns </LinkStyled>
                <LinkStyled to="#"> Terms & Conditions</LinkStyled>
            </SectionBody>
            <SectionBody>
                <h4 style={{color: 'white'}}>SERVICE</h4>
                <LinkStyled to="#"> Minha Conta </LinkStyled>
                <LinkStyled to="#"> Ver Carrinho </LinkStyled>
                <LinkStyled to="#"> Lista de Desejos </LinkStyled> 
                <LinkStyled to="#"> Rastrear meu pedido </LinkStyled> 
                <LinkStyled to="#">Ajuda</LinkStyled> 
            </SectionBody>
        </DivInfo>

        <DivLast>
        All rights reserved | This template is inspired by <a style={{marginLeft: '3px', marginRight: '3px', textDecorationLine: 'underline'}}href="https://colorlib.com/"> Colorlib </a> templates made by <a style={{marginLeft: '3px', marginRight: '3px', textDecorationLine: 'underline'}}href="https://www.github.com/ruanx14"> Ruan Barroso</a>
        </DivLast>
    </footer>
  )
}

export default Footer
