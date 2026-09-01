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
const resumeUrl = "https://docs.google.com/document/d/1GAvP7iTx6E8Cr7cIe9kg5amQnEYF6r8WjV8-FUUTBrk/edit?usp=sharing"; // for link in the header component

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
      "Full stack software engineer for the Balancer labs integrations team. Creating educational content including documentation, video tutorials, an prototyping tools. Building user interfaces for liquidity pool creation. Adding features to the Balancer software development kit",
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

export { resumeUrl, achievementItems, poapsWalletAddress, buidlGuidlWalletAddress, projectItems, experienceItems };
