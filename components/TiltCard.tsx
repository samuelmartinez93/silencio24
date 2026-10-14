import type { CSSProperties, ReactNode } from "react";

export interface TiltCardProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function TiltCard({ className, style, children }: TiltCardProps) {
  return (
    <div
      className={["tilt-card", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
