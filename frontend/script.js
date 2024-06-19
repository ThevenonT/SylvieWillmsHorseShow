
// contient la valeur du scroll 
let ScrollValue = 0;
const page_5_container_evenement = document.getElementById('page_5_container_evenements');
const affiche_spectacle = document.getElementById('affiche_spectacle');

const socket = io();

// Gestion des événements de connexion et de déconnexion
socket.on('connect', () => {
    console.log('Connecté au serveur Socket.IO');

    socket.emit('newCo');


});

socket.on('disconnect', () => {
    console.log('Déconnecté du serveur Socket.IO');
});


// gère la bar de navigation pour la version mobile 
function AddNavList() {
    let nav_list = document.getElementById('nav_list');
    let container_nav_list_item = document.getElementById('container_nav_list_item');
    let nav_list_btn_span_1 = document.getElementById('nav_list_btn_span_1');
    let nav_list_btn_span_2 = document.getElementById('nav_list_btn_span_2');
    let nav_list_btn_span_none = document.getElementById('nav_list_btn_span_none');


    // ouvre le menu déroulant 
    if (nav_list.className === "nav_list") {

        // modification du display flex
        nav_list.classList.remove('nav_list');
        nav_list.classList.add('nav_list_mobile');


        // modification de la taille 
        container_nav_list_item.classList.remove('container_nav_list_item');
        container_nav_list_item.classList.add('container_nav_list_item_mobile');

        // animation du btn menu/croix
        nav_list_btn_span_1.classList.add('nav_croix_span_1');
        nav_list_btn_span_2.classList.add('nav_croix_span_2');
        nav_list_btn_span_none.classList.add('none');

    }

    // ferme le menu déroulant 
    else if (nav_list.className === "nav_list_mobile") {

        nav_list.classList.remove('nav_list_mobile');
        nav_list.classList.add('nav_list');

        container_nav_list_item.classList.remove('container_nav_list_item_mobile');
        container_nav_list_item.classList.add('container_nav_list_item');

        nav_list_btn_span_1.classList.remove('nav_croix_span_1');
        nav_list_btn_span_2.classList.remove('nav_croix_span_2');
        nav_list_btn_span_none.classList.remove('none');
    }
}

