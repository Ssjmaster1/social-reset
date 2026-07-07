"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

type Language = "en" | "sv";

const copy = {
  en: {
    nav: {
      home: "Home",
      program: "Program",
      community: "Community",
      apply: "Apply",
    },
    hero: {
      eyebrow: "Monthly memberships",
      title: "Stay consistent after the first reset.",
      text: "Subscriptions are built for men who want weekly accountability, Discord check-ins, and a serious environment for progress in fitness, career, confidence, and life in general.",
      primary: "Apply for membership",
      secondary: "Back to homepage",
    },
    intro: {
      title: "Choose your level",
      text: "No exaggerated promises. No passive chat group. Just structure, progress reporting, and a community where members keep each other moving.",
    },
    proof: {
      eyebrow: "What you pay for",
      title: "Not access to a chat. Access to a rhythm.",
      text: "The membership is designed to make progress visible every week. You report actions, get direction, and stay close to people who are also doing the work.",
      cards: [
        ["Weekly proof of action", "Social reps, gym sessions, career moves, and discipline wins get reported instead of staying vague."],
        ["Real accountability", "You are expected to show what happened, what slipped, and what you will correct next."],
        ["No trophy wall", "Screenshots and wins are used as evidence of growth, not as a way to flex attention."],
        ["Life-wide progress", "The focus is not only dating. It is confidence, fitness, career, friendships, and self-respect."],
      ],
    },
    plans: [
      {
        name: "Member",
        price: "500 kr",
        period: "/ month",
        subtitle: "For consistent accountability",
        description:
          "A focused membership for staying active in the community, reporting your progress, and keeping your weekly momentum alive.",
        features: [
          "Discord member access",
          "Weekly progress thread",
          "Fitness and discipline channel",
          "Career and life goals channel",
          "Monthly community call",
          "Wins, reports, and accountability",
        ],
        cta: "Apply for Member",
      },
      {
        name: "Premium Member",
        price: "1 000 kr",
        period: "/ month",
        badge: "Most focused",
        subtitle: "For deeper support and weekly checkups",
        description:
          "For members who want more structure, sharper feedback, and a stronger rhythm around training, career, confidence, and life progress.",
        features: [
          "Everything in Member",
          "Weekly checkups in Discord",
          "More direct feedback on progress",
          "Fitness, career, and life accountability",
          "Priority questions in community calls",
          "Clearer weekly goals and follow-up",
          "Progress review and next actions",
        ],
        cta: "Apply for Premium",
      },
    ],
    rhythm: {
      eyebrow: "The rhythm",
      title: "Built around visible progress",
      items: [
        ["Report", "Share what you did this week in fitness, social confidence, career, and discipline."],
        ["Reflect", "See what worked, what slipped, and what needs to be adjusted."],
        ["Reset", "Set your next actions and keep moving instead of disappearing."],
      ],
    },
    cta: {
      title: "Want the subscription instead of the 30-day program?",
      text: "Send a short application and tell us which membership fits your current season best.",
      button: "Go to application",
    },
    disclaimer: "Results vary depending on individual effort. Memberships provide structure, feedback, and accountability, but you still need to do the work.",
  },
  sv: {
    nav: {
      home: "Hem",
      program: "Program",
      community: "Community",
      apply: "Ansök",
    },
    hero: {
      eyebrow: "Månadsmedlemskap",
      title: "Håll dig konsekvent efter första reseten.",
      text: "Prenumerationerna är för killar som vill ha veckovis accountability, checkups i Discord och en seriös miljö för framsteg inom träning, karriär, självförtroende och livet generellt.",
      primary: "Ansök om medlemskap",
      secondary: "Till startsidan",
    },
    intro: {
      title: "Välj din nivå",
      text: "Inga överdrivna löften. Ingen passiv chattgrupp. Bara struktur, rapportering och ett community där medlemmar håller varandra i rörelse.",
    },
    proof: {
      eyebrow: "Vad du betalar för",
      title: "Inte tillgång till en chatt. Tillgång till en rytm.",
      text: "Medlemskapet är byggt för att göra framsteg synliga varje vecka. Du rapporterar actions, får riktning och håller dig nära personer som också gör jobbet.",
      cards: [
        ["Veckovis bevis på action", "Sociala reps, gympass, karriärsteg och disciplin-wins rapporteras istället för att vara vaga."],
        ["Riktig accountability", "Du förväntas visa vad som hände, vad som tappades och vad du ska korrigera härnäst."],
        ["Ingen trophy wall", "Screenshots och wins används som bevis på utveckling, inte för att flexa uppmärksamhet."],
        ["Utveckling i hela livet", "Fokus är inte bara dating. Det är confidence, fitness, karriär, vänskap och självrespekt."],
      ],
    },
    plans: [
      {
        name: "Medlem",
        price: "500 kr",
        period: "/ månad",
        subtitle: "För konsekvent accountability",
        description:
          "Ett fokuserat medlemskap för dig som vill vara aktiv i communityt, rapportera dina framsteg och hålla igång momentum varje vecka.",
        features: [
          "Tillgång till Discord",
          "Veckovis progress-tråd",
          "Kanal för träning och disciplin",
          "Kanal för karriär och livsmål",
          "Community call varje månad",
          "Wins, rapportering och accountability",
        ],
        cta: "Ansök som medlem",
      },
      {
        name: "Premium medlem",
        price: "1 000 kr",
        period: "/ månad",
        badge: "Mest fokuserat",
        subtitle: "För mer stöd och veckocheckups",
        description:
          "För dig som vill ha mer struktur, tydligare feedback och starkare rytm runt träning, karriär, confidence och utveckling i livet.",
        features: [
          "Allt i Medlem",
          "Veckocheckups i Discord",
          "Mer direkt feedback på framsteg",
          "Accountability för träning, karriär och liv",
          "Prioriterade frågor på community calls",
          "Tydligare veckomål och uppföljning",
          "Progress review och nästa actions",
        ],
        cta: "Ansök som premium",
      },
    ],
    rhythm: {
      eyebrow: "Rytmen",
      title: "Byggt runt synliga framsteg",
      items: [
        ["Rapportera", "Visa vad du gjort under veckan inom träning, social confidence, karriär och disciplin."],
        ["Reflektera", "Se vad som funkade, vad som tappades och vad som behöver justeras."],
        ["Reseta", "Sätt nästa actions och fortsätt framåt istället för att försvinna."],
      ],
    },
    cta: {
      title: "Vill du ha prenumerationen istället för 30-dagarsprogrammet?",
      text: "Skicka en kort ansökan och berätta vilket medlemskap som passar din situation bäst.",
      button: "Gå till ansökan",
    },
    disclaimer: "Resultat varierar beroende på individ och insats. Medlemskapen ger struktur, feedback och accountability, men du behöver fortfarande göra jobbet.",
  },
} as const;

