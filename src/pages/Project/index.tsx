import "./project.scss";
import Item from "../../components/Item";

function Project() {
  return (
    <div className="project">
      <Item imageClass="image1" link="https://ga021396.github.io/mota-bro-ver/">
        <p className="title">MOTA-BOR-VER</p>
        <p className="content">
          this is alter from the classic flash game "MOTA", made for Twitch
          streamer
          <a
            href="https://www.youtube.com/watch?v=O0zQ-b1v4Sc&ab_channel=%E7%9F%AD%E6%9A%AB%E5%AD%98%E6%94%BE"
            className="aLink"
            target="_blank"
          >
            "sam1268"
          </a>
          , "butterflyouo".
        </p>
      </Item>

      <Item
        imageClass="image4"
        link="https://ga021396.github.io/Vue-AnimeFilter/"
      >
        <p className="title">ANIME-FILTER</p>
        <p className="content">this is my first project to practice Vue.js.</p>
      </Item>

      <Item imageClass="image2" link="https://ga021396.github.io/magic-pants/">
        <p className="title">MAGIC-PANTS</p>
        <p className="content">
          this is a memory game made for Twitch streamer "bbbb87".
        </p>
      </Item>

      <Item imageClass="image3" link="https://ga021396.github.io/steamer-test/">
        <p className="title">STREAMER-TEST</p>
        <p className="content">
          this is a psychological test made for Twitch streamer "sam1268".
        </p>
      </Item>
    </div>
  );
}

export default Project;
