import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function About() {

    return (
        <>
        <Navbar />

        <section className="about" id="about">

            <h1>🍴 About Us</h1>

            <p>
                Welcome to <strong>Food Haven</strong>! We believe that good food
                has the power to bring joy, comfort, and connection to every day.
            </p>

            <p>
                Our store offers a wide collection of Fast Food, Main Course,
                Desserts, Beverages, South Indian, and Healthy food options
                at affordable prices.
            </p>

            <div className="about-container">

                <div className="about-card">
                    <h2>🍔</h2>
                    <h3>1000+ Food Items</h3>
                    <p>Choose from a wide variety of dishes.</p>
                </div>

                <div className="about-card">
                    <h2>🚚</h2>
                    <h3>Fast Delivery</h3>
                    <p>Quick and hot delivery to your doorstep.</p>
                </div>

                <div className="about-card">
                    <h2>⭐</h2>
                    <h3>Quality Service</h3>
                    <p>Trusted by hundreds of happy customers.</p>
                </div>

                <div className="about-card">
                    <h2>💳</h2>
                    <h3>Secure Payment</h3>
                    <p>Safe and secure online payment options.</p>
                </div>

            </div>

        </section>
        <Footer />
        </>

    );

}

export default About;
  