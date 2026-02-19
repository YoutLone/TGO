import React from "react";
import { setupScrollReveal } from "./utils/scrollReveal.js";
import MenuSection from "./components/MenuSection.jsx";

const content = {
  my: {
    languageLabel: "ဘာသာ",
    tag: "တောင်ငူမြို့ • မြန်မာရိုးရာအစားအစာ",
    heroTitle: "တောင်ငူ မုန့်ဟင်းခါး",
    heroSubtitle: "\"ရိုးရာအနှစ်သာရကို အရင်းခံပြီး ခေတ်သစ်အရသာနဲ့အညီ ဖန်တီးထားပါသည်\"",
    heroDescription:
      "\"တောင်ငူမြို့ရဲ့ နံနက်ခင်းဈေးတွေကနေ အစပြုလို့... လတ်ဆတ်တဲ့ ဆေးဘက်ဝင်အပင်နံ့သင်းသင်း၊ အချိန်အကြာကြီး တည်ထားတဲ့ ဟင်းရည်ချိုချိုနဲ့ ရိုးရာကို ခေတ်ပေါ်ဟန် ရောယှက်ထားတဲ့ မြန်မာ့အရသာ စစ်စစ်များ\"",
    reserveCta: "ကြိုတင်စာပွဲ ရယူရန်",
    viewMenu: "မီနူးကြည့်ရန်",
    hoursLabel: "ဆိုင်ဖွင့်ချိန်",
    hoursValue: "မနက် 6:30 – ည 9:30",
    locationLabel: "ဆိုင်လိပ်စာ",
    locationValue:
      "မန္တလေးလမ်းထောင့်နှင့် မင်းရဲကျော်စွာလမ်းမကြီးပေါ်  မြောက်ဒဂုံမြို့နယ် ရန်ကုန်",
    deliveryLabel: "ပို့ဆောင်မှု",
    deliveryValue: "၅ ကီလိုမီတာအတွင်း ရရှိနိုင်",
    featuredLabel: "အထူးမီနူး",
    featuredTitle: "မုန့်ဟင်းခါး ပန်းကန်",
    featuredDesc: "ငါးရည်ကို အချိန်ကြာကြာချက်ပြီး ကြော်ဖက်၊ အစိမ်းရနံ့နဲ့ အနူးညံ့အရသာ။",
    storyTag: "ကျွန်ုပ်တို့အကြောင်း",
    storyTitle: "တောင်ငူအငွေ့အသက်၊ ခေတ်သစ်လက်ရာ",
    storyBody:
      "တောင်ငူရဲ့ ရိုးရာနံနက်ခင်း အရသာတွေဖြစ်တဲ့ မုန့်ဟင်းခါး၊ လက်ဖက်သုပ်နဲ့ ဒေသထွက် အဆာပြေစာတွေကို ခေတ်ပေါ် စားသောက်မှုအတွေ့အကြုံသစ်နဲ့အတူ ခံစားလိုက်ပါ",
    chefNoteLabel: "ချက်ပြုတ်သူမှတ်စု",
    chefNote:
      "“မွှေးပျံ့တဲ့ ရနံ့၊ ပြည်စုံတဲ့ အရသာနဲ့အတူ နွေးထွေးတဲ့ အိမ်ရဲ့အမှတ်တရတွေကို ဖော်ဆောင်ပေးမယ့် ဟင်းတစ်ခွက်”",
    chefName: "Chef: Khin Lay, တောင်ငူ",
    highlights: [
      {
        title: "တောင်ငူရိုးရာအမွေအနှစ်",
        text: "ပဲခူးတိုင်းဒေသကြီး၏ ရိုးရာအရသာစစ်စစ်ကို အခြေခံပြီး မျိုးဆက်တစ်ခုမှတစ်ခုသို့ လက်ဆင့်ကမ်းလာသည့် တောင်ငူရိုးရာ ချက်နည်းပြုတ်နည်းများ ဖြစ်ပါသည်။",
        accent: "bg-lacquer-100 text-lacquer-700"
      },
      {
        title: "အာရုံတက်မုန့်ဟင်းခါးရည်များ",
        text: "ငါးအနှစ်၊ သန့်ရှင်းလတ်ဆတ်သော စပါးလင်နှင့် အမွှေးအကြိုင်များကို အသုံးပြုကာ အာရုံတက်ကတည်းက စိတ်ရှည်လက်ရှည် အချိန်ပေးချက်ပြုတ်ထားသော မုန့်ဟင်းခါးဟင်းရည် ပူပူနွေးနွေးများ ဖြစ်ပါသည်။",
        accent: "bg-jade-100 text-jade-700"
      },
      {
        title: "မျှတသောအစပ်အရသာ",
        text: "အစပ်လျော့မှ အစပ်ပြင်းအထိ အရသာအမျိုးမျိုးရှိပြီး ဟင်းခတ်အမွှေးအကြိုင်များနှင့် လတ်ဆတ်သော ဆေးဘက်ဝင်အရွက်များကို အချိုးကျပေါင်းစပ်ပေးထားပါသည်။",
        accent: "bg-teak-100 text-teak-700"
      }
    ],
    gallery: [
      { label: "မနက်စျေးကွက်", gradient: "from-jade-600/80 via-teak-400/80 to-lacquer-500/80" },
      { label: "ဟင်းရည်အမှတ်တရ", gradient: "from-lacquer-600/80 via-teak-500/80 to-jade-500/80" },
      { label: "လက်ဖက်အခမ်းအနား", gradient: "from-teak-600/80 via-jade-400/80 to-lacquer-400/80" }
    ],
    experienceTag: "အမှတ်တရ မြင်ကွင်းများနှင့် အခိုက်အတန့်များ",
    experienceTitle: "",
    experienceBody:
      "အငွေ့တထောင်းထောင်းနှင့် မုန့်ဟင်းခါးအိုးကြီးမှသည် မိသားစုများ၏ ပျော်ရွှင်စရာ စားပွဲဝိုင်းများအထိ၊ ကျွန်ုပ်တို့ တောင်ငူမီးဖိုဆောင်၏ စစ်မှန်သောအရသာနှင့် အမှတ်တရမြင်ကွင်းများကို လေ့လာကြည့်ရှုလိုက်ပါ။",
    galleryItems: [
      {
        title: "မီးဖိုချက်ရမ်း",
        caption: "မနက်ပိုင်း ဟင်းရည်ပြင်ဆင်ခြင်းနှင့် သဲအမွှေးစပ်ချက်ခြင်း။",
        image: "/gallery/memory-1.jpeg"
      },
      {
        title: "စားပွဲများ",
        caption: "နွေးထွေးတဲ့ အလင်းရောင်နဲ့ အတူစားသောက်ခြင်း။",
        image: "/gallery/memory-2.jpeg"
      },
      {
        title: "ဟင်းပန်းကန် တင်ဆက်မှု",
        caption: "လတ်ဆတ်တဲ့ ဟင်းသီးဟင်းရွက်နဲ့ အလှဆင်ပေးထားပါတယ်။",
        image: "/gallery/memory-3.jpeg"
      },
      {
        title: "လက်ဖက်သုပ် အလေ့အကျင့်",
        caption: "Taungoo ရဲ့ အကြိုက်ဆုံး အလှဆင်ပုံစံ။",
        image: "/gallery/memory-4.jpeg"
      }
    ],
    reservationTag: "ကြိုတင်ချိန်းဆိုမှု",
    reservationTitle: "ဖုန်းခေါ်ပြီး ကြိုတင်ချိန်းနိုင်ပါသည်။",
    reservationBody:
      "ယခုအချိန်မှာ ဖုန်းနဲ့သာ ကြိုတင်ချိန်းနိုင်ပါတယ်။ ဖုန်းခေါ်လိုက်တာနဲ့ အချိန်တိုအတွင်း အတည်ပြုပါမယ်။ လူနည်းအုပ်စုများအတွက် လက်ရှိအချိန်လာရောက်လည်း အဆင်ပြေပါတယ်။",
    callLabel: "ဖုန်းခေါ်ရန်",
    callCta: "ယခုဖုန်းခေါ်ရန်",
    formTag: "နမူနာဖောင်",
    formTitle: "အလွယ်တကူ ကြိုတင်ဖောင်",
    formPlaceholders: {
      name: "အမည် အပြည့်အစုံ",
      date: "နေ့ရက်",
      time: "အချိန်",
      guests: "လူအရေအတွက်",
      phone: "ဖုန်းနံပါတ်",
      note: "မှတ်ချက် (မလိုအပ်ပါက ကျန်ထားနိုင်)"
    },
    formSubmit: "တင်သွင်းရန်",
    formHint: "ဤဖောင်သည် နမူနာသာ ဖြစ်သည်။ ဖုန်းဖြင့်သာ အတည်ပြုနိုင်ပါသည်။",
    footerTitle: "တောင်ငူ မုန့်ဟင်းခါး",
    footerBody: "ရိုးရာအရသာ၊ ခေတ်မီအတွေ့အကြုံ။ တောင်ငူမြို့မှာ အစစ်အမှန် မြန်မာအရသာကိုခံစားပါ။",
    contactLabel: "ဆက်သွယ်ရန်",
    addressLabel: "လိပ်စာ",
    addressValue: "မြောက်ဒဂုံမြို့နယ်၊ ရန်ကုန်",
    addressLine2: "ရာဇာဓိရာဇ်လမ်းအနီး",
    mapTag: "တည်နေရာ",
    mapTitle: "ဆိုင်တည်နေရာကို ရှာရန်",
    mapBody: "မြေပုံကိုနှိပ်ပြီး KHIN LAY သို့ လမ်းညွှန်ချက်ရယူပါ။",
    mapLinkLabel: "Google Maps ဖွင့်ရန်"
  },
  en: {
    languageLabel: "Language",
    tag: "Taungoo City • Myanmar Traditional Cuisine",
    heroTitle: "Taungoo Mohinga",
    heroSubtitle: "\"Crafted for modern tastes with traditional soul\"",
    heroDescription:
      "\"Inspired by Taungoo morning markets — fresh herbal notes, slow-simmered broths, and authentic Myanmar flavors presented with a modern touch.\"",
    reserveCta: "Reserve a Table",
    viewMenu: "View Menu",
    hoursLabel: "Open Hours",
    hoursValue: "6:30 AM – 9:30 PM",
    locationLabel: "Address",
    locationValue: "Corner of Mandalay St. & Min Yey Kyaw Swa Rd., North Dagon, Yangon",
    deliveryLabel: "Delivery",
    deliveryValue: "Available within 5 km",
    featuredLabel: "Featured",
    featuredTitle: "Mohinga Signature Bowl",
    featuredDesc: "Slow-cooked fish broth with crispy fritters and fragrant herbs.",
    storyTag: "Our Story",
    storyTitle: "Taungoo roots, modern presentation.",
    storyBody:
      "KHIN LAY celebrates Taungoo breakfast culture with mohinga, tea-leaf salad, and regional flavors paired with a modern dining experience.",
    chefNoteLabel: "Chef’s Note",
    chefNote: "“Every bowl carries aromatics, balanced heat, and the memory of home.”",
    chefName: "Chef Khin Lay, Taungoo",
    highlights: [
      {
        title: "Taungoo Heritage",
        text: "Recipes passed through generations, grounded in the authentic flavors of the Bago region.",
        accent: "bg-lacquer-100 text-lacquer-700"
      },
      {
        title: "Morning Broths",
        text: "Slow-cooked from dawn with fish bones, fresh lemongrass, and aromatic toasted spices.",
        accent: "bg-jade-100 text-jade-700"
      },
      {
        title: "Balanced Heat",
        text: "From gentle to fiery, every dish perfectly balances traditional spices with fresh, local herbs.",
        accent: "bg-teak-100 text-teak-700"
      }
    ],
    gallery: [
      { label: "Morning Market", gradient: "from-jade-600/80 via-teak-400/80 to-lacquer-500/80" },
      { label: "Signature Broth", gradient: "from-lacquer-600/80 via-teak-500/80 to-jade-500/80" },
      { label: "Tea Leaf Ritual", gradient: "from-teak-600/80 via-jade-400/80 to-lacquer-400/80" }
    ],
    experienceTag: "Moments & Memories",
    experienceTitle: "",
    experienceBody:
      "From the steam of our morning broth station to the laughter around our family tables, witness the authentic flavors and cherished moments that define our Taungoo kitchen.",
    galleryItems: [
      {
        title: "Kitchen Rhythm",
        caption: "Early-morning broth prep and spice toasting.",
        image: "/gallery/memory-1.jpeg"
      },
      {
        title: "Dining Tables",
        caption: "Warm wood, soft lighting, and shared meals.",
        image: "/gallery/memory-2.jpeg"
      },
      {
        title: "Chef Plating",
        caption: "Signature bowls finished with fresh herbs.",
        image: "/gallery/memory-3.jpeg"
      },
      {
        title: "Tea Leaf Ritual",
        caption: "A Taungoo favorite, prepared tableside.",
        image: "/gallery/memory-4.jpeg"
      }
    ],
    reservationTag: "Reservation",
    reservationTitle: "Reserve by phone today.",
    reservationBody:
      "For now, reservations are confirmed by phone. Call us and we will confirm in minutes. Walk-ins are welcome for small groups.",
    callLabel: "Call for booking",
    callCta: "Call Now",
    formTag: "Sample form",
    formTitle: "Quick Reservation Request",
    formPlaceholders: {
      name: "Full name",
      date: "Date",
      time: "Time",
      guests: "Guests",
      phone: "Phone number",
      note: "Notes (optional)"
    },
    formSubmit: "Submit Request",
    formHint: "This is a sample form only. Calls are confirmed immediately.",
    footerTitle: "Taungoo Mohinga",
    footerBody: "Traditional flavors. Contemporary experience. Visit us in Taungoo for authentic Myanmar comfort food.",
    contactLabel: "Contact",
    addressLabel: "Address",
    addressValue: "North Dagon, Yangon",
    addressLine2: "Near Yazaa Dirit Road",
    mapTag: "Location",
    mapTitle: "Find us in Yangon",
    mapBody: "Tap the map for directions to KHIN LAY.",
    mapLinkLabel: "Open in Google Maps"
  }
};

