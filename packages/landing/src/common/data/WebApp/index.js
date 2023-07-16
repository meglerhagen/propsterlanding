export const MENU_ITEMS = [
  {
    label: "Hjem",
    path: "#banner_section",
    offset: "70",
  },
  {
    label: "Funksjoner",
    path: "#feature_section",
    offset: "70",
  },
  {
    label: "Tjenester",
    path: "#service_section",
    offset: "70",
  },
  {
    label: "Dashbord",
    path: "#dashboard_section",
    offset: "70",
  },
  // {
  //   label: "Priser",
  //   path: "#pricing_section",
  //   offset: "70",
  // },
  // {
  //   label: "Blog",
  //   path: "#blog_section",
  //   offset: "70",
  // },
];

import banner1 from "common/assets/image/webApp/banner-1.png";
import blog1 from "common/assets/image/webApp/blog-1.jpg";
import blog2 from "common/assets/image/webApp/blog-2.jpg";
import blog3 from "common/assets/image/webApp/blog-3.jpg";
import company1 from "common/assets/image/webApp/brand-1-1.png";
import company2 from "common/assets/image/webApp/brand-1-2.png";
import company3 from "common/assets/image/webApp/brand-1-3.png";
import company4 from "common/assets/image/webApp/brand-1-4.png";
import company5 from "common/assets/image/webApp/brand-1-5.png";
import company6 from "common/assets/image/webApp/brand-1-6.png";
import bubbleImage1 from "common/assets/image/webApp/call-bubble-1.svg";
import bubbleImage2 from "common/assets/image/webApp/call-bubble-2.svg";
import bubbleImage3 from "common/assets/image/webApp/call-bubble-3.svg";
import bubbleImage4 from "common/assets/image/webApp/call-bubble-4.svg";
import bubbleImage5 from "common/assets/image/webApp/call-bubble-5.svg";
import bubbleImage6 from "common/assets/image/webApp/call-bubble-6.svg";
import bubbleImage7 from "common/assets/image/webApp/call-bubble-7.svg";
import customerSupportImageShape from "common/assets/image/webApp/customer-support-shape.svg";
import customerSupportImage from "common/assets/image/webApp/customer-support.png";
import feature1 from "common/assets/image/webApp/feature-1.png";
import feature2 from "common/assets/image/webApp/feature-2.png";
import feature3 from "common/assets/image/webApp/feature-3.png";
import feature4 from "common/assets/image/webApp/feature-4.png";
import feature5 from "common/assets/image/webApp/feature-5.png";
import footerDribble from "common/assets/image/webApp/footer-dribble.svg";
import footerFacebook from "common/assets/image/webApp/footer-facebook.svg";
import footerTwitter from "common/assets/image/webApp/footer-twitter.svg";
import footerLogo from "common/assets/image/webApp/logo-dark.svg";
import secure2 from "common/assets/image/webApp/secure-1.png";
import secure1 from "common/assets/image/webApp/secure-2.png";
import secureImage from "common/assets/image/webApp/secure-dashboard.png"; //Switch to PNG if the other picutre
import secure2Image from "common/assets/image/webApp/dashboard2.jpg"
import service1 from "common/assets/image/webApp/service-1.png";
import service2 from "common/assets/image/webApp/service-2.png";
import service3 from "common/assets/image/webApp/service-3.png";
import service4 from "common/assets/image/webApp/service-4.png";
import testimonial1 from "common/assets/image/webApp/testimonials-1-1.png";
import testimonial2 from "common/assets/image/webApp/testimonials-1-2.png";
import testimonial3 from "common/assets/image/webApp/testimonials-1-3.png";
import testimonialBlockImage from "common/assets/image/webApp/testimonials-block-image.png";
export const BANNER_DATA = {
  title:
    "Det ultimate verktøyet for å ha oversikt over alle nøkkeltall i eiendomsporteføljen",
  text: "I en investeringsverden vil alle parameterne som bygger opp porteføljen din vil svinge. Porteføljekalkulatoren vår vil la deg ha full kontroll og muligheten til å modelere dagens nøkkeltall samt svingninger som vil påvirke eiendomsporteføljen din i fremtiden",
  tagline: "*Ingen kort påkrevd",
  button: {
    label: "Prøv gratis nå",
    link: "https://app.utleieoversikten.no/register/",
  },
  image: [
    {
      src: banner1,
    },
  ],
};

