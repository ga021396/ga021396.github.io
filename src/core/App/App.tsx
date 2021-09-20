import { useState } from "react";
import "./App.scss";

import useDeviceType from "../../helpers/useDeviceType";
import useDialog from "../../helpers/useDialog";

import { TAB } from "../../data/data";

import SideBar from "../SideBar";
import NavBar from "../NavBar";
import Loading from "../Loading";
import Content from "../Content";

function App() {
  const [tab, setTab] = useState(TAB[0]);

  const { isOpen, onToggle, onClose } = useDialog(false);
  const isSP = useDeviceType() === "sp";

  const handleSwitchTab = (tabName: string) => {
    setTab(tabName);
  };

  return (
    <div className="App">
      <Loading />
      <SideBar
        handleSwitchTab={handleSwitchTab}
        tab={tab}
        isOpen={isOpen}
        onClose={onClose}
      />
      {isSP && <NavBar onToggle={onToggle} isOpen={isOpen} />}
      <Content tab={tab} />
    </div>
  );
}

export default App;
