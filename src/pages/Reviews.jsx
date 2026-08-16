import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Review() {

    return (
        <>

        <Navbar />
        <section className="reviews" id="reviews">

            <h2>⭐ Customer Reviews</h2>

            <div className="review-container">

                <div className="review-card">
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p>"Excellent variety of food and fast delivery!"</p>
                    <span>- Kavya</span>
                </div>

                <div className="review-card">
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p>"Easy to order and the prices are very affordable."</p>
                    <span>- Priya</span>
                </div>

                <div className="review-card">
                    <h3>⭐⭐⭐⭐</h3>
                    <p>"Good quality food with secure packaging."</p>
                    <span>- Arun</span>
                </div>

                <div className="review-card">
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p>"My favorite online food app. Highly recommended!"</p>
                    <span>- Rahul</span>
                </div>

                <div className="review-card">
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p>"Found all the food I needed. Great ordering experience."</p>
                    <span>- Divya</span>
                </div>

            </div>

        </section>
        <Footer />
        </>

    );

}

export default Review;