export const FEATURE_DATA = {
  blockTitle: {
    title: "Evaluer, Modeler, og ta kontroll på dataene for eiendommene dine",
    text: "Plattformen vår er laget av oss for å ta bort all usikkerheten når markedet svinger, inflasjonen øker, rentene stiger, og egenkapitalen beveger på seg. Med Utleieoversikten kan du raskt putte inn dataene for eiendommene dine og porteføljen, og få ut alle relevante nøkkeltall. Dataene ligger trygt lagret i skyen, og du kan eksportere dem til en oversiktlig PDF for å for eksempel kommunisere med banken eller andre investorer. Målet er å ta bort all usikkerhet, og ligge foran i løypa.",
  },
  post: [
    {
      icon: feature1,
      text: "Umiddelbar oversik over kontantstrømmen din",
    },
    {
      icon: feature2,
      text: "Eiendomsoversikten",
    },
    {
      icon: feature3,
      text: "Dynamisk oppdatering av alle nøkkeltall ved ulike fremtidsutsikter",
    },
    {
      icon: feature4,
      text: "Utskrift til PDF for videreformidling av porteføljedata",
    },
    {
      icon: feature5,
      text: "Instant Support",
    },
  ],
};

export const VIDEO_DATA = {
  title: "Møt Morten, Daglig Leder",
  videoID: "ScMzIvxBSi4",
};

export const SERVICE_DATA = [
  {
    icon: service2,
    title: "Umiddelbar oversik over kontantstrømmen din",
    text: "En eiendomsportefølje er bygget opp av en lang rekke kontantstrømmer som flyter inn og ut av porteføljen. Dette verktøyet er utviklet av oss fordi det ikke fantes noe som kunne gi oss denne tryggheten i tallene. Du vil raskt få full oversikt over eiendomsporteføljen din så enkelt som mulig.",
  },
  {
    icon: service1,
    title: "PDF Utskrift",
    text: "Å ha full kontroll på tallene dine, være realistisk i kalkylene, og formidle det klart og tydelig er det viktigste for å forstå porteføljen din. Hvis du skal samarbeide med andre partnere eller banker vil det bli betydelig enklere å kommunisere. Her vil du også kunne modelere inn usikkerhet ved tallene dine, både på oppsiden og nedsiden. Det vil være lett for deg og banken å se hvordan endring i rammevilkår vil slå ut.",
  },
  {
    icon: service3,
    title: "Eiendomsoversikten",
    text: "I eiendomsoversikten vil du lagre alle relevante tall for porteføljen din. Her har du også muligheten til å lagre info om leietakere for å forenkle forvaltningen av leieforholdene dine.",
  },
  {
    icon: service4,
    title: "Dynamisk oppdatering av alle nøkkeltall ved ulike fremtidsutsikter",
    text: "Fordi et tastetrykk vil oppdatere hele oversikten kan du selv modelere en rekke ulike utfall for å stressteste porteføljen din. Det er enkelt å modelere en worst case og hvordan dette slår inn på for eksempel kontantstrømmer, betjeningsevne eller egenkapitalen i porteføljen.",
  },
];

export const COMPANY_DATA = {
  title: "Gründerne bak Utleieoversikten kan du finne igjen i eiendomsartikler hos:",
  images: [
    {
      src: company1,
    },
    {
      src: company2,
    },
    {
      src: company3,
    },
    {
      src: company4,
    },
    {
      src: company5,
    },
    {
      src: company6,
    },
  ],
};

export const SECURE_DASHBOARD_DATA = {
  sectionImage: secureImage,
  blockTitle: {
    title: "Frigjør det fulle potensialet i din eiendomsportefølje med Utleieoversikten",
    text: "Effektiviser, analyser og ta avgjørelser. Ta din eiendomsportefølje til nye høyder med Utleieoversikten",
  },
  posts: [
    {
      icon: secure1,
      title: "Brukervennlig analyseverktøy",
      text: "Evaluer lønnsomhet og potensielle invisteringer nøyaktig",
    },
    {
      icon: secure2,
      image: secure2Image,
      title: "Finansielt Dashboard",
      text: "Få innsikt i sanntid i din eiendomsporteføljes prestasjon og ytelse",
    },
  ],
};

