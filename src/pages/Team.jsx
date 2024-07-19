import styles from '../styles/Team.module.css'
import TeamCard from '../components/TeamCard';
import TeamMemberCard from '../components/TeamMemberCard';
const Team = ()=>{
    return(
        <> 
            <div className={styles.mainContainer}> 
                <div className={styles.description}>
                    "A successful team is a group of many hands but of one mind."
                     <div>– Bill Bethel</div>
                </div>    
               <div className={styles.members}>
                    {/* <TeamCard /> */}
                    <TeamMemberCard/>
               </div>
            </div>
        </>
    )
}
export default Team;