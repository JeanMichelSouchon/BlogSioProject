function searchKeyword() {
    var keyword = document.getElementById("keywordInput").value.toLowerCase();
    var results = [];

    // Parcourez le contenu de AfficheArticles.js
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
            resultElement.innerHTML = "<h2>" + results[i].title + "</h2><p>" + results[i].content + "</p>";
            resultsContainer.appendChild(resultElement);
        }
    }
}
