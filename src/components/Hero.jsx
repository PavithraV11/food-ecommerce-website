import { useState, useEffect } from "react";

function Hero(){

    const images = [
        "https://loremflickr.com/1600/900/pizza,food",
        "https://loremflickr.com/1600/900/burger,food",
        "https://loremflickr.com/1600/900/biryani,food",
        "https://loremflickr.com/1600/900/dessert,food"
    ];


    const [index,setIndex] = useState(0);



    useEffect(()=>{

        const slider = setInterval(()=>{

            setIndex((prev)=>
                (prev + 1) % images.length
            );

        },3000);


        return ()=> clearInterval(slider);


    },[]);



    return(

        <>


        <section
        className="hero"
        style={{
            backgroundImage:`url(${images[index]})`
        }}
        >


            <div className="hero-overlay">

                <h1>
                    Find Your Next Favorite Meal
                </h1>


                <p>
                    Explore thousands of delicious food items and
                    satisfy your cravings.
                </p>


                <button>
                    Order Now 🍔
                </button>


            </div>


        </section>


        </>

    )

}


export default Hero;