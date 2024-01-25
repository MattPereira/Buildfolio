interface ILink {
  href: string;
  text: string;
}

export function Link({ href, text }: ILink) {
  return (
    <a className="text-accent font-semibold underline" href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}
