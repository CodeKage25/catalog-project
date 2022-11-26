import styled from "styled-components";

export const FilterSectionStyled = styled.section`
height: calc(100% - 120px);
overflow: scroll;
display: flex;
    flex-direction: column;
    padding: 20px;
    row-gap: 20px;
    width: 352px;
    


.filter__container {
    display: flex;
    flex-direction: row;
    padding-right: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    row-gap: 10px;
}

.content {
    display: flex;
    justify-content: space-between;
}

.filter__buttons {
    display: flex;
    column-gap: 5px;

}

.filter__buttons  button {
    height: 25px;
    padding: 5px 11px;
    border-radius: 8px;
    cursor:pointer;
    border-color: grey;
    border-radius: 8px;
  color:#fff;
}

.filter__buttons  button p {
    color: black;
    text-align: center;
}

.slider {
    
    
}

.val {
    width: 47px !important;
    margin-top: 0 !important;
    margin-left: 0px !important;
    justify-content: center !important;
    align-items: center !important;
}

.detail {
    letter-spacing: 0.004em;
}
`