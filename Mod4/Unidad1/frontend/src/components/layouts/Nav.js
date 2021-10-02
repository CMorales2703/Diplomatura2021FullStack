import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <nav>
            <ul  className="holder">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cristian">Cristian</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;