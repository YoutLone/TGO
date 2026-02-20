import React from "react";

export default function LocationSection({ t, displayFont }) {
  return (
    <section id="location" className="section-pad bg-cream-texture">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-center reveal sm:text-left">
          <p className="tag">{t.mapTag}</p>
          <h2 className={`text-3xl text-teak-900 sm:text-4xl ${displayFont}`}>{t.mapTitle}</h2>
          <p className="max-w-xl text-teak-700">{t.mapBody}</p>
          <div className="glass p-6 text-sm text-teak-700">
            <p className="font-semibold text-teak-800">{t.locationLabel}</p>
            <p className="mt-2">{t.locationValue}</p>
            <p>{t.addressLine2}</p>
          </div>
          <a
            href="https://www.google.com/maps?q=16.88928653951536,96.19133402464216"
            className="inline-flex rounded-full bg-lacquer-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:-translate-y-0.5"
            target="_blank"
            rel="noreferrer"
          >
            {t.mapLinkLabel}
          </a>
        </div>
        <div className="glass-card reveal overflow-hidden">
          <iframe
            title="KHIN LAY location"
            src="https://www.google.com/maps?q=16.88928653951536,96.19133402464216&z=16&output=embed"
            className="h-[320px] w-full sm:h-[380px] lg:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
