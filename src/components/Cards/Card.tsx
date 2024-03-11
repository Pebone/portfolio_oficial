import styles from "./Card.module.scss";

interface Props {
  url: string;
  alt: string;
  title: string;
  subtitle: string;
  technologies: string[];
}

function Card({ url, alt, title, subtitle, technologies }: Props) {
  const techs = [...technologies];

  return (
    <>
      <div className={styles.card_container}>
        <img src={url} alt={alt}/>
        <div>
          {techs.map((tech) => (
            <div className={tech.includes("react") ? styles.card_container_react : tech.includes("css") ? styles.card_container_css : tech.includes("html") ? styles.card_container_html: tech.includes("jquery") ? styles.card_container_jquery : styles.card_container_padrao}>{tech}</div>
          ))}
        </div>
        <div>{title}</div>
        {subtitle}
      </div>
    </>
  );
}

export default Card;
