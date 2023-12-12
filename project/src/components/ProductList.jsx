import React from "react";
import ProductCard from "./card/ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://cdn3.foxy.in/pictures/variant/image/38484/428872/cosrx-advanced-snail-96-mucin-power-essence-100-ml.png?nan=nan&format=webp&width=512",
    price: 9.99,
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://cdn3.foxy.in/pictures/variant/image/29425/396967/lakme-absolute-precision-lip-paint-victorian-magenta.jpg?nan=nan&format=webp&width=512",
    price: 10,
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://cdn3.foxy.in/pictures/variant/image/565/285017/lakme-perfecting-liquid-foundation-coral.jpg?nan=nan&format=webp&width=512",
    price: 11.99,
  },
  {
    id: 4,
    name: "Product 4",
    image:
      "https://cdn3.foxy.in/pictures/product/image/69193/370963/earth-rhythm-reusable-makeup-remover-cleansing-pads-pack-of-2.png?nan=nan&format=webp&width=1024",
    price: 23.99,
  },
  {
    id: 5,
    name: "Product 5",
    image:
      "https://cdn3.foxy.in/pictures/product/image/63102/285838/renee-cosmetics-makeup-removal-wipes-30-wipes.jpg?nan=nan&format=webp&width=1024",
    price: 1.99,
  },
  {
    id: 6,
    name: "Product 6",
    image:
      "https://cdn3.foxy.in/pictures/product/image/65028/308483/renee-cosmetics-makeup-removing-balm-30gm.jpeg?nan=nan&format=webp&width=1024",
    price: 9.99,
  },
  {
    id: 7,
    name: "Product 7",
    image:
      "https://cdn3.foxy.in/pictures/product/image/64939/306520/blue-heaven-bling-nail-paint-drama-queen-edition-pack-of-6.png?nan=nan&format=webp&width=1024",
    price: 21.99,
  },
  {
    id: 8,
    name: "Product 8",
    image:
      "https://cdn3.foxy.in/pictures/variant/image/29332/390864/maybelline-new-york-fit-me-12hr-oil-control-compact-toffee.jpg?nan=nan&format=webp&width=512",
    price: 12.99,
  },
  {
    id: 9,
    name: "Product 9",
    image:
      "https://cdn3.foxy.in/pictures/product/image/36984/187574/khadi-natural-watermelon-lip-balm.jpeg?nan=nan&format=webp&width=1024",
    price: 11.99,
  },
  {
    id: 10,
    name: "Product 10",
    image:
      "https://cdn3.foxy.in/pictures/product/image/56624/199314/cosrx-advanced-snail-92-all-in-one-cream-100ml.jpg?nan=nan&format=webp&width=1024",
    price: 22.99,
  },
  {
    id: 11,
    name: "Product 11",
    image:
      "https://cdn3.foxy.in/pictures/product/image/58809/224027/mcaffeine-strong-brew-espresso-gift-kit.jpg?nan=nan&format=webp&width=1024",
    price: 31.99,
  },
  {
    id: 12,
    name: "Product 12",
    image:
      "https://cdn3.foxy.in/pictures/product/image/70188/394931/sanfe-bust-support-kit.jpg?nan=nan&format=webp&width=1024",
    price: 2.99,
  },

  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
