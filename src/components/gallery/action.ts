import { CloudinaryImage } from "@/components/gallery/image-item";

export async function FetchImages({
  fetchOptions,
}: {
  fetchOptions?: fetchOptionsType;
}): Promise<CloudinaryAPIResponse> {
  const sda: Record<string, string> = {
    max_results: fetchOptions?.maxResults || "10",
    tags: fetchOptions?.tags || "",
    resource_type: fetchOptions?.resourceType || "image",
  };
  if (fetchOptions?.nextCursor) sda.next_cursor = fetchOptions?.nextCursor;

  const params = new URLSearchParams(sda);

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
  nextCursor?: string;
}

export interface CloudinaryAPIResponse {
  resources: CloudinaryImage[];
  next_cursor?: string;
}
