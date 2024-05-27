const form = document.getElementById("vdm-form");

      function submitVDM(event) {
        event.preventDefault();

        const author = document.getElementById("nom").value;
        const title = document.getElementById("titre").value;
        const content = document.getElementById("vdm").value;

        const newArticle = {
          title,
          content,
          author,
          category: "Autres",
          likes: 0,
        };

        const articles = JSON.parse(localStorage.getItem("myArticles"));

        articles.unshift(newArticle);

        localStorage.setItem("myArticles", JSON.stringify(articles));

        alert("Merci ! Votre VDM a été sauvée");

        document.getElementById("nom").value = "";
        document.getElementById("titre").value = "";
        document.getElementById("vdm").value = "";
        window.location.href = "index.html";
      }

      form.addEventListener("submit", submitVDM);