import styles from "./home.module.css";
import Navigator from "../components/Navigator.js";
import SkillCard from "../components/skillCard";
import { Player } from "@lottiefiles/react-lottie-player";
import { DeveloperBoard } from "@material-ui/icons";
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.top}>
          <Navigator
            href="https://www.w3schools.com/bootstrap4/bootstrap_get_started.asp"
          />
        </div>
        <div style={{height:"80px"}}></div>
        <div className={styles.bottom_container}>
          <div className={styles.topic}>
            <h1 className={styles.heading} style={{ paddingLeft: "50px" }}>
              CIT Developers
            </h1>
            <h1 className={styles.heading} style={{ textAlign: "center" }}>
              Community
            </h1>
            <div style={{ height: "70px",Color:"white",paddingTop:"20px" }}>
            <Typewriter
             options={{
               strings: ["We develop projects","We teach technologies"],
               autoStart: true,
               loop: true,
               skipAddStyles:true,
               delay:150,
               wrapperClassName:styles.pink,
               cursor:" |",
               cursorClassName:styles.p,
             }}
           />
             </div>
            <p className={styles.p}>
              {" "}
              Ever tried !!!  Ever failed No matter, Try again !!  Fail again, Fail
              better{" "}
            </p>
          </div>

          <div className={styles.skillholder}>
            <SkillCard
              src="/react.png"
              styl={{ position: "relative", left: "20px" }}
              height={100}
              width={100}
            />
            <SkillCard
              styl={{ position: "relative", right: "70px" }}
              src="/flutter.png"
              height={90}
              width={90}
            />
            <SkillCard
              styl={{ position: "relative", left: "80px" }}
              src="/angular.jpg"
              height={60}
              width={60}
            />
            <SkillCard
              styl={{ position: "relative", right: "40px" }}
              src="/vue.png"
              height={50}
              width={50}
            />
            <SkillCard
              styl={{ position: "relative", right: "0px" }}
              src="/firebase.png"
              height={40}
              width={40}
            />
            <Player
              style={{ position: "relative", left: "10px",height:"320px" }}
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_4qiecwbu.json"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
