import styles from '../styles/Team.module.css'
import TeamCard from '../components/TeamCard';
const Team = ()=>{
    return(
        <> 
            <div className={styles.mainContainer}> 
                <h3 className={styles.heading}>Team</h3>
                <div className={styles.description}>
                Meet the visionary minds behind <b>Architecture Lifeline</b>. Our team of experienced architects, designers, and planners is dedicated to turning your dreams into reality.<br/>
                </div>    
               <div className={styles.members}>
                    <TeamCard />
               </div>
            </div>
        </>
    )
}
export default Team;