import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Projet({projet, onSupprimer, onAfficherDetail}) {
    const [imgError, setImgError] = useState(false);
    const placeholder = `https://placehold.co/600x400/1a1a2e/6c63ff?text=${encodeURIComponent(projet.libelle)}`;
}