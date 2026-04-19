import React, { useState } from 'react';
import { compresserImage } from '../utils/imageUtils';

const CHAMPS_VIDES = {
    libelle: '',
    image: '',
    description: '',
    technologies: '',
    lien: '',
}

function AjouterProjet({ onAjouter,onAnnuler }) {
    const [champs, setChamps] = useState(CHAMPS_VIDES);
    const [imagePreview, setImagePreview] = useState('');
    const [erreurs, setErreurs] = useState({});
    const [envoi, setEnvoi] = useState(false);
}