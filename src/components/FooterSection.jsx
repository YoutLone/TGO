import React from "react";

export default function FooterSection({ t, displayFont }) {
  return (
    <footer className="section-pad bg-teak-900 text-teak-100">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="footer-card space-y-4 p-6 reveal">
          <div className="flex items-center gap-3">
            <img
              src="/logo/khin-lay.jpeg"
              alt="KHIN LAY"
              className="icon-hover h-10 w-10 rounded-full border border-teak-700 object-cover"
            />
            <p className="text-sm uppercase tracking-[0.3em] text-teak-300">KHIN LAY</p>
          </div>
          <h3 className={`text-3xl text-gray ${displayFont}`}>{t.footerTitle}</h3>
          <p className="text-sm text-teak-200">{t.footerBody}</p>
        </div>
        <div className="footer-card grid gap-4 p-6 text-sm text-teak-200 sm:grid-cols-2 reveal">
          <div>
            <p className="font-semibold text-gray">{t.contactLabel}</p>
            <p>+959254911866</p>
            <p>hello@khinlay.mm</p>
          </div>
          <div>
            <p className="font-semibold text-gray">{t.addressLabel}</p>
            <p>{t.addressValue}</p>
            <p>{t.addressLine2}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
