import React, { useContext } from "react";
import { ProductContext } from "../App";

const DisplayProductDetails = () => {
  const { dataleft, setSelectedItem, selectedItem } =
    useContext(ProductContext);

  return (
    <div className='DisplayProductDetails'>
      {selectedItem && (
        <div className='selectedItemDetails'>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <img src={selectedItem.image} alt={selectedItem.title} />
          <p>Price: ${selectedItem.price}</p>
          <p>Category: {selectedItem.category}</p>
          <p>
            Rating: {selectedItem.rating.rate} ({selectedItem.rating.count}{" "}
            reviews)
          </p>
        </div>
      )}
      {dataleft.map((item) => (
        <div key={item.id} onClick={() => setSelectedItem(item)}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        
        </div>
      ))}
    </div>
  );
};

export default DisplayProductDetails;
