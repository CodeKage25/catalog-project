export interface CatalogFilter {
  bedrooms: string[];
  bathrooms: string[];
  price: number;
  metadata: {
    numStories: string[];
    masterBedroomLevel: string[];
    numGarageSpots: string[];
    style: string[];
  };
  heatedArea: {
    min: number;
    max: number;
  };
  textSearch: string;
}
