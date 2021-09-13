import "./status.scss";

import Card from "../../components/Card";
import Skill from "../../components/Skill";

import { BASICINFO, SKILLS, LANGUAGE } from "../../data/data";

function Status() {
  return (
    <div className="status">
      <Card title={"STATUS"}>
        <div className="basicInfo">
          <image className="photo" />
          <div className="textContainer">
            {BASICINFO.map((item) => (
              <p>
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
            title={item.title}
            content={item.content}
            icon={item.icon}
          ></Skill>
        ))}
      </Card>

      <Card title={"LICENSES"}>
        {LANGUAGE.map((item) => (
          <Skill
            title={item.title}
            content={item.content}
            icon={item.icon}
          ></Skill>
        ))}
      </Card>
    </div>
  );
}

export default Status;
