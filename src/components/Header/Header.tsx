import styles from "./Header.module.scss";

function Header() {
  const logo = "<davipereira />";

  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header_container_logo}>
          <p>{logo}</p>
        </div>
        <div className={styles.header_container_menu}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Resume</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </>
  );
}

export default Header;
