import { FunctionComponent } from "react";
import { getTotalHeatedArea } from "../../../../helpers/catalog_filter";
import { joinWithSpace } from "../../../../helpers/util";
import { Daum } from "../../../../providers/catalog/catalog.provider.interface";
import styles from "./HomePlanDetailsModal.module.css";

//TODO (refactor) Can be refactored to extract this Modal to a shared component
// and using HOC pattern

export const HomePlanDetailsModal = ({
  isModalVisible,
  currSelectedPlan,
  setIsModalState,
}: {
  currSelectedPlan: Daum | null;
  isModalVisible: boolean;
  setIsModalState: (newState: boolean) => void;
}) => {
  const HeaderSection = (
    <div className={styles.home_preview_header}>
      <div className="info-row">
        <span className={styles.name_section}>
          <span className={styles.planTitle}>{currSelectedPlan?.name}</span>
          <span className="text-spruce">{currSelectedPlan?.bedrooms + " Bed"}</span>
          <span className="span-space"> | </span>
          <span className="text-spruce">{currSelectedPlan?.bathrooms + " Bath"}</span>
          <span className="span-space"> | </span>
          <span className="text-spruce">{currSelectedPlan ? getTotalHeatedArea(currSelectedPlan) + " SF" : ""}</span>
        </span>
        <button onClick={() => setIsModalState(false)} className={styles.close_modal_button}>
          X
        </button>
      </div>
    </div>
  );

  return isModalVisible ? (
    <div className={joinWithSpace("modal-overlay", isModalVisible ? "visble" : "")}>
      <div className={styles.home_preview_modal}>
        <div className={joinWithSpace(styles.home_preview, "hide-scrollbar")}>
          {HeaderSection}
          <div className={joinWithSpace("hide-scrollbar", styles.home_preview_content)}></div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
