import Hero from '../components/Hero';
// import Work from '../components/Work';
import AboutMe from '../components/AboutMe';

function Landing() {
    return (
        <>
            <Hero />
            <div className="section-buffer" >
                <AboutMe />
            </div>
            {/* <div className="section-buffer">
                <Work />
            </div> */}

        </>
    )
}

export default Landing;