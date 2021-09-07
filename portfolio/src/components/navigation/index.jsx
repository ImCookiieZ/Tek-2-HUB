import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import styled from "styled-components";

const Title = styled.h1` 
	color: black;
	font-size: 2.0em;
`;

function TitleFunction() {
    return (
        <div>
            <Title> Karl-Erik Störzel </Title>
        </div>
    );
}

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 600) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        if (screenWidth < 600) {
            setOpen(false);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <TitleFunction/>
                </div>
                <div className="list-wrapper">
                    <img
                        src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
                        alt="Menu bars"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                    <img
                        src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
                        alt="Menu cross"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />

                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <Link
                                to="/"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/" && "#4071f4" }}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/About"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/about" && "#4071f4" }}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Projects"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/skills" && "#4071f4" }}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Experience"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/works" && "#4071f4" }}
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Contact"
                                onClick={handleClose}
                                style={{ color: location.pathname === "/contact" && "#4071f4" }}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;