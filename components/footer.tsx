"use client";

import { useEffect } from "react";
import Link from "next/link";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSiteBasics } from "@/store/slices/siteContentSlice";
import { getHomeDetails } from "@/api/api_communications";

const Footer = () => {
  const year = new Date().getFullYear();
  const dispatch = useAppDispatch();
  const basics = useAppSelector((s) => s.siteContent.basics) as {
    footer_info?: {
      about_us?: string;
      location?: string;
      quick_links?: [string, string][];
    };
    home?: { header?: { h1?: string } };
  };

  useEffect(() => {
    const getBasicDetails = async () => {
      const data = await getHomeDetails();
      dispatch(setSiteBasics(data as Record<string, unknown>));
    };
    if (!basics?.home?.header?.h1) {
      getBasicDetails();
    }
  }, [basics?.home?.header?.h1, dispatch]);

  const quickLinks = basics.footer_info?.quick_links ?? [];

  return (
    <footer className="relative mt-auto border-t border-highlight/30 bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1600px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
        <div className="grid gap-4 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(0,1fr)] min-[900px]:gap-6 min-[900px]:items-start">
          <section className="min-w-0 min-[900px]:border-r min-[900px]:border-white/10 min-[900px]:pr-5">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              About us
            </h3>
            <p className="mt-1.5 text-xs leading-snug text-primary-foreground/88 sm:text-[0.8125rem] sm:leading-relaxed">
              {basics.footer_info?.about_us}
            </p>
          </section>

          <section className="min-w-0 min-[900px]:border-r min-[900px]:border-white/10 min-[900px]:pr-5">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Our location
            </h3>
            <p className="mt-1.5 text-xs leading-snug text-primary-foreground/88 sm:text-[0.8125rem] sm:leading-relaxed">
              {basics.footer_info?.location}
            </p>
          </section>

          <section className="min-w-0 min-[900px]:pt-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 min-[900px]:justify-start">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Connect
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  target="_blank"
                  href="https://www.youtube.com/@ScriptureGraceFoundation./videos"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/20 ring-1 ring-white/10 transition hover:bg-black/30 hover:ring-highlight/35"
                  aria-label="YouTube"
                >
                  <IoLogoYoutube className="text-xl text-[#ff0000]" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/ScriptureGrace/"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/20 ring-1 ring-white/10 transition hover:bg-black/30 hover:ring-highlight/35"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl text-[#4267b2]" />
                </a>
              </div>
            </div>

            <h3 className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 min-[900px]:mt-2">
              Quick links
            </h3>
            <ul className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="min-w-0">
                  <Link
                    href={`${link[1]}`}
                    className="text-xs text-primary-foreground/90 underline-offset-2 transition hover:text-highlight hover:underline sm:text-[0.8125rem]"
                  >
                    {link[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-4 flex flex-col items-center justify-center gap-1 border-t border-white/10 pt-3 text-center text-[0.65rem] leading-tight text-primary-foreground/60 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-4 sm:text-left sm:text-xs">
          <span>
            © {year} The Scripture Grace Foundation. All rights reserved.
          </span>
          <span className="text-primary-foreground/55">
            Developed by{" "}
            <a
              href="https://github.com/NitarioD/"
              className="font-medium text-primary-foreground/75 underline underline-offset-2 transition hover:text-highlight"
            >
              NitarioD
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
