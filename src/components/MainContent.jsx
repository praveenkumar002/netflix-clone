import styles from "../styles/maincontent.module.css"
import mainimagecontent from "../images/main-movie-title.png"
function MainContent()
{
    return(
        <>
        <div className={styles.maincontainer}>

            <img className={styles.mainimage} src={mainimagecontent} alt="main image" />
            <h1 className={styles.maincontenthead}>The Crown</h1>
            <ul className={styles.maincontentulist}>
                <li className={styles.maincontentulistitem}>2016</li>
                <li className={styles.maincontentulistitem}>|</li>
                <li className={styles.maincontentulistitem}>4 Seasons</li>
                <li className={styles.maincontentulistitem}>|</li>
                <li className={styles.maincontentulistitem}>TV Dramas</li>
            </ul>
            <p className={styles.maincontentpara}>Inspired by real events, this fictional dramatization tells the story of Queen Elizabeth II and the political and personal events that shaped her reign.</p>

        </div>
        </>
    )
}

export default MainContent;