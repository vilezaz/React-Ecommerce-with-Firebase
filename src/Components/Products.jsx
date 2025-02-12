import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/Slices/products";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { addToCart } from "../store/Slices/cart";
import toast from "react-hot-toast";
import { addToFavourites, removeFromFavourites } from "../store/Slices/favourite";

const Products = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const favourites = useSelector((state) => state.favourite.favourites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("added to cart!");
  };

  const handleFvtBtnClick = (product) => {
    alreadyInFavourites(product)
      ? handleRemoveFromFavourites(product)
      : handleAddToFavourites(product);
  };

  const handleAddToFavourites = (product) => {
    if (!alreadyInFavourites(product)) {
      dispatch(addToFavourites(product));
      toast.success("added to favourites");
    }
  };

  const handleRemoveFromFavourites = (product) => {
    if (alreadyInFavourites(product)) {
      dispatch(removeFromFavourites(product));
      toast.error("favourite removed!");
    }
  };

  const alreadyInFavourites = (product) =>
    favourites.some((fav) => fav.id === product.id);

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

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-600 text-lg font-semibold py-10">
          ❌ Oops! Something went wrong. Please try again later.
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
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
                  <button onClick={() => handleFvtBtnClick(product)} className={`flex-1 cursor-pointer px-3 md:px-4 py-2 md:py-2.5 bg-white rounded-lg active:scale-95 transition-all duration-200 text-sm md:text-base font-medium border ${alreadyInFavourites(product) ? "text-green-600 hover:bg-green-50 border-green-200" : "text-blue-600 hover:bg-blue-50 border-blue-200"}`}>
                    {alreadyInFavourites(product) ? "Loved" : "Add Favourite"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