export const COUNTER_DATA = {
  blockTitle: {
    title: "Revolusjoner din eiendomsinvesteringsstrategi med Utleieoversikten",
    text: "Utnytt kraften i vårt avanserte utleiekalkulatorverktøy og finansielle dashbord for å optimalisere din eiendomsportefølje. Utleieoversikten er designet for å fungere effektivt på alle moderne mobile enheter, og gir deg rask tilgang til dine investeringsdata hvor enn du er",
    button: {
      link: "#",
      label: "Oppdag mer",
    },
  },
  posts: [
    {
      count: "80",
      title: "Opp til",
      text: "Økning i lønnsomhet",
      symbol: "%",
    },
    {
      count: "98",
      title: "Fornøyde kunder",
      text: "Brukertilfredshet",
      symbol: "%",
    },
    {
      count: "5",
      title: "Ned til",
      text: "Beregningstid",
      symbol: "Min",
    },
    {
      count: "5x",
      title: "Opp til",
      text: "Raskere enn andre",
      symbol: "",
    },
  ],
};

export const TESTIMONIALS_DATA = {
  blockImage: testimonialBlockImage,
  title: "What people say about our product",
  posts: [
    {
      image: testimonial1,
      text: "Fantastisk! Jeg kan ikke tro at jeg har full kontroll over eiendomsporteføljen min med Utleieoversikten. Med deres detaljerte leie kalkulator, er jeg i stand til å vurdere lønnsomheten av utleieeiendommene mine med en moderne og effektiv design.",
      name: "Ola Normann",
      designation: "Eiendomsinvestor",
    },
    {
      image: testimonial2,
      text: "Utrolig! Med Utleieoversikten har jeg fått en helt ny oversikt over investeringene mine. Takket være deres omfattende finansielle dashbord, kan jeg nå bruke mine mest brukte eiendomsstyringsverktøy med et moderne og trendende design.",
      name: "Ola Normann",
      designation: "CEO i RealEstateX",
    },
    {
      image: testimonial3,
      text: "Wow! Jeg kan ikke tro at jeg har fått så mye innsikt i utleieeiendomsmarkedet med Utleieoversikten. Med deres markedsdata har jeg kunnet bruke mine mest brukte investeringsstrategier med et moderne og trendende design.",
      name: "Ola Normann",
      designation: "Kreativ Direktør",
    },
  ],
};

export const MONTHLY_PRICING_DATA = [
  {
    recommended: false,
    title: "Basis",
    price: "299kr",
    tagline: "med begrensninger",
    planLabel: "Planen inkluderer:",
    options: [
      {
        text: "Beregne lønnsomhet for opptil 5 eiendommer.",
      },
      {
        text: "Standard finansiell dashboard.",
      },
      {
        text: "Tilgang til basis markedsdata.",
      },
      {
        text: "Tilgang til basis markedsdata.",
      },
      {
        text: "Tilgang til basis markedsdata.",
      },
    ],
    button: {
      label: "Start 14 dagers gratis prøveperiode",
      link: "https://app.utleieoversikten.no/register/",
    },
  },
  {
    recommended: true,
    title: "Pro",
    price: "449kr",
    tagline: "Månedlig",
    planLabel: "Planen inkluderer:",
    options: [
      {
        text: "Ubegrenset beregning av lønnsomhet for eiendommer.",
      },
      {
        text: "Utvidet finansiell dashboard.",
      },
      {
        text: "Tilgang til detaljert markedsdata.",
      },
      {
        text: "Separat bygningsside for hver eiendom.",
      },
      {
        text: "Prioritert kundestøtte.",
      },
    ],
    button: {
      label: "Start 14 dagers gratis prøveperiode",
      link: "https://app.utleieoversikten.no/register/",
    },
  },
];

