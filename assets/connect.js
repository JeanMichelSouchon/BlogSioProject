// Fonction appelée lors de la soumission du formulaire de connexion
function login() {
    // Récupération des valeurs du formulaire
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Vérification des identifiants (c'est un exemple très basique, à remplacer par une vérification côté serveur dans un contexte réel)
    if (username === 'iziiak' && password === 'espoir15') {
        // Authentification réussie, stockage de l'information de connexion dans le localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirection vers la page principale
        window.location.href = 'index.html';
    } else if (username === 'gianni' && password === 'root') {
        // Authentification réussie, stockage de l'information de connexion dans le localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirection vers la page principale
        window.location.href = 'index.html';
    }else if (username === 'jules' && password === 'root') {
        // Authentification réussie, stockage de l'information de connexion dans le localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirection vers la page principale
        window.
        location.href = 'index.html';
    }
    else if (username === 'tristan' && password === 'root') {
        // Authentification réussie, stockage de l'information de connexion dans le localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirection vers la page principale
        window.location.href = 'index.html';
    }
    else if (username === 'jm' && password === 'root') {
        // Authentification réussie, stockage de l'information de connexion dans le localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);

        // Redirection vers la page principale
        window.location.href = 'index.html';
    }else
    {
        // Affichage d'un message d'erreur en cas d'authentification échouée
        alert('Identifiants incorrects');
    }

    // Empêche le formulaire de se soumettre normalement
    return false;
}