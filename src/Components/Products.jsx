import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Slices/products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);

    return (
      <div className="flex items-center gap-1">
        {[...Array(totalStars)].map((_, index) => (
          <span key={index} className="text-lg">
            {index < filledStars ? (
              <AiFillStar className="text-yellow-400" />
            ) : (
              <AiOutlineStar className="text-yellow-400" />
            )}
          </span>
        ))}
        {/* <span className="text-gray-600 font-medium ml-1">{rating}</span> */}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="relative p-3 md:p-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 sm:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-1 left-1 bg-gray-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold text-sm">
                ${product.price}
              </span>
              <span
                className={`absolute top-1 right-1 ${
                  product.availabilityStatus === "In Stock"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                } px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium`}
              >
                {product.availabilityStatus}
              </span>
            </div>

            <div className="p-4 md:p-6 space-y-3 flex-grow">
              <div className="space-y-2">
                <h2 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                  {product.title}
                </h2>
                <StarRating rating={product.rating} />
              </div>
              
              <div className="flex gap-2 md:gap-3 mt-auto pt-2">
                <button className="flex-1 px-3 md:px-4 py-2 md:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 text-xs md:text-sm font-medium">
                  Add to Cart
                </button>
                <button className="flex-1 px-3 md:px-4 py-2 md:py-2.5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200 text-xs md:text-sm font-medium border border-blue-200">
                  Favorite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;