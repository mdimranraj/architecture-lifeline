import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles/Layout.module.css";
const Layout = ({page})=>{
    return(
        <div className={styles.mainContainer}>
            <Navbar/>
            {page}
            <Footer />
        </div>
    )
}
export default Layout;