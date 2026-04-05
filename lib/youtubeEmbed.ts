/** Decode minimal HTML entities that sometimes appear in stored URLs */
function decodeHtmlEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

/**
 * Extract YouTube video id from watch / embed / shorts / youtu.be URLs.
 */
export function extractYouTubeVideoId(raw: string | undefined | null): string | null {
  if (raw == null || typeof raw !== "string") return null;
  let input = decodeHtmlEntities(raw);
  if (!input) return null;

  if (input.includes("<iframe")) {
    const m = input.match(/src\s*=\s*["']([^"']+)["']/i);
    if (m?.[1]) input = decodeHtmlEntities(m[1].trim());
  }

  if (input.startsWith("//")) input = `https:${input}`;
  if (!/^https?:\/\//i.test(input) && /youtube\.com|youtu\.be/i.test(input)) {
    input = `https://${input.replace(/^\/\//, "")}`;
  }

  const tryEmbed = input.match(/youtube\.com\/embed\/([^?&/#]+)/i);
  if (tryEmbed?.[1]) return tryEmbed[1];

  const tryWatch = input.match(/[?&]v=([^&#]+)/);
  if (tryWatch?.[1]) return tryWatch[1];

  const tryShort = input.match(/youtu\.be\/([^?&#/]+)/i);
  if (tryShort?.[1]) return tryShort[1];

  const tryShorts = input.match(/youtube\.com\/shorts\/([^?&#/]+)/i);
  if (tryShorts?.[1]) return tryShorts[1];

  const tryLive = input.match(/youtube\.com\/live\/([^?&#/]+)/i);
  if (tryLive?.[1]) return tryLive[1];

  return null;
}

/**
 * Canonical embed URL (works reliably in iframes).
 */
export function toYouTubeEmbedUrl(input: string | undefined | null): string {
  const id = extractYouTubeVideoId(input);
  if (!id) return "";
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
}

/** Watch URL for “open in YouTube” fallback */
export function toYouTubeWatchUrl(input: string | undefined | null): string {
  const id = extractYouTubeVideoId(input);
  if (!id) return "";
  return `https://www.youtube.com/watch?v=${id}`;
}
