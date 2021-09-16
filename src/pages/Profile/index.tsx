import "./profile.scss";

import Card from "../../components/Card";
import TimeLine from "../../components/TimeLine";

import { ABOUT, EXPERIENCE } from "../../data/data";

function Profile() {
  return (
    <div className="profile">
      <Card title={"ABOUT"} className="noMargin">
        {ABOUT}
      </Card>
      <div className="tree">
        {EXPERIENCE.map((item, index) => (
          <TimeLine
            title={item.title}
            content={item.contnet}
            date={item.date}
            index={index + 1}
          />
        ))}
        <div className="link linkAni5" />
      </div>
    </div>
  );
}

export default Profile;
