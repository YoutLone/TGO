import React from "react";

export default function GallerySection({ t, displayFont, galleryIndex, setGalleryIndex }) {
  return (
    <section id="gallery" className="section-pad bg-sand-texture">
      <div className="mx-auto max-w-2xl text-center reveal">
        <p className={`tag text-xl uppercase tracking-[0.35em] sm:text-2xl ${displayFont} mt-6`}>
          {t.experienceTag}
        </p>
        {t.experienceTitle ? (
          <h2 className={`mt-6 text-3xl text-teak-900 sm:text-4xl ${displayFont}`}>
            {t.experienceTitle}
          </h2>
        ) : null}
        <p className="mt-4 text-teak-700">{t.experienceBody}</p>
      </div>
      <div className="mt-10">
        <div className="glass-card relative mx-auto max-w-5xl overflow-hidden reveal">
          <div className="relative h-[420px] sm:h-[480px]">
            {t.galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`absolute inset-0 transition-all duration-700 ease-out carousel-slide ${
                  index === galleryIndex
                    ? "translate-x-0 opacity-100 is-active"
                    : index < galleryIndex
                      ? "-translate-x-8 opacity-0"
                      : "translate-x-8 opacity-0"
                }`}
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-teak-950/70 via-teak-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">{t.experienceTag}</p>
                  <h3 className={`mt-3 text-3xl ${displayFont}`}>{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm text-white/80">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              type="button"
              onClick={() =>
                setGalleryIndex((prev) => (prev - 1 + t.galleryItems.length) % t.galleryItems.length)
              }
              className="m-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Previous slide"
            >
              ←
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              onClick={() => setGalleryIndex((prev) => (prev + 1) % t.galleryItems.length)}
              className="m-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white transition hover:bg-white/30"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {t.galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setGalleryIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === galleryIndex ? "w-8 bg-lacquer-500" : "w-2.5 bg-teak-300"
              }`}
              aria-label={`Go to ${item.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
