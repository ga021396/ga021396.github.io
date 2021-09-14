import { ReactNode } from "react";
import "./card.scss";

type CardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

function Card({ title, children, className }: CardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="header">{title}</div>
      {children}
    </div>
  );
}

export default Card;
