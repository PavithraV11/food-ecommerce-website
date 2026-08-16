import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";


import products from "../data/products";


function Home(){


    return(

        <>


        <Navbar/>


        <Hero/>

        





        {/* Statistics Section */}

        <section className="stats">


            <div className="stat-card">

                <h2>🍔 1500+</h2>
                <p>Food Items Available</p>

            </div>


            <div className="stat-card">

                <h2>😊 500+</h2>
                <p>Happy Customers</p>

            </div>


            <div className="stat-card">

                <h2>⭐ 4.9</h2>
                <p>Average Rating</p>

            </div>


            <div className="stat-card">

                <h2>🚚 Fast</h2>
                <p>Delivery Service</p>

            </div>


        </section>






        {/* Featured Food Items */}


        <h1 className="section-title">

            🔥 Featured Food Items

        </h1>



        <div className="food-container">


            {
                products.slice(0,6).map((food)=>(


                    <FoodCard

                    key={food.id}

                    {...food}

                    />


                ))
            }


        </div>




        <Footer/>


        </>

    )

}


export default Home;