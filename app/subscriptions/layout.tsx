import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Subscriptions",
  description:
    "Monthly Social Reset memberships for accountability, weekly check-ins, Discord progress tracking, fitness, career, and personal growth.",
  alternates: {
    canonical: "/subscriptions",
  },
  openGraph: {
    title: "Social Reset Subscriptions",
    description:
      "Choose a monthly membership for accountability, weekly check-ins, Discord progress tracking, and personal growth.",
    url: "/subscriptions",
  },
};

export default function SubscriptionsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children;
}
