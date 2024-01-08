'use strict';   // Mode strict du JavaScript


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function onClickListItem()
{
    /*
     * Dans un gestionnaire d'évènements (et uniquement dans ce cas-là) la variable this représente
     * l'objet DOM qui a déclenché l'évènement.
     *
     * Il s'agit donc de la balise <li> sur laquelle on a cliqué.
     *
     *
     * On active ou on désactive la classe selected du <li> sur lequel on a cliqué.
     */
    this.classList.toggle('selected');

    // Recherche de toutes les balises <li> sélectionnées (classe selected).
    const selectedPhotos = document.querySelectorAll('.photo-list li.selected');

    /*
     * document.querySelectorAll() renvoie un tableau avec autant d'objets DOM manipulables en
     * JavaScript que de balises trouvées.
     *
     * selectedPhotos possède donc une propriété length représentant toutes les photos
     * sélectionnées.
     *
     * Mise à jour du nombre total de photos sélectionnées.
     */
    total.textContent = selectedPhotos.length;
}



/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

// Recherche de toutes les balises <li> (les photos) et de la balise <em> (nombre total).
const photos = document.querySelectorAll('.photo-list li');
const total  = document.querySelector('#total em');

// Installation d'un gestionnaire d'évènement clic sur toutes les balises <li>.
for(let index = 0; index < photos.length; index++) {
    photos[index].addEventListener('click', onClickListItem);
}