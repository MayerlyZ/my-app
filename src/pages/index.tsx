import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { Eye } from "lucide-react";
import { EyeClosed } from 'lucide-react';


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// //comment

// //Ejercicio fizzBuzzito
// //

// interface Product {
//     name: string;
//     price: number;
//     cantidad: number;
// }

// const products: Product[] = [
//     { name: "Arroz", price: 5000, cantidad: 50 },
//     { name: "Agua", price: 200, cantidad: 20 }
// ];

export default function Home() {


  //  const [state, setState] = useState(false);
  
  //     const toggleState = () => {
  //         setState(!state);
  //     };
  
  //     return (
  //         <div>
  //           <h1>Productos</h1>
  //           <button onClick={toggleState} style={{ background: "#dc3535", alignItems: "center", gap: "8px" }}>
          
  //               {state ? (
  //               <>
  //                 <EyeClosed /> <span>Ocultar productos</span>
  //               </>
  //               ) : (
  //               <>
  //                 <Eye /> <span>Mostrar productos</span>
  //               </>
  //               )}
  //           </button>

  //           {state && (
  //             <ul>
                
  //               {products.map((product) => (
  //                 <li key={product.name}>
  //                   {product.name} - {product.price}
  //                 </li>
  //               ))}
  //             </ul>
  //           )}
  //         </div>
  //     );
  // function fizzBuzz(limit: number): void {
  //   for (let i = 1; i <= limit; i++) {
  //     if (i % 3 === 0 && i % 5 === 0) {
  //       console.log("FizzBuzz");
  //     } else if (i % 3 === 0) {
  //       console.log("Fizz");
  //     } else if (i % 5 === 0) {
  //       console.log("Buzz");
  //     } else {
  //       console.log(i);
  //     }
  //   }
  // }

  // fizzBuzz(200);


class animals {
   color:string;
  edad:number;
  name:string;

 constructor (color: string, edad: number, name:string){
  this.color=color;
  this.edad=edad;
  this.name=name
 }

 ladrar(){
  console.log(` La mascota ${this.name} de color ${this.color} tiene ${this.edad} años`)
 }
}

const sonido= new animals("Negro", 5,"Candy");

 console.log(sonido.name);
 sonido.ladrar();





class Persona extends animals{
  nombre:string;
  apellido:string;

  constructor(
    nombre:string, 
    name:string, 
    edad:number, 
    color:string, 
    apellido:string)
    {
    super(color, edad, name);
    this.nombre=nombre;
    this.apellido=apellido;

  }

  saludar(){
    return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo una mascota que se llama ${this.name}, es de color ${this.color} y tiene ${this.edad} años`;
  }
}

const saludito = new Persona("Mayerly", "Candy", 5, "Negro", "Zapata");
console.log(saludito.saludar());



//------------------------------------------------------------------
//          OTRA FORMA DE CREAR UNA CLASE                          -
//------------------------------------------------------------------
class coche{
  constructor(public marca:String, public año:number){
  }
}
const miCoche= new coche("Toyota", 2025);
console.log(miCoche.marca, miCoche.año)

//------------------------------------------------------------------
}
