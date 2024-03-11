import styles from "./Small_Item.module.scss";

interface Props {
  url: string;
  alt: string;
}

function Small_Item({ url, alt }: Props) {
  return (
    <>
      <div className={styles.item_container}>
        <div className={styles.item_container_items}>
          <img src={url} alt={alt}></img>
        </div>
      </div>
    </>
  );
}

export default Small_Item;
