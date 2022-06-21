import { useContext } from "react";
import StoreContext from "./StoreContext";


const CarrinhoDeCompras = () => {
    const {carrinho, excluirDoCarrinho} = useContext(StoreContext);
    const calculaTotal = () => {
        let total = 0;
        carrinho.forEach(x => total += x.preco); 
        return total;
      };

    const renderItemCarrinho = (i) => {
        return(
          <li key={i.id}>{i.nome} -
           R$ {i.preco.toFixed(2)} -  
           </li>
        );
      };
   
    return(
        <>
          <h3>Carrinho de Compras:</h3>
            <ul>
                {carrinho.map(renderItemCarrinho)}
            </ul>
            <h4>Total: R$ {calculaTotal().toFixed(2)}</h4>
        </>
    );
};

export default CarrinhoDeCompras;