function LanguageToggle({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div className="grid grid-cols-2 rounded-full border border-white/15 bg-white/[0.05] p-1 text-xs font-bold">
      {(["en", "sv"] as const).map((option) => (
        <button
          aria-pressed={language === option}
          className={`rounded-full px-3 py-2 transition ${
            language === option ? "bg-[#39ff9f] text-[#04100b]" : "text-[#9aa8bd] hover:text-white"
          }`}
          key={option}
          onClick={() => onChange(option)}
          type="button"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#39ff9f] focus:ring-offset-2 focus:ring-offset-[#05070d] sm:text-base";
  const styles =
    variant === "primary"
      ? "bg-[#39ff9f] text-[#04100b] shadow-[0_0_40px_rgba(57,255,159,0.22)] hover:bg-white"
      : "border border-white/15 bg-white/[0.06] text-white hover:border-[#29a8ff] hover:bg-[#29a8ff]/10";

  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li className="flex gap-3 text-sm leading-6 text-[#d9e4f2]" key={item}>
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#39ff9f] shadow-[0_0_16px_rgba(57,255,159,0.55)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ProofSection({ proof }: { proof: (typeof copy)[Language]["proof"] }) {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#39ff9f]">
            {proof.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {proof.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[#9aa8bd] sm:text-lg">{proof.text}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.cards.map(([title, text]) => (
            <article className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6" key={title}>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#9aa8bd]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SubscriptionsPage() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("social-reset-language");

    if (savedLanguage === "en" || savedLanguage === "sv") {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("social-reset-language", language);
  }, [language]);

  return (
    <main className="min-h-screen overflow-hidden">
      <header className="px-5 py-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link className="text-lg font-bold tracking-tight text-white" href="/">
            Social Reset
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#9aa8bd] md:flex">
            <Link className="hover:text-white" href="/">
              {t.nav.home}
            </Link>
            <Link className="hover:text-white" href="/#program">
              {t.nav.program}
            </Link>
            <Link className="hover:text-white" href="/#community">
              {t.nav.community}
            </Link>
            <Link className="hover:text-white" href="/#apply">
              {t.nav.apply}
            </Link>
          </div>
          <LanguageToggle language={language} onChange={setLanguage} />
        </nav>
      </header>

      <section className="px-5 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#29a8ff]/30 bg-[#29a8ff]/10 px-4 py-2 text-sm font-semibold text-[#bde9ff]">
              {t.hero.eyebrow}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b7c3d6]">{t.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/#apply">{t.hero.primary}</Button>
              <Button href="/" variant="secondary">
                {t.hero.secondary}
              </Button>
            </div>
          </div>
          <div className="rounded-[8px] border border-[#39ff9f]/30 bg-[#39ff9f]/[0.055] p-6 shadow-[0_0_80px_rgba(57,255,159,0.1)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#39ff9f]">
              {t.intro.title}
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-white">{t.intro.text}</p>
          </div>
        </div>
      </section>

      <ProofSection proof={t.proof} />

      <section className="px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          {t.plans.map((plan) => (
            <article
              className={`relative rounded-[8px] border p-6 sm:p-8 ${
                "badge" in plan
                  ? "border-[#39ff9f]/45 bg-[#39ff9f]/[0.055] shadow-[0_0_70px_rgba(57,255,159,0.12)]"
                  : "border-white/10 bg-white/[0.045]"
              }`}
              key={plan.name}
            >
              {"badge" in plan && (
                <div className="mb-5 inline-flex rounded-full border border-[#39ff9f]/40 bg-[#39ff9f]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#39ff9f]">
                  {plan.badge}
                </div>
              )}
              <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
              <div className="mt-5 flex flex-wrap items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                <span className="pb-2 text-base font-medium text-[#9aa8bd]">{plan.period}</span>
              </div>
              <p className="mt-5 font-medium text-[#39ff9f]">{plan.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-[#9aa8bd]">{plan.description}</p>
              <div className="my-7 h-px bg-white/10" />
              <CheckList items={plan.features} />
              <div className="mt-8">
                <Button href="/#apply" variant={"badge" in plan ? "primary" : "secondary"}>
                  {plan.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#39ff9f]">
            {t.rhythm.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {t.rhythm.title}
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.rhythm.items.map(([title, text], index) => (
              <article className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6" key={title}>
                <span className="text-sm font-bold text-[#29a8ff]">0{index + 1}</span>
                <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#9aa8bd]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[8px] border border-white/10 bg-[#09111d]/90 p-6 sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#9aa8bd]">{t.cta.text}</p>
          <div className="mt-8">
            <Button href="/#apply">{t.cta.button}</Button>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-[#68768a]">{t.disclaimer}</p>
        </div>
      </section>
    </main>
  );
}
