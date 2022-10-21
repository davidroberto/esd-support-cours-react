import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Accueil</li>
                    </Link>
                    <Link to="/articles">
                        <li>Articles</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;