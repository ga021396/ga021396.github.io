import { ReactNode } from "react";
import "./skill.scss";

type SkillProps = {
  icon: ReactNode;
  title: string;
  content?: string;
};

function Skill({ icon, title, content }: SkillProps) {
  return (
    <div className="skill">
      <div className="icon">{icon}</div>
      <div className="container">
        <p className="title">{title}</p>
        {content && <p className="content">{content}</p>}
      </div>
    </div>
  );
}

export default Skill;
