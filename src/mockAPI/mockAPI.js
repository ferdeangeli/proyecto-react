const data = [
  {
    id: 1,
    title: "Magna 2 230",
    img: "/assets/img/img-productos/magna2230.png",
    price: 77400,
    brand: "Hellbot",
    stock: 10,        
    category: "Impresora 3D FDM",
  },

  {
    id: 2,
    title: "Magna 2 300",
    img: "/assets/img/img-productos/magna2300.jpg",
    price: 96400,
    brand: "Hellbot",
    stock: 3,        
    category: "Impresora 3D FDM",
  },

  {
    id: 3,
    title: "Ender 3 V2",
    img: "/assets/img/img-productos/ender3v2.jpg",
    price: 73900,
    brand: "Creality",
    stock: 6,        
    category: "Impresora 3D FDM",
  },

  {
    id: 4,
    title: "Magna SE",
    img: "/assets/img/img-productos/magnase.jpg",
    price: 77400,
    brand: "Hellbot",
    stock: 15,        
    category: "Impresora 3D FDM",
  },

  {
    id: 5,
    title: "Halot One",
    img: "/assets/img/img-productos/halotone.png",
    price: 84500,
    brand: "Creality",
    stock: 4,        
    category: "Impresora 3D Resina",
  },

  {
    id: 6,
    title: "Ender 3 S1",
    img: "/assets/img/img-productos/ender3S1.jpg",
    price: 118000,
    brand: "Creality",
    stock: 3,        
    category: "Impresora 3D FDM",
  },

  {
    id: 7,
    title: "Magna 2 300 directa",
    img: "/assets/img/img-productos/magna2300directa.png",
    price: 92900,
    brand: "Hellbot",
    stock: 3,        
    category: "Impresora 3D FDM",
  },

  {
    id: 8,
    title: "Ender 3",
    img: "/assets/img/img-productos/ender3.png",
    price: 55900,
    brand: "Creality",
    stock: 6,        
    category: "Impresora 3D FDM",
  },

  {
    id: 9,
    title: "Ender 2 PRO",
    img: "/assets/img/img-productos/ender2pro.jpg",
    price: 52200,
    brand: "Creality",
    stock: 2,        
    category: "Impresora 3D FDM",
  },

  {
    id: 10,
    title: "UW-02",
    img: "/assets/img/img-productos/uw02.jpg",
    price: 84500,
    brand: "Creality",
    stock: 4,        
    category: "Impresora 3D Resina",
  },

  {
    id: 11,
    title: "PLA Negro",
    img: "/assets/img/img-productos/plaNegroGrilon3.jpg",
    price: 2570,
    brand: "Grilon3",
    stock: 20,        
    category: "Filamentos",
  },

  {
    id: 11,
    title: "PETG Clear Rojo",
    img: "/assets/img/img-productos/petgClearRojoGrilon3.jpg",
    price: 2680,
    brand: "Grilon3",
    stock: 4,        
    category: "Filamentos",
  },

  {
    id: 12,
    title: "Simpliflex Celeste",
    img: "/assets/img/img-productos/simpliflexCelesteGrilon3.jpg",
    price: 4160,
    brand: "Grilon3",
    stock: 3,        
    category: "Filamentos",
  },

  {
    id: 13,
    title: "PLA Hueso",
    img: "/assets/img/img-productos/plaHueso3n3.jpg",
    price: 2200,
    brand: "3n3",
    stock: 5,        
    category: "Filamentos",
  },
    
];

export function getProductos(){
  return new Promise((resolve) => {
    resolve(data);
  })
}