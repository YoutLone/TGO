import React from "react";

export default function HeroSection({ t, lang, setLang, displayFont, heroMenuRef }) {
  return (
    <header className="hero-bg hero-scene min-h-screen relative overflow-hidden bg-hero-pattern bg-cream-texture">
      <div className="hero-top-nav">
        <nav className="hero-top-links flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teak-600">
          {[
            { id: "story", label: t.storyTag },
            { id: "gallery", label: t.galleryTag ?? "Gallery" },
            { id: "location", label: t.mapTag },
            { id: "reservation", label: t.reserveCta }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-teak-200 bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teak-600 transition hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hero-top-lang flex items-center gap-2 rounded-full border border-teak-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teak-600">
          <span className="text-[0.6rem] text-teak-500">{t.languageLabel}</span>
          <button
            type="button"
            onClick={() => setLang("my")}
            className={`rounded-full px-3 py-1 ${lang === "my" ? "bg-lacquer-500 text-white" : "text-teak-600"}`}
          >
            MY
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`rounded-full px-3 py-1 ${lang === "en" ? "bg-lacquer-500 text-white" : "text-teak-600"}`}
          >
            EN
          </button>
        </div>
        <details className="hero-top-menu" ref={heroMenuRef}>
          <summary className="hero-top-menu-button" aria-label="Open menu">
            <span />
            <span />
            <span />
          </summary>
          <div className="hero-top-menu-panel">
            {[
              { id: "story", label: t.storyTag },
              { id: "gallery", label: t.galleryTag ?? "Gallery" },
              { id: "location", label: t.mapTag },
              { id: "reservation", label: t.reserveCta }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hero-top-menu-link"
                onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
      <div className="section-pad grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="tag reveal mt-4 sm:mt-0">{t.tag}</span>
          </div>
          <div className="space-y-5">
            <div className="reveal hero-stagger flex items-center gap-4" style={{ "--delay": "0.05s" }}>
              <img
                src="/logo/khin-lay.jpeg"
                alt="KHIN LAY"
                className="icon-hover h-12 w-12 rounded-full border border-white/70 object-cover shadow-soft sm:h-14 sm:w-14"
              />
              <p className="text-sm mb-3 font-semibold uppercase tracking-[0.3em] text-teak-500">KHIN LAY</p>
            </div>
            <h1
              className={`hero-title reveal hero-stagger text-center text-[2.3rem] leading-[1.08] text-teak-900 sm:text-left sm:text-[3.2rem] lg:text-[4.2rem] ${
                lang === "my" ? "font-myanmar" : "font-display"
              }`}
              style={{ "--delay": "0.12s" }}
            >
              {t.heroTitle}
              <span
                className={`hero-subtitle mt-4 block text-base text-lacquer-600 sm:mt-6 sm:text-2xl ${
                  lang === "my" ? "font-myanmar" : "font-display"
                }`}
              >
                {t.heroSubtitle.split("\n").map((line, index) => (
                  <span key={`${line}-${index}`} className={index === 0 ? "block" : "block mt-3"}>
                    {line}
                  </span>
                ))}
              </span>
            </h1>
            <p
              className="reveal hero-stagger max-w-xl text-center text-base text-teak-700 sm:text-left sm:text-lg"
              style={{ "--delay": "0.2s" }}
            >
              {t.heroDescription}
            </p>
          </div>
          <div
            className="reveal hero-stagger flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ "--delay": "0.28s" }}
          >
            <a
              href="#reservation"
              className="w-full rounded-full bg-lacquer-500 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-0.5 sm:w-auto"
            >
              {t.reserveCta}
            </a>
            <a
              href="#menu"
              className="w-full rounded-full border border-teak-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-teak-700 transition hover:-translate-y-0.5 sm:w-auto"
            >
              {t.viewMenu}
            </a>
          </div>
          <div
            className="reveal hero-stagger grid gap-4 text-sm text-teak-600 sm:grid-cols-3 sm:gap-6"
            style={{ "--delay": "0.36s" }}
          >
            <div>
              <p className="font-semibold text-teak-800">{t.hoursLabel}</p>
              <p>{t.hoursValue}</p>
            </div>
            <div>
              <p className="font-semibold text-teak-800">{t.locationLabel}</p>
              <p>{t.locationValue}</p>
            </div>
            <div>
              <p className="font-semibold text-teak-800">{t.deliveryLabel}</p>
              <p>{t.deliveryValue}</p>
            </div>
          </div>
        </div>
        <div className="relative lg:justify-self-end reveal-soft">
          <div className="hero-bowl-stage">
            <div className="hero-accent" aria-hidden="true" />
            <div className="hero-bowl-ring" aria-hidden="true" />
            <div className="hero-bowl">
              <img
                src="/logo/noodle.jpg"
                alt="KHIN LAY signature dish"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-specials">
        {[
          "/gallery/memory-1.jpeg",
          "/gallery/memory-2.jpeg",
          "/gallery/memory-3.jpeg",
          "/gallery/memory-4.jpeg"
        ].map((src, index) => (
          <div key={src} className="hero-thumb">
            <img
              src={src}
              alt={`Special menu ${index + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </header>
  );
}
