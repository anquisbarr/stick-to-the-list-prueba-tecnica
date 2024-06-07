import { Product } from "../types/product";

interface SearchResponse {
  data: Product[];
}

export async function searchProducts(
  keyword: string
): Promise<[SearchResponse | null, Error | null]> {
  try {
    const response = await fetch("http://localhost:8000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ keyword }),
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    const data: SearchResponse = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error as Error];
  }
}
