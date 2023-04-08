import { FaFacebook, FaInstagram, FaWhatsapp,} from "react-icons/fa"
import Styles from "./Footer.module.css"
function Footer() {
    return(
        <div>
        <ul className={Styles.footer}>
          
            <li className={Styles.list}> <FaFacebook/></li>
            <li className={Styles.list}><FaWhatsapp/></li>
            <li className={Styles.list}><FaInstagram/>  </li>
        </ul>
        </div>
        
    )
}
export default Footer
