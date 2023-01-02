import catalogResponseMock from "../../mocks/catalog.json";
import { CatalogResponse, Daum } from "./catalog.provider.interface";

export async function getCatalog(): Promise<Daum[]> {
  const data = await new Promise<Daum[]>((resolve, reject) => {
    setTimeout(() => {
      resolve((catalogResponseMock as CatalogResponse).data);
    }, 1000);
  });
  return data;
}
