"use client";

import React, { useEffect, useRef, useState } from "react";
import DisplayVideosByTagname from "@/components/displayVideosByTagname";
import { useAppDispatch } from "@/store/hooks";
import { setVideoPosts } from "@/store/slices/postsSlice";
import { getVideoPosts } from "@/api/api_communications";
import sortByTags from "@/helperFunctions/sortVideosByTagname";
import type { VideoEntry } from "@/helperFunctions/normalizeVideoGroups";
import Loading from "../../../../components/loading";

type VideoGroup = [string, VideoEntry[]];

/**
 * Videos list is kept in local state so a full page refresh always reflects
 * the fetch result (avoids Strict Mode + Redux timing issues).
 */
const Videos = () => {
  const dispatch = useAppDispatch();
  const [groups, setGroups] = useState<VideoGroup[]>([]);
  const [fetchDone, setFetchDone] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const requestId = useRef(0);

  useEffect(() => {
    const id = ++requestId.current;
    setFetchError(null);

    void (async () => {
      try {
        const raw = await getVideoPosts();
        const grouped = sortByTags(raw) as VideoGroup[];

        if (id !== requestId.current) return;

        setGroups(grouped);
        dispatch(setVideoPosts(grouped));
      } catch (e) {
        if (id !== requestId.current) return;
        setFetchError(
          e instanceof Error ? e.message : "Could not load videos."
        );
        setGroups([]);
        dispatch(setVideoPosts([]));
      } finally {
        if (id === requestId.current) {
          setFetchDone(true);
        }
      }
    })();
  }, [dispatch]);

  if (!fetchDone) {
    return <Loading />;
  }

  if (fetchError) {
    return (
      <p className="text-center text-destructive" role="alert">
        {fetchError}
      </p>
    );
  }

  if (!groups.length) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        No videos are available yet. Check back soon.
      </p>
    );
  }

  return (
    <div id="post" className="flex w-full min-w-0 flex-col items-stretch justify-center">
      {groups.map((video, idx) => (
        <DisplayVideosByTagname video={video} key={idx} />
      ))}
    </div>
  );
};

export default Videos;
