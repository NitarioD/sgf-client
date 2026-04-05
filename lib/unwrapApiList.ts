/**
 * Many APIs return T[] or { videos: T[] } / { data: T[] } / nested payloads.
 */
export function unwrapList(data: unknown): unknown[] {
  if (data == null) return [];
  if (Array.isArray(data)) return data;
  if (typeof data !== "object") return [];

  const o = data as Record<string, unknown>;
  const keys = [
    "videos",
    "data",
    "items",
    "results",
    "payload",
    "records",
    "result",
    "body",
  ] as const;

  for (const k of keys) {
    const v = o[k];
    if (Array.isArray(v)) return v;
  }

  const nested = findFirstArrayInValues(o);
  if (nested) return nested;

  return [];
}

/** If the payload is { someKey: [...] }, use the first array found. */
function findFirstArrayInValues(o: Record<string, unknown>): unknown[] | null {
  const arrays: unknown[][] = [];
  for (const v of Object.values(o)) {
    if (Array.isArray(v)) arrays.push(v);
  }
  if (arrays.length === 0) return null;
  arrays.sort((a, b) => b.length - a.length);
  return arrays[0] ?? null;
}
