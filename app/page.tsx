"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState, type ReactNode } from "react";

const calendlyHref = "#apply"; // TODO: Replace CTA links with Calendly booking link.
const discordHref = "#community"; // TODO: Replace Discord CTA with actual Discord invite link.

const translations = {
  en: {
    nav: {
      program: "Program",
      community: "Community",
      subscriptions: "Subscriptions",
      bookCall: "Book a call",
      contact: "Contact",
      topCta: "Book a free call",
      menu: "Menu",
      close: "Close menu",
    },
    hero: {
      eyebrow: "Coaching. Community. Real-world action.",
      title: "Stop overthinking. Start taking action.",
      text: "Social Reset helps men build social confidence, get in better shape, and start taking action in real life with coaching, daily missions, and community.",
      primary: "Book a free call",
      secondary: "Join the community",
      trustPoints: ["30-day structure", "Daily missions", "Coaching & feedback", "Discord community"],
      actionCards: ["Train with control", "Take daily action", "Report your wins"],
      daysLabel: "30 days",
      momentum: "Build momentum you can feel.",
    },
    actionStrip: [
      ["No endless theory", "A system built around small real-world actions."],
      ["Daily accountability", "Clear check-ins so momentum does not disappear."],
      ["Coaching feedback", "Know what to adjust instead of guessing alone."],
    ],
    problem: {
      title: "You already know what you should do, but you are not doing it",
      text: "Maybe you think too much, wait for the right moment, hesitate when you should act, and go home with the feeling that you should have done something. The problem usually is not a lack of information. The problem is that you have not trained yourself to act in real life.",
      items: [
        "You get stuck in your head",
        "You wait for the perfect moment",
        "You avoid social situations",
        "You lack structure and accountability",
        "You want to change but do not know where to start",
      ],
    },
    contrast: {
      eyebrow: "The reset",
      title: "From stuck in your head to active in real life",
      text: "The goal is not to become someone else. The goal is to build evidence that you can act, recover, learn, and keep moving.",
      beforeTitle: "Before",
      afterTitle: "After Social Reset",
      before: [
        "You replay conversations before they happen",
        "You wait until you feel ready",
        "You consume more advice than you apply",
        "You disappear when motivation drops",
      ],
      after: [
        "You take small actions even when it feels uncomfortable",
        "You have a clear structure for the week",
        "You get feedback and correct faster",
        "You build confidence from repeated evidence",
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "That is why we created Social Reset",
      text: "Social Reset is an online community and coaching program for men who want to build real social experience. Not through more theory, but through controlled training, daily missions, feedback, and follow-up.",
      cards: [
        ["Social training", "Practice conversations, presence, and body language with clear direction."],
        ["Daily missions", "Small actions that build momentum without feeling chaotic."],
        ["Feedback", "Get direct input on what works and what needs to change."],
        ["Fitness & first impressions", "Build discipline, energy, and a stronger first impression."],
        ["Discord community", "Report your progress, get support, and stay accountable every week."],
        ["Accountability", "Structure that makes it harder to slip back into old patterns."],
      ],
    },
    missionPreview: {
      eyebrow: "Mission preview",
      title: "What a week can look like",
      text: "Each mission is designed to be clear, measurable, and uncomfortable enough to create growth without pushing you into chaos.",
      days: [
        ["Day 1", "Make eye contact and hold your posture in public."],
        ["Day 2", "Start two short conversations with low pressure."],
        ["Day 3", "Record what happened and get feedback."],
        ["Day 4", "Upgrade your presentation: outfit, grooming, profile."],
        ["Day 5", "Take one bigger social action and report the result."],
      ],
      note: "The missions scale with your level. You are not expected to be fearless on day one.",
    },
    method: {
      eyebrow: "The method",
      title: "How it works",
      stepLabel: "Step",
      steps: [
        {
          title: "Controlled training",
          text: "You start in a safe environment where you practice conversations, presentation, body language, and nerves without unnecessary pressure.",
        },
        {
          title: "Real-world missions",
          text: "You get clear actions every day. Small steps that build momentum and help you stop thinking and start moving.",
        },
        {
          title: "Feedback & correction",
          text: "You report what you did, what happened, and what felt difficult. Then you get concrete feedback on what to improve.",
        },
      ],
    },
    fit: {
      eyebrow: "Fit check",
      title: "This is for men who want structure, not more random advice",
      text: "Social Reset works best for people who are ready to train consistently and report honestly.",
      forTitle: "Good fit",
      notForTitle: "Not a fit",
      forItems: [
        "You want clear actions, not vague motivation",
        "You are willing to report what actually happened",
        "You care about social confidence, fitness, and discipline",
        "You want a respectful, professional environment",
      ],
      notForItems: [
        "You want shortcuts without doing the work",
        "You are looking for manipulative tactics",
        "You only want to watch content and stay passive",
        "You expect guaranteed results without effort",
      ],
    },
    programs: {
      eyebrow: "Program",
      title: "Choose your level",
      items: [
        {
          title: "Base Program",
          access: "Application based",
          subtitle: "30 days of Social Reset",
          audience:
            "For you if you want to start building social confidence with structure, guidance, and follow-up.",
          features: [
            "Step-by-step system",
            "2 coaching calls per week",
            "Controlled training",
            "Daily missions",
            "Feedback and follow-up",
            "Discord community",
            "Dating profile feedback",
            "Simple fitness and nutrition structure",
          ],
          cta: "Apply for the base program",
        },
        {
          title: "Advanced",
          access: "Application based",
          subtitle: "Live coaching & faster development",
          audience:
            "For you if you want more support, faster feedback, and personal guidance in real situations.",
          features: [
            "Everything in the base program",
            "Live field training",
            "In-person coaching",
            "Direct feedback after interactions",
            "Personal correction",
            "More intensive follow-up",
            "Faster momentum",
          ],
          cta: "Apply for advanced",
          badge: "For fastest growth",
        },
      ],
    },
    community: {
      eyebrow: "Discord",
      title: "Join a community where men actually take action",
      text: "Discord is where you get accountability, daily challenges, feedback, and support from others on the same path. This is not a group where people just talk. This is a group where people do the work.",
      items: [
        "Daily challenges",
        "Social missions",
        "Fitness channel",
        "Profile feedback",
        "Wins and reporting",
        "Live calls",
        "Accountability",
      ],
      cardTitle: "Report. Get feedback. Keep moving forward.",
      cardText: "The community is built for momentum: daily missions, wins, calls, and clear accountability.",
      cta: "Join the free community",
    },
    fitness: {
      title: "Build confidence from multiple angles",
      text: "Social development is not only about what you say. It is also about how you carry yourself, how you take care of your body, and how comfortable you feel in your own appearance.",
      cards: [
        "Simple training structure",
        "Nutrition and discipline",
        "Style and first impressions",
        "Dating profile",
        "Self-respect",
      ],
    },
    results: {
      title: "What you can expect after 30 days",
      text: "Results depend on how much work you actually do, but the goal is that after 30 days you have built momentum and broken old patterns.",
      items: [
        "You have initiated contact in real life",
        "You have had real conversations",
        "You have reduced social hesitation",
        "You have clearer structure",
        "You have improved your first impression",
        "You have started building real experience",
      ],
    },
    apply: {
      eyebrow: "Next step",
      title: "Ready to stop thinking and start taking action?",
      text: "Book a free call and we will see if Social Reset is the right fit for you. If it is, we will show you exactly how to get started.",
      cta: "Book a free call",
    },
    form: {
      eyebrow: "Application",
      title: "Send a short application",
      text: "Tell us what you want to improve most. We will get back to you with the next step.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "name@email.com",
      phone: "Phone number",
      country: "Country code",
      phonePlaceholder: "+1, +44, +46...",
      goal: "What do you want to improve most?",
      goalPlaceholder: "Social confidence, fitness, discipline, first impressions...",
      submit: "Send application",
      success: "Thanks. Your application is ready to connect to your booking or CRM flow.",
    },
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Is this just dating coaching?",
        answer:
          "No. Social Reset is about social confidence, personal development, action, fitness, and first impressions. Dating can be part of it, but the focus is helping you become more grounded in real social situations.",
      },
      {
        question: "Do I need experience?",
        answer:
          "No. The program is built for men who want to start from their current level and improve step by step.",
      },
      {
        question: "Is everything online?",
        answer:
          "The base program is online with coaching, Discord, missions, and feedback. The advanced program can include live coaching depending on location and setup.",
      },
      {
        question: "What happens inside Discord?",
        answer:
          "You get daily missions, accountability, feedback, fitness channels, profile feedback, and support from others who are also working on themselves.",
      },
      {
        question: "Are results guaranteed?",
        answer:
          "No. Results depend on your effort. We provide structure, missions, feedback, and support, but you need to do the work.",
      },
    ],
    footer: {
      tagline: "Stop overthinking. Start taking action.",
      disclaimer: "Results vary depending on the individual and their effort.",
    },
  },
  sv: {
    nav: {
      program: "Program",
      community: "Community",
      subscriptions: "Prenumerationer",
      bookCall: "Boka samtal",
      contact: "Kontakt",
      topCta: "Boka gratis samtal",
      menu: "Meny",
      close: "Stäng meny",
    },
    hero: {
      eyebrow: "Coaching. Community. Action i verkligheten.",
      title: "Sluta överanalysera. Börja agera.",
      text: "Social Reset hjälper killar att bygga socialt självförtroende, komma i bättre form och börja ta action i verkligheten med coaching, dagliga uppdrag och community.",
      primary: "Boka gratis samtal",
      secondary: "Gå med i communityt",
      trustPoints: ["30 dagars struktur", "Dagliga uppdrag", "Coaching & feedback", "Discord-community"],
      actionCards: ["Träna kontrollerat", "Ta action dagligen", "Rapportera dina wins"],
      daysLabel: "30 dagar",
      momentum: "Bygg momentum som känns.",
    },
    actionStrip: [
      ["Ingen oändlig teori", "Ett system byggt runt små actions i verkligheten."],
      ["Daglig accountability", "Tydliga check-ins så momentum inte försvinner."],
      ["Coaching-feedback", "Du vet vad du ska justera istället för att gissa själv."],
    ],
    problem: {
      title: "Du vet redan vad du borde göra, men du gör det inte",
      text: "Du kanske tänker mycket, väntar på rätt läge, tvekar när du borde agera och går hem med känslan av att du borde ha gjort något. Problemet är oftast inte att du saknar information. Problemet är att du inte har tränat på att agera i verkligheten.",
      items: [
        "Du fastnar i huvudet",
        "Du väntar på rätt tillfälle",
        "Du undviker sociala situationer",
        "Du saknar struktur och accountability",
        "Du vill förändras men vet inte var du ska börja",
      ],
    },
    contrast: {
      eyebrow: "Reseten",
      title: "Från fast i huvudet till aktiv i verkligheten",
      text: "Målet är inte att du ska bli någon annan. Målet är att du ska bygga bevis för att du kan agera, korrigera, lära dig och fortsätta framåt.",
      beforeTitle: "Före",
      afterTitle: "Efter Social Reset",
      before: [
        "Du spelar upp konversationer innan de ens händer",
        "Du väntar tills du känner dig redo",
        "Du konsumerar mer råd än du applicerar",
        "Du försvinner när motivationen går ner",
      ],
      after: [
        "Du tar små actions även när det känns obekvämt",
        "Du har en tydlig struktur för veckan",
        "Du får feedback och korrigerar snabbare",
        "Du bygger självförtroende genom faktisk erfarenhet",
      ],
    },
    solution: {
      eyebrow: "Lösningen",
      title: "Därför skapade vi Social Reset",
      text: "Social Reset är ett online-community och coachingprogram för killar som vill bygga riktig social erfarenhet. Inte genom mer teori, utan genom kontrollerad träning, dagliga uppdrag, feedback och uppföljning.",
      cards: [
        ["Social träning", "Öva på samtal, närvaro och kroppsspråk med tydlig riktning."],
        ["Dagliga uppdrag", "Små actions som bygger momentum utan att kännas kaotiska."],
        ["Feedback", "Få konkret input på vad du gör bra och vad du ska justera."],
        ["Fitness & första intryck", "Bygg disciplin, energi och ett starkare intryck."],
        ["Discord-community", "Rapportera, få stöd och håll dig ansvarig varje vecka."],
        ["Accountability", "Struktur som gör det svårare att falla tillbaka i gamla mönster."],
      ],
    },
    missionPreview: {
      eyebrow: "Mission preview",
      title: "Så kan en vecka se ut",
      text: "Varje uppdrag är tydligt, mätbart och tillräckligt obekvämt för att skapa utveckling utan att kasta dig in i kaos.",
      days: [
        ["Dag 1", "Håll ögonkontakt och bär dig själv bättre offentligt."],
        ["Dag 2", "Starta två korta konversationer med låg press."],
        ["Dag 3", "Rapportera vad som hände och få feedback."],
        ["Dag 4", "Uppgradera presentation: kläder, grooming, profil."],
        ["Dag 5", "Ta en större social action och rapportera resultatet."],
      ],
      note: "Uppdragen skalas efter din nivå. Du förväntas inte vara orädd dag ett.",
    },
    method: {
      eyebrow: "Metoden",
      title: "Så fungerar det",
      stepLabel: "Steg",
      steps: [
        {
          title: "Kontrollerad träning",
          text: "Du börjar i en trygg miljö där du får öva på samtal, presentation, kroppsspråk och nervositet utan onödig press.",
        },
        {
          title: "Uppdrag i verkligheten",
          text: "Du får tydliga actions varje dag. Små steg som bygger momentum och gör att du slutar tänka och börjar agera.",
        },
        {
          title: "Feedback & korrigering",
          text: "Du rapporterar vad du gjorde, vad som hände och vad som kändes svårt. Sedan får du konkret feedback på vad du ska förbättra.",
        },
      ],
    },
    fit: {
      eyebrow: "Fit check",
      title: "Det här är för killar som vill ha struktur, inte fler random tips",
      text: "Social Reset passar bäst för dig som är redo att träna konsekvent och rapportera ärligt.",
      forTitle: "Passar dig",
      notForTitle: "Passar inte dig",
      forItems: [
        "Du vill ha tydliga actions, inte vag motivation",
        "Du är villig att rapportera vad som faktiskt hände",
        "Du bryr dig om social confidence, fitness och disciplin",
        "Du vill ha en respektfull och professionell miljö",
      ],
      notForItems: [
        "Du vill ha genvägar utan att göra jobbet",
        "Du letar efter manipulativa taktiker",
        "Du vill bara konsumera content och vara passiv",
        "Du förväntar dig garanterade resultat utan insats",
      ],
    },
    programs: {
      eyebrow: "Program",
      title: "Välj din nivå",
      items: [
        {
          title: "Basprogrammet",
          access: "Ansökningsbaserat",
          subtitle: "30 dagars Social Reset",
          audience:
            "För dig som vill börja bygga socialt självförtroende med struktur, guidning och uppföljning.",
          features: [
            "Steg-för-steg system",
            "2 coaching calls per vecka",
            "Kontrollerad träning",
            "Dagliga uppdrag",
            "Feedback och uppföljning",
            "Discord-community",
            "Datingprofil-feedback",
            "Enkel fitness- och koststruktur",
          ],
          cta: "Ansök till basprogrammet",
        },
        {
          title: "Avancerat",
          access: "Ansökningsbaserat",
          subtitle: "Live coaching & snabbare utveckling",
          audience:
            "För dig som vill ha mer stöd, snabbare feedback och personlig guidning i verkliga situationer.",
          features: [
            "Allt i basprogrammet",
            "Live fältträning",
            "Coaching på plats",
            "Direkt feedback efter interaktioner",
            "Personlig korrigering",
            "Mer intensiv uppföljning",
            "Snabbare momentum",
          ],
          cta: "Ansök till avancerat",
          badge: "För snabbast utveckling",
        },
      ],
    },
    community: {
      eyebrow: "Discord",
      title: "Gå med i ett community där killar faktiskt tar action",
      text: "Discorden är platsen där du får accountability, dagliga challenges, feedback och stöd från andra som är på samma resa. Det är inte en grupp där folk bara snackar. Det är en grupp där folk gör jobbet.",
      items: [
        "Dagliga challenges",
        "Sociala uppdrag",
        "Fitnesskanal",
        "Profilfeedback",
        "Wins och rapportering",
        "Live calls",
        "Accountability",
      ],
      cardTitle: "Rapportera. Få feedback. Fortsätt röra dig framåt.",
      cardText: "Communityt är byggt för momentum: dagliga uppdrag, wins, calls och tydlig accountability.",
      cta: "Gå med i gratis community",
    },
    fitness: {
      title: "Bygg självförtroende från flera håll",
      text: "Social utveckling handlar inte bara om vad du säger. Det handlar också om hur du bär dig själv, hur du tar hand om kroppen och hur trygg du känner dig i ditt eget utseende.",
      cards: [
        "Enkel träningsstruktur",
        "Kost och disciplin",
        "Stil och första intryck",
        "Datingprofil",
        "Självrespekt",
      ],
    },
    results: {
      title: "Vad du kan förvänta dig efter 30 dagar",
      text: "Resultat beror på hur mycket jobb du faktiskt gör, men målet är att du efter 30 dagar ska ha byggt momentum och brutit gamla mönster.",
      items: [
        "Du har tagit kontakt i verkligheten",
        "Du har haft riktiga konversationer",
        "Du har minskat social tvekan",
        "Du har fått tydligare struktur",
        "Du har förbättrat ditt första intryck",
        "Du har börjat bygga riktig erfarenhet",
      ],
    },
    apply: {
      eyebrow: "Nästa steg",
      title: "Redo att sluta tänka och börja agera?",
      text: "Boka ett gratis samtal så kollar vi om Social Reset passar dig. Om det gör det visar vi exakt hur du kommer igång.",
      cta: "Boka gratis samtal",
    },
    form: {
      eyebrow: "Ansökan",
      title: "Skicka en kort ansökan",
      text: "Berätta vad du vill förändra mest. Vi återkommer med nästa steg.",
      name: "Namn",
      namePlaceholder: "Ditt namn",
      email: "Email",
      emailPlaceholder: "namn@email.com",
      phone: "Telefonnummer",
      country: "Landskod",
      phonePlaceholder: "+1, +44, +46...",
      goal: "Vad vill du förbättra mest?",
      goalPlaceholder: "Socialt självförtroende, fitness, disciplin, första intryck...",
      submit: "Skicka ansökan",
      success: "Tack. Ansökan är redo att kopplas till bokning eller CRM.",
    },
    faqTitle: "Vanliga frågor",
    faqs: [
      {
        question: "Är det här bara dejtingcoaching?",
        answer:
          "Nej. Social Reset handlar om socialt självförtroende, personlig utveckling, action, fitness och första intryck. Dejting kan vara en del av det, men fokus är att du ska bli tryggare i verkliga sociala situationer.",
      },
      {
        question: "Behöver jag ha erfarenhet?",
        answer:
          "Nej. Programmet är byggt för killar som vill börja från sin nuvarande nivå och utvecklas steg för steg.",
      },
      {
        question: "Är allt online?",
        answer:
          "Basprogrammet är online med coaching, Discord, uppdrag och feedback. Det avancerade programmet kan inkludera live coaching beroende på plats och upplägg.",
      },
      {
        question: "Vad händer i Discorden?",
        answer:
          "Du får dagliga uppdrag, accountability, feedback, fitnesskanaler, profilfeedback och stöd från andra som också jobbar på sig själva.",
      },
      {
        question: "Är resultat garanterade?",
        answer:
          "Nej. Resultat beror på din insats. Vi ger struktur, uppdrag, feedback och support, men du behöver göra jobbet.",
      },
    ],
    footer: {
      tagline: "Sluta överanalysera. Börja agera.",
      disclaimer: "Resultat varierar beroende på individ och insats.",
    },
  },
} as const;

