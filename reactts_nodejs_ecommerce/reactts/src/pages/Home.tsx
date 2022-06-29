import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { ListProducts } from "../components/ListProducts";

const DivHolder = styled.div`
    width: 70%;
    height: 1600px;
    margin: 0 auto;
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
    width: 100%;
    height: 300px;
    border: 1px solid red;
`
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
                    <ListProducts />
                </DivHolder>
                <DivInfo>
                    Some random promo, with 4 circles 
                    3 textes
                    a button to shop
                    2 images between
                </DivInfo>
                <DivHolder>

                </DivHolder>
                <DivInfo>
                    <h4>Sign up for <b>NEWSLETTER</b></h4>
                </DivInfo>
            <Footer />
        </>
    );
}

