import { useEffect, useState } from "react";

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
            <h1>Products...</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
