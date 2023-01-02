import { CatalogFilter } from "../components/HomeCatalog/CatalogFilter.interface";
import { appConfig } from "../config";
import { Daum } from "../providers/catalog/catalog.provider.interface";
import { isNonZeroPositiveNumberWithPlusSign } from "./util";

export const getFilteredCatalogData = (data: Daum[], filter: CatalogFilter) => {
  let filteredData: Daum[] = [...data];

  if (filter.textSearch.trim() !== "") {
    return filteredData.filter((item) => {
      const resultSearch = item.name.toLocaleLowerCase().search(filter.textSearch.toLocaleLowerCase()) > -1;
      console.log("result search: ", resultSearch);
      return resultSearch;
    });
  }

  if (filter.bedrooms.length > 0 && !filter.bedrooms.includes("Any")) {
    // check for n+ filter i.e. 4+ because if we have that filter then
    // logic is different (we get all values greater than N
    const indexOfGreaterThanNOption = filter.bedrooms.findIndex((x) => isNonZeroPositiveNumberWithPlusSign(x));
    console.log("indexOfGreaterThanNOption: ", indexOfGreaterThanNOption);
    if (indexOfGreaterThanNOption !== -1) {
      const filterVal = parseInt(filter.bedrooms[indexOfGreaterThanNOption], 10);
      filteredData = filteredData.filter((item) => item.bedrooms > filterVal);
    } else {
      filteredData = filteredData.filter((item) => filter.bedrooms.map((x) => parseInt(x, 10)).includes(item.bedrooms));
    }
  }

  if (filter.bathrooms.length > 0 && !filter.bathrooms.includes("Any")) {
    const indexOfGreaterThanNOption = filter.bathrooms.findIndex((x) => isNonZeroPositiveNumberWithPlusSign(x));
    if (indexOfGreaterThanNOption !== -1) {
      const filterVal = parseInt(filter.bathrooms[indexOfGreaterThanNOption], 10);
      filteredData = filteredData.filter((item) => item.bathrooms > filterVal);
    } else {
      filteredData = filteredData.filter((item) =>
        filter.bathrooms.map((x) => parseInt(x, 10)).includes(item.bathrooms)
      );
    }
  }

  if (filter.metadata.masterBedroomLevel.length > 0 && !filter.metadata.masterBedroomLevel.includes("Any")) {
    const indexOfGreaterThanNOption = filter.metadata.masterBedroomLevel.findIndex((x) =>
      isNonZeroPositiveNumberWithPlusSign(x)
    );
    if (indexOfGreaterThanNOption !== -1) {
      const filterVal = parseInt(filter.metadata.masterBedroomLevel[indexOfGreaterThanNOption], 10);
      filteredData = filteredData.filter((item) => item.metadata.masterBedroomLevel > filterVal);
    } else {
      filteredData = filteredData.filter((item) =>
        filter.metadata.masterBedroomLevel.map((x) => parseInt(x, 10)).includes(item.metadata.masterBedroomLevel)
      );
    }
  }

  if (filter.metadata.numGarageSpots.length > 0 && !filter.metadata.numGarageSpots.includes("Any")) {
    const indexOfGreaterThanNOption = filter.metadata.numGarageSpots.findIndex((x) =>
      isNonZeroPositiveNumberWithPlusSign(x)
    );
    if (indexOfGreaterThanNOption !== -1) {
      const filterVal = parseInt(filter.metadata.numGarageSpots[indexOfGreaterThanNOption], 10);
      filteredData = filteredData.filter((item) => item.metadata.numGarageSpots > filterVal);
    } else {
      filteredData = filteredData.filter((item) =>
        filter.metadata.numGarageSpots.map((x) => parseInt(x, 10)).includes(item.metadata.numGarageSpots)
      );
    }
  }

  if (filter.metadata.numStories.length > 0 && !filter.metadata.numStories.includes("Any")) {
    const indexOfGreaterThanNOption = filter.metadata.numStories.findIndex((x) =>
      isNonZeroPositiveNumberWithPlusSign(x)
    );
    if (indexOfGreaterThanNOption !== -1) {
      const filterVal = parseInt(filter.metadata.numStories[indexOfGreaterThanNOption], 10);
      filteredData = filteredData.filter((item) => parseInt(item.metadata.numStories ?? "", 10) > filterVal);
    } else {
      filteredData = filteredData.filter((item) =>
        filter.metadata.numStories.map((x) => parseInt(x, 10)).includes(parseInt(item.metadata.numStories ?? ""))
      );
    }
  }

  if (filter.metadata.style.length > 0 && !filter.metadata.style.includes("Any")) {
    filteredData = filteredData.filter((item) => filter.metadata.style.includes(item.metadata.style));
  }

  if (filter.price >= appConfig.maxHousePrice) {
    filteredData = filteredData.filter((item) => item.price >= filter.price);
  } else if (filter.price != 0) {
    filteredData = filteredData.filter((item) => item.price <= filter.price);
  }

  filteredData = filteredData.filter((item) => {
    const totalHeatedArea = getTotalHeatedArea(item);

    return filter.heatedArea.max >= totalHeatedArea && filter.heatedArea.min <= totalHeatedArea;
  });
  return filteredData;
};

export function getTotalHeatedArea(item: Daum) {
  return Object.values(item.metadata.heatedSqftBreakdown || ({} as object))
    .flat()
    .reduce((acc, curr) => acc + curr, 0);
}

