import portfolio from "../images/about-me.png"

const About = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 description">
                    <h1 className="mb-5">About Me </h1>
                     <p className="mb-4">As a software developer with a Mathematics BSc, I bring a unique blend of analytical thinking and problem-solving skills to every project. I excel at translating complex concepts into elegant, efficient code, ensuring that each solution is not just functional, but also optimized. My mathematical background empowers me to approach challenges from multiple angles, enabling me to create software that's not only robust but also intellectually stimulating. Let's collaborate to turn your ideas into innovative digital realities.</p>
                </div>
                <div className="col-12 col-md-6 text-center aboutMe">
                    <img src={portfolio} alt="portfolio" width="70%"/>
                </div>
            </div>
        </div>
    )
}

export default About;