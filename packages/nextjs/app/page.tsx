import type { NextPage } from "next";
import { Achievements, Experience, Landing, Projects } from "~~/components/buildfolio/";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <Experience />
      <Projects />
      <Achievements />
    </>
  );
};

export default Home;
