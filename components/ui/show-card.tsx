import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

type Props = {
  className?: string;
  h3: string;
  p: string;
  button: string;
};

function cardAccent(h3: string): {
  icon: LucideIcon;
  bar: string;
  iconWrap: string;
} {
  if (h3 === "The Point Man") {
    return {
      icon: UserRound,
      bar: "from-[hsl(188_55%_32%)] to-[hsl(188_45%_42%)]",
      iconWrap:
        "bg-teal-50 text-teal-800 ring-1 ring-teal-200/90 shadow-sm shadow-teal-900/5",
    };
  }
  if (h3 === "Our Publications") {
    return {
      icon: BookOpen,
      bar: "from-emerald-600 to-teal-600",
      iconWrap:
        "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/90 shadow-sm shadow-emerald-900/5",
    };
  }
  if (h3 === "Our Membership") {
    return {
      icon: Users,
      bar: "from-amber-500 to-orange-600",
      iconWrap:
        "bg-amber-50 text-amber-900 ring-1 ring-amber-200/90 shadow-sm shadow-amber-900/5",
    };
  }
  return {
    icon: Sparkles,
    bar: "from-primary to-primary/80",
    iconWrap:
      "bg-primary/10 text-primary ring-1 ring-primary/20 shadow-sm",
  };
}

export const ShowCard: React.FC<Props> = ({
  className,
  h3,
  p,
  button,
}) => {
  const [linkto, setLinkTo] = useState("");

  useEffect(() => {
    if (h3 === "The Point Man") {
      setLinkTo("/about/the-point-man");
    } else if (h3 === "Our Publications") {
      setLinkTo("/posts/sermons/publications/1");
    } else if (h3 === "Our Membership") {
      setLinkTo("/user/subscribe");
    }
  }, [h3]);

  const { icon: Icon, bar, iconWrap } = cardAccent(h3);

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/95 bg-white text-left",
        "shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06),0_16px_40px_-12px_rgba(15,23,42,0.12)]",
        "ring-1 ring-slate-900/[0.04]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)] hover:ring-primary/10",
        className
      )}
    >
      <div
        className={cn(
          "h-1.5 w-full bg-gradient-to-r",
          bar
        )}
        aria-hidden
      />

      <CardHeader className="relative space-y-5 p-6 sm:p-7">
        <div
          className={cn(
            "inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-[1.03]",
            iconWrap
          )}
        >
          <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-[1.35rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-[1.4rem]">
            {h3}
          </h3>
          <p className="text-pretty text-[0.9375rem] leading-relaxed text-slate-600 sm:text-[1rem]">
            {p}
          </p>
        </div>
      </CardHeader>

      <CardFooter className="mt-auto border-t border-slate-100 bg-slate-50/90 p-6 sm:p-7">
        <Link href={linkto} className="w-full">
          <Button
            className={cn(
              "group/btn inline-flex h-12 w-full items-center justify-center rounded-xl text-[0.9375rem] font-semibold shadow-md",
              "bg-primary text-primary-foreground shadow-primary/25",
              "transition hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
            )}
          >
            <span>{button}</span>
            <ArrowRight
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
              aria-hidden
            />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
