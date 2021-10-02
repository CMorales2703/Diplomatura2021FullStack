import React from 'react';
import '../styles/components/pages/homePage.css';

const HomePage = (props) => {
    return (
        <main className="holder asd">
            <div className="homeimg">
                <img src="images/fotocontenido.jpg" alt="bamboo" />
            </div>    
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui ab at reiciendis nemo. Quibusdam quas ex esse, accusantium unde eaque, vero in et culpa officiis commodi non soluta dolores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam rem dolorem maiores ut natus consectetur et illum, laborum tempora, numquam beatae distinctio commodi quidem officiis. Omnis earum at est!</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Cristian Morales - .com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;