export default function App() {
  const [lang, setLang] = React.useState("my");
  const t = content[lang];
  const [galleryIndex, setGalleryIndex] = React.useState(0);

  React.useEffect(() => {
    const cleanup = setupScrollReveal(document);
    return cleanup;
  }, [lang]);

  React.useEffect(() => {
    if (!t.galleryItems?.length) return undefined;
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % t.galleryItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [t.galleryItems?.length]);

  return (
    <div className="min-h-screen bg-teak-50">
      <header className="hero-bg hero-scene min-h-screen relative overflow-hidden bg-hero-pattern bg-cream-texture">
        <div className="section-pad grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="tag reveal">{t.tag}</span>
              <div className="reveal-soft flex items-center gap-2 rounded-full border border-teak-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teak-600">
                <span className="text-[0.6rem] text-teak-500">{t.languageLabel}</span>
                <button
                  type="button"
                  onClick={() => setLang("my")}
                  className={`rounded-full px-3 py-1 ${
                    lang === "my" ? "bg-lacquer-500 text-white" : "text-teak-600"
                  }`}
                >
                  MY
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-full px-3 py-1 ${
                    lang === "en" ? "bg-lacquer-500 text-white" : "text-teak-600"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            <div className="space-y-5">
              <div className="reveal hero-stagger flex items-center gap-4" style={{ "--delay": "0.05s" }}>
                <img
                  src="/logo/khin-lay.jpeg"
                  alt="KHIN LAY"
                  className="icon-hover h-12 w-12 rounded-full border border-white/70 object-cover shadow-soft sm:h-14 sm:w-14"
                />
                <p className="text-sm mb-3 font-semibold uppercase tracking-[0.3em] text-teak-500">
                  KHIN LAY
                </p>
              </div>
              <h1
                className="hero-title reveal hero-stagger text-center font-myanmar text-[2.3rem] leading-[1.08] text-teak-900 sm:text-left sm:text-[3.2rem] lg:text-[4.2rem]"
                style={{ "--delay": "0.12s" }}
              >
                {t.heroTitle}
                <span className="hero-subtitle mt-4 block font-myanmar text-lg text-lacquer-600 sm:mt-6 sm:text-2xl">
                  {t.heroSubtitle}
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
              <div className="hero-bowl product-float">
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

      <section id="story" className="section-pad bg-sand-texture">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-6 text-center reveal sm:text-left">
            <p className="tag">{t.storyTag}</p>
            <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">{t.storyTitle}</h2>
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
                className={`reveal relative flex min-h-[220px] items-end overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} p-6 text-white shadow-soft`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.2),transparent)]" />
                <p className="relative text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="section-pad bg-cream-texture">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-center reveal sm:text-left">
            <p className="tag">{t.mapTag}</p>
            <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">{t.mapTitle}</h2>
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
          <div className="reveal overflow-hidden rounded-3xl border border-teak-200 bg-white/80 shadow-soft">
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

      <MenuSection lang={lang} />

      <section id="gallery" className="section-pad bg-sand-texture">
        <div className="mx-auto max-w-2xl text-center reveal">
          <p className="tag font-display text-xl uppercase tracking-[0.35em] sm:text-2xl">
            {t.experienceTag}
          </p>
          {t.experienceTitle ? (
            <h2 className="mt-6 font-display text-3xl text-teak-900 sm:text-4xl">
              {t.experienceTitle}
            </h2>
          ) : null}
          <p className="mt-4 text-teak-700">{t.experienceBody}</p>
        </div>
        <div className="mt-10">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-teak-200 bg-white shadow-soft reveal">
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teak-950/70 via-teak-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {t.experienceTag}
                    </p>
                    <h3 className="mt-3 font-display text-3xl">{item.title}</h3>
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

      <section id="reservation" className="section-pad bg-cream-texture">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-center sm:text-left">
            <p className="tag">{t.reservationTag}</p>
            <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">
              {t.reservationTitle}
            </h2>
            <p className="max-w-xl text-teak-700">{t.reservationBody}</p>
            <div className="glass p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-teak-500">{t.callLabel}</p>
              <p className="mt-4 font-display text-3xl text-teak-900">+95 9 123 456 789</p>
              <p className="mt-2 text-sm text-teak-600">{t.hoursValue}</p>
              <a
                href="tel:+959123456789"
                className="mt-6 inline-flex w-full justify-center rounded-full bg-lacquer-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:-translate-y-0.5 sm:w-auto"
              >
                {t.callCta}
              </a>
            </div>
          </div>
          <div className="glass p-6 sm:p-8 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-teak-500">{t.formTag}</p>
            <h3 className="mt-4 font-display text-2xl text-teak-900">{t.formTitle}</h3>
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

      <footer className="section-pad bg-teak-900 text-teak-100">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 reveal">
            <div className="flex items-center gap-3">
              <img
                src="/logo/khin-lay.jpeg"
                alt="KHIN LAY"
                className="icon-hover h-10 w-10 rounded-full border border-teak-700 object-cover"
              />
              <p className="text-sm uppercase tracking-[0.3em] text-teak-300">KHIN LAY</p>
            </div>
            <h3 className="font-display text-3xl text-white">{t.footerTitle}</h3>
            <p className="text-sm text-teak-200">{t.footerBody}</p>
          </div>
          <div className="grid gap-4 text-sm text-teak-200 sm:grid-cols-2 reveal">
            <div>
              <p className="font-semibold text-white">{t.contactLabel}</p>
              <p>+95 9 123 456 789</p>
              <p>hello@khinlay.mm</p>
            </div>
            <div>
              <p className="font-semibold text-white">{t.addressLabel}</p>
              <p>{t.addressValue}</p>
              <p>{t.addressLine2}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
