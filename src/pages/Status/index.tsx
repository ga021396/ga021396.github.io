import "./status.scss";

import Card from "../../components/Card";
import Skill from "../../components/Skill";

import { BASICINFO, SKILLS, LANGUAGE, CONTACT } from "../../data/data";

function Status() {
  return (
    <div className="status">
      <Card title={"STATUS"}>
        <div className="basicInfo">
          <div className="photo" />
          <div className="textContainer">
            {BASICINFO.map((item) => (
              <p key={item.title}>
                <span>{item.title}:</span>
                <span>{item.content}</span>
              </p>
            ))}
          </div>
        </div>
      </Card>

      <Card title={"SKILLS"}>
        {SKILLS.map((item) => (
          <Skill
            key={item.title}
            title={item.title}
            content={item.content}
            icon={item.icon}
          ></Skill>
        ))}
      </Card>

      <Card title={"LICENSE"}>
        {LANGUAGE.map((item) => (
          <Skill title={item.title} content={item.content}></Skill>
        ))}
      </Card>

      <Card title={"CONTACT"}>
        {CONTACT.map((item) => (
          <Skill
            key={item.title}
            title={item.title}
            content={item.content}
            icon={item.icon}
            link={item.link}
          ></Skill>
        ))}
      </Card>
    </div>
  );
}

export default Status;
