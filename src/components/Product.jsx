import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { pageSize } from "../constants";
import Pagination from "./Pagination";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products?limit=200&skip=0");
                const data = await response.json();
                setProducts(data.products); // Store products in state
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts(); // Call the async function
    }, []); // Empty dependency array means this runs once when component mounts


    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts / pageSize);
    const start = currentPage * pageSize;
    const end = start + pageSize;
    console.log(currentPage);
    return (
        <div>
            <h1>Pagination</h1>
            <Pagination noOfPages={noOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <div className="product-container">
                {products.slice(start, end).map((product) => (
                    <ProductCard key={product.id} title={product.title} image={product.thumbnail} />
                ))}
            </div>
        </div>
    );
};

export default Product;