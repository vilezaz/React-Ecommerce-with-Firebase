import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        const data = res.data;
        setProduct(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center text-red-600 text-lg font-semibold py-10">
        ❌ Product Not Found.
      </div>
    );
  }

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
        <span className="text-gray-600 font-medium ml-1">
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-28">
      <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-28">
        <div className="md:col-span-1">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full scale-125 h-auto rounded-lg object-contain"
          />
        </div>

        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-blue-600">
              ${product.price}
            </span>
            <span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">
              {product.availabilityStatus}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Brand:</span>
            <span className="text-gray-900">{product.brand}</span>
          </div>

          <StarRating rating={product.rating} />

          <div className="text-sm text-gray-600 my-1.5">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock} left
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}g
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
          </div>

          <div className="flex gap-6 mt-6">
            <button className="px-3 md:px-8 py-2 md:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 text-sm md:text-base font-medium">
              Add to Cart
            </button>
            <button className="px-3 md:px-8 py-2 md:py-2.5 bg-white text-blue-600 rounded-lg hover:bg-blue-50 active:scale-95 transition-all duration-200 text-sm md:text-base font-medium border border-blue-200">
              Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
