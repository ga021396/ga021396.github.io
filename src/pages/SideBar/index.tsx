import "./sideBar.scss";

import { TAB } from "../../App";

type SideBarProps = {
  handleSwitchTab: (tabName: string) => void;
  tab: string;
};

function SideBar({ handleSwitchTab, tab }: SideBarProps) {
  return (
    <div className="sideBar">
      <div
        onClick={() => handleSwitchTab(TAB[0])}
        className={tab === TAB[0] ? "active" : ""}
      >
        Status
      </div>
      <div
        onClick={() => handleSwitchTab(TAB[1])}
        className={tab === TAB[1] ? "active" : ""}
      >
        Profile
      </div>
      <div
        onClick={() => handleSwitchTab(TAB[2])}
        className={tab === TAB[2] ? "active" : ""}
      >
        Project
      </div>
    </div>
  );
}

export default SideBar;
