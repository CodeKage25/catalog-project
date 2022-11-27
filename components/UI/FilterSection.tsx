// @ts-nocheck
import { matchSorter } from "match-sorter";
import { useReducer, useState } from "react";
import { cardData } from "../../helpers/data";
import { FilterSectionStyled } from "../../styles/FilterSectionStyle/FilterSection";

function filterReducer(state, action) {
    const { type, payload } = action; 
    switch (type) {
        case 'bedroom': {
            return {
                ...state,
                bedroom: payload,
            }
      };
      case 'bathroom': {
        return {
            ...state,
            bathroom: payload,
        };
      }
      case 'story': {
          return {
              ...state,
              story: payload,
          }
      }
      default:
        return state;
    }
}

const initialState = {
    bedroom: 2,
    bathroom: 0,
    story: 2,
}

const FilterSection: any = () => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const [data, setData] = useState(cardData)
  const [priceRange, setPriceRange] = useState(350);

    const { bedroom, bathroom, story } = state;
    console.log(data, priceRange)
    function handleChange(type:string, payload: number) {
      if (type === "bedroom") {
        dispatch({ type: type, payload: payload });
        console.log(priceRange, bedroom, story)
        setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story"], `${priceRange} ${bedroom} ${story}`));
      }
      else if (type === "bathroom") {
        dispatch({ type: type, payload: payload })
        setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story"], `${priceRange} ${bedroom} ${story}`));
      }
      else if (type === "story") { 
        dispatch({ type: type, payload: payload })
        setData(fuzzySearchMultipleWords(cardData, ["price", "bedroom", "story"], `${priceRange} ${bedroom} ${story}`));
      }
    }
    
  function fuzzySearchMultipleWords(
  rows:any, // This is the data that we want to search
  keys:any, // this keys is an array of strings that determine what field to be searched through
  filterValue: string, // This is the value that we want to search might be a simple string or multiple strings
) {
  if (!filterValue || !filterValue.length) {
    return rows
  }

  const terms = filterValue.split(' ')
  if (!terms) {
    return rows
  }
  return terms.reduceRight(
    (results, term) => matchSorter(results, term, {keys}),
    rows,
  )
  }
    const priceChanger = (event) => setPriceRange(event.target.value);
  
    return (
        <FilterSectionStyled>
            <div className="content">
          <div className="detail">House Budget</div>
          Bedroom : {bedroom}
          Bathroom: {bathroom}
          Story: {story}
          <input className="slider"
            type="range"
            id="priceRange"
            min="350"
                    max="1000"
                    value={priceRange}
            
                    
                    onChange={(e) => priceChanger(e)}
                />
                <div className="val">
                    {/* val */}
                </div>
                
                </div>
            <div className="filter__container">
                <div className="content">Bedrooms</div>
                <div className="filter__buttons">
                <div onClick={() => handleChange("bedroom", 2)}><button><p>2</p></button></div>
                <div onClick={() => handleChange("bedroom", 3)}><button><p>3</p></button></div>
                <div onClick={() => handleChange("bedroom", 4)}><button><p>4</p></button></div>
                <div onClick={() => handleChange("bedroom",5)}><button><p>5+</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Bathrooms</div>
                <div className="filter__buttons">
                <div onClick={() => handleChange("bathroom", 2)}><button><p>2</p></button></div>
                <div onClick={() => handleChange("bathroom", 3)}><button><p>3</p></button></div>
                <div onClick={() => handleChange("bathroom", 4)}><button><p>4+</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Story</div>
                <div className="filter__buttons">
                <div onClick={() => handleChange("story", 2)}><button><p>any</p></button></div>
                <div onClick={() => handleChange("story", 3)}><button><p>1</p></button></div>
                <div onClick={() => handleChange("story", 4)}><button><p>2</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Bedrooms</div>
                <div className="filter__buttons">
                <div onClick={() => handleChange("bedroom", 2)}><button><p>1</p></button></div>
                <div onClick={() => handleChange("bedroom", 2)}><button><p>1</p></button></div>
                <div onClick={() => handleChange("bedroom", 2)}><button ><p>1</p></button></div>
                <div onClick={() => handleChange("bedroom", 2)}><button><p>1</p></button></div>
                </div>
        </div>
        
    </FilterSectionStyled>
    )
}

export default FilterSection