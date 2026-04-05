import * as React from "react";
import { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import {
  getVideos,
  getArticles,
  getPublicationPosts,
  getTeachingPosts,
  getEvangelismPosts,
} from "@/api/api_communications";
import { toYouTubeEmbedUrl } from "@/lib/youtubeEmbed";
import { resolvePostHref, type PostList } from "@/lib/postHref";
import { resolveVideoLink } from "@/lib/videoUrl";
import { unwrapList } from "@/lib/unwrapApiList";
import { BookOpen, Play, Sparkles } from "lucide-react";
import { FaBookOpen } from "react-icons/fa";
import Image from "next/image";

type Props = {
  className?: string;
  display: "videos" | "articles";
};

const carouselShell =
  "relative mx-auto w-full max-w-5xl px-3 sm:px-8 md:px-12 lg:px-14";

const carouselOpts = {
  align: "start" as const,
  containScroll: "trimSnaps" as const,
  dragFree: false,
};

export const CarouselSlider: React.FC<Props> = ({ className, ...props }) => {
  return <>{props.display === "videos" ? <Videos /> : <Articles />}</>;
};

function videoLabel(v: Record<string, unknown>): string {
  const t = v.title ?? v.name;
  if (typeof t === "string" && t.trim()) return t;
  return "Featured video";
}

const Videos: () => React.ReactNode = () => {
  const [recents, setRecents] = useState<{
    videos: Record<string, unknown>[];
  }>({
    videos: [],
  });

  useEffect(() => {
    const getRecents = async () => {
      const videos = (await getVideos()) as Record<string, unknown>[];
      setRecents({ videos });
    };

    if (!recents.videos[0]) {
      getRecents();
    }
  }, [recents]);

  return (
    <div className={carouselShell}>
      <Carousel opts={carouselOpts} className="w-full">
        <CarouselContent className="-ml-2 flex gap-4 md:-ml-3 md:gap-5">
          {recents.videos.map((video: Record<string, unknown>, index) => (
            <CarouselItem
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-full pl-2 md:basis-1/2 md:pl-3"
            >
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/95 bg-white text-left shadow-[0_4px_24px_-8px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/[0.04] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.22)]">
                <div
                  className="h-1 w-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500"
                  aria-hidden
                />
                <CardContent className="flex flex-1 flex-col gap-0 p-0">
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"
                      aria-hidden
                    />
                    <Iframe
                      url={toYouTubeEmbedUrl(resolveVideoLink(video))}
                      className="absolute inset-0 z-0 h-full w-full"
                      display="block"
                      position="relative"
                    />
                    <div className="absolute bottom-3 left-3 z-[2] flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600/95 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-white shadow-lg ring-1 ring-white/20">
                        <Play className="h-3 w-3 fill-current" aria-hidden />
                        Video
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 border-t border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                    <h4 className="font-display text-base font-semibold leading-snug text-slate-900">
                      {videoLabel(video)}
                    </h4>
                    <p className="line-clamp-3 text-justify text-sm leading-relaxed text-slate-600">
                      {typeof video.description === "string"
                        ? video.description
                        : "Watch and share."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

const Articles: () => React.ReactNode = () => {
  const [recents, setRecents] = useState<{
    articles: Record<string, unknown>[];
  }>({ articles: [] });
  const [postLists, setPostLists] = useState<{
    publication: PostList;
    teaching: PostList;
    evangelism: PostList;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [raw, pub, te, ev] = await Promise.all([
        getArticles(),
        getPublicationPosts(),
        getTeachingPosts(),
        getEvangelismPosts(),
      ]);
      if (cancelled) return;
      setRecents({ articles: unwrapList(raw) as Record<string, unknown>[] });
      setPostLists({
        publication: unwrapList(pub) as PostList,
        teaching: unwrapList(te) as PostList,
        evangelism: unwrapList(ev) as PostList,
      });
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={carouselShell}>
      <Carousel opts={carouselOpts} className="w-full">
        <CarouselContent className="-ml-2 flex gap-4 md:-ml-3 md:gap-5">
          {recents.articles.map((article, index) => {
            const content =
              typeof article.content === "string" ? article.content : "";
            const title =
              typeof article.title === "string" ? article.title : "";
            const href =
              postLists &&
              resolvePostHref(article as Record<string, unknown>, postLists);
            const hasImg = Boolean(
              content.split('src="')[1]?.split('">')[0]
            );

            const card = (
              <Card className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/95 bg-white text-left shadow-[0_4px_24px_-8px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/[0.04] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.22)]">
                <div
                  className="h-1 w-full bg-gradient-to-r from-primary via-teal-500 to-emerald-500"
                  aria-hidden
                />
                <CardContent className="flex flex-1 flex-col gap-0 p-0">
                  <div className="relative h-44 w-full overflow-hidden bg-slate-200 sm:h-48">
                    {hasImg ? (
                      <>
                        <Image
                          width={800}
                          height={480}
                          src={content.split('src="')[1]?.split('">')[0] ?? ""}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          alt=""
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute bottom-0 left-0 right-0 z-[1] p-4 pt-10">
                          <span className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-widest text-white ring-1 ring-white/25 backdrop-blur-md">
                            <BookOpen className="h-3 w-3" aria-hidden />
                            Article
                          </span>
                          <h3 className="font-display text-balance text-lg font-semibold leading-tight text-white drop-shadow-sm sm:text-xl">
                            {title}
                          </h3>
                        </div>
                      </>
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-slate-100 to-teal-50">
                        <div className="rounded-2xl bg-white/80 p-4 shadow-inner ring-1 ring-primary/10">
                          <FaBookOpen className="text-5xl text-primary/35 sm:text-6xl" />
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                          <Sparkles className="h-3.5 w-3.5 text-primary" />
                          Article
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex min-h-[5.5rem] flex-col gap-2 border-t border-slate-100 bg-slate-50/80 p-4 sm:p-5">
                    {!hasImg ? (
                      <h3 className="font-display text-center text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                        {title}
                      </h3>
                    ) : null}
                    <p className="line-clamp-4 text-justify text-sm leading-relaxed text-slate-600 sm:line-clamp-5">
                      {content.split("<p>")[1]?.split("</p>")[0]}
                      {content.split("<p>")[2]?.split("</p>")[0] &&
                        content.split("<p>")[2]?.split("</p>")[0]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <CarouselItem
                key={String(article._id ?? index)}
                className="min-w-0 shrink-0 grow-0 basis-full pl-2 md:basis-1/2 md:pl-3"
              >
                {href ? (
                  <Link
                    href={href}
                    className="block h-full rounded-2xl no-underline outline-none transition hover:opacity-[0.97] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
