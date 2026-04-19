import React, { useState } from 'react';
import { compresserImage } from '../utils/imageUtils';

function AjouterProjet({ projet, onValider, onAnnuler }) {
    const [champs, setChamps] = useState({
    libelle: projet.libelle || '',
    image: projet.image || '',
    description: projet.description || '',
    technologies: projet.technologies?.join(', ') || '',
    lien: projet.lien || '',
});
}