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

const [imagePreview, setImagePreview] = useState(projet.image || '');
  const [erreurs, setErreurs] = useState({});
  const [envoi, setEnvoi] = useState(false);

  const valider = () => {
    const e = {};
    if (!champs.libelle.trim()) e.libelle = 'Le libellé est obligatoire';
    if (champs.libelle.trim().length > 80) e.libelle = 'Maximum 80 caractères';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChamps((prev) => ({ ...prev, [name]: value }));
    if (erreurs[name]) {
      setErreurs((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const base64 = await compresserImage(file);
      setChamps((prev) => ({ ...prev, image: base64 }));
      setImagePreview(base64);
    } catch {
      setErreurs((prev) => ({ ...prev, image: "Impossible de lire l'image" }));
    }
  };

}