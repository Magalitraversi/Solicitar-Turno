import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({ crearTurno }) => {

    //Crear State de TURNOS
    const [turno, actualizarTurno] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, actualizarError] = useState(false)
    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = e => {
        actualizarTurno({
            ...turno,
            [e.target.name]: e.target.value
        });
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = turno;
    //Cuando el usuario presiona agregar turno
    const submitturno = e => {
        e.preventDefault();


        //Validar 
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return;
        }
        //Eliminar el mensaje previo
        actualizarError(false)
        //Asignar un ID
        turno.id = uuidv4();
        console.log(turno);

        //Crear la cita
        crearTurno(turno);

        //Reiniciar el form
        actualizarTurno({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }
        )
    }
    return (
        <Fragment>
            <h2>Crear Turno </h2>
            {error ? <p className='alert-error'> Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitturno}
            >
                <label>Nombre Mascota </label>
                <input
                    type="text"
                    name='mascota'
                    className='u-full-wodth'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre  Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Turno</button>
            </form>
        </Fragment>
    )
}
Formulario.propTypes = {
    crearTurno: PropTypes.func.isRequired
}

export default Formulario