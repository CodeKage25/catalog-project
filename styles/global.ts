import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    scroll-behavior: smooth;
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