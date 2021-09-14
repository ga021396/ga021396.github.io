import { useState } from "react";
import "./App.scss";

import SideBar from "./pages/SideBar";
import Status from "./pages/Status";
import Profile from "./pages/Profile";

export const TAB = ["STATUS", "PROFILE", "PROJECT"];

function App() {
  const [tab, setTab] = useState(TAB[0]);

  const handleSwitchTab = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="App">
      <SideBar handleSwitchTab={handleSwitchTab} tab={tab}></SideBar>
      {tab === TAB[0] && <Status></Status>}
      {tab === TAB[1] && <Profile></Profile>}
    </div>
  );
}

export default App;
