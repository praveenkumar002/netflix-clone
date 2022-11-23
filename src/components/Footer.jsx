import fblogo from "../icons/facebook.png"
import instalogo from "../icons/instagram.png"
import twitterlogo from "../icons/twitter.png"
import linklogo from "../icons/linkedin.png"

import styles from "../styles/footer.module.css"
function Footer()
{
    return(
        <div className={styles.footer}>
            <p className={styles.footerpara}>&copy; 2022 Praveen. All Right Reserved</p>
            <ul className={styles.footerulist}>
                <li><a href="https://www.facebook.com/gpraveenkumar.praveen.10/" target="blank"><img src={fblogo} alt="facebook" className={styles.footerulistitem}/></a></li>
                <li><a href="https://www.instagram.com/praveen_ruhig/" target="blank"><img src={instalogo} alt="instagram" className={styles.footerulistitem}/></a></li>
                <li><a href="https://twitter.com/praveengovind76" target="blank"><img src={twitterlogo} alt="twitter" className={styles.footerulistitem}/></a></li>
                <li><a href="https://www.linkedin.com/in/praveen-kumar-g-0b00881ba/" target="blank"><img src={linklogo} alt="linkedin" className={styles.footerulistitem}/></a></li>
            </ul>
        </div>
    )
}

export default Footer;