import { TAB } from "../../data/data";

import Status from "../../pages/Status";
import Profile from "../../pages/Profile";
import Project from "../../pages/Project";

type ContentProps = {
  tab: string;
};

function Content({ tab }: ContentProps) {
  return (
    <>
      {tab === TAB[0] && <Status />}
      {tab === TAB[1] && <Profile />}
      {tab === TAB[2] && <Project />}
    </>
  );
}

export default Content;
