import styles from "./Home.module.scss";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import react from "../../assets/react.svg";
import css from "../../assets/css3-alt.svg";
import html from "../../assets/html5.svg";
import Photo from "../Photo/Photo";
import Item from "../Small_Item/Small_Item";

function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.home_container}>
          <div className={styles.home_container_welcome}>
            <p>Welcome!</p>
            <h1>
              Hi, I'm <span>Davi Pereira a</span>, Web Developer
            </h1>
          </div>
          <div>
            <Photo url="src\assets\foto.jpg" alt="Davi Pereira" />
          </div>
        </div>
        <div className={styles.home_container_item}>
          <div className={styles.home_container_items}>
            <p>Social Media:</p>
            <div className={styles.home_container_items_section}>
              <Item url={instagram} alt="instagram"></Item>
              <Item url={github} alt="github"></Item>
              <Item url={linkedin} alt="linkedin"></Item>
            </div>
          </div>
          <div className={styles.home_container_items}>
            <p>Best Skills:</p>
            <div className={styles.home_container_items_section}>
              <Item url={react} alt="react"></Item>
              <Item url={css} alt="css"></Item>
              <Item url={html} alt="html"></Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
