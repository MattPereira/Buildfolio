module.exports = {
  /*** "Landing" section content ***/
  ensName: "matthu.eth", // ENS records fetched for the landing showcase component

  allowedImageDomains: ["storage.googleapis.com", "ipfs.io", "prod-metadata.s3.amazonaws.com"], // Nextjs Image component requires a domain whitelist
  /*** "Projects" section content ***/
  buidlGuidlWallet: "0x41f727fA294E50400aC27317832A9F78659476B9", // BG profile wallet address
  /*** "About" section content ***/
  aboutItems: [
    {
      title: "Past",
      description:
        "My journey as a programmer started with a full stack software engineering bootcamp organized by Springboard. After graduating, I stuck around as a peer mentor helping students learn the fundamentals of web development. I also joined Hack for LA as a volunteer software engineer contributing to open source projects including Civic Tech Jobs, where I learned to collaborate with other developers, designers, and project managers. Additionally, I built the Tabernacle School and Contra Costa Golf Club websites",
    },
    {
      title: "Present",
      description:
        "I recently joined the Buidl Guidl community where we create products, prototypes, and tutorials to enrich the web3 ecosystem. My first creation was Speedrun Chainlink, a beginner's guide to implimenting Chainlink products with smart contracts. Next, I shipped Vaults of Fortune, a contest where players compete for the highest ROI by depositing ERC-20 tokens into ERC-4626 vaults. After that, I shipped Only Buidlors, a dynamic SVG NFT project that uses Chainlink functions to verify membership before minting.",
    },
    {
      title: "Future",
      description:
        "I am very fortunate that my efforts continue to be rewarded with a stream from BuidlGuidl's Sanctum Cohort. I plan to continue competing in hackathons and am very excited to attend my first ETH Denver this year! Additionally, I am helping to create Defi Challenges that help devs learn how to work with live protocols. Finally, I am starting to explore regenerative finance and learn about how protocols like gitcoin grants and quadratic funding help facilatate the innovation and growth of public goods.",
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
