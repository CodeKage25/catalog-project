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
