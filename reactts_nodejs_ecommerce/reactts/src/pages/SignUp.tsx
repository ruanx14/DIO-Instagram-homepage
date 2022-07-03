
import Footer from "../components/Footer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivBody = styled.div`
    width:  100%;
    height: 85vh;
    background: rgb(36,4,0);
    background: linear-gradient(90deg, rgba(36,4,0,1) 2%, rgba(129,19,19,1) 26%, rgba(48,57,59,1) 100%);
    //https://cssgradient.io/ - mt bom, gerador de gradient
    display: flex;
`;

const SectionBody = styled.section`
    width: 40vw;
    height: 60vh;
    box-shadow: 2px 0px 6px 2px black;
    margin: 0 auto;
    align-self: center;
    //background-color: white;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,219,219,1) 100%);
    h4{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: #c41c1c;
        height: 70px;
        box-shadow: 1px 1px 3px 1px grey;
        font-size: 2rem;
    }
    img{
        max-height: 100px;
        display: block;
        margin: 0 auto;
    }
    a{
        text-decoration: underline;
    }
    form{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: center;
        button, input{
            margin: 0 auto;
            width: 40%;
            padding: 10px;
        }
        button{
            border: 1px solid grey;
            border-radius: 5px;
            background: linear-gradient(180deg, rgba(254,36,9,1) 1%, rgba(136,0,0,1) 100%);
            font-size: 1.2rem;
            color: white;
            &:hover{
                cursor: pointer;
                background: linear-gradient(0deg, rgba(254,36,9,1) 2%, rgba(194,26,26,1) 74%, rgba(136,0,0,1) 100%);
                border: 1px solid grey;
                text-decoration: underline;
            }
        }
    }
    @media screen and (max-width: 700px){
        width: 90%;
        height: 95%;
    }
`;
export default function SignUp(){
    return (
        <>
        <DivBody>
            <SectionBody>
                <h4>Cadastro</h4>
                <Link to="/"><img src="./src/assets/default_logo.png" alt="logo"></img></Link>
                <form>
                    <input placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Link to="/login">Login</Link>
                    <button type="submit">Cadastro</button>
                </form>
            </SectionBody>
        </DivBody>
        <Footer />
        </>
    );
}

