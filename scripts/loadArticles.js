const defaultArticles = [
  {
    title: "Les Effets de la Méditation sur la Santé Mentale",
    content:
      "La méditation est devenue un sujet d'intérêt croissant pour ses effets bénéfiques sur la santé mentale. Des études montrent que la pratique régulière de la méditation peut réduire le stress, l'anxiété et même améliorer la concentration. De plus en plus de personnes adoptent cette pratique millénaire pour cultiver le bien-être mental.",
    author: "Iziiak le BG",
    category: "Meuf",
    likes: 0,
  },

  {
    title: "L'Impact de la Technologie sur l'Éducation",
    content:
      "L'avènement de la technologie a transformé la manière dont l'éducation est dispensée. Des outils tels que les tablettes, les ordinateurs et les logiciels éducatifs offrent des possibilités d'apprentissage innovantes. Cependant, des inquiétudes persistent quant à une dépendance excessive à la technologie et à son éventuel impact sur les compétences sociales des étudiants.",
    author: "Sivis Pacem",
    category: "Bouffe",
    likes: 0,
  },
  {
    title: "Les Dangers de la Pollution Plastique dans les Océans",
    content:
      "La pollution plastique constitue une menace croissante pour les écosystèmes marins. Chaque année, des millions de tonnes de plastique se retrouvent dans les océans, mettant en péril la vie marine et la santé des écosystèmes côtiers. Des efforts de sensibilisation et des mesures de réduction des déchets sont nécessaires pour lutter contre ce problème mondial.",
    author: "Salim Aleykuum",
    category: "Meuf",
    likes: 0,
  },
  {
    title: "Euh, pardon ?",
    content:
      "Aujourd'hui, je rejoins ma copine en boîte. Elle prend la main du mec avec qui elle parlait et me présente comme 'Guillaume, mon ex.'",
    author: "vertetor",
    category: "Lifestyle",
    likes: 0,
  },
  {
    title: "Nope",
    content:
      "Aujourd'hui, mon fils est en pleine crise d'adolescence. Il répond 'Non' à tout ce qu'on lui dit, demande les choses en ronchonnant et ne nous dit plus 'Papa' et 'Maman', mais nous appelle par nos prénoms. Mon fils a deux ans.",
    author: "Madre",
    category: "Bouffe",
    likes: 0,
  },
  {
    title: "Merci la Police!",
    content:
      "Aujourd'hui, une voiture de gendarmerie me double et me bloque immédiatement la route façon Starsky & Hutch. Les militaires me collent 4 points et 135€ pour avoir grillé un Stop situé plusieurs dizaines de kilomètres plus tôt. Stop par lequel je ne suis même pas passé. ",
    author: "CZB",
    category: "Voiture",
    likes: 0,
  },
  {
    title: "T'as une Touche!",
    content:
      "Aujourd'hui, en cours d'EPS, la fille que j'aime m'appelle par mon prénom puis me jette un ballon de basket. Je me le suis pris en pleine tête, et je suis tombé par terre. L'amour rend sourd, pas aveugle.",
    author: "Twee",
    category: "Meuf",
    likes: 0,
  },
];

function getStoredArticles() {
  const articlesString = localStorage.getItem("myArticles");
  if (!articlesString) return defaultArticles;
  return JSON.parse(articlesString);
}


