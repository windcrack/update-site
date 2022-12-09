import FooterContact from '../FooterContact';
import Logo from '../Logo';
import NavFooter from '../NavFooter';
import Copyright from '../Copyright';
import './footer.css';

export default function Footer(){
    return(
        <footer>
            <div className="container__header">
                <FooterContact />
                <NavFooter />
                <Logo className="footer__logo" />
            </div>
            <Copyright />
        </footer>
    )
}
