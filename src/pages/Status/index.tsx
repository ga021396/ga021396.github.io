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

      <Card title={"SKILLS"} className="cardAnime1">
        {SKILLS.map((item) => (
          <Skill
            key={item.title}
            title={item.title}
            content={item.content}
            icon={item.icon}
          ></Skill>
        ))}
      </Card>

      <Card title={"CERTIFICATE"} className="cardAnime2">
        {LANGUAGE.map((item) => (
          <Skill title={item.title} content={item.content}></Skill>
        ))}
      </Card>

      <Card title={"CONTACT"} className="cardAnime3">
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
