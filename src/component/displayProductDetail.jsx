import React, { useContext } from "react";
import { ProductContext } from "../App";

const DisplayProductDetails = () => {
  const { selectedItem } = useContext(ProductContext);

  return (
    <div className='DisplayProductDetails'>
      {selectedItem ? (
        <>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          <img src={selectedItem.image} alt={selectedItem.title} />
          <p>Price: ${selectedItem.price}</p>
          <p>Category: {selectedItem.category}</p>
          <p>
            Rating: {selectedItem.rating.rate} ({selectedItem.rating.count}{" "}
            reviews)
          </p>
        </>
      ) : (
        <p>Please select a product to see the details.</p>
      )}
    </div>
  );
};

export default DisplayProductDetails;
