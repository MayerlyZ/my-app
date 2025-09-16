import { useState } from "react";

interface Product {
    name: string;
    price: number;
    cantidad: number;
}

const products: Product[] = [
    { name: "Arroz", price: 5000, cantidad: 50 },
    { name: "Agua", price: 200, cantidad: 20 }
];

export default function Index2(){
const Index2 = () => {
    const [state, setState] = useState(false);

    const toggleState = () => {
        setState(!state);
    };

    return (
        <div>
            <h1>Productos</h1>
            <button onClick={toggleState}>
                {state ? "Ocultar productos" : "Mostrar productos"}
            </button>

            {state && (
                <ul>
                    {products.map((product) => (
                        <li key={product.name}>
                            {product.name} - {product.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
}