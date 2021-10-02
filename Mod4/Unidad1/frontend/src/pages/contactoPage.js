const contactoPage = (props) => {
    return(
        <main className="holder">
         <div className="columna left">
             <h2>Contacto Rapido</h2>
             <form action="" method="" className="formulario">
                 <p>
                     <label>Nombre</label>
                     <input type="text" name="nombre"/>
                 </p>
                 <p>
                    <label>Email</label>
                    <input type="text" name="email"/>
                </p>
                <p>
                    <label>Telefono</label>
                    <input type="text" name="telefono"/>
                </p>
                <p>
                    <label>Mensaje</label>
                    <textarea name="mensaje"></textarea>
                </p>
                <p className="acciones">
                    <input type="submit" value="Enviar"/>
                </p>
             </form>
         </div>
         <div className="columna right">
             <h2>Otras vias de comunicación</h2>
             <p>Tambien puede contactarse con nosotros usando los siguientes medios:</p>
             <ul>
                 <li>Telefono: 11-1111-1111</li>
                 <li>Email: contacto@moralesc.com.ar</li>
                 <li>Facebook:</li>
                 <li>Twitter:</li>
                 <li>Skype:</li>
             </ul>
         </div>
    </main>
    )
}

export default contactoPage;