import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contactoClass';


const ContactoComponent = ({nuevoContacto}) => {
    return (
        <div>
            <h3>
                Nombre: { nuevoContacto.nombre }
            </h3>
            <h3>
                Apellido: { nuevoContacto.apellido }
            </h3>
            <h3>
                Email: { nuevoContacto.email }
            </h3>
            <h3>
                Estado: { nuevoContacto.estado ? 'CONECTADO':'DESCONECTADO'}
            </h3>
        </div>
    );
};


Contacto.propTypes = {
    nuevoContacto : PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
