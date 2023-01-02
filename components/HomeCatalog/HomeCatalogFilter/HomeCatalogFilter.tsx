import { useEffect, useState } from "react";
import { isNonZeroPositiveNumberWithPlusSign, joinWithSpace } from "../../../helpers/util";
import { Daum } from "../../../providers/catalog/catalog.provider.interface";
import { CatalogFilter } from "../CatalogFilter.interface";
import HomeCatalogStyles from "../HomeCatalog.module.css";
import { FilterButtonMultiSelect } from "./FilterButtonMultiSelect/FilterButtonMultiSelect";
import { FilterRangeInput } from "./FilterRangeInput/FilterRangeInput";
import { FilterRangeInputMulti } from "./FilterRangeInputMulti/FilterRangeInputMulti";
import styles from "./HomeCatalogFilter.module.css";
import { appConfig } from "../../../config";
import { FilterTextInput } from "./FilterTextInput/FilterTextInput";

const ogFilterState: CatalogFilter = {
  bathrooms: [],
  bedrooms: [],
  price: 0,
  metadata: {
    numStories: [],
    masterBedroomLevel: [],
    numGarageSpots: [],
    style: [],
  },
  heatedArea: {
    min: appConfig.heatedAreaMin,
    max: appConfig.heatedAreaMax,
  },
  textSearch: "",
};

export const HomeCatalogFilter = ({ onFilterChange }: { onFilterChange: (updatedFilter: CatalogFilter) => void }) => {
  const [filterState, setFilterState] = useState(ogFilterState as CatalogFilter);

  const [filtBathroom, setFiltBathroom] = useState(ogFilterState.bathrooms);
  const [filtBedroom, setFiltBedroom] = useState(ogFilterState.bedrooms);
  const [filtStories, setFiltStories] = useState(ogFilterState.metadata.numStories);
  const [filtMasterBedroomLevel, setFiltMasterBedroomLevel] = useState(ogFilterState.metadata.masterBedroomLevel);
  const [filtGarageSpots, setFiltGarageSpots] = useState(ogFilterState.metadata.numGarageSpots);
  const [filtStyle, setFiltStyle] = useState(ogFilterState.metadata.style);
  const [filtPrice, setFiltPrice] = useState(ogFilterState.price);
  const [filtHeatedArea, setFiltHeatedArea] = useState(ogFilterState.heatedArea);
  const [filtTextSearch, setFiltTextSearch] = useState(ogFilterState.textSearch);

  useEffect(() => {
    onFilterChange(filterState);
  }, [filterState]);

  useEffect(() => {
    setFilterState({ ...filterState, ...{ bathrooms: filtBathroom } });
  }, [filtBathroom]);

  useEffect(() => {
    setFilterState({ ...filterState, ...{ bedrooms: filtBedroom } });
  }, [filtBedroom]);

  useEffect(() => {
    setFilterState({ ...filterState, ...{ metadata: { ...filterState.metadata, numGarageSpots: filtGarageSpots } } });
  }, [filtGarageSpots]);

  useEffect(() => {
    setFilterState({
      ...filterState,
      ...{ metadata: { ...filterState.metadata, masterBedroomLevel: filtMasterBedroomLevel } },
    });
  }, [filtMasterBedroomLevel]);

  useEffect(() => {
    setFilterState({
      ...filterState,
      ...{ metadata: { ...filterState.metadata, numStories: filtStories } },
    });
  }, [filtStories]);

  useEffect(() => {
    setFilterState({
      ...filterState,
      ...{ metadata: { ...filterState.metadata, style: filtStyle } },
    });
  }, [filtStyle]);

  useEffect(() => {
    setFilterState({
      ...filterState,
      ...{ price: filtPrice },
    });
  }, [filtPrice]);

  useEffect(() => {
    setFilterState({
      ...filterState,
      ...{ heatedArea: { ...filtHeatedArea } },
    });
  }, [filtHeatedArea]);

  useEffect(() => {
    setFilterState({
      ...filterState,
      ...{ textSearch: filtTextSearch },
    });
  }, [filtTextSearch]);

  return (
    <div className={joinWithSpace("column", styles.home_plan_filters)}>
      <div className={styles.filters_container}>
        <div className="header">Catalog Filters</div>
        <div className={HomeCatalogStyles.horizontal_break}></div>

        <FilterRangeInput
          step={appConfig.rangeInputStep}
          valMax={appConfig.maxHousePrice}
          valMin={appConfig.minHousePrice}
          filtState={filtPrice}
          setFiltState={setFiltPrice}
          labelName="House Budget"
        />
        <div className={HomeCatalogStyles.horizontal_break}></div>

        <FilterButtonMultiSelect
          labelName="Bedrooms"
          options={["2", "3", "4", "5+"]}
          filtState={filtBedroom}
          setFiltState={setFiltBedroom}
        />

        <FilterButtonMultiSelect
          labelName="Bathrooms"
          options={["2", "3", "4+"]}
          filtState={filtBathroom}
          setFiltState={setFiltBathroom}
        />

        <FilterButtonMultiSelect
          labelName="Stories"
          options={["Any", "1", "2"]}
          filtState={filtStories}
          setFiltState={setFiltStories}
        />

        <FilterButtonMultiSelect
          labelName="Primary Bedroom Level"
          options={["Any", "1", "2"]}
          filtState={filtMasterBedroomLevel}
          setFiltState={setFiltMasterBedroomLevel}
        />

        <FilterButtonMultiSelect
          labelName="Garage Spaces"
          options={["Any", "1", "2+"]}
          filtState={filtGarageSpots}
          setFiltState={setFiltGarageSpots}
        />

        <div className={HomeCatalogStyles.horizontal_break}></div>

        <FilterButtonMultiSelect
          labelName="Style Category"
          options={["Classic", "Modern"]}
          filtState={filtStyle}
          setFiltState={setFiltStyle}
        />

        <div className={HomeCatalogStyles.horizontal_break}></div>

        <FilterRangeInputMulti
          valMax={appConfig.heatedAreaMax}
          valMin={appConfig.heatedAreaMin}
          setFiltState={setFiltHeatedArea}
          labelName="Heated Area"
        />

        <div className={HomeCatalogStyles.horizontal_break}></div>
        <FilterTextInput
          label={"Home Search"}
          placeholderText={"House Plan Name"}
          filtState={filtTextSearch}
          setFiltState={setFiltTextSearch}
        />
      </div>
    </div>
  );
};
