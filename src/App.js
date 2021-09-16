import { useState } from "react";
import "./App.scss";
import useDeviceType from "./helpers/useDeviceType";

import { TAB } from "./data/data";

import SideBar from "./pages/SideBar";
import Status from "./pages/Status";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import NavBar from "./pages/NavBar";
import Loading from "./pages/Loading";

function App() {
  const [tab, setTab] = useState(TAB[0]);
  const [menu, setMenu] = useState(false);

  const isSP = useDeviceType() === "sp";

  const handleSwitchMenu = (value) => {
    setMenu(value);
  };

  const handleSwitchTab = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="App">
      <Loading />
      <SideBar
        handleSwitchTab={handleSwitchTab}
        tab={tab}
        menu={menu}
        handleSwitchMenu={handleSwitchMenu}
      />
      {isSP && <NavBar handleSwitchMenu={handleSwitchMenu} menu={menu} />}
      {tab === TAB[0] && <Status />}
      {tab === TAB[1] && <Profile />}
      {tab === TAB[2] && <Project />}
    </div>
  );
}

export default App;
