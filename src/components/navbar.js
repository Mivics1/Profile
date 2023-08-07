import { Link } from "react-router-dom";

const NavBar = () => {
    return(
            <nav class="navbar navbar-expand-lg">
            <div class="container">
            <a class="navbar-brand" href="/">MY RESUME</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item">
                <Link to="/" class="nav-link" href="#">HOME</Link>
                </li>
                <li class="nav-item">
                <Link to="/about" class="nav-link" href="#">ABOUT</Link>
                </li>
                <li class="nav-item">
                <Link to="/services" class="nav-link" href="#">SERVICES</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://github.com/Mivics1" target="_blank" rel="noopener noreferrer">PORTFOLIO</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    )
}

export default NavBar;