// écouteur d'évènement
function EventListener() {

    let text = document.getElementById('text');

    let logoScrollUp = document.getElementById('logoScrollUp');
    let imageTRSP = document.getElementById('imageTRSP');

    let icone_info_left = document.getElementById('icone_info_left');
    let icone_info_right = document.getElementById('icone_info_right');

    let container_icone_info_left = document.getElementById('container_icone_info_left');
    let container_icone_info_right = document.getElementById('container_icone_info_right');

    let page_1_btn_right_text = document.getElementById('page_1_btn_right_text');
    let page_1_btn_left_text = document.getElementById('page_1_btn_left_text');

    let image_2_sol = document.getElementById('image_2_sol');
    let image_2_cheval = document.getElementById('image_2_cheval');
    let image_2_sylvie = document.getElementById('image_2_sylvie');

    let page_1_btn_left = document.getElementById('page_1_btn_left');
    let page_1_btn_right = document.getElementById('page_1_btn_right');

    let page_3_container_affiche = document.getElementById('page_3_container');
    let image_page_3 = document.getElementById('image_page_3');
    let page_4_container_images = document.getElementById('page_4_container_images');
    let image_page_4 = document.getElementById('image_page_4');
    let titre_page_4_two = document.getElementById('titre_page_4_two');

    let page_0 = document.getElementById('page_0');
    let page_1 = document.getElementById('page_1');
    let page_3 = document.getElementById('page_3');
    let page_4 = document.getElementById('pages_4');
    let page_5 = document.getElementById('page_5');
    let page_6 = document.getElementById('page_6');
    let page_contact = document.getElementById('page_contact');

    let nav_list_accueil = document.getElementById('nav_list_accueil');
    let nav_list_biographie = document.getElementById('nav_list_biographie');
    let nav_list_spectacle = document.getElementById('nav_list_spectacle');
    let nav_list_actualite = document.getElementById('nav_list_actualite');
    let nav_list_numeros = document.getElementById('nav_list_numeros');
    let nav_list_contact = document.getElementById('nav_list_contact');

    /* gère l'animation de la lumière page_0 (étain la lumière) */
    logoScrollUp.addEventListener("mouseover", () => {

        imageTRSP.style.backgroundColor = "rgba(0, 0, 0, 1)";

    })
    /* gère l'animation de la lumière page_0 (allume la lumière) */
    logoScrollUp.addEventListener("mouseout", () => {

        imageTRSP.style.backgroundColor = "transparent";

    });



    /* gère l'animation de l'opacity page_2 */
    page_1_btn_left.addEventListener("mouseover", () => {

        page_1_btn_left_text.style.opacity = "1";
        page_1_btn_right_text.style.opacity = "0";
        image_2_sylvie.style.opacity = "1";
        image_2_cheval.style.opacity = "0";
        // ajouter un fond noir au sol 
        image_2_sol.style.backgroundColor = "black";
        container_icone_info_left.style.opacity = '0';
        container_icone_info_right.style.opacity = '1';
        icone_info_left.classList.remove('icone_info_left');
        icone_info_right.classList.add('icone_info_right');

    });

    /* gère l'animation de l'opacity page_2 */
    page_1_btn_right.addEventListener("mouseover", () => {

        image_2_sylvie.style.opacity = "0";
        image_2_cheval.style.opacity = "1";
        page_1_btn_left_text.style.opacity = "0";
        page_1_btn_right_text.style.opacity = "1";
        // ajouter un fond noir au sol 
        image_2_sol.style.backgroundColor = "black";
        icone_info_left.classList.add('icone_info_left');
        container_icone_info_left.style.opacity = '1';
        container_icone_info_right.style.opacity = '0';
        icone_info_right.classList.remove('icone_info_right');
    });

    /** gère le scroll de la page principal */
    window.addEventListener('scroll', (event) => {

        ScrollValue = event.target.scrollingElement.scrollTop;


        /** gère les effet de transparence */
        if (ScrollValue < 60) {

            text.style.opacity = 0;
            imageTRSP.style.backgroundColor = "transparent";

        }
        else if (ScrollValue <= 100) {

            text.style.opacity = 1;
            imageTRSP.style.backgroundColor = "rgba(0, 0, 0, 1)";

        }
        // page_1 
        else if (ScrollValue <= 900) {

            imageTRSP.style.backgroundColor = "rgba(0, 0, 0, 1)";

        }
        else if (ScrollValue <= 1706) {

            icone_info_left.classList.add('icone_info_left');
            icone_info_right.classList.add('icone_info_right');

            // ajouter un fond noir au sol 
            image_2_sol.style.backgroundColor = "transparent";
            page_1_btn_right_text.style.opacity = "0";
            page_1_btn_left_text.style.opacity = "0";
            image_2_cheval.style.opacity = "1";
            image_2_sylvie.style.opacity = "1";


        }

        // gère l'animation de la barre de navigation
        if (page_0.offsetTop === ScrollValue || ScrollValue === 0) {
            nav_list_biographie.classList.remove('nav_list_item_hover');
            nav_list_actualite.classList.remove('nav_list_item_hover');
            nav_list_spectacle.classList.remove('nav_list_item_hover');
            nav_list_numeros.classList.remove('nav_list_item_hover');
            nav_list_contact.classList.remove('nav_list_item_hover');
            nav_list_accueil.classList.add('nav_list_item_hover');
        }
        if (page_1.offsetTop === ScrollValue) {
            nav_list_accueil.classList.remove('nav_list_item_hover');
            nav_list_spectacle.classList.remove('nav_list_item_hover');
            nav_list_biographie.classList.remove('nav_list_item_hover');
            nav_list_actualite.classList.remove('nav_list_item_hover');
            nav_list_contact.classList.remove('nav_list_item_hover');
            nav_list_numeros.classList.remove('nav_list_item_hover');
        }
        if (page_4.offsetTop === ScrollValue) {
            nav_list_accueil.classList.remove('nav_list_item_hover');
            nav_list_spectacle.classList.remove('nav_list_item_hover');
            nav_list_actualite.classList.remove('nav_list_item_hover');
            nav_list_numeros.classList.remove('nav_list_item_hover');
            nav_list_contact.classList.remove('nav_list_item_hover');
            nav_list_biographie.classList.add('nav_list_item_hover');
        }
        if (page_3.offsetTop === ScrollValue) {
            nav_list_actualite.classList.remove('nav_list_item_hover');
            nav_list_accueil.classList.remove('nav_list_item_hover');
            nav_list_biographie.classList.remove('nav_list_item_hover');
            nav_list_numeros.classList.remove('nav_list_item_hover');
            nav_list_contact.classList.remove('nav_list_item_hover');
            nav_list_spectacle.classList.add('nav_list_item_hover');

        }
        if (page_5.offsetTop === ScrollValue) {
            nav_list_accueil.classList.remove('nav_list_item_hover');
            nav_list_biographie.classList.remove('nav_list_item_hover');
            nav_list_spectacle.classList.remove('nav_list_item_hover');
            nav_list_numeros.classList.remove('nav_list_item_hover');
            nav_list_contact.classList.remove('nav_list_item_hover');
            nav_list_actualite.classList.add('nav_list_item_hover');
        }
        if (page_6.offsetTop === ScrollValue) {
            nav_list_accueil.classList.remove('nav_list_item_hover');
            nav_list_biographie.classList.remove('nav_list_item_hover');
            nav_list_spectacle.classList.remove('nav_list_item_hover');
            nav_list_actualite.classList.remove('nav_list_item_hover');
            nav_list_contact.classList.remove('nav_list_item_hover');
            nav_list_numeros.classList.add('nav_list_item_hover');
        }
        if (page_contact.offsetTop === ScrollValue) {
            nav_list_accueil.classList.remove('nav_list_item_hover');
            nav_list_biographie.classList.remove('nav_list_item_hover');
            nav_list_spectacle.classList.remove('nav_list_item_hover');
            nav_list_actualite.classList.remove('nav_list_item_hover');
            nav_list_numeros.classList.remove('nav_list_item_hover');
            nav_list_contact.classList.add('nav_list_item_hover');
        }

    });


    /** gère le scroll de la page 4 */
    page_4_container_images.addEventListener("scroll", (eventPage4) => {


        if (eventPage4.target.scrollTop >= 200) {

            image_page_4.classList.add('blur');
            titre_page_4_two.style.color = "beige";
        }
        else if (eventPage4.target.scrollTop <= 0) {
            image_page_4.classList.remove('blur');
            titre_page_4_two.style.color = "black";
        }
    });
    /** gère le scroll de la page 3 */
    page_3_container_affiche.addEventListener("scroll", (eventPage3) => {

        if (eventPage3.target.scrollTop >= 300) {

            image_page_3.classList.add('blur');
        }
        else if (eventPage3.target.scrollTop >= 0) {

            image_page_3.classList.remove('blur');
        }
    });

    /** Contient les enfants non visible */
    let elementsNonVisibles = [];
    /** Contient les enfants visible */
    let elementVisible = page_5_container_evenement.children[0];
    /** gère le scroll de la page 5 */
    page_5_container_evenement.addEventListener('scroll', (event) => {


        // Récupérez tous les enfants du conteneur de défilement
        const enfants = page_5_container_evenement.children;

        // Parcourez les enfants pour trouver celui qui est actuellement visible
        for (let enfant of enfants) {
            elementsNonVisibles = [];

            let rect = enfant.getBoundingClientRect();

            // Vérifiez si l'élément est actuellement visible dans la fenêtre
            if (rect.top <= Math.floor(window.innerHeight * 0.9) && rect.bottom >= Math.floor(window.innerHeight * 0.9)) {

                enfant.children[0].classList.add('visible_img');
                enfant.children[1].classList.add('visible');

                if (enfant.children[3]) {
                    enfant.children[3].classList.add('visible');
                }

                elementVisible = enfant;

            } else if (rect.bottom < Math.floor(window.innerHeight * 0.9) || rect.bottom > Math.floor(window.innerHeight * 0.9) || rect.top < Math.floor(window.innerHeight * 0.9) || rect.top > Math.floor(window.innerHeight * 0.9)) // Vérifiez si l'élément n'est pas entièrement visible dans la fenêtre
            {
                enfant.children[0].classList.remove('visible_img');
                enfant.children[1].classList.remove('visible');
                if (enfant.children[3]) {
                    enfant.children[3].classList.remove('visible');
                }

                elementsNonVisibles.push(enfant);
            }
        }

    });

}


