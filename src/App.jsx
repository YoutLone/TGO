import React from "react";

const menuItems = [
  {
    name: "တောင်ငူ မုန့်ဟင်းခါး (မုံဟင်းခါး)",
    price: "4,500 ကျပ်",
    description:
      "ငါးရည်အရသာနက်နက်ကို ချည်မျှင်ဆန်နွယ်နဲ့ချက်ပြီး ကြော်ဖက်၊ ပင်စည်ငှက်ပျော၊ သံပုရာနဲ့ သစ်သီးအရသာပေးထားပါတယ်။",
    rating: 4.9,
    spice: "အလယ်အလတ်",
    category: "ခေါက်ဆွဲ",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Myanmar%E2%80%99s_Traditional_Food_-_Mohinga.jpg",
    gradient: "from-lacquer-500/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: "ရှမ်းတိုဖူး သုပ်",
    price: "3,200 ကျပ်",
    description:
      "ပဲသားဖြစ်တဲ့ တိုဖူးကို ကြက်သွန်ဆီ၊ မြေပဲကြော်နဲ့ စိမ့်သီးအရသာနဲ့ သုပ်ထားပါတယ်။",
    rating: 4.7,
    spice: "မစပ်",
    category: "သုပ်မျိုးစုံ",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/ToFu_Salad.jpg",
    gradient: "from-jade-500/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: "တောင်ငူ ကြက်အုန်းနို့ဟင်း",
    price: "6,800 ကျပ်",
    description:
      "ကြက်သားကို အုန်းနို့၊ အစိမ်းပင်ဆီလိပ်၊ မီးအုံကြော်မြည်နဲ့ နည်းနည်းချင်းပြုတ်ထားပါတယ်။",
    rating: 4.8,
    spice: "အလယ်အလတ်",
    category: "ဟင်းမျိုးစုံ",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Coconut_Chicken_Curry.jpg",
    gradient: "from-teak-600/70 via-lacquer-500/70 to-jade-600/70"
  },
  {
    name: "လက်ဖက်သုပ်နဲ့ ခရမ်းချဉ်သီး",
    price: "2,900 ကျပ်",
    description:
      "လက်ဖက်ကို ခရမ်းချဉ်သီး၊ နှမ်း၊ ပဲကြော်နဲ့ သုပ်ထားပြီး အရသာချဉ်မွှေးစေပါတယ်။",
    rating: 4.6,
    spice: "အနည်းငယ်",
    category: "သုပ်မျိုးစုံ",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Laphet_thoke.JPG",
    gradient: "from-jade-600/70 via-teak-500/70 to-lacquer-500/70"
  },
  {
    name: "ပုစွန်ဟင်း တောင်ငူပုံစံ",
    price: "7,500 ကျပ်",
    description:
      "ပုစွန်ကို သံပုရာရည်၊ ကြက်သွန်မြီးချဉ်နဲ့ နံနံပင်အရသာနဲ့ ချက်ထားပါတယ်။",
    rating: 4.8,
    spice: "စပ်",
    category: "ဟင်းမျိုးစုံ",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Goan_prawn_curry.jpg",
    gradient: "from-lacquer-600/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: "တမာရင် အငွေ့ဆန် set",
    price: "5,200 ကျပ်",
    description:
      "အနူးညံ့တဲ့ ဆန်ထမင်းကို တမာရင်ရည်၊ ကြက်သွန်ကြော်နဲ့ ရာသီဟင်းသီးဟင်းရွက်နဲ့ ပေါင်းစပ်ထားပါတယ်။",
    rating: 4.5,
    spice: "မစပ်",
    category: "ထမင်း",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Puliyogare_Or_Tamarind_Rice.jpg",
    gradient: "from-teak-500/70 via-jade-400/70 to-lacquer-400/70"
  }
];

const highlights = [
  {
    title: "တောင်ငူအမွေအနှစ်",
    text: "တောင်ငူနဲ့ ဗဂိုအရသာကို အိမ်သမားလက်နဲ့ ဆက်ခံလာတဲ့ ပုံစံအတိုင်း ချက်ပြုတ်ထားပါတယ်။",
    accent: "bg-lacquer-100 text-lacquer-700"
  },
  {
    title: "မနက်ချိန်အရသာ",
    text: "မနက်ခင်းကတည်းက ငါးအရိုး၊ အစိမ်းပင်ဆီလိပ်၊ အမွှေးအကြိုင်နဲ့ တဖြည်းဖြည်းချက်ထားပါတယ်။",
    accent: "bg-jade-100 text-jade-700"
  },
  {
    title: "အပူချိန်ကိုလိုက်ဖက်",
    text: "နူးညံ့တဲ့အပူကနေ စပ်ပြင်းတဲ့အပူအထိ သင့်တော်အောင်ညှိပေးထားပါတယ်။",
    accent: "bg-teak-100 text-teak-700"
  }
];

