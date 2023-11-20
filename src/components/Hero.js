import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg'
const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-info">
                    <h1>Little Lemon</h1>
                    <h2>Cairo</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recopies, served with a modern twist.</p>
                    <Link to="/booking">
                        <button aria-label="Reserve a Table">Reserve a Table</button>
                    </Link>
                </div>
                <img src={heroImage} alt='Chef serving the main dish' />
            </section>
        </>
    )
}
export default Hero;