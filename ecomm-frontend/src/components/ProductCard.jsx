import { useState } from "react";

const ProductCard = ({
    productId,
    productName,
    image,
    price,
    description,
    quantity,
    discount,
    specialPrice,

}) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;

    return (
        <div className="border rounded-lg shadow-x1 overflow-hidden transition-shadow duration-300">
            <h1>Product</h1>
        </div>
    )
}

export default ProductCard;
            