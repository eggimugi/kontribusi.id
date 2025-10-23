const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://your-directus-instance.com";

export async function getItems(collection: string) {
  const res = await fetch(`${API_URL}/items/${collection}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data.data;
}
