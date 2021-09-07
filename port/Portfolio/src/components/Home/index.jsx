import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi,</p>
                    <p>I am Karl</p>
                    <p>applied computer science student</p>
                    <p>at Epitech-Berlin</p>
                </h1>
                <Link to="about">
                    <button>More Info</button>
                </Link>
            </div>
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/src/me-start.PNG`} alt="person picture" />
            </div>
        </div>
    );
};

export default Home;