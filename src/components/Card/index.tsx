import { ReactNode } from "react";
import "./card.scss";

type CardProps = {
  title: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <div className="header">{title}</div>
      {children}
    </div>
  );
}

export default Card;
