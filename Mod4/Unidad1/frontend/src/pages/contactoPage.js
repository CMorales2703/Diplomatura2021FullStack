const contactoPage = (props) => {
    return(
        <main class="holder">
         <div class="columna left">
             <h2>Contacto Rapido</h2>
             <form action="" method="" class="formulario">
                 <p>
                     <label for="nombre">Nombre</label>
                     <input type="text" name=""/>
                 </p>
                 <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p class="acciones">
                    <input type="submit" value="Enviar"/>
                </p>
             </form>
         </div>
         <div class="columna right">
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