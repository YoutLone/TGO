import React from "react";

export default function ReservationSection({ t, displayFont }) {
  return (
    <section id="reservation" className="section-pad bg-cream-texture">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-center sm:text-left">
          <p className="tag mb-3">{t.reservationTag}</p>
          <h2 className={`text-3xl text-teak-900 sm:text-4xl ${displayFont}`}>
            {t.reservationTitle}
          </h2>
          <p className="max-w-xl text-teak-700">{t.reservationBody}</p>
          <div className="glass p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-teak-500">{t.callLabel}</p>
            <p className={`mt-4 text-3xl text-teak-900 ${displayFont}`}>09-9254911866 / 09-780705922 </p>
            <p className="mt-2 text-sm text-teak-600">{t.hoursValue}</p>
            <a
              href="tel:+959254911866"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-lacquer-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:-translate-y-0.5 sm:w-auto"
            >
              {t.callCta}
            </a>
          </div>
        </div>
        <div className="glass p-6 sm:p-8 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-teak-500">{t.formTag}</p>
          <h3 className={`mt-4 text-2xl text-teak-900 ${displayFont}`}>{t.formTitle}</h3>
          <form className="mt-6 grid gap-4 text-sm text-teak-700">
            <input
              className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
              placeholder={t.formPlaceholders.name}
              type="text"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                placeholder={t.formPlaceholders.date}
                type="date"
              />
              <input
                className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                placeholder={t.formPlaceholders.time}
                type="time"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                placeholder={t.formPlaceholders.guests}
                type="number"
                min="1"
                max="20"
              />
              <input
                className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                placeholder={t.formPlaceholders.phone}
                type="tel"
              />
            </div>
            <textarea
              className="min-h-[120px] rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
              placeholder={t.formPlaceholders.note}
            />
            <button
              type="button"
              className="w-full rounded-full border border-teak-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-teak-700 transition hover:-translate-y-0.5 sm:w-auto"
            >
              {t.formSubmit}
            </button>
            <p className="text-xs text-teak-500">{t.formHint}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
