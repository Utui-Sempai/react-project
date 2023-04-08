import { Link} from "react-router-dom";
import Container from "./Container";
import Logo from "../../img/costs_logo.png"
import styles from "./Navbar.module.css"

function Navbar() {
    return(
        <div >
           <nav className={styles.navbar}>
                <Container >
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}><Link to="/">Home</Link></li>
                        <li className={styles.item}><Link to="/Contacto">Contacto</Link></li>
                        <li className={styles.item}><Link to="/Empresa">Empresa</Link></li>
                        <li className={styles.item}> <Link to="/Projecto">Projectos</Link></li>
                    </ul>
                    
                    
                    
                   
                </Container>
           </nav>
        </div>
    )
}
export default Navbar