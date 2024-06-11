import React, { useContext } from "react";
import { ProductContext } from "../App";

const LeftPaneDisplay = () => {
  const { dataleft, setSelectedItem } = useContext(ProductContext);

  const handleSelectChange = (event) => {
    const item = dataleft.find((it) => it.title === event.target.value);
    setSelectedItem(item);
  };

  return (
    <>
      <div className='LeftPaneDisplay'>
        <select onChange={handleSelectChange}>
          {dataleft.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default LeftPaneDisplay;
