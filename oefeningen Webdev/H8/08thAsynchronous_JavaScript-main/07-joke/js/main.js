function init() {
  document.getElementById('joke').onclick = getData;
}

function toHtml({ category, setup, delivery }) {
  document.getElementById('category').innerText = `Category = ${category}`;
  document.getElementById('setup').innerText = `Q: ${setup}`;
  document.getElementById('delivery').innerText = `A: ${delivery}`;
}

window.onload = init;
