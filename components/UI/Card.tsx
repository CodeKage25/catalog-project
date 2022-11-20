/* eslint-disable react/jsx-key */

import { cardData } from "../../helpers/data";
import Image from "next/image";
import { CardDataStyled } from "../../styles/CardStyle/CardDataStyle";
import React from "react";

const Card = (props: any) => {
//   const { image, name, story, bedroom, bathroom, price } = props;
//   console.log(image, name, story, bedroom, bathroom, price);

  return (
    <React.Fragment>
      {cardData.map((item) => {
        return (
          <CardDataStyled>
            <div className="full__width">
              <div className="image__grid">
                <img className="image" src={item.image} alt={""} style={{ width: "450px" }} />
              </div>
                    <div className="details">
                        
              </div>
            </div>
          </CardDataStyled>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
/*
<Box width={200} marginTop={10} marginLeft={2}>
            <Slider
              size="small"
              min={350}
              max={1000}
              defaultValue={350}
              aria-label="Small"
              value={showPriceRange}
              valueLabelDisplay="auto"
              step={25}
              onChange={(e) => priceChanger(e)}
            />
          </Box>

 */         