import { ProductContextProvider } from "./context/ProductContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "NextShop",
  description: "Next Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductContextProvider>
          {children}
          <Toaster position="top-right" />
        </ProductContextProvider>
      </body>
    </html>
  );
}
