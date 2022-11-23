import styles from "../styles/maincomponent.module.css";

import movie1 from "../images/movie-component-1.jpg";

function MainComponent() {
  return (
    <>

        <div className={styles.mainchild}>
          <img src={movie1} alt="movie1"  className={styles.mainchildmovieimage}/>
          <ul className={styles.mainchildulist}>
            <li><h4>1. Wolferton Splash</h4></li>
            <li>57m</li>
          </ul>
          <p className={styles.mainchildpara}>A young Princess Elizabeth marries Prince Philip. As King George VI’s health worsens, Winston Churchill is elected prime minister for the second time.</p>
        </div>

    </>
  );
}

export default MainComponent;
