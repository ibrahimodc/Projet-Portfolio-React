import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjets, addProjet, deleteProjet, updateProjet } from '../services/api';
import Projet from './Projet';
import AjouterProjet from './AjouterProjet';
import DetaillerProjet from './DetaillerProjet';
import EditerProjet from './EditerProjet';

function Dossier() {
    const [projets, setProjets] = useState([]);
    const [recherche, setRecherche] = useState('');
    const [chargement, setChargement] = useState(true);
    const [erreur, setErreur] = useState(null);
    const [notification, setNotification] = useState(null);
    const [vue, setVue] = useState('liste');
    const [projetSelectionne, setProjetSelectionne] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
}