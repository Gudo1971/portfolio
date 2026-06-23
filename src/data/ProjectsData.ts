export type Project = {
  id: number;
  title: string;
  description: string;
  status: string;
  stack: string;
  longDescription: string;
  why: string;
  whyBullets: string[];
  projectStatus: string;
  learned: string;
  livePreviewInfo: string;
  tech: string[];
  image: string;
  screenshots: string[];
  liveDemo: string;
  github?: string;
  frontendGithub?: string;
  backendGithub?: string;
  demoLogin?: {
    email: string;
    password: string;
    note: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Budget App",
    description:
      "Een moderne budget applicatie met React, TypeScript en Chakra UI.",
    status: "In actieve ontwikkeling",
    stack:
      "Vite, React 19, Chakra UI 3.27, React Hook Form 7.63, Node/Express, Prisma, Supabase, Render, Vercel",

    longDescription:
      "De Budget App is een moderne full‑stack applicatie waarmee gebruikers transacties kunnen importeren, categoriseren en analyseren. Het project is opgezet als een real‑world SaaS‑architectuur: frontend op Vercel, backend op Render en een Postgres‑database op Supabase. Het doel van dit project is om een schaalbare, professionele structuur neer te zetten die later kan uitgroeien tot een complete persoonlijke finance tool.",

    why: "Dit project laat zien hoe ik werk: iteratief, gestructureerd en met een sterke focus op architectuur.",

    whyBullets: [
      "een volledige full‑stack omgeving kan opzetten",
      "moderne hosting‑platforms kan combineren",
      "databases, API’s en background scripts kan integreren",
      "problemen kan oplossen (deployment, TypeScript, cold starts, migrations)",
      "production‑ready keuzes kan maken",
    ],

    projectStatus:
      "De app is nog in ontwikkeling. Ik heb ervoor gekozen om hem tóch op te nemen omdat het mijn proces laat zien: bouwen, deployen, testen, verbeteren. De huidige versie bevat al de kernfunctionaliteit en een volledig werkende technische basis.",

    learned:
      "Ik heb geleerd hoe je een volledige full‑stack omgeving opzet, moderne hosting‑platforms combineert, databases en API’s integreert, problemen oplost (deployment, TypeScript, cold starts, migrations) en production‑ready keuzes maakt.",

    livePreviewInfo:
      "De app is live beschikbaar. Cold starts kunnen voorkomen omdat de backend op een free tier draait, dit is normaal tijdens de ontwikkelfase. Ik heb om dit te voorkomen een health check gemaakt die bij het openen van de app automatisch een request naar de backend stuurt, zodat deze 'wakker' wordt, de knop 'Start App' wordt geactiveerd zodra de backend \"wakker\" is.",

    tech: ["React", "TypeScript", "Chakra UI", "Supabase"],
    image:
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1781994740/rszrfc9n7jvlgidbyhwb.png",
    screenshots: [
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1782043413/wn3m25yt27qjscutnudz.png",
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1782043544/zp7c3dlk8kbujx6nlnxs.png",
    ],
    liveDemo: "https://budget-app-frontend-orpin.vercel.app/",
    frontendGithub:
      "https://github.com/Gudo1971/budget-app-frontend/tree/portfolio-showcase",
    backendGithub:
      "https://github.com/Gudo1971/budget-app-backend/tree/portfolio-showcase",
  },

  {
    id: 2,
    title: "StayBnB",
    description: "Een full‑stack Airbnb‑clone met Node, Express en React.",
    status: "In actieve ontwikkeling",
    stack: "React, Chakra UI, Node/Express, Prisma, Supabase, Vercel, Render",

    longDescription:
      "StayBnB is een Airbnb‑achtige applicatie waarin ik experimenteer met UI‑design, component‑architectuur en full‑stack workflows. Het project is opgezet om mijn vaardigheden in frontend‑design, backend‑structuur en database‑modellering te versterken.",

    why: "StayBnB laat zien dat ik werk aan projecten die dicht bij echte SaaS‑apps liggen.",

    whyBullets: [
      "complexe UI‑componenten kan ontwerpen",
      "een schaalbare backend kan opzetten",
      "een moderne database‑architectuur kan modelleren",
      "een volledige full‑stack pipeline kan deployen",
      "iteratief werk en continu verbeter",
    ],

    projectStatus:
      "Ook dit project is nog in ontwikkeling. Ik heb het bewust opgenomen omdat het mijn manier van denken en bouwen laat zien. De huidige versie toont al een solide basis en een professionele structuur.",

    learned:
      "Ik heb geleerd hoe je een Node/Express API opzet, hoe je JWT‑authenticatie implementeert, hoe je een frontend koppelt aan een backend, hoe je data valideert en hoe je een schaalbare folderstructuur maakt. Ook heb ik veel geleerd over UX‑flows zoals zoeken, filteren, pagineren en boeken. Daarnaast heb ik mijn kennis van React‑componentarchitectuur en state management verder verdiept.",

    livePreviewInfo:
      "De app draait live op Vercel. Omdat de backend op een free tier draait, kan de eerste request soms iets trager zijn, dit is normaal tijdens de ontwikkelfase.",

    tech: ["React", "Node", "Express", "JWT", "MongoDB"],

    image:
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1781869260/ns18gehyzoit7woe9n2p.png",

    screenshots: [
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1767324896/vg4ubtmezwdbgdfbbwjf.png",
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1767324895/rl8k7n2lhtzmbrabgbcp.png",
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1767324892/jnqliaviqqiconhrdsxy.png",
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1767324885/qjidyqlqr13bnqpjdnrs.png",
    ],

    liveDemo: "https://bed-final-project.vercel.app/",
    frontendGithub:
      "https://github.com/Gudo1971/bed-final-project/tree/portfolio-showcase",
    backendGithub:
      "https://github.com/Gudo1971/bed-final-project/tree/portfolio-showcase-backend",

    demoLogin: {
      email: "johndoe@email.com",
      password: "johnDoe123",
      note: "Dit is een veilige demo‑omgeving met testdata. Je kunt listings aanmaken, bewerken en verwijderen, en de volledige host‑flow testen.",
    },
  },
  {
    id: 3,
    title: "react-chakra-v3-template",
    description:
      "Starter template voor moderne React-apps met Chakra UI v3, semantic tokens en een schaalbare component-architectuur.",
    status: "Gereleased",
    stack:
      "Vite, React 19, Chakra UI 3.27, TypeScript, Semantic Tokens, React Hook Form, File-based Routing",

    longDescription:
      "Deze template is gebouwd om snel moderne React-projecten te starten met een professionele basis. Het bevat een volledig opgezet themasysteem met semantic tokens, dark/light/system mode, een schaalbare component-architectuur, utility-componenten, een voorbeeldlayout, en best practices voor mappenstructuur, styling en state management. Het doel is om een solide fundament te bieden waarmee nieuwe projecten direct production-ready kunnen starten.",

    why: "Ik heb deze template gemaakt omdat ik merkte dat ik bij elk nieuw project dezelfde setup opnieuw moest bouwen. Door een professionele basis te creëren, kan ik sneller itereren, consistenter werken en direct focussen op functionaliteit in plaats van boilerplate.",

    whyBullets: [
      "een schaalbare component-architectuur kan opzetten",
      "semantic tokens en theming professioneel kan implementeren",
      "dark/light/system mode volledig kan integreren",
      "een moderne React-setup kan maken met Vite en React 19",
      "developer experience kan optimaliseren met tooling en structuur",
    ],

    projectStatus:
      "De template is volledig functioneel en wordt actief gebruikt als basis voor nieuwe projecten. Ik blijf hem uitbreiden met nieuwe patterns, utilities en best practices.",

    learned:
      "Ik heb geleerd hoe je een professioneel themasysteem opzet, hoe je semantic tokens beheert, hoe je een schaalbare component-architectuur maakt, en hoe je een template bouwt die zowel flexibel als robuust is voor toekomstige projecten.",

    livePreviewInfo:
      "De template is beschikbaar op GitHub. Je kunt hem direct clonen en gebruiken als basis voor je eigen projecten. De README bevat installatie-instructies en uitleg over de structuur.",

    tech: ["React", "Chakra UI v3", "TypeScript", "Vite"],

    image:
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1782215808/jwclpwlhrh7pgjrvlopr.png",

    screenshots: [
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1782215906/tnf9kbvkstnjhzwb8jmb.png",
      "https://res.cloudinary.com/dkpp5c90a/image/upload/v1782216031/i8xdwdavckkmirbstcbf.png",
    ],

    liveDemo: "https://react-chakra-v3-template.vercel.app/",
    github: "https://github.com/Gudo1971/react-chakra-v3-template",
  },
];
