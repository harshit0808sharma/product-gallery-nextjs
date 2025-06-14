import Link from 'next/link';
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <>
      <ul className="list-none flex items-center gap-4 sm:gap-5 text-white">
        <li><CiSearch className="text-2xl" /></li>
        <li><CiUser className="text-2xl" /></li>
        <li><CiBookmark className="text-2xl" /></li>
        <li><LiaShoppingBagSolid className="text-2xl" /></li>
        {/* <li><Link href="/cart"><LiaShoppingBagSolid className="text-2xl" /></Link></li> */}
      </ul>
    </>
  )
}

export default Navbar