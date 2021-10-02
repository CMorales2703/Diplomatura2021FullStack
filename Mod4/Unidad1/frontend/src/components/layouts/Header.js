import '../../styles/components/layouts/Header.css';

const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <img className="fotoHeader" src="images/foto.png" alt="Cristian" />
                <h1>Cristian Ariel Morales</h1>
            </div>
        </header>
    )
}

export default Header;