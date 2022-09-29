import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="LA IMPRESORA 3D QUE BUSCAS ESTA EN CARBONO"/>
        <Footer />
    </div>
  );
}

export default App;
