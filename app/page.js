import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="w-full h-auto bg-black">
      <Header/>
      <div className="w-full h-auto">
        <ProductCard/>
      </div>
    </div>
  );
}
