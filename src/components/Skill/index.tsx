import { ReactNode } from "react";
import "./skill.scss";

type SkillProps = {
  icon?: ReactNode;
  title: string;
  content?: string;
  link?: string;
  className?: string;
};

function Skill({ icon, title, content, link, className }: SkillProps) {
  return (
    <div className="skill">
      {link && icon ? (
        <a href={link} className="aLink" target="_blank">
          <div className="icon isHover">{icon}</div>
        </a>
      ) : icon ? (
        <div className="icon">{icon}</div>
      ) : null}

      <div className={`container ${className}`}>
        <p className="title">{title}</p>
        {content && <p className="content">{content}</p>}
      </div>
    </div>
  );
}

export default Skill;
