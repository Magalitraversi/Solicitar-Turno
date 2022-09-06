import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Turno from "./components/Turno";
function App() {

  //Arreglo de turnos
  const [turnos, guardarTurnos] = useState([]);

  //Función que tome los turnos actuales  y agregue la nueva
  const crearTurno = turno => {
    guardarTurnos([...turnos, turno]);
  }
  // Función que elimina una cita por su id
  const eliminarTurno = id => {
    const nuevosTurnos = turnos.filter(turno => turno.id !== id);
    guardarTurnos(nuevosTurnos);
  }

  return (
    <Fragment>
      <h1>Turnos</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearTurno={crearTurno}
            />
          </div>
          <div className="one-half column">
            <h2>Tus turnos</h2>
            {
              turnos.map(turno => {
                return (
                  <Turno
                    key={turno.id}
                    turno={turno}
                    eliminarTurno={eliminarTurno}
                  />

                )
              }
              )}
          </div>
        </div>


      </div>
    </Fragment>
  );
}

export default App;
