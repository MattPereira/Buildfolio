interface ISectionHeader {
  title: string;
}

export function SectionHeader({ title }: ISectionHeader) {
  return (
    <div className="flex justify-center">
      <h2
        id={title}
        className={`border border-base-content font-cubano text-5xl md:text-5xl text-center mb-14 w-full rounded-2xl pt-2 pb-3`}
      >
        {title}
      </h2>
    </div>
  );
}
