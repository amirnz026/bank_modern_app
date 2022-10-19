import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "صفحه اصلی",
  },
  {
    id: "features",
    title: "قابلیت ها",
  },
  {
    id: "product",
    title: "محصولات",
  },
  {
    id: "clients",
    title: "مشتری ها",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "امتیازات",
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "بالاترین امنیت",
    content:
      "این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "انتقال موجودی",
    content:
      "طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی .",
    name: "محمد محمدی",
    title: "بنیانگذار",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.",
    name: "مریم مریمی",
    title: "رهبر",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی.",
    name: "رضا رضایی",
    title: "مدیر اجرایی",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "کابران فعال",
    value: "۳۸۰۰+",
  },
  {
    id: "stats-2",
    title: "مورد اعتماد شرکت ها",
    value: "۲۳۰+",
  },
  {
    id: "stats-3",
    title: "تبادلات",
    value: "۵۷۰ میلیارد +",
  },
];

export const footerLinks = [
  {
    title: "لینک های مفید",
    links: [
      {
        name: "صفحه اصلی",
        link: "https://www.seabank.com/content/",
      },
      {
        name: "چگونه کار می کند",
        link: "https://www.seabank.com/how-it-works/",
      },
      {
        name: "ثبت نام",
        link: "https://www.seabank.com/create/",
      },
      {
        name: "جستجو",
        link: "https://www.seabank.com/explore/",
      },
      {
        name: "قوانین و مقررات",
        link: "https://www.seabank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "انجمن",
    links: [
      {
        name: "پشتیبانی",
        link: "https://www.seabank.com/help-center/",
      },
      {
        name: "شرکای تجاری",
        link: "https://www.seabank.com/partners/",
      },
      {
        name: "پیشنهادات",
        link: "https://www.seabank.com/suggestions/",
      },
      {
        name: "بلاگ",
        link: "https://www.seabank.com/blog/",
      },
      {
        name: "خبرنامه",
        link: "https://www.seabank.com/newsletters/",
      },
    ],
  },
  {
    title: "شرکای تجاری",
    links: [
      {
        name: "شرکای ما",
        link: "https://www.seabank.com/our-partner/",
      },
      {
        name: "شریک ما شوید",
        link: "https://www.seabank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
