

import greekSalad from '../assets/images/greeksalad.jpg'
import lemonDessert from '../assets/images/lemondessert.jpg'
import bruschetta from '../assets/images/bruschetta.jpg'

const Highlights = () => {
    return (
        <>
            <section>
                <div className="highlights" id='highlights'>

                    <h2>This week’s specials!</h2>
                    <button>Online Menu</button>

                    <div className='dish-cards'>
                        <div className='dish-card'>
                            <img src={greekSalad} alt='Greek Salad'/>
                            <div className='dish-card-info'>

                                <h3>Greek Salad</h3>
                                <h4>$10.99</h4>
                                <p>Delight in our Greek Salad, a fresh mix of tomatoes, cucumbers, red onions, Kalamata olives, feta cheese, and Greek dressing.</p>
                                <button>
                                <p>Order a Delivery</p>
                                </button>
                            </div>
                        </div>

                        <div className='dish-card'>
                            <img src={bruschetta} alt='Bruschetta' />
                            <div className='dish-card-info'>
                                <h3>Bruschetta</h3>
                                <h4>$8.99</h4>
                                <p>Savor the classic flavors of Italy with our Bruschetta, a blend of ripe tomatoes, fresh basil, and garlic, served atop toasted artisan bread.</p>
                                <button>
                                <p>Order a Delivery</p>
                                </button>
                            </div>
                        </div>

                        <div className='dish-card'>
                            <img src={lemonDessert} alt='Lemon Dessert'/>
                            <div className='dish-card-info'>
                                <h3>Lemon Dessert</h3>
                                <h4>$6.99</h4>
                                <p>Indulge in our zesty Lemon Dessert, a delightful creation of tangy lemon goodness, perfect for satisfying your sweet cravings.</p>
                                <button>
                                    <p>Order a Delivery</p>
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </>
    )
}
export default Highlights;




