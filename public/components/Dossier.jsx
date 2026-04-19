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

    // Chargement initial des projets
    useEffect(() => {
        chargerProjets();
    }, []);

    useEffect(() => {
        if (!id) {
        setProjetSelectionne(null);
        setVue('liste');
        return;
        }

        if (projets.length === 0) return;

        const projet = projets.find((p) => String(p.id) === String(id));
        if (projet) {
        setProjetSelectionne(projet);
        setVue('detail');
        } else {
        setProjetSelectionne(null);
        setVue('liste');
        }
    }, [id, projets]);

    const chargerProjets = async () => {
        try {
        setChargement(true);
        setErreur(null);
        const data = await getProjets();
        setProjets(data);
        } catch (err) {
        setErreur('Impossible de charger les projets. Vérifiez que json-server est lancé (npm run server).');
        } finally {
        setChargement(false);
        }
    };

    const afficherNotification = (message, type = 'succes') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const afficherDetail = (projet) => {
        navigate(`/projets/${projet.id}`);
    };

    const afficherAjouter = () => {
        setVue('ajouter');
    };

    const afficherEdition = (projet) => {
        setProjetSelectionne(projet);
        setVue('editer');
    };

    const retourListe = () => {
        navigate('/projets');
    };

}