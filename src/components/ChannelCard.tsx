type ChannelCardProps = {
  title: string;
  description: string;
};

export function ChannelCard({ title, description }: ChannelCardProps) {
  return (
    <article className="channel-card">
      <span>#</span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
