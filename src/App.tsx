import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import LeftPaneDisplay from "./component/leftpane";
import DisplayProductDetails from "./component/displayProductDetail";

interface ProductContextType {
  dataleft: any[];
  selectedItem: any;
  setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
}

export const ProductContext = createContext<ProductContextType>({
  dataleft: [],
  selectedItem: null,
  setSelectedItem: () => {},
});

const App = () => {
  const [responseData, setResponseData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const getdata = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setResponseData(json);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className='App'>
      <ProductContext.Provider
        value={{ dataleft: responseData, selectedItem, setSelectedItem }}
      >
        <div className='container'>
          <LeftPaneDisplay />
          <DisplayProductDetails />
        </div>
      </ProductContext.Provider>
    </div>
  );
};

export default App;
