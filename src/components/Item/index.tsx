import { ReactNode } from "react";
import "./item.scss";

type ItemProps = {
  imageClass: string;
  children: ReactNode;
  link: string;
};

function Item({ imageClass, children, link }: ItemProps) {
  return (
    <div className="projectItem">
      <div className={`image ${imageClass}`}></div>
      <div className="text">
        <a href={link} className="aLink" target="_blank">
          <div className="linkItem">
            <i className="fas fa-link"></i>
          </div>
        </a>

        {children}
      </div>
    </div>
  );
}

export default Item;
