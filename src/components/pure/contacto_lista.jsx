import React from 'react';
import { Contacto } from '../../models/contactoClass';
import { ESTADO } from '../../models/estadoContacto';
import ContactoComponent from './contacto';


const ContactoListaComponent = () => {

    const contactoPredeterminado = new Contacto('Sergio', 'Gomez', 'ser@hotmail.com', true);

    return (
        <div>
            <div>
                <h1>Tu Contacto:</h1>
            </div>
            <ContactoComponent nuevoContacto = { contactoPredeterminado }></ContactoComponent>
        </div>
        
    );
};



export default ContactoListaComponent;
