

/**
* cette fonction elle génère du code HTML,
*/
function addArticle (json) {
const article = document.createElement("div")
article.classList.add("article")

const articleTitle = document.createElement("div")
articleTitle.classList.add("article__title")
articleTitle.innerHTML = json.title
articleTitle.setAttribute("data-author", `par ${json.author}`)
article.appendChild(articleTitle)

const articleContent = document.createElement("div")
articleContent.classList.add("article__content__short")
articleContent.innerHTML = json.content
article.appendChild(articleContent)

const articleLink = document.createElement("a")
articleLink.innerText = "En savoir plus"
article.appendChild(articleLink)

article.addEventListener("click", () => {
  const clone = article.cloneNode([true]);
  clone.classList.add("full-article")
  const [link] = clone.getElementsByTagName("a")
  clone.removeChild(link)

  document.getElementById("content").innerHTML = ''
  document.getElementById("content").appendChild(clone)
})
return article
}
