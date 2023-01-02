import { HomeCatalogFilter } from "./HomeCatalogFilter/HomeCatalogFilter";
import { HomeCatalogListing } from "./HomeCatalogListing/HomeCatalogListing";
import styles from "./HomeCatalog.module.css";
import { joinWithSpace } from "../../helpers/util";
import { useEffect, useState } from "react";
import { Daum } from "../../providers/catalog/catalog.provider.interface";
import { getFilteredCatalogData } from "../../helpers/catalog_filter";
import { CatalogFilter } from "./CatalogFilter.interface";

export const HomeCatalog = ({ catalog_data }: { catalog_data: Daum[] }) => {
  const [filteredCatalog, setFilteredCatalog] = useState([] as Daum[]);

  useEffect(() => {
    setFilteredCatalog(catalog_data);
  }, [catalog_data]);

  const handleFilterChange = (updatedFilter: CatalogFilter) => {
    const filteredCatalog = getFilteredCatalogData(catalog_data, updatedFilter);
    setFilteredCatalog([...filteredCatalog]);
  };

  return (
    <div className={joinWithSpace("row", "hide-scrollbar", styles.catalog_container)}>
      <HomeCatalogFilter onFilterChange={handleFilterChange}></HomeCatalogFilter>
      <HomeCatalogListing filtered_catalog_data={filteredCatalog}></HomeCatalogListing>
    </div>
  );
};