type Language = keyof typeof translations;
type Copy = (typeof translations)[Language];
type Program = {
  title: string;
  access: string;
  subtitle: string;
  audience: string;
  features: readonly string[];
  cta: string;
  badge?: string;
};

function Section({
  id,
  eyebrow,
  title,
  text,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || text) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#39ff9f]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {text && <p className="mt-5 text-base leading-8 text-[#9aa8bd] sm:text-lg">{text}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
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

function LanguageToggle({
  language,
  onChange,
}: {
  language: Language;
  onChange: (language: Language) => void;
}) {
  return (
    <div
      aria-label="Choose language"
      className="grid grid-cols-2 rounded-full border border-white/15 bg-white/[0.05] p-1 text-xs font-bold"
    >
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

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-[#d9e4f2] sm:text-base">
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#39ff9f] shadow-[0_0_16px_rgba(57,255,159,0.55)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20">
      <div className="mb-5 h-10 w-10 rounded-[8px] border border-[#29a8ff]/30 bg-[#29a8ff]/10" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#9aa8bd]">{text}</p>
    </article>
  );
}

function ActionStrip({ items }: { items: Copy["actionStrip"] }) {
  return (
    <section className="px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-[8px] border border-white/10 bg-white/[0.045] p-3 shadow-2xl shadow-black/20 md:grid-cols-3">
        {items.map(([title, text]) => (
          <div className="rounded-[8px] border border-white/10 bg-[#07101b]/80 p-5" key={title}>
            <p className="text-base font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm leading-6 text-[#9aa8bd]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContrastSection({ copy }: { copy: Copy["contrast"] }) {
  return (
    <Section eyebrow={copy.eyebrow} title={copy.title} text={copy.text}>
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white">{copy.beforeTitle}</h3>
          <div className="mt-6 grid gap-3">
            {copy.before.map((item) => (
              <div
                className="rounded-[8px] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-[#b7c3d6]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-[8px] border border-[#39ff9f]/35 bg-[#39ff9f]/[0.055] p-6 shadow-[0_0_70px_rgba(57,255,159,0.1)] sm:p-8">
          <h3 className="text-2xl font-semibold text-white">{copy.afterTitle}</h3>
          <div className="mt-6 grid gap-3">
            {copy.after.map((item) => (
              <div
                className="rounded-[8px] border border-[#39ff9f]/20 bg-[#39ff9f]/10 px-4 py-3 text-sm font-medium leading-6 text-[#dfffee]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}

function MissionPreview({ copy }: { copy: Copy["missionPreview"] }) {
  return (
    <Section eyebrow={copy.eyebrow} title={copy.title} text={copy.text}>
      <div className="rounded-[8px] border border-white/10 bg-[#09111d] p-4 sm:p-6">
        <div className="grid gap-3 lg:grid-cols-5">
          {copy.days.map(([day, mission], index) => (
            <article
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5"
              key={day}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#39ff9f]">
                  {day}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[#29a8ff]/30 bg-[#29a8ff]/10 text-xs font-bold text-[#bde9ff]">
                  {index + 1}
                </span>
              </div>
              <p className="text-sm font-semibold leading-6 text-white">{mission}</p>
            </article>
          ))}
        </div>
        <p className="mt-5 rounded-[8px] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-[#9aa8bd]">
          {copy.note}
        </p>
      </div>
    </Section>
  );
}

function FitCheck({ copy }: { copy: Copy["fit"] }) {
  return (
    <Section eyebrow={copy.eyebrow} title={copy.title} text={copy.text}>
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-[8px] border border-[#39ff9f]/30 bg-[#39ff9f]/[0.055] p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white">{copy.forTitle}</h3>
          <div className="mt-6">
            <CheckList items={copy.forItems} />
          </div>
        </article>
        <article className="rounded-[8px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-white">{copy.notForTitle}</h3>
          <div className="mt-6">
            <CheckList items={copy.notForItems} />
          </div>
        </article>
      </div>
    </Section>
  );
}

function PricingCard({ program }: { program: Program }) {
  return (
    <article
      className={`relative rounded-[8px] border p-6 sm:p-8 ${
        program.badge
          ? "border-[#39ff9f]/45 bg-[#39ff9f]/[0.055] shadow-[0_0_70px_rgba(57,255,159,0.12)]"
          : "border-white/10 bg-white/[0.045]"
      }`}
    >
      {program.badge && (
        <div className="mb-5 inline-flex rounded-full border border-[#39ff9f]/40 bg-[#39ff9f]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#39ff9f]">
          {program.badge}
        </div>
      )}
      <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
      <p className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[#d9e4f2]">
        {program.access}
      </p>
      <p className="mt-2 font-medium text-[#39ff9f]">{program.subtitle}</p>
      <p className="mt-5 text-sm leading-7 text-[#9aa8bd]">{program.audience}</p>
      <div className="my-7 h-px bg-white/10" />
      <CheckList items={program.features} />
      <div className="mt-8">
        <Button href={calendlyHref} variant={program.badge ? "primary" : "secondary"}>
          {program.cta}
        </Button>
      </div>
    </article>
  );
}

function LeadForm({ copy }: { copy: Copy["form"] }) {
  return (
    <div
      className="rounded-[8px] border border-white/10 bg-[#09111d]/90 p-5 shadow-2xl shadow-black/30 sm:p-8"
    >
      <div className="mb-6 pl-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39ff9f]">
          {copy.eyebrow}
        </p>
      </div>
      <div
        className="min-h-[520px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.03]"
        id="closingdealz-social-reset-form"
      />
      <Script
        async
        data-target="closingdealz-social-reset-form"
        id="closingdealz-social-reset-form-script"
        src="https://app.closingdealz.io/forms/ed7b1780-ef1f-4beb-8d8a-8961c642b1c9.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const copy = translations[language];

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

  const navLinks = [
    { href: "#program", label: copy.nav.program },
    { href: "#community", label: copy.nav.community },
    { href: "/subscriptions", label: copy.nav.subscriptions },
    { href: "#apply", label: copy.nav.bookCall },
    { href: "#contact", label: copy.nav.contact },
  ];

  return (
    <main className="overflow-hidden">
      <header className="absolute left-0 right-0 top-0 z-30 px-5 py-5 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a className="text-lg font-bold tracking-tight text-white" href="#top">
            Social Reset
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#9aa8bd] md:flex">
            {navLinks.map((link) => (
              <a className="hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle language={language} onChange={setLanguage} />
            <a
              className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-[#39ff9f] hover:text-[#39ff9f] sm:inline-flex"
              href={calendlyHref}
            >
              {copy.nav.topCta}
            </a>
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? copy.nav.close : copy.nav.menu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/25 text-white md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              type="button"
            >
              <span className="sr-only">{isMenuOpen ? copy.nav.close : copy.nav.menu}</span>
              <span className="grid gap-1.5">
                <span className="block h-0.5 w-4 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
                <span className="block h-0.5 w-4 bg-current" />
              </span>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="mx-auto mt-4 max-w-6xl rounded-[8px] border border-white/10 bg-[#07101b]/95 p-3 shadow-2xl shadow-black/40 md:hidden">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <a
                  className="rounded-[8px] px-4 py-3 text-sm font-semibold text-[#d9e4f2] hover:bg-white/[0.06] hover:text-white"
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section
        id="top"
        className="relative flex min-h-[760px] items-end px-5 pb-14 pt-32 sm:px-6 lg:min-h-[860px] lg:px-8 lg:pb-20"
      >
        <Image
          alt=""
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="/social-reset-hero.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.96)_0%,rgba(5,7,13,0.78)_42%,rgba(5,7,13,0.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070d] to-transparent" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-[#29a8ff]/30 bg-[#29a8ff]/10 px-4 py-2 text-sm font-semibold text-[#bde9ff]">
              {copy.hero.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b7c3d6]">{copy.hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={calendlyHref}>{copy.hero.primary}</Button>
              <Button href={discordHref} variant="secondary">
                {copy.hero.secondary}
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {copy.hero.trustPoints.map((point) => (
                <div
                  className="rounded-[8px] border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-[#d9e4f2]"
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pb-2">
            <div className="rounded-[8px] border border-white/10 bg-[#07101b]/75 p-4 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-5">
              <div className="grid gap-4">
                {copy.hero.actionCards.map((item, index) => (
                  <div
                    className="rounded-[8px] border border-white/10 bg-white/[0.055] p-5"
                    key={item}
                  >
                    <span className="text-sm font-bold text-[#39ff9f]">0{index + 1}</span>
                    <p className="mt-2 text-xl font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[8px] border border-[#39ff9f]/30 bg-[#39ff9f]/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#39ff9f]">
                  {copy.hero.daysLabel}
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">{copy.hero.momentum}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActionStrip items={copy.actionStrip} />

      <Section title={copy.problem.title} text={copy.problem.text}>
        <CheckList items={copy.problem.items} />
      </Section>

      <ContrastSection copy={copy.contrast} />

      <Section eyebrow={copy.solution.eyebrow} title={copy.solution.title} text={copy.solution.text}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.solution.cards.map(([title, text]) => (
            <FeatureCard key={title} title={title} text={text} />
          ))}
        </div>
      </Section>

      <Section eyebrow={copy.method.eyebrow} title={copy.method.title}>
        <div className="grid gap-4 lg:grid-cols-3">
          {copy.method.steps.map((step, index) => (
            <article
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6"
              key={step.title}
            >
              <span className="text-sm font-bold text-[#29a8ff]">
                {copy.method.stepLabel} {index + 1}
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#9aa8bd]">{step.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <MissionPreview copy={copy.missionPreview} />

      <Section id="program" eyebrow={copy.programs.eyebrow} title={copy.programs.title}>
        <div className="grid gap-5 lg:grid-cols-2">
          {copy.programs.items.map((program) => (
            <PricingCard key={program.title} program={program} />
          ))}
        </div>
      </Section>

      <Section
        id="community"
        eyebrow={copy.community.eyebrow}
        title={copy.community.title}
        text={copy.community.text}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <CheckList items={copy.community.items} />
          <div className="rounded-[8px] border border-white/10 bg-[#09111d] p-6 sm:p-8">
            <p className="text-3xl font-semibold tracking-tight text-white">
              {copy.community.cardTitle}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#9aa8bd]">{copy.community.cardText}</p>
            <div className="mt-6">
              <Button href={discordHref}>{copy.community.cta}</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title={copy.fitness.title} text={copy.fitness.text}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {copy.fitness.cards.map((card) => (
            <div
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 text-base font-semibold text-white"
              key={card}
            >
              {card}
            </div>
          ))}
        </div>
      </Section>

      <Section title={copy.results.title} text={copy.results.text}>
        <div className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
          <CheckList items={copy.results.items} />
        </div>
      </Section>

      <FitCheck copy={copy.fit} />

      <Section id="apply" className="lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#39ff9f]">
              {copy.apply.eyebrow}
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {copy.apply.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#9aa8bd]">{copy.apply.text}</p>
            <div className="mt-8">
              <Button href={calendlyHref}>{copy.apply.cta}</Button>
            </div>
          </div>
          <LeadForm copy={copy.form} />
        </div>
      </Section>

      <Section title={copy.faqTitle}>
        <div className="grid gap-4">
          {copy.faqs.map((faq) => (
            <details
              className="group rounded-[8px] border border-white/10 bg-white/[0.045] p-5 open:border-[#29a8ff]/40"
              key={faq.question}
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#9aa8bd]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer
        id="contact"
        className="border-t border-white/10 px-5 pb-28 pt-10 sm:px-6 md:py-10 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <p className="text-xl font-bold text-white">Social Reset</p>
            <p className="mt-2 text-[#9aa8bd]">{copy.footer.tagline}</p>
            <p className="mt-5 text-sm text-[#68768a]">{copy.footer.disclaimer}</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-[#9aa8bd]">
            <a className="hover:text-white" href="#program">
              {copy.nav.program}
            </a>
            <a className="hover:text-white" href="#community">
              {copy.nav.community}
            </a>
            <a className="hover:text-white" href="/subscriptions">
              {copy.nav.subscriptions}
            </a>
            <a className="hover:text-white" href="#apply">
              {copy.nav.bookCall}
            </a>
            <a className="hover:text-white" href="#contact">
              {copy.nav.contact}
            </a>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#05070d]/92 px-4 py-3 backdrop-blur md:hidden">
        <a
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#39ff9f] px-5 py-3 text-sm font-bold text-[#04100b] shadow-[0_0_32px_rgba(57,255,159,0.22)]"
          href={calendlyHref}
        >
          {copy.nav.topCta}
        </a>
      </div>
    </main>
  );
}
