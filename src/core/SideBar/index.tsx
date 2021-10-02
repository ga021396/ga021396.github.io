import "./sideBar.scss";

import { TAB } from "../../data/data";

const getTextFromTab: { [key: string]: string } = {
  STATUS: "Status",
  PROFILE: "Profile",
  PROJECT: "Project",
};

type SideBarProps = {
  handleSwitchTab: (tabName: string) => void;
  onClose: () => void;
  tab: string;
  isOpen: boolean;
};

function SideBar({ handleSwitchTab, onClose, tab, isOpen }: SideBarProps) {
  const handleClick = (tab: string) => {
    handleSwitchTab(tab);
    onClose();
  };

  return (
    <div className={isOpen ? "spSideBar" : "sideBar"}>
      {TAB.map((item: string) => (
        <div
          onClick={() => handleClick(item)}
          className={tab === item ? "active" : ""}
          key={item}
        >
          {getTextFromTab[item]}
        </div>
      ))}
    </div>
  );
}

export default SideBar;
