// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import CarouselMenor from "@components/CarouselMenor/CarouselMenor";
import ProductCard from "@components/ProductCard/ProductCard";
import BuyBox from "@components/Buybox/Buybox";
import "@styles/pages/Cartpage/Cartpage.css"

function CartPage() {
  const products = [
    { image: "/assets/img/sapato_card.png", name: "Product 1", price: "$100", rating: "★★★★☆" },
    { image: "/assets/img/tenis.png", name: "Product 2", price: "$200", rating: "★★★☆☆" },
    { image: "/assets/img/fone de ouvido.png", name: "Product 3", price: "$150", rating: "★★★★★" },
    { image: "/assets/img/blusa.png", name: "Product 4", price: "$120", rating: "★★★★☆" },
  ];

  return (
    <>
      <Header />
      <div className="layout">
        <div className="gallery">
          <div className="carousel">
            <CarouselMenor />
          </div>
        </div>
        <BuyBox />
      </div>
      <div className="section">
        <div className="productList">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
