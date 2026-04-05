import sortByTags from "@/helperFunctions/sortVideosByTagname";

export type VideoEntry = Record<string, unknown>;

/**
 * Redux may hold either grouped rows `[tag, clips][]` or raw `/videos` docs.
 * Always produce `[tag, clips][]` for the player UI.
 */
export function normalizeToVideoGroups(posts: unknown): [string, VideoEntry[]][] {
  if (!Array.isArray(posts) || posts.length === 0) return [];

  const first = posts[0];
  const looksGrouped =
    Array.isArray(first) &&
    first.length === 2 &&
    typeof first[0] === "string" &&
    Array.isArray(first[1]);

  if (looksGrouped) {
    return posts as [string, VideoEntry[]][];
  }

  return sortByTags(posts);
}
