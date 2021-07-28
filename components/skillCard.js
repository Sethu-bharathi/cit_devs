import styles from "./Navigator.module.css";
import Image from "next/image";


function skillCard(props) {
  return (
    <div  className={styles.picholder} style={props.styl}>
      <Image className={styles.card}
        alt="Flutter"
        src={props.src}
        width={props.width}
        height={props.height}
        quality={30}
      />
    </div>
  );
}

export default skillCard;
// logan-https://www.linkedin.com/in/logan05012001

