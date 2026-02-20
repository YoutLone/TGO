import React from "react";

export default function StorySection({ t, displayFont }) {
  return (
    <section id="story" className="section-pad bg-sand-texture">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="space-y-6 text-center reveal sm:text-left">
          <p className="tag">{t.storyTag}</p>
          <h2 className={`text-3xl text-teak-900 sm:text-4xl leading-relaxed ${displayFont}`}>
            {t.storyTitle.split("\n").map((line, index) => (
              <span key={`${line}-${index}`} className={index === 0 ? "block" : "block mt-4"}>
                {line}
              </span>
            ))}
          </h2>
          <p className="text-teak-700">{t.storyBody}</p>
          <div className="glass p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-teak-500">{t.chefNoteLabel}</p>
            <p className="mt-4 text-lg font-semibold text-teak-900">{t.chefNote}</p>
            <p className="mt-2 text-sm text-teak-600">{t.chefName}</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.gallery.map((item) => (
            <div
              key={item.label}
              className="glass-card reveal relative flex min-h-[220px] items-end overflow-hidden text-white"
            >
              <img src={item.image} alt={item.label} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teak-950/70 via-teak-900/30 to-transparent" />
              <p className="relative p-6 text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
