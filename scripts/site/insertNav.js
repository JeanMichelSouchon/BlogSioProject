const navHTML = `
  <a href="index.html">
    All
  </a>
  <a href="">
    Aléatoire
  </a>
  <a href="qui-somme-nous.html">
    Qui sommes-nous ?
  </a>
  <a href="ajouter-article.html">
    + Ajouter un article
  </a>

  <hr/>

  <div class="searchbutton">
    <input
      type="text"
      id="keywordInput"
      placeholder="Rechercher un mot-clé..."
    />
    <button onclick="searchKeyword()">Rechercher</button>
  </div>
`;

function afficheNav(){
  const nav = document.createElement("nav");
  const script = document.scripts[document.scripts.length - 1];

  nav.innerHTML = navHTML;

  script.parentElement.insertBefore(nav, script);
}
afficheNav();


