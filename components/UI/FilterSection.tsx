// @ts-nocheck
import { matchSorter } from "match-sorter";
import { useEffect, useReducer, useState } from "react";
import { cardData } from "../../helpers/data";
import { FilterSectionStyled } from "../../styles/FilterSectionStyle/FilterSection";
import Popup from "reactjs-popup";
import { AllCards } from "../../styles/FilterSectionStyle/FilterSection";
import { SideBar } from "../../styles/FilterSectionStyle/FilterSection";

function filterReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "bedroom": {
      return {
        ...state,
        bedroom: payload,
      };
    }
    case "bathroom": {
      return {
        ...state,
        bathroom: payload,
      };
    }
    case "story": {
      return {
        ...state,
        story: payload,
      };
    }
    default:
      return state;
  }
}

const initialState = {
  bedroom: 2,
  bathroom: 2,
  story: 2,
};

const FilterSection: any = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [data, setData] = useState(cardData);
  const { bedroom, bathroom, story } = state;
  const [priceRange, setPriceRange] = useState(350);
  useEffect(() => {
    setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story", "bathroom"], `${priceRange} ${bedroom} ${story} ${bathroom}`));
  }, [priceRange, bedroom, bathroom, story]);
  console.log(data, priceRange);
  function handleChange(type: string, payload: number) {
    if (type === "bedroom") {
      dispatch({ type: type, payload: payload });
      console.log(priceRange, bedroom, story);
      setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story", "bathroom"], `${priceRange} ${bedroom} ${story} ${bathroom}`));
    } else if (type === "bathroom") {
      dispatch({ type: type, payload: payload });
      setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story", "bathroom"], `${priceRange} ${bedroom} ${story} ${bathroom}`));
    } else if (type === "story") {
      dispatch({ type: type, payload: payload });
      setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story", "bathroom"], `${priceRange} ${bedroom} ${story} ${bathroom}`));
    }
  }

  function fuzzySearchMultipleWords(
    rows: any, // This is the data that we want to search
    keys: any, // this keys is an array of strings that determine what field to be searched through
    filterValue: string // This is the value that we want to search might be a simple string or multiple strings
  ) {
    if (!filterValue || !filterValue.length) {
      return rows;
    }

    const terms = filterValue.split(" ");
    if (!terms) {
      return rows;
    }
    return terms.reduceRight((results, term) => matchSorter(results, term, { keys }), rows);
  }
  const priceChanger = (event) => setPriceRange(event.target.value);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  // onClick={handleClick}
  //               style={{ backgroundColor: active ? "green" : "white" }}

  return (
    <FilterSectionStyled>
      <SideBar>
      <div className="content">
        <div className="detail">House Budget</div>
        {/* Bedroom : {bedroom}
          Bathroom: {bathroom}
          Story: {story} */}
        <input
          className="slider"
          type="range"
          id="priceRange"
          min="350"
          step="25"
          max="1000"
          value={priceRange}
          onChange={(e) => priceChanger(e)}
        />
        <div className="val">{/* val */ priceRange >= 1000 ? `${priceRange/1000}M` : `${priceRange}K` }</div>
      </div>
      <div className="filter__container">
        <div className="content">Bedrooms</div>
        <div className="filter__buttons">
          <div className="buttons" onClick={() => handleChange("bedroom", 2)}>
            <button>
              <p>2</p>
            </button>
          </div>
          <div className="buttons" onClick={() => handleChange("bedroom", 3)}>
            <button>
              <p>3</p>
            </button>
          </div>
          <div className="buttons" onClick={() => handleChange("bedroom", 4)}>
            <button>
              <p>4</p>
            </button>
          </div>
          <div onClick={() => handleChange("bedroom", 5)}>
            <button className="buttons">
              <p>5+</p>
            </button>
          </div>
        </div>
      </div>
      <div className="filter__container">
        <div className="content">Bathrooms</div>
        <div className="filter__buttons">
          <div onClick={() => handleChange("bathroom", 2)}>
            <button>
              <p>2</p>
            </button>
          </div>
          <div onClick={() => handleChange("bathroom", 3)}>
            <button>
              <p>3</p>
            </button>
          </div>
          <div onClick={() => handleChange("bathroom", 4)}>
            <button>
              <p>4+</p>
            </button>
          </div>
        </div>
      </div>
      <div className="filter__container">
        <div className="content">Story</div>
        <div className="filter__buttons">
          <div onClick={() => handleChange("story", 2)}>
            <button>
              <p>any</p>
            </button>
          </div>
          <div onClick={() => handleChange("story", 3)}>
            <button>
              <p>1</p>
            </button>
          </div>
          <div onClick={() => handleChange("story", 4)}>
            <button>
              <p>2</p>
            </button>
          </div>
        </div>
      </div>
      <div className="filter__container">
        {/* <div className="content">Bedrooms</div>
        <div className="filter__buttons">
          <div onClick={() => handleChange("bedroom", 2)}>
            <button>
              <p>1</p>
            </button>
          </div>
          <div onClick={() => handleChange("bedroom", 2)}>
            <button>
              <p>1</p>
            </button>
          </div>
          <div onClick={() => handleChange("bedroom", 2)}>
            <button>
              <p>1</p>
            </button>
          </div>
          <div onClick={() => handleChange("bedroom", 2)}>
            <button>
              <p>1</p>
            </button>
          </div>
        </div> */}
        </div>
      </SideBar>
      <AllCards>
      {
        // @ts-ignore
        data?.map((data, id) => {
          return (
            <>
              
                   
              <div
                className="cards"
                key={id}>
                    ${data.price}, {data.bedroom} bedroom
                    
            <img className="images" src={data.image} alt={data.name} width="100%"  height="300px" /> 
            <Popup trigger={<button className="button"> See more </button>} modal nested>
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header">
                    {" "}
                    {data.name}, {data.price}{" "}
                  </div>
                  <div className="content">
                    {" "}
                    {
                      // @ts-ignore
                      // data?.map((data, id) => (
                      //   <div key={id}>
                      //     {data.price}, {data.bedroom}
                      //     <img src={data.image} alt={data.name} width="100%" />

                      //   </div>
                      // ))
                      <img src={data.image} alt={data.name} width="100%" />
                    }
                  </div>
                  <div className="actions">
                    <button
                      className="button"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      close modal
                    </button>
                  </div>
                </div>
              )}
            </Popup>
                  </div>
                  
                  
              
              </>
              
        )})
      }</AllCards>
    </FilterSectionStyled>
  );
};

export default FilterSection;
