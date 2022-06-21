import React, {useState, useEffect} from 'react';

const StoreContext = React.createContext();

export const StoreProvider = ({children}) => {
    const [cursos, setCursos] = useState([]);  
    const [carrinho, setCarrinho] = useState([]);

    useEffect(async () => {
        const response = await fetch('http://localhost:3000/cursos');
        const dados = (await response.json()).map(c => {
             return {id: c.id, nome: c.nome, preco: c.preco};
        }); 
 
        setCursos(dados);
      }, []); 
    
      const comprar = (c) => {
        setCarrinho([...carrinho, c]);
      };  

     
  

  return (
    <StoreContext.Provider value={{
     cursos, setCursos,
     carrinho, setCarrinho,
     comprar
      }}>

      {children}
    </StoreContext.Provider>
  );  
};

export default StoreContext;