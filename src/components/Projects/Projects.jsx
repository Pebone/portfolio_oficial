import Card_Projects from "./Cards_Projects/Card_Projects";
import styles from "./Projects.module.scss";
import Meteora from "../../assets/meteora.jpg";
import Nlw_expert from "../../assets/nlw-expert.jpg"

function Projects() {
  return (
    <section id="projects" className={styles.portfolio}>
      <div className={styles.title}>
        <p className={styles.title_name}>Portfolio</p>
        <div className={styles.title_subtitle_div}>
          <p className={styles.title_subtitle}>MY</p>
          <p className={styles.title_subtitle_highlight}>Projects</p>
        </div>
      </div>
      <div className={styles.cards}>
        <Card_Projects
          url={Meteora}
          project_type="Website"
          project_name="Meteora"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
        <Card_Projects
          url={Nlw_expert}
          project_type="Website"
          project_name="Nlw-Expert"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
        <Card_Projects
          url={Meteora}
          project_type="Website"
          project_name="Meteora"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
        <Card_Projects
          url={Meteora}
          project_type="Website"
          project_name="Meteora"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
        <Card_Projects
          url={Meteora}
          project_type="Website"
          project_name="Meteora"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
        <Card_Projects
          url={Meteora}
          project_type="Website"
          project_name="Meteora"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
        <Card_Projects
          url={Meteora}
          project_type="Website"
          project_name="Meteora"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
        <Card_Projects
          url={Meteora}
          project_type="Website"
          project_name="Meteora"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores praesentium itaque voluptate commodi, ipsum consequatur ducimus consectetur aperiam in nostrum eius ex molestiae fugiat rem hic cum exercitationem ratione."
        ></Card_Projects>
      </div>
    </section>
  );
}

export default Projects;
