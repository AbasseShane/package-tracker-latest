import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { db } from "./firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Liste = () => {
  const [clients, setClients] = useState([]);

  const handleExpand = (id) => {
    setClients((prevClients) =>
      prevClients.map((client) => ({
        ...client,
        expanded: client.id === id ? !client.expanded : false,
      }))
    );
  };

  const handleRemove = async (id) => {
    try {
      await deleteDoc(doc(db, "Clients", id));
      alert("record deleted");
      setClients((prevClients) =>
        prevClients.filter((client) => client.id !== id)
      );
    } catch (error) {
      console.error("Error removing document: ", error);
    }
  };

  const handleChangeStatus = async (id) => {
    let newStatus = prompt("Enter the new status");
    try {
      await updateDoc(doc(db, "Clients", id), {
        Statut: newStatus,
      });
      // update local state to reflect the change on the page without reload

      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === id ? { ...client, Statut: newStatus } : client
        )
      );

      alert("Status updated");
    } catch (error) {
      alert("error updating the status", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Clients"));
      const clientData = [];
      querySnapshot.forEach((doc) => {
        clientData.push({ id: doc.id, ...doc.data() });
      });
      setClients(clientData.filter((client) => client.Statut === "on-the-way"));
    };
    fetchData();
  }, []);


  return (
    <div className="container-liste">
      <div className="header">Liste Clients</div>

      <div id="statusFilter">
        <label>Packages On the way</label>
        {/* <select onChange={handleStatusFilter} value={selectedStatus}>
          <option value="">All</option>
          <option value="sending">Sending</option>
          <option value="on-the-way">On the way</option>
          <option value="delivered">Delivered</option>
        </select>*/}
      </div> 

      <ul className="listes">
        {clients.map((client) => (
          <li
            key={client.id}
            onClick={() => handleExpand(client.id)}
            className={`card ${client.expanded ? "expanded" : ""}`}
          >
            <p>
              <span className="listTitle">Destinataire:</span>{" "}
              {client.Destinataire}{" "}
            </p>
            <p>
              <span className="listTitle">Statut du colis:</span>{" "}
              {client.Statut}
            </p>
            <p>
              <span className="listTitle">Adresse à livrer:</span>{" "}
              {client.AdresseDestinataire}
            </p>

            <div
              onClick={() => handleRemove(client.id)}
              className="removeButton"
            ></div>
            <span
              onClick={() => handleChangeStatus(client.id)}
              className="updateStatusButton"
            >
              +
            </span>
            <div className="cardContent">
              <p>
                <span className="listTitle">Expediteur:</span>{" "}
                {client.Expediteur}
              </p>
              <p>
                <span className="listTitle">Numéro du destinataire:</span>{" "}
                {client.NumeroDuDestinataire}
              </p>
              <p>
                <span className="listTitle">Numéro de suivi</span>{" "}
                {client.numéroDeSuivi}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    // <Link to='/' className='liste-link'>Entrer Infos</Link>
  );
};

export default Liste;
