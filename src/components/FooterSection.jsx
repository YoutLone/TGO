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
            <a
              href="https://www.facebook.com/share/1CE7iubnkG/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link mt-3 inline-flex"
              aria-label="Visit our Facebook page"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.022 3.657 9.185 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.52 1.492-3.913 3.778-3.913 1.094 0 2.238.196 2.238.196v2.474h-1.26c-1.243 0-1.63.774-1.63 1.567v1.891h2.773l-.443 2.91h-2.33V22c4.78-.755 8.437-4.918 8.437-9.94z" />
              </svg>
              <span>Facebook Page</span>
            </a>
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
