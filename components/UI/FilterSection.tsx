import { FilterSectionStyled } from "../../styles/FilterSectionStyle/FilterSection"
import { useState } from "react";

const FilterSection: any = () => {
    const [filtredImage, setFiltredImage] = useState(null);
  
    function handleChange() {

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