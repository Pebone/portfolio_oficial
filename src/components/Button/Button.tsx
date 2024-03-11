import styles from "./Button.module.scss";

interface Props {
  title: string;
  url: string;
}

function Button({ title, url }: Props) {
  return (
    <>
      <button className={styles.button}>
        {title}
        <img src={url}></img>
      </button>
    </>
  );
}

export default Button;
