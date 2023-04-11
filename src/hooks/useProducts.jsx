import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?q=quo&_page=2&_limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return { products };
};
