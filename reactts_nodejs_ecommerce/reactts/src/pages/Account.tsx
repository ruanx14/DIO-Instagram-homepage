import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

const SectionAccount = styled.section`
    display: grid;
    grid-template-rows: repeat(3, 200px);
    grid-template-columns: minmax(180px, 20%) 80%;
    grid-template-areas:
    "sidebar maincontent"
    "sidebar maincontent"
    "sidebar maincontent"
    ;
    @media screen and (max-width:1080px){
        grid-template-rows: 100px minmax(300px, auto);
        grid-template-columns: 100%;
        grid-template-areas:
        "sidebar"
        "maincontent";
    }
`;
const DivOptions = styled.aside`
    grid-area: sidebar;
    ul{
        list-style: none;
        width: 100%;
        margin-top: 10px;                                   
        padding: 0;
        li{
            text-indent: 30px;
            padding: 15px;
            font-size: 1.2rem;
        &:hover{
            cursor: pointer;
            background-color: #c9c9c9;
        }
        }
    }
`;
const DivAccountInfo = styled.div`
    grid-area: maincontent;
    background-color: blue;
`;

export function Account(){
    return (
        <>
        <Header />
            <SectionAccount>
                <DivOptions>
                    <ul>
                        <li>Conta</li>
                        <li>Endereço</li>
                        <li>Segurança</li>
                        <li>Pagamento</li>
                        <li>Privacidade</li>
                    </ul>
                </DivOptions>
                <DivAccountInfo>

                </DivAccountInfo>
            </SectionAccount>
        <Footer />
        </>
    );
}