// gère le scroll au clic 
function ScrollToClick() {

    window.document.scrollingElement.style.scrollSnapType = 'none';
    // Vérifie si la position de défilement actuelle est inférieure à 10
    if (ScrollValue < 60) {

        // Fait défiler jusqu'à une position spécifique (top: 60) avec un comportement fluide
        window.scrollTo({
            top: 60,
            left: 0,
            behavior: "smooth",
        });


    }
    // Vérifie si la position de défilement actuelle est supérieure à 60
    else if (ScrollValue >= 60) {
        // Fait défiler jusqu'au haut de l'élément 'page_1' avec un comportement fluide
        window.scrollTo({
            top: document.getElementById('page_1').offsetTop,
            left: 0,
            behavior: "smooth",
        });

    }
    setTimeout(() => {
        window.document.scrollingElement.style.scrollSnapType = 'y mandatory';
    }, 500);
}

let stateTextePage2 = true;
// affiche le texte de la page 2
function AddTextPage2() {
    let text_page_2 = document.getElementById('text_page_2');
    let page_2_imageTRSP = document.getElementById('page_2_imageTRSP');

    if (stateTextePage2 == true) {
        stateTextePage2 = false;
        text_page_2.style.height = '420px';
        text_page_2.style.padding = '10px';
        page_2_imageTRSP.style.backgroundColor = ' rgba(0, 0, 0, 1)';



    } else if (stateTextePage2 == false) {
        text_page_2.style.height = '0px';
        text_page_2.style.padding = '0px';
        page_2_imageTRSP.style.backgroundColor = ' rgba(0, 0, 0, 0.3)';
        stateTextePage2 = true;
    }
}

