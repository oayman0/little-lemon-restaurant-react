import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'

const About =()=>{
    return(<>
    <section>
        <div className="about">
            <div className="about-info">
                <h1>Little Lemon</h1>
                <h2>Cairo</h2>
                <p>Discover the perfect blend of timeless Mediterranean recipes and contemporary culinary flair at our family-owned restaurant in the heart of Cairo. Join us for a dining experience that honors tradition while embracing innovation. Welcome to Little Lemon!</p>
            </div>
            <div className="about-images">
                <img src={about1} />
                <img src={about2} />
            </div>
        </div>
    </section>
    </>)
    }
    export default About;