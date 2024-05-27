// Fonction appelée lors de la soumission du formulaire de connexion
function login() {
  // Récupération des valeurs du formulaire
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const allowedUsersWithPassword = {
    iziiak: "espoir15",
    gianni: "root",
    jules: "root",
    tristan: "root",
    jm: "root",
  };

  if (allowedUsersWithPassword[username] === password) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    // Redirection vers la page principale
    window.location.href = "index.html";
  } else {
    // Affichage d'un message d'erreur en cas d'authentification échouée
    alert("Identifiants incorrects");
  }

  // Empêche le formulaire de se soumettre normalement
  return false;
}

function logout() {
  // Suppression des informations de connexion du localStorage
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");

  // Redirection vers la page de connexion
  window.location.href = "connect.html";
}

  var username = localStorage.getItem("username");

  if (username) {
    const coright = document.getElementById("coright");

    coright.innerHTML =
      "Connecté en tant que " +
      username +
      ' <button onclick="logout()">Se déconnecter</button>';
  } else {
    const connectLink = document.createElement("a");
    connectLink.href = "connect.html";
    connectLink.innerHTML = "Se connecter / S'inscrire";

    coright.appendChild(connectLink);
  }

