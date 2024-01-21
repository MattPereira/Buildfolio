import { Link, SectionContainer, SectionHeader } from "~~/components/buildfolio";

export function About() {
  return (
    <SectionContainer>
      <SectionHeader title="About" />

      <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 font-gothic text-xl">
        <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Past</h5>
          <p>
            My journey as a programmer started with a full stack software engineering bootcamp organized by{" "}
            <Link href="https://www.springboard.com/landing/software-engineering-career-track/" text="Springboard" />.
            After graduating, I stuck around as a peer mentor helping students learn the fundamentals of web
            development. I also joined <Link href="https://www.hackforla.org/" text="Hack for LA" /> as a volunteer
            software engineer contributing to open source projects including{" "}
            <Link text="Civic Tech Jobs" href="https://www.hackforla.org/projects/civic-tech-jobs" />, where I learned
            to collaborate with other developers, designers, and project managers.
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
            compete for the highest ROI by depositing ERC-20 tokens into ERC-4626 vaults. Furthermore, I was part of a
            hackathon team that built <Link text="upDev" href="https://updev-v1.vercel.app/" />, a universal profile for
            developers built with LUKSO.
          </p>
        </div>
        <div className="flex-1 mb-5">
          <h5 className="text-3xl font-inter font-bold mb-2">Future</h5>
          <p>
            I am very fortunate that my efforts continue to be rewarded with a stream from BuidlGuidl&apos;s{" "}
            <Link text="Sanctum Cohort" href="https://sanctum.buidlguidl.com/" />. I plan to continue competing in
            hackathons and am very excited to attend my first ETH Denver this year! Additionally, I am working on the
            offical{" "}
            <Link
              href="https://github.com/scaffold-eth/Scaffold-ETH-DeFi-Challenges"
              text="Scaffold Eth Defi Challenges"
            />{" "}
            where we are creating tutorials to help devs learn how to build adaptors that connect ERC-4626 vaults with
            the larger Defi ecosystem.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
