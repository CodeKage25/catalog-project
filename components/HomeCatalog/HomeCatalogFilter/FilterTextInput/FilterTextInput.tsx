import { joinWithSpace } from "../../../../helpers/util";
import styles from "./FilterTextInput.module.css";

export const FilterTextInput = ({ placeholderText, label, filtState, setFiltState }) => {
  const handleChange = (e) => {
    setFiltState(e.target.value);
  };
  return (
    <div className={joinWithSpace(styles.filter_input_container, "row", "space-between")}>
      <div className={styles.filter_text_label}>{label}</div>
      <input
        className={styles.filter_text_input}
        type="text"
        placeholder={placeholderText}
        value={filtState}
        onChange={handleChange}
      />
    </div>
  );
};
