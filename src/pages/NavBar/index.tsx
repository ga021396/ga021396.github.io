import "./navbar.scss";

type NavBarProp = {
  handleSwitchMenu: (value: boolean) => void;
  menu: boolean;
};

function NavBar({ handleSwitchMenu, menu }: NavBarProp) {
  const handleSwitch = () => {
    if (menu) handleSwitchMenu(false);
    else handleSwitchMenu(true);
  };

  return (
    <div
      className={menu ? "isMenuOpen navBar" : "navBar"}
      onClick={handleSwitch}
    >
      {menu ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-bars"></i>
      )}
    </div>
  );
}

export default NavBar;
