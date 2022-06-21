import StoreContext from './StoreContext';
import {useContext, useState} from 'react';

const CriarCurso = () => {
    const formularioVazio = () => {
        return{nome : '', preco: 0.00, instrutor:'', duracao:0.0}

    };
    const[form, setForm] = useState(formularioVazio());

      return(
      <> 
        <form>
            <p>
            <label>Nome</label>
            <input type =  "text" name = "nome" value={form.mome}></input> 
            </p>
            <p>
            <label>Preco</label>
            <input type =  "number" name = "preco" value={form.preco}></input> 
            </p>
            <p>
            <label>Duracao</label>
            <input type =  "text" name = "duracao" value={form.duracao}></input> 
            </p>
            <p>
            <label>instrutor</label>
            <input type =  "text" name = "instrutor" value={form.instrutor}></input> 
            </p>
            <p>
            <button>
                Salvar
            </button>

            </p>
        </form>
      </>
      );
};

export default CriarCurso;