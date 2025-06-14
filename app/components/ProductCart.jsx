'use client'
import React, { useContext } from 'react'
import Image from 'next/image';
import img61 from '../assets/images/download (61).jpg'
import img62 from '../assets/images/download (62).jpg'
import img63 from '../assets/images/download (63).jpg'
import img64 from '../assets/images/download (64).jpg'
import img65 from '../assets/images/download (65).jpg'
import img66 from '../assets/images/download (66).jpg'
import img67 from '../assets/images/download (67).jpg'
import img68 from '../assets/images/download (68).jpg'
import img69 from '../assets/images/download (69).jpg'
import img70 from '../assets/images/download (70).jpg'
import { ProductContext } from '../context/ProductContext';
import Card from './Card';


const ProductCart = () => {
  const { setCategory, category } = useContext(ProductContext);
  // console.log(store);
  return (
    <div className="w-full h-auto py-5">
      <div className="w-full overflow-x-auto">
        <ul className="flex justify-center items-center gap-3 sm:gap-5 px-4 sm:px-0">
          {[
            { categoryKey: "", imgActive: img69, imgInactive: img70 },
            { categoryKey: "men's clothing", imgActive: img66, imgInactive: img61 },
            { categoryKey: "jewelery", imgActive: img68, imgInactive: img63 },
            { categoryKey: "electronics", imgActive: img64, imgInactive: img65 },
            { categoryKey: "women's clothing", imgActive: img67, imgInactive: img62 },
          ].map(({ categoryKey, imgActive, imgInactive }) => (
            <li
              key={categoryKey}
              onClick={() => setCategory(categoryKey)}
              className="cursor-pointer"
            >
              <Image
                className="w-12 h-20 sm:w-28 sm:h-48 object-cover rounded-md"
                src={category === categoryKey ? imgActive : imgInactive}
                alt="product image"
                priority
                width={112}  // 28 * 4
                height={192} // 48 * 4
                sizes="(max-width: 640px) 80px, 112px" // tells browser image size for responsive loading
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="container mx-auto p-6 bg-transparent">
        <h2 className="text-white py-5 capitalize">{category || "All Categories"}</h2>
        <Card />
      </div>
    </div>


  )
}

export default ProductCart;