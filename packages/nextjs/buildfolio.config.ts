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

////////// VIDEOS //////////
// Videos are parsed out of the "Videos" section of this README so it stays the single source of truth
const githubReadmeUrl = "https://raw.githubusercontent.com/MattPereira/MattPereira/main/README.md";

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

export { resumeUrl, achievementItems, poapsWalletAddress, buidlGuidlWalletAddress, experienceItems, githubReadmeUrl };
