// @ts-nocheck

import { useReducer, useState } from "react";
import { cardData } from "../helpers/data";

const filtersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SORT":
      return {
        ...state,
        sortBy: payload,
      };

    case "SHOW_INVENTORY":
      return {
        ...state,
        showInventory: !state.showInventory,
      };

    case "SHOW_FAST_DELIVERY":
      return {
        ...state,
        showFastDelivery: !state.showFastDelivery,
      };

    default:
      return state;
  }
};

export default function FilteredData() {
  // const [showPriceRange, setShowPriceRange] = useState(350);
  // const priceChanger = (event: { target: { value: SetStateAction<number>; }; }) => setShowPriceRange(event.target.value);
  const [{ sortBy, showInventory, showFastDelivery }, dispatch] = useReducer(filtersReducer, {
    sortBy: null,
    showInventory: true,
    showFastDelivery: false,
  });

  const [showPriceRange, setShowPriceRange] = useState(350);

  const getSortedData = (cardData, sortBy) => {
    if (sortBy === "HIGH_TO_LOW") {
      return cardData.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "LOW_TO_HIGH") {
      return cardData.sort((a, b) => a.price - b.price);
    }
    return cardData;
  };

  // revise filter if you can't understand on how to do it
  const getFilteredData = (cardData, showInventory, showFastDelivery) => {
    const stockFilter = cardData.filter(({ inStock }) => (showInventory ? true : inStock));
    const deliveryFilter = stockFilter.filter(({ fastDelivery }) => (showFastDelivery ? fastDelivery : true));
    return deliveryFilter;
  };

  const priceChanger = (event) => setShowPriceRange(event.target.value);

  const sortedData = getSortedData(cardData, sortBy);
  const filteredData = getFilteredData(sortedData, showInventory, showFastDelivery);

  const priceFilteredData = filteredData.filter(({ price }) => price >= showPriceRange);

  // const [finalData, setFinalData] = useState(priceFilteredData)
// matchSorter()
return (
    <>
      {/* <fieldset>
        <legend>Sort BY</legend>
        <label htmlFor="HIGH_TO_LOW">
          <input
            type="radio"
            name="sort"
            id="HIGH_TO_LOW"
            onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          />
          High to Low
        </label>
        <label htmlFor="LOW_TO_HIGH">
          <input
            type="radio"
            name="sort"
            id="LOW_TO_HIGH"
            onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
          />
          Low to High
        </label>
      </fieldset>

      <fieldset>
        <legend> Filters </legend>
        <label htmlFor="showInventory">
          <input
            type="checkbox"
            name="showInventory"
            checked={showInventory}
            id="showInventory"
            onClick={() => dispatch({ type: "SHOW_INVENTORY" })}
          />
          Include Out of Stock
        </label>
        <label htmlFor="showFastDelivery">
          <input
            type="checkbox"
            name="showFastDelivery"
            checked={showFastDelivery}
            id="showFastDelivery"
            onClick={() => dispatch({ type: "SHOW_FAST_DELIVERY" })}
          />
          Fast Delivery
        </label>
        <br />
        <label htmlFor="priceRange">
          Price Range
          <input
            type="range"
            id="priceRange"
            min="0"
            max="1000"
            value={showPriceRange}
            onChange={(e) => priceChanger(e)}
          />
        </label>
      </fieldset>
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        {priceFilteredData.map(
          ({
            id,
            name,
            image,
            price,
            inStock,
            fastDelivery
          }) => (
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem"
              }}
            >
              <img width={"100%"} src={image}  alt=""/>
              <h3> {name} </h3>
              <div>${price}</div>
              
            </div>
          )
        )}
      </div> */}
    </>
  );
}
