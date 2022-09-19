import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import FlexWrapper from "./components/FlexWrapper/FlexWrapper.jsx"

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenidos a Carbono"/>
    </div>
  );
}

export default App;
