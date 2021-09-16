import "./sideBar.scss";

import { TAB } from "../../data/data";

const getTextFromTab: { [key: string]: string } = {
  STATUS: "Status",
  PROFILE: "Profile",
  PROJECT: "Project",
};

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
      {TAB.map((item: string) => (
        <div
          onClick={() => handleClick(item)}
          className={tab === item ? "active" : ""}
        >
          {getTextFromTab[item]}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
