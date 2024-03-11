import styles from "./Medium_Item.module.scss";

interface Props {
  url: string;
  alt: string;
  subtitle: string;
}

function Medium_Item({ url, alt, subtitle }: Props) {
  return (
    <>
      <div className={styles.medium_item_container_items}>
        <img src={url} alt={alt}></img>
        {subtitle}
      </div>
    </>
  );
}

export default Medium_Item;
