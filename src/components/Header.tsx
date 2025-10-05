import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
            <Link to="/"> <img src={logo} alt="Logo" className="header-logo"></img> </Link>
            <span className="header-links">
                <Link to="/vagons" className="header-link">Вагоны</Link>
                <Link to="/gallery" className="header-link">Галерея</Link>
            </span>
            </nav>
        </header>
    )
}