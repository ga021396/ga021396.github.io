import "./project.scss";
import Item from "../../components/Item";
import { PROJECTS } from "../../data/data";

function Project() {
  return (
    <div className="project">
      {PROJECTS.map((item, index) => (
        <Item imageClass={`image${index + 1}`} link={item.link}>
          <p className="title">{item.title}</p>
          <p className="content">{item.content}</p>
        </Item>
      ))}
    </div>
  );
}

export default Project;
