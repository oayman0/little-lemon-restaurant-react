import logo from '../images/logo.svg'

const Navbar = () => {
    return(
    <nav>
        <img src={logo} alt="logo" />
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
    </nav>
    )
}
export default Navbar;