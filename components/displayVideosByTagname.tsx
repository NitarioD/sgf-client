"use client";

import React, { useState } from "react";
import { Pagination } from "antd";
import capitalise from "../helperFunctions/capitalise";
import { toYouTubeEmbedUrl, toYouTubeWatchUrl } from "@/lib/youtubeEmbed";
import { resolveVideoLink } from "@/lib/videoUrl";

type VideoEntry = Record<string, unknown>;

type VideoGroup = [string, VideoEntry[]];

function isVideoGroup(v: unknown): v is VideoGroup {
  return (
    Array.isArray(v) &&
    v.length === 2 &&
    typeof v[0] === "string" &&
    Array.isArray(v[1])
  );
}

const DisplayVideosByTagname = ({ video }: { video: unknown }) => {
  const [index, setIndex] = useState(0);

  if (!isVideoGroup(video)) {
    return null;
  }

  const [tagLabel, clips] = video;
  const list = clips ?? [];
  const current = list[index];
  const rawLink = resolveVideoLink(current);
  const embedSrc = toYouTubeEmbedUrl(rawLink);
  const watchUrl = toYouTubeWatchUrl(rawLink);

  const onPageChange = (page: number) => {
    setIndex(page - 1);
  };

  if (!list.length || !current) {
    return (
      <p className="text-muted-foreground">No videos in this group yet.</p>
    );
  }

  return (
    <div className="relative mb-14 block pb-14">
      <h3 className="mb-3 text-2xl font-medium">
        Teachings on: <i>{capitalise(tagLabel)}</i>
      </h3>

      {/* 16:9 box — padding trick avoids zero-height iframe (black rectangle) */}
      <div className="relative w-full overflow-hidden rounded-lg bg-black shadow-md">
        <div className="pt-[56.25%]" aria-hidden />
        {embedSrc ? (
          <iframe
            className="absolute left-0 top-0 h-full w-full border-0"
            src={embedSrc}
            title={
              (typeof current.title === "string" && current.title) ||
              "YouTube video player"
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="absolute inset-0 flex min-h-[180px] items-center justify-center p-4 text-center text-sm text-neutral-300">
            <div>
              <p className="mb-3">Could not read a YouTube link for this video.</p>
              {watchUrl ? (
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline"
                >
                  Open on YouTube
                </a>
              ) : rawLink ? (
                <a
                  href={rawLink.startsWith("http") ? rawLink : `https://${rawLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline"
                >
                  Open link
                </a>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {embedSrc && watchUrl && (
        <p className="mt-2 text-center text-sm text-muted-foreground">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            Watch on YouTube
          </a>
        </p>
      )}

      <h4 className="mt-3 text-xl">
        {capitalise(typeof current.title === "string" ? current.title : "")}
      </h4>
      <div className="mt-2 clear-both">
        <h5 className="float-left mr-2 inline text-base font-medium">
          Description:
        </h5>
        <p className="text-muted-foreground">
          {typeof current.description === "string" ? current.description : ""}
        </p>
      </div>

      {list.length > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            current={index + 1}
            onChange={onPageChange}
            pageSize={1}
            total={list.length}
            showSizeChanger={false}
            className="!absolute bottom-0"
          />
        </div>
      )}
    </div>
  );
};

export default DisplayVideosByTagname;
