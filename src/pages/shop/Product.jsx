import { useContext } from "react";
import "./Shop.css";
import { ShopContext } from "../../context/ShopContext";

const Product = ({ data }) => {
    const { id, price, productImage, productName } = data;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="product" id={id}>
            <div className="productImage">
                <img src={productImage} alt="product" />
            </div>
            <div className="productInfo">
                <h1>{productName}</h1>
                <p>${price}</p>
            </div>
            <div className="productButton">
                <button onClick={() => addToCart(id)}>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default Product;
