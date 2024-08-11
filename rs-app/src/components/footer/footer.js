import rsLogo from '../../images/logo_orange.png'
import './footer.css';

const Footer = () => {

    return (
        <div className="footer-container">
            <img className="logo" src={rsLogo} alt='orange-cloche-on-wheels-with-white-fork-and-knife-on-cover'></img>
            <h3>About YumEase</h3>
            <p className="about-app">YumEase is your go-to app for easy food ordering. Explore diverse menus from various restaurants, place your order effortlessly, and enjoy your meal in no time. We are a team of passionate food enthusiasts and tech experts dedicated to making your food ordering experience seamless and enjoyable.</p>
            <div className="github-link">© {new Date().getFullYear()} | <a href="https://github.com/chingu-voyages/v50-tier2-team-10">GitHub Repo</a></div>
        </div>
    )
}

export default Footer;