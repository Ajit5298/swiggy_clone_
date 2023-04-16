import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchProduct = () => {
  const data = useParams();
  const [singleProduct, setSingleProduct] = useState();
  //   console.log(data);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then((Json) => Json.drinks)
      .then((json) => json.filter((obj) => obj.strDrink.toUpperCase() === data.name.toUpperCase()))
      .then((data) => setSingleProduct(data[0]));
  }, [data.name]);

  //   console.log(singleProduct);

  return (
    <div>
      {singleProduct && (
        <div>
          <div>
            <div>
              <img src={singleProduct.strDrinkThumb} alt="drink-img" />
            </div>
            <h1>{singleProduct.strDrink}</h1>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchProduct;