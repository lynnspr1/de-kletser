"use client"

/**
 * KletserTabs
 * -----------
 * Three-tab feature section for the De Kletser café website.
 * Tabs: Menu · Reserveren · Werken bij
 *
 * Dependencies:
 *   @radix-ui/react-tabs  lucide-react  tailwindcss
 *   @/lib/utils  (cn helper)
 *
 * Fonts (add to your layout / globals.css):
 *   Alegreya Sans · Space Grotesk  (Google Fonts)
 */

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { UtensilsCrossed, CalendarDays, Users, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

/* ─────────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────────── */

export interface TabContent {
  badge: string
  title: string
  description: string
  buttonText: string
  /** Set to a real path once the page exists, e.g. "/menu" */
  buttonHref?: string
  imageSrc: string
  imageAlt: string
}

export interface Tab {
  value: string
  icon: React.ReactNode
  label: string
  content: TabContent
}

export interface KletserTabsProps {
  badge?: string
  heading?: string
  description?: string
  tabs?: Tab[]
}

/* ─────────────────────────────────────────────────────────────────
   Default tab data  (all copy in Dutch, De Kletser branded)
───────────────────────────────────────────────────────────────── */

const defaultTabs: Tab[] = [
  {
    value: "menu",
    icon: <UtensilsCrossed className="h-4 w-4 shrink-0" />,
    label: "Menu",
    content: {
      badge: "Onze kaart",
      title: "Ontdek wat er op tafel komt bij Kletser",
      description:
        "Van goede koffie en een uitgebreide lunch tot borrelplanken, diner en verrassende specials. Op onze kaart vind je smaakvolle gerechten en drankjes voor ieder moment van de dag.",
      buttonText: "Bekijk menu",
      buttonHref: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
      imageAlt: "Smaakvolle gerechten bij De Kletser",
    },
  },
  {
    value: "reserveren",
    icon: <CalendarDays className="h-4 w-4 shrink-0" />,
    label: "Reserveren",
    content: {
      badge: "Plan je bezoek",
      title: "Zeker zijn van een tafel bij Kletser?",
      description:
        "Kom langs voor koffie, lunch, borrel of diner en reserveer eenvoudig jouw tafel. Zo ben je verzekerd van een fijne plek om samen te genieten.",
      buttonText: "Reserveer nu",
      buttonHref: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
      imageAlt: "Gezellige tafelopstelling bij De Kletser",
    },
  },
  {
    value: "werken-bij",
    icon: <Users className="h-4 w-4 shrink-0" />,
    label: "Werken bij",
    content: {
      badge: "Join the team",
      title: "Werken op een plek vol sfeer en gezelligheid",
      description:
        "Lijkt het je leuk om onderdeel te zijn van Kletser? We zijn altijd op zoek naar enthousiaste mensen met gevoel voor gastvrijheid, energie en een hart voor horeca.",
      buttonText: "Bekijk vacatures",
      buttonHref: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80",
      imageAlt: "Het team van De Kletser aan het werk",
    },
  },
]

/* ─────────────────────────────────────────────────────────────────
   Brand tokens  (inline — no Tailwind config change required)
   To use Tailwind class names instead, add these to tailwind.config:
     theme.extend.colors.kletser = { terracotta:'#B5522A', ... }
───────────────────────────────────────────────────────────────── */

const brand = {
  terracotta: "#B5522A",
  cream:      "#F5F0E8",
  blush:      "#FDF6EE",
  espresso:   "#1E130C",
  mocha:      "#7A4035",
  sand:       "#D4B98A",
} as const

/* ─────────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────────── */

const KletserTabs = ({
  badge       = "Kletser",
  heading     = "Alles wat je nodig hebt, op één plek",
  description = "Bij Kletser draait het om samenzijn. Bekijk ons menu, reserveer een tafel of kom werken bij een team vol passie en gastvrijheid.",
  tabs        = defaultTabs,
}: KletserTabsProps) => {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: brand.cream }}
    >
      {/* ── Subtle noise texture for warmth ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">

        {/* ════════════════════════════════════
            Section header
        ════════════════════════════════════ */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">

          {/* Eyebrow badge */}
          <span
            className="inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor:     brand.terracotta,
              color:           brand.terracotta,
              backgroundColor: "rgba(181,82,42,0.06)",
              fontFamily:      '"Space Grotesk", system-ui, sans-serif',
            }}
          >
            {badge}
          </span>

          {/* Heading */}
          <h2
            className="max-w-2xl text-4xl leading-tight md:text-5xl"
            style={{
              fontFamily:    '"Alegreya Sans", Georgia, serif',
              fontWeight:    400,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color:         brand.espresso,
            }}
          >
            {heading}
          </h2>

          {/* Sub-description */}
          <p
            className="max-w-xl text-base leading-relaxed md:text-lg"
            style={{
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              color:      "rgba(30,19,12,0.60)",
            }}
          >
            {description}
          </p>
        </div>

        {/* ════════════════════════════════════
            Tabs
        ════════════════════════════════════ */}
        <TabsPrimitive.Root defaultValue={tabs[0].value} className="flex flex-col gap-6">

          {/* ── Tab list ── */}
          <TabsPrimitive.List
            className="mx-auto flex w-fit flex-wrap items-center justify-center gap-1.5 rounded-2xl p-1.5"
            style={{
              backgroundColor: "rgba(30,19,12,0.05)",
              border:          `1px solid rgba(212,185,138,0.40)`,
            }}
          >
            {tabs.map((tab) => (
              <TabsPrimitive.Trigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  // Base
                  "flex cursor-pointer select-none items-center gap-2.5 rounded-xl px-5 py-2.5",
                  "text-sm font-semibold transition-all duration-200",
                  // Inactive
                  "text-[rgba(30,19,12,0.50)] hover:bg-[rgba(30,19,12,0.04)] hover:text-[rgba(30,19,12,0.80)]",
                  // Active  — Tailwind arbitrary-value variant
                  "data-[state=active]:bg-[#B5522A] data-[state=active]:text-[#F5F0E8] data-[state=active]:shadow-sm",
                  // Focus
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5522A] focus-visible:ring-offset-2",
                )}
                style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>

          {/* ── Content panel ── */}
          <div
            className="rounded-2xl p-6 md:p-10 lg:p-14"
            style={{
              backgroundColor: brand.blush,
              border:          `1px solid rgba(212,185,138,0.25)`,
              boxShadow:
                "0 4px 24px rgba(30,19,12,0.06), 0 1px 6px rgba(30,19,12,0.04)",
            }}
          >
            {tabs.map((tab) => (
              <TabsPrimitive.Content
                key={tab.value}
                value={tab.value}
                className="grid items-center gap-10 focus-visible:outline-none lg:grid-cols-2 lg:gap-14"
              >
                {/* ── Left: text ── */}
                <div className="flex flex-col gap-5">

                  {/* Content badge */}
                  <span
                    className="inline-flex w-fit items-center rounded-full border px-3.5 py-0.5 text-xs font-semibold"
                    style={{
                      borderColor:     brand.terracotta,
                      color:           brand.terracotta,
                      backgroundColor: "rgba(181,82,42,0.05)",
                      fontFamily:      '"Space Grotesk", system-ui, sans-serif',
                    }}
                  >
                    {tab.content.badge}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-3xl leading-tight lg:text-4xl"
                    style={{
                      fontFamily:    '"Alegreya Sans", Georgia, serif',
                      fontWeight:    400,
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color:         brand.espresso,
                    }}
                  >
                    {tab.content.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-base leading-relaxed lg:text-lg"
                    style={{
                      fontFamily: '"Space Grotesk", system-ui, sans-serif',
                      color:      "rgba(30,19,12,0.65)",
                      textTransform: "none",
                    }}
                  >
                    {tab.content.description}
                  </p>

                  {/* CTA — use <a> so it can be a real link later */}
                  <a
                    href={tab.content.buttonHref ?? "#"}
                    className={cn(
                      "mt-1 inline-flex w-fit items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
                      "bg-[#B5522A] text-[#F5F0E8]",
                      "transition-all duration-200 hover:bg-[#7A4035] hover:shadow-md",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B5522A] focus-visible:ring-offset-2",
                    )}
                    style={{ fontFamily: '"Space Grotesk", system-ui, sans-serif' }}
                  >
                    {tab.content.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* ── Right: image ── */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: "4 / 3",
                    boxShadow:
                      "0 20px 48px rgba(30,19,12,0.12), 0 4px 12px rgba(30,19,12,0.08)",
                  }}
                >
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Warm gradient overlay */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(30,19,12,0.28) 0%, transparent 55%)",
                    }}
                  />
                </div>
              </TabsPrimitive.Content>
            ))}
          </div>
        </TabsPrimitive.Root>
      </div>
    </section>
  )
}

export { KletserTabs }
