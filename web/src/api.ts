import type { Stats, SourceConfig, CategoryConfig, EntryMeta } from "./types";

const BASE = import.meta.env.BASE_URL + "data";

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}/${path}`);
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return res.json();
}

export const api = {
  getStats: () => fetchJson<Stats>("stats.json"),
  getSources: () => fetchJson<SourceConfig[]>("sources.json"),
  getCategories: () => fetchJson<CategoryConfig[]>("categories.json"),
  getEntries: () => fetchJson<EntryMeta[]>("entries.json"),
  getEntriesByCategory: (id: string) => fetchJson<EntryMeta[]>(`entries-${id}.json`),
};
