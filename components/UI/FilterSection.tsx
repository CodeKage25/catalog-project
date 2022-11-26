import { FilterSectionStyled } from "../../styles/FilterSectionStyle/FilterSection"

const FilterSection: any = () => {
    return (
        <FilterSectionStyled>
            <div className="filter__container">
                <div className="content">Bedrooms</div>
                <div className="filter__buttons">
                <div><button><p>2</p></button></div>
                <div><button><p>3</p></button></div>
                <div><button><p>4</p></button></div>
                <div><button><p>5+</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Bathrooms</div>
                <div className="filter__buttons">
                <div><button><p>2</p></button></div>
                <div><button><p>3</p></button></div>
                <div><button><p>4+</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Bedrooms</div>
                <div className="filter__buttons">
                <div><button><p>1</p></button></div>
                <div><button><p>1</p></button></div>
                <div><button><p>1</p></button></div>
                <div><button><p>1</p></button></div>
                </div>
        </div>
            <div className="filter__container">
                <div className="content">Stories</div>
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