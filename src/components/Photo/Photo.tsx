import styles from "./Photo.module.scss"

interface Props {
  url: string;
  alt: string;
}

function Photo({ url, alt }: Props) {
  return (
    <>
      <div className={styles.photo_container}>
        <img src={url} alt={alt}></img>
      </div>
    </>
  );
}

export default Photo;
