interface ISectionContainer {
  children: React.ReactNode;
  bgcolor?: string;
}

export function SectionContainer({ children, bgcolor }: ISectionContainer) {
  return (
    <section className={`py-16 ${bgcolor}  border-t border-base-content`}>
      <div className="container mx-auto px-5 md:px-0">{children}</div>
    </section>
  );
}
