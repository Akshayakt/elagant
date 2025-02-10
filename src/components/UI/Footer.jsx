import classes from "./Footer.module.css";

import FacebookIcon from '../../assets/facebook.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';

export default function Footer() {
    return (<footer>
        <section className={classes['footer-content']}>
            <div className={classes['flex-container']}>
                <p>Copyright © {new Date().getFullYear()} 3legant. All rights reserved</p>
                <a>Privacy Policy</a>
                <a>Terms of Use</a>
            </div>
            <ul className={classes['flex-container']}>
                <li><img src={InstagramIcon} alt="instagram"/></li>
                <li><img src={FacebookIcon} alt="facebook"/></li>
                <li><img src={YoutubeIcon} alt="youtube"/></li>
            </ul>
        </section>
    </footer>);
}