const d = document,
  $content = d.querySelector(".content");

d.addEventListener("keypress", (e) => {
  let $template = `
  <div>
  <h2>${e.key.toUpperCase()}</h2>
  <p>Event Key</p>
  </div>

  <div>
  <h2>${e.keyCode}</h2>
  <p>Event Code</p>
  </div>

  <div>
  <h2>${e.code}</h2>
  <p>Event Code</p>
  </div>
  `;

  $content.innerHTML = $template;
});
