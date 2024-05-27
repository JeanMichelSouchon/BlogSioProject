const headerLeft = `
  <h1>VDM</h1>
`;

const headerRight = `
  <div class="connect">
    <div id="coright">
    </div>

    <img src="assets/user.svg" color="white"/>
  </div>
`;

function afficheHeader() {
  const header = document.createElement("div");
  const script = document.scripts[document.scripts.length - 1];

  header.innerHTML = headerLeft + headerRight;
  header.classList.add("header-top");

  script.parentElement.insertBefore(header, script);
};
afficheHeader();
