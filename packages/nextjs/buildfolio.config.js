module.exports = {
  /*** "Landing" section content ***/
  ensName: "matthu.eth", // ENS records fetched for the landing showcase component
  allowedImageDomains: ["ipfs.io", "assets.poap.xyz", "storage.googleapis.com", "prod-metadata.s3.amazonaws.com"], // Nextjs Image component requires a domain whitelist
  resumeUrl: "https://docs.google.com/document/d/1H-5nsbQjDQPvQYtGq6Y91_NAwTxjicJEVXbtxtorsKI/edit?usp=sharing", // for link in the header component
  /*** "Achievements" section content */
  achievementNftsInfo: [
    {
      title: "Patrick Collin's Foundry Course",
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
  ],
  poapsWalletAddress: "0x41f727fA294E50400aC27317832A9F78659476B9",
  /*** "Projects" section content ***/
  buidlGuidlWalletAddress: "0x41f727fA294E50400aC27317832A9F78659476B9", // BG profile wallet address
  web2ProjectsData: [
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
  ],
  /*** "About" section content ***/
  aboutItems: [
    {
      title: "Past",
      description:
        "My journey as a programmer started with a full stack software engineering bootcamp organized by Springboard. After graduating, I stuck around as a peer mentor helping students learn the fundamentals of web development. I also joined Hack for LA as a volunteer software engineer contributing to open source projects including Civic Tech Jobs, where I learned to collaborate with other developers, designers, and project managers. I also built the Tabernacle School and Contra Costa Golf Club websites",
    },
    {
      title: "Present",
      description:
        "I am a proud member of the Buidl Guidl community where we create products, prototypes, and tutorials to enrich the web3 ecosystem. My first creation was Speedrun Chainlink, a beginner's guide to implimenting Chainlink products with smart contracts. Next, I shipped Vaults of Fortune, a contest where players compete for the highest ROI by depositing ERC-20 tokens into ERC-4626 vaults. After that, I shipped Only Buidlors, a dynamic SVG NFT project that uses Chainlink functions to verify membership",
    },
    {
      title: "Future",
      description:
        "I plan to continue competing in hackathons and am very excited to attend my first ETH Denver this year! Additionally, I am helping to create Defi Challenges that help devs learn how to work with live protocols. Furthermore, I am starting to explore regenerative finance and learn about how protocols like gitcoin and mechanisms like quadratic funding help to facilatate the innovation and growth of public goods. My primary goal is to contribute towards building positive sum digital systems.",
    },
  ],
  /*** "Experience" section content ***/
  experienceItems: [
    {
      title: "On Chain Developer",
      image: "/buidlguidl.svg",
      description:
        "Building decentralized applications with Scaffold ETH including Speedrun Chainlink, Vaults of Fortune, and upDev. Currently, a member of the Sanctum Cohort stream working on building Defi Challenges teach developers how to integrate with protocols including Sommolier, Yearn, and Chainlink",
    },
    {
      id: 1,
      title: "Full Stack Web Developer",
      image: "/hfla.png",
      description:
        "Volunteered as a software engineer contributing to open source projects including Civic Tech Jobs and the Volunteer Relationship Management System. Collaborated with other developers, designers, and project managers to serve the greater Los Angeles community",
    },
    {
      id: 3,
      title: "Peer Mentor",
      image: "/springboard.png",
      description:
        "After earning a full stack software engineering bootcamp certification from Springboard, I volunteered as a peer mentor helping students overcome obstacles and learn the fundamentals of web development. Additionally, I helped facilitate technical interview practice sessions",
    },
  ],
};
