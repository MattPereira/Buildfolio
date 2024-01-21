import Image from "next/image";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio";

const experiences = [
  {
    id: 2,
    title: "On Chain Developer",
    image: "/buidlguidl.svg",
    description: (
      <>
        Building decentralized applications with Scaffold ETH including Speedrun Chainlink, Vaults of Fortune, and
        upDev. Currently, a member of the Sanctum Cohort stream working on building Defi Challenges teach developers how
        to integrate with protocols including Sommolier, Yearn, and Chainlink.
      </>
    ),
  },
  {
    id: 1,
    title: "Full Stack Web Developer",
    image: "/hfla.png",
    description: (
      <>
        Volunteered as a software engineer contributing to open source projects including Civic Tech Jobs and the
        Volunteer Relationship Management System. Collaborated with other developers, designers, and project managers to
        serve the greater Los Angeles community.
      </>
    ),
  },

  {
    id: 3,
    title: "Peer Mentor",
    image: "/springboard.png",
    description: (
      <>
        After earning a full stack software engineering bootcamp certification from Springboard, I volunteered as a peer
        mentor helping students overcome obstacles and learn the fundamentals of web development. Additionally, I helped
        facilitate technical interview practice sessions.
      </>
    ),
  },
];

export function Experience() {
  return (
    <SectionContainer bgcolor="">
      <SectionHeader title="Experience" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {experiences.map(exp => (
          <div key={exp.id} className="flex-1 mb-5 border border-base-content rounded-xl bg-base-100 w-full">
            <div className="bg-white border-base-content border-b p-10 h-48 flex items-center justify-center rounded-xl overflow-hidden">
              <Image
                width={400}
                height={400}
                style={{ width: "auto", height: "auto" }}
                src={exp.image}
                alt={exp.title}
              />
            </div>
            <div className="p-5">
              <h5 className="text-2xl font-inter font-bold mb-2">{exp.title}</h5>
              <p className="text-xl">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
