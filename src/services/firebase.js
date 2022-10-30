import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc} from "firebase/firestore";
import Swal from 'sweetalert2';
import { useContext } from "react";
import { cartContext } from "../context/CartContext";


const firebaseConfig = {
  apiKey: "AIzaSyDjlREGzKRFkAgXP8wqI7mPLd-EarpXSWQ",
  authDomain: "cursoreact-ec90b.firebaseapp.com",
  projectId: "cursoreact-ec90b",
  storageBucket: "cursoreact-ec90b.appspot.com",
  messagingSenderId: "1041935750671",
  appId: "1:1041935750671:web:47adf492fd0305d458b57a"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp)


export async function getProductos(){
  const collectionProd = collection(db, "productos");
  let resultado = await getDocs(collectionProd);
  let dataProductos = resultado.docs.map( doc => {
    return {id: doc.id, ...doc.data()}
  })

  return dataProductos
}

export async function getProducto(idParam){
  const docProducto = doc(db, "productos", idParam);
  const dataProducto = await getDoc(docProducto);

  return {id: dataProducto.id, ...dataProducto.data()}
}


export async function crearDocCompra(customerEmail, customerName, customerSurname, customerDni, cart, totalPrice) {

  const docPedido = await addDoc(collection(db, "pedidos"),{
      email: customerEmail,
      nombre: customerName,
      apellido: customerSurname,
      dni: customerDni,
      pedido: cart,
      total: totalPrice
  } )
}


/* const data = [
  {
    id: 1,
    title: "Magna 2 230",
    img: "/assets/img/img-productos/magna2230.png",
    price: 77400,
    brand: "Hellbot",
    stock: 10,        
    category: "Impresora 3D FDM",
    description: "Hellbot Magna 2 es una impresora 3D pensada para facilitarte el trabajo, podrás operarla mediante su pantalla táctil o vía WiFi. Gracias a su doble extrusor 2 en 1 lograrás resultados increíbles combinando colores y materiales.",
  },

  {
    id: 2,
    title: "Magna 2 300",
    img: "/assets/img/img-productos/magna2300.jpg",
    price: 96400,
    brand: "Hellbot",
    stock: 3,        
    category: "Impresora 3D FDM",
    description: "Hellbot Magna 2 es una impresora 3D pensada para facilitarte el trabajo, podrás operarla mediante su pantalla táctil o vía WiFi. Gracias a su doble extrusor 2 en 1 lograrás resultados increíbles combinando colores y materiales.",
  },

  {
    id: 3,
    title: "Ender 3 V2",
    img: "/assets/img/img-productos/ender3v2.jpg",
    price: 73900,
    brand: "Creality",
    stock: 6,        
    category: "Impresora 3D FDM",
    description: "Creality Ender 3 v2 es una impresora 3D silenciosa, gracias a su mejora de driver, sencilla de usar y con cama de vidrio Carborundum que te permitirá despegar fácilmente las impresiones.",
  },

  {
    id: 4,
    title: "Magna SE",
    img: "/assets/img/img-productos/magnase.jpg",
    price: 77400,
    brand: "Hellbot",
    stock: 15,        
    category: "Impresora 3D FDM",
    description: "SE parte de la EVOLUCIÓN con Hellbot Magna 32 BITS.",
  },

  {
    id: 5,
    title: "Halot One",
    img: "/assets/img/img-productos/halotone.png",
    price: 84500,
    brand: "Creality",
    stock: 4,        
    category: "Impresora 3D Resina",
    description: "Creality Halot One es una impresora 3D de resina con pantalla monocromática LCD con resolución 2k, conectividad WiFi y filtro de carbón activado para la emisión de gases tóxicos.",
  },

  {
    id: 6,
    title: "Ender 3 S1",
    img: "/assets/img/img-productos/ender3S1.jpg",
    price: 118000,
    brand: "Creality",
    stock: 3,        
    category: "Impresora 3D FDM",
    description: "La nueva impresora de Creality que llega para revolucionar, con nivelación automática CR-Touch, extrusor directo Sprite y cama flexible PC para garantizar la adherencia de tus impresiones.",
  },

  {
    id: 7,
    title: "Magna 2 300 directa",
    img: "/assets/img/img-productos/magna2300directa.png",
    price: 92900,
    brand: "Hellbot",
    stock: 3,        
    category: "Impresora 3D FDM",
    description: "La única Magna 2 que te permite imprimir con extrusor directo, hará que tus impresiones sean rápidas y eficaces, además posee un extrusor Dual Drive que proporciona una fuerza de empuje superior, ¡imprimir con todos los materiales ahora es posible!",
  },

  {
    id: 8,
    title: "Ender 3",
    img: "/assets/img/img-productos/ender3.png",
    price: 55900,
    brand: "Creality",
    stock: 6,        
    category: "Impresora 3D FDM",
    description: "Gracias a su facilidad de uso y a su versatilidad en cuanto a tipos de filamento, la impresora 3D Creality Ender 3 es una de las más destacadas del mercado.",
  },

  {
    id: 9,
    title: "Ender 2 PRO",
    img: "/assets/img/img-productos/ender2pro.jpg",
    price: 52200,
    brand: "Creality",
    stock: 2,        
    category: "Impresora 3D FDM",
    description: "La nueva impresora 3D de Creality, Ender 2 Pro es ideal para principiantes gracias a su diseño que facilita la usabilidad.",
  },

  {
    id: 10,
    title: "UW-02",
    img: "/assets/img/img-productos/uw02.jpg",
    price: 84500,
    brand: "Creality",
    stock: 4,        
    category: "Impresora 3D Resina",
    description: "La máquina de lavado y curado Creality UW-02 es la actualización de UW-01. Un paso para finalizar el post procesado de sus impresiones 3D hechas en resina.",
  },

  {
    id: 11,
    title: "PLA Negro",
    img: "/assets/img/img-productos/plaNegroGrilon3.jpg",
    price: 2570,
    brand: "Grilon3",
    stock: 20,        
    category: "Filamentos",
    description: "Filamento PLA Grilon3, calidad premium que no te va a fallar.",
  },

  {
    id: 12,
    title: "PETG Clear Rojo",
    img: "/assets/img/img-productos/petgClearRojoGrilon3.jpg",
    price: 2680,
    brand: "Grilon3",
    stock: 4,        
    category: "Filamentos",
    description: "Filamento PETG Grilon3, calidad premium que no te va a fallar.",
  },

  {
    id: 13,
    title: "Simpliflex Celeste",
    img: "/assets/img/img-productos/simpliflexCelesteGrilon3.jpg",
    price: 4160,
    brand: "Grilon3",
    stock: 3,        
    category: "Filamentos",
    description: "Filamento Simpliflex Grilon3, un material técnico que te va a permitir imprimir piezas flexibles y con facilidad gracias a su tratamiento de endurecimiento superficial.",
  },

  {
    id: 14,
    title: "PLA Hueso",
    img: "/assets/img/img-productos/plaHueso3n3.jpg",
    price: 2200,
    brand: "3n3",
    stock: 5,        
    category: "Filamentos",
    description: "Filamento PLA 3n3, economía y calidad combinadas para tus necesidades.",
  },
    
];


export async function crearProductos(){
  for (let producto of data){
    delete(producto.id)
    const docProducto = await addDoc(collection(db, "productos"), {
      
      title: producto.title,
      img: producto.img,
      price: producto.price,
      brand: producto.brand,
      stock: producto.stock,
      category: producto.category,
      description: producto.description,

    });
  }
} */

export default FirebaseApp