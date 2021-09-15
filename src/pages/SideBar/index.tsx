import "./sideBar.scss";

import { TAB } from "../../App";

type SideBarProps = {
  handleSwitchTab: (tabName: string) => void;
  handleSwitchMenu: (value: boolean) => void;
  tab: string;
  menu: boolean;
};

function SideBar({
  handleSwitchTab,
  handleSwitchMenu,
  tab,
  menu,
}: SideBarProps) {
  const handleClick = (tab: string) => {
    handleSwitchTab(tab);
    handleSwitchMenu(false);
  };

  return (
    <div className={menu ? "spSideBar" : "sideBar"}>
      <div
        onClick={() => handleClick(TAB[0])}
        className={tab === TAB[0] ? "active" : ""}
      >
        Status
      </div>
      <div
        onClick={() => handleClick(TAB[1])}
        className={tab === TAB[1] ? "active" : ""}
      >
        Profile
      </div>
      <div
        onClick={() => handleClick(TAB[2])}
        className={tab === TAB[2] ? "active" : ""}
      >
        Project
      </div>
    </div>
  );
}

export default SideBar;
