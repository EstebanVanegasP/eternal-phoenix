import {
  Crown,
  Flame,
  HeartHandshake,
  LockKeyhole,
  LucideIcon,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  crown: Crown,
  flame: Flame,
  heart: HeartHandshake,
  lock: LockKeyhole,
  shield: ShieldCheck,
  sparkles: Sparkles,
  trending: TrendingUp,
  users: UsersRound,
};

type IconProps = {
  name: string;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export function Icon({ name, className, ...props }: IconProps) {
  const Component = iconMap[name] ?? Flame;

  return <Component className={className} strokeWidth={1.7} {...props} />;
}
