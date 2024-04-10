if (typeof(Storage) !== "undefined") {
    // Code pour le stockage local disponible
    // Vérifie si la todolist est déjà enregistrée dans le stockage local
    if (!localStorage.getItem("Post")) {
        // Si la todolist n'existe pas encore, on crée une liste vide
        localStorage.setItem("Post", JSON.stringify([]));
    }
    if (!localStorage.getItem("Nom")) {
        // Si la todolist n'existe pas encore, on crée une liste vide
        localStorage.setItem("Nom", JSON.stringify([]));
    }
} else {
    // Code pour le stockage local non disponible
    alert("Désolé, votre navigateur ne supporte pas le stockage local.");
}
const inputElement = document.getElementById("post");
const inputNom = document.getElementById("nom");
function ajouter(){                                         //j'ai pas reussi a faire marcher autrement sans faire de fonction ajouter
    insertElement(inputElement, "Post")                    //fin j'ai reussi mais apres le code etait trop grand, ct pour le reduire
    insertElement(inputNom, "Nom")                         //la on a juste a definir les variables qui récupere avec les id, et a appeler la fonction avec son nom
}

function insertElement(element, inputId) {
    const nouvelElement = element.value;            //récupère la valeur de l'élément et le nom de la ou il doit le stocker
    if (nouvelElement.trim() !== "") {              //si l'élément n'est pas vide.     trim() = enlever les espaces en debut et fin de l'element
        const todolist = JSON.parse(localStorage.getItem(inputId));     //transforme l'element en objet ?
        todolist.push(nouvelElement);                                   //push l'element dans le local storage
        localStorage.setItem(inputId, JSON.stringify(todolist));        //transforme l'element un string
        //afficherTodolist();
        // Réinitialise le champ de saisie
        element.value = "";                                             //remet le champs vide
    }
    
}