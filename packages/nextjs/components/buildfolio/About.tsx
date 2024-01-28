import { aboutItems } from "~~/buildfolio.config";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio/common";

export function About() {
  return (
    <SectionContainer>
      <SectionHeader title="About" />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 font-gothic text-xl">
        {aboutItems.map(item => (
          <div key={item.title} className="flex-1 mb-5">
            <h5 className="text-3xl font-inter font-bold mb-2">{item.title}</h5>
            <p>{item.description}</p>
          </div>
        ))}
        {/* <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Past</h5>
          <p>
            My journey as a programmer started with a full stack software engineering bootcamp organized by{" "}
            <Link href="https://www.springboard.com/landing/software-engineering-career-track/" text="Springboard" />.
            After graduating, I stuck around as a peer mentor helping students learn the fundamentals of web
            development. I also joined <Link href="https://www.hackforla.org/" text="Hack for LA" /> as a volunteer
            software engineer contributing to open source projects including{" "}
            <Link text="Civic Tech Jobs" href="https://www.hackforla.org/projects/civic-tech-jobs" />, where I learned
            to collaborate with other developers, designers, and project managers. Additionally, I built the{" "}
            <Link text="Tabernacle School" href="https://www.tabernacle.school/" /> and{" "}
            <Link text="Contra Costa Golf Club" href="https://www.ccgc.app/" /> websites
          </p>
        </div>
        <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Present</h5>
          <p>
            I recently joined the <Link text="Buidl Guidl" href="https://buidlguidl.com/" /> community where we create
            products, prototypes, and tutorials to enrich the web3 ecosystem. My first creation was{" "}
            <Link text="Speedrun Chainlink" href="https://speedrun-chainlink.vercel.app/" />, a beginner&apos;s guide to
            implimenting Chainlink products with smart contracts. Next, I shipped{" "}
            <Link text="Vaults of Fortune" href="https://vaults-of-fortune.vercel.app/" />, a contest where players
            compete for the highest ROI by depositing ERC-20 tokens into ERC-4626 vaults. After that, I shipped{" "}
            <Link text="Only Buidlors" href="https://only-buidlors.vercel.app/" />, a dynamic SVG NFT project that uses
            Chainlink functions to verify membership before minting.
          </p>
        </div>
        <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Future</h5>
          <p>
            I am very fortunate that my efforts continue to be rewarded with a stream from BuidlGuidl&apos;s{" "}
            <Link text="Sanctum Cohort" href="https://sanctum.buidlguidl.com/" />. I plan to continue competing in
            hackathons and am very excited to attend my first ETH Denver this year! Additionally, I am helping to create{" "}
            <Link href="https://github.com/scaffold-eth/Scaffold-ETH-DeFi-Challenges" text="Defi Challenges" /> that
            help devs learn how to work with live protocols. Finally, I am starting to explore regenerative finance and
            learn about how protocols like gitcoin grants and quadratic funding help facilatate the innovation and
            growth of public goods.
          </p>
        </div> */}
      </div>
    </SectionContainer>
  );
}
