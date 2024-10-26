import workItems from '../data';

function Work() {

    return (
        <>
            <h3 className="text-center">My Work</h3>

            <section id = "work" className="work-output">
                {workItems.map((workObj, index) => (
                    <article key={index} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${workObj.backgroundImage})`}}>
                    <h5>{workObj.title}</h5>
                    <p className="description">{workObj.description}</p>
                    <br></br>
                    <a href={workObj.redirect}>VIEW ON GITHUB</a>
                </article>
                ))}
            </section>
        </>
    )
}

export default Work;