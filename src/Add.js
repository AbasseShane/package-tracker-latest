import React, {useState, useEffect} from 'react'
import {db} from './firebase'
import './style.css'
import logo from './logo.jpeg'
import {Link} from 'react-router-dom'
import {getDoc, addDoc, collection, where, query} from 'firebase/firestore'


const Add = () => {

    const [expediteur, setExpediteur] = useState('')
    const [destinataire, setDestinataire] = useState('')
    const [numero, setNumero] = useState('')
    const [adresse, setAdresse] = useState('')
    const [suivi, setSuivi] = useState('')
    const [statut, setStatus] = useState('')

    const dbref = collection(db, "Clients")

    const onFormSubmit = async () => {
        await addDoc(dbref, {Expediteur: expediteur, Destinataire: destinataire, NumeroDuDestinataire: numero, AdresseDestinataire: adresse, numéroDeSuivi: suivi, Statut: statut})
        console.log("data created")
        alert("Data created");
    }

    useEffect(() => {
        // to only keep the flex display on the add page
        document.body.classList.add('body-center');

        // Remove the body-center class when the component unmounts
        return () => {
            document.body.classList.remove('body-center');
        };
    }, []);

    return (
        <>
            <div className='container'>
                {/* <img className='logo' src={logo}  alt='logo'></img> */}
                <div className='form'>
                    <h2>Entrer Infos</h2>
                    <div className='input-box'>
                        <input type='text' placeholder='Expéditeur' onChange={(e) => setExpediteur(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Destinataire' onChange={(e) => setDestinataire(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Numéro du destinataire' onChange={(e) => setNumero(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Adresse à livrer' onChange={(e) => setAdresse(e.target.value)}></input>
                    </div>
                    
                    <div className='input-box'>
                        <input type='text' placeholder='Numéro de suivi' onChange={(e) => setSuivi(e.target.value)}></input>
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Statut' onChange={(e) => setStatus(e.target.value)}></input>
                    </div>
                    <button onClick={onFormSubmit}>Valider</button>
                </div>
            </div>
            <div className='link'>
                <Link to='/Liste' className='liste-link'>Liste Clients</Link>
            </div>
        </>
        
    )
}

export default Add