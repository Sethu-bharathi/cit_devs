import styles from "./aboutus.module.css";
import Image from "next/image";
import { GitHub } from "@material-ui/icons";

export default function aboutUs(params) {
  return (
    <div id="developers" className={styles.aboutus_container}>
      <Founders
        image="/naveenkumar.jpg"
        name="Naveenkumar M"
        dept="Computer Science and Engineering"
        github="https://github.com/NaveenkumarMD"
      />
      <Founders
        image="/sethubharathi.png"
        name="Sethubharathi B"
        dept="Computer Science and Engineering"
        github="https://github.com/Sethu-bharathi"
      />
      <Founders
        image="/logan.jpeg"
        name="Loganathan D"
        dept="Computer Science and Engineering"
        github="https://www.aedin.com/in/logan05012001"
      />
      <Founders
        image="/vijayshanmugan.jpg"
        name="Vijayshanmugan s"
        dept="Computer Science and Engineering"
        github="https://github.com/VijayShanmugan"
      />
      <Founders
        image="/santhosh.jpg"
        name="Santhosh s"
        dept="Computer Science and Engineering"
        github="https://santhoshm.netlify.app/"
      />
      <Founders
        image="/Aakash.jpeg"
        name="Aakash "
        dept="Computer Science and Engineering"
        github="https://github.com/Aakash-2000"
      />
      <Founders
        image="/prem.jpeg"
        name="Premkumar "
        dept="Computer Science and Engineering"
        github="
      https://www.linkedin.com/in/prem-b-658354196"
      />
      <Founders
        image="/ranjith.jpg"
        name="Ranjith "
        dept="Computer Science and Engineering"
        github="https://github.com/Randy-001/Randy-001"
      />
      <Founders
        image="/gokul.jpeg"
        name="Gokul Raj "
        dept="Computer Science and Engineering"
        github="https://github.com/GokulrajVelmurugan"
      />
      <Founders
        image="/bajra.jpeg"
        name="Vaibhav Bajra"
        dept="Computer Science and Engineering"
        github="https://github.com/bajra6"
      />
    </div>
  );
}

const Founders = (props) => (
  <div className={styles.founderbox}>
    <div className={styles.founderboxdiv}>
      <div
        style={{
          height: "150px",
          width: "150px",
          borderRadius: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          height={150}
          width={150}
          objectFit="contain"
          quality={20}
          src={props.image}
        />
      </div>
    </div>
    <a href={props.github} target="_blank">
      <div className={styles.icons}>
        <GitHub style={{ fontSize: "30px" }} />
      </div>
    </a>
    <div className={styles.backgroundwhite}></div>
    <p>{props.name}</p>
    <p>{props.dept}</p>
  </div>
);