export const YEARLY_PRICING_DATA = [
  {
    recommended: false,
    title: "Basis",
    price: "199kr",
    tagline: "med begrensninger",
    planLabel: "Planen inkluderer:",
    options: [
      {
        text: "Beregne lønnsomhet for opptil 5 eiendommer.",
      },
      {
        text: "Standard finansiell dashboard.",
      },
      {
        text: "Tilgang til basis markedsdata.",
      },
      {
        text: "Tilgang til basis markedsdata.",
      },
      {
        text: "Tilgang til basis markedsdata.",
      },
    ],
    button: {
      label: "Start 14 dagers gratis prøveperiode",
      link: "https://app.utleieoversikten.no/register/",
    },
  },
  {
    recommended: true,
    title: "Pro",
    price: "3199kr",
    tagline: "Årlig",
    planLabel: "Planen inkluderer:",
    options: [
      {
        text: "Ubegrenset beregning av lønnsomhet for eiendommer.",
      },
      {
        text: "Utvidet finansiell dashboard.",
      },
      {
        text: "Tilgang til detaljert markedsdata.",
      },
      {
        text: "Separat bygningsside for hver eiendom.",
      },
      {
        text: "Prioritert kundestøtte.",
      },
    ],
    button: {
      label: "Start 14 dagers gratis prøveperiode",
      link: "https://app.utleieoversikten.no/register/",
    },
  },
];

export const CUSTOMER_SUPPORT_DATA = {
  image: customerSupportImage,
  shapeImage: customerSupportImageShape,
  title: "Meet our Superheros who works dedicatedly with customer support",
  options: [
    {
      label: "Gift-giving social network – emotional vs transactional",
    },
    {
      label:
        "Use gifts and consumer groups relationships to drive traffic to your business",
    },
    {
      label:
        "Significantly underserved gift-card and e-gifting industry in Mexico and Latin America",
    },
    {
      label: "Social currency",
    },
    {
      label: "20 second gifting process",
    },
  ],
  button: {
    link: "#",
    label: "Learn More",
  },
};

export const BLOG_DATA = {
  blockText: {
    title: "Hva vi legger ut på vår nyhetsfeeden",
    text: "Bygg en utrolig arbeidsplass og utvid din virksomhet med Utleieoversikten",
  },
  posts: [
    {
      image: blog1,
      title:
        "Bygg en utrolig arbeidsplass og utvid din virksomhet med Utleieoversikten",
      link: {
        label: "Les Mer",
        path: "#",
      },
    },
    {
      image: blog2,
      title: "De 3 grunnleggende reglene for å holde din portefølje kapitalsterk",
      link: {
        label: "Les Mer",
        path: "#",
      },
    },
    {
      image: blog3,
      title:
        "Skaff flere eiendommer gjennom ditt nettverk ved å bytte perspektiver",
      link: {
        label: "Les mer",
        path: "#",
      },
    },
  ],
};

export const CALL_TO_ACTION_DATA = {
  title: "Mer enn 20+ integrasjoner",
  text: "Vi har selvsagt valgt de mest populære integrasjonene, slik at du kan få mest mulig ut av Utleieoversikten.",
  button: {
    link: "#",
    label: "Se alle integrasjoner",
  },
  bubbleIcon: [
    {
      icon: bubbleImage1,
    },
    {
      icon: bubbleImage2,
    },
    {
      icon: bubbleImage3,
    },
    {
      icon: bubbleImage4,
    },
    {
      icon: bubbleImage5,
    },
    {
      icon: bubbleImage6,
    },
    {
      icon: bubbleImage7,
    },
  ],
};

export const FOOTER_DATA = {
  logo: footerLogo,
  menu: [
    {
      link: "#",
      label: "Support",
    },
    {
      link: "#",
      label: "Om oss",
    },
    {
      link: "#",
      label: "Personvern",
    },
    {
      link: "#",
      label: "Kontakt oss",
    },
  ],
  social: [
    {
      icon: footerFacebook,
      link: "#",
    },
    {
      icon: footerTwitter,
      link: "#",
    },
    {
      icon: footerDribble,
      link: "#",
    },
  ],
};
