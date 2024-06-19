
let chemin = document.getElementById('chemin_de_limage');
let btn = document.getElementById('Label_chemin_de_limage');
let nom = document.getElementById('nom');
let date_de_debut = document.getElementById('date_de_debut');
let date_de_fin = document.getElementById('date_de_fin');
let lien = document.getElementById('lien');

let container_form = document.getElementById('container_form');
let container_info = document.getElementById('container_info');
let title_await = document.getElementById('title_await');
let title_err = document.getElementById('title_err');

const preview = document.getElementById('image');
const background = document.getElementById('image_background');

const container_all_affiche = document.getElementById('affiche_container');
const container_all_affiches = document.getElementById('container_all_affiches');
const container_all_affiche_item_texte_right = document.getElementById('container_all_affiche_item_texte_right');
const container_all_affiche_item_texte_left = document.getElementById('container_all_affiche_item_texte_left');
const full = document.getElementById('full');




// gère l'affichage du preview lors de l'ajout d'une image
chemin.addEventListener("change", () => {

    btn.style.height = "100px";
    btn.textContent = "Modifier l'affiche";
    btn.style.position = "absolute";


    const fileReader = new FileReader();

    fileReader.onload = event => {
        preview.setAttribute('src', event.target.result);
        background.setAttribute('src', event.target.result);
    }
    fileReader.readAsDataURL(chemin.files[0]);

})

/** vérifie que les information du formulaire son bien remplie */
function veriform() {
    if (nom.value) {
        nom.style.border = "none";
        if (date_de_debut.value) {
            date_de_debut.style.border = "none";
            if (date_de_fin.value) {
                date_de_fin.style.border = "none";
                if (chemin.files[0]) {
                    btn.style.border = "none"
                    if (lien.value) {
                        lien.style.border = "none"
                        submit()
                    } else {
                        lien.style.border = "1px solid red";

                    }
                } else {
                    btn.style.border = "1px solid red";
                }

            } else {
                date_de_fin.style.border = "1px solid red";
            }
        } else {
            date_de_debut.style.border = "1px solid red";
        }
    } else {
        nom.style.border = "1px solid red";
    }
}

/**  requête le serveur pour ajouter l'évenement dans la base de donner */
function submit() {

    container_form.style.filter = "blur(5px)";

    container_info.style.display = "flex";
    title_await.style.display = "flex";

    const formData = new FormData();

    // Ajoutez les champs de texte
    formData.append('nom', nom.value);
    formData.append('date_de_debut', date_de_debut.value);
    formData.append('date_de_fin', date_de_fin.value);
    formData.append('lien', lien.value);

    // Ajoutez l'image
    formData.append('image', chemin.files[0], chemin.files[0].name);
    console.log(formData);


    const options = {
        method: 'POST',
        body: formData
    };


    fetch(`http://192.168.1.100:3000/evenements/add`, options)
        .then((response) => {
            if (response) {
                console.log(response);

                if (response.status === 200) {

                    container_form.style.filter = "blur(0px)";
                    title_await.style.display = "none";
                    nom.value = "";
                    date_de_debut.value = "";
                    date_de_fin.value = "";
                    chemin.files[0] = "";
                    preview.setAttribute('src', "");
                    background.setAttribute('src', "");
                    lien.value = "";
                    btn.textContent = "Ajouter une affiche";
                    window.location.reload();


                } else if (response.status === 500) {

                    container_form.style.filter = "blur(0px)";
                    container_info.style.display = "flex";
                    title_err.style.display = "flex";
                }

            }


        })
        .catch((err) => {
            console.log(err);
            container_form.style.filter = "blur(0px)";
            title_err.style.display = "block";
        })
}

let elementsNonVisibles = [];
let elementVisible = container_all_affiche.children[0];



