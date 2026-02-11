import React from "react";
import { setupScrollReveal } from "../utils/scrollReveal.js";

const drinkPlaceholder =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%23f2e7d6'/><stop offset='1' stop-color='%23d9c3a2'/></linearGradient></defs><rect width='800' height='600' fill='url(%23g)'/><g fill='%239b7446' fill-opacity='0.35'><circle cx='180' cy='160' r='56'/><circle cx='520' cy='220' r='72'/><circle cx='360' cy='420' r='64'/></g><text x='50%' y='52%' text-anchor='middle' font-family='sans-serif' font-size='32' fill='%237f5c35' opacity='0.7'>Drink Photo</text></svg>";

const menuItems = [
  {
    name: { my: "တောင်ငူမုန့်ဟင်းခါးအရည် (အလွတ်)", en: "Taungoo Mohinga Soup (Plain)" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "ငရုတ်ကောင်းနံ့သင်းပြီး ငါးအနှစ်အရသာ濃သော တောင်ငူစတိုင် မုန့်ဟင်းခါးအရည်ဖြစ်ပါသည်။",
      en: "Authentic Taungoo-style rice noodle soup with a rich, peppery fish broth."
    },
    rating: 4.8,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "mohinga",
    image: drinkPlaceholder,
    gradient: "from-lacquer-500/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "တောင်ငူမုန့်ဟင်းခါးအရည် (အကြော်ပါ)", en: "Taungoo Mohinga Soup (With Fritters)" },
    price: { my: "3,000 ကျပ်", en: "3,000 MMK" },
    description: {
      my: "တောင်ငူမုန့်ဟင်းခါးအရည်ကို ကြွပ်ရွသော အကြော်စုံဖြင့် တွဲဖက်သုံးဆောင်နိုင်ပါသည်။",
      en: "Our signature fish soup served with crispy, golden assorted fritters."
    },
    rating: 4.8,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "mohinga",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "တောင်ငူမုန့်ဟင်းခါးအသုပ် (အလွတ်)", en: "Taungoo Mohinga Salad (Plain)" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "မုန့်ဖတ်ကို မုန့်ဟင်းခါးအနှစ်၊ အမွှေးအကြိုင်တို့ဖြင့် အရသာရှိစွာ နယ်ဖတ်ထားသော အသုပ်ဖြစ်ပါသည်။",
      en: "Rice noodles hand-tossed with savory fish gravy and traditional spices."
    },
    rating: 4.7,
    spice: { my: "မစပ်", en: "Mild" },
    categoryKey: "mohinga",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-lacquer-500/70 to-jade-600/70"
  },
  {
    name: { my: "တောင်ငူမုန့်ဟင်းခါးအသုပ် (အကြော်ပါ)", en: "Taungoo Mohinga Salad (With Fritters)" },
    price: { my: "3,000 ကျပ်", en: "3,000 MMK" },
    description: {
      my: "အရသာရှိသော မုန့်ဟင်းခါးအသုပ်ကို အကြော်ကြွပ်ကြွပ်လေးများထည့်၍ အားရပါးရ သုံးဆောင်နိုင်ပါသည်။",
      en: "A flavorful noodle salad topped with crunchy fritters for the perfect texture."
    },
    rating: 4.7,
    spice: { my: "မစပ်", en: "Mild" },
    categoryKey: "mohinga",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-500/70 to-lacquer-500/70"
  },
  {
    name: { my: "ထမင်းသုပ် (အလွတ်)", en: "Rice Salad (Plain)" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "ထမင်းဖြူကို ဆီချက်၊ ပဲမှုန့်၊ ငရုတ်သီးတို့ဖြင့် အရသာရှိစွာ နယ်ဖတ်ထားသော ထမင်းသုပ်ဖြစ်ပါသည်။",
      en: "Steamed rice hand-mixed with chili oil, roasted bean powder, and garlic for a savory taste."
    },
    rating: 4.6,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "rice",
    image: drinkPlaceholder,
    gradient: "from-teak-500/70 via-jade-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "ထမင်းသုပ် (ကြက်ဥကြော်ပါ)", en: "Rice Salad (With Fried Egg)" },
    price: { my: "3,500 ကျပ်", en: "3,500 MMK" },
    description: {
      my: "အရသာရှိသော ထမင်းသုပ်ကို အားဖြည့်ပေးမည့် ကြက်ဥကြော်ပူပူလေးနှင့် တွဲဖက်ထားပါသည်။",
      en: "Our classic rice salad served with a perfectly cooked golden fried egg."
    },
    rating: 4.6,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "rice",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "လက်ဖက်ထမင်း (အလွတ်)", en: "Tea Leaf Rice (Plain)" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "လက်ဖက်နှပ်၏ ရနံ့သင်းပျံ့သော အရသာကို အကြော်စုံဖြင့် တွဲဖက်နယ်ထားသည့် ထမင်းသုပ်ဖြစ်ပါသည်။",
      en: "Fragrant rice mixed with premium fermented tea leaves and crunchy beans."
    },
    rating: 4.6,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "rice",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-lacquer-500/70 to-jade-500/70"
  },
  {
    name: { my: "လက်ဖက်ထမင်း (ကြက်ဥကြော်ပါ)", en: "Tea Leaf Rice (With Fried Egg)" },
    price: { my: "3,500 ကျပ်", en: "3,500 MMK" },
    description: {
      my: "လက်ဖက်ထမင်း၏ အရသာကို ကြက်ဥကြော်ဖြင့် ပိုမိုပြည့်စုံအောင် ပေါင်းစပ်ထားပါသည်။",
      en: "Savory tea leaf rice topped with a crispy fried egg for a complete meal."
    },
    rating: 4.6,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "rice",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-500/70 to-lacquer-500/70"
  },
  {
    name: { my: "ပုန်းရည်ကြီးထမင်းသုပ် (အလွတ်)", en: "Pone Yay Gyi Rice Salad (Plain)" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "ပုဂံဒေသထွက် ပုန်းရည်ကြီး၏ ထူးခြားသောအရသာဖြင့် နယ်ထားသည့် ရိုးရာထမင်းသုပ်ဖြစ်ပါသည်။",
      en: "Rice mixed with traditional Bagan black bean paste (Pone Yay Gyi) for a bold, salty, and earthy flavor."
    },
    rating: 4.5,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "rice",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-jade-400/70 to-lacquer-500/70"
  },
  {
    name: { my: "ပုန်းရည်ကြီးထမင်းသုပ် (ကြက်ဥကြော်ပါ)", en: "Pone Yay Gyi Rice Salad (With Fried Egg)" },
    price: { my: "3,500 ကျပ်", en: "3,500 MMK" },
    description: {
      my: "ပုန်းရည်ကြီးထမင်းသုပ်ကို ကြက်ဥကြော်နှင့် တွဲဖက်၍ ပိုမိုအရသာရှိစွာ သုံးဆောင်နိုင်ပါသည်။",
      en: "The rich taste of black bean paste rice paired perfectly with a fried egg."
    },
    rating: 4.5,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "rice",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-500/70 to-lacquer-400/70"
  },
  {
    name: { my: "ခေါက်ဆွဲသုပ်", en: "Mixed Noodle Salad" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "ခေါက်ဆွဲဖတ်ကို ဆီချက်၊ ငရုတ်သီး၊ ဂေါ်ဖီတို့ဖြင့် အချိုးကျနယ်ထားသော အခြေခံသုပ်ဖြစ်ပါသည်။",
      en: "Soft wheat noodles tossed with chili oil, garlic, and fresh cabbage."
    },
    rating: 4.6,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "salads",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-500/70"
  },
  {
    name: { my: "တောင်ငူ တို့ဟူးသုပ်", en: "Taungoo Tofu Salad" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "တောင်ငူဒေသထွက် တို့ဟူးကို အမွှေးအကြိုင်များဖြင့် အထူးတလည် သုပ်ထားသော အသုပ်ဖြစ်ပါသည်။",
      en: "Smooth local tofu served with a unique Taungoo-style dressing and herbs."
    },
    rating: 4.6,
    spice: { my: "မစပ်", en: "Mild" },
    categoryKey: "salads",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-lacquer-500/70 to-jade-500/70"
  },
  {
    name: { my: "လက်ဖက်သုပ်", en: "Tea Leaf Salad" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "အရသာရှိသော လက်ဖက်နှပ်ကို အကြော်စုံ၊ ကြက်သွန်ဖြူတို့ဖြင့် တွဲဖက်ထားသည့် ရိုးရာအသုပ်ဖြစ်ပါသည်။",
      en: "A classic Myanmar fermented tea leaf mix with crunchy beans and garlic."
    },
    rating: 4.7,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "salads",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-500/70 to-lacquer-400/70"
  },
  {
    name: { my: "ဆေးဘဲဥသုပ်", en: "Century Egg Salad" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "ဆေးဘဲဥကို ကြက်သွန်၊ ခရမ်းချဉ်သီး၊ သံပုရာသီးတို့ဖြင့် ချဉ်ဖြုံးစပ်စပ် သုပ်ထားပါသည်။",
      en: "Rich century eggs mixed with onions, tomatoes, and a tangy lime dressing."
    },
    rating: 4.5,
    spice: { my: "အလယ်အလတ်", en: "Medium" },
    categoryKey: "salads",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-jade-500/70 to-lacquer-500/70"
  },
  {
    name: { my: "တောင်ငူကော်ဖီ (အပူ)", en: "Taungoo Coffee (Hot)" },
    price: { my: "2,000 ကျပ်", en: "2,000 MMK" },
    description: {
      my: "တောင်ငူဒေသထွက် ကော်ဖီစေ့ကို အသုံးပြုထားပြီး ရိုးရာရနံ့သင်းပျံ့သော ကော်ဖီဖြစ်ပါသည်။",
      en: "Locally sourced beans from Taungoo with a rich, traditional aroma."
    },
    rating: 4.7,
    spice: { my: "အပူ", en: "Hot" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-lacquer-500/70 to-jade-600/70"
  },
  {
    name: { my: "တောင်ငူကော်ဖီ (အအေး)", en: "Taungoo Coffee (Cold)" },
    price: { my: "3,000 ကျပ်", en: "3,000 MMK" },
    description: {
      my: "တောင်ငူဒေသထွက် ကော်ဖီစေ့ကို အသုံးပြုထားပြီး ရိုးရာရနံ့သင်းပျံ့သော ကော်ဖီဖြစ်ပါသည်။",
      en: "Locally sourced beans from Taungoo with a rich, traditional aroma."
    },
    rating: 4.6,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "ကော်ဖီခါး (အပူ)", en: "Black Coffee (Hot)" },
    price: { my: "1,500 ကျပ်", en: "1,500 MMK" },
    description: {
      my: "ကော်ဖီ၏ သဘာဝခါးသက်သော အရသာကို ကြိုက်နှစ်သက်သူများအတွက် အထူးသင့်လျော်ပါသည်။",
      en: "Pure, bold espresso for those who love the natural bitterness of coffee."
    },
    rating: 4.5,
    spice: { my: "အပူ", en: "Hot" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-lacquer-600/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "ကော်ဖီခါး (အအေး)", en: "Black Coffee (Cold)" },
    price: { my: "2,000 ကျပ်", en: "2,000 MMK" },
    description: {
      my: "ကော်ဖီ၏ သဘာဝခါးသက်သော အရသာကို ကြိုက်နှစ်သက်သူများအတွက် အထူးသင့်လျော်ပါသည်။",
      en: "Pure, bold espresso for those who love the natural bitterness of coffee."
    },
    rating: 4.5,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-jade-500/70 to-lacquer-500/70"
  },
  {
    name: { my: "ပျားသံပုရာ (အပူ)", en: "Honey Lemon (Hot)" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "လန်းဆန်းစေရန် သဘာဝပျားရည်စစ်စစ်နှင့် သံပုရာသီးကို အချိုးကျစပ်ထားပါသည်။",
      en: "A refreshing blend of natural honey and fresh lime to boost your day."
    },
    rating: 4.6,
    spice: { my: "အပူ", en: "Hot" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-500/70 to-lacquer-400/70"
  },
  {
    name: { my: "ပျားသံပုရာ (အအေး)", en: "Honey Lemon (Cold)" },
    price: { my: "3,000 ကျပ်", en: "3,000 MMK" },
    description: {
      my: "လန်းဆန်းစေရန် သဘာဝပျားရည်စစ်စစ်နှင့် သံပုရာသီးကို အချိုးကျစပ်ထားပါသည်။",
      en: "A refreshing blend of natural honey and fresh lime to boost your day."
    },
    rating: 4.6,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-lacquer-400/70 to-jade-500/70"
  },
  {
    name: { my: "သံပုရာလက်ဖက်ရည် (အပူ)", en: "Lemon Tea (Hot)" },
    price: { my: "2,000 ကျပ်", en: "2,000 MMK" },
    description: {
      my: "လက်ဖက်ရည်၏ ဖန်ခါးမှုနှင့် သံပုရာ၏ ချဉ်ဖြုံးမှုကို ပေါင်းစပ်ပေးထားသော လက်ဖက်ရည်ဖြစ်ပါသည်။",
      en: "A classic, zesty tea that balances citrus sourness with tea tannins."
    },
    rating: 4.5,
    spice: { my: "အပူ", en: "Hot" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-500/70"
  },
  {
    name: { my: "သံပုရာလက်ဖက်ရည် (အအေး)", en: "Lemon Tea (Cold)" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "လက်ဖက်ရည်၏ ဖန်ခါးမှုနှင့် သံပုရာ၏ ချဉ်ဖြုံးမှုကို ပေါင်းစပ်ပေးထားသော လက်ဖက်ရည်ဖြစ်ပါသည်။",
      en: "A classic, zesty tea that balances citrus sourness with tea tannins."
    },
    rating: 4.5,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-jade-500/70 to-lacquer-400/70"
  },
  {
    name: { my: "ပျားသံပုရာလက်ဖက်ရည် (အပူ)", en: "Honey Lemon Tea (Hot)" },
    price: { my: "3,000 ကျပ်", en: "3,000 MMK" },
    description: {
      my: "ပျားရည်၊ သံပုရာနှင့် လက်ဖက်ရည်တို့ ပေါင်းစပ်ထားသော အမောပြေစေသည့် သောက်စရာဖြစ်ပါသည်။",
      en: "The perfect trio of tea, sweet honey, and tangy lemon for a soothing drink."
    },
    rating: 4.6,
    spice: { my: "အပူ", en: "Hot" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-lacquer-600/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "ပျားသံပုရာလက်ဖက်ရည် (အအေး)", en: "Honey Lemon Tea (Cold)" },
    price: { my: "3,500 ကျပ်", en: "3,500 MMK" },
    description: {
      my: "ပျားရည်၊ သံပုရာနှင့် လက်ဖက်ရည်တို့ ပေါင်းစပ်ထားသော အမောပြေစေသည့် သောက်စရာဖြစ်ပါသည်။",
      en: "The perfect trio of tea, sweet honey, and tangy lemon for a soothing drink."
    },
    rating: 4.6,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-lacquer-400/70 to-jade-500/70"
  },
  {
    name: { my: "ဒိန်ချဉ်", en: "Yogurt" },
    price: { my: "3,500 ကျပ်", en: "3,500 MMK" },
    description: {
      my: "ကျန်းမာရေးနှင့်ညီညွတ်ပြီး အရသာရှိသော အေးမြသည့် ဒိန်ချဉ်ဖြစ်ပါသည်။",
      en: "Creamy, chilled yogurt that is both healthy and deliciously satisfying."
    },
    rating: 4.4,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "ကိုကာကိုလာ", en: "Coca-Cola" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "လန်းဆန်းမှုကို ချက်ချင်းပေးစွမ်းနိုင်သော ကမ္ဘာကျော် ကိုကာကိုလာ အချိုရည်ဖြစ်ပါသည်။",
      en: "The world’s favorite sparkling cola for an instant hit of refreshment."
    },
    rating: 4.5,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-lacquer-600/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "စပရိုက်", en: "Sprite" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "ရေငတ်ပြေစေမည့် သံပုရာအရသာရှိသော ကြည်လင်သည့် ဆိုဒါအချိုရည်ဖြစ်ပါသည်။",
      en: "A crisp, clean, lemon-lime flavored soda to quench your thirst."
    },
    rating: 4.4,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "ဝမ်းဟန်ဒရက်ပလပ်စ်", en: "100 Plus" },
    price: { my: "2,700 ကျပ်", en: "2,700 MMK" },
    description: {
      my: "ကိုယ်ခန္ဓာမှ ဆုံးရှုံးသွားသော ရေဓာတ်နှင့် အားအင်များကို ဖြည့်တင်းပေးသည့် အချိုရည်ဖြစ်ပါသည်။",
      en: "An isotonic drink to rehydrate and replenish your body’s energy."
    },
    rating: 4.4,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-jade-500/70 to-lacquer-400/70"
  },
  {
    name: { my: "ရိုင်ရယ်ဒီ", en: "Royal-D" },
    price: { my: "1,700 ကျပ်", en: "1,700 MMK" },
    description: {
      my: "ပင်ပန်းနွမ်းနယ်မှုကို ပြေပျောက်စေပြီး အားအင်ပြန်လည်ပြည့်ဖြိုးစေသော အချိုရည်ဖြစ်ပါသည်။",
      en: "An electrolyte drink designed to boost stamina and recovery."
    },
    rating: 4.3,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-500/70"
  },
  {
    name: { my: "ရှပ်ခ် (အားဖြည့်အချိုရည်)", en: "SHARK" },
    price: { my: "2,500 ကျပ်", en: "2,500 MMK" },
    description: {
      my: "တစ်နေ့တာလုံး တက်ကြွလန်းဆန်းစေရန် အားဖြည့်ပေးသည့် အားဖြည့်အချိုရည်ဖြစ်ပါသည်။",
      en: "A powerful energy drink to keep you alert and active all day."
    },
    rating: 4.3,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-lacquer-600/70 via-teak-500/70 to-jade-500/70"
  },
  {
    name: { my: "လီပို", en: "Lipo" },
    price: { my: "2,000 ကျပ်", en: "2,000 MMK" },
    description: {
      my: "ဗီတာမင်ဓာတ်များ ပါဝင်သော လူကြိုက်များသည့် အားဖြည့်အချိုရည်ဖြစ်ပါသည်။",
      en: "A classic vitamin-enriched energy booster for physical and mental focus."
    },
    rating: 4.3,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-lacquer-400/70 to-jade-500/70"
  },
  {
    name: { my: "သောက်ရေသန့်", en: "Purified Water" },
    price: { my: "1,000 ကျပ်", en: "1,000 MMK" },
    description: {
      my: "စနစ်တကျ သန့်စင်ထားသော သန့်ရှင်းလတ်ဆတ်သည့် သောက်ရေသန့်ဖြစ်ပါသည်။",
      en: "Clean and safe bottled water processed through high-quality filtration."
    },
    rating: 4.2,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-jade-600/70 via-teak-400/70 to-lacquer-400/70"
  },
  {
    name: { my: "ဒင်ဖုံဖျော်ရည် (မျိုးစုံ)", en: "Ding Fong Juice (All)" },
    price: { my: "2,000 ကျပ်", en: "2,000 MMK" },
    description: {
      my: "အရသာမျိုးစုံရှိသော အရည်အသွေးမြင့် သစ်သီးဖျော်ရည်ဖြစ်ပါသည်။",
      en: "High-quality fruit cordial available in a variety of vibrant flavors."
    },
    rating: 4.4,
    spice: { my: "အအေး", en: "Cold" },
    categoryKey: "drinks",
    image: drinkPlaceholder,
    gradient: "from-teak-600/70 via-jade-500/70 to-lacquer-400/70"
  }
];

