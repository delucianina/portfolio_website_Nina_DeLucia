// import { useState, useEffect } from 'react';
// import axios from 'axios';

function Hero() {
    // const [quote, setQuote] = useState('Loading...');
    // const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
    // const apiKey = 'OExYIVPGwjHy6vyDnuXSow==NqZk85kGepst2duc';

    // leave array empty, it'll only run once 
    // useEffect(() => {
    //     axios.get(url, {
    //         headers: {
    //             'X-Api-Key': apiKey
    //         }
    //     }).then((res) => {
    //         setQuote(res.data[0].quote);
    //     });
    // }, []);

    return (
        <section className="hero">
            <div className="hero-text">
                <div className="image">
                    <h4>Software <br></br>Developer</h4>
                </div>
                {/* <p className="text-center">{quote}</p> */}
            </div>
        </section>
    )
}

export default Hero;