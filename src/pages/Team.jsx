import styles from '../styles/Team.module.css'
import TeamCard from '../components/TeamCard';
const Team = ()=>{
    return(
        <> 
            <div className={styles.mainContainer}>    
               <h1>Team</h1>
               <div className={styles.members}>
                    <TeamCard />
               </div>
            </div>
        </>
    )
}
export default Team;