const filterLabels = {
  my: {
    all: "အားလုံး",
    mohinga: "မုန့်ဟင်းခါး",
    salads: "အသုပ်မျိုးစုံ",
    rice: "ထမင်း",
    drinks: "ကော်ဖီနှင့်အအေးမျိုးစုံ"
  },
  en: {
    all: "All",
    mohinga: "Mohinga",
    salads: "Salads",
    rice: "Rice",
    drinks: "Coffee&Drinks"
  }
};

const copy = {
  my: {
    tag: "အထူးမီနူး",
    title: "တောင်ငူရိုးရာအရသာစစ်စစ်ကို နေ့စဉ်လတ်ဆတ်စွာ ပြင်ဆင်ပေးထားပါသည်။",
    body: "ဟင်းပွဲတိုင်းကို ဆွဲဆောင်မှုရှိသော ရနံ့၊ မျှတသောအစပ်အရသာနှင့် ခေတ်မီလှပသော ပြင်ဆင်မှုတို့ဖြင့် စေတနာပါပါ ဖန်တီးထားပါသည်။",
    pdf: "မီနူး အပြည့်အစုံ",
    category: "အမျိုးအစား",
    chef: "ချက်ပြုတ်သူအကြံပြုချက်",
    showAll: "အားလုံးပြရန်",
    showLess: "အနည်းငယ်သာပြရန်"
  },
  en: {
    tag: "Signature Menu",
    title: "Taungoo flavors, curated daily.",
    body: "Each dish is crafted with layered aromatics, balanced heat, and modern presentation.",
    pdf: "Full Menu PDF",
    category: "Category",
    chef: "Chef’s pick",
    showAll: "View All",
    showLess: "Show Less"
  }
};

