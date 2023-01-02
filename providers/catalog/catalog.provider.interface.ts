export interface CatalogResponse {
  status: string;
  data: Daum[];
  message: string;
}

export interface Daum {
  homePlanId: string;
  sceneId: string;
  name: string;
  description: string;
  insideMapsUrl: any;
  image: string;
  isActive: boolean;
  metadata: Metadata;
  price: number;
  bathrooms: number;
  bedrooms: number;
  sqft: number;
  shouldRunPlacement: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Metadata {
  phase: any;
  style: string;
  gcsPath: string;
  adminTags?: any[];
  numFloors: any;
  garageSqft?: number;
  garageType?: string;
  styleDesc1?: string;
  styleDesc2?: string[];
  featureTags: string[];
  qualityTags?: any[];
  unheatedArea: number;
  footprintWidth: number;
  numGarageSpots: number;
  bathroomDetails?: BathroomDetails;
  footprintLength: number;
  garageSwitchable?: boolean;
  similarHomePlans?: string[];
  garageOrientation?: string;
  masterBedroomLevel: number;
  heatedSqftBreakdown?: HeatedSqftBreakdown;
  numStories?: string;
  basementTags?: any[];
  basementSloping: any;
  basementInOriginalDesign?: any[];
}

export interface BathroomDetails {
  bath1: string[];
  bath2: string[];
  bath3?: string[];
  bath4?: string[];
  bath5?: string[];
}

export interface HeatedSqftBreakdown {
  level1: number;
  level2?: number;
  optBonus?: number;
  level3?: number;
  basement?: number;
}
