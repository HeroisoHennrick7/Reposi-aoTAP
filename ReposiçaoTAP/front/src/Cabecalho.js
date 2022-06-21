import{
    Link
  } from "react-router-dom";
function Cabecalho() {
    return(
        <>
            <h1>Melhores cursos do Brasil </h1>
            <Link to = "/"> Home </Link>  |  <Link to = "/login"> Login </Link>
        </>
    );
}

export default Cabecalho;