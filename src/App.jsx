import React from "react";
import { setupScrollReveal } from "./utils/scrollReveal.js";
import { content } from "./data/content.js";
import HeroSection from "./components/HeroSection.jsx";
import StorySection from "./components/StorySection.jsx";
import LocationSection from "./components/LocationSection.jsx";
import MenuSection from "./components/MenuSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import ReservationSection from "./components/ReservationSection.jsx";
import FooterSection from "./components/FooterSection.jsx";

export default function App() {
  const [lang, setLang] = React.useState("my");
  const t = content[lang];
  const [galleryIndex, setGalleryIndex] = React.useState(0);
  const heroMenuRef = React.useRef(null);

  React.useEffect(() => {
    const cleanup = setupScrollReveal(document);
    return cleanup;
  }, [lang]);

  React.useEffect(() => {
    const handleOutsideTap = (event) => {
      const menu = heroMenuRef.current;
      if (!menu?.open) return;
      if (menu.contains(event.target)) return;
      menu.removeAttribute("open");
    };

    document.addEventListener("pointerdown", handleOutsideTap);
    return () => document.removeEventListener("pointerdown", handleOutsideTap);
  }, []);

  React.useEffect(() => {
    if (!t.galleryItems?.length) return undefined;
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % t.galleryItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [t.galleryItems?.length]);

  React.useEffect(() => {
    if (window.location.hash !== "#menu") return;
    const target = document.querySelector("#menu");
    if (!target) return;
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  const displayFont = lang === "my" ? "font-myanmar" : "font-display";

  return (
    <div className="min-h-screen bg-teak-50">
      <HeroSection
        t={t}
        lang={lang}
        setLang={setLang}
        displayFont={displayFont}
        heroMenuRef={heroMenuRef}
      />
      <StorySection t={t} displayFont={displayFont} />
      <LocationSection t={t} displayFont={displayFont} />
      <MenuSection lang={lang} />
      <GallerySection
        t={t}
        displayFont={displayFont}
        galleryIndex={galleryIndex}
        setGalleryIndex={setGalleryIndex}
      />
      <ReservationSection t={t} displayFont={displayFont} />
      <FooterSection t={t} displayFont={displayFont} />
    </div>
  );
}
