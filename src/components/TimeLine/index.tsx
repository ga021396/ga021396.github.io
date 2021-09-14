import Skill from "../Skill";

import "./timeline.scss";

type TimeLineProps = {
  title: string;
  content: string;
  date: string;
  index: number;
};

function TimeLine({ title, content, index, date }: TimeLineProps) {
  return (
    <>
      <div className={`link linkAni${index}`} />
      <div className={`dot dotAni${index}`} />
      <Skill
        className={`itemRight itemRightAni${index}`}
        title={title}
        content={content}
      ></Skill>
      <div className={`itemLeft itemLeftAni${index}`}>{date}</div>
    </>
  );
}

export default TimeLine;
