import portfolio from "../images/professional.png"

const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 description">
                    <h1 className="mb-5">I am Agboola Daramola<br/>
                     A Software Developer</h1>
                     <p className="mb-4">Turning your ideas into elegant code solutions that redefine possibilities - your vision, my expertise.</p>
                     <a href="mailto:agbooladaramola7@gmail.com"><button className="btn btn-lg hire btn-primary" >Hire Me</button></a>
                     <a href="https://github.com/Mivics1" target="_blank" rel="noopener noreferrer"><button className="btn btn-lg view">View Portfolio</button></a>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <img src={portfolio} alt="portfolio" width="100%"/>
                </div>
            </div>
        </div>
    )
}

export default Home;