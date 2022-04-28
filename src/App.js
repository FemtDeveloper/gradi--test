import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
// import { CarouselSlide } from "./components/carouselSlide";
import ProductInfo from "./components/ProductInfo";
import { ProductContext } from "./context/ProductContext";

function App() {
  const [data, setData] = useState();
  const [variants, setVariants] = useState([]);
  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const resp = await axios.get(
          "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
        );
        setData(resp.data);
        setVariants(resp.data.variants);
      } catch (err) {
        console.log(err);
      }
      return;
    };
    fetchProductInfo();
  }, []);
  return (
    <div className="App">
      <ProductContext.Provider value={{ data, variants }}>
        <div className="App">
          <span className="breadcrumb">
            Catalog / Sneckers /<strong> Free Trainer 3 / MMW</strong>
          </span>
          <div className="content">
            <Carousel />
            {/* <CarouselSlide /> */}
            <ProductInfo />
          </div>
        </div>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
