"use client";

import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import useInterval from "@/helperFunctions/interval";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getPublicApiBaseUrl } from "@/lib/apiBase";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useState, useLayoutEffect } from "react";
import { ShowCard } from "@/components/ui/show-card";
import { CarouselSlider } from "@/components/ui/carousel-slider";
import { ArrowRight, HandCoins, HeartHandshake, Sparkles } from "lucide-react";

const emptyHome = {
  header: {
    h1: "",
    p: "",
  },
  banner_img: "",
  welcome: {
    h2: "",
    p: "",
  },
  cards: [{ _id: "", h3: "", p: "", button: "" }],
  support: {
    h2: "",
    h3: "",
    financial: { h3: "", p: "" },
    prayer: { h3: "", p: "" },
  },
};

const Home = () => {
  const details = useAppSelector((s) => s.siteContent.basics) as {
    home?: typeof emptyHome;
  };

  const [progress, setProgress] = useState(0);
  const [milliseconds, setmilliseconds] = useState(0);

  const [homeDetails, setHomeDetails] = useState(emptyHome);
  useEffect(() => {
    if (!homeDetails.header.h1) {
      setmilliseconds(1000);
    } else {
      setmilliseconds(0);
    }
  }, [homeDetails]);

  useInterval(() => {
    if (progress <= 98) {
      setProgress(progress + 1);
    }
  }, milliseconds);

  useLayoutEffect(() => {
    if (details.home && !homeDetails.header.h1) {
      setHomeDetails(details.home);
    }
  }, [details, homeDetails.header.h1]);

  return (
    <>
      {homeDetails.header.h1 ? (
        <div className="w-full overflow-x-hidden">
          {/* Hero — full-bleed, editorial overlay */}
          <section id="header" className="sgf-full-bleed relative -mt-6 min-h-[min(92vh,820px)] sm:-mt-8 lg:-mt-10">
            <div className="absolute inset-0 bg-primary">
              {homeDetails?.banner_img ? (
                <Image
                  width={1920}
                  height={1080}
                  src={`${getPublicApiBaseUrl()}/image/${homeDetails.banner_img}`}
                  className="h-full w-full object-cover opacity-90"
                  alt=""
                  priority
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-primary/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/45 to-transparent" />
            </div>

            <div className="relative z-10 flex min-h-[min(92vh,820px)] flex-col justify-end px-4 pb-14 pt-28 sm:justify-center sm:px-8 sm:pb-20 sm:pt-24 lg:px-12">
              <div className="mx-auto w-full max-w-6xl">
                <div className="animate-fade-up max-w-2xl rounded-2xl border border-white/15 bg-black/45 p-8 shadow-2xl backdrop-blur-md sm:p-10 md:p-12">
                  <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-highlight">
                    <Sparkles className="h-4 w-4" aria-hidden />
                    Scripture Grace Foundation
                  </p>
                  <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl">
                    {homeDetails?.header?.h1}
                  </h1>
                  <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                    {homeDetails?.header?.p}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/about/the-sgf" legacyBehavior passHref>
                      <Button
                        size="lg"
                        className="rounded-full bg-highlight px-8 font-semibold text-highlight-foreground shadow-lg transition hover:bg-highlight/90 hover:shadow-xl"
                      >
                        About us
                      </Button>
                    </Link>
                    <Link href="/giving" legacyBehavior passHref>
                      <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                      >
                        Give
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="welcome"
            className="sgf-section py-16 md:py-24 lg:py-28"
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {homeDetails?.welcome?.h2}
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-highlight/80" />
              <p className="mt-8 text-pretty text-justify text-base leading-relaxed text-slate-600 md:text-lg md:leading-relaxed">
                {homeDetails?.welcome?.p}
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 auto-rows-fr sm:mt-14 md:grid-cols-2 md:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              {homeDetails?.cards?.map((card) => (
                <ShowCard
                  key={card._id}
                  h3={card.h3}
                  p={card.p}
                  button={card.button}
                />
              ))}
            </div>
          </section>

          <section
            id="activities"
            className="sgf-full-bleed relative overflow-x-hidden overflow-y-visible bg-primary py-12 text-primary-foreground sm:py-16 md:py-24"
          >
            <div
              className="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl sm:h-64 sm:w-64"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-highlight/20 blur-3xl sm:h-72 sm:w-72"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              aria-hidden
            />

            <div className="sgf-full-bleed-inner relative z-10">
              <div className="mb-8 max-w-3xl sm:mb-10">
                <h2 className="font-display text-balance text-2xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-3xl md:text-4xl">
                  {homeDetails?.support?.h2}
                </h2>
                <p className="mt-3 text-pretty text-base font-normal leading-relaxed text-white/95 sm:mt-4 sm:text-lg">
                  {homeDetails?.support?.h3}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 auto-rows-fr sm:gap-6 md:gap-7 lg:grid-cols-2 lg:gap-8">
                {/* Financial — solid white surface, dark text */}
                <Card className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200/95 bg-white text-left text-slate-900 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] ring-1 ring-slate-900/[0.06] transition-all duration-300 ease-out sm:rounded-2xl md:hover:-translate-y-2 md:hover:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.35)]">
                  <div
                    className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-highlight to-amber-600"
                    aria-hidden
                  />
                  <CardHeader className="relative flex flex-1 flex-col space-y-0 p-5 sm:p-6 md:p-7">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-900 shadow-sm ring-1 ring-amber-200/90 transition-transform duration-300 sm:h-14 sm:w-14 sm:rounded-2xl md:group-hover:scale-[1.03]">
                      <HandCoins
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-display mt-4 text-xl font-semibold leading-snug text-slate-900 sm:mt-5 sm:text-[1.35rem] md:text-[1.4rem]">
                      {homeDetails?.support?.financial.h3}
                    </h3>
                    <p className="mt-3 text-pretty text-left text-[0.9375rem] leading-relaxed text-slate-600 sm:text-[1rem] md:text-justify">
                      {homeDetails?.support?.financial.p}
                    </p>
                  </CardHeader>
                  <CardFooter className="mt-auto border-t border-slate-100 bg-slate-50/95 p-5 sm:p-6 md:p-7">
                    <Button
                      size="lg"
                      className="group/btn h-12 w-full rounded-xl bg-[hsl(var(--highlight))] text-[0.9375rem] font-semibold text-[hsl(var(--highlight-foreground))] shadow-lg shadow-amber-900/20 transition hover:bg-[hsl(var(--highlight))]/92 hover:shadow-xl"
                      asChild
                    >
                      <Link
                        href="/giving"
                        className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 px-1"
                      >
                        <Image
                          width={28}
                          height={28}
                          src="/images/give_money.png"
                          alt=""
                          className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
                        />
                        <span className="min-w-0">Donate</span>
                        <ArrowRight
                          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Prayer / membership */}
                <Card className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200/95 bg-white text-left text-slate-900 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] ring-1 ring-slate-900/[0.06] transition-all duration-300 ease-out sm:rounded-2xl md:hover:-translate-y-2 md:hover:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.35)]">
                  <div
                    className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-primary"
                    aria-hidden
                  />
                  <CardHeader className="relative flex flex-1 flex-col space-y-0 p-5 sm:p-6 md:p-7">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 shadow-sm ring-1 ring-emerald-200/90 transition-transform duration-300 sm:h-14 sm:w-14 sm:rounded-2xl md:group-hover:scale-[1.03]">
                      <HeartHandshake
                        className="h-6 w-6 sm:h-7 sm:w-7"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-display mt-4 text-xl font-semibold leading-snug text-slate-900 sm:mt-5 sm:text-[1.35rem] md:text-[1.4rem]">
                      {homeDetails?.support?.prayer.h3}
                    </h3>
                    <p className="mt-3 text-pretty text-left text-[0.9375rem] leading-relaxed text-slate-600 sm:text-[1rem] md:text-justify">
                      {homeDetails?.support?.prayer.p}
                    </p>
                  </CardHeader>
                  <CardFooter className="mt-auto border-t border-slate-100 bg-slate-50/95 p-5 sm:p-6 md:p-7">
                    <Button
                      size="lg"
                      className="group/btn h-12 w-full rounded-xl bg-primary text-[0.9375rem] font-semibold text-primary-foreground shadow-lg shadow-primary/35 transition hover:bg-primary/92 hover:shadow-xl"
                      asChild
                    >
                      <Link
                        href="/user/subscribe"
                        className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 px-1"
                      >
                        <Image
                          src="/images/add.svg"
                          alt=""
                          width={26}
                          height={26}
                          className="h-5 w-5 shrink-0 object-contain drop-shadow-sm sm:h-6 sm:w-6"
                        />
                        <span className="min-w-0">Join</span>
                        <ArrowRight
                          className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>

          <section id="recents" className="sgf-section py-16 md:py-24 lg:py-28">
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">
                Recent activities
              </h2>
              <div className="mx-auto mt-4 flex max-w-md items-center justify-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/40" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Media &amp; articles
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/40" />
              </div>
            </div>
            <div className="mt-12 space-y-16">
              <CarouselSlider display="videos" />
              <CarouselSlider display="articles" />
            </div>
          </section>
        </div>
      ) : (
        <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 py-20">
          <div className="h-12 w-12 animate-pulse rounded-full bg-primary/20" />
          <p className="text-sm text-muted-foreground">Loading experience…</p>
          <Progress value={progress} className="h-2 w-full max-w-xs" />
        </div>
      )}
    </>
  );
};

export default Home;
