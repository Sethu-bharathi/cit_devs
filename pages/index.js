import Home from "../components/home.js";
import Contact from "../components/Contactus";
import About from "../components/About";
import Missions from "../components/Mission";
import styles from "../styles/Home.module.css"

export default function HomePage() {
  return (
    <div className={styles.section}>
        <Home />
        <Missions />
        <About />
        <Contact />
    </div>
  );
}
