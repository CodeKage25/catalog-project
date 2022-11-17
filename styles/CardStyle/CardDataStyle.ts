import styled from "styled-components";

export const CardDataStyled = styled.section`
display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 10px;
    row-gap: 15px;
    flex-wrap: wrap;



.full__width {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid grey;
    width: ;
}

.image__grid {
    position: relative;
    display: flex;
    border-radius: 10px 10px 0 0;
    justify-content: space-between;
    overflow: hidden;
}

.image {
    background-size: cover;
    background-position: center;
    object-fit: cover;
    object-position: center;
    background-repeat: no-repeat;
    aspect-ratio: 3/2;
    border-radius: 10px 10px 0 0;
    max-height: 300px;
}

.details {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

`