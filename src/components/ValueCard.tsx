import { Icon } from "./icons";

type ValueCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <article className="value-card">
      <Icon name={icon} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
