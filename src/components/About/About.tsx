import Button from "../Button/Button";
import Medium_Item from "../Medium_Item/Medium_Item";
import Photo from "../Photo/Photo";
import code from "../../assets/code-solid.svg";
import desktop from "../../assets/desktop-solid.svg";
import coffee from "../../assets/mug-hot-solid.svg";
import styles from "./About.module.scss";
import pdf from "../../assets/file-pdf-solid.svg";

function About() {
  return (
    <>
      <div className={styles.about}>
        <Photo url="src\assets\foto.jpg" alt="Davi Pereira" />

        <div className={styles.about_container}>
          <div className={styles.about_container_items}>
            <Medium_Item
              url={code}
              alt="code"
              subtitle="2+ Years of Experience"
            />
            <Medium_Item
              url={desktop}
              alt="projects"
              subtitle="30+ Completed Projects"
            />
            <Medium_Item url={coffee} alt="coffee" subtitle="50+ Coffee Mugs" />
          </div>
          <p>
            Olá, meu nome é Davi, tenho 23 anos, e sou apaixonado pela área de
            Desenvolvimento Front-End. Sou formado em Ciência da Computação pela
            Universidade de Fortaleza (Unifor). Gosto muito de trabalhar em
            equipe, aprender novas tecnologias e aplicar minha paixão por
            Desenvolvimento Web em projetos desafiadores. Além disso, acho muito
            interessante ensinar sobre o que eu amo fazer, pois o conhecimento
            se torna mais sólido quando você passa ao próximo.
          </p>
          <Button title="Baixar Currículo" url={pdf} />
        </div>
      </div>
    </>
  );
}

export default About;