function displayArticle(json, isHighlight = false) {
  
  //crée les éléments des articles
  const article = document.createElement("div");
  article.classList.add("article");
  //crée les blocks de l'article ( titre, autheur )
  const articleTitle = document.createElement("div");
  articleTitle.classList.add("article__title");
  articleTitle.innerHTML = json.title;
  articleTitle.setAttribute("data-author", `par ${json.author}`);
  article.appendChild(articleTitle);

  // si l'élément est mis en avant ou non ( lorsque l'on clique sur un artcile de la liste)
  const articleContent = document.createElement("div");
  const articleContentClass = isHighlight
    ? "article__content__highlight"
    : "article__content__short";
  articleContent.classList.add(articleContentClass);
  //crée les blocks de l'article ( catégorie )
  const articleCategoryHTML = document.createElement("div");
  articleCategoryHTML.innerHTML = json.category;
  articleCategoryHTML.classList.add("article__category");
  article.appendChild(articleCategoryHTML);
//récupère le contenu de l'article 
  articleContent.innerHTML = json.content;
  article.appendChild(articleContent);

  if (!isHighlight) {// si l'article est mis en avant
    //on centre le like est le like et le dislike
    const articleIcons = document.createElement("div");
    articleIcons.style.display = "flex";
    articleIcons.style["justify-content"] = "center";

    const likeIcon = document.createElement("img");
    likeIcon.src = "./assets/fire.svg";

    const dislikeIcon = document.createElement("img");
    dislikeIcon.style["margin-left"] = "24px";
    dislikeIcon.src = "./assets/dislike.svg";
    // permet d'ajouter des likes et les stock dans le local storage
    likeIcon.addEventListener("click", (e) => {
      e.stopPropagation();

      const articles = getStoredArticles();
      // récupère l'index par le titre
      const articleIndex = articles.findIndex(
        (article) => article.title === json.title
      );
      //ajout du like
      articles.splice(articleIndex, 1, {
        ...articles[articleIndex],
        likes: articles[articleIndex].likes + 1,
      });

      localStorage.setItem("myArticles", JSON.stringify(articles));
      //actualise les articles
      initArticles();
    });

    articleIcons.appendChild(likeIcon);
    //display nombre de like
    if (json.likes > 0) {
      const likesCount = document.createElement("div");

      likesCount.style.color = "red";
      likesCount.style["font-weight"] = "bold";
      likesCount.style["font-size"] = "10px";
      likesCount.style.position = "absolute";
      likesCount.style["margin-left"] = "-20px";

      likesCount.innerHTML = json.likes;

      articleIcons.appendChild(likesCount);
    }

    articleIcons.appendChild(dislikeIcon);
    article.appendChild(articleIcons);
  }
  //partie pour cliquer pour mettre en avant l'article
  const articleLink = document.createElement("a");
  articleLink.style.color = "var(--color-primary)";
  articleLink.innerText = "En savoir plus";
  article.appendChild(articleLink);

  article.addEventListener("click", () => {
    const clone = article.cloneNode([true]);
    clone.classList.add("full-article");
    const [link] = clone.getElementsByTagName("a");
    clone.removeChild(link);
    //vide le contenu de la page pour mettre l'article
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(clone);

    const [main] = document.getElementsByTagName("main");
    const aside = document.getElementById("articles");
    // main.removeChild(aside);
  });

  return article;
}

function initArticles() {
  const articles = getStoredArticles();

  document.getElementById("content").innerHTML = "";

  for (const article of articles) {
    const articleNode = displayArticle(article);
    document.getElementById("content").appendChild(articleNode);
  }

  if (!localStorage.getItem("myArticles"))
    localStorage.setItem("myArticles", JSON.stringify(articles));
}

function displayMostLikedArticle() {
  const articles = getStoredArticles();

  const mostLikedArticle = articles.sort((a, b) => b.likes - a.likes)[0];

  const articleHTML = displayArticle(mostLikedArticle, true);

  document.getElementById("mostLiked").appendChild(articleHTML);
}

function getCategories() {
  const articles = getStoredArticles();

  const categories = articles.map((article) => article.category);

  const categoriesHTML = document.getElementById("categories");

  const seenCategories = [];

  for (const category of categories) {
    if (seenCategories.includes(category)) continue;

    const categoryHTML = document.createElement("div");
    categoryHTML.innerHTML = category;

    categoriesHTML.appendChild(categoryHTML);

    seenCategories.push(category);
  }
}

function searchKeyword() {
  const articles = getStoredArticles();
  var keyword = document.getElementById("keywordInput").value.toLowerCase();
  var results = [];

  for (var i = 0; i < articles.length; i++) {
    var articleContent = articles[i].content.toLowerCase();
    if (articleContent.includes(keyword)) {
      results.push(articles[i]);
    }
  }

  displayResults(results);
}

function displayResults(results) {
  var resultsContainer = document.getElementById("content");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>Aucun résultat trouvé.</p>";
  } else {
    for (var i = 0; i < results.length; i++) {
      var resultElement = document.createElement("div");
      resultElement.innerHTML =
        "<h2>" + results[i].title + "</h2><p>" + results[i].content + "</p>";
      resultsContainer.appendChild(resultElement);
    }
  }

  const [main] = document.getElementsByTagName("main");
  const aside = document.getElementById("articles");
  main.removeChild(aside);
}


initArticles();

displayMostLikedArticle();

getCategories();

