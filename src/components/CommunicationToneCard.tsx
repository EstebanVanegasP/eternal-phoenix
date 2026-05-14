type CommunicationToneCardProps = {
  title: string;
  heading: string;
  body: string;
};

export function CommunicationToneCard({
  title,
  heading,
  body,
}: CommunicationToneCardProps) {
  return (
    <article className="tone-card">
      <span>{title}</span>
      <h3>{heading}</h3>
      <p>{body}</p>
    </article>
  );
}
