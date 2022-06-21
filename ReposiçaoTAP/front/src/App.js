import Cabecalho from "./Cabecalho";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Principal from "./Principal";
import Login from "./Login";
import {StoreProvider} from './StoreContext';


function App() {
  
  return (
    <>
     <StoreProvider>
      <Router>
       <Cabecalho/>
        <Routes>
          <Route path = "/" element = {<Principal/>}/>
          <Route path = "/login" element = {<Login/>}/>
        </Routes>
      </Router>
    </StoreProvider>
    </>
  );
}

export default App;
