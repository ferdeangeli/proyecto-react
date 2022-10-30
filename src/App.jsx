import "bootstrap/dist/css/bootstrap.css";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserContextProvider} from './context/UserContext';
import UserForm from "./components/UserForm/UserForm";
import CartView from "./components/CartView/Cartview";
import { CartContextProvider } from "./context/CartContext";
import BuyerData from "./components/UserForm/BuyerData";

function App() {

  return (
    
    <BrowserRouter>
      <CartContextProvider>
        <UserContextProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="LA IMPRESORA 3D QUE BUSCAS ESTA EN CARBONO"/>} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/login" element={<UserForm />} />
              <Route path="/cartview" element={<CartView />} />
              <Route path="/datos" element={<BuyerData />}/>
            </Routes>
            <Footer />
          </div>        
        </UserContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
