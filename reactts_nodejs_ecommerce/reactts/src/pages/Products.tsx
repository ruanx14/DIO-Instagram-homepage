import Footer from "../components/Footer";
import Header from "../components/Header";
import { ListProducts } from "../components/ListProducts";

export default function Products(){
    return (
       <>
        <Header />
        <ListProducts titleList="Lista de produtos" />
        <Footer />
       </>
    );
}

