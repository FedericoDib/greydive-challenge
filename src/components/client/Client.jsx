import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import db from '../../db.json';
import './Client.scss';

function Client() {

  const { nameClient } = useParams();

  const findClient = db.find((client) => client.cliente === nameClient);
  const formatTranscript = findClient.transcripcion.replaceAll("<br>", '\n');
  const formatTasks = findClient.preguntas.map((task) => task.texto.replaceAll('\\n', '\n'));

  console.log(formatTasks);


  return (
    <>
      <div className="client__container">
        <div className="client__header">
          <NavLink to="/" className="client__container-link">Volver</NavLink>
          <h2 className="client__container-title">Cliente: {findClient.cliente}</h2>
        </div>
        <div className="client__container-info">
          <video className="client__container-video" src={findClient.linkVideo} controls></video>
          <div className="client__container-text">
            <h2>Transcripción</h2>
            <p>{formatTranscript}</p>
          </div>
        </div>
        <div className="client__container-tasks">
          <h2>Tareas</h2>
          <ul className="client__container-tasks-list">
            {findClient.preguntas.map((pregunta, index) => (
              <div className="client__container-tasks-list-item-container" key={index}>
                <li className="client__container-tasks-list-item-title">Tarea {index + 1}:</li>
                <li className="client__container-tasks-list-item-text">{formatTasks[index]}</li>
                <li className="client__container-tasks-list-item-sub">Duración de la tarea: {pregunta.tiempo}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Client