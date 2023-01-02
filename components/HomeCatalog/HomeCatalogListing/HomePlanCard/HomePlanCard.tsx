import { getTotalHeatedArea } from "../../../../helpers/catalog_filter";
import { currencyFormatter, joinWithSpace } from "../../../../helpers/util";
import { Daum } from "../../../../providers/catalog/catalog.provider.interface";
import styles from "./HomePlanCard.module.css";

export const HomePlanCard = ({ planItem, onClick }: { planItem: Daum; onClick: (currData: Daum) => void }) => {
  return (
    <div onClick={() => onClick(planItem)} className={joinWithSpace(styles.home_plan_card, "background-snow")}>
      <div className="full-width">
        <div className={styles.image_grid_content}>
          <img
            src={planItem.image}
            className={joinWithSpace("image-container-blur", styles.home_plan_image)}
            alt={planItem.name}
            loading="lazy"
          />
        </div>
        <div className={joinWithSpace(styles.top_info_card_column, "column")}>
          <div className="info-row">
            <span>{planItem.name}</span>
            <span>{currencyFormatter.format(planItem.price)}</span>
          </div>
          <div className="text-spruce">
            <span className="text-spruce">
              {`${planItem.metadata.numFloors} ${planItem.metadata.numFloors > 1 ? "Stories" : "Story"}`}
              <span className="span-space"> | </span>
              {`Primary Suite on Level ${planItem.metadata.masterBedroomLevel + 1}`}
            </span>
          </div>
          <div className="text-spruce">
            <span className="text-spruce">
              {`${planItem.bedrooms} Bed`}
              <span className="span-space"> | </span>
              {`${planItem.bathrooms} Bath`}
              <span className="span-space"> | </span>
              {`${getTotalHeatedArea(planItem)}+ SF`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
