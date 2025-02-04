import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products); // Store products in state
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts(); // Call the async function
    }, []); // Empty dependency array means this runs once when component mounts

    return (
        <div>
            <h1>Paggination</h1>
            <div className="paggination-container">
                {
                    [...Array(10).keys()].map((n) => (
                        <span className="paggination-number" key={n}>
                            {n}
                        </span>
                    ))
                }
            </div>
            <div className="product-container">
                {products.map((product) => (
                    <ProductCard key={product.id} title={product.title} image={product.thumbnail} />
                ))}
            </div>
        </div>
    );
};

export default Product;
