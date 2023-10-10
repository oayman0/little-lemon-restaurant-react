import person1 from '../assets/images/person1.png'
import person2 from '../assets/images/person2.png'
import person3 from '../assets/images/person3.png'

const Testimonials = () => {
    return (
        <>
            <section>
                <div className="testimonials">

                    <h2>Testimonials</h2>

                    <div className='testimonial-cards'>
                        <div className='testimonial-card'>
                            <div className='testimonial-card-title'>

                            <img src={person1} />
                            <h4>Sarah M.</h4>

                            </div>
                            <p>Little Lemon is my new oasis in Cairo! Their Greek Salad is a taste of Greece itself - fresh and flavorful. Can't wait to try more.</p>
                        </div>
                        <div className='testimonial-card'>
                        <div className='testimonial-card-title'>
                            <img src={person2} />
                            <h4>Omar A.</h4>
                            </div>
                            <p>Bruschetta at Little Lemon is a burst of Italian goodness! The tomatoes were so fresh. Definitely coming back for more!</p>
                        </div>
                        <div className='testimonial-card'>
                        <div className='testimonial-card-title'>
                            <img src={person3} />
                            <h4>Layla A.</h4>
                            </div>
                            <p>The Lemon Dessert at this place is the perfect ending to any meal. It's like a burst of sunshine on your plate. Love it!</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Testimonials;




