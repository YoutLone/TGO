import React from "react";

const menuItems = [
  {
    name: { my: "တောင်ငူ မုန့်ဟင်းခါး (မုံဟင်းခါး)", en: "Taungoo Mohinga" },
    price: { my: "4,500 ကျပ်", en: "4,500 MMK" },
    description: {
      my: "ငါးရည်အရသာနက်နက်ကို ချည်မျှင်ဆန်နွယ်နဲ့ချက်ပြီး ကြော်ဖက်၊ ပင်စည်ငှက်ပျော၊ သံပုရာနဲ့ သစ်သီးအရသာပေးထားပါတယ်။",
      en: "Slow-simmered fish broth with rice noodles, crispy fritters, banana stem, and lime."
    },
    rating: 4.9,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "noodles",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Myanmar%E2%80%99s_Traditional_Food_-_Mohinga.jpg",
    gradient: "from-lacquer-500/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "ရှမ်းတိုဖူး သုပ်", en: "Shan Tofu Salad" },
    price: { my: "3,200 ကျပ်", en: "3,200 MMK" },
    description: {
      my: "ပဲသားဖြစ်တဲ့ တိုဖူးကို ကြက်သွန်ဆီ၊ မြေပဲကြော်နဲ့ စိမ့်သီးအရသာနဲ့ သုပ်ထားပါတယ်။",
      en: "Soft chickpea tofu with garlic oil, roasted peanuts, and bright citrus dressing."
    },
    rating: 4.7,
    spice: { my: "မစပ်", en: "Mild" },
    categoryKey: "salads",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ToFu_Salad.jpg",
    gradient: "from-jade-500/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "တောင်ငူ ကြက်အုန်းနို့ဟင်း", en: "Coconut Chicken Curry" },
    price: { my: "6,800 ကျပ်", en: "6,800 MMK" },
    description: {
      my: "ကြက်သားကို အုန်းနို့၊ အစိမ်းပင်ဆီလိပ်၊ မီးအုံကြော်မြည်နဲ့ နည်းနည်းချင်းပြုတ်ထားပါတယ်။",
      en: "Free-range chicken braised in coconut milk with lemongrass and toasted shallots."
    },
    rating: 4.8,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "curries",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Coconut_Chicken_Curry.jpg",
    gradient: "from-teak-600/70 via-lacquer-500/70 to-jade-600/70"
  },
  {
    name: { my: "လက်ဖက်သုပ်နဲ့ ခရမ်းချဉ်သီး", en: "Tea Leaf & Tomato Relish" },
    price: { my: "2,900 ကျပ်", en: "2,900 MMK" },
    description: {
      my: "လက်ဖက်ကို ခရမ်းချဉ်သီး၊ နှမ်း၊ ပဲကြော်နဲ့ သုပ်ထားပြီး အရသာချဉ်မွှေးစေပါတယ်။",
      en: "Fermented tea leaves with tomatoes, sesame, and crunchy beans."
    },
    rating: 4.6,
    spice: { my: "အနည်းငယ်", en: "Low" },
    categoryKey: "salads",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Laphet_thoke.JPG",
    gradient: "from-jade-600/70 via-teak-500/70 to-lacquer-500/70"
  },
  {
    name: { my: "ပုစွန်ဟင်း တောင်ငူပုံစံ", en: "Taungoo River Prawn Curry" },
    price: { my: "7,500 ကျပ်", en: "7,500 MMK" },
    description: {
      my: "ပုစွန်ကို သံပုရာရည်၊ ကြက်သွန်မြီးချဉ်နဲ့ နံနံပင်အရသာနဲ့ ချက်ထားပါတယ်။",
      en: "Tamarind prawn curry with pickled garlic and fragrant basil."
    },
    rating: 4.8,
    spice: { my: "စပ်", en: "Hot" },
    categoryKey: "curries",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Goan_prawn_curry.jpg",
    gradient: "from-lacquer-600/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "တမာရင် အငွေ့ဆန် set", en: "Golden Tamarind Rice Set" },
    price: { my: "5,200 ကျပ်", en: "5,200 MMK" },
    description: {
      my: "အနူးညံ့တဲ့ ဆန်ထမင်းကို တမာရင်ရည်၊ ကြက်သွန်ကြော်နဲ့ ရာသီဟင်းသီးဟင်းရွက်နဲ့ ပေါင်းစပ်ထားပါတယ်။",
      en: "Steamed rice with tamarind glaze, fried onions, and seasonal vegetables."
    },
    rating: 4.5,
    spice: { my: "မစပ်", en: "Mild" },
    categoryKey: "rice",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Puliyogare_Or_Tamarind_Rice.jpg",
    gradient: "from-teak-500/70 via-jade-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "ကိုကာကော်လာ", en: "Coca-Cola" },
    price: { my: "1,200 ကျပ်", en: "1,200 MMK" },
    description: {
      my: "အေးမြလန်းဆန်းစေတဲ့ ကာဗွန်ပေါင်းစပ်အချိုရည်။",
      en: "Chilled sparkling soft drink."
    },
    rating: 4.6,
    spice: { my: "အေး", en: "Cold" },
    categoryKey: "drinks",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Coca-Cola_can_355mL_2015.png",
    gradient: "from-lacquer-600/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "စပရိုက်", en: "Sprite" },
    price: { my: "1,200 ကျပ်", en: "1,200 MMK" },
    description: {
      my: "လီမွန်ရောထွေးထားတဲ့ အေးမြအရသာ။",
      en: "Lemon-lime flavored sparkling drink."
    },
    rating: 4.5,
    spice: { my: "အေး", en: "Cold" },
    categoryKey: "drinks",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sprite_2019_can.jpg",
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "ဖန်တား", en: "Fanta" },
    price: { my: "1,200 ကျပ်", en: "1,200 MMK" },
    description: {
      my: "အလွတ်သောက်ကောင်းတဲ့ သောက်စရာချိုချို။",
      en: "Bright, fruity sparkling drink."
    },
    rating: 4.4,
    spice: { my: "အေး", en: "Cold" },
    categoryKey: "drinks",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fanta_Orange_2018.jpg",
    gradient: "from-teak-600/70 via-lacquer-500/70 to-jade-600/70"
  }
];

