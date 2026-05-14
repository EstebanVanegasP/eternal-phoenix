import { Icon } from "./icons";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="icon-orb">
        <Icon name={icon} aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
