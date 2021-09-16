import React, { useState, useEffect, useContext } from "react";

const DeviceTypeContest = React.createContext("sp");

function useDeviceType() {
  const ssrDeviceType = useContext(DeviceTypeContest);
  const [deviceType, setDeviceType] = useState(ssrDeviceType || "sp");

  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQueryTL = window.matchMedia("(max-width: 1024px)");
    const mediaQuerySP = window.matchMedia("(max-width: 743px)");

    function updateMediaQuery() {
      if (mediaQuerySP.matches) {
        setDeviceType("sp");
      } else if (mediaQueryTL.matches) {
        setDeviceType("tl");
      } else {
        setDeviceType("pc");
      }
    }

    updateMediaQuery();

    mediaQueryTL.addListener(updateMediaQuery);
    mediaQuerySP.addListener(updateMediaQuery);

    return () => {
      mediaQueryTL.removeListener(updateMediaQuery);
      mediaQuerySP.removeListener(updateMediaQuery);
    };
  }, []);

  return deviceType;
}

export default useDeviceType;
