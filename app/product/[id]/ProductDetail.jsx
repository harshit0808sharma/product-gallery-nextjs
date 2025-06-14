'use client';

import React, { useContext } from 'react';
import { ProductContext } from '@/app/context/ProductContext';
import Image from 'next/image';
import { FaStar, FaRegStar, FaShoppingCart } from 'react-icons/fa';

export default function ProductDetail({ id }) {
  const { productList, addToCart } = useContext(ProductContext);

  const product = productList.find((p) => p.id.toString() === id.toString());

  if (!product) return <div className="p-10 text-center text-xl">Product not found</div>;

  const fullStars = Math.floor(product.rating?.rate || 0);
  const emptyStars = 5 - fullStars;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
      <div className="w-full flex justify-center">
        <Image
          src={product.image?.src || product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-full max-w-md h-auto object-cover rounded-lg shadow"
          priority
        />
      </div>

      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold text-white">{product.title}</h1>
        <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full">
          {product.category}
        </span>
        <p className="text-lg text-white">{product.description}</p>

        <div className="flex items-center gap-1">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={i} className="text-yellow-300" />
          ))}
          <span className="ml-2 text-sm text-gray-400">({product.rating?.count} reviews)</span>
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-semibold text-green-600">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  );
}
