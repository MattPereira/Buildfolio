export interface AboutInfo {
  title: string;
  description: string;
}

export interface ProjectInfo {
  title: string;
  imageSrc: string;
  description: string;
  urls: {
    demo: string;
    code: string;
  };
}

export interface ExperienceInfo {
  title: string;
  image: string;
  description: string;
}

export interface AchievementInfo {
  title: string;
  ownerWalletAddress: string;
  collectionContractAddress: string[];
}

////////// LANDING //////////
const ensName = "matthu.eth"; // ENS records fetched for the landing showcase component
const resumeUrl = "https://docs.google.com/document/d/1H-5nsbQjDQPvQYtGq6Y91_NAwTxjicJEVXbtxtorsKI/edit?usp=sharing"; // for link in the header component

////////// ABOUT //////////
const aboutItems: AboutInfo[] = [
  {
    title: "Past",
    description:
      "My journey as a programmer started with a full stack software engineering bootcamp organized by Springboard. After graduating, I stuck around as a peer mentor helping students learn the fundamentals of web development. I also joined Hack for LA as a volunteer software engineer contributing to open source projects including Civic Tech Jobs, where I learned to collaborate with other developers, designers, and project managers. I also built the Tabernacle School and Contra Costa Golf Club websites",
  },
  {
    title: "Present",
    description:
      "I am a committed member of the Buidl Guidl community where we create products, prototypes, and tutorials to enrich the web3 ecosystem. My first creation was Speedrun Chainlink, a beginner's guide to implimenting Chainlink products with smart contracts. Next, I shipped Vaults of Fortune, a contest where players compete for the highest ROI by depositing ERC-20 tokens into ERC-4626 vaults. After that, I shipped Only Buidlors, a dynamic SVG NFT project that uses Chainlink functions to verify membership",
  },
  {
    title: "Future",
    description:
      "I plan to continue competing in hackathons and am very excited to attend my first ETH Denver this year! Additionally, I am helping the BuidlGuidl create Defi Challenges that help devs learn how to work with live protocols. Furthermore, I am starting to explore regenerative finance and learn about how protocols like gitcoin and mechanisms like quadratic funding help to facilatate the innovation and growth of public goods. My primary goal is to contribute towards building positive sum digital systems.",
  },
];

////////// PROJECTS //////////
const buidlGuidlWalletAddress = "0x41f727fA294E50400aC27317832A9F78659476B9"; // used to fetch projects from BG server
const projectItems: ProjectInfo[] = [
  {
    title: "Contra Costa Golf Club",
    imageSrc: "/ccgc.png",
    description:
      "A full stack web application that manages all of the tournaments, greenies, members, courses, and standings data for the contra costa golf club. Users are able to input their strokes, putts, and greenies as they play each round. Handicaps and points are automatically calculated to determine individual tournament and season long champions.",
    urls: {
      demo: "https://ccgc.vercel.app/",
      code: "https://github.com/MattPereira/contra-costa-golf-club",
    },
  },
  {
    title: "Tabernacle School",
    description:
      "A single page web application for Tabernacle School that advertises to prospective families and provides current families with requisite documents, calendars, and instructions. Features include forms that allow users to send emails to the school, a FullCalender that fetches data from the school’s google calendar, and a headless CMS for updating the data and photos displayed on the website.",
    imageSrc: "/tabernacle.png",
    urls: {
      demo: "https://tabernacle.school",
      code: "https://github.com/MattPereira/tabernacle-school",
    },
  },
];

////////// EXPERIENCE //////////
const experienceItems: ExperienceInfo[] = [
  {
    title: "Software Engineer",
    image: "/balancer.svg",
    description:
      "Full stack software engineer for the Balancer labs integrations team. Working on the software development kit, prototyping tools, educational content, and a pool creation front-end",
  },
  {
    title: "Full Stack Developer",
    image: "/buidlguidl.svg",
    description:
      "Building decentralized applications with Scaffold ETH including Speedrun Chainlink, Vaults of Fortune, and upDev. Currently, a member of the Sanctum Cohort stream working on building Defi Challenges teach developers how to integrate with protocols including Sommolier, Yearn, and Chainlink",
  },
  {
    title: "Web Developer",
    image: "/hfla.png",
    description:
      "Volunteered as a software engineer contributing to open source projects including Civic Tech Jobs and the Volunteer Relationship Management System. Collaborated with other developers, designers, and project managers to serve the greater Los Angeles community",
  },
];

////////// ACHEIVEMENTS //////////
const achievementItems: AchievementInfo[] = [
  {
    title: "Cyfrin Updraft Foundry Course",
    ownerWalletAddress: "0x41f727fA294E50400aC27317832A9F78659476B9",
    collectionContractAddress: ["0x39338138414Df90EC67dC2EE046ab78BcD4F56D9"],
  },
  {
    title: "Patrick Collin's Hardhat Course",
    ownerWalletAddress: "0x41f727fA294E50400aC27317832A9F78659476B9",
    collectionContractAddress: [
      "0xB29eA9ad260B6DC980513bbA29051570b2115110",
      "0xaAcb0B62aEB7Db938f12161Da0E45fC3B2B34179",
      "0xA457A0F9b6EDbEc66941D7Ed1D4d4834330ABf52",
    ],
  },
];
const poapsWalletAddress = "0x41f727fA294E50400aC27317832A9F78659476B9";

export {
  ensName,
  resumeUrl,
  achievementItems,
  poapsWalletAddress,
  buidlGuidlWalletAddress,
  projectItems,
  aboutItems,
  experienceItems,
};
