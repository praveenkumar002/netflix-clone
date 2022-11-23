import styles from "../styles/app.module.css";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
      <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
