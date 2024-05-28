const footerHtml = `
  <ul>
    <li>
      F.A.Q
    </li>
    <li>
      Mentions égales
    </li>
    <li>
      Conditions générales
    </li>
    <li>
      <a href="mailto:viedemastris@gmail.com">Nous contacter </a>
    </li>
  </ul>
`;


  const [footer] = document.getElementsByTagName("footer");

  footer.innerHTML = footerHtml;

