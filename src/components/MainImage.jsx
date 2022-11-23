import mainimage from "../images/movie-screen.jpg"
import styles from "../styles/mainimage.module.css"
function MainImage()
{
    return(
        <img className={styles.mainimage} src={mainimage} alt="main image" />
    )
}
export default MainImage;
