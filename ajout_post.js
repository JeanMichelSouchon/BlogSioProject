if (typeof(Storage) !== "undefined") {
    // Code pour le stockage local disponible
    // Vérifie si la todolist est déjà enregistrée dans le stockage local
    if (!localStorage.getItem("Post")) {
        // Si la todolist n'existe pas encore, on crée une liste vide
        localStorage.setItem("Post", JSON.stringify([]));
    }
} else {
    // Code pour le stockage local non disponible
    alert("Désolé, votre navigateur ne supporte pas le stockage local.");
}


function ajouterElement() {
    const inputElement = document.getElementById("post");
    const nouvelElement = inputElement.value;
    if (nouvelElement.trim() !== "") {
        const todolist = JSON.parse(localStorage.getItem("Post"));
        todolist.push(nouvelElement);
        localStorage.setItem("Post", JSON.stringify(todolist));
        //afficherTodolist();
        // Réinitialise le champ de saisie
        inputElement.value = "";
    }
}