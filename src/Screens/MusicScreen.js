import styles from "./Screen.module.css";

/* 
This is the Music Screen.
*/
function MusicScreen() {
    return (
        <div className={styles.container} >
            <img alt="Music" src="https://cdn-icons-png.flaticon.com/128/461/461238.png" />
            <h1>Music</h1>
        </div>
    )
}

export default MusicScreen;