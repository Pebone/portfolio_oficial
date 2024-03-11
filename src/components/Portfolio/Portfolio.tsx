import Card from "../Cards/Card";
import foto from "../../assets/foto.jpg"
import styles from "./Portfolio.module.scss"

function Portfolio() {
  return (
    <>
      <div className={styles.portfolio}>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["react", "html", "css"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
        <Card url={foto} alt="foto do projeto" title="Titulo do Projeto" subtitle="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum " technologies={["ovo", "azul"]}/>
      </div>
    </>
  );
}

export default Portfolio;
