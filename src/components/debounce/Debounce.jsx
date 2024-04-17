import React, { useEffect, useState } from "react";
import "./debounce.css";
import useDebounce from "./useDebounce"

const Debounce = () => {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceParamValue = useDebounce(searchParam,1000)

  // console.log("debounceParamValue", debounceParamValue);

  const fetchListOfRecipes = async () => {
    try {
      setLoading(true);
      const apiRes = await fetch(
        `https://dummyjson.com/recipes/search?q=${debounceParamValue}`
      );
      const result = await apiRes.json();

      if (result && result.recipes && result.recipes.length > 0) {
        setLoading(false);
        setRecipes(result.recipes);
      } else {
        setLoading(false);
        setRecipes([]);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchListOfRecipes()
  },[debounceParamValue])

  console.log("recipes", recipes);
  return (
  <div className="debounce-container">
    <h1>Debounce API Call</h1>
    <div className="search-wrapper">
      <input 
      type="text"
      value={searchParam}
      onChange={(event)=>setSearchParam(event.target.value)}
      placeholder="Enter Recipe Name"/>
    </div>
    {loading ? <h3>Pending ! Please wait</h3> : null}
    <ul>
      {
        recipes && recipes.length >0 
        ? recipes.map((item)=><li>{item.name}</li>)
        : <h3>No Recipes found! Please try with diffrenet search</h3>
      }
    </ul>

  </div>);
};

export default Debounce;
