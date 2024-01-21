import type { NextPage } from "next";
import { About, Achievements, Experience, Landing, Projects } from "~~/components/buildfolio/sections";

// export const getServerSideProps = async () => {
//   const nftResponse = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-nfts`);
//   // console.log("nftResponse", nftResponse);
//   const nfts = await nftResponse.json();
//   // console.log("nfts", nfts);
//   return { props: { nfts: nfts.data } };
// };

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Experience />
      <Achievements />
    </>
  );
};

export default Home;
