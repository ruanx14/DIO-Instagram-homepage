import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { ListProducts } from "../components/ListProducts";
import { InstagramLogo, GithubLogo, LinkedinLogo, EnvelopeSimple } from "phosphor-react";

const DivHolder = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 50px;
`;
const DivHeader = styled.div`
    display: flex;
    padding: 20px;
    gap: 10px;
    justify-content: space-around;
    flex-wrap: wrap;
    a{
        position: absolute;
        height: 250px;
        z-index: 999;   
        margin-top: -255px;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        display: flex;
        letter-spacing: 2px;
        text-indent: 1rem;
        align-items: center;
    }
    a:hover{
        text-decoration-line: underline;
    }
    a::after{
        content: '';
        width: 30px;
        height: 30px;
    }
    a:hover::after{
        background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMxNC41NSwxMjkuMzJhMTYuNDEsMTYuNDEsMCwwLDEsMTEuNjIsNC44NEw0NDgsMjU0LjQ1LDMyNi4zMiwzNzcuNjhhMTYuMzMsMTYuMzMsMCwwLDEtMTEuNzYsNUExNi42OCwxNi42OCwwLDAsMSwyOTcuNzQsMzY2VjMwNC41NHMtMjEuMzUtMTAuNjctNTcuNDUtMTAuNjdjLTQyLjEzLDAtMTA0LjM2LDE0LjUyLTE3Ni4yOSw3Ny40NSwwLDAsMzMuMzktMTY2Ljk1LDIzMy43NC0xNjYuOTVWMTQ2LjA1YTE2LjY4LDE2LjY4LDAsMCwxLDE2LjgxLTE2LjczbTAtMzBoMEE0Ni44NSw0Ni44NSwwLDAsMCwyODIuNDUsMTEyYTQ2LjA5LDQ2LjA5LDAsMCwwLTE0LjcxLDM0LjA2djI5LjUzYy0zOC40NywzLjE3LTczLjUxLDEyLjU2LTEwNC40NiwyOGEyNDAuOTQsMjQwLjk0LDAsMCwwLTgxLDY1LjQ4QzQ0Ljc5LDMxNiwzNSwzNjMuNDQsMzQuNTgsMzY1LjQ0QTMwLDMwLDAsMCwwLDgzLjc2LDM5My45YzY2LjE1LTU3Ljg5LDEyMS42My03MCwxNTYuNTMtNzBhMTM3LjgxLDEzNy44MSwwLDAsMSwyNy40NSwyLjY3VjM2NkE0Ni4xMiw0Ni4xMiwwLDAsMCwyODIuNDYsNDAwYTQ2LjkyLDQ2LjkyLDAsMCwwLDMyLjEsMTIuNjUsNDYuMjEsNDYuMjEsMCwwLDAsMzMuMS0xMy45Mkw0NjkuMzUsMjc1LjUzYTMwLDMwLDAsMCwwLS4yNy00Mi40M0wzNDcuMjQsMTEyLjgyYTQ2LjI3LDQ2LjI3LDAsMCwwLTMyLjY5LTEzLjVaIi8+PC9zdmc+);
        filter: brightness(200) invert(200);
    }
    div{
        overflow: hidden;
        height: 250px;
        img{
            max-height: 100%;
        }
    }
    div::after{
        content: '';
        background-color: #e40707;
        opacity: 0.8;
        width: 100%;
        height: 100%;
        display: block;
        transform: skewX(-45deg) translateX(-144px);
        margin-top: -255px;
    } 
