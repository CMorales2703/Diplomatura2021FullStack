import { NavLink } from 'react-router-dom';
import '../../styles/components/layouts/Nav.css';

const Nav = (props) => {
    return(
        <nav>
            <div className="holder"> 
                <ul>
                    <li><NavLink activeClaseName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClaseName="activo" exact to="/cristian">Cristian</NavLink></li>
                    <li><NavLink activeClaseName="activo" exact to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink activeClaseName="activo" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClaseName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div> 
        </nav>
    );
}

export default Nav;