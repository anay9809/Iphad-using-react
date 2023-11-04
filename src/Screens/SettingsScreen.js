import styles from "./Screen.module.css";

/* 
This is the Settings Screen.
*/
function SettingsScreen() {
    return (
        <div className={styles.container} >
            <img alt="Settings" src="https://cdn-icons-png.flaticon.com/128/900/900797.png"/>
            <h1>Settings</h1>
        </div>
    )
}

export default SettingsScreen;