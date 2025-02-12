import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { removeFromFavourites } from "../store/Slices/favourite";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../store/Slices/cart";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FavoritesPage = () => {
  const favourites = useSelector((state) => state.favourite.favourites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromFavourites = (product) => {
    dispatch(removeFromFavourites(product));
    toast.error("favourite removed");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("added to cart");
  };

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
        </div>
      );
    };

  if (favourites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-[80vh] pb-16 pt-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          No favorites found
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="border-2 flex items-center gap-2 mx-auto m-3 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded transition-colors cursor-pointer">
          Add Favorites <FaArrowLeftLong />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-32 sm:px-6 lg:px-8 py-12">
      <h3 className="text-3xl md:text-4xl font-bold text-[#ed3f36] text-center mb-12">
        My Favorite Products
      </h3>

      <div className="grid grid-cols-2 md:px-14 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {favourites.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div className="relative p-3 md:p-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <span className="absolute top-1 left-1 bg-gray-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full font-semibold text-sm">
                ${product.price}
              </span>
              <span
                className={`absolute top-1 right-1 ${
                  product.availabilityStatus === "In Stock"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                } px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-medium`}>
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
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex-1 cursor-pointer px-3 md:px-4 py-2 md:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 text-sm md:text-base font-medium">
                  Add to Cart
                </button>
                <button onClick={() => handleRemoveFromFavourites(product)} className="flex-1 cursor-pointer px-3 md:px-4 py-2 md:py-2.5 bg-white text-green-600 rounded-lg hover:bg-green-50 active:scale-95 transition-all duration-200 text-sm md:text-base font-medium border border-green-200">
                  Loved
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
