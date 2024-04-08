// met des articles bateau en attendant
const articles = [
    {
        "title": "Les Effets de la Méditation sur la Santé Mentale",
        "content": "La méditation est devenue un sujet d'intérêt croissant pour ses effets bénéfiques sur la santé mentale. Des études montrent que la pratique régulière de la méditation peut réduire le stress, l'anxiété et même améliorer la concentration. De plus en plus de personnes adoptent cette pratique millénaire pour cultiver le bien-être mental.",
        "author": "Iziiak le BG",
    },
    {
        "title": "L'Impact de la Technologie sur l'Éducation",
        "content": "L'avènement de la technologie a transformé la manière dont l'éducation est dispensée. Des outils tels que les tablettes, les ordinateurs et les logiciels éducatifs offrent des possibilités d'apprentissage innovantes. Cependant, des inquiétudes persistent quant à une dépendance excessive à la technologie et à son éventuel impact sur les compétences sociales des étudiants.",
        "author": "Sivis Pacem"
    },
    {
        "title": "Les Dangers de la Pollution Plastique dans les Océans",
        "content": "La pollution plastique constitue une menace croissante pour les écosystèmes marins. Chaque année, des millions de tonnes de plastique se retrouvent dans les océans, mettant en péril la vie marine et la santé des écosystèmes côtiers. Des efforts de sensibilisation et des mesures de réduction des déchets sont nécessaires pour lutter contre ce problème mondial.",
        "author": "Salim Aleykuum"
    }
  ]
/**
* ce bout de code ça va générer autant de blocs que ce que tu passes en `length` pour remplir tes articles
* le "stockage" des articles est fait en haut du bloc <script>
*/
const manyArticles = Array.from({ length: 3 }, () => articles[Math.floor(Math.random() * articles.length)]) /*change le numéro 3 part le nombre d'affichage d'articles voulu*/
for (const article of manyArticles) {
const articleNode = addArticle(article)
document.getElementById("articles").appendChild(articleNode)
}

document.querySelector(".connect").addEventListener("click", () => {
const asidesArticles = document.createElement("img")
asidesArticles.src = "assets/bg.png"
asidesArticles.style.width = "100%"
asidesArticles.style.height = "100%"
asidesArticles.style.position = "fixed"
asidesArticles.style.top = "0"
asidesArticles.style.left = "0"

document.querySelector("body").appendChild(bg)
setTimeout(() => {
  document.querySelector("body").removeChild(bg)
}, 80)
})
