import type { ReactNode } from "react";

/** Layout wrapper only; fetching happens in `page.tsx` for correct loading / empty states. */
export default function VideosLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl pb-12">{children}</div>
  );
}
