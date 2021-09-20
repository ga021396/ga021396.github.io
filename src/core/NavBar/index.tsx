import "./navbar.scss";

type NavBarProp = {
  onToggle: () => void;
  isOpen: boolean;
};

function NavBar({ onToggle, isOpen }: NavBarProp) {
  return (
    <div className={isOpen ? "isMenuOpen navBar" : "navBar"} onClick={onToggle}>
      {isOpen ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-bars"></i>
      )}
    </div>
  );
}

export default NavBar;
