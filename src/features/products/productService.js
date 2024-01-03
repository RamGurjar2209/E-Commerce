import axios from "axios";

const fetchProducts = async () => {

    const response = await axios.get("https://dummyjson.com/products")
    return response.data.products;
}

const productService = {
    fetchProducts,
}

export default productService