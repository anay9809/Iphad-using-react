import styles from "./Screen.module.css";

/* 
This is the Games Screen.
*/
function GamesScreen() {
    return (
        <div className={styles.container} >
            <img alt="Games" src="https://cdn-icons-png.flaticon.com/128/686/686589.png"/>
            <h1>Games</h1>
        </div>
    )
}

export default GamesScreen;