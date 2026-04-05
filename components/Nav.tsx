"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { GiTeacher } from "react-icons/gi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMenuOpen } from "@/store/slices/uiSlice";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import navMenu from "../constants/nav";
import { LiaVideoSolid } from "react-icons/lia";
import { GiBookshelf } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineChurch, MdOutlineClose } from "react-icons/md";

const icons: {
  teachings: React.ReactNode;
  videos: React.ReactNode;
  publications: React.ReactNode;
  point_man: React.ReactNode;
  sgf: React.ReactNode;
} = {
  teachings: <GiTeacher className="text-4xl md:text-[2.5rem] text-current opacity-90" />,
  videos: <LiaVideoSolid className="text-4xl md:text-[2.5rem] text-current opacity-90" />,
  publications: <GiBookshelf className="text-4xl md:text-[2.5rem] text-current opacity-90" />,
  point_man: <IoIosMan className="text-4xl md:text-[2.5rem] text-current opacity-90" />,
  sgf: <MdOutlineChurch className="text-4xl md:text-[2.5rem] text-current opacity-90" />,
};

const getIconElement = (icon: string): React.ReactNode => {
  if (icon in icons) {
    return icons[icon as keyof typeof icons];
  }
};

const navUnderlineActive =
  "border-b-2 border-yellow-400 shadow-[0_1px_0_0_rgba(250,204,21,0.35)]";
const navUnderlineIdle = "border-b-2 border-transparent";

function isTopNavActive(
  pathname: string,
  item: (typeof navMenu)[number]
): boolean {
  if (item.url) {
    const u = item.url;
    if (u === "/") return pathname === "/";
    if (u === "/giving") return pathname.startsWith("/giving");
    if (u === "/contact") return pathname.startsWith("/contact");
    if (u.startsWith("/evangelism-reports")) {
      return pathname.startsWith("/evangelism-reports");
    }
    return pathname === u || pathname.startsWith(`${u}/`);
  }
  if (item.label === "Sermons") {
    return pathname.startsWith("/posts/sermons");
  }
  if (item.label === "About") {
    return pathname.startsWith("/about");
  }
  return false;
}

function isSubLinkActive(pathname: string, href: string): boolean {
  if (pathname === href) return true;
  try {
    const u = new URL(href, "https://sgf.local");
    const path = u.pathname;
    const parts = path.split("/").filter(Boolean);
    if (parts.length > 0 && /^\d+$/.test(parts[parts.length - 1]!)) {
      parts.pop();
    }
    const base = "/" + parts.join("/");
    return pathname.startsWith(base + "/") || pathname === base;
  } catch {
    return pathname.startsWith(href);
  }
}

