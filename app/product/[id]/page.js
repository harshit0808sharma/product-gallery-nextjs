import Navbar from '@/app/components/Navbar';
import ProductDetail from './ProductDetail'; // client component
import Link from 'next/link';

export default async function ProductPage({ params }) {
  const unwrappedParams = await params;
  const id = unwrappedParams.id;

  return (
    <div className='w-full min-h-screen bg-black'>
      <div className='w-full flex flex-wrap items-center justify-between p-5'>
        <Link href='/'>
          <h1 className="text-white font-extralight tracking-widest text-2xl">
            NEXT SHOP
          </h1>
        </Link>
        <Navbar />
      </div>
      <ProductDetail id={id} />
    </div>
  )
}

