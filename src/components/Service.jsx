
import styles from "../styles/Service.module.css"
const Service = ({data})=>{
    

    return(
        <div className={styles.mainContainer}>
            {/* modal  */}
            <div className="modal fade" id={"exampleModal"+data.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{data.title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
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