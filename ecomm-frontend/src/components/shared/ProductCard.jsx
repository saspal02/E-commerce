import { Button } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import { truncateText } from "../../utils/truncateText";

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

  const handleProductView = (product) => {
    setSelectedViewProduct(product);
    setOpenProductViewModal(true);
  };

  return (
    <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300 bg-white">
      <div
        onClick={() => {
          handleProductView({
            productId,
            productName,
            image,
            price,
            description,
            quantity,
            discount,
            specialPrice
          });
          
        }}
        className="w-full overflow-hidden aspect-3/2"
      >
        <img
          className="-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
          src={image}
          alt={productName}
        />
      </div>

      <div className="p-4">
        <h2
          onClick={() => {}}
          className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600 text-black">
          {truncateText(productName, 50)}
        </h2>

      <div className="min-h-20 max-h-20">
          <p className="text-gray-900 text-sm">
            {truncateText (description, 80)} 
          </p>
          
      </div>

      <div className="flex items-center justify-between">
        {specialPrice ? (
          <div className="flex flex-col">
            <span className="text-gray-400 line-through">
              ${Number(price).toFixed(2)}
            </span>
            <span className="text-xl font-bold text-slate-700">
              ${Number(specialPrice).toFixed(2)}
            </span>
          </div>
        ) : (
            <span className="text-xl font-bold text-slate-700">
              {" "}
              ${Number(price).toFixed(2)}
            </span>
          )}
          
          <button
            disabled={!isAvailable || btnLoader}
            onClick={() => {}}
            className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
          text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300`}>
            <FaShoppingCart className="inline-block mr-2" />
            {isAvailable ? "Add to Cart" : "Out of Stock"}
        </button>
        </div>  
      </div>
      <ProductViewModal
      open={openProductViewModal}
      setOpen={setOpenProductViewModal}
      product={selectedViewProduct}
      isAvailable={isAvailable}
    />
    </div>
    
  );
};

export default ProductCard;
