import Image from "next/image";
import { experienceItems } from "~~/buildfolio.config";
import { SectionContainer, SectionHeader } from "~~/components/buildfolio";

export function Experience() {
  return (
    <SectionContainer bgcolor="">
      <SectionHeader title="Experience" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {experienceItems.map((exp, idx) => (
          <div key={idx} className="flex-1 mb-5 border border-base-content rounded-xl bg-base-100 w-full">
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
