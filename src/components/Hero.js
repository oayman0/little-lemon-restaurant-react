import heroImage from '../assets/images/hero.jpg'
const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-info">
                    <h1>Little Lemon</h1>
                    <h2>Cairo</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recopies, served with a modern twist.</p>
                    <button>Reserve a Table </button>
                </div>
                <img src={heroImage} alt='Chef serving the main dish' />
            </section>
        </>
    )
}
export default Hero;