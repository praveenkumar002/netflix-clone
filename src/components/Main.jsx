import MainContent from "./MainContent";
import MainImage from "./MainImage";
import MainComponent from "./MainComponent";

import styles from "../styles/main.module.css";

function Main() {
  return (
    <>
    <div className={styles.maincontent}>
      <MainContent />
      <MainImage />
    </div>

    <div className={styles.maincomponent}>
      <MainComponent />
      <MainComponent />
      <MainComponent />
      <MainComponent />
    </div>

    <hr className={styles.mainhr}/>
    </>
  );
}

export default Main;
