import { MdArrowBack, MdShoppingCart } from "react-icons/md";

const Cart = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-4 py-10">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl text-gray-900 flex items-center gap-3">
          <MdShoppingCart size={36} className="text-grey-700" />
          Your Cart
        </h1>
        <p>All your selected items</p>
      </div>
    </div>
  );
};

export default Cart;