container_all_affiche.addEventListener('scroll', (event) => {


    // Récupérez tous les enfants du conteneur de défilement
    const enfants = container_all_affiche.children;

    // Parcourez les enfants pour trouver celui qui est actuellement visible

    for (let enfant of enfants) {
        elementsNonVisibles = [];

        let rect = enfant.getBoundingClientRect();

        // Vérifiez si l'élément est actuellement visible dans la fenêtre
        if (rect.top <= Math.floor(window.innerHeight * 0.9) && rect.bottom >= Math.floor(window.innerHeight * 0.9)) {
            enfant.children[0].classList.add('visible_img');
            enfant.children[2].classList.add('visible');
            enfant.children[1].classList.add('visible');

            if (enfant.children[3]) {
                enfant.children[3].classList.add('visible');
            }
            elementVisible = enfant;

        } else if (rect.bottom < Math.floor(window.innerHeight * 0.9) || rect.bottom > Math.floor(window.innerHeight * 0.9) || rect.top < Math.floor(window.innerHeight * 0.9) || rect.top > Math.floor(window.innerHeight * 0.9)) // Vérifiez si l'élément n'est pas entièrement visible dans la fenêtre
        {
            enfant.children[0].classList.remove('visible_img');
            enfant.children[2].classList.remove('visible');
            enfant.children[1].classList.remove('visible');
            if (enfant.children[3]) {
                enfant.children[3].classList.remove('visible');
            }
            elementsNonVisibles.push(enfant);
        }
    }


})





/** récupère et affiche tout les affiche de spectacle disponible */
function afficheSpectacle() {
    const dateDuJour = new Date();
    const annee = dateDuJour.getFullYear();
    const mois = dateDuJour.getMonth() + 1;
    const jour = dateDuJour.getDate();
    fetch(`http://192.168.1.100:3000/evenements/get`)
        .then((response) => response.json())
        .then((response) => {


            for (const i in response.Evenements) {

                let event = response.Evenements[i];

                // si la date de debut de l'évènement est supérieurs à la date de jour 
                /* if (event.date_de_debut > `${annee}-${mois < 10 ? "0" + mois : mois}-${jour}`) { */
                console.log(event);
                console.log(event._id);
                let child = document.createElement("div");
                child.className = "container_affiche";
                child.id = event._id;

                child.innerHTML = ` 
                     <img src='${event.chemin_de_limage}' alt="presentation Sylvie Willms" class="background_image" id="background_image" >

                   
                    <div class="container_all_affiche_item_texte_left" id="container_all_affiche_item_texte_left">
                            <h3>${event.nom}</h3>
                            <p>Date: ${event.date_de_debut} au ${event.date_de_fin}</p>
                        </div>
                        <div class="full" id="full">
                            <div class="container_all_affiche_item_img">
                            <p class="onclick" onclick="deleted('${event._id}')">supprimer</p>
                                <img src='${event.chemin_de_limage}'
                                    alt="" class="image_page_5">
                            </div>
                         </div>
                    <div class="container_all_affiche_item_texte_right" id="container_all_affiche_item_texte_right">
                       <a href="${event.lien}" target="_blank"  >
                          
                            <p>Acheter un billet</p>
                        </a>
                    </div>
`;
                container_all_affiche.appendChild(child)
            }
            if (container_all_affiche.children[0]) {
                console.log(container_all_affiche);
                container_all_affiche.children[0].children[0].classList.add('visible_img');
                container_all_affiche.children[0].children[2].classList.add('visible');
                container_all_affiche.children[0].children[1].classList.add('visible');

                if (container_all_affiche.children[0].children[3]) {
                    container_all_affiche.children[0].children[3].classList.add('visible');
                }
            }
            /*       } */

        })
        .catch((err) => { console.log(err) });

}
afficheSpectacle();


/** supprime l'évènement sélectionné
 * @param {string} event id de l'évènement
 */
async function deleted(event) {

    const body = {
        id: event
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    };

    await fetch(`http://192.168.1.100:3000/evenements/deleted`, options)
        .then((response) => response.json())
        .then((response) => {

            if (response.status === 200) {
                document.getElementById(event).style.height = "0%";
                document.getElementById(event).style.overflow = "hidden";
            }
        })
        .catch((err) => console.log(err))

}

container_all_affiches.addEventListener('scroll', (event) => {
    if (container_all_affiches.scrollTop === 0) {

        if (container_all_affiche.children[0]) {
            container_all_affiche.children[0].children[0].classList.remove('visible_img');
            container_all_affiche.children[0].children[1].classList.remove('visible');
            container_all_affiche.children[0].children[3].classList.remove('visible');
            if (container_all_affiche.children[0].children[4]) {
                container_all_affiche.children[0].children[4].classList.remove('visible');
            }
        }
    }



})
// au chargement du document 
window.onload = function () {



    container_all_affiches.addEventListener('scroll', (event) => {


        if (container_all_affiches.scrollTop === 0) {
            background.classList.remove('visible_img')

        }
    })
}