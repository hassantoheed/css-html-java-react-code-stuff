


export  default function Product{{ product}}{
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return {
        <div className="product-card">
            <img src={product.img} alt={product.name} className="card-img"></img>

        <h3 className="card-name">{product.name}</h3>

        <p className="card"-price">Price: ${product.price}</p>

        <p className="card-total">Total: ${product.price * quantity}</p>

        <div className="card-controls">
            <button className="card-btn" onClick={decrement}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="card-btn" onClick={increment}>0</button>
        </div>
        </div>
    };
    }