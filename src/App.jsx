import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Carbono"/>
    </div>
  );
}

export default App;
