import React, { useState } from 'react';

function DetaillerProjet({ projet, onFermer }) {
    const [imgError, setImgError] = useState(false);
    const placeholder = `https://placehold.co/1200x600/1a1a2e/6c63ff?text=${encodeURIComponent(projet.libelle)}`;
}