// Ouvre la page Accueil
function AccueilClick() {

    if (document.getElementById('container_accueil').className == "container_accueil") {

        // ouvre la barre de navigation
        document.getElementById('container_accueil').classList.add('container_accueil_open');


    } else if (document.getElementById('container_accueil').className == "container_accueil container_accueil_open") {

        // ferme la barre de navigation
        document.getElementById('container_accueil').classList.remove('container_accueil_open');
    }


    // si nav list contient la class nav_list_mobile
    if (nav_list.className === "nav_list_mobile") {

        nav_list.classList.remove('nav_list_mobile');
        nav_list.classList.add('nav_list');

        container_nav_list_item.classList.remove('container_nav_list_item_mobile');
        container_nav_list_item.classList.add('container_nav_list_item');

        nav_list_btn_span_1.classList.remove('nav_croix_span_1');
        nav_list_btn_span_2.classList.remove('nav_croix_span_2');
        nav_list_btn_span_none.classList.remove('none');
    }


};

/** scroll la page à la hauteur donner par valeur 
 * @param {Number} ValToScroll - valeur en px 
 */
function ScrollToThePage(ValToScroll) {



    document.getElementById('container_accueil').classList.remove('container_accueil_open');

    window.document.scrollingElement.style.scrollSnapType = 'none';


    window.scrollTo({
        top: ValToScroll,
        left: 0,
        behavior: "smooth",
    });



    if (nav_list.className === "nav_list_mobile") {

        nav_list.classList.remove('nav_list_mobile');
        nav_list.classList.add('nav_list');

        container_nav_list_item.classList.remove('container_nav_list_item_mobile');
        container_nav_list_item.classList.add('container_nav_list_item');

        nav_list_btn_span_1.classList.remove('nav_croix_span_1');
        nav_list_btn_span_2.classList.remove('nav_croix_span_2');
        nav_list_btn_span_none.classList.remove('none');


    }

    setTimeout(() => {
        window.document.scrollingElement.style.scrollSnapType = 'y mandatory';
    }, 500);
};

