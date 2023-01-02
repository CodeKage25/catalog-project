import { MouseEventHandler, useEffect, useState } from "react";
import {
  isNonZeroPositiveNumber,
  currencyFormatter,
  joinWithSpace,
  isNonZeroPositiveNumberWithPlusSign,
} from "../../../../helpers/util";
import styles from "./FilterButtonMultiSelect.module.css";

export const allowedStringOptions = ["classic", "modern"];

export const FilterButtonMultiSelect = ({
  labelName,
  filtState,
  options,
  setFiltState,
}: {
  labelName: string;
  filtState: string[];
  options: string[];
  setFiltState: (newState: string[]) => void;
}) => {
  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const currButton = e.target as HTMLButtonElement;
    const currSelectedVal = currButton.textContent ?? "";

    if (currSelectedVal.toLocaleLowerCase() === "any") {
      setFiltState([currSelectedVal]);
      return;
    }

    if (filtState.includes(currSelectedVal.trim())) {
      setFiltState(filtState.filter((x) => x !== currSelectedVal));
    } else {
      setFiltState([...filtState.filter((x) => x.toLocaleLowerCase() !== "any"), currSelectedVal]);
    }
  };

  // validate the options
  const validateOpt = (opt: string) => {
    if (
      !isNonZeroPositiveNumber(opt) &&
      !isNonZeroPositiveNumberWithPlusSign(opt) &&
      opt.toLocaleLowerCase() !== "any" &&
      !allowedStringOptions.includes(opt.toLocaleLowerCase())
    ) {
      throw new Error(`Pass good value in FilterButtonMultiSelect Component 😡😡😡`);
    }
  };

  return (
    <div className={joinWithSpace(styles.filter_input_container, "row", "space-between")}>
      <span className={styles.filter_input_label}>{labelName}</span>
      <div>
        {options && options.length
          ? options.map((optBtn) => {
              validateOpt(optBtn);
              return (
                <button
                  className={joinWithSpace(styles.optBtn, filtState.includes(optBtn) ? styles.selected_optBtn : "")}
                  key={optBtn}
                  onClick={onButtonClick}
                >
                  {optBtn}
                </button>
              );
            })
          : ""}
      </div>
    </div>
  );
};
