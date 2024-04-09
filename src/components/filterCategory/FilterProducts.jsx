import React, { useEffect, useState } from "react";
import "./styles.css";

const FilterProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const apiResponse = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      const result = await apiResponse.json();
      // console.log(result);

      if (result && result.products && result.products.length > 0) {
        setLoading(false);
        setProducts(result.products);

        // When page get refresh , show all products data on screen
        setFilteredItems(result.products);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const copyFinal = [...products];
    // console.log("currentSelectedCategory", currentSelectedCategory);
    setFilteredItems(
      // if currentSelectedCategory is null(empty) than display all products
      currentSelectedCategory !== ""
        ? copyFinal.filter(
            (item) =>
              item.category.toLowerCase() ===
              currentSelectedCategory.toLowerCase()
          )
        : copyFinal
    );
    // console.log("copyFinal ", copyFinal);
  }, [currentSelectedCategory]);

  // to fetch unique category from api call
  const uniqueCategory =
    products && products.length > 0
      ? [...new Set(products.map((item) => item.category))]
      : [];
  // console.log("uniqueCategory", uniqueCategory);


  const handleClick = (item) => {
    // Used to check which category user clicked the button tabs,
    // which is going to set the current selected category state array []
    // when currentSelectedCategory === item (skincare === skincare)
    // then make currentSelectedCategory as empty(null)

    // console.log("clicked button", item);
    setCurrentSelectedCategory(
      currentSelectedCategory !== "" && currentSelectedCategory === item
        ? ""
        : item
    );
    // console.log("currentSelectedCategory", currentSelectedCategory);
  };

  if (loading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div className="filter-products-container">
      <h1>Filter products by category</h1>
      <div className="filter-categories-container">
        {uniqueCategory.map((item,idx) => (
          <button
            onClick={() => handleClick(item)}
            className={`${currentSelectedCategory === item ? "active" : ""}`}
            key={idx}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="list-of-products">
        {filteredItems &&
          filteredItems.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.category}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FilterProducts;
