/**
 * Picks a playable URL from a video record (handles alternate API field names).
 * Backend often uses `embedlink` (see admin editVideo), not only `link`.
 */
export function resolveVideoLink(entry: unknown): string {
  if (entry == null || typeof entry !== "object") return "";
  const o = entry as Record<string, unknown>;
  const keys = [
    "link",
    "embedlink",
    "embedLink",
    "url",
    "youtubeUrl",
    "youtube",
    "embedUrl",
    "videoUrl",
    "src",
  ] as const;

  for (const k of keys) {
    const v = o[k];
    if (typeof v === "string" && v.trim()) {
      return extractUrlFromMaybeHtml(v.trim());
    }
  }
  return "";
}

/** If the admin pasted a full iframe snippet, pull out src. */
function extractUrlFromMaybeHtml(s: string): string {
  if (s.includes("<iframe")) {
    const m = s.match(/src\s*=\s*["']([^"']+)["']/i);
    if (m?.[1]) return m[1].trim();
  }
  return s;
}