const Nav = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector((s) => s.ui.menuOpen);

  React.useEffect(() => {
    dispatch(setMenuOpen(false));
  }, [pathname, dispatch]);

  React.useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 1061px)");
    const closeOnDesktop = () => {
      if (mq.matches) dispatch(setMenuOpen(false));
    };
    mq.addEventListener("change", closeOnDesktop);
    return () => mq.removeEventListener("change", closeOnDesktop);
  }, [dispatch]);

  const closeMenu = () => dispatch(setMenuOpen(false));

  /** Below header bar; `backdrop-filter` on an ancestor makes `fixed` use that box — keep blur on inner bar only. */
  const mobileOverlayTop =
    "top-[calc(env(safe-area-inset-top,0px)+3.5rem)] sm:top-[calc(env(safe-area-inset-top,0px)+4.25rem)]";
  const mobileOverlayMaxH =
    "max-h-[calc(100dvh-env(safe-area-inset-top,0px)-3.5rem)] sm:max-h-[calc(100dvh-env(safe-area-inset-top,0px)-4.25rem)]";

  return (
    <header className="sticky top-0 z-50 w-full pt-[env(safe-area-inset-top)]">
      {/* Blur/bg only on the top bar — not on a wrapper that contains `position:fixed` menu layers */}
      <div className="border-b-2 border-b-highlight/40 bg-primary/95 shadow-md shadow-primary/25 ring-1 ring-white/5 backdrop-blur-md supports-[backdrop-filter]:bg-primary/85">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between gap-3 px-3 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="relative z-[60] flex min-w-0 shrink items-center py-2"
            onClick={closeMenu}
          >
            <Image
              width={160}
              height={48}
              src="/images/logo.png"
              alt="Scripture Grace Foundation"
              className="h-9 w-auto max-w-[min(100%,9rem)] object-contain sm:h-11 sm:max-w-none"
              priority
            />
          </Link>

          <div className="relative z-[55] flex flex-1 items-center justify-end">
            <button
              type="button"
              className="relative z-[65] inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md p-2 text-primary-foreground hover:bg-white/10 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => dispatch(setMenuOpen(!menuOpen))}
            >
              {menuOpen ? (
                <MdOutlineClose className="h-8 w-8 sm:h-9 sm:w-9" />
              ) : (
                <IoIosMenu className="h-8 w-8 sm:h-9 sm:w-9" />
              )}
            </button>

            {/* Desktop: Radix navigation menu */}
            <NavigationMenu className="relative z-10 hidden max-w-max shrink-0 flex-1 justify-end lg:flex">
            <NavigationMenuList className="flex flex-row items-center gap-0">
              {navMenu.map((nav_item, idx) => {
                const active = isTopNavActive(pathname, nav_item);
                return (
                  <NavigationMenuItem key={`${idx}`}>
                    {nav_item.submenuItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={cn(
                            "bg-transparent text-primary-foreground hover:bg-white/10 data-[state=open]:bg-white/10",
                            active ? navUnderlineActive : navUnderlineIdle
                          )}
                        >
                          {nav_item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="w-full max-w-[min(100vw-1.5rem,28rem)] lg:w-max lg:max-w-[min(100vw-2rem,50rem)]">
                          {/* Intrinsic width up to cap so Radix measures full content; avoid fixed 500px cutting off text. */}
                          <ul className="grid w-full max-w-full grid-cols-1 gap-2 break-words p-2 lg:w-max lg:max-w-[min(100vw-2rem,50rem)] lg:gap-3 lg:p-6">
                            {nav_item.submenuItems.map((component, subIdx) => (
                              <div
                                className="flex min-w-0 flex-col items-stretch gap-2 rounded-xl bg-white/[0.07] p-2 lg:flex-row lg:items-start lg:gap-3 lg:bg-transparent lg:p-0"
                                key={subIdx}
                              >
                                {component.icon && (
                                  <div className="hidden shrink-0 text-primary lg:block">
                                    {getIconElement(component.icon)}
                                  </div>
                                )}
                                <ListItem
                                  title={component.title}
                                  href={component.url}
                                >
                                  {component.description}
                                </ListItem>
                              </div>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={`${nav_item.url}`} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground focus:text-primary-foreground",
                            active ? navUnderlineActive : navUnderlineIdle
                          )}
                        >
                          {nav_item.label}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          </div>
        </div>
      </div>

      {/* Fixed layers are siblings of the blurred bar so `fixed` is viewport-relative (not clipped by backdrop-filter). */}
      {menuOpen ? (
        <button
          type="button"
          className={cn(
            "fixed inset-x-0 bottom-0 z-[45] bg-black/40 backdrop-blur-[1px] lg:hidden",
            mobileOverlayTop
          )}
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}

      <div
        id="mobile-nav-panel"
        className={cn(
          "fixed bottom-0 right-0 z-[55] flex w-[min(100vw,20rem)] max-w-[calc(100vw-0.5rem)] flex-col overflow-y-auto overscroll-contain border-l border-white/15 bg-primary pb-[max(1rem,env(safe-area-inset-bottom))] pl-3 pr-3 pt-4 shadow-[-12px_0_40px_-8px_rgba(0,0,0,0.35)] sm:w-[min(100vw,22rem)] sm:pl-4 sm:pr-4",
          mobileOverlayTop,
          mobileOverlayMaxH,
          "rounded-tl-2xl lg:hidden",
          !menuOpen && "hidden"
        )}
        role="navigation"
        aria-label="Main"
      >
        <nav className="flex flex-col gap-1">
          {navMenu.map((nav_item, idx) => {
            const active = isTopNavActive(pathname, nav_item);

            if (nav_item.url) {
              return (
                <Link
                  key={idx}
                  href={nav_item.url}
                  onClick={closeMenu}
                  className={cn(
                    "rounded-lg px-3 py-3.5 text-base font-medium text-primary-foreground transition hover:bg-white/10",
                    active
                      ? "bg-white/10 ring-1 ring-yellow-400/50"
                      : "border-b-2 border-transparent"
                  )}
                >
                  {nav_item.label}
                </Link>
              );
            }

            return (
              <div key={idx} className="flex flex-col gap-0.5 pt-1">
                <div
                  className={cn(
                    "px-3 py-2 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-primary-foreground/70",
                    active && "text-yellow-300/90"
                  )}
                >
                  {nav_item.label}
                </div>
                <div className="flex flex-col gap-0.5 border-l-2 border-white/15 pl-3">
                  {nav_item.submenuItems?.map((sub, subIdx) => {
                    const subActive = isSubLinkActive(pathname, sub.url);
                    return (
                      <Link
                        key={subIdx}
                        href={sub.url}
                        onClick={closeMenu}
                        className={cn(
                          "rounded-r-lg py-3 pl-2 pr-2 transition hover:bg-white/10",
                          subActive && "bg-white/10 ring-1 ring-yellow-400/40"
                        )}
                      >
                        <span className="flex items-start gap-2">
                          {sub.icon && (
                            <span className="mt-0.5 shrink-0 text-primary-foreground opacity-90 [&_svg]:h-6 [&_svg]:w-6">
                              {getIconElement(sub.icon)}
                            </span>
                          )}
                          <span className="min-w-0 flex-1">
                            <span className="block text-[0.95rem] font-semibold leading-snug text-primary-foreground">
                              {sub.title}
                            </span>
                            {sub.description ? (
                              <span className="mt-0.5 block text-sm leading-snug text-primary-foreground/75">
                                {sub.description}
                              </span>
                            ) : null}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Nav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="w-full min-w-0">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block min-w-0 select-none space-y-1 break-words rounded-xl p-3 leading-snug no-underline outline-none transition hover:bg-accent focus-visible:ring-2 focus-visible:ring-highlight",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold leading-snug text-popover-foreground">
            {title}
          </div>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
