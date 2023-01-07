import React from "react";

const Product = ({ data }) => {
    const { id, price, productImage, productName } = data;
    return (
        <div className="product" key={id}>
            <div className="productImage">
                <img src={productImage} alt="product" />
            </div>
            <div className="productInfo">
                <h1>{productName}</h1>
                <p>{price}</p>
            </div>
            <div className="productButton">
                <button>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default Product;
