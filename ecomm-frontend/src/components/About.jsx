import ProductCard from "./shared/ProductCard";
import { Link } from "react-router-dom";

const products = [
  {
    image: "https://embarkx.com/sample/placeholder.png",
    productName: "iPhone 13 Pro Max",
    description:
      "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
    specialPrice: 720,
    price: 780,
  },
  {
    image: "https://embarkx.com/sample/placeholder.png",
    productName: "Samsung Galaxy S21",
    description:
      "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
    specialPrice: 699,
    price: 799,
  },
  {
    image: "https://embarkx.com/sample/placeholder.png",
    productName: "Google Pixel 6",
    description:
      "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
    specialPrice: 400,
    price: 599,
  },
];

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-custom-gradient py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 tracking-wide">
            About Our Store
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            We deliver premium devices with unmatched quality and customer
            experience. Innovation, trust, and value drive everything we do.
          </p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 bg-white/60 backdrop-blur-lg p-10 rounded-3xl shadow-xl border border-gray-200">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-900 leading-relaxed mb-4">
              Our platform is built to provide a seamless and secure shopping
              experience. We carefully curate every product to ensure it meets
              high standards of performance and reliability.
            </p>
            <p className="text-gray-900 leading-relaxed">
              From premium electronics to everyday essentials, we bring
              innovation closer to you with carefully selected products,
              competitive pricing, and dependable customer support you can
              trust.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src="https://embarkx.com/sample/placeholder.png"
              alt="About"
              className="rounded-3xl shadow-2xl w-full transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                productName={product.productName}
                description={product.description}
                specialPrice={product.specialPrice}
                price={product.price}
                about
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-custom-gradient py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
        <p className="text-gray-200 mb-6">
          Discover premium products designed for performance and style.
        </p>
        <Link
          to="/products"
          className="bg-white text-slate-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition inline-block"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default About;
