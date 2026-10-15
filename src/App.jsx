

import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Login from "./components/Login";
import products from "./products.json"; // import JSON

export default function App() {
    const [isLoggedIn, setIsLoggedIn]= useStates(false);

    return (
        <div>
            {IsLoggedIn ? (
                <div className="cards-container">
                    {products.map(products => (
                        <ProductCard key={products.id} product={product} />

                    ))}
        </div>
         ):(
            <Login setIsLoggedIn={setIsLoggedIn} />
         )}
         </div>
        );
    }