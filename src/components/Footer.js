import logo from '../assets/images/logo.svg';

const Footer = () => {
    return (<>
        <footer>
            <div className="footer">
                <img src={logo} alt='Little Lemon Logo'/>
                <div className='footer-lists'>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                    <ul>
                        <li>Contact Info</li>
                        <li>Little Lemon</li>
                        <li>112 Nile Avenue, Zamalek Cairo, Egypt</li>
                        <li>+20 101202564</li>
                        <li>+20 245454611</li>
                    </ul>
                    <ul>
                        <li>Social Links</li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Threads</a></li>
                        <li><a href="#">Tiktok</a></li>
                    </ul>
                </div>
                </div>
        </footer>
    </>)
}
export default Footer;