const gallery = [
  {
    label: "မနက်စျေးကွက်",
    gradient: "from-jade-600/80 via-teak-400/80 to-lacquer-500/80"
  },
  {
    label: "ဟင်းရည်အမှတ်တရ",
    gradient: "from-lacquer-600/80 via-teak-500/80 to-jade-500/80"
  },
  {
    label: "လက်ဖက်အခမ်းအနား",
    gradient: "from-teak-600/80 via-jade-400/80 to-lacquer-400/80"
  }
];

const filters = ["အားလုံး", "ခေါက်ဆွဲ", "သုပ်မျိုးစုံ", "ဟင်းမျိုးစုံ", "ထမင်း"];

export default function App() {
  const [activeFilter, setActiveFilter] = React.useState("အားလုံး");
  const visibleMenu =
    activeFilter === "အားလုံး"
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-teak-50">
      <header className="hero-bg relative overflow-hidden bg-hero-pattern">
        <div className="section-pad grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="tag">တောင်ငူမြို့ • မြန်မာရိုးရာအစားအစာ</span>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="/logo/khin-lay.jpeg"
                  alt="KHIN LAY"
                  className="h-14 w-14 rounded-full border border-white/70 object-cover shadow-soft"
                />
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teak-500">
                  KHIN LAY
                </p>
              </div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-teak-900 sm:text-5xl lg:text-6xl">
                တောင်ငူ မုန့်ဟင်းခါး
                <span className="block text-2xl mt-7 text-lacquer-500">"ခေတ်သစ်စားသုံးသူတို့ရဲ့ အကြိုက်နဲ့အညီ အထူးစီမံဖန်တီးထားပါသည်"</span>
              </h1>
              <p className="max-w-xl text-lg text-teak-700">
                "တောင်ငူမြို့ရဲ့ နံနက်ခင်းဈေးတွေကနေ အစပြုလို့... လတ်ဆတ်တဲ့ ဆေးဘက်ဝင်အပင်နံ့သင်းသင်း၊ အချိန်အကြာကြီး တည်ထားတဲ့ ဟင်းရည်ချိုချိုနဲ့ ရိုးရာကို ခေတ်ပေါ်ဟန် ရောယှက်ထားတဲ့ မြန်မာ့အရသာ စစ်စစ်များ"
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-lacquer-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:-translate-y-0.5">
                စားပွဲခုံကြိုတင်ချိန်း
              </button>
              <a
                href="#menu"
                className="rounded-full border border-teak-300 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-teak-700 transition hover:-translate-y-0.5"
              >
                မီနူးကြည့်ရန်
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-teak-600">
              <div>
                <p className="font-semibold text-teak-800">ဆိုင်ဖွင့်ချိန်</p>
                <p>မနက် 6:30 – ည 9:30</p>
              </div>
              <div>
                <p className="font-semibold text-teak-800">တည်နေရာ</p>
                <p>တောင်ငူမြို့ အလယ်ပိုင်း</p>
              </div>
              <div>
                <p className="font-semibold text-teak-800">ပို့ဆောင်မှု</p>
                <p>၅ ကီလိုမီတာအတွင်း ရရှိနိုင်</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-12 -top-16 h-40 w-40 rounded-full bg-lacquer-200/70 blur-3xl" />
            <div className="absolute -bottom-10 -right-16 h-48 w-48 rounded-full bg-jade-200/70 blur-3xl" />
            <div className="glass relative grid gap-6 p-6 sm:p-8">
              <div className="rounded-2xl bg-gradient-to-br from-lacquer-500/80 via-teak-500/80 to-jade-500/80 p-8 text-white shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em]">အထူးမီနူး</p>
                <h2 className="mt-4 font-display text-2xl">မုန့်ဟင်းခါး ပန်းကန်</h2>
                <p className="mt-3 text-sm text-white/80">
                  ငါးရည်ကို အချိန်ကြာကြာချက်ပြီး ကြော်ဖက်၊ အစိမ်းရနံ့နဲ့ အနူးညံ့အရသာ။
                </p>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold">
                  <span>4,500 ကျပ်</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">4.9 ★</span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/70 bg-white/80 p-4 text-sm text-teak-700"
                  >
                    <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.accent}`}>
                      {item.title}
                    </p>
                    <p className="mt-3">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="story" className="section-pad">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-6">
            <p className="tag">ကျွန်ုပ်တို့အကြောင်း</p>
            <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">
              တောင်ငူအရသာကို ခေတ်မီပုံစံနဲ့။
            </h2>
            <p className="text-teak-700">
              KHIN LAY က တောင်ငူမနက်စာယဉ်ကျေးမှုကို အခြေခံပြီး မုန့်ဟင်းခါး၊ လက်ဖက်သုပ်
              စတဲ့ အရသာတွေကို ခေတ်မီစားသောက်မှုနဲ့ ပေါင်းစပ်ထားပါတယ်။
            </p>
            <div className="glass p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-teak-500">ချက်ပြုတ်သူမှတ်စု</p>
              <p className="mt-4 text-lg font-semibold text-teak-900">
                “ပန်းကန်တိုင်းမှာ အမွှေးအကြိုင်တွေ၊ အပူညှိမှုနဲ့ အိမ်အရသာကို ထည့်ထားပါတယ်။”
              </p>
              <p className="mt-2 text-sm text-teak-600">Chef Hnin, တောင်ငူ</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item.label}
                className={`relative flex min-h-[220px] items-end overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} p-6 text-white shadow-soft`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.2),transparent)]" />
                <p className="relative text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="section-pad bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="tag">အထူးမီနူး</p>
              <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">
                တောင်ငူအရသာကို နေ့စဉ်ရွေးချယ်။
              </h2>
              <p className="max-w-xl text-teak-700">
                အရသာကို အလွှာလိုက် ချိန်ညှိပြီး ခေတ်မီတင်ဆက်ထားတဲ့ ဟင်းတစ်ပွဲချင်းစီ။
              </p>
            </div>
            <button className="rounded-full border border-teak-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-teak-700 transition hover:-translate-y-0.5">
              မီနူး PDF အပြည့်အစုံ
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  activeFilter === filter
                    ? "border-lacquer-400 bg-lacquer-500 text-white shadow-glow"
                    : "border-teak-200 bg-white/70 text-teak-600 hover:-translate-y-0.5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleMenu.map((item) => (
              <article key={item.name} className="menu-card">
                <div className="relative h-44 overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} mix-blend-multiply`}
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="badge">{item.spice}</span>
                    <span className="rating">{item.rating} ★</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-teak-900">{item.name}</h3>
                    <span className="text-sm font-semibold text-lacquer-600">{item.price}</span>
                  </div>
                  <p className="text-sm text-teak-600">{item.description}</p>
                  <div className="flex items-center justify-between text-xs text-teak-500">
                    <span>အမျိုးအစား: {item.category}</span>
                    <span>ချက်ပြုတ်သူအကြံပြုချက်</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-pad">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass p-8">
            <p className="tag">စားသောက်မှုအတွေ့အကြုံ</p>
            <h2 className="mt-6 font-display text-3xl text-teak-900 sm:text-4xl">
              ရိုးရာနဲ့ခေတ်မီအလှဆင်။
            </h2>
            <p className="mt-4 text-teak-700">
              အလင်းရောင်နူးညံ့မှု၊ လက်ကာအလှဆင်မှုနဲ့ ဟင်းရည်ချက်နေရာဖွင့်ထားတဲ့
              စားသောက်ခန်းက တောင်ငူရဲ့ အရသာကို တိုက်ရိုက်ခံစားနိုင်ပါတယ်။
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["ဟင်းရည်ချက်နေရာ", "လက်ဖက်ဘား", "မိသားစုအခန်း"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-teak-200 bg-white/80 p-4 text-sm font-semibold text-teak-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-teak-200 bg-white/90 p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-teak-500">ယနေ့အဆင့်သတ်မှတ်</p>
              <p className="mt-4 font-display text-4xl text-teak-900">4.8</p>
              <p className="text-sm text-teak-600">အသိုင်းအဝိုင်းအဆင့်သတ်မှတ်မှု 1,240 ခုပေါ်မူတည်</p>
              <div className="mt-6 space-y-3 text-sm text-teak-600">
                <div className="flex items-center justify-between">
                  <span>ဟင်းရည်အနံ့အရသာ</span>
                  <span>98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>အနံ့ညှိမှု</span>
                  <span>96%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>ဝန်ဆောင်မှု</span>
                  <span>95%</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-teak-600 via-lacquer-500 to-jade-600 p-6 text-white shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em]">အပတ်စဉ်အထူး</p>
              <h3 className="mt-4 font-display text-2xl">တောင်ငူအမွေအနှစ်ပွဲ</h3>
              <p className="mt-3 text-sm text-white/80">
                မုန့်ဟင်းခါး၊ လက်ဖက်သုပ်၊ ကြက်အုန်းနို့ဟင်း — ညွှန်ပြချက်သင်္ကန်ခြောက်ဖက်နဲ့။
              </p>
              <button className="mt-6 rounded-full bg-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wide">
                ကြိုတင်မှာယူရန်
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="section-pad bg-paper">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="tag">ကြိုတင်ချိန်းဆိုမှု</p>
            <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">
              ဖုန်းခေါ်ပြီး ကြိုတင်ချိန်းနိုင်ပါသည်။
            </h2>
            <p className="max-w-xl text-teak-700">
              ယခုအချိန်မှာ ဖုန်းနဲ့သာ ကြိုတင်ချိန်းနိုင်ပါတယ်။ ဖုန်းခေါ်လိုက်တာနဲ့ အချိန်တိုအတွင်း အတည်ပြုပါမယ်။
              လူနည်းအုပ်စုများအတွက် လက်ရှိအချိန်လာရောက်လည်း အဆင်ပြေပါတယ်။
            </p>
            <div className="glass p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-teak-500">ဖုန်းခေါ်ရန်</p>
              <p className="mt-4 font-display text-3xl text-teak-900">+95 9 123 456 789</p>
              <p className="mt-2 text-sm text-teak-600">နေ့စဉ် မနက် 6:30 – ည 9:30</p>
              <a
                href="tel:+959123456789"
                className="mt-6 inline-flex rounded-full bg-lacquer-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition hover:-translate-y-0.5"
              >
                ယခုဖုန်းခေါ်ရန်
              </a>
            </div>
          </div>
          <div className="glass p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-teak-500">နမူနာဖောင်</p>
            <h3 className="mt-4 font-display text-2xl text-teak-900">အလွယ်တကူ ကြိုတင်ဖောင်</h3>
            <form className="mt-6 grid gap-4 text-sm text-teak-700">
              <input
                className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                placeholder="အမည် အပြည့်အစုံ"
                type="text"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                  placeholder="နေ့ရက်"
                  type="date"
                />
                <input
                  className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                  placeholder="အချိန်"
                  type="time"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                  placeholder="လူအရေအတွက်"
                  type="number"
                  min="1"
                  max="20"
                />
                <input
                  className="rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                  placeholder="ဖုန်းနံပါတ်"
                  type="tel"
                />
              </div>
              <textarea
                className="min-h-[120px] rounded-2xl border border-teak-200 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lacquer-300"
                placeholder="မှတ်ချက် (မလိုအပ်ပါက ကျန်ထားနိုင်)"
              />
              <button
                type="button"
                className="rounded-full border border-teak-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-teak-700 transition hover:-translate-y-0.5"
              >
                တင်သွင်းရန်
              </button>
              <p className="text-xs text-teak-500">
                ဤဖောင်သည် နမူနာသာ ဖြစ်သည်။ ဖုန်းဖြင့်သာ အတည်ပြုနိုင်ပါသည်။
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="section-pad bg-teak-900 text-teak-100">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo/khin-lay.jpeg"
                alt="KHIN LAY"
                className="h-10 w-10 rounded-full border border-teak-700 object-cover"
              />
              <p className="text-sm uppercase tracking-[0.3em] text-teak-300">KHIN LAY</p>
            </div>
            <h3 className="font-display text-3xl text-white">တောင်ငူ မုန့်ဟင်းခါး</h3>
            <p className="text-sm text-teak-200">
              ရိုးရာအရသာ၊ ခေတ်မီအတွေ့အကြုံ။ တောင်ငူမြို့မှာ အစစ်အမှန် မြန်မာအရသာကိုခံစားပါ။
            </p>
            <p className="text-xs text-teak-400">
              မူရင်းနောက်ခံဓာတ်ပုံ: Taungoo city (Wikimedia Commons)
            </p>
          </div>
          <div className="grid gap-4 text-sm text-teak-200 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white">ဆက်သွယ်ရန်</p>
              <p>+95 9 123 456 789</p>
              <p>hello@khinlay.mm</p>
            </div>
            <div>
              <p className="font-semibold text-white">လိပ်စာ</p>
              <p>တောင်ငူမြို့ အလယ်ပိုင်း၊ ဗဂိုတိုင်း</p>
              <p>ရတနာပုံလမ်းအနီး</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
