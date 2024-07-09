import styles from '../styles/Team.module.css'
const Team = ()=>{
    return(
        <>
            <div className={styles.backgroundSection}>
                    <img src="/images/gray-block-structure.jpg" alt="Background-Image"/>
            </div>
        
            <div className={styles.mainContainer}> 
                <div className={styles.ceoDiv}>
                    <div className={styles.ceoImg}></div>
                    <div className={styles.ceodetails}></div>
                </div>
                <h1>Team</h1>
            </div>
        </>
    )
}
export default Team;