import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ExternalSite() {
    const navigate = useNavigate();
    const location = useLocation();

 

    useEffect(() => {
        // Redirige l'utilisateur vers un site externe
        window.location.href = 'https://lylyrosy.github.io/lilirose.dz/indexx.html';
    }, []); // Le tableau vide [] assure que cela ne se produit qu'une seule fois, équivalent à componentDidMount



    useEffect(() => {
        // Redirige l'utilisateur vers '/create'
        navigate('/liliroseshop/create');
    }, [navigate]);

    // Retourne null car ce composant ne rend pas de contenu supplémentaire
    return null;
}

export default ExternalSite;
