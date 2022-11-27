// @ts-nocheck
import { FilterSectionStyled } from "../../styles/FilterSectionStyle/FilterSection"
import React, { useState, useReducer } from "react";

function filterReducer(state, action) {
    const { type, payload } = action; 
    switch (type) {
        case 'bedroom': {
            return {
                ...state,
                showBedroom: payload,
            }
        };
    

        case 'bathroom': {
            return {
                ...state,
                showBathroom: payload,
            };
        }
            
        case 'story': {
            return {
                ...state,
                showStory: payload,
            }
        }
        default:
            return state;
    }
}

// const initialState = {
//     bedroom: 2,
//     bathroom: 2,
//     story: "any",
// }

const FilterSection: any = () => {
    // const [filtredImage, setFiltredImage] = useState(null);
    // const [state, dispatch] = useReducer(filterReducer, initialState);
    const [{ showBedroom, showBathroom, showStory }, dispatch] = useReducer(filterReducer, {
        showBedroom: 2,
        showBathroom: 2,
        showStory: "any",
    });
    // const { bedroom, bathroom, story } = state;
    const handleChange = (type, payload) => {
        if (dispatch( type === type )) return showBedroom;
        else if (dispatch(type === type)) return showBathroom;
        else if (dispatch(type === type)) return showStory;
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
                    <div onClick={handleChange}><button><p>2</p></button></div>
                <div onClick={handleChange}><button><p>3</p></button></div>
                <div onClick={handleChange}><button><p>4</p></button></div>
                <div onClick={handleChange}><button><p>5+</p></button></div>
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
                <div onClick={handleChange}><button><p>1</p></button></div>
                <div onClick={handleChange}><button><p>1</p></button></div>
                <div onClick={handleChange}><button ><p>1</p></button></div>
                <div onClick={handleChange}><button><p>1</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Story</div>
                <div className="filter__buttons">
                <div onClick={handleChange}><button><p>any</p></button></div>
                <div onClick={handleChange}><button><p>1</p></button></div>
                <div onClick={handleChange}><button><p>2</p></button></div>
                </div>
        </div>
           
        
       
    </FilterSectionStyled>
    )
}

export default FilterSection