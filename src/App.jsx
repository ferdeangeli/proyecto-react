import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from "bootstrap";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserContextProvider} from './context/UserContext';
import FirebaseApp from "./services/firebase";
import UserForm from "./components/UserForm/UserForm";
import CartView from "./components/CartView/Cartview";

function App() {

  console.log(FirebaseApp)
  return (
    <BrowserRouter>
      <UserContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="LA IMPRESORA 3D QUE BUSCAS ESTA EN CARBONO"/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/login" element={<UserForm />} />
            <Route path="/cartview" element={<CartView />} />
          </Routes>
          <Footer />
        </div>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
