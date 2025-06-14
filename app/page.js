import Header from "./components/Header";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <div className="w-full h-auto bg-black">
      <Header/>
      <div className="w-full h-auto">
        <ProductCart/>
      </div>
    </div>
  );
}
