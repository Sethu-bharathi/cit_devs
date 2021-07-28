import { Player} from '@lottiefiles/react-lottie-player';
import styles from "./Navigator.module.css"

function Mission(){
  
    return (
        <section className={styles.mission_section}>
           <header className={styles.mission_sectionheader_left}>What we do ?</header>
           <div className={styles.mission_1}>
                <Player className={styles.m1_img} autoplay loop src="https://assets8.lottiefiles.com/private_files/lf30_4y2cuiyr.json" style={{ height: '300px', width: '300px' }}></Player>
                <p>We Eat, Sleep, Code and Repeat.We love to code and explore new tech stacks everyday.We create cool projects and work as a team. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt iure quaerat aliquid hic iusto deserunt ad quod nemo alias?</p>
            </div>
           
            <header className={styles.mission_sectionheader_right}>{" "}Why we do ?</header>
           <div className={styles.mission_2}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sed dignissimos, tempora animi iusto deserunt voluptatibus quas dolorum accusamus, consequatur quos amet nesciunt, ipsa dolores quis exercitationem consectetur maiores dolor. Distinctio eligendi expedita neque unde possimus id ea, autem illo?</p>
                <Player className={styles.m1_img} autoplay loop src="https://assets8.lottiefiles.com/private_files/lf30_wqypnpu5.json" style={{ height: '300px', width: '300px' }}></Player>
            </div>
           
        </section>
    )
}

export default Mission;