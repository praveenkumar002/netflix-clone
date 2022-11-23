import logo from "../images/netflixlogo.jpg";
import profile from "../icons/profile.png";
import styles from "../styles/header.module.css";


export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul className={styles.ulist}>
        <li className={styles.listitem}>
          <img src={profile} alt="profile" className={styles.listitemprofile} />
        </li>
        <li className={styles.listitem}>Guest</li>
      </ul>
    </div>
  );
}