export default function MenuSection({ lang = "my" }) {
  const labels = filterLabels[lang] ?? filterLabels.my;
  const t = copy[lang] ?? copy.my;
  const filters = [
    { key: "all", label: labels.all },
    { key: "mohinga", label: labels.mohinga },
    { key: "salads", label: labels.salads },
    { key: "rice", label: labels.rice },
    { key: "drinks", label: labels.drinks }
  ];

  const [activeFilter, setActiveFilter] = React.useState("all");
  const [showAll, setShowAll] = React.useState(false);
  const visibleMenu =
    activeFilter === "all"
      ? menuItems
      : menuItems.filter((item) => item.categoryKey === activeFilter);
  const displayedMenu = showAll ? visibleMenu : visibleMenu.slice(0, 9);
  const canToggle = visibleMenu.length > 9;

  React.useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  React.useEffect(() => {
    const cleanup = setupScrollReveal(document);
    return cleanup;
  }, [lang, activeFilter, showAll]);

  return (
    <section id="menu" className="section-pad bg-sand-texture">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col items-center gap-6 text-center reveal sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="space-y-3">
            <p className="tag">{t.tag}</p>
            <h2 className="font-display text-3xl text-teak-900 sm:text-4xl">{t.title}</h2>
            <p className="max-w-xl text-teak-700">{t.body}</p>
          </div>
          {t.pdf ? (
            <button
              className={`self-center rounded-full border border-teak-300 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-teak-700 transition hover:-translate-y-0.5 sm:self-auto ${
                lang === "my" ? "min-w-[220px] sm:min-w-[260px]" : ""
              }`}
            >
              {t.pdf}
            </button>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3 reveal">
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
          {displayedMenu.map((item) => (
            <article key={`${item.name[lang]}-${item.price[lang]}`} className="menu-card reveal">
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
        {canToggle && (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-teak-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-teak-700 transition hover:-translate-y-0.5"
            >
              {showAll ? t.showLess : t.showAll}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
