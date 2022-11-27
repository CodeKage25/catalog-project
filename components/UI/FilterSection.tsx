// @ts-nocheck
import { useReducer } from "react";
import { FilterSectionStyled } from "../../styles/FilterSectionStyle/FilterSection";

function filterReducer(state, action) {
    switch (action.type) {
        case 'bedroom': {
            return {
                ...state,
                showBedroom: state.showBedroom + 1,
            }
        };
    

        case 'bathroom': {
            return {
                ...state,
                showBedroom: state.showBedroom + 1,
            };
        }
            
        case 'story': {
            return {
                ...state,
                showStory: state.showStory + 1,
            }
        }
        default:
            return state;
    }
}

const initialState = {
    bedroom: 2,
    bathroom: 2,
    story: "any",
}

const FilterSection: any = () => {
    // const [filtredImage, setFiltredImage] = useState(null);
    const [state, dispatch] = useReducer(filterReducer, initialState);
    const { bedroom, bathroom, story } = state;
    function handleChange(dispatchType) {
      if (dispatch({ type: { dispatchType } })) return bedroom;
      else if (dispatch({ type: { dispatchType } })) return bathroom;
      else if (dispatch({ type: { dispatchType } })) return story;
        else {
            return;
        }
        
    }

  
    return (
        <FilterSectionStyled>
            <div className="content">
          <div className="detail">House Budget</div>
          <input className="slider"
            type="range"
            id="priceRange"
            min="0"
            max="1000"
            
                />
                <div className="val">
                    val
                </div>
                
                </div>
            <div className="filter__container">
                <div className="content">Bedrooms</div>
                <div className="filter__buttons">
                <div onClick={handleChange("bedroom")}><button><p>2</p></button></div>
                <div onClick={handleChange("bedroom")}><button><p>3</p></button></div>
                <div onClick={handleChange("bedroom")}><button><p>4</p></button></div>
                <div onClick={handleChange("bedroom")}><button><p>5+</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Bathrooms</div>
                <div className="filter__buttons">
                <div onClick={handleChange}><button><p>2</p></button></div>
                <div onClick={handleChange}><button><p>3</p></button></div>
                <div onClick={handleChange}><button><p>4+</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Bedrooms</div>
                <div className="filter__buttons">
                <div onClick={handleChange}><button onClick={handleChange}><p>1</p></button></div>
                <div onClick={handleChange}><button><p>1</p></button></div>
                <div onClick={handleChange}><button ><p>1</p></button></div>
                <div onClick={handleChange}><button><p>1</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Story</div>
                <div className="filter__buttons">
                <div><button><p>any</p></button></div>
                <div><button><p>1</p></button></div>
                <div><button><p>2</p></button></div>
                </div>
        </div>
        
    </FilterSectionStyled>
    )
}

export default FilterSection