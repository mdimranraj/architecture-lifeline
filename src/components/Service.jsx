
import styles from "../styles/Service.module.css"
const Service = ({data})=>{
    

    return(
        <div className={styles.mainContainer}>
            {/* modal  */}
            <div className="modal fade" id={"exampleModal"+data.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={styles.modal + " modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"}>
                <div className="modal-content">
                <div className={styles.modalHeader + " modal-header"}>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{data.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className={styles.modalBody + " modal-body"}>
                    {data.exampleImg.length !== 0 ?data.exampleImg.map((img,index)=>{
                        return <img className={styles.exampleImg} key={index} src={img} alt={data.title}></img>
                    }):<div><img className={styles.sorryImg} src="./images/sorry.png" alt="sorry"/><div className={styles.sorryText}>We'll add it soon...</div></div>}
                </div>
                <div className={styles.modalFooter + " modal-footer"}>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>


            <div className={styles.imageDiv}>
                <img src={data.iconImg} alt={data.title} />
            </div>
            <div className={styles.title}>
                {data.title}
            </div>
            <div className={styles.description}>
                <div>
                    {data.description}
                </div>
                <button className={styles.btn + " btn btn-success"} data-bs-toggle="modal" data-bs-target={"#exampleModal"+data.id}>See Example</button>
            </div>
        </div>
    )
}
export default Service;