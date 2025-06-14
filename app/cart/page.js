'use client'
import React, { useContext } from 'react';
import img from '../assets/images/bag2.jpg'
import Image from 'next/image';
import { ProductContext } from '../context/ProductContext';
import Link from 'next/link';

const cart = () => {
  const { store, removeFromCart, updateQuantity, totalPrice } = useContext(ProductContext);

  if (store.length === 0) return <div className="w-screen h-screen text-center bg-black text-white text-4xl flex justify-center items-center">Your Cart is Empty!</div>;

  return (
    <div className="container mx-auto p-4 bg-black min-h-screen">
      <Link href="/">
        <h1 className="text-2xl font-semibold mb-6 text-white">Cart</h1>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {
            store.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded shadow">
                {item?.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-auto h-auto object-contain rounded"
                    priority
                  />
                ) : (
                  <div>No image available</div>
                )}
                <div className="flex-1 w-full">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">{item.description.length > 50
                    ? `${item.description.slice(0, 50)}...`
                    : item.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-green-600 font-bold text-md">${item.price}</span>
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm hover:underline">Remove</button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

        <div className="bg-white p-6 rounded shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="border-t my-4"></div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${totalPrice + 5}</span>
          </div>
          <button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default cart