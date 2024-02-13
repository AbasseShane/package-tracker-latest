import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import {db} from './firebase'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'

const Liste = () => {

  const [clients, setClients] = useState([])
  
  const handleExpand = (id) => {
    setClients((prevClients) => 
      prevClients.map((client) => ({
      ...client,
      expanded: client.id === id ? !client.expanded : false,
    }))
  );
  };

  const handleRemove = async (id) => {
    try{
      await deleteDoc(doc(db, "Clients", id));
      setClients((prevClients) => prevClients.filter((client)=> client.id !==id));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Clients"))
      const clientData = []
      querySnapshot.forEach((doc) => {
        clientData.push({ id: doc.id, ...doc.data() })
      })
      setClients(clientData)
    }
    fetchData()
  }, [])

  return (
    <div className='container-liste'>
      <ul>
        {clients.map((client) => (
          <li key={client.id} onClick={() => handleExpand(client.id)} className={`card ${client.expanded ? 'expanded' : ''}`}>
            
              {client.Destinataire}
            
            <span onClick={() => handleRemove(client.id)} className='removeButton'>&#8722;</span>
              <div className='cardContent'>
                <p>Expediteur: {client.Expediteur}</p>
                <p>Numéro du destinataire: {client.NumeroDuDestinataire}</p>
                <p>Adresse à livrer: {client.AdresseDestinataire}</p>
                <p>Numéro de suivi: {client.numéroDeSuivi}</p>
                <p>Status: {client.Statut}</p>
              </div>

          </li>
        ))}
      </ul>
    </div>
    // <Link to='/' className='liste-link'>Entrer Infos</Link>
  )
}

export default Liste