`
const DivInfo = styled.div`
    &:nth-child(3){ //essa div
        width: 100%;
        background-color: #e4e4e4;
        padding: 10px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .infoContent{
        align-self: center;
        padding: 30px;
        section{
            display: flex;
            justify-content: space-evenly;
            gap: 20px;
            padding: 5px;
        }
        div{  
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 100%;
            background-color: #f32626;
            height: 80px;
            width: 80px;
            color: white;
            font-size: 0.7rem;
            b{
                font-size: 1.2rem;
            }
        }
        h1,h3{
            text-align: center;
            color: #3b3b3b;
        }
        a{
            border-radius: 40px;
            background-color: #d61c1c;
            padding: 10px;
            color: #f1f1f1;
            font-size: 1.1rem;
            font-weight: bolder;
            width: 120px;
            display: block;
            margin: 0 auto;
            text-align: center;
        }
        a:hover{
            background-color: #dd2525;
            color: white;
        }
    }
    img{
       height: 400px;
    }
`
const DivSignNews = styled.div`
    border-top: 1px solid grey;
    color: #3b3b3b;
    padding: 5px;
    position: relative;
    &::before{   
        content: '';
        position: absolute;
        display: block;
        width: 150px;
        height: 150px;
        z-index:-1;
        opacity: 0.2;
        top: 40px;
        left: 30%;

        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDQ4IDQ4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PGcgZGF0YS1uYW1lPSI4LUVtYWlsIiBpZD0iXzgtRW1haWwiPjxwYXRoIGQ9Ik00NSw3SDNhMywzLDAsMCwwLTMsM1YzOGEzLDMsMCwwLDAsMywzSDQ1YTMsMywwLDAsMCwzLTNWMTBBMywzLDAsMCwwLDQ1LDdabS0uNjQsMkwyNCwyNC43NCwzLjY0LDlaTTIsMzcuNTlWMTAuMjZMMTcuNDEsMjIuMTdaTTMuNDEsMzksMTksMjMuNDFsNC4zOCwzLjM5YTEsMSwwLDAsMCwxLjIyLDBMMjksMjMuNDEsNDQuNTksMzlaTTQ2LDM3LjU5LDMwLjU5LDIyLjE3LDQ2LDEwLjI2WiIvPjwvZz48L3N2Zz4=);
        background-repeat: no-repeat;
        background-size: 100%;
        transform: rotate(40deg);
    }
    h4{
        font-size: 1.5rem;
        text-align: center;
        b{
            font-size: 1.8rem;
        }
    }
    div {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        form{
            input{
                border-radius: 40px 0px 0px 40px;
                padding: 14px 0px 14px 10px;
                width: 300px;
                border: 1px solid grey;
                color: grey;
            }
            button{
                    &:hover{
                        cursor: pointer;
                        text-decoration-line: underline;
                    }
                    border-radius: 0px 40px 40px 0px;
                    font-weight: bold;
                    background-color: #dd2525;
                    color: white;
                    padding: 15px;
                    border: none;
                    width: 150px;
                    position: relative;
                }
                
            }
        }
    section{
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
        gap: 5px;
        a{
            border: 1px solid #b6b6b6;
            border-radius: 4px;
            padding: 10px;
            color: grey;
        &:hover{
            background-color: #c5c5c5;
            color: red;
            }
        }
    }
`;
export default function Home(){
    return (
        <>
            <Header />
                <DivHolder>
                    <DivHeader>
                        <div><img src="./src/assets/default.jpg" alt="products" /><a href="#">Notebooks</a></div>
                        <div><img src="./src/assets/default.jpg" alt="products" /><a href="#">Celulares</a></div>
                        <div><img src="./src/assets/default.jpg" alt="products" /><a href="#">Acessórios</a></div>
                    </DivHeader>
                    <ListProducts titleList="Novos Produtos" />
                </DivHolder>
                <DivInfo>
                    <img src="./src/assets/default.jpg" alt="products" />
                    <section className="infoContent"> <section> <div><b>02</b>DAYS</div>    <div><b>02</b>DAYS</div>   <div><b>02</b>DAYS</div>     <div><b>02</b>DAYS</div> </section><h1>Some Random Promo this week</h1><h3>All Products for the same prices as before check below</h3><a href="#">Check Now</a></section>
                    <img src="./src/assets/default.jpg" alt="products" />
                </DivInfo>
                <DivHolder>
                    <ListProducts titleList="Mais vendidos" />
                </DivHolder>
                <DivSignNews>
                    <h4>Se cadastre para estar por dentro das <b>NOVIDADES   </b></h4>
                    <div> 
                        <form>
                            <input type="email" placeholder="Seu email para receber atualizações" />
                            <button type="submit" style={{textAlign: 'right'}}> <EnvelopeSimple size={21} style={{position: 'absolute', left: '10px', top: '12px'}} color="white" />Quero receber</button>
                        </form>
                    </div>
                    <section>
                        <a target={'_blank'} href="https://www.instagram.com/ruanbarroso7">
                            <InstagramLogo size={24} />
                        </a>
                        <a target={'_blank'} href="https://www.github.com/ruanx14">
                            <GithubLogo size={24} />
                        </a>
                        <a target={'_blank'} href="https://www.linkedin.com/in/ruanbarroso7">
                            <LinkedinLogo size={24}  />
                        </a>
                    </section>
                </DivSignNews>
            <Footer />
        </>
    );
}

