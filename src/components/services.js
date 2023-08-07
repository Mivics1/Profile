import services from "../images/services-1.jpeg"

const Services = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 description">
                    <h1 className="mb-5">Services </h1>
                     <p className="mb-4">As a seasoned software developer, my services encompass creating elegant and efficient solutions tailored to your unique needs. From crafting intuitive user experiences to optimizing performance, I'm here to transform your ideas into reality.</p>
                </div>
                <div className="col-12 col-md-6 text-center services">
                    <img src={services} alt="portfolio" width="70%"/>
                </div>
            </div>
        </div>
    )
}

export default Services;