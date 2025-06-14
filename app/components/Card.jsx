import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
import { CiBookmark } from "react-icons/ci";
import { TbShoppingBagPlus } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { BsDuffle } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
import { FaBookmark } from "react-icons/fa";
import toast from 'react-hot-toast';


const Card = () => {
  const { productList, addToCart, loading, savedItems, setSavedItems } = useContext(ProductContext);
  // const [save, setSave] = useState(false);
  const value = "50%"

  const toggleSave = (productId) => {
    setSavedItems(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId) // remove if already saved
        : [...prev, productId]                // add if not saved
    );
    toast.success("Item Saved")
  };



  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-transparent">
        {
          loading ? <h2 className='text-black text-4xl'>Loading...</h2> : (
            productList.map((item, index) => (
              // <Link href={`/product/${item.id}`} key={index} className="block">
                <div className="bg-transparent rounded-lg shadow-md overflow-hidden h-[550px] flex flex-col" key={index}>
                  <div className="relative bg-white h-[450px] w-full p-6 md:p-10 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={500}
                      className="object-contain max-h-full"
                      priority
                    />
                    <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow" onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleSave(item.id)
                    }}>
                      {savedItems.includes(item.id) ? (
                        <FaBookmark className="text-3xl text-gray-800" />
                      ) : (
                        <CiBookmark className="text-3xl text-gray-800" />
                      )}
                    </button>
                  </div>

                  <div className="p-4 flex flex-col flex-grow bg-transparent">
                    <h2 className="text-lg font-semibold mb-2 text-white line-clamp-2">{item.title}</h2> {/* added line-clamp for title */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex gap-2 items-center">
                        <span className="text-white font-bold text-lg">${item.price}</span>
                        <span className="text-white text-sm line-through">8999</span>
                        <span className="text-green-500 text-sm font-bold">{value}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(item);
                        }}
                        className="text-white bg-transparent p-2 rounded-full hover:bg-white hover:text-black transition"
                        aria-label="Add to cart"
                      >
                        <TbShoppingBagPlus className="text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              // </Link>

            ))
          )
        }
      </div>
    </>

  )
}

export default Card