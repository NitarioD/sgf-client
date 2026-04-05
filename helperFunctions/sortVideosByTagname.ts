type VideoRow = {
  tag?: { tag?: string } | string;
  link?: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
};

function tagLabel(tag: VideoRow["tag"]): string {
  if (tag == null) return "General";
  if (typeof tag === "string") return tag.trim() || "General";
  if (typeof tag === "object" && tag.tag) return String(tag.tag).trim() || "General";
  return "General";
}

/** Groups flat video list by tag name → Object.entries shape for the UI. */
const sortByTags = (data: unknown): [string, VideoRow[]][] => {
  try {
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }

    const newData: Record<string, VideoRow[]> = {};
    const uniqueTags: string[] = [];

    (data as VideoRow[]).forEach((video) => {
      const tagName = tagLabel(video.tag);

      if (!uniqueTags.includes(tagName)) {
        uniqueTags.push(tagName);
        newData[tagName] = [video];
      } else {
        newData[tagName].push(video);
      }
    });

    return Object.entries(newData);
  } catch {
    return [];
  }
};

export default sortByTags;
