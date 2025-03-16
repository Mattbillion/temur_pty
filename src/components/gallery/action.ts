import { CloudinaryImage } from "@/components/gallery/render-images";

export async function FetchImages({
  fetchOptions,
}: {
  fetchOptions?: fetchOptionsType;
}): Promise<CloudinaryAPIResponse> {
  const params = new URLSearchParams({
    max_results: fetchOptions?.maxResults || "10",
    tags: fetchOptions?.tags || "",
    resource_type: fetchOptions?.resourceType || "image",
  });

  const apiUrl = `/api/gallery?${params.toString()}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return response.json();
}

interface fetchOptionsType {
  maxResults?: string;
  tags?: string;
  resourceType?: string;
}

export interface CloudinaryAPIResponse {
  resources: CloudinaryImage[];
}
