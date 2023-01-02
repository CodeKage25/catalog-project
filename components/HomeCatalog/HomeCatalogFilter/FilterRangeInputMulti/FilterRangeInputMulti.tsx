import { useState } from "react";
import { appConfig } from "../../../../config";
import { currencyFormatter, joinWithSpace } from "../../../../helpers/util";
import MultiRangeSlider from "../../../Shared/MultiRangeSlider/MultiRangeSlider";
import styles from "./FilterRangeInputMulti.module.css";

export const FilterRangeInputMulti = ({ labelName, valMin, valMax, setFiltState }) => {
  return (
    <div className={joinWithSpace(styles.filter_input_container, "row", "space-between")}>
      <span className={styles.filter_input_label}>{labelName}</span>
      <MultiRangeSlider
        min={valMin}
        max={valMax}
        onChange={setFiltState}
        labelFormatter={(text) => (parseInt(text, 10) >= appConfig.heatedAreaMax ? `${text}+ SF` : `${text} SF`)}
      />
    </div>
  );
};
