import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

const Parallax = () => {
  const products = [
    {
      title: "Product 1",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-1",
    },
    {
      title: "Product 2",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-2",
    },
    {
      title: "Product 3",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-3",
    },
    {
      title: "Product 4",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-4",
    },
    {
      title: "Product 5",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-5",
    },
    {
      title: "Product 6",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-6",
    },
    {
      title: "Product 7",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-7",
    },
    {
      title: "Product 8",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-8",
    },
    {
      title: "Product 9",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-9",
    },
    {
      title: "Product 10",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-10",
    },
    {
      title: "Product 11",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-11",
    },
    {
      title: "Product 12",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-12",
    },
    {
      title: "Product 13",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-13",
    },
    {
      title: "Product 14",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-14",
    },
    {
      title: "Product 15",
      thumbnail: "https://via.placeholder.com/600",
      link: "/product-15",
    },
  ];

  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
};

export default Parallax;
