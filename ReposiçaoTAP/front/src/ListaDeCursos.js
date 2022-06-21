import StoreContext from './StoreContext';
import {useContext} from 'react';

const ListaDeCursos = () => {
    const {cursos, comprar} = useContext(StoreContext);

    const renderCurso = (c) => {
        return(
          <tr key = {c.id}>
            <td> {c.nome} </td> 
            <td> R$ {c.preco.toFixed(2)} </td> 
            <td> 
                <button onClick = { () => comprar(c)}> 
                    Comprar 
                </button>
            </td> 
          </tr>
        );
      };

      return(
      <> 
        <h3> Cursos: </h3>
            <table border="l">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preco</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
                    { cursos.map(renderCurso) }
                </tbody>
            </table>
      </>
      );
};

export default ListaDeCursos;