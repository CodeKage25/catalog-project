import { useState } from "react";
import { joinWithSpace } from "../../../helpers/util";
import { Daum } from "../../../providers/catalog/catalog.provider.interface";
import styles from "./HomeCatalogListing.module.css";
import { HomePlanCard } from "./HomePlanCard/HomePlanCard";
import { HomePlanDetailsModal } from "./HomePlanDetails/HomePlanDetailsModal";

export const HomeCatalogListing = ({ filtered_catalog_data: homeList }: { filtered_catalog_data: Daum[] }) => {
  const [isModalVisible, setIsModalVisibleState] = useState(false);
  const [currSelectedPlan, setCurrSelectedPlan] = useState(null as Daum | null);

  const handleCardClicked = (currData: Daum) => {
    setCurrSelectedPlan(currData);
    setIsModalVisibleState(true);
  };

  return (
    <div className={joinWithSpace(styles.listings_container, "column")}>
      <div className={styles.listings}>
        <div className={joinWithSpace(styles.all_cards, "hide-scrollbar")}>
          <div className={styles.home_plan_cards}>
            {homeList && homeList.length ? (
              homeList.map((val, i) => <HomePlanCard onClick={handleCardClicked} key={val.name} planItem={val} />)
            ) : (
              <>Nothing found</>
            )}
          </div>
        </div>
      </div>
      <HomePlanDetailsModal
        isModalVisible={isModalVisible}
        currSelectedPlan={currSelectedPlan}
        setIsModalState={setIsModalVisibleState}
      ></HomePlanDetailsModal>
    </div>
  );
};
