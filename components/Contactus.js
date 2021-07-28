import styles from "./Contactus.module.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function aboutus(props) {
  return (
    <div id="contact" className={styles.contactus}>
      <Player
      style={{height:"213px",width:"300px"}}
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_GEq4DV.json"
      />
      <div className={styles.contactus_card}>
        <ContactIcon
          icon={
            <MailOutlineIcon style={{ fontSize: "40px", color: "#c70ded" }} />
          }
          href="mailto:citdevelopers2019@gmail.com"
          text="Mail us"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <ContactIcon
          icon={
            <GitHubIcon style={{ fontSize: "40px", color: "#c70ded" }} />
          }
          href="https://github.com/cit-developers"
          text="Join us"
        />
        <ContactIcon
          icon={
            <MailOutlineIcon style={{ fontSize: "40px", color: "#c70ded" }} />
          }
          href="mailto:bharathisethu018@gmail.com"
          text="Mail us"
        />
        </div>
        <ContactIcon
          icon={
            <MailOutlineIcon style={{ fontSize: "40px", color: "#c70ded" }} />
          }
          href="mailto:bharathisethu018@gmail.com"
          text="Mail us"
        />
      </div>
    </div>
  );
}
const ContactIcon = (props) => (
  <Link href={props.href}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {props.icon}
      <p>{props.text}</p>
    </div>
  </Link>
);
