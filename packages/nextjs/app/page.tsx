import type { NextPage } from "next";
import { Achievements, Experience, Landing, Projects, Videos } from "~~/components/buildfolio/";

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <Experience />
      <Videos />
      <Projects />
      <Achievements />
    </>
  );
};

export default Home;
