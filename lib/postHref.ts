/**
 * Public post routes use 1-based index into each category list (see slug pages + templates).
 */
export type PostList = Record<string, unknown>[];

export function resolvePostHref(
  post: Record<string, unknown>,
  lists: {
    publication: PostList;
    teaching: PostList;
    evangelism: PostList;
  }
): string | null {
  const id = post._id;
  const title = typeof post.title === "string" ? post.title : "";
  const category =
    typeof post.category === "string" ? post.category.toLowerCase() : "";

  const indexIn = (arr: PostList): number => {
    const i = arr.findIndex(
      (p) =>
        p._id === id ||
        (title !== "" && typeof p.title === "string" && p.title === title)
    );
    return i >= 0 ? i + 1 : 0;
  };

  const path = (
    cat: keyof typeof lists,
    base: string
  ): string | null => {
    const n = indexIn(lists[cat]);
    return n > 0 ? `${base}/${n}` : null;
  };

  if (category === "publication") {
    return path("publication", "/posts/sermons/publications");
  }
  if (category === "teaching") {
    return path("teaching", "/posts/sermons/teachings");
  }
  if (category === "evangelism") {
    return path("evangelism", "/evangelism-reports");
  }

  const fallbacks: { key: keyof typeof lists; base: string }[] = [
    { key: "publication", base: "/posts/sermons/publications" },
    { key: "teaching", base: "/posts/sermons/teachings" },
    { key: "evangelism", base: "/evangelism-reports" },
  ];
  for (const { key, base } of fallbacks) {
    const href = path(key, base);
    if (href) return href;
  }

  return null;
}
