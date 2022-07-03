import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { RedditLogo, WindowsLogo } from "phosphor-react";

const SectionAccount = styled.section`
    display: grid;
    grid-template-rows: repeat(3, minmax(200px, auto));
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
    border-left: 1px solid black;
    padding: 20px;
`;
const FormUpdate = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 10px;
    *{
        padding: 10px;
    }
    input{ 
        border-bottom: 1px solid grey;
        border-top: none;
        border-left: none;
        border-right: none;
        outline-width: 1px;
        outline-color: grey;
      
    }
    button{
        border: none;
        border-radius: 4px;
        background-color: white;
        color: black;
        font-size: 1.2rem;
        box-shadow: 0px 1px 3px 0px black;
        font-weight: bold;
        margin-top: 20px;
        &:hover{
            background-color: #525252;
            color: white;
            cursor: pointer;
        }
    }
`;
function AccountMainBody(){
    return (
       <div>
            <h1>Account Settings</h1>
            <FormUpdate>   
                <label htmlFor="email">Email</label>
                <input id="email" type="text" />         
                <label htmlFor="password">Password</label>
                <input id="password" type="text"/>
                <button type="submit">Atualizar</button>
            </FormUpdate>
        </div>
    )
}
 function AddressMain(){
    return (
        <div>
        <h1>Address Settings</h1>
        <FormUpdate>   
            <label htmlFor="cidade">Cidade</label>
            <input id="cidade" type="text" />   

            <label htmlFor="Bairro">Bairro</label>
            <input id="Bairro" type="text"/>
                 
            <label htmlFor="Rua">Rua</label>
            <input id="Rua" type="text"/>
                 
            <label htmlFor="Numero">Numero</label>
            <input id="Numero" type="text"/>
                 
            <label htmlFor="CEP">CEP</label>
            <input id="CEP" type="text"/>
                 
            <label htmlFor="NumeroContato">Numero Contato</label>
            <input id="NumeroContato" type="text"/>
                 
            <button type="submit">Atualizar</button>
        </FormUpdate>
    </div>
    )
}

function SecureBody(){
    return (
       <div>
            <h1>Segure Settings</h1>
        </div>
    )
}
function PaymentBody(){
    return (
       <div>
            <h1>PaymentBody Settings</h1>
        </div>
    )
}
function PrivacyBody(){
    const variantStyle = {
       backgroundColor: '#c21010c1'
    }
    return (
       <div>
            <h1>Privacy Settings</h1>
            <FormUpdate>   
                <button style={variantStyle} type="submit">Deletar minha conta</button>
            </FormUpdate>
        </div>
    )
}

export function Account(){
    const [MainBody, setMainBody] = useState(AccountMainBody());

    return (
        <>
        <Header />
            <SectionAccount>
                <DivOptions>
                    <ul>
                        <li onClick={() => setMainBody(AccountMainBody())}>Conta</li>
                        <li onClick={() => setMainBody(AddressMain())}>Endereço</li>
                        <li onClick={() => setMainBody(SecureBody())}>Segurança</li>
                        <li onClick={() => setMainBody(PaymentBody())}>Pagamento</li>
                        <li onClick={() => setMainBody(PrivacyBody())}>Privacidade</li>
                    </ul>
                </DivOptions>
                <DivAccountInfo>
                    {
                    MainBody
                    }
                </DivAccountInfo>
            </SectionAccount>
        <Footer />
        </>
    );
}