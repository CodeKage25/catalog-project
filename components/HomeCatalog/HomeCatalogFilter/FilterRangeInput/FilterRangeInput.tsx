import { appConfig } from "../../../../config";
import { currencyFormatter, joinWithSpace } from "../../../../helpers/util";
import styles from "./FilterRangeInput.module.css";

export const FilterRangeInput = ({ labelName, valMin, valMax, step, filtState, setFiltState }) => {
  const handleChange = (e) => {
    setFiltState(e.target.value);
  };
  return (
    <div className={joinWithSpace(styles.filter_input_container, "row", "space-between")}>
      <span
        title="click to reset filter ;)"
        className={styles.filter_input_label}
        onClick={() => {
          setFiltState(0);
        }}
      >
        {labelName}
      </span>
      <input
        className={styles.filt_range_input}
        type="range"
        min={valMin}
        max={valMax}
        step={step}
        defaultValue={filtState}
        onMouseUp={handleChange}
      />
      <span className={styles.filter_input_label}>
        {filtState ? currencyFormatter.format(filtState) : "Any"}
        {filtState >= appConfig.maxHousePrice ? "+" : ""}
      </span>
    </div>
  );
};