/** affiche les images du dossier en les ajoutant au dom
    * @var requete = requete a passer au server
    * @var srcOfDossier = source du dossier contenant les images
    * @var containerID = id du container ou le contenue du dossier sera afficher
 */
function addImageDossier(requete, srcOfDossier, containerID) {

    let maRequete = new Request(requete);

    fetch(maRequete)
        .then((res) => res.json())
        .then((images) => {

            for (let i = 0; i < images.length; i++) {

                if (images[i] !== ".DS_Store") {
                    // récupère le chemin de l'image
                    const cheminImage = `${srcOfDossier}${images[i]}`;

                    // Créer un élément d'image
                    const imageElement = document.createElement('img');
                    imageElement.src = cheminImage;

                    // Ajouter l'élément d'image au DOM (à l'endroit souhaité)
                    document.getElementById(containerID).appendChild(imageElement);
                }
            }


        })
        .catch(error => console.error('Erreur lors de la récupération des images:', error));

}

// Numéro
addImageDossier("/images/liberte", "images/numeros/Liberte/", "Liberte");
addImageDossier("/images/pas_de_deux", "images/numeros/pas_de_deux/", "Pas_de_Deux");
addImageDossier("/images/jimmy", "images/numeros/jimmy/", "jimmy");
addImageDossier("/images/les_hercules", "images/numeros/les_hercules/", "les_hercules");
/* addImageDossier("/images/affiche_spectacle", "images/page_3/affiche_spectacle/", "affiche_spectacle"); */


async function afficheSpectacle() {
    const dateDuJour = new Date();
    const annee = dateDuJour.getFullYear();
    const mois = dateDuJour.getMonth() + 1;
    const jour = dateDuJour.getDate();
    await fetch(`http://192.168.1.100:3000/evenements/get`)
        .then((response) => response.json())
        .then((response) => {

            for (const i in response.Evenements) {
                let event = response.Evenements[i];
                // si la date de debut de l'évènement est supérieurs à la date de jour 
                if (event.date_de_fin > `${annee}-${mois < 10 ? "0" + mois : mois}-${jour}`) {

                    let child = document.createElement("div");
                    child.className = "page_5_container_evenement";

                    child.innerHTML = ` 
                     <img src='${event.chemin_de_limage}' alt="presentation Sylvie Willms" class="page_5_image" id="page_5_image" >
                    <div class="page_5_container_evenement_item_texte_left">
                            <h3>${event.nom}</h3>
                            <p>Date: ${event.date_de_debut} au ${event.date_de_fin}</p>
                        </div>

                        <div class="page_5_container_evenement_item_img">
                            <img src='${event.chemin_de_limage}'
                                alt="" class="image_page_5">
                        </div>
                    <div class="page_5_container_evenement_item_texte_right">
                       <a href="${event.lien}" target="_blank"  >
                          
                            <p>Acheter un billet</p>
                        </a>
                    </div>
                `;
                    page_5_container_evenement.prepend(child);

                } else {
                    const imageElement = document.createElement('img');
                    imageElement.src = event.chemin_de_limage;
                    affiche_spectacle.append(imageElement);
                }
            }

            console.log(page_5_container_evenement.children[0]);

            page_5_container_evenement.children[0].children[0].classList.add('visible_img');
            page_5_container_evenement.children[0].children[1].classList.add('visible');
            if (page_5_container_evenement.children[0].children[3]) {
                page_5_container_evenement.children[0].children[3].classList.add('visible');
            }
            if (page_5_container_evenement.length > 0) {
                page_5_container_evenement.scrollTo(page_5_container_evenement.children[0].scrollTop);
            }
        });
}

window.onload = function () {

    document.getElementById('container_loader').style.display = "none";
    document.getElementById('html').style.overflowY = 'scroll';

    afficheSpectacle();
    EventListener();
}