const filterLabels = {
  my: {
    all: "အားလုံး",
    noodles: "ခေါက်ဆွဲ",
    salads: "သုပ်မျိုးစုံ",
    curries: "ဟင်းမျိုးစုံ",
    rice: "ထမင်း",
    drinks: "အချိုရည်"
  },
  en: {
    all: "All",
    noodles: "Noodles",
    salads: "Salads",
    curries: "Curries",
    rice: "Rice",
    drinks: "Drinks"
  }
};

const copy = {
  my: {
    tag: "အထူးမီနူး",
    title: "တောင်ငူအရသာကို နေ့စဉ်ရွေးချယ်။",
    body: "အရသာကို အလွှာလိုက် ချိန်ညှိပြီး ခေတ်မီတင်ဆက်ထားတဲ့ ဟင်းတစ်ပွဲချင်းစီ။",
    pdf: "မီနူး PDF အပြည့်အစုံ",
    category: "အမျိုးအစား",
    chef: "ချက်ပြုတ်သူအကြံပြုချက်"
  },
  en: {
    tag: "Signature Menu",
    title: "Taungoo flavors, curated daily.",
    body: "Each dish is crafted with layered aromatics, balanced heat, and modern presentation.",
    pdf: "Full Menu PDF",
    category: "Category",
    chef: "Chef’s pick"
  }
};

export default function MenuSection({ lang = "my" }) {
  const labels = filterLabels[lang] ?? filterLabels.my;
  const t = copy[lang] ?? copy.my;
  const filters = [
    { key: "all", label: labels.all },
    { key: "noodles", label: labels.noodles },
    { key: "salads", label: labels.salads },
    { key: "curries", label: labels.curries },
    { key: "rice", label: labels.rice },
    { key: "drinks", label: labels.drinks }
  ];

  const [activeFilter, setActiveFilter] = React.useState("all");
  const visibleMenu =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.categoryKey === activeFilter);

  return (
    <section id="menu" className="section-pad bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="tag">{t.tag}</p>
            <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">{t.title}</h2>
            <p className="max-w-xl text-teak-700">{t.body}</p>
          </div>
          <button className="w-full rounded-full border border-teak-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-teak-700 transition hover:-translate-y-0.5 sm:w-auto">
            {t.pdf}
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`w-full rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition sm:w-auto ${
                activeFilter === filter.key
                  ? "border-lacquer-400 bg-lacquer-500 text-white shadow-glow"
                  : "border-teak-200 bg-white/70 text-teak-600 hover:-translate-y-0.5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleMenu.map((item) => (
            <article key={`${item.name[lang]}-${item.price[lang]}`} className="menu-card">
              <div className="relative h-44 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name[lang]}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-multiply`}
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="badge">{item.spice[lang]}</span>
                  <span className="rating">{item.rating} ★</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-teak-900">{item.name[lang]}</h3>
                  <span className="text-sm font-semibold text-lacquer-600">{item.price[lang]}</span>
                </div>
                <p className="text-sm text-teak-600">{item.description[lang]}</p>
                <div className="flex items-center justify-between text-xs text-teak-500">
                  <span>
                    {t.category}: {labels[item.categoryKey]}
                  </span>
                  <span>{t.chef}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
