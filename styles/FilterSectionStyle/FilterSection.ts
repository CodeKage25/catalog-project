import styled from "styled-components";

export const FilterSectionStyled = styled.section`
display: flex;
    overflow: hidden;
    height: 100%;
    height: 100vh;
    
    
.sidebar {
    display: flex;
    flex-direction: column;
    padding: 20px;
    row-gap: 20px;
    width: 352px;
    
    
}

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
    cursor: pointer;
    
}
.buttons:active {
    color:green;
}

.buttons:focus {
    color:green;
}

.buttons:target {
    color: green
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

.popup-content {
    margin: auto;
    background: rgb(255, 255, 255);
    width: 50%;
    padding: 5px;
  }
  .popup-arrow {
    color: rgb(255, 255, 255);
  }
  [role='tooltip'].popup-content {
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px;
  }
  
  .popup-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  [data-popup='tooltip'].popup-overlay {
    background: transparent;
  }
`

export const AllCards = styled.section`
padding: 0 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    width: 70%;
    min-height: 100%;
   
    
    
    

.card__container {
    height: 100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 15px;
    padding-bottom: 220px;
}

.cards {
    padding: 0 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
}

.images{
    flex-wrap: wrap;
}


`
export const SideBar = styled.section`

    display: flex;
    flex-direction: column;
    padding: 20px;
    row-gap: 20px;
    width: 352px;
    width: 40%;
    


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
    cursor: pointer;
    
}
.buttons:active {
    color:green;
}

.buttons:focus {
    color:green;
}

.buttons:target {
    color: green
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